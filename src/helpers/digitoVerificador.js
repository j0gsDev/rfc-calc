const cat = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  '&': 24,
  O: 25,
  P: 26,
  Q: 27,
  R: 28,
  S: 29,
  T: 30,
  U: 31,
  V: 32,
  W: 33,
  X: 34,
  Y: 35,
  Z: 36,
  ' ': 37,
  Ñ: 38,
}

export default string => {
  if (string.length !== 12) {
    throw new Error('La logitud de la cadena debe ser exactamente 12')
  } else {
    const total = string
      .split('')
      .reverse()
      .reduceRight((acum, current, index) => {
        // eslint-disable-next-line security/detect-object-injection
        const value = cat[current] || 0
        return acum + value * (index + 2)
      }, 0)
    let result = total % 11
    result = result > 0 ? 11 - result : result
    return result === 10 ? 'A' : String(result)
  }
}
