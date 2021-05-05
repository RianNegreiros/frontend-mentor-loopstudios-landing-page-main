const td = document.querySelectorAll('td')
const secondSectionBtn = document.querySelector('.secondSectionBtn')

td.forEach((td) => {
    td.addEventListener('mouseenter', () => {
        td.style.opacity = '0.2'
        td.lastElementChild.style.color = 'hsl(0, 0%, 0%)'
    })

    td.addEventListener('mouseleave', () => {
        td.style.opacity = '1'
        td.lastElementChild.style.color = 'hsl(0, 0%, 100%)'
    })
})

secondSectionBtn.addEventListener('mouseenter', () => {
    secondSectionBtn.style.backgroundColor = 'hsl(0, 0%, 0%)'
    secondSectionBtn.style.color = 'hsl(0, 0%, 100%)'
})

secondSectionBtn.addEventListener('mouseleave', () => {
    secondSectionBtn.style.backgroundColor = 'hsl(0, 0%, 100%)'
    secondSectionBtn.style.color = 'hsl(0, 0%, 0%)'
})