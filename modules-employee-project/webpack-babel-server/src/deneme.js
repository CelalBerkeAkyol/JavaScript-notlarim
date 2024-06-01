export class UI {
    constructor() {
      this.nameInput = document.getElementById("name");
      this.departmentInput = document.getElementById("department");
      this.salaryInput = document.getElementById("salary");
      this.employeeList = document.getElementById("employees");
      this.updateEmployeeButton = document.getElementById("update");
    }
  
    addAllEmployeeToUI(employees) {
      let result = "";
      employees.forEach(employee => {
        result += `
          <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
            <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
          </tr>
        `;
      });
  
      if (this.employeeList) {
        this.employeeList.innerHTML = result;
      } else {
        console.error("Element with id 'employees' not found.");
      }
    }
  }
  