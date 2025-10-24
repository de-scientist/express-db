# 🧩 CRUD Operations with Node.js, Express.js & Prisma ORM

A complete implementation of **Create, Read, Update, and Delete (CRUD)** operations using **Node.js**, **Express.js**, and **Prisma ORM**.  
This project demonstrates how to build and test a backend REST API that interacts with a database seamlessly.

---

## 🚀 Tech Stack

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Minimal and flexible web framework  
- **Prisma ORM** – Elegant database toolkit for Node.js  
- **MSSQL** – Relational database (configurable)  
- **Postman** – API testing and debugging tool  

---

2️⃣ Install dependencies
npm install

3️⃣ Initialize Prisma
npx prisma init


Update your .env file with your database URL, for example:

DATABASE_URL="sqlserver://user:password@localhost:5432/mydb?schema=public"

4️⃣ Generate Prisma client
npx prisma generate

5️⃣ Run the server
npm run dev

The server runs at http://localhost:3000

🔧 CRUD Endpoints Overview
➕ CREATE (POST)

Endpoint:
POST /users

Description:
Adds a new user to the database.

Request Body:

{
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john.doe@example.com"
}


Response:

{
  "ID": "generated-uuid",
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john.doe@example.com",
  "isDeleted": false
}

🔍 READ (GET)

Endpoint:
GET /users – Fetch all users
GET /users/:id – Fetch a single user by ID

Response Example:

[
  {
    "ID": "bf6543c9-ec0c-43d8-9dd0-52480a9b762a",
    "firstName": "Jane",
    "lastName": "Smith",
    "emailAddress": "jane.smith@example.com",
    "isDeleted": false
  }
]

✏️ UPDATE (PUT)

Endpoint:
PUT /users/:id

Description:
Completely replaces a user’s record with new data.

Request Body:

{
  "firstName": "Updated",
  "lastName": "User",
  "emailAddress": "updated@example.com"
}

🧩 PATCH (Partial Update)

Endpoint:
PATCH /users/:id

Description:
Updates only specific fields in the user record.

Request Body (example):

{
  "emailAddress": "newmail@example.com"
}

🗑️ DELETE (Soft Delete)

Endpoint:
DELETE /users/:id

Description:
Soft-deletes a user by marking isDeleted as true instead of permanently removing the record.

Response:

{
  "message": "User marked as deleted",
  "ID": "bf6543c9-ec0c-43d8-9dd0-52480a9b762a"
}

🧠 Understanding PUT vs PATCH
Method	Action	Example Use Case
PUT	Replaces the entire record	When you want to overwrite a user’s full details
PATCH	Updates part of a record	When you only want to change one field like an email
🧪 Testing the API in Postman

Open Postman

Set request type (POST, GET, PUT, PATCH, DELETE)

Enter your API URL (e.g., http://localhost:3000/users)

Go to the Body tab → select raw → choose JSON

Enter your data and hit Send
🌟 Key Learnings

How to set up a RESTful API with Express

How to integrate Prisma ORM for database communication

The difference between PUT and PATCH

How to perform CRUD operations safely and efficiently

How to test and debug APIs using Postman

👨🏾‍💻 Author

Mark Kinyanjui (De-Scientist)
CEO – TechVision Studios & Solutions
🚀 “Code is the poetry of logic, and CRUD is its rhythm.”

📩 Email Me

🌐 Portfolio

🔗 LinkedIn

🏁 License

This project is open-source and available under the MIT License.