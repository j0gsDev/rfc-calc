import Clave from '../src'
describe('calcularRFC', () => {
  test('calcular 10 digitos del rfc', () => {
    const nombre = 'edgar'
    const app = 'ruiz'
    const apm = 'uribe'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toBe('RUUE9303026R8')
  })
  test('calcular 10 digitos del rfc', () => {
    const nombre = 'joaquin'
    const app = 'garcia'
    const apm = 'santiago'
    const fechNac = '1992-07-22'
    expect(Clave(nombre, app, apm, fechNac)).toBe('GASJ920722ILA')
  })
  test('calcular 10 digitos del rfc', () => {
    const nombre = 'hector alan'
    const app = 'lopez'
    const apm = 'diaz'
    const fechNac = '1995-04-24'
    expect(Clave(nombre, app, apm, fechNac)).toBe('LODH950424G49')
  })
  test('Cuando la letra inicial de cualquiera de los apellidos o nombre sea compuesta, únicamente se anotará la inicial de ésta. En la Ch la C y en la Ll la L.', () => {
    const nombre = 'Manuel'
    const app = 'Chávez'
    const apm = 'González'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('CAGM'))
  })
  test('En los casos en que el apellido paterno de la persona física se componga de una o dos letras', () => {
    const nombre = 'Alvaro'
    const app = 'de la O'
    const apm = 'Lozano'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('OLAL'))
  })
  test('Cuando el apellido paterno o materno sean compuestos, se tomará para la clasificación la primera palabra que corresponda a cualquiera de ellos', () => {
    const nombre = 'Dolores'
    const app = 'San Martín'
    const apm = 'Dávalos'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('SADD'))
  })
  test('Cuando el nombre es compuesto, o sea, que esta formado por dos o más palabras, se tomará para la conformación la letra inicial de la primera, siempre que no sea MARIA o JOSE dado su frecuente uso, en cuyo caso se tomará la primera letra de la segunda palabra.', () => {
    const nombre = 'José Antonio'
    const app = 'Camargo'
    const apm = 'Hernández'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('CAHA'))
  })
  test('En los casos en que la persona física tenga un solo apellido, se conformará con la primera y segunda letras del apellido paterno o materno, según figure en el acta de nacimiento, más la primera y segunda letras del nombre.', () => {
    const nombre = 'Juan'
    const app = 'Martínez'
    const apm = ''
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('MAJU'))
  })
  test('Cuando en el nombre de las personas físicas figuren artículos, preposiciones, conjunciones o contracciones no se tomarán como elementos de integración de la clave, ejemplos:', () => {
    const nombre = 'Carmen'
    const app = 'de la Peña '
    const apm = 'Ramírez'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('PERC'))
  })
  test('Cuando de las cuatro letras que formen la expresión alfabética, resulte una palabra inconveniente, la ultima letra será sustituida por una  “ X “.', () => {
    const nombre = 'omar'
    const app = 'pungu'
    const apm = 'torombolo'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('PUTX930302'))
  })
  test('Cuando aparezcan formando parte del nombre, apellido paterno y apellido materno los caracteres especiales, éstos deben de excluirse para el cálculo del homónimo y del dígito verificador. Los caracteres se interpretarán, sí y sólo si, están en forma individual dentro del nombre, apellido paterno y apellido materno.', () => {
    const nombre = 'Roberto'
    const app = 'O’farril'
    const apm = 'Carballo'
    const fechNac = '1993-03-02'
    expect(Clave(nombre, app, apm, fechNac)).toEqual(expect.stringContaining('OACR'))
  })
})
