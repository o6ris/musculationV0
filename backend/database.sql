CREATE TABLE vehicle (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` varchar(500) NOT NULL,
  `gearbox` int(1) NOT NULL,
  `fuel` int(1) NOT NULL,
  `price` int NOT NULL,
  `available` int(1)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO vehicle (name, picture, gearbox, fuel, price, available)
VALUES
("Dacia Sandero", "https://images.caradisiac.com/images/1/0/1/1/191011/S0-nouvelle-dacia-sandero-alerte-speculation-sur-le-marche-de-l-occasion-684104.jpg", 0, 0, 50, 1),
("Peugeot 208", "https://images.caradisiac.com/images/3/2/9/7/183297/S0-la-peugeot-208-arrive-en-occasion-elle-a-les-crocs-630662.jpg", 0, 0, 50, 1),
("Kia Sportage", "https://media.ed.edmunds-media.com/kia/sportage-hybrid/2023/oem/2023_kia_sportage-hybrid_4dr-suv_ex_fq_oem_14_1280.jpg", 1, 1, 70, 1),
("Mercedes GLA", "https://static1.caroom.fr/guide/wp-content/uploads/2020/10/essai-mercedes-gla-1024x576.jpg", 1, 1, 80, 1),
("BMW x5", "https://cdn-s-www.estrepublicain.fr/images/155E4B63-5611-499A-938F-60CA89347232/NW_raw/la-bmw-x5-gagne-nettement-en-presence-et-en-caractere-grace-aux-elements-de-design-xline-desormais-de-serie-1675871591.jpg", 1, 1, 80, 1),
("Renault Clio", "https://cdn.group.renault.com/ren/fr/product-plans/clio/renault_clio_herozone_exterieur.jpg.ximg.small.jpg/ecde36b5a1.jpg", 0, 0, 50, 1),
("Toyota Yaris", "https://www.automobile-magazine.fr/asset/cms/175857/config/124605/toyota-yaris-hybride-2020.jpg", 0, 1, 50, 1),
("Mini Cooper", "https://cdn-s-www.leprogres.fr/images/3BC4432F-C3B4-43AB-AF89-0D337CBDC444/NW_detail_M/la-mini-cooper-s-est-une-verson-sportive-avec-178-ch-mais-pas-la-plus-radicale-pour-les-amateurs-de-de-sportivite-c-est-vers-la-version-john-cooper-works-qu-il-faut-se-tourner-1638373513.jpg", 0, 0, 60, 1),
("Audi a3", "https://static1.caroom.fr/guide/wp-content/uploads/2020/06/essai-Audi-A3-Sportback-1128x484.jpg", 1, 1, 85, 1),
("Opel Corsa", "https://images.caradisiac.com/images/2/6/8/4/182684/S0-quelle-opel-corsa-choisir-627790.jpg", 1, 0, 65, 1);


CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) UNIQUE NOT NULL,
  `isAdmin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (alias, isAdmin)
VALUES ("o6ris", 1), ("gaby", 0);


CREATE TABLE booking (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `depature_date` DATE NOT NULL,
  `arrival_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
