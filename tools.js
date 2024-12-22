document.getElementById('numerologyForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const resultDiv = document.getElementById('result');

  // Simple numerology calculation
  const numerologyNumber = calculateNumerology(name);
  resultDiv.textContent = `Your numerology number is: ${numerologyNumber}`;
});

function calculateNumerology(name) {
  const letters = name.toUpperCase().replace(/[^A-Z]/g, '');
  const letterValues = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
      J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
      S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };
  let sum = 0;

  for (let letter of letters) {
      sum += letterValues[letter];
  }

  while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
  }

  return sum;
}
