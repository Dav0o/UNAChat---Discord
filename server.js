// Librerías
require('dotenv').config(); 
var app = require('express')();
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Importar el módulo de validación
var validator = require('./unalib/index.js');

// Redirigir al dashboard si el usuario ya está autenticado
app.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.redirect('/dashboard');
  } else {
    res.sendFile(__dirname + '/index.html'); 
  }
});

app.get('/logout', (req, res) => {
  res.oidc.logout({ returnTo: process.env.AUTH0_BASE_URL });
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Ruta para el dashboard protegida
app.get('/dashboard', requiresAuth(), function(req, res){
  res.sendFile(__dirname + '/dashboard.html');
});

// Estructura en memoria para almacenar mensajes por canal
let messagesByChannel = {
  general: [],
  "deberes-ayuda": [],
  planificación: [],
  memes: []
};

// Lista para almacenar los usuarios conectados por canal
let activeUsers = {};

io.on('connection', function(socket){

  // Unirse a un canal
  socket.on('joinChannel', function({ channel, username }) {
    socket.join(channel);
    
    // Enviar mensajes anteriores del canal al usuario que se acaba de conectar
    if (messagesByChannel[channel]) {
      socket.emit('loadMessages', messagesByChannel[channel]);
    }

    // Añadir el usuario a la lista de usuarios activos
    if (!activeUsers[channel]) activeUsers[channel] = [];
    if (!activeUsers[channel].includes(username)) {
      activeUsers[channel].push(username);
    }

    // Notificar a todos en el canal la lista actualizada de usuarios
    io.to(channel).emit('updateUsers', activeUsers[channel]);
  });

  // Manejar mensajes en un canal específico
  socket.on('Evento-Mensaje-Server', function({ channel, msg }){
    // Validar el mensaje
    var validatedMsg = validator.validateMessage(msg);
    
    // Guardar el mensaje en la estructura en memoria
    if (messagesByChannel[channel]) {
      messagesByChannel[channel].push(validatedMsg);
    }

    // Emitir el mensaje solo en el canal correspondiente
    io.to(channel).emit('Evento-Mensaje-Server', validatedMsg);
  });

  // Cuando un usuario se desconecta, eliminamos su nombre de la lista de usuarios activos
  socket.on('disconnect', function() {
    for (let channel in activeUsers) {
      const userIndex = activeUsers[channel].indexOf(socket.username);
      if (userIndex !== -1) {
        activeUsers[channel].splice(userIndex, 1);
        io.to(channel).emit('updateUsers', activeUsers[channel]);
      }
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
