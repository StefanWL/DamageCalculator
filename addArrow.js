var addArrow = (id) => {
    const holder = document.getElementById(id)
    const img = document.createElement('IMG')

    img.setAttribute('src','content/arrow-icon.png')
    img.classList.add('bar-close-arrow')
    img.classList.add('rotate-reset')

    holder.appendChild(img)
}