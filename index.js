function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}

const numbers = [1, 2, 3, 4]
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
})

console.log(doubledNumbers);
