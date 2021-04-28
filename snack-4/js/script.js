$(function(){

  var giocatori = []

  const numGiocatori = 5

  //creazione giocatori
  for(var i=0; i<numGiocatori; i++){
    let giocatore = {
      codice: generateCode(),
      punti: generateRandomNumber50(),
      percentuale: generateRandomNumber100()
    }
    giocatori.push(giocatore)
  }

  console.log(giocatori)

  //funzioni
  function generateCode() {
    let temp = ''
    for(var i=0; i<3; i++){
      temp += generateRandomLetter() 
    }
    for(var i=0; i<3; i++){
      temp += generateRandomNumber10() 
    }
    return temp
  }

  function generateRandomNumber10() {
    return Math.floor((Math.random() * 10))
  }

  function generateRandomNumber50() {
    return Math.floor((Math.random() * 51))
  }

  function generateRandomNumber100() {
    return Math.floor((Math.random() * 101))
  }

  function generateRandomLetter() {
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
  }
})