# CREATE DATABASE <dbname> IF NOT EXISTS
CREATE DATABASE IF NOT EXISTS football;
# CREATE TABLE <players> IF NOT EXISTS
# with necesary columns
CREATE TABLE IF NOT EXISTS players (
  player_id INT(8) NOT NULL AUTO_INCREMENT,
  player_name CHAR(60) NOT NULL,
  player_lastname CHAR(60) NOT NULL,
  player_birthdate DATE NOT NULL,
  player_nationality CHAR(60) NOT NULL,
  player_club CHAR(60) NOT NULL,
  player_position ENUM(8) NOT NULL,
  player_description TEXT,
  player_characteristics SET,
  player_style TEXT,
  PRIMARY KEY (player_id)
  );
  # player_honours player_goldenball player_goldenshoe  some numbers and a few words
  # player_records # some numbers and a few words
  # FOREIGN KEY # dunno how to use right
  # player_images # some images
