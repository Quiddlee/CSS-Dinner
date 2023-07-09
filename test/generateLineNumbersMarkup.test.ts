import { generateLineNumbersMarkup } from '../src/ts/views/view';

test('should generate line numbers', () => {
  const lineNumberElem = generateLineNumbersMarkup();
  const lines = lineNumberElem.children;

  for (let i = 0; i < lines.length; i += 1) {
    expect(lines[i].textContent).toBe(`${i + 1}`);
  }
});

[1, 2, 3, 4];
