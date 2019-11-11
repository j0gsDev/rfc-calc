import quitarPrefijos from './quitaPrefijos'
const VOCALS = ['A', 'E', 'I', 'O', 'U']

_calculateDate = () => {
  var date, day, month, year
  date = this.birthDate.split('-')
  year = date[0].substring(2, 4)
  month = date[1]
  day = date[2]
  return '' + year + month + day
}
_toUpperCase = () => {
  this.name = this.name.toUpperCase()
  this.paternalLname = this.paternalLname.toUpperCase()
  return (this.maternalLname = this.maternalLname.toUpperCase())
}
_removeBlankSpacesForNameAndLastName = () => {
  this.name = this.name.trim()
  this.paternalLname = this.paternalLname.trim()
  return (this.maternalLname = this.maternalLname.trim())
}
_isVocal = char => {
  return indexOf.call(VOCALS, char) >= 0
}
_ignoresCommonName = () => {
  var names, ref
  names = this.name.split(' ')
  if (names.length > 1 && ((ref = names[0]), indexOf.call(COMMON_NAMES, ref) >= 0)) {
    return names[1][0]
  }
  return this.name[0]
}

_ignoresSecondCommonName = () => {
  var names, ref
  names = this.name.split(' ')
  if (names.length > 1 && ((ref = names[0]), indexOf.call(COMMON_NAMES, ref) >= 0)) {
    return names[1][1]
  }
  return this.name[1]
}

export default RfcCalculation = (name, paternalLname, maternalLname, birthDate) => {
  var i, j, ref
  const rfc = ''
  _toUpperCase()
  _removeBlankSpacesForNameAndLastName()
  paternalLname = quitarPrefijos(paternalLname)
  maternalLname = quitarPrefijos(maternalLname)
  rfc = paternalLname[0]
  for (i = j = 0, ref = paternalLname.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    if (_isVocal(paternalLname[i])) {
      rfc += paternalLname[i]
      break
    }
  }
  if (maternalLname !== '') {
    rfc += maternalLname[0]
  }
  rfc += this._ignoresCommonName()
  if (maternalLname === '') {
    this.rfc += this._ignoresSecondCommonName()
  }
  this.rfc += this._calculateDate()
  // this._calculateHomoClave();
}
