
const buttons = document.querySelectorAll('.btn');
const products = document.querySelectorAll('.store-item');
//For search buttons
//function to match the filter button value and products
const filter = (e) => {
    e.preventDefault(); //prevents the default submit action of the button to take you to the top of page 
    const buttonName = e.target.dataset.filter
    products.forEach(product => {
        if (buttonName === 'all') {
            product.style.display = 'block'
        }
        else {
            if (product.classList.contains(buttonName)) {
                product.style.display = 'block'

            }
            else {
                product.style.display = 'none'

            }

        }


    })
}
//Function on click
const onClick = button => {
    button.addEventListener('click', filter)
}
buttons.forEach(onClick);
//Search Function
const searchBox = document.getElementById('searchItem');

searchBox.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
//trim function removes empty spaces before and after the typed word or words
    products.forEach(product => {
        if (product.textContent.includes(searchFilter)) {
            product.style.display = 'block';
        }
        else {
            product.style.display = 'none'

        }
    })

});