document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#darkmode').addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });
});