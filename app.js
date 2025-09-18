// --- CSS Styling ---
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    padding: 20px;
  }
  h2 {
    color: #333;
  }
  input, button {
    padding: 8px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
  button {
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    background: #0056b3;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  th, td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  th {
    background: #007bff;
    color: white;
  }
  tr:hover {
    background: #f1f1f1;
  }
`;
document.head.appendChild(style);

// --- UI Elements ---
const title = document.createElement("h2");
title.textContent = "Add Student";
document.body.appendChild(title);

// Inputs
const nameInput = document.createElement("input");
nameInput.id = "studentName";
nameInput.placeholder = "Name";

const ageInput = document.createElement("input");
ageInput.id = "studentAge";
ageInput.type = "number";
ageInput.placeholder = "Age";

const courseInput = document.createElement("input");
courseInput.id = "studentCourse";
courseInput.placeholder = "Course";

// Button
const addBtn = document.createElement("button");
addBtn.textContent = "Add Student";

// Append inputs + button
document.body.appendChild(nameInput);
document.body.appendChild(ageInput);
document.body.appendChild(courseInput);
document.body.appendChild(addBtn);

// Student List Title
const listTitle = document.createElement("h2");
listTitle.textContent = "Student List";
document.body.appendChild(listTitle);

// Table
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

["Name", "Age", "Course"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
table.appendChild(tbody);
document.body.appendChild(table);

// --- Functionality ---
function addStudent() {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const course = courseInput.value.trim();

  if (!name || !age || !course) {
    alert("Please fill out all fields!");
    return;
  }

  const row = document.createElement("tr");

  [name, age, course].forEach(value => {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
  });

  tbody.appendChild(row);

  // Clear inputs
  nameInput.value = "";
  ageInput.value = "";
  courseInput.value = "";
}

addBtn.addEventListener("click", addStudent);
