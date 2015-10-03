# INSERT INTO players (...)
TRUNCATE TABLE players;
INSERT INTO players (
  player_id, player_name, player_lastname, player_birthdate, player_nationality, player_club, player_position, player_description, player_characteristics, player_style
)
VALUES (
  1, "Cristiano", "Ronaldo", "1985-02-05", "Portugal", "Real Madrid", 3, "Cristiano Ronaldo dos Santos Aveiro known as Cristiano Ronaldo is a Portuguese professional footballer who plays for Spanish club Real Madrid and the Portugal national team. He is a forward and serves as captain for Portugal. By the age of 22, Ronaldo had received Ballon d'Or and FIFA World Player of the Year nominations. The following year, in 2008, he won his first Ballon d'Or and FIFA World Player of the Year awards. He followed this up by winning the FIFA Ballon d'Or in 2013 and 2014. Cristiano Ronaldo is the only player to have won the European Golden Shoe four times. In September 2015, Ronaldo scored his 500th senior career goal for club and country.",
  "Finishing, long shots, headed attempts, dribbling, key passes, aerial duels",
  "Indirect set-piece threat, counter attack threat, likes to cut inside, likes to do layoffs"
),
  (
    2, "Zinedine", "Zidane", "1972-06-23", "France", "retired", 2, "Zinedine Yazid Zidane, nicknamed 'Zizou', is a retired French footballer and current coach of Real Madrid Castilla. He played as an attacking midfielder for the France national team, Juventus and Real Madrid. Renowned for his elegance, vision, ball control and technique, Zidane was named the best European footballer of the past 50 years in the UEFA Golden Jubilee Poll, and has been described as one of the greatest players in the history of the game. At club level, Zidane won the La Liga title and the UEFA Champions League with Real Madrid, two Serie A league championships with Juventus and an Intercontinental Cup and a UEFA Super Cup each with both aforementioned teams. His 2001 transfer from Juventus to Real Madrid set a world record fee of an equivalent €75 million. His left-foot volleyed winner in the 2002 UEFA Champions League Final is considered to be one of the greatest goals in the competition's history. On the international stage with France, Zidane won the 1998 FIFA World Cup, scoring twice in the final, and UEFA Euro 2000 where he was named Player of the Tournament. The World Cup triumph made him a national hero in France, and he received the Légion d'honneur in 1998. Zidane has won the FIFA World Player of the Year three times, a feat achieved only by Ronaldo, Lionel Messi and Cristiano Ronaldo, and the Ballon d'Or once.",
    "Dribbling, passing, holding on to the ball, key passes",
    "Likes to do layoffs, likes to dribble, likes to shoot from distance, likes to play long balls"
  ),
  (
    3, "Lionel", "Messi", "1987-06-24", "Argentina", "Barcelona", 3, "Lionel Andrés 'Leo' Messi is an Argentine professional footballer who plays as a forward for Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and rated by many in the sport as the greatest of all time, Messi is the only football player in history to win the FIFA Ballon d'Or four times, all of which he won consecutively, and the first player to win three European Golden Shoes. With Barcelona he has won seven La Liga titles and four UEFA Champions League titles, as well as three Copa del Rey titles. A prolific goalscorer, Messi holds the Guinness World Records titles for most goals scored in a La Liga season (50), a calendar year (91), and a Champions League match (five).",
    "Dribbling, finishing, holding on to the ball, key passes, passing",
    "Plays the ball off the ground often, likes to cut inside, likes to dribble, likes to do layoffs"
    )
