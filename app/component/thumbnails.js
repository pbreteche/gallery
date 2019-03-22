import {Component} from "./component.js";
import {ImageListXhr} from "../image-list-xhr.js";

export class Thumbnails extends Component {
    init() {
        const imageListXhr = new ImageListXhr();
        imageListXhr.getList((responseData) => {
            this.root.innerHTML = Thumbnails.displayList(responseData);
        });
        this.root.innerHTML = '<p>Chargement des miniatures</p>'
    }

    static displayList(list) {
        const htmlImgArray = list.map(img => `<li><img src="img/${img}" /></li>`);
        const htmlImgString = htmlImgArray.join('');
        return `<ul>${htmlImgString}</ul>`;
    }
}
