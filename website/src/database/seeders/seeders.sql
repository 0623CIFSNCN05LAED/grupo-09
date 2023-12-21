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
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL1', 'Heladera Bottom Mount Blanca Whirlpool 588 Lts', 1111, 20, 'HELADERA1', 10, 20, 30, 40, 'hel1.jpg', 1, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL2', 'Heladera Whirlpool No Frost Xpert Inverter 443 Lts', 2222, NULL, 'HELADERA2', 10, 20, 30, 40, 'hel2.jpg', 1, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL3', 'Heladera Whirlpool French Door Bottom Mount 554 Lts', 3333, 5, 'HELADERA3', 10, 20, 30, 40, 'hel3.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL4', 'Heladera Bottom Mount Inox Whirlpool 588 Lts', 4444, 15, 'HELADERA4', 10, 20, 30, 40, 'hel4.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL5', 'Heladera Whirlpool No Frost Xpert Inverter de 462 Lts', 5555, NULL, 'HELADERA5', 10, 20, 30, 40, 'hel5.jpg', 0, 1, 1);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HEL6', 'Heladera Side By Side Whirlpool No Frost Inverter de 518 Lts', 6666, 12, 'HELADERA6', 10, 20, 30, 40, 'hel6.jpg', 0, 1, 1);

/*LAVARROPAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV1', 'Lavarropas Whirlpool Carga Superior 7,5 KG 750 RPM Blanco', 1111, 15, 'LAVARROPA1', 10, 20, 30, 40, 'lav1.jpg', 1, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV2', 'Lavarropas Whirlpool Carga Superior 11 KG Blanco', 2222, 25, 'LAVARROPA2', 10, 20, 30, 40, 'lav2.jpg', 1, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV3', 'Lavarropas Whirlpool Carga Superior 6 KG 1200 RPM', 3333, NULL, 'LAVARROPA3', 10, 20, 30, 40, 'lav3.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV4', 'Lavarropas Whirlpool 8kg - 1200rpm Blanco Inverter', 4444, 8, 'LAVARROPA4', 10, 20, 30, 40, 'lav4.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV5', 'Lavarropas Whirlpool Xpert Dual Wash 10 KG', 5555, NULL, 'LAVARROPA5', 10, 20, 30, 40, 'lav5.jpg', 0, 1, 2);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LAV6', 'Lavarropas Whirlpool 9kg - 1400rpm Blanco Inverter', 6666, 15, 'LAVARROPA6', 10, 20, 30, 40, 'lav6.jpg', 0, 1, 2);

/*COCINAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC1', 'Cocina a gas Whirlpool inoxidable 51 cm con Grill', 1111, 5, 'COCINA1', 10, 20, 30, 40, 'coc1.jpg', 1, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC2', 'Cocina a gas Whirlpool Blanca 49 cm', 2222, 15, 'COCINA2', 10, 20, 30, 40, 'coc2.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC3', 'Cocina a gas Whirlpool Inoxidable 49 cm', 3333, NULL, 'COCINA3', 10, 20, 30, 40, 'coc3.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC4', 'Cocina Whirlpool Multigas 56 CM Blanca', 4444, 25, 'COCINA4', 10, 20, 30, 40, 'coc4.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC5', 'Cocina Whirlpool Multigas 76 cm Inox', 5555, NULL, 'COCINA5', 10, 20, 30, 40, 'coc5.jpg', 0, 1, 3);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('COC6', 'Cocina Whirlpool Multigas 76 CM Inox', 6666, 12, 'COCINA6', 10, 20, 30, 40, 'coc6.jpg', 0, 1, 3);

/*MICROONDAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC1', 'Microondas Whirlpool Con Grill 25 Lts', 1111, 5, 'MICROONDA1', 10, 20, 30, 40, 'mic1.jpg', 1, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC2', 'Microondas Whirlpool 20 Lts', 2222, 5, 'MICROONDA2', 10, 20, 30, 40, 'mic2.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC3', 'Microondas Whirlpool con grill y vaporera 25 litros', 3333, 15, 'MICROONDA3', 10, 20, 30, 40, 'mic3.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC4', 'Microondas Whirlpool con grill y convección 25 litros', 4444, 25, 'MICROONDA4', 10, 20, 30, 40, 'mic4.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC5', 'Microondas Whirlpool con Grill 27 Lts Negro', 5555, NULL, 'MICROONDA5', 10, 20, 30, 40, 'mic5.jpg', 0, 1, 4);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('MIC6', 'Microondas Whirlpool con Grill 27 Lts Negro', 6666, 18, 'MICROONDA6', 10, 20, 30, 40, 'mic6.jpg', 0, 1, 4);

/*LAVAVAJILLAS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV1', 'Lavavajillas Whirlpool Sense Inverter 10 Cubiertos', 1111, 10, 'LAVAVAJILLA1', 10, 20, 30, 40, 'lvv1.jpg', 1, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV2', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 2222, 18, 'LAVAVAJILLA2', 10, 20, 30, 40, 'lvv2.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV3', 'Lavavajillas Whirlpool Tecnología Inverter 10 Cubiertos Inox', 3333, 5, 'LAVAVAJILLA3', 10, 20, 30, 40, 'lvv3.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV4', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Blanco', 4444, 5, 'LAVAVAJILLA4', 10, 20, 30, 40, 'lvv4.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV5', 'Lavavajillas Whirlpool Inverter 14 Cubiertos Inox', 5555, NULL, 'LAVAVAJILLA5', 10, 20, 30, 40, 'lvv5.jpg', 0, 1, 5);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('LVV6', 'Lavavajillas Whirlpool Empotrable 15 Cubiertos', 6666, 10, 'LAVAVAJILLA6', 10, 20, 30, 40, 'lvv6.jpg', 0, 1, 5);

/*HORNOS*/
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR1', 'Horno Whirlpool Empotrable Multigas 60 CM', 1111, 27, 'HORNO1', 10, 20, 30, 40, 'hor1.jpg', 1, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR2', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 2222, NULL, 'HORNO2', 10, 20, 30, 40, 'hor2.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR3', 'Horno Whirlpool Empotrable Multigas 60 CM', 3333, 12, 'HORNO3', 10, 20, 30, 40, 'hor3.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR4', 'Horno Whirlpool Empotrable Multigas 60 CM', 4444, NULL, 'HORNO4', 10, 20, 30, 40, 'hor4.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR5', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 5555, 15, 'HORNO5', 10, 20, 30, 40, 'hor5.jpg', 0, 1, 6);
INSERT INTO ecommerce.productos (sku, nombre, precio, descuento, descripcion, ancho, alto, profundidad, peso, imagen, oferta, marca_id, categoria_id) VALUES('HOR6', 'Horno Whirlpool Empotrable Eléctrico 60 CM Inox', 6666, 5, 'HORNO6', 10, 20, 30, 40, 'hor6.jpg', 0, 1, 6);

/*ROLES*/
INSERT INTO ecommerce.roles (tipo) VALUES('Administrador');
INSERT INTO ecommerce.roles (tipo) VALUES('Usuario');