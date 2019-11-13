import digitoVerificador from '../src/helpers/digitoVerificador'

describe('digitoVerificador', () => {
  test('Debe responder con "8" al recibir "GODE561231GR"', () => {
    const rfc = 'GODE561231GR'
    expect(digitoVerificador(rfc)).toBe('8')
  })
  test('Debe responder con "A" al recibir "GASJ920722IL"', () => {
    const rfc = 'GASJ920722IL'
    expect(digitoVerificador(rfc)).toBe('A')
  })
  test('Debe responder con "A" al recibir "LODH950401G4"', () => {
    const rfc = 'LODH950424G4'
    expect(digitoVerificador(rfc)).toBe('9')
  })
  test('Debe generar un error al recibir un string con longitud diferente a 12', () => {
    try {
      digitoVerificador('GASJ')
    } catch (e) {
      expect(e.toString()).toBe('Error: La logitud de la cadena debe ser exactamente 12')
    }
  })
})
