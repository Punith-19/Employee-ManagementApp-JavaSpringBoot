package tech.good.employeemanager.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import javax.persistence.GeneratedValue;
import java.io.Serializable;

@Entity
public class Employee implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String Name;
    private String email;
    private String JobTitle;
    private String Phone;
    private String imageUrl;
    private String EmployeeCode;
}

