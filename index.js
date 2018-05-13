function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let number = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML = parseInt(number[i].innerHTML) + n;
  }
  return number;
}

function deepestChild(id, element) {
  var nodes = document.querySelectorAll(`#${id} ${element}`);
  if(nodes.length) return false;
  return nodes[nodes.length-1];
}