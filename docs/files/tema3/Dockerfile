
# Imagen a usar
FROM alpine:latest

# Instalacion paquete nginx como super usuario
RUN apk add nginx

# Creacion de usuario
RUN adduser -D userIV

# Se indica que se utiliza el usuario creado
USER userIV

# Ejecuta una orden del sistema
CMD ls
