module.exports = function(str) {
  let result = 0
  let re = RegExp(/(0x[A-Fa-f0-9]{0,2})/, 'g')
  while (re.exec(str)) {
    result += 1
  }
  return result === 8
}
