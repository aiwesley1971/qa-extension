document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.help-tab').forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      switchTab(i + 1);
    });
  });
});

function switchTab(n) {
  document.querySelectorAll('.help-tab').forEach(function (t, i) {
    t.classList.toggle('active', i + 1 === n);
  });
  document.querySelectorAll('.help-tab-panel').forEach(function (p, i) {
    p.classList.toggle('active', i + 1 === n);
  });
}
