FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY employeemanagerapp/package.json employeemanagerapp/package-lock.json ./

RUN npm install

COPY employeemanagerapp/ ./

RUN npm run build --prod

FROM maven:3.9.6-openjdk-17-slim AS backend-builder
WORKDIR /app/backend

COPY pom.xml ./

COPY src ./src 

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /app

COPY --from=backend-builder /app/backend/target/employeemanager.jar ./employeemanager.jar

COPY --from=frontend-builder /app/frontend/dist/employeemanagerapp/ ./public/

EXPOSE 8080

CMD ["java", "-jar", "employeemanager.jar"]