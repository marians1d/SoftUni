function attachGradientEvents() {
    const bar = document.getElementById('gradient');
    bar.addEventListener('mousemove', onMove);

    function onMove(e) {
        let gradient = Math.floor(e.offsetX / e.target.clientWidth * 100);
        document.getElementById('result').textContent = `${gradient}%`
        
        console.log(e);
    }
}