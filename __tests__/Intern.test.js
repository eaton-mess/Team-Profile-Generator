const Intern = require("../lib/Intern");

test('Intern constructor should create a new Intern object', () => {
    const intern = new Intern('Mary', 2, 'mary@example.com', 'Nonsense');
    expect(intern.name).toBe('Mary');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('mary@example.com');
    expect(intern.school).toBe('Nonsense');
});

test('getSchool() should return the Intern\'s school', () => {
    const intern = new Intern('Mary', 2, 'mary@example.com', 'Nonsense');
    expect(intern.getSchool()).toBe('Nonsense');
});

test('getRole() should return "Intern"', () => {
    const intern = new Intern('Mary', 2, 'mary@example.com', 'Nonsense');
    expect(intern.getRole()).toBe('Intern');
});
