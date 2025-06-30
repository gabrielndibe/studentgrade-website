onst students = JSON.parse(localStorage.getItem('students')) || [];

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  }else if (score >= 70) {
    return "C";
  }else if (score >= 60) {
    return "D";
  }else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}
 function renderTable() {
  const tableBody =document.getElementById("tableBody");
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

  
  if (name === '' || isNaN(score) || score < 0 || score > 100) {
    alert('Please enter a valid name and a score between 0 and 100.');
    return;
  }

  
  const grade = calculateGrade(score);

  
  students.push({ name, score, grade });
  localStorage.setItem('students', JSON.stringify(students));

  
  this.reset();

  
  renderTable();
});


renderTable();
  
  
