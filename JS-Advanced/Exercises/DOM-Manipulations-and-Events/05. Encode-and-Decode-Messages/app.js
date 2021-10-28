function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    const text = document.querySelectorAll('textarea');

    function encode(ev) {
        let message = text[0].value
            .split('')
            .map((c) => c.charCodeAt(0) + 1);

        message = String.fromCharCode(...message);
        
        text[1].value = message;

        text[0].value = '';
    }

    function decode(ev) {
        let message = text[1].value
            .split('')
            .map((c) => c.charCodeAt(0) - 1);

        message = String.fromCharCode(...message);

        text[1].value = message;

        text[0].value = '';
    }
}
