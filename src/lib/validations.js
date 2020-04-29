const { List } = require('immutable-ext')
const { Either } = require('./types')
const { Left, Right } = Either

const Success = x => ({
  isFail: false,
  x,
  fold: (f, g) => g(x),
  concat: other => (other.isFail ? other : Success(x)),
})

const Fail = x => ({
  isFail: true,
  fold: (f, g) => f(x),
  x,
  concat: other => (other.isFail ? Fail(x.concat(other.x)) : Fail(x)),
})

const Validation = run => ({
  run,
  concat: other =>
    Validation((key, x) => run(key, x).concat(other.run(key, x))),
})

const regexTest = (string = '') =>
  Validation((key, x) =>
    string.test(x)
      ? Success(x)
      : Fail([{ key, message: `${key} must be an email` }])
  )
const isEmail = regexTest(/@/)

const isPresent = Validation((key, x) =>
  !!x ? Success(x) : Fail([{ key, message: `${key} needs to be present` }])
)

const isValidLength = Validation((key, x) =>
  x.length > 4
    ? Success(x)
    : Fail([{ key, message: `${key} needs to have a length greater than 4.` }])
)

const createValidation = ({ rule, message = '' } = {}) =>
  Validation((key, x) => (rule(x) ? Success(x) : Fail([{ key, message }])))

const test = [
  { key: 'email', message: 'email needs to be present' },
  { key: 'email', message: 'email must be an email' },
]

const errorsReducer = (errors = []) =>
  errors.reduce((acc, val) => {
    if (!acc[val.key]) {
      acc[val.key] = []
      console.log(acc)
    }
    console.log(val, acc[val.key])
    acc[val.key].push(val.message)
    console.log(acc)
    return acc
  }, {}) //?

const validate = (spec = { name: isPresent }, obj = {}) => {
  console.log({ spec, obj })
  return List(Object.keys(spec)).foldMap(
    key => spec[key].run(key, obj[key]),
    Success([obj])
  )
}
const displayErrors = errors =>
  Object.keys(errors).map(x => errors[x].map(x => <p>{x}</p>))

const initValid = x =>
  validate(
    {
      name: isPresent,
      email: isPresent.concat(isEmail),
    },
    { ...x }
  )
const id = x => x

export {
  validate,
  regexTest,
  createValidation,
  isEmail,
  isPresent,
  initValid,
  errorsReducer,
  displayErrors,
  isValidLength,
}
