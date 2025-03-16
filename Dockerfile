
# Imagen base oficial de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de producción
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Transpilar el código fuente usando Babel
RUN npm start

# Exponer el puerto de la aplicación (cambia según sea necesario)
EXPOSE 3000

# Comando de inicio de la aplicación
CMD ["node", "src/index.js"]
