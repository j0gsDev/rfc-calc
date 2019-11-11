import palabrasVetadas from '../src/helpers/palabrasVetadas'

describe('Palabras Vetadas', () => {
  test('tuene que devolver la ultima letra en X para las palabras que son vetadas', () => {
    const work = 'ruue'
    expect(palabrasVetadas(work)).toBe('ruue')
  })
  test('tuene que devolver la ultima letra en X para las palabras que son vetadas', () => {
    const work = 'COJO'
    expect(palabrasVetadas(work)).toBe('COJX')
  })
})
