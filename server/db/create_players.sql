# CREATE DATABASE <dbname> IF NOT EXISTS
CREATE DATABASE IF NOT EXISTS football;
# CREATE TABLE <players> IF NOT EXISTS
# with necesary columns
CREATE TABLE IF NOT EXISTS players (
  player_id INT NOT NULL AUTO_INCREMENT,
  player_name CHAR(60) NOT NULL,
  player_lastname CHAR(60) NOT NULL,
  player_birthdate DATE NOT NULL,
  player_nationality CHAR(60) NOT NULL,
  player_club CHAR(60) NOT NULL,
  player_position ENUM NOT NULL,
  player_description TEXT,
  player_characteristics SET,
  player_style TEXT,
  PRIMARY KEY (player_id)
  );
  # player_honours player_goldenball player_goldenshoe  some numbers and a few words
  # player_records # some numbers and a few words
CREATE TABLE IF NOT EXISTS players_images (
  image_id INT NOT NULL AUTO_INCREMENT,
  image_name CHAR(60) NOT NULL,
  image_type CHAR(60) NOT NULL,
  image_size INT NOT NULL,
  image_content MEDIUMBLOB NOT NULL,
  PRIMARY KEY (image_id)
);
