# 🧼 Clothly Backend

Clothly Backend is a secure and scalable RESTful API built with **Node.js**, **Express**, and **PostgreSQL**. It powers the Clothly web app, enabling users to book laundry services, track orders, and manage their profiles, while supporting admin-level operations. Authentication is handled via **JWT**, and the architecture follows modern best practices for maintainability and security.

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (via `pg`)
- **Authentication**: JWT, bcrypt.js
- **Middleware & Security**: Helmet, CORS, dotenv, express-rate-limit

---

## 📁 Folder Structure

clothly-backend/
├── controllers/ # Route handlers
├── routes/ # Auth, user, admin, service routes
├── middleware/ # JWT auth, role check, error handler
├── db/ # PostgreSQL pool setup
├── utils/ # Helper functions
├── .env # Environment variables
└── server.js # Entry point

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/clothly-backend.git
cd clothly-backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure environment variables
Create a .env file in the root:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=clothly
DB_PORT=5432
JWT_SECRET=your_secret_key
4. Run the server
bash
Copy
Edit
npm start
The server will run at http://localhost:5000

🔐 Authentication
JWT-based login/session handling

Middleware-protected routes

Role-based access for user and admin

🧪 Sample Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate user
GET	/api/bookings	List bookings for a user
POST	/api/bookings	Create a new service booking
GET	/api/admin/orders	View all orders (admin only)

🛠️ Future Enhancements
Stripe or Razorpay payment integration

Admin dashboard analytics APIs

Notifications via email or SMS

📄 License
This project is open-source and available under the MIT License.

👤 Author
Sanganabasava M
💼 Full-Stack Developer
📧 sanganabasavam1999@gmail.com
📞 +91 81509 19941
