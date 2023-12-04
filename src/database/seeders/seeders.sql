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
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL1', 'Heladera Bottom Mount Blanca Whirlpool 588 Lts', 1111, 'HELADERA1', 10, 20, 30, 40, '/images/productos/hel1.jpg', 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL2', 'Heladera Whirlpool No Frost Xpert Inverter 443 Lts', 2222, 'HELADERA2', 10, 20, 30, 40, '/images/productos/hel2.jpg', 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL3', 'Heladera Whirlpool French Door Bottom Mount 554 Lts', 3333, 'HELADERA3', 10, 20, 30, 40, '/images/productos/hel3.jpg', 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL4', 'Heladera Bottom Mount Inox Whirlpool 588 Lts', 4444, 'HELADERA4', 10, 20, 30, 40, '/images/productos/hel4.jpg', 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL5', 'Heladera Whirlpool No Frost Xpert Inverter de 462 Lts', 5555, 'HELADERA5', 10, 20, 30, 40, '/images/productos/hel5.jpg', 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HEL6', 'Heladera Side By Side Whirlpool No Frost Inverter de 518 Lts', 6666, 'HELADERA6', 10, 20, 30, 40, '/images/productos/hel6.jpg', 1, 1);

/*LAVARROPAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV1', 'Lavarropas Whirlpool Carga Superior 7,5 KG 750 RPM Blanco', 1111, 'LAVARROPA1', 10, 20, 30, 40, '/images/productos/lav1.jpg', 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV2', 'Lavarropas Whirlpool Carga Superior 11 KG Blanco', 2222, 'LAVARROPA2', 10, 20, 30, 40, '/images/productos/lav2.jpg', 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV3', 'Lavarropas Whirlpool Carga Superior 6 KG 1200 RPM', 3333, 'LAVARROPA3', 10, 20, 30, 40, '/images/productos/lav3.jpg', 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV4', 'Lavarropas Whirlpool 8kg - 1200rpm Blanco Inverter', 4444, 'LAVARROPA4', 10, 20, 30, 40, '/images/productos/lav4.jpg', 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV5', 'Lavarropas Whirlpool Xpert Dual Wash 10 KG', 5555, 'LAVARROPA5', 10, 20, 30, 40, '/images/productos/lav5.jpg', 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LAV6', 'Lavarropas Whirlpool 9kg - 1400rpm Blanco Inverter', 6666, 'LAVARROPA6', 10, 20, 30, 40, '/images/productos/lav6.jpg', 1, 2);

/*COCINAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC1', 'Cocina a gas Whirlpool inoxidable 51 cm con Grill', 1111, 'COCINA1', 10, 20, 30, 40, '/images/productos/coc1.jpg', 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC2', 'Cocina a gas Whirlpool Blanca 49 cm', 2222, 'COCINA2', 10, 20, 30, 40, '/images/productos/coc2.jpg', 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC3', 'Cocina a gas Whirlpool Inoxidable 49 cm', 3333, 'COCINA3', 10, 20, 30, 40, '/images/productos/coc3.jpg', 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC4', 'Cocina Whirlpool Multigas 56 CM Blanca', 4444, 'COCINA4', 10, 20, 30, 40, '/images/productos/coc4.jpg', 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC5', 'Cocina Whirlpool Multigas 76 cm Inox', 5555, 'COCINA5', 10, 20, 30, 40, '/images/productos/coc5.jpg', 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('COC6', 'Cocina Whirlpool Multigas 76 CM Inox', 6666, 'COCINA6', 10, 20, 30, 40, '/images/productos/coc6.jpg', 1, 3);

/*MICROONDAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC1', 'Microondas Whirlpool Con Grill 25 Lts', 1111, 'MICROONDA1', 10, 20, 30, 40, '/images/productos/mic1.jpg', 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC2', 'Microondas Whirlpool 20 Lts', 2222, 'MICROONDA2', 10, 20, 30, 40, '/images/productos/mic2.jpg', 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC3', 'Microondas Whirlpool con grill y vaporera 25 litros', 3333, 'MICROONDA3', 10, 20, 30, 40, '/images/productos/mic3.jpg', 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC4', 'Microondas Whirlpool con grill y convección 25 litros', 4444, 'MICROONDA4', 10, 20, 30, 40, '/images/productos/mic4.jpg', 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC5', 'Microondas Whirlpool con Grill 27 Lts Negro', 5555, 'MICROONDA5', 10, 20, 30, 40, '/images/productos/mic5.jpg', 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('MIC6', 'Microondas Whirlpool con Grill 27 Lts Negro', 6666, 'MICROONDA6', 10, 20, 30, 40, '/images/productos/mic6.jpg', 1, 4);

/*LAVAVAJILLAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV1', 'Lavavajillas Whirlpool Sense Inverter 10 Cubiertos', 1111, 'LAVAVAJILLA1', 10, 20, 30, 40, '/images/productos/lvv1.jpg', 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV2', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 2222, 'LAVAVAJILLA2', 10, 20, 30, 40, '/images/productos/lvv2.jpg', 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV3', 'Lavavajillas Whirlpool Tecnología Inverter 10 Cubiertos Inox', 3333, 'LAVAVAJILLA3', 10, 20, 30, 40, '/images/productos/lvv3.jpg', 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV4', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Blanco', 4444, 'LAVAVAJILLA4', 10, 20, 30, 40, '/images/productos/lvv4.jpg', 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV5', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Inox', 5555, 'LAVAVAJILLA5', 10, 20, 30, 40, '/images/productos/lvv5.jpg', 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('LVV6', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 6666, 'LAVAVAJILLA6', 10, 20, 30, 40, '/images/productos/lvv6.jpg', 1, 5);

/*HORNOS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR1', 'Horno Whirlpool Empotrable Multigas 60 CM', 1111, 'HORNO1', 10, 20, 30, 40, '/images/productos/hor1.jpg', 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR2', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 2222, 'HORNO2', 10, 20, 30, 40, '/images/productos/hor2.jpg', 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR3', 'Horno Whirlpool Empotrable Multigas 60 CM', 3333, 'HORNO3', 10, 20, 30, 40, '/images/productos/hor3.jpg', 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR4', 'Horno Whirlpool Empotrable Multigas 60 CM', 4444, 'HORNO4', 10, 20, 30, 40, '/images/productos/hor4.jpg', 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR5', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 5555, 'HORNO5', 10, 20, 30, 40, '/images/productos/hor5.jpg', 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descripcion, ancho, alto, profundidad, peso, imagen, marca_id, categoria_id) VALUES('HOR6', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 6666, 'HORNO6', 10, 20, 30, 40, '/images/productos/hor6.jpg', 1, 6);

/*ROLES*/
INSERT INTO ecommerce.roles (rol) VALUES('Administrador');
INSERT INTO ecommerce.roles (rol) VALUES('Usuario');

/*USUARIOS*/
/*INSERT INTO ecommerce.usuarios (fullName, country, telefono, email, password, avatar, rol_id)VALUES('Fernando', '', '', '', '', '', 0);*/