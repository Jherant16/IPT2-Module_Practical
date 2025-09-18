// --- Global CSS ---
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f2f5;
    padding: 20px;
    margin: 0;
  }
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  nav {
    text-align: center;
    margin-bottom: 20px;
  }
  nav button {
    margin: 0 5px;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
  }
  #showStudents { background: #007bff; color: white; }
  #showStudents:hover { background: #0056b3; }
  #showSubjects { background: #28a745; color: white; }
  #showSubjects:hover { background: #1e7e34; }

  section {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  h2 {
    margin-top: 0;
    color: #34495e;
    border-bottom: 2px solid #eee;
    padding-bottom: 5px;
  }
  .form-row {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }
  input {
    flex: 1;
    min-width: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
  button.student-btn {
    background: #007bff;
    color: white;
  }
  button.student-btn:hover { background: #0056b3; }
  button.subject-btn {
    background: #28a745;
    color: white;
  }
  button.subject-btn:hover { background: #1e7e34; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    font-size: 14px;
  }
  th, td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  th {
    background: #34495e;
    color: white;
  }
  tr:nth-child(even) { background: #f9f9f9; }
  tr:hover { background: #f1f1f1; }
`;
document.head.appendChild(style);

// =========================
// Student Section
// =========================
function buildStudentSection() {
  const section = document.getElementById("studentSection");

  const title = document.createElement("h2");
  title.textContent = "👨‍🎓 Student Management";
  section.appendChild(title);

  // Input Row
  const formRow = document.createElement("div");
  formRow.className = "form-row";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Student Name";

  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.placeholder = "Age";

  const courseInput = document.createElement("input");
  courseInput.placeholder = "Course";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Student";
  addBtn.className = "student-btn";

  formRow.appendChild(nameInput);
  formRow.appendChild(ageInput);
  formRow.appendChild(courseInput);
  formRow.appendChild(addBtn);
  section.appendChild(formRow);

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
  section.appendChild(table);

  // Add Student function
  addBtn.addEventListener("click", () => {
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

    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";
  });
}

// =========================
// Subject Section
// =========================
function buildSubjectSection() {
  const section = document.getElementById("subjectSection");

  const title = document.createElement("h2");
  title.textContent = "📚 Subject Management";
  section.appendChild(title);

  // Input Row
  const formRow = document.createElement("div");
  formRow.className = "form-row";

  const codeInput = document.createElement("input");
  codeInput.placeholder = "Subject Code";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Subject Name";

  const unitInput = document.createElement("input");
  unitInput.type = "number";
  unitInput.placeholder = "Units";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Subject";
  addBtn.className = "subject-btn";

  formRow.appendChild(codeInput);
  formRow.appendChild(nameInput);
  formRow.appendChild(unitInput);
  formRow.appendChild(addBtn);
  section.appendChild(formRow);

  // Table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Code", "Name", "Units"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  section.appendChild(table);

  // Add Subject function
  addBtn.addEventListener("click", () => {
    const code = codeInput.value.trim();
    const name = nameInput.value.trim();
    const units = unitInput.value.trim();

    if (!code || !name || !units) {
      alert("Please fill out all fields!");
      return;
    }

    const row = document.createElement("tr");
    [code, name, units].forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });
    tbody.appendChild(row);

    codeInput.value = "";
    nameInput.value = "";
    unitInput.value = "";
  });
}

// =========================
// Navigation (Toggle Views)
// =========================
function setupNavigation() {
  const studentSection = document.getElementById("studentSection");
  const subjectSection = document.getElementById("subjectSection");

  document.getElementById("showStudents").addEventListener("click", () => {
    studentSection.style.display = "block";
    subjectSection.style.display = "none";
  });

  document.getElementById("showSubjects").addEventListener("click", () => {
    subjectSection.style.display = "block";
    studentSection.style.display = "none";
  });
}

// =========================
// Build UI
// =========================
buildStudentSection();
buildSubjectSection();
setupNavigation();
