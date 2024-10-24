# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación en el contenedor
COPY . .

# Exponer el puerto en el que la aplicación escucha
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "backend/app.js"]
