// toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

//sidebar
document.addEventListener("DOMContentLoaded", function (event) {

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
      })
    }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))

  // added to make the sidebar oppened when load the page in the desktop view
    // Show sidebar by default on desktop view
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    function handleDesktopChange(e) {
        const nav = document.getElementById('nav-bar');
        const toggle = document.getElementById('header-toggle');
        const bodypd = document.getElementById('body-pd');
        const headerpd = document.getElementById('header');

        if (e.matches) {
            nav.classList.add('show'); // Show sidebar
            toggle.classList.add('bx-x'); // Set the icon to the "close" icon
            bodypd.classList.add('body-pd'); // Add padding to body
            headerpd.classList.add('body-pd'); // Add padding to header
            document.querySelector('.height-100').style.paddingLeft = 'var(--nav-width)'; // Adjust main content padding
        } else {
            nav.classList.remove('show'); // Hide sidebar
            toggle.classList.remove('bx-x'); // Set the icon to the "menu" icon
            bodypd.classList.remove('body-pd'); // Remove padding from body
            headerpd.classList.remove('body-pd'); // Remove padding from header
            document.querySelector('.height-100').style.paddingLeft = '0'; // Reset main content padding
        }
    }

    // Initial check
    handleDesktopChange(mediaQuery);
    // Listen for changes
    mediaQuery.addListener(handleDesktopChange);

  // Your code to run since DOM is loaded and ready
});