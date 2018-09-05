const hasDuplicates = (array) => {
  return (new Set(array)).size !== array.length
}

const digitsToArray = (pin) => {
  return [...pin+''].map( n => parseInt(n))
}

const isUnique = (result, pin) => {
  return result.indexOf(pin) == -1
}

const notContainTwoConsecutiveDigits = (pin) => {
  var digits = digitsToArray(pin)

  if (digits[0] == digits[1]) {
    return false
  }

  if (digits[1] == digits[2]) {
    return false
  }

  if (digits[2] == digits[3]) {
    return false
  }

  return true
}

const notContainThreeConsecutiveAndIncrementalDigits = (pin) => {
  var digits =  [...pin+''].map( n => parseInt(n))

  if (digits[0] == (digits[1] -1)) {
    if (digits[1] == (digits[2] -1)) {
      return false
    }
  }

  if (digits[1] == (digits[2] -1)) {
    if (digits[2] == (digits[3] -1)) {
      return false
    }
  }

  return true
}

const exercise1 = (array1 = [], array2 = []) => {
  if (array1.constructor !== Array || array1.constructor !== Array) {
    throw new TypeError('Wrong type')
  }
  return [...array1, ...array2].sort((a, b) => a >b)
}  

const exercise2 = () => {  
  let result = []        
  
  while (true) {
    let pin = Math.floor(1000 + Math.random() * 9000)    
      
    if (isUnique(result, pin)) {
      if (notContainTwoConsecutiveDigits(pin)) {
        if (notContainThreeConsecutiveAndIncrementalDigits(pin)) {
          result.push(pin)
        }          
      }      
    }      

    if (result.length == 1000) {
      break
    }
  }  

  return result
}

module.exports = {
  exercise1,
  exercise2,
  notContainTwoConsecutiveDigits,
  notContainThreeConsecutiveAndIncrementalDigits,
  hasDuplicates
}

