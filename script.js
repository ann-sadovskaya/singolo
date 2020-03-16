const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let anchor = event.target.innerHTML.toLowerCase();
    window.scrollTo({
        top: document.querySelector(`#${anchor}`).offsetTop - 1089,
        behavior: 'smooth'
    });
});

function switchOffPhones() {
    const IPHONES = document.querySelectorAll(".iphone");

    IPHONES.forEach(iphone => iphone.querySelectorAll(".clickable").forEach(
        phoneElement => phoneElement.addEventListener("click", event => {
            let wallpapper = iphone.querySelector(".wallpapper");
            if (wallpapper.classList.contains("switched-off")) {
                wallpapper.classList.remove("switched-off")
            } else {
                wallpapper.classList.add("switched-off");
            }
        })
    ));
}

switchOffPhones();

const GALLERY = document.getElementById('gallery');

GALLERY.addEventListener("click", event => {
    if (event.target.tagName !== 'IMG') return;
    GALLERY.querySelectorAll('a').forEach(el => el.querySelector('img').classList.remove('gallery-border'));
    event.target.classList.add("gallery-border");
})

const FILTER_GALLERY = document.getElementsByClassName('filter-panel')[0];

FILTER_GALLERY.addEventListener("click", event => {
    if ((event.target.tagName !== 'BUTTON') || (event.target.classList.contains('active'))) return;
    FILTER_GALLERY.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
    let firstItem = GALLERY.firstElementChild;
    GALLERY.removeChild(firstItem);
    GALLERY.appendChild(firstItem);
})

const SUBMIT_BUTTON = document.getElementById('submit-btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const MODAL = document.querySelector(".modal");
const MESSAGE_FORM = document.querySelector('.message-form')

SUBMIT_BUTTON.addEventListener('click', (event) => {
    if (MESSAGE_FORM.checkValidity()) {
        event.preventDefault();
        let subject = document.getElementById('subject').value
        let notification = subject ? `\nТема: ${subject}` : '\nБез темы';
        let description = document.getElementById('message').value
        notification += description ? `\nОписание: ${description}` : '\nБез описания';
        MODAL.querySelector('.content-text').innerText = notification;
        MODAL.classList.add('modal-active');

    }
});

CLOSE_BUTTON.addEventListener("click", function(){
    MESSAGE_FORM.reset();
    MODAL.querySelector('.content-text').innerText = "";
    MODAL.classList.remove('modal-active');
});
