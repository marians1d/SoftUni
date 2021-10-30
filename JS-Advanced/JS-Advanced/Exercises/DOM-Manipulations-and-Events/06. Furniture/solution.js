function solve() {
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate(ev) {
        const text = ev.target.previousSibling.previousSibling.value;
        const items = JSON.parse(text);

        for (const item of items) {
            const row = document.createElement('tr');

            row.appendChild(createCell('img', 'img', 'image'));
            row.appendChild(createCell('p', 'name'));
            row.appendChild(createCell('p', 'price'));
            row.appendChild(createCell('p', 'decFactor'));
            row.appendChild(createCell('input','', 'checkbox'));

            document.querySelector('tbody').appendChild(row);

            function createCell(tag, type, atributes) {
              const cell = document.createElement('td');
              const tagType = document.createElement(tag);
    
              if (atributes == 'checkbox') {
                tagType.type = 'checkbox'
              } else if (atributes == 'image') {
                tagType.src = item[type];
              } else {
                tagType.textContent = item[type];
              }

              cell.appendChild(tagType);

              return cell;
            }
        }

    }

    function buy(ev) {
      let text = ev.target.previousSibling.previousSibling;
      let boxes = Array.from(document.querySelectorAll('input'));
      boxes = boxes.filter(el => el.checked);
      let total = 0;
      let names = [];
      let totalDec = 0;

      for (const box of boxes) {
        const row = box.parentElement.parentElement;
        const name = row.children[1].textContent;
        const price = Number(row.children[2].textContent);
        const decFac = Number(row.children[3].textContent)

        total += price;
        totalDec += decFac;
        names.push(name);
      }

      text.value = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${totalDec / boxes.length}`;
    } 
}
