const { generateStrongPassword, isStrongPassword } = require('./index');

test('should generate a strong password', () => {
    expect(isStrongPassword(generateStrongPassword(12))).toBe(true);
});



test('should return true for a strong password', () => {
    expect(isStrongPassword("Hello World")).toBe(false);
});

test('should return true for a strong password', () => {
    const password = "ADGR36Nsva";
    expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
});

test('should generate a strong password 10 times in a row', () => {
    for (let i = 0; i < 10; i++) {
        expect(isStrongPassword(generateStrongPassword(12))).toBe(true);
    }
});