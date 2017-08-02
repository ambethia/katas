-- Create your SELECT statement here
SELECT
  COALESCE(NULLIF(clan,''), '[no clan specified]') AS clan,
  SUM (points) AS total_points,
  COUNT (name) AS total_people,
  RANK() OVER(ORDER BY SUM (points) DESC)
FROM people
GROUP BY clan
ORDER BY total_points DESC