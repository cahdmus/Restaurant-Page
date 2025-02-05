import heroImg from './images/pexels-heftiba-940302.jpg';

function load() {
    const content = document.querySelector('#content');
    const title = 'Restaurant Name';
    const subtitle = 'Taste the difference';
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus felis, varius quis ornare eu, bibendum sit amet tellus. Quisque scelerisque bibendum ex id mollis. Donec semper felis non tellus molestie, et tristique urna mattis.';
    const btnText = 'Make a reservation';

    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    intro.appendChild(h1);
    const h2 = document.createElement('h2');
    h2.textContent = subtitle;
    intro.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = desc;
    intro.appendChild(p);
    const button = document.createElement('button');
    button.classList.add('reservations');
    button.textContent = btnText;
    intro.appendChild(button);

    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');
    const img = document.createElement('img');
    img.src = heroImg;
    hero.appendChild(img);

    content.appendChild(intro);
    content.appendChild(hero);
}

export { load }