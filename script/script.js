window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    loader.style.opacity = "0";
    
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
}, 5000);


const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
    }, {
        threshold: 0.2
});

fadeElements.forEach((el) => observer.observe(el));

// ハンバーガーメニュー
const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');
    const navLinks = document.querySelectorAll('.header_nav a');

    // ボタンクリック時の開閉
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // リンクをクリックしたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

// FAQ
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq_question');
    const answer = item.querySelector('.faq_detail');

    question.addEventListener('click', () => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
        answer.style.maxHeight = '0';
        }
    });
});