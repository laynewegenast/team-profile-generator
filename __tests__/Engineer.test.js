const Engineer = require('../lib/Engineer');

test('creates object', () => {
    const engineer = new Engineer('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee type', () => {
    const engineer = new Engineer('Jared', 111, 'sample@gmail.com', 'gitjared');

    expect(engineer.getRole()).toEqual("Engineer");
});