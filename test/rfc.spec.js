import Clave from '../src/helpers/clave'

describe('calcularRFC', () => {
  test('calcular 10 digitos del rfc', () => {
    const nombre = 'Roberto'
    const app = 'O’farril'
    const apm = 'Carballo'
    const fechNac = '93-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toBe('OACR')
  })
})
