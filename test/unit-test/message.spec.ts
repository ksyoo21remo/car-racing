import { expect } from 'chai'
import * as sinon from 'sinon'

import message from '../../src/message'

describe('message 모듈', () => {
  describe('create 메소드', function () {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(message, 'create')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    const messageString = 'Typescript ❕ 😊😊'

    it(`결과값은 '${messageString}' 이다`, () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const result = message.create()
      expect(spy.calledOnce).to.be.true
      expect(result).to.be.equal(messageString)
    })
  })
})
