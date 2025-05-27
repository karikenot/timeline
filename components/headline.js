class THeadlines extends HTMLElement {
  connectedCallback() {
    const link =this.getAttribute("link");
    const img =this.getAttribute("img");
    const head =this.getAttribute("head");
    const desc =this.getAttribute("desc");
    const time =this.getAttribute("time");

    this.innerHTML = `
        <article>
            <img src="${img}" width="100%" class="rounded">
            <a href="${link}" class="transition hover:underline">
                <h2 class="font-[DM_Serif_Text] text-3xl m-2 text-emerald-800">${head}</h2>
                <p class="font-[Tinos] text-xl m-2 text-justify">${desc}</p>
            </a>
            <p class="font-[Sen] m-2 text-gray-500">${time}</p>
        </article>
    `;
  }
}
customElements.define("t-headlines", THeadlines);