import {Viewer} from "./component/viewer.js";
import {Thumbnails} from "./component/thumbnails.js";

export class Gallery {
    constructor(domElt) {
        this.root = domElt;
    }

    init() {
        this.root.innerHTML = `
<h1>Ma super galerie!</h1>
<div class="component viewer-component"></div>
<div class="component thumbnails-component"></div>
`;
        const viewer = new Viewer(this.root.querySelector('.viewer-component'));
        viewer.init();
        const thumbnails = new Thumbnails(this.root.querySelector('.thumbnails-component'));
        thumbnails.init();
    }
}
