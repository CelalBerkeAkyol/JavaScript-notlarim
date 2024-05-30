const buttonElement = document.getElementById("ajax");
// elemanları json dosyasından okuma
buttonElement.addEventListener("click", getAllEmployees);
function getAllEmployees() {
  // get set yapısı
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employees.json", true);

  xhr.onload = function () {
    let list = document.getElementById("employees");

    if (this.status == 200) {
      const employees = JSON.parse(this.responseText);
      employees.forEach(function (employee) {
        list.innerHTML += `
                <tr>
                    <td>${employee.name}<td/>
                    <td>${employee.department}<td/>
                    <td>${employee.salary}<td/>
                    <tr/>
                `;
      });
    }
  };

  xhr.send();
}
