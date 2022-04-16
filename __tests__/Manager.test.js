const Manager = require('../lib/Manager');

test('creates Manager obj', () => {
    const manager = new Manager('Jared', 111, 'sample@gmail.com', 123);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager('Jared', 111, 'sample@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});