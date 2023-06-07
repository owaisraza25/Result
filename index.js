

var studentChart = document.getElementById('chart')


const userResult = [
  {
    name: "Ahmed",
    results: [
      { subject: "English", marks: 92 },
      { subject: "Math", marks: 85 },
      { subject: "Science", marks: 78 },
      // Add more subjects and marks for John Doe
    ]
  },
  {
    name: "Ali",
    results: [
      { subject: "English", marks: 88 },
      { subject: "Math", marks: 90 },
      { subject: "Science", marks: 76 },
      // Add more subjects and marks for Jane Smith
    ]
  },
  {
    name: "Hamza",
    results: [
      { subject: "English", marks: 95 },
      { subject: "Math", marks: 82 },
      { subject: "Science", marks: 88 },
      // Add more subjects and marks for Alice Johnson
    ]
  },
  {
    name: "Hunian",
    results: [
      { subject: "English", marks: 82 },
      { subject: "Math", marks: 78 },
      { subject: "Science", marks: 79 },
      // Add more subjects and marks for Robert Davis
    ]
  },
  {
    name: "Husain",
    results: [
      { subject: "English", marks: 86 },
      { subject: "Math", marks: 92 },
      { subject: "Science", marks: 94 },
      // Add more subjects and marks for Emily Wilson
    ]
  },
  {
    name: "Zain",
    results: [
      { subject: "English", marks: 90 },
      { subject: "Math", marks: 87 },
      { subject: "Science", marks: 83 },
      // Add more subjects and marks for Michael Brown
    ]
  },
  {
    name: "Hasnian",
    results: [
      { subject: "English", marks: 91 },
      { subject: "Math", marks: 79 },
      { subject: "Science", marks: 84 },
      // Add more subjects and marks for Olivia Taylor
    ]
  },
  {
    name: "Sufiyan",
    results: [
      { subject: "English", marks: 84 },
      { subject: "Math", marks: 86 },
      { subject: "Science", marks: 90 },
      // Add more subjects and marks for James Anderson
    ]
  },
  {
    name: "Faizan",
    results: [
      { subject: "English", marks: 79 },
      { subject: "Math", marks: 93 },
      { subject: "Science", marks: 88 },
      // Add more subjects and marks for Sophia Martinez
    ]
  },
  {
    name: "Zeeshan",
    results: [
      { subject: "English", marks: 83 },
      { subject: "Math", marks: 88 },
      { subject: "Science", marks: 91 },
      // Add more subjects and marks for Benjamin Thomas
    ]
  }
];


const sortedArray = userResult.sort((a, b) => {
  const avgMarksA = getAverageMarks(a.results);
  const avgMarksB = getAverageMarks(b.results);
  return avgMarksB - avgMarksA;
});

function getAverageMarks(results) {
  const sum = results.reduce((total, result) => total + result.marks, 0);
  return sum / results.length;
}

console.log(sortedArray);






for (var i = 0; i < userResult.length; i++) {

  var result = userResult[i]

  var total = result.results[0].marks + result.results[1].marks + result.results[2].marks

  result.total = total

  var perc = (total / 300) * 100
  var backgroundColorClass = "";
  if (i == 0) {
    backgroundColorClass = "bg-color-1"
    // backgroundColorClass.style.backgroundColor = "green" // CSS class for background color
  } else if  (i == 1) {
    backgroundColorClass = "bg-color-2"

  } else if  (i == 2) {
    backgroundColorClass = "bg-color-3"
  }
  
  var resultRow = `
    <tr class="${backgroundColorClass}">
      <th height="30">${i + 1}</th>
      <th>${result.name}</th>
      <td>${result.results[0].marks}</td>
      <td>${result.results[1].marks}</td>
      <td>${result.results[2].marks}</td>
      <td>${total}</td>
      <td>${perc.toFixed(2)}</td>
    </tr>
  `;

  studentChart.innerHTML += resultRow;
}





document.getElementById('first').innerText = `1st  :` + sortedArray[0].name
document.getElementById('second').innerText = '2nd :' + sortedArray[1].name
document.getElementById('third').innerText = '3rd :' + sortedArray[2].name





































































// Function to change background color
// function changeBackgroundColor(elementId, color) {
//   document.getElementById(elementId).style.backgroundColor = color;
// }

// // ...

// // // After sorting the array
// // document.getElementById('first').innerText = '1st: ' + sortedArray[0].name;
// // document.getElementById('second').innerText = '2nd: ' + sortedArray[1].name;
// // document.getElementById('third').innerText = '3rd: ' + sortedArray[2].name;

// // Change background color for top 3 students
// changeBackgroundColor('first', 'yellow'); // Change to desired color
// changeBackgroundColor('second', 'lightgreen'); // Change to desired color
// changeBackgroundColor('third', 'orange'); // Change to desired color

// ...











