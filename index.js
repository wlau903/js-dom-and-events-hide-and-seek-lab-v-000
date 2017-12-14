function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3];
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML + n).toString();
  }
}
