const rowEl = document.querySelector('.d-flex');

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        rowEl.innerHTML += `<div class="my-col bg-danger">FizzBuzz</div>`;
    } else if (i % 3 === 0) {
        rowEl.innerHTML += `<div class="my-col bg-success">Fizz</div>`;
    } else if (i % 5 === 0) {
        rowEl.innerHTML += `<div class="my-col bg-warning">Buzz</div>`;
    } else {
        rowEl.innerHTML += `<div class="my-col bg-light">${i}</div>`;
    };

};