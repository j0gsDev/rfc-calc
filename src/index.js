import quitarPrefijos from './helpers/quitaPrefijos'
import quitaAcentos from './helpers/quitaAcentos'
import cuatroDigitos from './helpers/cuatroDigitos'
import palabrasVetadas from './helpers/palabrasVetadas'
import calculaDate from './helpers/calculaDate'
import claveDiferenciadora from './helpers/claveDiferenciadora'
import digitoVerificador from './helpers/digitoVerificador'

/**
 * @param  {string} nombre
 * @param  {string} primerApellido
 * @param  {string} segundoApellido
 * @param  {string} fechaNac - YYYY-MM-DD
 */
module.exports = function(nombre, primerApellido, segundoApellido, fechaNac) {
  // Quitando prefijos y nombres Jose Maria
  const nombreSnPref = quitaAcentos(quitarPrefijos(nombre))
  const primerApellidoSnPref = quitaAcentos(quitarPrefijos(primerApellido))
  const segundoApellidoSnPref = quitaAcentos(quitarPrefijos(segundoApellido))

  const primerosCuatro = cuatroDigitos(nombreSnPref, primerApellidoSnPref, segundoApellidoSnPref)
  // excluir plabras vetadas
  const evaluaVetada = palabrasVetadas(primerosCuatro)
  // calcular 6 digitos
  const datosFecha = calculaDate(fechaNac)
  // calcula clave diferenciadora
  const clavDif = claveDiferenciadora(`${nombreSnPref} ${primerApellidoSnPref} ${segundoApellidoSnPref}`)
  // calculando RFC con clave dif
  const rfc = evaluaVetada + datosFecha + clavDif
  // calcula digito verificador

  return rfc + digitoVerificador(rfc)
}
