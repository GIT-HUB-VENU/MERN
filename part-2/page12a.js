const stock = [
  { name: 'Wipro', lp: 100, cp: 210 },
  { name: 'Deloitte', lp: 250, cp: 270 },
  { name: 'HDFC', lp: 200, cp: 290 }
];

function bestStock(stock) {
  let max = 0;
  let names;

  for (let i = 0; i < 3; i++) {
    if ((stock[i].cp - stock[i].lp) > max) {
      max = stock[i].cp - stock[i].lp;
      names = stock[i].name;
    }
  }

  return names;
}

// bestStock(stock)

let best = bestStock(stock);

console.log(best);