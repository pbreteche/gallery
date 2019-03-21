import {Component} from "./component.js";
import {IMAGE_LIST} from "../image-list.js";

export class Thumbnails extends Component {
    init() {
        this.root.innerHTML = Thumbnails.displayList(IMAGE_LIST);
    }

    static displayList(list) {
        const htmlImgArray = list.map(img => `<li><img src="img/${img}" /></li>`);
        const htmlImgString = htmlImgArray.join('');
        return `<ul>${htmlImgString}</ul>`;
    }
}
