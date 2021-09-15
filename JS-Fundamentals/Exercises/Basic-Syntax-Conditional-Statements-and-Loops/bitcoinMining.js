function bitcoinMining(shifts) {
    let firstPurchase = 0;
    let wallet = 0;
    let coinCount = 0;
    let isNotSet = true;

    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;

    for (let i = 0; i < shifts.length; i++) {
        if ((i + 1) % 3 === 0 && i > 0) {
            shifts[i] *= 0.7;
        }
            
        wallet += shifts[i] * goldPrice;

        while ((wallet - bitcoinPrice) >= 0) {
            wallet -= bitcoinPrice;
            coinCount++;
        }

        if (coinCount > 0 && isNotSet) {
            firstPurchase = i + 1
            isNotSet = false;
        }
    }

    console.log(`Bought bitcoins: ${coinCount}`);
    if (coinCount != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${wallet.toFixed(2)} lv.`);
}

bitcoinMining([])
bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])