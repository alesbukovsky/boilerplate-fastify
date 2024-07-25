import Fastify from 'fastify'

function build (opts = {}) {
  const api = new Fastify(opts)

  api.addHook('onSend', function (req, res, data, done) {
    res.headers({ 'Content-Type': 'application/json' })
    done()
  })

  api.get('/', async function (req, res) {
    res.status(204).send()
  })

  return api
}

export default build
