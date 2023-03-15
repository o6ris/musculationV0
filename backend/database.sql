CREATE DATABASE revisions;
USE revisions;

CREATE TABLE vehicle (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` varchar(500) NOT NULL,
  `gearbox` int NOT NULL,
  `fuel` int not NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE booking (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `depature_date` DATE NOT NULL,
  `arrival_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
