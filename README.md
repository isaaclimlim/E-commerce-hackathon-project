# mern e-commerce store

This is a full-stack e-commerce application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/isaaclimlim/E-commerce-hackathon-project.git
   ```

2. **Navigate to the Project Directory:**

   ```sh
   cd E-commerce-hackathon-project
   ```

3. Install dependencies for both frontend and backend:

**For Frontend**

```sh
cd frontend
npm install
```

**For Backend**

```sh
cd backend
npm install
```

4. Create a .env file in the root directory and add the following environment variables:

```sh
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

5. Run the application:

   ```sh
   npm run dev
   ```

This will start both the frontend and backend servers concurrently.
