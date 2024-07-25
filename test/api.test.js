import { expect } from 'chai'
import build from '../src/api.js'

describe('api', function () {
  let api

  before(async function () {
    api = await build()
  })

  context('path: /', function () {
    it('get', async function () {
      const res = await api.inject({ method: 'GET', path: '/' })
      expect(res.statusCode).to.equal(204)
      expect(res.headers['content-type']).to.equal('application/json')
      expect(res.body).to.be.empty
    })
  })
})
