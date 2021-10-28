function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    document.getElementsByTagName('main')[0].addEventListener('click', convert);

    function convert(ev) {
        const tag = ev.target;
        if (tag.tagName == 'INPUT' && tag.type == 'button') {

            const unit = tag.parentElement.querySelector('input');
            const inDays = Number(unit.value) / ratios[unit.id];

            const values = document.querySelectorAll('main input[type="text"]')
            for (const value of values) {
                value.value = inDays * ratios[value.id];
            }
        }j
    }
}