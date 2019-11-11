export default birthDate => {
  var date, day, month, year
  date = birthDate.split('-')
  year = date[0].substring(2, 4)
  month = date[1]
  day = date[2]
  return year + month + day
}
