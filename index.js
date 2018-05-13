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

function deepestChild() {
  let parent = document.querySelector('div#grand-node');
  let sub = [];
  while (parent) {
    if (typeof parent.innerHTML === 'string') {
      return parent;
    }
  }
  if (Array.isArray(parent)) {
    sub.push(parent);
  }
  parent = sub.shift();
}