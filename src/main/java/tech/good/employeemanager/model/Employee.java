package tech.good.employeemanager.model;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long Id;
    private String Name;
    private String email;
    private String JobTitle;
    private String Phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String EmployeeCode;

    public Employee() {}

    public Employee(String name, String email, String jobTitle, String phone, String imageUrl, String employeeCode) {
        Name = name;
        this.email = email;
        JobTitle = jobTitle;
        Phone = phone;
        this.imageUrl = imageUrl;
        EmployeeCode = employeeCode;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return JobTitle;
    }

    public void setJobTitle(String jobTitle) {
        JobTitle = jobTitle;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmployeeCode() {
        return EmployeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        EmployeeCode = employeeCode;
    }

    @Override
    public String toString(){
    return"Employee{"+
                "id="+Id +
                ", name='"+Name +'\''+
                ", email='" + email +
                ", jobTitle='"+JobTitle +'\''+
                ", phone='"+Phone +'\''+
                ", imageUrl='"+imageUrl +'\''+
            '}';
    }
}