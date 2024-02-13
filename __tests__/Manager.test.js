const Manager = require("../lib/Manager");

test('Manager constructor should create a new Manager object', () => {
    const manager = new Manager('Austyn', 3, 'austyn@example.com', 24);
    expect(manager.name).toBe('Austyn');
    expect(manager.id).toBe(3);
    expect(manager.email).toBe('austyn@example.com');
    expect(manager.officeNumber).toBe(24);
});

test('getOfficeNumber() should return the Manager\'s office number', () => {
    const manager = new Manager('Austyn', 3, 'austyn@example.com', 24);
    expect(manager.getOfficeNumber()).toBe(24);
});

test('getRole() should return "Manager"', () => {
    const manager = new Manager('Austyn', 3, 'austyn@example.com', 24);
    expect(manager.getRole()).toBe('Manager');
});
