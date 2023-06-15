function evaluate(code, guess) {
  let correctPlacements = 0;
  let correctColorInGuess = 0;

  code.forEach((num, index) => {
    if (num === guess[index]) {
      correctPlacements += 1;
    }
  });

  const guessedColorsArr = [];
  guess.forEach((color, index) => {
    if (colorIsPresentButInWrongSpot(code, color, index) && !guessedColorsArr.includes(color)) {
      correctColorInGuess += 1;
    }
    guessedColorsArr.push(color);
  });

  return [correctPlacements, correctColorInGuess];
}

test('plays mastermind correctly', () => {
  expect(evaluate(['blue', 'red', 'green', 'pink'], ['yellow', 'red', 'blue', 'purple'])).toEqual([1, 1]);
  expect(evaluate(['blue', 'red', 'green', 'pink'], ['blue', 'red', 'purple', 'brown'])).toEqual([2, 0]);
  expect(evaluate(['blue', 'red', 'green', 'pink'], ['pink', 'green', 'purple', 'brown'])).toEqual([0, 2]);
});

test('plays advanced mastermind', () => {
  expect(evaluate(['blue', 'red', 'green', 'pink'], ['', '', '', ''])).toEqual([0, 0]);
  expect(evaluate(['blue', 'blue', 'green', 'green'], ['green', 'green', 'blue', 'blue'])).toEqual([0, 2]);
  expect(evaluate(['blue', 'red', 'green', 'pink', 'black'], ['green', 'red', 'blue', 'blue', 'white'])).toEqual([
    1, 2,
  ]);
});

function colorIsPresentButInWrongSpot(code, color, index) {
    return code.includes(color) && code[index] != color;
}

