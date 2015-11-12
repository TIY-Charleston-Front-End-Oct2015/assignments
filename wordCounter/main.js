function ready(fn) {

  if(typeof fn !== 'function') return;

  if(document.readyState === "complete" || document.readyState === "interactive") {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
}

ready(function () {
  var childArr = [].slice.call(document.body.children);
  readTime.configWPM(500);
  document.querySelector('h3.reading-time').innerHTML = readTime.words(childArr);
});
