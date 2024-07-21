document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Fetch the JSON data
    fetch('./products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="price">Original Price: <span>${product.price}</span></p>
                        <p class="discounted-price">Discounted Price: <span>${product.discountedPrice}</span></p>
                        <button class="action-button">Add to Cart</button>
                        <button class="wishlist-button">Add to Wishlist</button>
                    </div>
                `;
                swiperWrapper.appendChild(slide);
            });

            const swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
        .catch(error => console.error('Error loading products:', error));
});