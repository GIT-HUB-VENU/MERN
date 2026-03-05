
const prod = [
  { id: 1, name: "prod1", price: 25 },
  { id: 2, name: "prod2", price: 50 },
  { id: 3, name: "prod3", price: 45 }
];

 prod.forEach((i) => {
  console.log(i);
});


let cart = [];
prod.map((i) => {
  i.price > 40;
});

prod.forEach((i) => {
  console.log(i.price);
});

// Cart object
cart = {
  ...prod[1],
  quantity: 1
};

console.log(cart);