function openMenu(e) {
    document.getElementsByClassName('links')[0].classList.remove('invisible')
    document.getElementsByClassName('links')[0].classList.add('visible')
    console.log("menu open")
    console.log(document.getElementsByClassName('links')[0].clientHeight)
    console.log(document.getElementsByClassName('links')[0].scrollHeight)
}

function closeMenu(e) {
    document.getElementsByClassName('links')[0].classList.remove('visible')
    document.getElementsByClassName('links')[0].classList.add('invisible')
}
