let rowCount = 0;
let editableRow = null;

let addOrUpdate = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  if (firstName == "" || lastName == "" || email == "") {
    alert("Please Fill Out all Input Fields");
    return false;
  }

  if (editableRow) {
    editableRow.children[1].textContent = firstName;
    editableRow.children[2].textContent = lastName;
    editableRow.children[3].textContent = email;
    document.getElementById("addOrUpdate").textContent = "Add";
    editableRow = null;
    reset();
  } else {
    let tBody = document.getElementById("tBody");
    let newRow = document.createElement("tr");
    rowCount++;

    newRow.innerHTML = `<th scope="row">${rowCount}</th>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>
        <button class="btn btn-success text-white" onclick="editRow(this)">Edit</button>
        <button class="btn btn-danger text-white" onclick="deleteRow(this)">Delete</button>
    </td>`;

    tBody.appendChild(newRow);
    reset();
  }
};

let deleteRow = (i) => {
  let row = i.closest("tr");
  row.remove();
  rowCount--;

  let tr = document.querySelectorAll("#tBody tr");
  tr.forEach((row, index) => {
    row.querySelector("th").textContent = index + 1;
  });
};

let editRow = (i) => {
  let row = i.closest("tr");
  let firstName = row.children[1].textContent;
  let lastName = row.children[2].textContent;
  let email = row.children[3].textContent;

  document.getElementById("firstName").value = firstName;
  document.getElementById("lastName").value = lastName;
  document.getElementById("email").value = email;
  document.getElementById("addOrUpdate").textContent = "Update";

  editableRow = row;
};

let reset = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
};
