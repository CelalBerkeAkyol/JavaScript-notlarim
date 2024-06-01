export class UI {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
    this.employeeList = document.getElementById("employees");
    this.updateEmployeeButton = document.getElementById("update");
  }
  // json serverdeki tüm elemanları arayüze ekleyen fonksiyon
  addAllEmployeeToUI(employees) {
    let result = "";
    employees.forEach((employee) => {
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
  // yeni girilen verileri arayüze ekleyen fonksiyon
  addEmployee(employee) {
    this.employeeList.innerHTML += `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.id}</td>
      <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
      <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
    </tr>
    `;
  }
  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }
  deleteFromUI(element){
    //element tr elementi olacak
    element.remove();
  }
  toggleUpdateButton(target){
    if(this.updateEmployeeButton.style.display === "none"){
      // eğer display özelliği kapalı ise tıklanınca açar 
      this.updateEmployeeButton.style.display = "block";
      this.addEmployeeToInputs(target);
    }
    else{
      // bu durumda kapatır
      this.updateEmployeeButton.style.display = "none";
      this.clearInputs();
    }
    
  }
  addEmployeeToInputs(target){
    const children = target.children; // array şeklinde tdler alınır

    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;

  }
}
