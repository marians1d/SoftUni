function thePyramidOfKingDjoser(baseSize, increment) {
    let stoneSum = 0;
    let marbleSum = 0;
    let lapisSum = 0;
    let goldSum = 0;
    let pyramidHeight = 0;
  
    let lapisLevelCount = 0;
  
    for (let i = baseSize; i > 2; i -= 2) {
      lapisLevelCount++;
      stoneSum += Math.pow(i - 2, 2);
  
      if (lapisLevelCount % 5 !== 0) {
        marbleSum += i * 4 - 4;
      } else {
        lapisSum += i * 4 - 4;
      }
  
      pyramidHeight++;
    }
  
    
    if (baseSize % 2 == 0) {
      goldSum += 4;
    } else {
      goldSum++;
    }
  
    pyramidHeight++;
  
    stoneSum *= increment;
    marbleSum *= increment;
    lapisSum *= increment;
    goldSum *= increment;
    pyramidHeight *= increment;
    
    stoneSum = Math.ceil(stoneSum);
    marbleSum = Math.ceil(marbleSum);
    lapisSum = Math.ceil(lapisSum);
    goldSum = Math.ceil(goldSum);
    pyramidHeight = Math.floor(pyramidHeight);
  
    console.log("Stone required: " + stoneSum);
    console.log("Marble required: " + marbleSum);
    console.log("Lapis Lazuli required: " + lapisSum);
    console.log("Gold required: " + goldSum);
    console.log("Final pyramid height: " + pyramidHeight);
  }

  thePyramidOfKingDjoser(11, 1)
  console.log("-------");
  thePyramidOfKingDjoser(11, 0.75)
  console.log("-------");
  thePyramidOfKingDjoser(12, 1)