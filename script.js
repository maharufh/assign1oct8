document.querySelectorAll('.quantity-select').forEach(select => {
    select.addEventListener('change', updateTotal);
});

function updateTotal() {
    const item1Price = 65;
    const item2Price = 32;

    const item1Qty = document.querySelector('.quantity-select').value;
    const item2Qty = document.querySelectorAll('.quantity-select')[1].value;

    const subtotal = (item1Price * item1Qty) + (item2Price * item2Qty);
    const shipping = 5;
    const total = subtotal + shipping;

    document.querySelector('h1').textContent = `$${total}.00`;
    document.querySelector('.total-due span').textContent = `$${total}.00`;
}
