
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ChocomilkSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ChocomilkSDK.test()
    equal(null !== testsdk, true)
  })

})
