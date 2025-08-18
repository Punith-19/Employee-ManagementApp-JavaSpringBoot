# Employee Management App — Full Stack (Spring Boot + Angular)

A full-stack Employee Management application built with **Java Spring Boot** (backend) and **Angular** (frontend).  
This project demonstrates CRUD operations, RESTful API integration, and a simple UI for managing employees.

---

## 🚀 Features
- Add new employees
- Update employee details
- Delete employees
- View all employees in a list
- Frontend connected to backend via REST API
- MySQL / H2 Database integration
- Angular UI for easy interaction

---

## 🛠️ Tech Stack

**Backend (Spring Boot)**
- Java 17+
- Spring Boot 3.x
- Spring Data JPA
- MySQL / H2 Database
- Maven

**Frontend (Angular)**
- Angular 15+
- TypeScript
- HTML / CSS / Bootstrap

---

## 📂 Project Structure

```
Employee-ManagementApp-JavaSpringBoot/
│── employeeemanagerapp/    # Angular frontend
│── src/                    # Spring Boot backend source code
│── pom.xml                 # Maven build file
│── mvnw / mvnw.cmd         # Maven wrapper
│── .gitignore
│── .gitattributes
```

---

## ⚙️ Installation & Setup

### 🔹 Backend (Spring Boot)

1. Navigate to backend root:
   ```bash
   cd Employee-ManagementApp-JavaSpringBoot
   ```
2. Configure your database in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employees_db
   spring.datasource.username=your_user
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```
   (Or leave default for H2 database)

3. Run the backend:
   ```bash
   mvn spring-boot:run
   ```
   Backend runs at: **http://localhost:8080**

---

### 🔹 Frontend (Angular)

1. Navigate to frontend folder:
   ```bash
   cd employeeemanagerapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Angular development server:
   ```bash
   ng serve
   ```
   Frontend runs at: **http://localhost:4200**

---


