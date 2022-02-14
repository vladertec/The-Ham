/*----showing information on a specific button----*/
document.querySelector('.tabs').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        if (document.querySelector('.actives')) {
            document.querySelector('.actives').classList.remove('actives');
            event.target.classList.add('actives');
            event.preventDefault();
        }
        document.querySelectorAll(`.tabs-content-item`).forEach(element => {
            element.classList.remove('active')
        })
        document.querySelector(`.tabs-content li[data-tab="${event.target.dataset.tab}"]`).classList.add('active');
    }
})


/*----event of sorting photos (and with adding photos)----*/
document.querySelector('.tabs-work').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        if (document.querySelector('.actives-work')) {
            document.querySelector('.actives-work').classList.remove('actives-work');
            event.target.classList.add('actives-work');
            event.preventDefault();
        }
    }
    let workItem = document.querySelectorAll(`.tabs-content-item-work`);
    let dataTabItem = document.querySelectorAll(`.main-section-work-blocks div[data-tab="${event.target.dataset.tab}"]`);

    for (let item of workItem) {
        if (!(item.classList.contains('hide'))) {
            item.classList.remove('activation-suitable')
            item.classList.remove('activation-all')
            if (event.target.dataset.tab === 'all') {
                item.classList.add('activation-all')
            }
            item.classList.add('activation-suitable')

            for (let item2 of dataTabItem) {//влияли на всё дата-табы
                if (!(item2.classList.contains('hide'))) {
                    item2.classList.add('activation-all');
                }
            }
        }
    }
})


/*----event of adding photos when button is click----*/
document.querySelector('.btn-work').addEventListener('click', function () {

    document.querySelector('.btn-work').classList.add('hide');
    document.querySelector('.main-section-work').style.height = "1750px";
    document.querySelectorAll('.tabs-content-item-work').forEach(element => {
        element.classList.remove('hide');
    })
})


/*----properties of slick slider----*/
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        speed: 900,
        pauseOnHover: true,
        draggable: false,
        waitForAnimate: false,
        fade: true
    });
});



