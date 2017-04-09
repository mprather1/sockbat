import net from 'net'
import chalk from 'chalk'
import getEmitter from './getEmitter'

export default class Sockbat {
  constructor (options) {
    const server = net.createServer()
    configServer(options, server)
    return server
  }
}

function configServer (options, server) {
  const {logger, port, packageName} = options
  
  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${port}...`)
  })
  
  server.on('connection', (socket) => {
    handleConnection(socket, options)
  })
  
  function handleConnection (socket, options) {
    const {logger} = options
    
    const emitter = getEmitter(socket, options)

    socket.on('error', (err) => {
      handleError(err, logger)
    })
    emitter.on('error', (err) => {
      handleEmitterError(err, logger)
    })
  }
  
  function handleEmitterError (err, logger) {
    logger.error('error:', err.message)
  }
}

function handleError (err, logger) {
  logger.error("error:", err.message)
}
