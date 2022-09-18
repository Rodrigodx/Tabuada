
let newOption = new Option('Digite um número acima!', 'opt1')
sel.add(newOption)

function tabuada(){
    var num = window.document.getElementById('txt1')
    var sel = window.document.getElementById('sel')
    let n = Number(num.value)

    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    
    }else{
        sel.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let opt2 = new Option(`${n} x ${c} = ${n*c}`, 'opt2' )
            opt2.value = `sel${c}`
            sel.add(opt2)
        }
    
    }
}