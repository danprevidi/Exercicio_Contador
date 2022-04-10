function contar() {
  var ini = document.getElementById('txtini') 
  var fim = document.getElementById('txtfim')
  var pas = document.getElementById('txtpas')
  var res = document.getElementById('res')
  // se valor for 0 em algum dos campos retorna o erro:
  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossivel contar!'
  } else {
    res.innerHTML = 'Contando:<br>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if(p <=0) {
      window.alert('Passo inválido! Será considerado 1')
      p = 1
    }
    if (i < f) {
      //contagem crescente
       for(var c = i; c <= f; c += p) {            
          res.innerHTML += ` ${c} \u{1F449} ` 
        }                  
      } else {
        //contagem regressiva
        for(var c = i; c> f; c -= p) {
          res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1F44F}`
  }
}

