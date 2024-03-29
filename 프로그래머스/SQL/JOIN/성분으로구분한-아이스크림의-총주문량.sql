-- 조인 조건으로 A테이블의 외래키를 B테이블이 id_key라는 컬럼명으로 참조하고 있을 때,
-- ON 으로 외래키와 참조키를 설정해주면, 두 컬럼을 비교해서 같은 값끼리 하나의 row로 나타낸다.
-- JOIN(INNER JOIN): a테이블과 b테이블의 교집합. 두 테이블의 조인 조건을 만족하는 것만 뽑을 때 사용한다.
-- LEFT JOIN(OUTER JOIN): a테이블과 b테이블의 합집합. 두 테이블의 조인 조건을 만족하지 않는 것까지 뽑을 때 사용한다.
SELECT b.INGREDIENT_TYPE AS INGREDIENT_TYPE, 
  SUM(a.TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF AS a
JOIN ICECREAM_INFO AS b ON a.FLAVOR = b.FLAVOR
GROUP BY 1;
