const slides = [{
    title: "Инженерные изыскания в строительстве",
    description: "С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.",
    subtitle: "Выполняем инженерные изыскания с 1988 года",
    background: "../images/bridge.png",
    button1Text: "Посмотреть услуги",
    button1Link: "services.html",
    button2Text: "Наши проекты",
    button2Link: "projects.html"
}, {
    title: "Проектирование и строительство мостов",
    description: "Опыт работы с уникальными инфраструктурными проектами, включая мосты и транспортные развязки.",
    subtitle: "Мосты, дороги и другие инфраструктурные проекты",
    background: "../images/bridge2.png",
    button1Text: "Посмотреть услуги",
    button1Link: "services.html",
    button2Text: "Наши проекты",
    button2Link: "projects.html"
}, {
    title: "Экологические исследования для строительства",
    description: "Мы проводим полные экологические исследования, необходимые для безопасного строительства объектов.",
    subtitle: "Экологические изыскания для безопасности строительства",
    background: "../images/bridge3.png",
    button1Text: "Посмотреть услуги",
    button1Link: "services.html",
    button2Text: "Наши проекты",
    button2Link: "projects.html"
}, {
    title: "Геодезические изыскания для строительства",
    description: "Предоставляем услуги по геодезии для проектирования и строительства различных объектов.",
    subtitle: "Геодезия для строительства",
    background: "../images/bridge4.png",
    button1Text: "Посмотреть услуги",
    button1Link: "services.html",
    button2Text: "Наши проекты",
    button2Link: "projects.html"
}];

let currentSlide = 0;

const hero = document.querySelector('.hero');
const slideTitle = document.getElementById('slideTitle');
const slideDescription = document.getElementById('slideDescription');
const slideSubtitle = document.getElementById('slideSubtitle');
const sliderCounter = document.getElementById('sliderCounter');
const button1 = document.querySelector('.hero__button');
const button2 = document.querySelector('.hero__button_accent');
const breadcrumbsList = document.getElementById('breadcrumbsList');

const updateSlide = () => {
    const slide = slides[currentSlide];

    // Обновляем фон с линейным чёрным градиентом
    hero.style.backgroundImage =
        `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), 
url(${slide.background})`;

    // Обновляем текст
    slideTitle.textContent = slide.title;
    slideDescription.textContent = slide.description;
    slideSubtitle.textContent = slide.subtitle;

    // Обновляем кнопки
    button1.textContent = slide.button1Text;
    button1.setAttribute('href', slide.button1Link);
    button2.textContent = slide.button2Text;
    button2.setAttribute('href', slide.button2Link);

    // Обновляем счетчик слайдов
    sliderCounter.textContent = `${String(currentSlide + 1).padStart(2, '0')} - ${String(slides.length).padStart(2, '0')}`;

    // Обновляем хлебные крошки
    breadcrumbsList.innerHTML = ''; // Очистка предыдущих хлебных крошек
    slides.forEach((_, index) => {
        const breadcrumbItem = document.createElement('li');
        breadcrumbItem.classList.add('breadcrumbs__item');

        const breadcrumbLink = document.createElement('a');
        breadcrumbLink.href = '#';
        breadcrumbLink.classList.add('breadcrumbs__link');

        // Добавляем обработчик клика для изменения слайда
        breadcrumbLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentSlide = index;
            updateSlide();
        });

        // Добавляем класс 'active' к текущей крошке
        if (index === currentSlide) {
            breadcrumbLink.classList.add('active');
        }

        breadcrumbItem.appendChild(breadcrumbLink);
        breadcrumbsList.appendChild(breadcrumbItem);
    });
};


document.getElementById('nextSlide').addEventListener('click', (e) => {
    e.preventDefault();
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.getElementById('prevSlide').addEventListener('click', (e) => {
    e.preventDefault();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Инициализация слайдера при загрузке страницы
updateSlide();