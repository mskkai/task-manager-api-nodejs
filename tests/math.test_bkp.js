const { request } = require("express");

test('Test caculation tip', () => {
    const total = calculateTip(10, 0.3);
    expect(total).toBe(13);
});

test('FarenHeitToCelsius', () => {
    const value = fahrenheitToCelsius(32);
    expect(value).toBe(0);
});

test('celsiusToFahrenheit', () => {
    const value = celsiusToFahrenheit(0);
    expect(value).toBe(32);
});

test('Test Asynch Demo', (done) => {
    setTimeout(() => {
        expect(1).toBe(1);
        done()
    }, 2000);
});

test('Should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5);
        done();
    });
});

test('Should add two numbers async/await', async () => {
    const sum = await add(10, 22);
    expect(sum).toBe(32);
});


//Logics for the test cases
calculateTip = (total, tipPercent) => {
    const tip = total * tipPercent
    return tip + total;
}


const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non negative');
            }
            resolve(a + b);
        }, 2000);
    });
};
