// Homepage subscribe popup. Shown once per visitor after a short delay.
(function () {
  var KEY = 'csb-popup-dismissed';
  var overlay = document.getElementById('subscribe-popup');
  if (!overlay) return;
  try {
    if (localStorage.getItem(KEY)) return;
  } catch (e) {
    /* storage unavailable — still show the popup */
  }

  var closeBtn = overlay.querySelector('.popup-close');

  function dismiss() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    try {
      localStorage.setItem(KEY, '1');
    } catch (e) {}
  }

  function show() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  var timer = setTimeout(show, 12000);

  function cancelAndDismiss() {
    clearTimeout(timer);
    dismiss();
  }

  if (closeBtn) closeBtn.addEventListener('click', cancelAndDismiss);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) cancelAndDismiss();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) cancelAndDismiss();
  });
})();
