function criptografar() {

    let str = document.getElementById("Text").value

    if(str === ''){
        document.getElementById("original").innerHTML = 'Digite algo'
    }
    else{
        function texto(str) {
            let res = []
            const strSep = str.split('')
            
            for (var i = 0; i < strSep.length; i ++){
                res.push(strSep[i].charCodeAt(0));
            }
            
            /*
            console.log(strSep)
            console.log(res)
            */

            return res;
        }

        const ascii = texto(str)
        const chave = []
        const cript = []

        for(let i = 0; i < ascii.length; i++){
            chave.push(Math.floor(Math.random() * 10));
        }

        for (let f = 0; f < ascii.length; f++) { 
            cript[f] = ascii[f] * chave[f]
        } 

        /*
        console.log(ascii);
        console.log(cript);
        console.log(chave);
        */

        document.getElementById("original").innerHTML = 'Original: ' + str;
        document.getElementById("criptografado").innerHTML = 'Criptografado: ' + cript.join("");
        document.getElementById("chave").innerHTML = 'Chave: ' + chave.join("");

        document.getElementById('Text').value = ''

    }
}


console.log('Original: ' + str)
console.log('Criptografado: ' + cript.join(""))
console.log('Chave: ' + chave.join(""))
