module.exports = function(str) {
  const re = RegExp(/(\"[^\"]*\")/, 'g')
  let result = []
  while (re.exec(str)) {
    result.push(RegExp.$1)
  }
  return result
  // return str.match(re)
}
