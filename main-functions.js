const products = {
    mais: {
        title: "Mais con Yelo",
        description: "A refreshing dessert made with sweet corn, crushed ice, and milk. Perfect for hot weather!",
        image: "https://pilipinasrecipes.com/wp-content/uploads/2018/03/Mais-Con-Yelo-Recipe.jpg",
        url: "mais-con-yelo.html"
    },
    ice: {
        title: "Ice Scramble",
        description: "A sweet and slushy treat with powdered milk, chocolate syrup, and colorful sprinkles.",
        image: "https://www.pinoyrecipe.net/wp-content/uploads/2019/06/Ice-Scramble.jpg",
        url: "ice-scramble.html"
    },
    sago: {
        title: "Sago’t Gulaman",
        description: "A classic drink made with tapioca pearls, gelatin, and sweetened arnibal syrup.",
        image: "https://www.kawalingpinoy.com/wp-content/uploads/2018/12/sago-at-gulaman-5.jpg",
        url: "sagot-gulaman.html"
    },
    mango: {
        title: "Mango Sago",
        description: "A creamy dessert featuring mangoes, sago pearls, and milk, perfect for mango lovers.",
        image: "https://ricelifefoodie.com/wp-content/uploads/2023/04/the-brest-mango-sago-recipe-less-sugar-rice-life-foodie-1-500x500.jpg?crop=1",
        url: "mango-sago.html"
    },
    buko: {
        title: "Buko Pandan",
        description: "A delightful dessert with pandan-flavored jelly, young coconut, and sweetened cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NpLht_jl2QLffNmFcP1h_v75jTENrmB_lg&s",
        url: "buko-pandan.html"
    },
    halo: {
        title: "Halo-Halo",
        description: "A Filipino dessert made of crushed ice, evaporated milk, and various sweet toppings like beans, jelly, fruits, and flan, mixed together for a refreshing treat.",
        image: "https://www.kawalingpinoy.com/wp-content/uploads/2021/07/halo-halo-7.jpg",
        url: "halo-halo.html"
    }
};

function openProduct(productKey) {
    const product = products[productKey];
    const productDetails = document.querySelector('#product-details');
    document.querySelector('#product-title').innerText = product.title;
    document.querySelector('#product-description').innerText = product.description;
    document.querySelector('#product-image').src = product.image;

    const learnMoreButton = document.querySelector('#learn-more-btn');
    learnMoreButton.setAttribute('onclick', `window.location.href='${product.url}'`);

    productDetails.classList.remove('hide');
    productDetails.classList.add('show');
    productDetails.style.display = 'block';
}

function closeProduct() {
    const productDetails = document.querySelector('#product-details');
    productDetails.classList.remove('show');
    productDetails.classList.add('hide');
    setTimeout(() => {
        productDetails.style.display = 'none';
        productDetails.classList.remove('hide');
    });
}