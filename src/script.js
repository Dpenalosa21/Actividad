
function esPalindromoOpcion1(word){
    //devuelve true si es palindromo:
      return word == word.split("").reverse().join("");
  }
  
  function esPalindromoOpcion2(word){
      //Muestra en la pagina directamente si la palabra es palindromo
      document.getElementById("res2").innerHTML = (word == word.split("").reverse().join(""));
  }
  
  function testPalindromo(word) {
    if (esPalindromoOpcion1(word)) {
      alert("La palabra '"+word+"' es palindromo");
      return(true);
    } else {
      alert("La palabra '"+word+"' NO es palindromo");
      return(false); //NO es capicua/palindromo.
    } 
  } 