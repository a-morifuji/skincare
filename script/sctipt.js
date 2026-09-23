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