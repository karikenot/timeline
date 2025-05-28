const articleCardTemplate = document.querySelector("[data-articles-template]")
const articleCardContainer = document.querySelector("[data-articles-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  articles.forEach(article => {
    const isVisible =
      article.head.toLowerCase().includes(value) ||
      article.desc.toLowerCase().includes(value)
    article.element.classList.toggle("hidden", !isVisible)
  })
})

fetch("/assets/articles.json")
  .then(res => res.json())
  .then(data => {
    articles = data.map(article => {
      const card = articleCardTemplate.content.cloneNode(true).children[0]
      const link = card.querySelector("[data-link]")
      const head = card.querySelector("[data-head]")
      const desc = card.querySelector("[data-desc]")
      const time = card.querySelector("[data-time]")
      link.href = article.link
      head.textContent = article.head
      desc.textContent = article.desc
      time.textContent = article.time
      articleCardContainer.append(card)
      return { head: article.head, desc: article.desc, element: card }
    })
  })