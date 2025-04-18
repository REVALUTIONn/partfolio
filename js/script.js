    const homeBtn = document.querySelector('.home_btn'),
    productsBtn = document.querySelector('.products_btn'),
    aboutBtn = document.querySelector('.about_btn'),
    reviewBtn = document.querySelector('.review_btn'),
    servisesBtn = document.querySelector('.servises_btn'),
    profileBtn = document.querySelector('.profile'),
    cartBtn = document.querySelector('.cart'),
    favouriteBtn = document.querySelector('.favourite'),
    shopBtn = document .querySelector('.shop_button'),
    aboutShopBtn = document.querySelector('.about_shop');

    homeBtn.addEventListener('click', (event) => {
        document.querySelector('.main').scrollIntoView({ behavior: "smooth"})
        event.preventDefault()
    })

    productsBtn.addEventListener('click', (event) => {
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth'})
        event.preventDefault()
    })

    shopBtn.addEventListener('click', (event) => {
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth'})
        event.preventDefault()
    })

    aboutShopBtn.addEventListener('click', (event) => {
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth'})
        event.preventDefault()
    })

    aboutBtn.addEventListener('click', (event) => {
        document.querySelector('.About').scrollIntoView({ behavior: "smooth"})
        event.preventDefault()
    })

    reviewBtn.addEventListener('click', (event) => {
        document.querySelector('.feedback_title').scrollIntoView({ behavior: 'smooth'})
        event.preventDefault()
    })

    servisesBtn.addEventListener('click', (event) => {
        document.querySelector('.servis_text').scrollIntoView({ behavior: "smooth"})
        event.preventDefault()
    })

    profileBtn.addEventListener('click', (event) => {
        document.querySelector('.login').scrollIntoView({ behavior: 'smooth'})
        event.preventDefault()
    })

    // ABOUT_PHOTOS

    const smallImg = document.querySelectorAll('.small_image'),
      bigImg = document.querySelector('.big_image');

    smallImg.forEach(images => {
        images.addEventListener('click', () => {
            if(images.classList.contains('active')) return;

            smallImg.forEach(img => img.classList.remove('active'));
            images.classList.add('active');

            bigImg.src = images.getAttribute('src');
    });
});