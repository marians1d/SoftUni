function rageQuit(message) {
    const pattern = /([^\d\t\n]+)(\d{1,2})/g
    let result = '';
    let charSyms = '';
    
    while ((line = pattern.exec(message)) !== null) {
        const str = line[1].toUpperCase();
        const num = Number(line[2]);

        charSyms += str;
        result += str.repeat(num);
    }

    let neededSym = [];

    for (let i = 0; i < charSyms.length; i++) {
        if (!neededSym.includes(charSyms[i])) {
            neededSym.push(charSyms[i]);
        }
    }

    console.log(`Unique symbols used: ${neededSym.length}`);
    console.log(result);
}

rageQuit('a3');
rageQuit('aSd2&5s@1');
rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');