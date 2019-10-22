import quitaPrefijos from '../src/helpers/quitaPrefijos'

describe('quitaPrefijos', () => {
  test('Debe quitar los prefijos del nombre "JOSÉ DE JESUS" y devolver "JESUS"', () => {
    const nombre = 'JOSÉ DE JESUS'
    expect(quitaPrefijos(nombre)).toBe('JESUS')
  })
  test('Debe quitar los prefijos del apellido "DE LA O" y devolver "O"', () => {
    const apellido = 'DE LA O'
    expect(quitaPrefijos(apellido)).toBe('O')
  })
})
