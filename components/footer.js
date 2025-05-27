class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="font-[Sen] w-100% p-4 text-white bg-emerald-800">
        <p class="py-1">Copyleft &copy; Timeline 2075, No rights reserved sybau.</p>
        <hr class="py-1">
        <p><i>This website is part of a fictional world</i></p>
    </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);