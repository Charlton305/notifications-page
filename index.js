const markAsRead = document.querySelector("#mark-all")
const count = document.querySelector("#count")
const article = document.querySelectorAll("article")
const redCircle = document.querySelectorAll("#red-circle")

markAsRead.addEventListener("click", () => {
    count.textContent = "0"

    article.forEach(item => {
        item.classList.remove("unread")
    })

    redCircle.forEach(item => {
        item.classList.remove("red-circle")

    })
})