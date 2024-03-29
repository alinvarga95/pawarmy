function hideSlide() {
	var slide = document.getElementsByClassName("slide")[0];
	slide.style.display = "none";
  }
  const items = [
    {
        name: 'Cat Food',
        image: 'https://cdn11.bigcommerce.com/s-lmdkge2gql/images/stencil/1280x1280/products/4350/5129/Whiskas%20Complete%20Chicken__69188.1651792692.jpg?c=1',
        price: 10.99,
        description: 'Premium quality cat food for your feline friend.'
    },
    {
        name: 'Dog Toy',
        image: 'https://cdn.shopify.com/s/files/1/0582/2047/8653/products/gipet6029a_1_1800x1800.jpg?v=1669983332',
        price: 5.99,
        description: 'A fun and durable toy for your dog to play with.'
    },
    {
        name: 'Fish Tank',
        image: 'https://m.media-amazon.com/images/I/51ZIxpmdMfL._AC_.jpg',
        price: 50.00,
        description: 'A beautiful and spacious fish tank for your aquatic pets.'
    },
];

const main = document.querySelector('main');

items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
        <img src="£{item.image}" alt="£{item.name}">
        <h2>£{item.name}</h2>
        <p>£{item.description}</p>
        <p>££{item.price.toFixed(2)}</p>
        <button>Add to Cart</button>
    `;
    main.appendChild(div);
});

// Select the form element
const form = document.querySelector('#donation-form');

// Add an event listener to the form submit event
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Select the form inputs
  const amountInput = document.querySelector('#
