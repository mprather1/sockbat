import net from 'net'
import chalk from 'chalk'
import getEmitter from './getEmitter'

export default function getServer (options) {
  const {logger, port, packageName} = options
  
  const server = net.createServer()
  options.server = server
  
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

    options.emitter = emitter
  }
  
  return options
}

function handleError (err, logger) {
  logger.error("error:", err.message)
}
