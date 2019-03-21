export class Viewer {
    constructor(domElt) {
        this.root = domElt;
    }

    init() {
        this.root.innerHTML = 'Visionneuse';
    }
}
