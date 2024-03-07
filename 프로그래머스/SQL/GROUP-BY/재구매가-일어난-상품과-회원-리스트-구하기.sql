-- GROUP BY: "각 국가의 고객 수 찾기"와 같이 동일한 값을 가진 행을 하나로 그룹화
-- 동일한 회원이 동일한 상품을 재구매한 데이터를 조회해야 한다.
-- 따라서 USER_ID가 같으면서 PRODUCT_ID도 같은 컬럼을 그룹화하여 조회한다.
-- 유저 아이디 당 데이터의 수:
-- SELECT USER_ID, COUNT(*) FROM ONLINE_SALE GROUP BY USER_ID
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*) > 1
ORDER BY USER_ID ASC, PRODUCT_ID DESC;
