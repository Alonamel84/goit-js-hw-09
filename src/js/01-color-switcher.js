const allButtonsNode = document.querySelectorAll('button');

console.log(document.querySelectorAll('button'));
allButtonsNode.addEventListener('click', e => {
  document.style.backgroundColor = '#black';
});
