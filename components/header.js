class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-100% p-3 bg-emerald-800 text-white font-[Sen]"><a href="/index.html" class="flex justify-center items-center"><img src="/assets/img/timeline-icon.svg" alt="" class="m-2 w-8">Timeline</a></header>
    `;
  }
}
customElements.define("t-header", THeader);