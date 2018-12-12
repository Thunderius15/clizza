-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: pizzeria
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categorias` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (481,'Salsa'),(482,'Queso'),(483,'Carne'),(484,'Vegetal'),(485,'Fruta');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccionesusuario`
--

DROP TABLE IF EXISTS `direccionesusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `direccionesusuario` (
  `idDireccionesUsuario` int(11) NOT NULL,
  `idUsuario` varchar(20) DEFAULT NULL,
  `nombreCalle` varchar(20) DEFAULT NULL,
  `numeroExt` varchar(10) DEFAULT NULL,
  `numeroInt` varchar(10) DEFAULT NULL,
  `referencia` varchar(100) DEFAULT NULL,
  `codigoPostal` int(5) DEFAULT NULL,
  `colonia` varchar(30) DEFAULT NULL,
  `ciudad` varchar(30) DEFAULT NULL,
  `municipio` varchar(30) DEFAULT NULL,
  `estado` varchar(30) DEFAULT NULL,
  `alias` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idDireccionesUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccionesusuario`
--

LOCK TABLES `direccionesusuario` WRITE;
/*!40000 ALTER TABLE `direccionesusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccionesusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ingredientes` (
  `idIngrediente` int(11) NOT NULL,
  `nombreIngrediente` varchar(20) DEFAULT NULL,
  `categoriaIngrediente` varchar(20) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `nombreImagen` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idIngrediente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes`
--

LOCK TABLES `ingredientes` WRITE;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` VALUES (101,'Cebolla','484',0,'No Encontrado'),(102,'Champiñón','484',1,'Champiñones.png'),(103,'Aceituna','484',0,'No Encontrado'),(104,'Calabacin','484',0,'No Encontrado'),(105,'Brocoli','484',0,'No Encontrado'),(106,'Papa','484',0,'No Encontrado'),(107,'Pepino','484',0,'No Encontrado'),(108,'Zanahoria','484',0,'No Encontrado'),(109,'Espinaca','484',0,'No Encontrado'),(110,'Aguacate','484',0,'No Encontrado'),(111,'Ajo','484',0,'No Encontrado'),(112,'Pimiento rojo','484',0,'No Encontrado'),(113,'Pimiento verde','484',0,'No Encontrado'),(114,'Lechuga','484',0,'No Encontrado'),(115,'Esparragos','484',0,'No Encontrado'),(116,'Elote','484',0,'No Encontrado'),(121,'Mango','485',0,'No Encontrado'),(122,'Fresa','485',1,'Frutas.png'),(123,'Naranja','485',0,'No Encontrado'),(124,'Platano','485',0,'No Encontrado'),(125,'Manzana','485',0,'No Encontrado'),(126,'Kiwi','485',0,'Frutas.png'),(127,'Piña','485',0,'No Encontrado'),(128,'Sandia','485',0,'No Encontrado'),(129,'Papaya','485',0,'No Encontrado'),(130,'Durazno','485',0,'No Encontrado'),(131,'Uva','485',0,'No Encontrado'),(132,'Limon','485',0,'No Encontrado'),(133,'Pera','485',0,'No Encontrado'),(501,'Pomodoro','481',1,'SalsaPerrona.png'),(502,'Bolognesa','481',0,'No Encontrado'),(503,'Cheddar','481',0,'No Encontrado'),(504,'Barbacoa Casera','481',0,'No Encontrado'),(505,'Mexicana','481',0,'No Encontrado'),(506,'Secreta','481',0,'No Encontrado'),(507,'Chiles','481',0,'No Encontrado'),(508,'Dulce','481',0,'No Encontrado'),(520,'Mozzarella','482',1,'Quesillo.png'),(521,'Cheddar','482',0,'No Encontrado'),(522,'Colby','482',0,'No Encontrado'),(523,'Edam','482',0,'No Encontrado'),(524,'Emmental','482',0,'No Encontrado'),(525,'Gruyere','482',0,'No Encontrado'),(526,'Provolone','482',0,'No Encontrado'),(527,'Suizo','482',0,'No Encontrado'),(528,'Gouda','482',0,'No Encontrado'),(529,'Cabra','482',0,'No Encontrado'),(530,'Manchego','482',0,'No Encontrado'),(540,'Peperoni','483',1,'Pepperoni.png'),(541,'Salami','483',0,'No Encontrado'),(542,'Salchica','483',0,'No Encontrado'),(543,'Jamón de Pavo','483',0,'No Encontrado'),(544,'Chorizo','483',1,'Chorizo.png'),(545,'Carne Molida','483',1,'CarneMolida.png'),(546,'Jamón Selva Negra','483',0,'No Encontrado'),(547,'Jamón Serrano','483',0,'No Encontrado'),(548,'Camarón','483',0,'No Encontrado');
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `precioportamaño`
--

DROP TABLE IF EXISTS `precioportamaño`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `precioportamaño` (
  `idPrecio` int(11) NOT NULL,
  `idTamañoPizza` int(11) DEFAULT NULL,
  `idIngrediente` int(11) DEFAULT NULL,
  `precioSegunTamaño` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPrecio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `precioportamaño`
--

LOCK TABLES `precioportamaño` WRITE;
/*!40000 ALTER TABLE `precioportamaño` DISABLE KEYS */;
INSERT INTO `precioportamaño` VALUES (601,491,501,3),(602,492,501,5),(603,493,501,7),(604,491,502,3),(605,492,502,5),(606,493,502,7),(607,491,503,3),(608,492,503,5),(609,493,503,7),(610,491,504,3),(611,492,504,5),(612,493,504,7),(613,491,505,3),(614,492,505,5),(615,493,505,7),(616,491,506,3),(617,492,506,5),(618,493,506,7),(619,491,507,3),(620,492,507,5),(621,493,507,7),(622,491,508,3),(623,492,508,5),(624,493,508,7);
/*!40000 ALTER TABLE `precioportamaño` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursal`
--

DROP TABLE IF EXISTS `sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sucursal` (
  `idSucursal` int(11) NOT NULL,
  `nombreSucursal` varchar(20) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `ubicacion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursal`
--

LOCK TABLES `sucursal` WRITE;
/*!40000 ALTER TABLE `sucursal` DISABLE KEYS */;
INSERT INTO `sucursal` VALUES (901,'Plaza del Sol','Av. López Mateos Sur 2375, Local 3-B, Planta Baja, Cd del Sol, 45050 Zapopan, Jal.','01 33 3122 3717','https://goo.gl/maps/kQ4FRCT3fby'),(902,'Plaza Galerías','Av Rafael Sanzio 150, Residencial La Estancia, Camichines Vallarta, 45020 Zapopan, Jal.','01 33 3627 7672','https://goo.gl/maps/ccFeam5AmNq'),(903,'Plaza Lomas','Plaza Lomas, Av Río Nilo # 7540, Villas de Oriente, 44840 Tonalá, Jalisco','01 33 3601 7542','https://goo.gl/maps/YNYAQ1iVfqQ2');
/*!40000 ALTER TABLE `sucursal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamaños`
--

DROP TABLE IF EXISTS `tamaños`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tamaños` (
  `idTamaños` int(11) NOT NULL,
  `tamaño` varchar(20) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idTamaños`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamaños`
--

LOCK TABLES `tamaños` WRITE;
/*!40000 ALTER TABLE `tamaños` DISABLE KEYS */;
INSERT INTO `tamaños` VALUES (491,'Chico',1),(492,'Mediano',1),(493,'Grande',1);
/*!40000 ALTER TABLE `tamaños` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(20) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `contraseña` varchar(20) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-06 13:34:21
