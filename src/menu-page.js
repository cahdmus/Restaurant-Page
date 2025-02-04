import avocadoToastImg from './images/menu/avocado toasts.jpeg';
import hamburgerImg from './images/menu/hamburger.webp';
import pancakesImg from './images/menu/pancakes.jpeg';
import pastaImg from './images/menu/pasta.webp';
import pizzaImg from './images/menu/pizza.jpeg';
import saladImg from './images/menu/salad.jpeg';
import sesameChickenImg from './images/menu/sesame chicken.jpeg';
import soupImg from './images/menu/soup.jpeg';


    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    class Dish {
        constructor(name, img, price) {
            this.name = name;
            this.img = img;
            this.price = price.toFixed(2);
            this.desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae accumsan sapien. Nam id lacus at neque aliquam vulputate. Nunc tempus, lorem non maximus ultrices, urna sem suscipit purus, ut tincidunt tortor sapien nec ligula.';
        }

        displayDish() {
            const container = document.createElement('div');
            container.classList.add('dishDisplay');
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            img.src = this.img;
            imgContainer.appendChild(img);
            imgContainer.classList.add('imgContainer');
            container.appendChild(imgContainer);
            const title = document.createElement('div');
            title.classList.add('title');          
            const h3 = document.createElement('h3');
            h3.textContent = this.name;
            title.appendChild(h3);
            const h4 = document.createElement('h4');
            h4.textContent = this.price;
            title.appendChild(h4);
            container.appendChild(title);
            const p = document.createElement('p');
            p.textContent = this.desc;
            container.appendChild(p);
            menu.appendChild(container);
        }
    }

    const avocadoToast = new Dish('Avocado Toast', avocadoToastImg, 9.99)
    const hamburger = new Dish('Hamburger with Fries', hamburgerImg, 11.99)
    const pancakes = new Dish('Homemade Pancakes', pancakesImg, 5.99)
    const pasta = new Dish('Penne Bolognese', pastaImg, 12.99)
    const pizza = new Dish('Quattro Formaggi Pizza', pizzaImg, 11.99)
    const salad = new Dish('Royal Salad', saladImg, 12.99)
    const sesameChicken = new Dish('Sesame Chicken', sesameChickenImg, 15.99)
    const soup = new Dish('Harvest Season Soup', soupImg, 9.99)


    avocadoToast.displayDish();
    hamburger.displayDish();
    pancakes.displayDish();
    pasta.displayDish();
    pizza.displayDish();
    salad.displayDish();
    sesameChicken.displayDish();
    soup.displayDish();

    export function appendPage() {
        content.appendChild(menu);
    }