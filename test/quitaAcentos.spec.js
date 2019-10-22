import quitaAcentos from '../src/helpers/quitaAcentos'

describe('Quita acentos', () => {
  test('Debe remplazar la cadena "áéíóú" por "AEIOU"', () => {
    expect(quitaAcentos('áéíóú')).toBe('AEIOU')
  })
  test('Debe eliminar los acentos de el nombre: "LUZ MARÍA FERNÁNDEZ JUÁREZ"', () => {
    const nombre = 'LUZ MARÍA FERNÁNDEZ JUÁREZ'
    const nuevo = quitaAcentos(nombre)
    expect(nuevo).toBe('LUZ MARIA FERNANDEZ JUAREZ')
  })
})
