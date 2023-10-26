# SCRIPT SQL PARA LA CREACION DE LA BASE DE DATOS Y LAS TABLAS, SE COPIA Y SE PEGA EN DBEAVER, Y SE EJECUTA
# 1_ SI EXISTE LA BASE DE DATOS, SE BORRA EL CONTENIDO
# 2_ SI NO EXISTE LA BASE DE DATOS, SE CREA
# 3_ SE SELECCIONA LA BASE DE DATOS PARA POSTERIORMENTE CREAR LAS TABLAS
# 4_ CREACION DE LAS TABLAS

DROP DATABASE IF EXISTS ecommerce;

CREATE DATABASE IF NOT EXISTS ecommerce 
	CHARACTER SET utf8mb4 
	COLLATE utf8mb4_general_ci;

USE ecommerce;

CREATE TABLE IF NOT EXISTS productos (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	sku VARCHAR(255) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	precio FLOAT NOT NULL,
	descripcion VARCHAR(255) NOT NULL,
    ancho FLOAT NOT NULL,
	alto FLOAT NOT NULL,
	profundidad FLOAT NOT NULL,
	peso FLOAT NOT NULL,
	marca_id INT NOT NULL,
	categoria_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
	direccion VARCHAR(255) NOT NULL,
	telefono VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	usuario VARCHAR(255) NOT NULL,
	clave VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS carritos (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	cantidad int NOT NULL,
    usuario_id BINARY(16) NOT NULL,
	producto_id BINARY(16) NOT NULL
);

CREATE TABLE IF NOT EXISTS stocks (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    stock int NOT NULL,
	product_id BINARY(16) NOT NULL
);

CREATE TABLE IF NOT EXISTS marcas (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	marca VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	categoria VARCHAR(255) NOT NULL
);