const Engineer = require("../lib/Engineer");


test('Engineer constructor should create a new Engineer object', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johnGitHub');
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('john@example.com');
    expect(engineer.github).toBe('johnGitHub');
});

//testing getting github method
test('getGithub() should return the Engineer\'s GitHub username', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johnGitHub');
    expect(engineer.getGithub()).toBe('johnGitHub');
});

//testing role method
test('getRole() should return "Engineer"', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johnGitHub');
    expect(engineer.getRole()).toBe('Engineer');
});
