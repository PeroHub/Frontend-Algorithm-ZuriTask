//QUESTION ONE(1)
// Function convert fahrenheit to celcius
const convertFahrToCelcius = (value) => {
    let obj;
    let arrayValue;
    let num;
    let stringValue;
    
    // Checking for an object
    if(value.constructor === Object && !Array.isArray(value)){
        obj = value
        console.log(`${JSON.stringify(obj)} is not a valid number but a/an object`)

        // checking for array
    } else if (value.constructor === Array) {
        arrayValue = value
        console.log(`[${arrayValue}] is not a valid number but a/an array.`)

        // Checking for a number and performing calculation
    } else if(value.constructor === Number) {
        num = value
        const celcius = (num - 32) * 5/9
        console.log(celcius.toFixed(4))

        // Checking for string and calculating
    } else if(value.constructor === String){
        stringValue = parseInt(value)
        const celcius = (stringValue - 32) * 5/9
        console.log(celcius.toFixed(4))
        
    }

}
convertFahrToCelcius([1, 2, 3])
convertFahrToCelcius({temp: 0, man: "woman"})
convertFahrToCelcius(0)
convertFahrToCelcius("0")




//QUESTION TWO(2)

const checkYuGiOh = (n) => {
    // Performing operation for string input and converting to an integer
    if(n.constructor === String){
        let stringOuput = []
        let stringValue = parseInt(n)
        for(let i = 1; i <= stringValue; i++){
            stringOuput.push(i)
        }
        for(let j = 0; j < stringOuput.length; j++){
            if(stringOuput[j] % 2 === 0 && stringOuput[j] % 3 === 0 && stringOuput[j] % 5 === 0){
                stringOuput[j] = "yu-gi-oh"
            }else if(stringOuput[j] % 2 === 0 && stringOuput[j] % 3 === 0){
                stringOuput[j] = "yu-gi"
            }else if(stringOuput[j] % 2 === 0 && stringOuput[j] % 5 === 0){
                stringOuput[j] = "yu-oh"
            }else if(stringOuput[j] % 2 === 0){
                stringOuput[j] = "yu"
            }else if(stringOuput[j] % 3 === 0){
                stringOuput[j] = "gi"
            }else if(stringOuput[j] % 5 === 0){
                stringOuput[j] = "oh"
            }
            
        }
        console.log(stringOuput)
    }

    //performing for long string that cannot be convert to an integer
    let error = parseInt(n)
    if(isNaN(error)){
        console.log(`Invalid parameter: "${n}"`)
    }


    // Performing operation for value if value passed in is an integer
    
    if(n.constructor === Number){
        let final = []
        for(let i = 1; i <= n; i++){
            final.push(i)
        }
        for(let j = 0; j < final.length; j++){
            if(final[j] % 2 === 0 && final[j] % 3 === 0 && final[j] % 5 === 0){
                final[j] = "yu-gi-oh"
            }else if(final[j] % 2 === 0 && final[j] % 3 === 0){
                final[j] = "yu-gi"
            }else if(final[j] % 2 === 0 && final[j] % 5 === 0){
                final[j] = "yu-oh"
            }else if(final[j] % 2 === 0){
                final[j] = "yu"
            }else if(final[j] % 3 === 0){
                final[j] = "gi"
            }else if(final[j] % 5 === 0){
                final[j] = "oh"
            }
            
        }
    
        console.log(final)
    }
}
checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh")


