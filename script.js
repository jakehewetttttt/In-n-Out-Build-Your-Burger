
document.getElementById('submitBtn').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const burgerOutput = document.getElementById('burgerOutput');
  const totalPriceDisplay = document.getElementById('totalPrice');

  burgerOutput.innerHTML = ''; 
  let total = 0;

  checkboxes.forEach((checkbox) => {
    const ingredient = checkbox.value;
    const price = parseFloat(checkbox.dataset.price);
    total += price;

    const li = document.createElement('li');
    li.textContent = `${ingredient} - $${price.toFixed(2)}`;
    burgerOutput.appendChild(li);
  });

  totalPriceDisplay.textContent = total.toFixed(2);
});
