import { quitaAcentos, quitaPrefijos } from './helpers'

/**
 * @param  {String} nombre
 * @param  {String} apellidoPaterno
 * @param  {String} apellidoMaterno
 * @param  {String} fechaNacimiento format YYYY-MM-DD
 * @param  {String} separador default "-"
 * @returns {String}
 */
export default function(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, separador = '-') {
  const _fecha = fechaNacimiento.split(separador)
  // const persona = {
  //   nombre: quitaAcentos(nombre),
  //   apellidoPaterno: quitaAcentos(apellidoPaterno),
  //   apellidoMaterno: quitaAcentos(apellidoMaterno),
  //   _: {
  //     nombre: quitaPrefijos(this.nombre),
  //     apellidoPaterno: quitaPrefijos(this.apellidoPaterno),
  //     apellidoMaterno: quitaPrefijos(this.apellidoMaterno),
  //   },
  //   fechaNacimiento: {
  //     anio: _fecha[0],
  //     mes: _fecha[1],
  //     dia: _fecha[2]
  //   }
  // }
  // const nombreCompleto = `${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno}`
  // const nombreUtil = `${persona._.nombre} ${persona._.apellidoPaterno} ${persona._.apellidoMaterno}`
}
