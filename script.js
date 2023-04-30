function hideSlide() {
	var slide = document.getElementsByClassName("slide")[0];
	slide.style.display = "none";
  }
  const items = [
    {
        name: 'Cat Food',
        image: 'https://images.unsplash.com/photo-1588740841784-53ca3692020a',
        price: 10.99,
        description: 'Premium quality cat food for your feline friend.'
    },
    {
        name: 'Dog Toy',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
        price: 5.99,
        description: 'A fun and durable toy for your dog to play with.'
    },
    {
        name: 'Fish Tank',
        image: 'https://images.unsplash.com/photo-1607526875686-d6aaef98a7f1',
        price: 50.00,
        description: 'A beautiful and spacious fish tank for your aquatic pets.'
    },
];

const main = document.querySelector('main');

items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>$${item.price.toFixed(2)}</p>
        <button>Add to Cart</button>
    `;
    main.appendChild(div);
});
