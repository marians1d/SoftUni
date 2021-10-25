function solve() {
    const text = document.getElementById('input').value.split('.').filter(el => el != '');
    let result = [];

    let currentSentense = [];
    for (let i = 0; i < text.length; i++) {
      currentSentense.push(text[i] + '.');
      if (currentSentense.length == 3) {
        result.push(currentSentense.join());
        currentSentense = [];
      }
    }

    if (currentSentense != '') {
      result.push(currentSentense.join());
    }

    document.getElementById('output').innerHTML = `<p>${result.join('</p><p>')}</p>`;
}