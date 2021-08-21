function gladiatorExpenses(
    lostFightCount,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
) {
    let totalExpenses = 0;
    let totalHelmetPrice = 0;
    let totalSwordPrice = 0;
    let totalShieldPrice = 0;
    let totalArmorPrice = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            totalShieldPrice++;
        }

        if (i % 2 == 0) {
            totalHelmetPrice++;
        }

        if (i % 3 == 0) {
            totalSwordPrice++;
        }

        if (totalShieldPrice % 2 == 0 && totalShieldPrice > 0) {
            totalArmorPrice++;
            totalShieldPrice -= 2;
        }
    }

    totalShieldPrice += totalArmorPrice * 2;
    totalHelmetPrice *= helmetPrice;
    totalSwordPrice *= swordPrice;
    totalShieldPrice *= shieldPrice;
    totalArmorPrice *= armorPrice;

    totalExpenses =
        totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}