export class ImageListFetch {
    static getList() {
        return fetch('tux.json').then(response => response.json())
    }
}
