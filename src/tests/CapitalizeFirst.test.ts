import capitalizeFirst from "../utils/CapitalizeFirst";

test('Capitalizes the first letter of each word', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello World';
  
    const result = capitalizeFirst(input);
  
    expect(result).toEqual(expectedOutput);
  });