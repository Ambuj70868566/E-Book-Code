// You can use JavaScript to fetch data dynamically and populate the course and event sections

// Sample data for courses
const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, title: 'Web Development', description: 'Build websites and web applications.' }
  ];
  
  // Sample data for events
  const events = [
    { id: 1, title: 'Seminar on Science', date: '2023-12-28', location: 'Auditorium A' },
    { id: 2, title: 'Workshop on Mathematics', date: '2023-12-30', location: 'Room 101' }
  ];
  
  // Function to display courses
  function displayCourses() {
    const courseList = document.querySelector('.course-list');
  
    courses.forEach(course => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      courseList.appendChild(card);
    });
  }
  
  // Function to display events
  function displayEvents() {
    const eventList = document.querySelector('.event-list');
  
    events.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      `;
      eventList.appendChild(card);
    });
  }
  
  // Call the functions to display courses and events when the page loads
  window.onload = function() {
    displayCourses();
    displayEvents();
  };
// Add click event to buttons to toggle dropdowns
const dropdowns = document.querySelectorAll('.dropdown .dropbtn');

dropdowns.forEach(btn => {
  btn.addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
// Add event listener for hovering
let flipContainer = document.querySelector('.flip-container');
flipContainer.addEventListener('mouseover', function() {
 flipContainer.querySelector('.flipper').classList.add('flip');
});

// Remove event listener for unhovering
flipContainer.addEventListener('mouseout', function() {
 flipContainer.querySelector('.flipper').classList.remove('flip');
});  