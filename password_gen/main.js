let genpbutt = document.getElementById("genp")
let pass1p = document.getElementById("pass1")
let pass2p = document.getElementById("pass2")
let symp = document.getElementById("sym")
let nump = document.getElementById("num")
let lengp = document.getElementById("leng")
let uppd = document.getElementById("uppcase")
let lowd = document.getElementById("lowcase")

let lengpa = Number(lengp.value)


function getRand() {
    const arr_caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
         
    const arr_small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const arr_num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
          
    const arr_sym = ["-","!","@","#","$","%","^","&","*","(",")","~","`","[","]",
        "{","}",":",";","|" ,"/",">","<",".","?","+",","]

    let arr = []
    let str = ""

    if (symp.checked === false && nump.checked === false && uppd.checked === false && lowd.checked === false) {
        arr = [0]
    }if (nump.checked === true) {
        arr = [...arr, ...arr_num]
    }if (symp.checked === true) {
        arr = [...arr, ...arr_sym]
    }if (lowd.checked === true) {
        arr = [...arr, ...arr_small]
    }if (uppd.checked === true) {
        arr = [...arr, ...arr_caps]
    }

    lengpa = Number(lengp.value)    
    let i = 0
    while (str.length < lengpa) {
        let rando = Math.floor(Math.random() * arr.length)
        str += arr[rando]
        i++
    }
    /* console.log(arr) */
    return str
}

genpbutt.addEventListener('click', function() {
    lengpa = Number(lengp.value)
    if (lengpa >= 0 && lengpa <= 90){
        pass1p.innerText = getRand()
        pass2p.innerText = getRand()
    }  
})

async function clickcopy(el) {
    try{
        let writt = ''
        if (el.innerText.includes(" ") === false && el && el.tagName != "IMG"){
            writt = el.innerText
            await navigator.clipboard.writeText(writt)
            alert("Text copied!!!")
        
        }else if (el === document.getElementById("ico-1") && document.getElementById("pass1").innerText.includes(" ") === false) {
            writt = document.getElementById("pass1").innerText
            await navigator.clipboard.writeText(writt)
            alert("Text copied!!!")
        }else if (el === document.getElementById("ico-2") && document.getElementById("pass2").innerText.includes(" ") === false) {
            writt = document.getElementById("pass2").innerText
            await navigator.clipboard.writeText(writt)
            alert("Text copied!!!")
        }
        /* console.log(writt) */
    }
    catch(err) {
        console.error("Failed to copy ", err);
    }
}

document.getElementById("leng-label").addEventListener('wheel', function(event) {
    event.preventDefault()
    let val = event.deltaY
    if (val < 0) {
        lengp.stepUp()
    }else if (val > 0) {
        lengp.stepDown()
    }
})

document.getElementById("leng-range").addEventListener("input", function(event) {
    event.preventDefault()
    lengp.value = this.value
})
