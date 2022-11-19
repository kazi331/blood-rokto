/* const makeUpperCase = (sentence) =>  {
    const upperCased = sentence.replace(/\b(\w)/g, s => s.toUpperCase());
  return upperCased;
}
console.log(makeUpperCase('i love Bangladesh')) */

// javascript int number format

// const formateNumber = Intl.NumberFormat('key',{style: 'currency', currency: 'bdt'} ).format(number)
const number = 3453453;
const formateNumber = Intl.NumberFormat('en', {notation: 'compact'}).format(number)
console.log(formateNumber) // 3.5M
