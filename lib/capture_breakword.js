module.exports = function(str) {
  if (!/\bx=(\d+)\b/.test(str)) return null
  return RegExp.$1
}
