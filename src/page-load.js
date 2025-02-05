import heroImg from './images/pexels-heftiba-940302.jpg';

// const content = document.querySelector('#content');

// const intro = document.createElement('div');
// intro.setAttribute('id', 'intro');
// const h1 = document.createElement('h1');
// h1.textContent = 'Restaurant Name';
// intro.appendChild(h1);
// const h2 = document.createElement('h2');
// h2.textContent = 'Taste the difference';
// intro.appendChild(h2);
// const p = document.createElement('p');
// p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus felis, varius quis ornare eu, bibendum sit amet tellus. Quisque scelerisque bibendum ex id mollis. Donec semper felis non tellus molestie, et tristique urna mattis.';
// intro.appendChild(p);
// const button = document.createElement('button');
// button.classList.add('reservations');
// button.textContent = 'Make a reservation';
// intro.appendChild(button);

// const hero = document.createElement('div');
// hero.setAttribute('id', 'hero');
// const img = document.createElement('img');
// img.src = heroImg;
// hero.appendChild(img);

// export function appendPage() {
//     content.appendChild(intro);
//     content.appendChild(hero);
// }



export default (function () {
    const webPage = {
        title: 'Restaurant Name',
        subtitle: 'Taste the difference',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus felis, varius quis ornare eu, bibendum sit amet tellus. Quisque scelerisque bibendum ex id mollis. Donec semper felis non tellus molestie, et tristique urna mattis.',
        btnText: 'Make a reservation',
        init() {
            this.cacheDOM();
            this.buildPage();
        },
        cacheDOM() {
            return content = document.querySelector('#content');
        },
        buildPage() {
            const intro = document.createElement('div');
            intro.setAttribute('id', 'intro');
            const h1 = document.createElement('h1');
            h1.textContent = this.title;
            intro.appendChild(h1);
            const h2 = document.createElement('h2');
            h2.textContent = this.subtitle;
            intro.appendChild(h2);
            const p = document.createElement('p');
            p.textContent = this.desc;
            intro.appendChild(p);
            const button = document.createElement('button');
            button.classList.add('reservations');
            button.textContent = this.btnText;
            intro.appendChild(button);

            const hero = document.createElement('div');
            hero.setAttribute('id', 'hero');
            const img = document.createElement('img');
            img.src = heroImg;
            hero.appendChild(img);
        },
        appendPage() {
            content.appendChild(intro);
            content.appendChild(hero);
        }
    }

    return webPage.appendPage();
})();