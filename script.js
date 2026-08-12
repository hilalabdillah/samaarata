(function () {
  var SHOW_INTRO = true;
  var preloader = document.getElementById('preloader');
  var video = document.getElementById('intro-video');
  var skipBtn = document.getElementById('skip-intro');
  var muteBtn = document.getElementById('toggle-mute');
  var muted = true;

  function updateMuteGlyph() {
    muteBtn.innerHTML = muted ? '&#128263;' : '&#128266;';
    muteBtn.title = muted ? 'Unmute' : 'Mute';
  }

  function finishPreloader() {
    if (preloader.classList.contains('fading') || preloader.classList.contains('hidden')) return;
    preloader.classList.add('fading');
    setTimeout(function () { preloader.classList.add('hidden'); }, 750);
  }

  if (SHOW_INTRO) {
    video.muted = true;
    video.play().catch(function () {});
    updateMuteGlyph();
  } else {
    preloader.classList.add('hidden');
  }

  skipBtn.addEventListener('click', function () {
    video.pause();
    finishPreloader();
  });

  muteBtn.addEventListener('click', function () {
    muted = !muted;
    video.muted = muted;
    updateMuteGlyph();
  });

  video.addEventListener('ended', finishPreloader);

  // Nav toggle (mobile)
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navLinks.classList.remove('open'); });
  });
})();
