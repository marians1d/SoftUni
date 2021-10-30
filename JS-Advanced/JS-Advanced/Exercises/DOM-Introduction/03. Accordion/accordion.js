function toggle() {
    let button = document.querySelector('.button').innerHTML;

    button = button == 'More' ? 'Less' : 'More';

    if (button == 'Less') {
        document.getElementById('extra').style.display = 'block'
        document.querySelector('.button').innerHTML = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        document.querySelector('.button').innerHTML = 'More'
    }
}