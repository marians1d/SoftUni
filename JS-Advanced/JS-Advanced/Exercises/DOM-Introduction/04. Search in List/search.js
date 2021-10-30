function search() {
    const text = document.getElementById('searchText').value;
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;

    for (let i = 0; i < towns.length; i++) {
        if (towns[i].innerHTML.includes(text)) {
            document.querySelectorAll('#towns li')[i].style.fontWeight = 'bold';
            document.querySelectorAll('#towns li')[i].style.textDecoration =
                'underline';
                matches++;
        } else {
            document.querySelectorAll('#towns li')[i].style.fontWeight = '';
            document.querySelectorAll('#towns li')[i].style.textDecoration = '';
        }
    }

    document.getElementById('result').innerHTML = `${matches} matches found`;
}