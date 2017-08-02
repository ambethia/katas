-- Create your SELECT statement here
SELECT
  people.id, people.name,
  COUNT(sales.id) AS sale_count,
RANK() OVER (PARTITION BY COUNT(sales.id)) AS sale_rank
FROM people
INNER JOIN sales ON people.id = sales.people_id
GROUP BY people.id
ORDER BY sale_count DESC