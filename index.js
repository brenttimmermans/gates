function not (value) {
  return !value
}

function and (input) {
  if (!Array.isArray(input)) return Boolean(input)

  return input.length === 1
    ? false
    : input.every(value => Boolean(value) === true)
}

function or (input) {
  if (!Array.isArray(input)) return Boolean(input)

  return input.length === 1
    ? Boolean(input)
    : input.some(value => Boolean(value) === true)
}

function nand (input) {
  return not(and(input))
}

function nor (input) {
  return not(or(input))
}

module.exports = {
  and,
  or,
  not,
  nand,
  nor
}
