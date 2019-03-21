export class Gallery {
    constructor(domElt) {
        this.root = domElt;
    }

    init() {
        this.root.innerHTML = '<h1>Ma super galerie!</h1>';
    }
}
