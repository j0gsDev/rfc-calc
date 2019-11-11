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
function RFC(nombre, primerApellido, segundoApellido = '', fechaNac) {
  // Quitando prefijos y nombres Jose Maria
  const nombreSnPref = quitarPrefijos(nombre)
  const primerApellidoSnPref = quitarPrefijos(primerApellido)
  const segundoApellidoSnPref = quitarPrefijos(segundoApellido)
  // separar por palabras en arreglos
  const nombreSeparado = nombreSnPref.split(' ')
  const primerApellidoSeparado = primerApellidoSnPref.split(' ')
  const segundoApellidoSeparado = segundoApellidoSnPref.split(' ')
  // tomando primer palabra de cada arreglo
  const primerPalabraNombreCa = nombreSeparado[0]
  const primerPalabraAppCa = primerApellidoSeparado[0]
  const primerPalabraApmCa = segundoApellidoSeparado[0]
  // Quitando acentos
  const primerPalabraNombre = quitaAcentos(primerPalabraNombreCa)
  const primerPalabraApp = quitaAcentos(primerPalabraAppCa)
  const primerPalabraApm = quitaAcentos(primerPalabraApmCa)
  // calcular primeras 4 letras
  const primerosCuatro = cuatroDigitos(primerPalabraNombre, primerPalabraApp, primerPalabraApm)
  // excluir plabras vetadas
  const evaluaVetada = palabrasVetadas(primerosCuatro)
  // calcular 6 digitos
  const datosFecha = calculaDate(fechaNac)
  // calcula clave diferenciadora
  const clavDif = claveDiferenciadora(`${primerPalabraApp} ${primerPalabraApm} ${primerPalabraNombre}`)
  // calculando RFC con clave dif
  let rfc = evaluaVetada + datosFecha + clavDif
  // calcula digito verificador
  const digDif = digitoVerificador(rfc)
  rfc += digDif

  return rfc
}
export default RFC
