const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('sample', 111, 'sample@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});