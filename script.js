//we have to generate random color

const randomColour = function() {
    const hex = '0123456789ABCDEF'

    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
//gobal varible so that we can fetch the setInterval Ref in another function to clearInterval
let setRef
const startChangingColor = function() {

    // document.body.style.backgroundColor = randomColour();
    // we have tp keep it into a function to use in setInteval
    
    function changeBgColor () {
        //DOM se boyd and uske element fetch kar lenge
        document.body.style.backgroundColor = randomColour();
    }
    if(!setRef) {
        //good code practice for production grade check for any null value 
        setRef = setInterval(changeBgColor, 2000)
    }
}

document.querySelector('#start').addEventListener('click', startChangingColor)

const stopChangingColor = function() {
    clearInterval(setRef)
    setRef = null
}
document.querySelector('#stop').addEventListener('click', stopChangingColor);



