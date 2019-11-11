import quitarPrefijos from './quitaPrefijos'
import quitaAcentos from './quitaAcentos'
import cuatroDigitos from './cuatroDigitos'

function Clave(nombre, primerApellido, segundoApellido = '', fechaNac) {
  // Quitando prefijos y nombres Jose Maria
  const nombreSnPref = quitarPrefijos(nombre)
  const primerApellidoSnPref = quitarPrefijos(primerApellido)
  const segundoApellidoSnPref = quitarPrefijos(segundoApellido)
  // separar por palabras en arreglos
  const nombreSeparado = nombreSnPref.split(' ')
  const primerApellidoSeparado = primerApellidoSnPref.split(' ')
  const segundoApellidoSeparado = segundoApellidoSnPref.split(' ')
  //tomando primer palabra de cada arreglo
  const primerPalabraNombreCa = nombreSeparado[0]
  const primerPalabraAppCa = primerApellidoSeparado[0]
  const primerPalabraApmCa = segundoApellidoSeparado[0]
  // Quitando acentos
  const primerPalabraNombre = quitaAcentos(primerPalabraNombreCa)
  const primerPalabraApp = quitaAcentos(primerPalabraAppCa)
  const primerPalabraApm = quitaAcentos(primerPalabraApmCa)

  return cuatroDigitos(primerPalabraNombre, primerPalabraApp, primerPalabraApm)
}
export default Clave
