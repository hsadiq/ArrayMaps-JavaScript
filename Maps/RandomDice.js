function rollDie(){
    return Math.floor(Math.random() * 6) + 1;
}

function trackDieRoll(){
    const rollsMap = new Map();

    while (true){
        const roll = rollDie();

        if (rollsMap.has(roll)){
            const count = rollsMap.get(roll) + 1;
            rollsMap.set(roll, count);
            if (count == 10){
                break;
            }
            }else{
                rollsMap.set(roll, 1);
        }
    }
    

        console.log("Number" + "\t" + "Count");
        let maxCount = -1;
        let minCount = Infinity;
        let maxNumber, minNumber;

        for (const[Number, count] of rollsMap){
            console.log("Number: "+ Number+"\t"+ "Count: " + count);

            if (count > maxCount){
                maxCount = count;
                maxNumber = Number;

            }
            if (count < minCount){
                minCount = count;
                minNumber = Number;
            }
        }

    console.log("Numbe " + maxNumber + " has reached the max count of " + maxCount);
        
    console.log("Numbe " + minNumber + " has reached the max count of " + minCount);
    }

trackDieRoll();