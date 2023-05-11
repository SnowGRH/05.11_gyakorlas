class Kartya {
  #adat;
  #divElem;
  #imgElem;

  constructor(adat, szuloElem) {
    this.#adat = adat;
    let txt = `<div class="kartya"><div><img src="${this.#adat}"></div></div>`;
    szuloElem.append(txt);
    this.#divElem = $(".kartya:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.setKep("kepek/hatter.jpg");
    this.#divElem.on("click",()=>{
      this.setKep(this.#adat);
      this.trigger();
    })
  }
  getAdat() {
    return this.adat;
  }
  trigger() {
    const EV = new CustomEvent("trigger", { detail: this.#adat });
    window.dispatchEvent(EV);
  }
  setKep(ertek) {
    this.#imgElem.attr("src",ertek);
  }
}
export default Kartya;
