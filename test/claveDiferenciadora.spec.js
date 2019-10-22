import claveDiferenciadora from '../src/helpers/claveDiferenciadora'

describe('claveDiferenciadora', () => {
  test('Debe responder con "GR" a "GOMEZ DIAZ EMMA"', () => {
    expect(claveDiferenciadora('GOMEZ DIAZ EMMA')).toBe('GR')
  })
  test('Debe responder con "IL" a "GARCIA  SANTIAGO  JOAQUIN"', () => {
    expect(claveDiferenciadora('GARCIA  SANTIAGO  JOAQUIN')).toBe('IL')
  })
})
