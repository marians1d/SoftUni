function cone(radius, height) {
    let base = radius * radius * Math.PI;
    let volume = (base * height) / 3;

    let generatrix = Math.sqrt(height * height + radius * radius);
    let surroundingSurface = generatrix * Math.PI * radius;
    let area = surroundingSurface + base;

    console.log('volume = ' + volume.toFixed(4));
    console.log('area = ' + area.toFixed(4));
}