import "./styles.css";
import * as HomePage from "./page-load.js";
import * as MenuPage from "./menu-page.js";
import * as AboutPage from "./about-page.js";

(function () {
    const content = document.querySelector('#content');
    const btns = document.querySelectorAll('button');
    HomePage.appendPage();

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'home':
                    content.innerHTML = '';
                    HomePage.appendPage();
                    break;
                case 'menu':
                    content.innerHTML = '';
                    MenuPage.appendPage();
                    break;
                case 'about':
                    content.innerHTML = '';
                    AboutPage.appendPage();
                    break;
                case 'reservations':
                    alert('this is not a real website my boy');
                    break;
            }
        })
    });
})()