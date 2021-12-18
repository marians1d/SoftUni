function loadRepos() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', function loadRepos() {
        const url = 'https://api.github.com/users/testnakov/repos';
        const httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener('readystatechange', function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                document.getElementById('res').textContent =
                    httpRequest.responseText;
            }
        });

        httpRequest.open('GET', url);
        httpRequest.send();
    });d
}
