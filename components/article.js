class TArticles extends HTMLElement {
  connectedCallback() {
    const link =this.getAttribute("link");
    const head =this.getAttribute("head");
    const desc =this.getAttribute("desc");
    const time =this.getAttribute("time");

    this.innerHTML = `
        <article class="m-2">
            <a href="${link}" class="hover:underline">
                <h3 class="font-[DM_Serif_Text] text-xl text-emerald-800">${head}</h3>
                <p class="font-[Tinos] text-justify">${desc}</p>
            </a>
            <p class="text-gray-500 font-[Sen]">${time}</p>
        </article>
    `;
  }
}
customElements.define("t-articles", TArticles);