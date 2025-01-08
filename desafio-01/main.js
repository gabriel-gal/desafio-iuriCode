const btn = document.querySelectorAll(".icon-heart")

console.log(btn)
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("filled")
    })
})

ScrollReveal().reveal('.card', { delay: 200, reset: true });
ScrollReveal().reveal('.card .header-article', { delay: 300, reset: true });
ScrollReveal().reveal('.card h2', { delay: 400, reset: true });
ScrollReveal().reveal('.card p', { delay: 500, reset: true });