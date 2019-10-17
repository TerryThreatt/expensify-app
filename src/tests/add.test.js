const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!` 

test('should add two numbers', () => { 
    const result = add(3,4)
    expect(result).toBe(7)
})

test('Should return correct name', () => { 
    const named = generateGreeting('Mike')
    expect(named).toContain('Mike')
})

test('Should generate greeting for no name', () => { 
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})