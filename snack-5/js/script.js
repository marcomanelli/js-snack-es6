/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */
$(function(){

  let array = [1, 2, 3, 4]

  console.log(special(array, 2, 4))

  function special(arr, a, b){
    if((a<b) && (b<= arr.length)){
      let newArr = arr.slice(a, b)
      return newArr
    }else{
      return 0
    }
  }
})