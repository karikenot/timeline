class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-100% p-3 bg-emerald-800 text-white font-[Sen] flex justify-between">
        <a href="/index.html" class="flex justify-center items-center w-50 rounded hover:bg-emerald-700">
        <img src="/assets/img/timeline-icon.svg" alt="" class="m-2 w-8">Timeline</a>
        <a href="/search.html" class="flex justify-center items-center w-10 rounded hover:bg-emerald-700">
            <img src="/assets/img/search.svg" alt="">
        </a>
    </header>
    `;
  }
}
customElements.define("t-header", THeader);