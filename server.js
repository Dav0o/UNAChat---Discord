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
	issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Importar el módulo de validación
var validator = require('./unalib/index.js');

// Redirigir al dashboard si el usuario ya está autenticado
app.get('/', (req, res) => {
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
app.get('/dashboard', requiresAuth(), function (req, res) {
	res.sendFile(__dirname + '/dashboard.html');
});

// Estructura en memoria para almacenar mensajes por canal
let messagesByChannel = new Map([
	['general', []],
	['deberes-ayuda', []],
	['planificación', []],
	['memes', []],
]);

// Lista para almacenar los usuarios conectados por canal
let activeUsers = new Map();

io.on('connection', function (socket) {
	socket.on('joinChannel', function ({ channel, username }) {
		if (!['general', 'deberes-ayuda', 'planificación', 'memes'].includes(channel)) {
			return socket.emit('error', 'Canal no válido');
		}

		// Validar el nombre de usuario
		if (
			!username ||
			typeof username !== 'string' ||
			username.includes('..') ||
			username.includes('/')
		) {
			return socket.emit('error', 'Nombre de usuario no válido');
		}

		socket.join(channel);

		if (messagesByChannel.has(channel)) {
			socket.emit('loadMessages', messagesByChannel.get(channel));
		}

		if (!activeUsers.has(channel)) {
			activeUsers.set(channel, []);
		}
		const users = activeUsers.get(channel);
		if (!users.includes(username)) {
			users.push(username);
		}

		io.to(channel).emit('updateUsers', users);
	});

	socket.on('Evento-Mensaje-Server', function ({ channel, msg }) {
		if (!['general', 'deberes-ayuda', 'planificación', 'memes'].includes(channel)) {
			return socket.emit('error', 'Canal no válido');
		}

		// Validación del mensaje
		const validatedMsg = validator.validateMessage(msg);

		if (messagesByChannel.has(channel)) {
			messagesByChannel.get(channel).push(validatedMsg);
		}

		io.to(channel).emit('Evento-Mensaje-Server', validatedMsg);
	});

	socket.on('disconnect', function () {
		for (let [channel, users] of activeUsers.entries()) {
			const userIndex = users.indexOf(socket.username);
			if (userIndex !== -1) {
				users.splice(userIndex, 1);
				io.to(channel).emit('updateUsers', users);
			}
		}
	});
});

http.listen(port, function () {
	console.log('listening on *:' + port);
});
