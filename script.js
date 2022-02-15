const refs = {
    left: document.querySelector('[data-left]'),
    right: document.querySelector('[data-right'),
    sectionLeft: document.querySelector('.js-left'),
    sectionRight: document.querySelector('.js-right'),
}
console.log(refs)
refs.left.addEventListener("click", onLeftCLick)
refs.right.addEventListener("click", onRightClick)

function onLeftCLick() {
    if (refs.sectionLeft.classList.contains('active')) {
        return
    }
    refs.sectionRight.classList.remove('active');
    refs.sectionLeft.classList.add('active');
}

function onRightClick() {
    if (refs.sectionRight.classList.contains('active')) {
        return
    }
    refs.sectionLeft.classList.remove('active');
    refs.sectionRight.classList.add('active');
}