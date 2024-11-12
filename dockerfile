# Usa una imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará tu aplicación (cámbialo si usas otro puerto)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
