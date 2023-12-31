-- SCRIPT SQL PARA LA CREACION DE LA BASE DE DATOS Y LAS TABLAS, SE COPIA Y SE PEGA EN DBEAVER, Y SE EJECUTA
-- 1_ SI EXISTE LA BASE DE DATOS, SE BORRA EL CONTENIDO
-- 2_ SI NO EXISTE LA BASE DE DATOS, SE CREA
-- 3_ SE SELECCIONA LA BASE DE DATOS PARA POSTERIORMENTE CREAR LAS TABLAS
-- 4_ CREACION DE LAS TABLAS

DROP DATABASE IF EXISTS ecommerce;

CREATE DATABASE IF NOT EXISTS ecommerce 
	CHARACTER SET utf8mb4 
	COLLATE utf8mb4_general_ci;

USE ecommerce;

CREATE TABLE IF NOT EXISTS marcas (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	marca VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	categoria VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS productos (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sku VARCHAR(255) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	precio FLOAT NOT NULL,
	descuento FLOAT,
	descripcion VARCHAR(255) NOT NULL,
    ancho FLOAT NOT NULL,
	alto FLOAT NOT NULL,
	profundidad FLOAT NOT NULL,
	peso FLOAT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    oferta BOOLEAN NOT NULL,
	marca_id INT NOT NULL,
	categoria_id INT NOT NULL,
    KEY `productos_marca_fk` (`marca_id`),
    KEY `productos_categoria_fk` (`categoria_id`),
    CONSTRAINT `productos_marca_fk` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`),
    CONSTRAINT `productos_categoria_fk` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
);

CREATE TABLE IF NOT EXISTS roles (
    tipo VARCHAR(255) PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	fullName VARCHAR(255) NOT NULL,
	country VARCHAR(255) NOT NULL,
	telefono VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	avatar VARCHAR(255) NOT NULL,
    rol_tipo VARCHAR(255) NOT NULL,
    KEY `usuarios_rol_fk` (`rol_tipo`),
    CONSTRAINT `usuarios_rol_fk` FOREIGN KEY (`rol_tipo`) REFERENCES `roles` (`tipo`)
);

CREATE TABLE IF NOT EXISTS carritos (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	cantidad INT NOT NULL,
    usuario_id INT NOT NULL,
	producto_id INT NOT NULL,
    KEY `carritos_usuario_fk` (`usuario_id`),
    KEY `carritos_producto_fk` (`producto_id`),
    CONSTRAINT `carritos_usuario_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
    CONSTRAINT `carritos_producto_fk` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
);