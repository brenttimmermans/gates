const { and, or, not, nand, nor } = require('..')

const testCases = [
  [true],
  [false],
  [[true]],
  [[false]],
  [[true, true]],
  [[false, false]],
  [[true, false]],
  [[]],
  [null],
  [undefined],
  [1],
  [-1],
  [''],
  ['not-an-empty-string'],
  [NaN],
  [new Error],
]

describe.each`
  description | gate
  ${'AND'}    | ${and}
  ${'OR'}     | ${or}
  ${'NOT'}    | ${not}
  ${'NAND'}   | ${nand}
  ${'NOR'}    | ${and}
`('$description', ({ gate }) => {
  test.each(testCases)('%p', (input) => {
    const output = gate(input)
    expect(output).toMatchSnapshot()  })
})
