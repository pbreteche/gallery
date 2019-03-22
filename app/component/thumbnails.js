import {Component} from "./component.js";
import {ImageListFetch} from "../image-list-fetch.js";

export class Thumbnails extends Component {
    init() {
        ImageListFetch.getList().then((responseData) => {
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
