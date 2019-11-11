const arrrayExclude = [
  'BUEI',
  'BUEY',
  'CACA',
  'CACO',
  'CAGA',
  'CAGO',
  'CAKA',
  'COGE',
  'COJA',
  'COJE',
  'COJI',
  'COJO',
  'CULO',
  'FETO',
  'GUEY',
  'JOTO',
  'KACA',
  'KACO',
  'KOGE',
  'KOJO',
  'KAKA',
  'KULO',
  'MAME',
  'MAMO',
  'MEAR',
  'MEON',
  'MION',
  'MOCO',
  'MULA',
  'PEDA',
  'PEDO',
  'PENE',
  'PUTA',
  'PUTO',
  'QULO',
  'RATA',
  'KAGA',
  'KAGO',
  'RUIN',
]
export default string => {
  const compara = arrrayExclude.includes(string)
  if (compara) {
    const arrString = string.split('')
    const newString = arrString[0] + arrString[1] + arrString[2] + 'X'
    return newString
  } else {
    return string
  }
}
