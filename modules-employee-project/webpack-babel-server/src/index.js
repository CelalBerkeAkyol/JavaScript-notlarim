import { Request } from "./request";
import { UI } from "./ui";

// index.html dosyasından almamız gereken bölümleri değişkenler üzerine atadık
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeeList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

// base http://localhost:3000/employees
const request = new Request("http://localhost:3000/employees");

const ui = new UI();

addEventListener();

function addEventListener() {
  document.addEventListener("DOMContentLoaded", getAllEmployees);
  form.addEventListener("submit", addEmployee);
  employeeList.addEventListener("click", updateOrDelete);
}

function getAllEmployees() {
  request
    .get()
    .then((employees) => ui.addAllEmployeeToUI(employees))
    .catch((err) => console.log(err));
}

function addEmployee(e) {
  //trim fonksiyonu sağ ve sol boşlukları temizler
  const employeeName = nameInput.value.trim();
  const employeeDepartment = departmentInput.value.trim();
  const employeeSalary = salaryInput.value.trim();

  if (
    employeeName === "" ||
    employeeDepartment === "" ||
    employeeSalary === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz");
  } else {
    request
      .post({
        name: employeeName,
        department: employeeDepartment,
        salary: employeeSalary,
      })
      .then((employee) => ui.addEmployee(employee))
      .catch((err) => console.log(err));
  }
  ui.clearInputs();
  e.preventDefault();
}
function updateOrDelete(e) {
    if(e.target.id =="update-employee"){
        updateEmployeeContoller(e.target.parentElement.parentElement);
    }
    else if(e.target.id =="delete-employee"){
            deleteEmployee(e.target);
    }
    
}
function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id)
    .then(response => ui.deleteFromUI(targetEmployee.parentElement.parentElement))
    .catch(err => console.log(err));
}
function updateEmployeeContoller(targetEmployee){
    ui.toggleUpdateButton(targetEmployee);
}