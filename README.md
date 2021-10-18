# AdventureWorks

Odata playground with AdventureWorks database as sample db
following queries will work 

https://localhost:5001/api/Customers?$select=CustomerID,FirstName
https://localhost:5001/api/Customers?$filter=CustomerID eq 2
https://localhost:5001/api/Customers?$orderby=CustomerID desc
https://localhost:5001/api/Customers?$top=2
https://localhost:5001/api/Customers?$skip=5
https://localhost:5001/api/Customers?$count=true
https://localhost:5001/api/Customers?$count=true&$skip=10
https://localhost:5001/api/Customers(1)