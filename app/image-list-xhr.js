export class ImageListXhr {
    getList(callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'tux.json');
        xhr.addEventListener('load', function() {
            console.log('response loaded', this.status);
            if (this.status < 200 || this.status >= 300) {
                throw 'ayayaye problemo';
            }
            callback(JSON.parse(this.responseText));
        });
        xhr.send();
    }
}
