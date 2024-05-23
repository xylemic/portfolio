document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav .nav-link');
  let currentPath = window.location.pathname.split('/').pop(); // Get just the filename
  const currentPage = currentPath.split('.')[0]; // Remove the file extension

  links.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  })
})