const Calculator = require('./calculator');

const calculator = new Calculator();

it('10- 4 = 6 >', () => {
    const expected = 6;
    expect(calculator.subtract(10,4)).toEqual(expected);
})
