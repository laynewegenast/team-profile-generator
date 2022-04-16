const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'University of Texas');

    expect(intern.schoolName).toEqual(expect.any(String));
});

test('gets intern school name', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'University of Texas');

    expect(intern.getSchoolName()).toEqual(expect.stringContaining(intern.schoolName.toString()));
});

test('gets employee type', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'University of Texas');

    expect(intern.getRole()).toEqual("Intern");
});