export class Thumbnails {
    constructor(domElt) {
        this.root = domElt;
    }

    init() {
        this.root.innerHTML = 'Miniatures';
    }
}
