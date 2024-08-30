const nav = document.querySelector('.navbar');

function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function () {
    const data = [{
        img: '../assets/blog/b1.jpg',
        title: 'The National Minimum Wage Is An Important Part',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit animi assumenda.',
        date: 'july 28, 2023'
    }, {
        img: '../assets/blog/b2.jpg',
        title: 'The National Minimum Wage Is An Important Part',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit animi assumenda.',
        date: 'july 28, 2023'
    }, {
        img: '../assets/blog/b3.jpg',
        title: 'The National Minimum Wage Is An Important Part',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit animi assumenda.',
        date: 'july 28, 2023'
    }, {
        img: '../assets/blog/b5.jpg',
        title: 'The National Minimum Wage Is An Important Part',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut praesentium facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo fugit animi assumenda.',
        date: 'july 28, 2023'
    },]
    const getSlidesPerView = () => {
        return window.innerWidth < 912 ? 1 : 2;
    };

    const slidesPerView = getSlidesPerView();
    const totalSlides = Math.ceil(data.length / slidesPerView);

    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement("swiper-slide");
        slide.classList.add("swiper-slide");

        for (
            let j = i * slidesPerView;
            j < (i + 1) * slidesPerView && j < data.length;
            j++
        ) {
            const card = document.createElement("div");
            card.classList.add("card-blogs");

            const item = data[j];

            card.innerHTML = `
                <div class="card-blog-content">
                    <div class='header-card'>
                        <img src="${item.img}" alt="">
                    </div>
                    <div class='body-card'>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <div class='footer-card flex item-center between'>
                        <p> <span><i class="fa-solid fa-user-tie"></i></span> By Admin</p>
                            <p><span><i class="fa-solid fa-calendar-days"></i></span>${item.date}</p>
                        </div>
                    </div>
                </div>`;

            slide.appendChild(card);
        }

        document.querySelector(".mySwiper").appendChild(slide);
    }

    const swiperEl = document.querySelector(".swiper-cards");

    const params = {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    Object.assign(swiperEl, params);

    swiperEl.initialize();

    window.addEventListener('resize', () => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            swiperEl.removeAllSlides();
            for (let i = 0; i < Math.ceil(data.length / newSlidesPerView); i++) {
                const slide = document.createElement("swiper-slide");
                slide.classList.add("swiper-slide");

                for (
                    let j = i * newSlidesPerView;
                    j < (i + 1) * newSlidesPerView && j < data.length;
                    j++
                ) {
                    const card = document.createElement("div");
                    card.classList.add("card-blogs");

                    const item = data[j];

                    card.innerHTML = `
                        <div class="card-blog-content">
                            <div class='header-card'>
                                <img src="${item.img}" alt="">
                            </div>
                            <div class='body-card'>
                                <h3>${item.title}</h3>
                                <p>${item.desc}</p>
                            </div>
                            <div class='footer-card flex item-center between'>
                            <p> <span><i class="fa-solid fa-user-tie"></i></span> By Admin</p>
                            <p><span><i class="fa-solid fa-calendar-days"></i></span>${item.date}</p>
                            </div>
                        </div>`;

                    slide.appendChild(card);
                }

                document.querySelector(".mySwiper").appendChild(slide);
            }
            swiperEl.update();
        }
    });
});



const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('#overlay');

menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
});