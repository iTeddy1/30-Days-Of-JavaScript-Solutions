const numbers = (n) =>{
    return [...Array(n+1).keys()];
}

const numbersArray = numbers(1000)

const checkPrime = (number) =>{
    if(number == 1 || number == 0) return false 
    for(let i = 2; i*i <= number; i++)
        if(number % i == 0) return false
    return true
}

const checkNumbers = (number) => {
    if(checkPrime(number)) return '#F24C3D'
    else if(number % 2 == 0) return "#A2FF86"
    else return '#F2BE22'
}

for(let i = 0; i < numbersArray.length; i++){
    let title = document.createElement('p')
    title.style.fontSize = '24px'
    title.className = 'number'
    title.textContent = numbersArray[i]
    title.style.backgroundColor = checkNumbers(numbersArray[i])
    document.getElementById("container").appendChild(title)
}
