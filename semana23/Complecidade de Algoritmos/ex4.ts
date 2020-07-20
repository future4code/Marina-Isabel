function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

  //Primeira resposta O(n) não sabia que o IndexOF poderia caracterizar um 
//    loop dentro dooutro, a resposta certa é O(n²)