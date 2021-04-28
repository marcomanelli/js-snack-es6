/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */
$(function(){
  let arr1 = [1, 5, 6, 2, 7, 3]
  let arr2 = [8, 3, 9, 2, 8, 2, 5, 2, 1]

  while(arr1.length != arr2.length){

    if(arr1.length < arr2.length){
      arr1.push(generateRandomNumber10())
    }else{
      arr2.push(generateRandomNumber10())
    }
  }

  console.log(arr1.length, arr2.length)

  function generateRandomNumber10() {
    return Math.floor((Math.random() * 10))
  }
})