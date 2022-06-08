--- Sample Table: orders

SELECT ord_no, ord_date, purch_amt
FROM orders
WHERE salesman_id=5001;

--- Sample Table: salesman and customer

SELECT salesman.name 
AS "Salesman", customer.cust_name, customer.city 
FROM salesman, customer 
WHERE salesman.city = customer.city;