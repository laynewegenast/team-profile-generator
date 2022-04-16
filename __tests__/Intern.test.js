const Intern = require('../lib/Intern');

test('creates object', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(intern.schoolname).toEqual(expect.any(String));
});

test('gets intern school name', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(intern.getSchoolName()).toEqual(expect.stringContaining(intern.schoolname.toString()));
});

test('gets employee type', () => {
    const intern = new Intern('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(intern.getSchoolName()).toEqual("Intern");
});