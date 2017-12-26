const palindrom = (string) => {
  const letters = []
  for (let i = 0; i < string.length; i++) {
    letters.push(string.charAt(i))
  }

  return letters.reverse().join('')
}

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length
}

module.exports = {
  palindrom,
  average
}
