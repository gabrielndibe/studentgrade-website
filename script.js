
const students = JSON.parse(localStorage.getItem('students')) || [];
function renderTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = ''; 

  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.score}</td>
      <td>${student.grade}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault();


  const name = document.getElementById('name').value.trim();
  const score = parseInt(document.getElementById('score').value);
  const grade = document.getElementById('grade').value;


  if (name === '' || isNaN(score) || grade === '') {
    alert('Please fill in all fields correctly.');
    return;
  }
  
   students.push({ name, score, grade });

  
   localStorage.setItem('students', JSON.stringify(students));

   
   this.reset();

   
   renderTable();
 });

 
 renderTable();