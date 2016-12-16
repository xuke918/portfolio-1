(function () {
  var items = document.getElementsByClassName('menu-item');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('touchstart click', function (e) {
      document.getElementById('nav-check').checked = false;
    });
  }
})();
