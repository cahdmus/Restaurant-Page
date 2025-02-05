import aboutImg from './images/about.jpeg';

function load() {
    const content = document.querySelector('#content');
    const title = 'About Us';
    const text = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare, orci id cursus elementum, lectus ligula vulputate dolor, eu congue sem nibh id odio. Maecenas sapien enim, accumsan id leo vitae, commodo vehicula nulla. Etiam faucibus ipsum et blandit placerat. Pellentesque congue nulla sapien, vitae pellentesque nibh iaculis vitae. Phasellus ultricies laoreet sem, quis faucibus augue porttitor a. Etiam sed commodo ligula. Integer faucibus ipsum nibh, id lacinia augue ullamcorper in. Maecenas eu ex lobortis, bibendum ante eget, pellentesque justo. Duis blandit augue non nibh vestibulum, varius congue lacus faucibus.',
        'Etiam efficitur, ligula vitae dictum tincidunt, odio justo congue diam, et consequat nisi nisi eget nisi. Duis aliquet erat ac lectus congue placerat at non orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean commodo dui in ligula finibus ultrices. Vivamus porta molestie ligula sed consectetur. Nullam quis lacus eget purus dictum hendrerit. Donec finibus ante vel metus eleifend, eget interdum elit aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Aliquam non interdum sapien, eu interdum ex. Curabitur dignissim eu ipsum volutpat efficitur. Ut vitae quam ullamcorper, vestibulum nibh nec, pharetra mauris. Maecenas maximus elit id elementum sagittis. Cras molestie, elit eget malesuada luctus, lacus mauris egestas risus, ut luctus nulla sem nec nibh. Pellentesque eget sapien auctor, blandit sapien eget, bibendum ante. Duis faucibus posuere lorem. Mauris rutrum, ipsum ut fermentum placerat, sem diam gravida eros, in auctor justo est sed metus. Sed tempus lacus nisl, eget mattis nulla bibendum id. Praesent quis tincidunt neque. In pulvinar ante non pulvinar tincidunt. Nullam viverra porttitor faucibus. Cras sit amet porttitor massa. Sed dictum massa non auctor venenatis.'
    ]

    const about = document.createElement('div');
    about.setAttribute('id', 'aboutPage');

    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = aboutImg;
    imgContainer.appendChild(img);
    imgContainer.classList.add('imgContainer');
    about.appendChild(imgContainer);

    const h1 = document.createElement('h1');
    h1.textContent = title;
    about.appendChild(h1);

    text.forEach((el) => {
        const p = document.createElement('p');
        p.innerHTML = el;
        about.appendChild(p);
    })

    content.appendChild(about);
}

export { load }