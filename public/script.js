document.getElementById('magic').addEventListener('click', () => {
  const el = document.getElementById('desc');
  el.textContent = 'CI/CD works! Your site was deployed by GitHub Actions 🎉';
  el.style.color = '#7dd3fc';
});

document.getElementById('time').textContent = new Date().toLocaleString();