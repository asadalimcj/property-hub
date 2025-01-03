
# 🏠 Property Management System

A **Zillow-like property management platform** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to browse, add, edit, and manage properties efficiently. It offers a seamless user experience for property owners, buyers, and renters.

---

## 🚀 Features

- **User Authentication**: Secure login/signup system with role-based access (Admin, Property Owner, User).
- **Property Listings**: View, search, and filter properties by location, price, and property type.
- **Add/Edit/Delete Properties**: Property owners can add, edit, or delete their listings.
- **Property Details**: Detailed pages for each property, including images, descriptions, and pricing.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Dashboard**: A personalized dashboard for property owners to manage their listings.
- **Database Integration**: MongoDB for storing property and user information.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Dynamic and responsive user interface.
- **Redux**: State management for the application.
- **CSS/Bootstrap/Tailwind**: Styling the UI.

### Backend
- **Node.js**: Backend runtime environment.
- **Express.js**: API development and routing.

### Database
- **MongoDB**: Database for storing user and property data.

---

## 📂 Directory Structure

```
Property-Management/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── Frontend/
│   ├── public/
│   ├── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── App.js
│       ├── index.js
│
├── README.md
```

---

## ⚙️ Installation

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** instance running (local or cloud).
- **Git** for version control.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/asadalimcj/property-hub
   ```
2. Navigate to the project directory:
   ```bash
   cd property-management
   ```

3. Set up the **Backend**:
   ```bash
   cd Backend
   npm install
   ```
   - Create a `.env` file and add the following:
     ```
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     PORT=5000
     ```

4. Start the **Backend** server:
   ```bash
   npm run start
   ```

5. Set up the **Frontend**:
   ```bash
   cd ../Frontend
   npm install
   ```

6. Start the **Frontend** server:
   ```bash
   npm start
   ```

7. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## 🌟 Features in Detail

### User Roles
1. **Admin**: 
   - Manage all property listings.
   - View and manage users.
2. **Property Owner**:
   - Add, edit, or delete property listings.
3. **User**:
   - Browse and search properties.
   - View detailed property information.

### Property Listings
- Each listing includes:
  - Images
  - Description
  - Pricing
  - Location
  - Property type (e.g., apartment, house, commercial space)

---

## 🖼️ Screenshots

1. **Home Page**  
   ![Home Page Screenshot](https://via.placeholder.com/800x400)

2. **Dashboard**  
   ![Dashboard Screenshot](https://via.placeholder.com/800x400)

3. **Property Details**  
   ![Property Details Screenshot](https://via.placeholder.com/800x400)

---

## 🤝 Contribution

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 📧 Contact

For questions or support, contact me at:  
- **Email**: asadalimcj@gmail.com  
- **GitHub**: https://github.com/asadalimcj/property-hub 
