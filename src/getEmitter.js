import DuplexEmitter from 'duplex-emitter'
import chalk from 'chalk'

export default function getEmitter (socket, options) {
  const {logger, packageName} = options
  
  const emitter = DuplexEmitter(socket)
  
  emitter.on('connected', (data) => {
    logger.info(`${chalk.bgBlack.green(data)} connected...`)
    emitter.emit('connected', packageName)
    
    socket.on('close', (socket) => {
      handleClose(socket, logger, data)
    })    
  })
}

function handleClose (socket, logger, packageName) {
  logger.warn(`${chalk.bgBlack.green(packageName)} disconnected...`)
}