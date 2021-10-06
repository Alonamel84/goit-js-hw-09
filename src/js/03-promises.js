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

const stepNode = Number(document.querySelector('input[name="step"]'));
const amountNode = Number(document.querySelector('input[name="amount"]'));

const buttonNode = document.querySelector('button');
buttonNode.addEventListener('submit', e => {
  e.preventDefault();
  console.log(delayNode.value);
  for (let position = 1; position <= amountNode.value; position++) {
    delay = delayNode.value + stepNode.value;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

//
