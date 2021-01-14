const toggle = document.querySelectorAll(".faq__toggle")

toggle.forEach(btn => {
    btn.addEventListener('click', ()=> {
        btn.parentNode.classList.toggle('active')
    })
});