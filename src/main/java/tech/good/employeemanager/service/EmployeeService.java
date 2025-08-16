package tech.good.employeemanager.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.good.employeemanager.exceptions.UserNotFoundException;
import tech.good.employeemanager.model.Employee;
import tech.good.employeemanager.repository.EmployeeRepo;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeerepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeerepo) {
        this.employeerepo = employeerepo;
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeerepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeerepo.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeerepo.save(employee);
    }

    public Employee findEmployeeById(Long id) throws Throwable {
        return employeerepo.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by id"+ "Was not found"));

    }

    public void deleteEmployee(Long id){
        employeerepo.deleteEmployeeById(id);
    }
}
