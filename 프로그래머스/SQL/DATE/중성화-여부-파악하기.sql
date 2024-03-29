-- case - when 절에도 like와 or 사용 가능. select 절에서 행을 선택할 때 사용한다.
SELECT ANIMAL_ID, NAME, 
CASE
  WHEN SEX_UPON_INTAKE LIKE "Neutered%" OR SEX_UPON_INTAKE LIKE "Spayed%" THEN "O"
  ELSE "X"
END AS SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
