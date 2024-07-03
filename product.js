        const products = [
            {
                name: "Laptop",
                price: 999.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Smartphone",
                price: 499.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Headphones",
                price: 79.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
                },
            {
                name: "Camera",
                price: 699.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Fitness Tracker",
                price: 59.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Coffee Maker",
                price: 129.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Gaming Console",
                price: 299.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Tablet",
                price: 199.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Wireless Earbuds",
                price: 129.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            },
            {
                name: "Smart Watch",
                price: 159.99,
                image: "https://e7.pngegg.com/pngimages/394/362/png-clipart-iphone-4-iphone-7-plus-iphone-x-iphone-8-iphone-6-plus-phone-repair-miscellaneous-gadget-thumbnail.png"
            }
        ];
    products.forEach((product) => {
        
        // Create elements for each product
        let productDiv = document.createElement('productDiv');
        let title1 = document.createElement('h2');
        let img2 = document.createElement('img');
        let price3 = document.createElement('p');

        // Assign values to the elements
        title1.innerHTML = product.name;
        console.log(title1)
        img2.src = product.image;
        price3.innerHTML = `${product.price.toFixed(2)}`;
        let title = document.getElementById('title')
        let img = document.getElementById('img');
        title.appendChild(title1)       
        // let product_cont = document.getElementById('product_cont')
        // // Append elements to the product container
        // productDiv.appendChild(title);
        // productDiv.appendChild(img);
        // productDiv.appendChild(price);
        // product_cont .appendChild(productDiv);
    });
console.log(productDiv)