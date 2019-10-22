const prefijos = /((?:DA|DAS|DE|DEL|DER|DI|DIE|DD|EL|LA|LOS|LAS|LE|LES|MAC|MC|VAN|VON|Y|M|C) )/gi
const nombres = /^((?:ma[.]?(?:r[ií]a)? )|(?:j[.]?(?:os[eé])? ))/gi

export default string => string.replace(prefijos, '').replace(nombres, '')
