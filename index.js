// - Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector('#nested .target');
}

// - Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li');
  for (let li of ranks) {
    li.innerHTML = parseInt(li.innerHTML) + n;
  }
}

// - Define a function `deepestChild()` that pulls out the most deeply nested child
// from `div#grand-node`. (Remember, you can iterate over elements and call
// `querySelector()` and `querySelectorAll()` on them. This is challenging to
// implement correctly, but not beyond your ability!)

function deepestChild(selector = 'div#grand-node') {
  if (document.querySelectorAll(selector + ' div')[0] === undefined) {
    return document.querySelector(selector);
  } else {
    return deepestChild(selector + ' div');
  };
}
