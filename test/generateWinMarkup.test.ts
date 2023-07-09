import { generateWinMarkup } from '../src/ts/views/tableView/tableView';

test('should return icons', () => {
  document.body.append(generateWinMarkup());

  expect(document.body.firstElementChild?.innerHTML.trim()).toBe(
    `You Win! 🎉🎉🎉`.trim(),
  );
});
