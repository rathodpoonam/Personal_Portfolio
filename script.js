document.addEventListener("DOMContentLoaded", function () {
    const roles = ['Developer', 'Designer']; // List of roles
    let currentIndex = 0; // Index to keep track of current role


    const roleElement = document.getElementById('role'); // Get the element to update

    const roleElement1 = document.getElementById('role');
    const iconElement = document.querySelector('.icon');


    function updateIcon(role) {
        if (role === 'Developer') {
            iconElement.innerHTML = '<i class="bx bx-code-alt"></i>';
        } else if (role === 'Designer') {
            iconElement.innerHTML = '<i class="bx bx-edit-alt"></i>';
        }
    }

    updateIcon(roleElement.textContent.trim());

    setInterval(() => {
        currentIndex = (currentIndex + 1) % roles.length; // Increment index circularly
        roleElement.textContent = ` ${roles[currentIndex]}`; // Update the text
        if (`${roles[currentIndex]}` === 'Developer') {
            roleElement.style.color = '#01CCFF'; // Blue color for Developer
            iconElement.style.color ='#01CCFF' ;
        } else if (`${roles[currentIndex]}` === 'Designer') {
            roleElement.style.color = '#ff7f50'; // Coral color for Designer
            iconElement.style.color ='#ff7f50';
        };


        const role = roleElement.textContent.trim(); // Get current role
        updateIcon(role);

    }, 3000); // Change every 3 seconds (3000 milliseconds)
});

// ABOUT ME SECTION 

// FOOTER SECTION 

document.querySelectorAll('.social-links a').forEach(function(node) {
    node.addEventListener('mouseover', function() {
      node.firstElementChild.style.color = '#ccc';
    });
    node.addEventListener('mouseout', function() {
      node.firstElementChild.style.color = '#fff';
    });
  });


  $(document).ready(function() {
    $("#carouselExampleIndicators").carousel({
      interval: 5000
    });
  });
   
  


