function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? unescape(value[2]) : null;
}

const navFunc = function () {
    const navbarComponent = document.querySelector('.navbar-end');
    const User = getCookie('login');

    if (!User) {
        const loginNav = document.createElement('a');
        const registerNav = document.createElement('a');
        loginNav.setAttribute('class', 'navbar-item');
        loginNav.setAttribute('href', '/login');
        loginNav.innerText = '로그인';
        registerNav.setAttribute('class', 'navbar-item');
        registerNav.setAttribute('href', '/register');
        registerNav.innerText = '회원가입';
        navbarComponent.appendChild(loginNav);
        navbarComponent.appendChild(registerNav);
    } else if (User) {
        const mypageNav = document.createElement('a');
        const logoutNav = document.createElement('a');
        const cartNav = document.createElement('a');
        mypageNav.setAttribute('class', 'navbar-item');
        mypageNav.setAttribute('href', '/my-page');
        mypageNav.innerText = '마이페이지';
        logoutNav.setAttribute('class', 'navbar-item');
        logoutNav.setAttribute('href', '/logout');
        logoutNav.innerText = '로그아웃';
        cartNav.setAttribute('class', 'navbar-item');
        cartNav.setAttribute('href', '/cart');
        cartNav.innerText = '장바구니';
        navbarComponent.appendChild(mypageNav);
        navbarComponent.appendChild(logoutNav);
        navbarComponent.appendChild(cartNav);
    }

    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarBasicExample = document.querySelector('#navbarBasicExample');
    let burgerClicker = false;
    navbarBurger.addEventListener('click', function () {
        if (!burgerClicker) {
            navbarBurger.classList.add('is-active');
            navbarBasicExample.classList.add('is-active');
            burgerClicker = true;
        } else {
            navbarBurger.classList.remove('is-active');
            navbarBasicExample.classList.remove('is-active');
            burgerClicker = false;
        }
    });

    // sticky nav메뉴 구현
    const navbar = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        let y = window.pageYOffset;
        if (y > 150) {
            navbar.classList.add('stickyToTop');
        } else {
            navbar.classList.remove('stickyToTop');
        }
    });
};