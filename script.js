
let orderItems = [];
let orderTotal = 0;

window.addEventListener('DOMContentLoaded', () => {
  const secretBurgerData = localStorage.getItem('secretBurger');
  if (secretBurgerData) {
    const secretBurger = JSON.parse(secretBurgerData);

    secretBurger.ingredients.forEach(item => {
      orderItems.push({ name: item.name, price: item.price });
      orderTotal += item.price;
    });

    localStorage.removeItem('secretBurger');
    renderOrder();
  }
});

document.getElementById('submitBtn').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach((checkbox) => {
    const ingredient = checkbox.value;
    const price = parseFloat(checkbox.dataset.price);
    orderItems.push({ name: ingredient, price: price });
    orderTotal += price;
  });

  renderOrder();
});

function renderOrder() {
  const burgerOutput = document.getElementById('burgerOutput');
  const totalPriceDisplay = document.getElementById('totalPrice');

  burgerOutput.innerHTML = '';
  orderItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    burgerOutput.appendChild(li);
  });

  totalPriceDisplay.textContent = orderTotal.toFixed(2);
}

