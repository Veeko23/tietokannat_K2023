a) SELECT * FROM language ORDER BY name;

b) SELECT title FROM actor JOIN film_actor ON actor.actor_id=film_actor.actor_id
   JOIN film ON film_actor.film_id=film.film_id WHERE last_name='Temple';

c) SELECT first_name, last_name FROM actor
   JOIN film_actor ON actor.actor_id=film_actor.actor_id
   JOIN film ON film_actor.film_id=film.film_id WHERE title='Ghost Groundhog';

d) SELECT category, COUNT(*) AS Montako FROM film_list
   where category = 'Horror';

e) SELECT title FROM film_list WHERE category = 'Horror';


