
import { Context } from './Context'


class ChocomilkError extends Error {

  isChocomilkError = true

  sdk = 'Chocomilk'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ChocomilkError
}

