// Kata:
// https://www.codewars.com/kata/5853213063adbd1b9b0000be

// Example:

// Solution:
const streetFighterSelection = (fighters, position, moves) => {
  const result = [];
  let positionA = position[0];
  let positionB = position[1];
  moves.forEach(move => {
    switch (move) {
      case 'up': positionA === 0 ? positionA : positionA--; break;
      case 'down': positionA === 1 ?  positionA : positionA++; break;
      case 'right': positionB === 5 ? positionB = 0 : positionB++; break;
      case 'left': positionB === 0 ?  positionB = 5 : positionB--; break;
    };
    result.push(fighters[positionA][positionB]);
  })
  return result;
}