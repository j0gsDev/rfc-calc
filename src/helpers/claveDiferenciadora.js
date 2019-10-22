const cat = {
  ' ': '00',
  '0': '00',
  '1': '01',
  '2': '02',
  '3': '03',
  '4': '04',
  '5': '05',
  '6': '06',
  '7': '07',
  '8': '08',
  '9': '09',
  '&': '10',
  A: '11',
  B: '12',
  C: '13',
  D: '14',
  E: '15',
  F: '16',
  G: '17',
  H: '18',
  I: '19',
  J: '21',
  K: '22',
  L: '23',
  M: '24',
  N: '25',
  O: '26',
  P: '27',
  Q: '28',
  R: '29',
  S: '32',
  T: '33',
  U: '34',
  V: '35',
  W: '36',
  X: '37',
  Y: '38',
  Z: '39',
  Ñ: '40',
}

const dic = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export default string => {
  const codeString = string
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9ñ &]/gi, '')
    .split('')
    // eslint-disable-next-line security/detect-object-injection
    .reduce((str, current) => `${str}${cat[current]}`, '0')
    .split('')

  let acum = 0

  for (let index = 0; index < codeString.length - 1; index++) {
    // eslint-disable-next-line security/detect-object-injection
    const num1 = Number(codeString[index + 1])
    // eslint-disable-next-line security/detect-object-injection
    const num2 = Number(`${codeString[index]}${num1}`)
    acum += num1 * num2
  }

  const base = acum % 1000
  const elem1 = parseInt(base / 34)
  const elem2 = base % 34
  // eslint-disable-next-line security/detect-object-injection
  return `${dic[elem1]}${dic[elem2]}`
}
