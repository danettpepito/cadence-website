  // Animate stat bars on load
  document.querySelectorAll('.stat-bar').forEach(bar => {
    bar.style.transformOrigin = 'left';
  });

  // Active member icon highlight based on current page
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.member-icon').forEach(icon => {
    if (icon.getAttribute('href') === page) {
      icon.classList.add('active');
    } else if (page === '' || page === 'cadence-cherie.html') {
      // default
    } else {
      icon.classList.remove('active');
    }
  });