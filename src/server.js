import build from './api.js'

const api = build({
  logger: {
    level: 'debug',
    transport: {
      target: 'pino-pretty'
    }
  }
})

try {
  await api.listen({ host: '0.0.0.0', port: 3000 })
} catch (err) {
  api.log.error(err)
  process.exit(1)
}
