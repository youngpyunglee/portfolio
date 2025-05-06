document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    // Function to remove active class from all menu items
    function removeActiveClasses() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Add click event to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionID = this.getAttribute('href').substring(1);
            const sectionToScrollTo = document.getElementById(sectionID);

            // Smooth scroll to the section
            sectionToScrollTo.scrollIntoView({ behavior: 'smooth' });

            removeActiveClasses();
            this.classList.add('active');
        });
    });

    // Function to check which section is in view
    function activateMenuSectionInView() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        removeActiveClasses();
        if (menuItems[index]) {
            menuItems[index].classList.add('active');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', activateMenuSectionInView);
   
    // Toggle the visibility of the menu
    var micon = document.querySelector('.Micon');
    var menu = document.getElementById('menu'); // Corrected this line

    micon.addEventListener('click', function() {
        menu.classList.toggle('hide-menu'); // Corrected this line
    });

    
});
