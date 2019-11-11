import quitarPrefijos from './quitaPrefijos'
import quitaAcentos from './quitaAcentos'
import cuatroDigitos from './cuatroDigitos'
import palabrasVetadas from './palabrasVetadas'
import calculaDate from './calculaDate'
import claveDiferenciadora from './claveDiferenciadora'
import digitoVerificador from './digitoVerificador'

function Clave(nombre, primerApellido, segundoApellido = '', fechaNac) {
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
export default Clave
