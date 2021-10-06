function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((result, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        result({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
const delayNode = document.querySelector('input[name="delay"]');
const formNode = document.querySelector('form');
const stepNode = document.querySelector('input[name="step"]');
const amountNode = document.querySelector('input[name="amount"]');
const buttonNode = document.querySelector('button');
let delay = Number(delayNode.value);
formNode.addEventListener('submit', e => {
  e.preventDefault();

  // console.log(delayNode.value, amountNode.value, stepNode.value);
  for (let position = 1; position <= Number(amountNode.value); position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(stepNode.value);
  }
});

//
