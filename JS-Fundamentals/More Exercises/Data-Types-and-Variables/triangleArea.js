function triangleArea(firstSide, secondSide, thirdSide) {
    let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;
    let area = Math.sqrt(
        semiPerimeter *
            (semiPerimeter - firstSide) *
            (semiPerimeter - secondSide) *
            (semiPerimeter - thirdSide)
    );

    console.log(area);
}