/*DATOS PARA POBLAR LA BASE*/

/*CATEGORIAS*/
INSERT INTO ecommerce.categorias (categoria) VALUES('Heladeras');
INSERT INTO ecommerce.categorias (categoria) VALUES('Lavarropas');
INSERT INTO ecommerce.categorias (categoria) VALUES('Cocinas');
INSERT INTO ecommerce.categorias (categoria) VALUES('Microondas');
INSERT INTO ecommerce.categorias (categoria) VALUES('Lavavajillas');
INSERT INTO ecommerce.categorias (categoria) VALUES('Hornos');

/*MARCAS*/
INSERT INTO ecommerce.marcas (marca) VALUES('Whirlpool');

/*HELADERAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL1', 'Heladera Bottom Mount Blanca Whirlpool 588 Lts', 3099999, 20, 'HELADERA1', 10, 20, 30, 40, 'hel1.jpg', 1, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL2', 'Heladera Whirlpool No Frost Xpert Inverter 443 Lts', 2659999, NULL, 'HELADERA2', 10, 20, 30, 40, 'hel2.jpg', 1, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL3', 'Heladera Whirlpool French Door Bottom Mount 554 Lts', 2754999, 5, 'HELADERA3', 10, 20, 30, 40, 'hel3.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL4', 'Heladera Bottom Mount Inox Whirlpool 588 Lts', 2802499, 15, 'HELADERA4', 10, 20, 30, 40, 'hel4.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL5', 'Heladera Whirlpool No Frost Xpert Inverter de 462 Lts', 2849999, NULL, 'HELADERA5', 10, 20, 30, 40, 'hel5.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL6', 'Heladera Side By Side Whirlpool No Frost Inverter de 518 Lts', 2925999, 12, 'HELADERA6', 10, 20, 30, 40, 'hel6.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL7', 'Heladera Bottom Mount Inox Whirlpool 588 Lts', 3335589, NULL, 'HELADERA7', 10, 20, 30, 40, 'hel7.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL8', 'Heladera Whirlpool Top Mount Inox 451 ltrs No Frost', 3456896, 12, 'HELADERA8', 10, 20, 30, 40, 'hel8.jpg', 0, 1, 1);

/*LAVARROPAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV1', 'Lavarropas Whirlpool Carga Superior 7,5 KG 750 RPM Blanco', 759999, 15, 'LAVARROPA1', 10, 20, 30, 40, 'lav1.jpg', 1, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV2', 'Lavarropas Whirlpool Carga Superior 11 KG Blanco', 1199999, 25, 'LAVARROPA2', 10, 20, 30, 40, 'lav2.jpg', 1, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV3', 'Lavarropas Whirlpool Carga Superior 6 KG 1200 RPM', 1249999, NULL, 'LAVARROPA3', 10, 20, 30, 40, 'lav3.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV4', 'Lavarropas Whirlpool 8kg - 1200rpm Blanco Inverter', 949999, 8, 'LAVARROPA4', 10, 20, 30, 40, 'lav4.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV5', 'Lavarropas Whirlpool Xpert Dual Wash 10 KG', 1099999, NULL, 'LAVARROPA5', 10, 20, 30, 40, 'lav5.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV6', 'Lavarropas Whirlpool 9kg - 1400rpm Blanco Inverter', 1399999, 15, 'LAVARROPA6', 10, 20, 30, 40, 'lav6.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV7', 'Lavarropas Whirlpool 7kg - 1200rpm Blanco Inverter', 799999, NULL, 'LAVARROPA7', 10, 20, 30, 40, 'lav7.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV8', 'Lavarropas Whirlpool 9,5kg - 1400rpm Blanco Inverter', 1498452, 15, 'LAVARROPA8', 10, 20, 30, 40, 'lav8.jpg', 0, 1, 2);

/*COCINAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC1', 'Cocina a gas Whirlpool inoxidable 51 cm con Grill', 925999, 5, 'COCINA1', 10, 20, 30, 40, 'coc1.jpg', 1, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC2', 'Cocina a gas Whirlpool Blanca 49 cm', 969999, 15, 'COCINA2', 10, 20, 30, 40, 'coc2.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC3', 'Cocina a gas Whirlpool Inoxidable 49 cm', 1018999, NULL, 'COCINA3', 10, 20, 30, 40, 'coc3.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC4', 'Cocina Whirlpool Multigas 56 CM Blanca', 946999, 25, 'COCINA4', 10, 20, 30, 40, 'coc4.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC5', 'Cocina Whirlpool Multigas 76 cm Inox', 719999, NULL, 'COCINA5', 10, 20, 30, 40, 'coc5.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC6', 'Cocina Whirlpool Multigas 76 CM Inox', 691999, 12, 'COCINA6', 10, 20, 30, 40, 'coc6.jpg', 0, 1, 3);

/*MICROONDAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC1', 'Microondas Whirlpool Con Grill 25 Lts', 398799, 5, 'MICROONDA1', 10, 20, 30, 40, 'mic1.jpg', 1, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC2', 'Microondas Whirlpool 20 Lts', 315698, 5, 'MICROONDA2', 10, 20, 30, 40, 'mic2.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC3', 'Microondas Whirlpool con grill y vaporera 25 litros', 368425, 15, 'MICROONDA3', 10, 20, 30, 40, 'mic3.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC4', 'Microondas Whirlpool con grill y convección 25 litros', 312598, 25, 'MICROONDA4', 10, 20, 30, 40, 'mic4.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC5', 'Microondas Whirlpool con Grill 27 Lts Negro', 376892, NULL, 'MICROONDA5', 10, 20, 30, 40, 'mic5.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC6', 'Microondas Whirlpool con Grill 27 Lts Negro', 420893, 18, 'MICROONDA6', 10, 20, 30, 40, 'mic6.jpg', 0, 1, 4);

/*LAVAVAJILLAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV1', 'Lavavajillas Whirlpool Sense Inverter 10 Cubiertos', 1209999, 10, 'LAVAVAJILLA1', 10, 20, 30, 40, 'lvv1.jpg', 1, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV2', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 2799999, 18, 'LAVAVAJILLA2', 10, 20, 30, 40, 'lvv2.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV3', 'Lavavajillas Whirlpool Tecnología Inverter 10 Cubiertos Inox', 1279999, 5, 'LAVAVAJILLA3', 10, 20, 30, 40, 'lvv3.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV4', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Blanco', 1439999, 5, 'LAVAVAJILLA4', 10, 20, 30, 40, 'lvv4.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV5', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Inox', 1699999, NULL, 'LAVAVAJILLA5', 10, 20, 30, 40, 'lvv5.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV6', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 1785999, 10, 'LAVAVAJILLA6', 10, 20, 30, 40, 'lvv6.jpg', 0, 1, 5);

/*HORNOS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR1', 'Horno Whirlpool Empotrable Multigas 60 CM', 1399999, 27, 'HORNO1', 10, 20, 30, 40, 'hor1.jpg', 1, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR2', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 1989999, NULL, 'HORNO2', 10, 20, 30, 40, 'hor2.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR3', 'Horno Whirlpool Empotrable Multigas 60 CM', 1459999, 12, 'HORNO3', 10, 20, 30, 40, 'hor3.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR4', 'Horno Whirlpool Empotrable Multigas 60 CM', 1652999, NULL, 'HORNO4', 10, 20, 30, 40, 'hor4.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR5', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 1599999, 15, 'HORNO5', 10, 20, 30, 40, 'hor5.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR6', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 1758999, 5, 'HORNO6', 10, 20, 30, 40, 'hor6.jpg', 0, 1, 6);

/*ROLES*/
INSERT INTO ecommerce.roles (tipo) VALUES('Administrador');
INSERT INTO ecommerce.roles (tipo) VALUES('Usuario');

/*USUARIOS*/
INSERT INTO ecommerce.usuarios (fullName, country, telefono, email, password, avatar, rol_tipo) VALUES('Fernando', 'Argentina', '2604587963', 'fer@hotmail.com', '$2a$10$RwrMs1DZsNmJA6v1ldpFXOEX16.rAC1.T1ph.5I/aKh0F1X4oesti', '', 'Administrador');
INSERT INTO ecommerce.usuarios (fullName, country, telefono, email, password, avatar, rol_tipo) VALUES('Nacho', 'Argentina', '1145896235', 'nacho@gmail.com', '$2a$10$RwrMs1DZsNmJA6v1ldpFXOEX16.rAC1.T1ph.5I/aKh0F1X4oesti', '', 'Administrador');
INSERT INTO ecommerce.usuarios (fullName, country, telefono, email, password, avatar, rol_tipo) VALUES('Usuario', 'Argentina', '123456789', 'usuario@outlook.com', '$2a$10$RwrMs1DZsNmJA6v1ldpFXOEX16.rAC1.T1ph.5I/aKh0F1X4oesti', '', 'Usuario');