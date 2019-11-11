import esVocal from './esVocal'
export default (primerPalabraNombre, primerPalabraApp, primerPalabraApm) => {
  if (primerPalabraApp !== '' && primerPalabraApm !== '') {
    const rfcMat = primerPalabraApm.charAt(0)
    const rfcPatOne = primerPalabraApp.charAt(0)
    if (primerPalabraApp.length <= 2) {
      var rfcNombre = primerPalabraNombre.substr(0, 2)
    } else {
      rfcNombre = primerPalabraNombre.charAt(0)
      const arrayPaterno = primerPalabraApp.length
      for (var i = 1; i < arrayPaterno; i++) {
        var c = primerPalabraApp.charAt(i)
        if (esVocal(c)) {
          var rfcPatTwo = c

          break
        }
      }
      return rfcPatOne + rfcPatTwo + rfcMat + rfcNombre
    }
    return rfcPatOne + rfcMat + rfcNombre
  } else if (primerPalabraApm === '') {
    const rfcNombre = primerPalabraNombre.substr(0, 2)
    const rfcPat = primerPalabraApp.substr(0, 2)
    return rfcPat + rfcNombre
  }
}
