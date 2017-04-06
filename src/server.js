import winston from 'winston-color'
import chalk from 'chalk'
import pkg from '../package.json'
import getServer from './getSocketServer'
import getNextId from './getNextId'

var options = {
  port: process.env.PORT || 55445,
  hostname: process.env.HOSTNAME,
  packageName: pkg.name,
  logger: winston,
}

options = getServer(options)

const {server, port, hostname} = options

server.listen(port, hostname)