# CREATE DATABASE <dbname> IF NOT EXISTS
CREATE DATABASE IF NOT EXISTS football;
# CREATE TABLE <players> IF NOT EXISTS
# with necesary columns
DROP TABLE IF EXISTS players;
CREATE TABLE IF NOT EXISTS players (
  player_id INT NOT NULL AUTO_INCREMENT,
  player_name CHAR(60) NOT NULL,
  player_lastname CHAR(60) NOT NULL,
  player_birthdate DATE NOT NULL,
  player_nationality CHAR(60) NOT NULL,
  player_club CHAR(60) NOT NULL,
  player_position ENUM('goalkeeper', 'defender', 'midfielder', 'forward') NOT NULL,
  player_description TEXT,
  player_style TEXT,
  PRIMARY KEY (player_id)
  );
  # player_honours player_goldenball player_goldenshoe  some numbers and a few words
DROP TABLE IF EXISTS players_images;
CREATE TABLE IF NOT EXISTS players_images (
  player_id INT NOT NULL,
  image_id INT NOT NULL AUTO_INCREMENT,
  image_filename CHAR(60) NOT NULL,
  PRIMARY KEY (image_id),
  FOREIGN KEY (player_id) REFERENCES players(player_id)
);
