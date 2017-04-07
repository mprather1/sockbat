# sockbat

## Synopsis

Server will listen on the specified port and handles connections.

## Installation

  npm install --save sockbat
  
## Usage

Accepts a JavScript object as an argument:

	const options = {
	  socketPort: process.env.SOCKET_PORT,
	  logger: winston,
	  hostname: process.env.HOSTNAME,
	  packageName: pkg.name,
	}
	
	const {server} = options
	
	server.listen(socketPort, hostname)

<div class="footer">
  readme v0.0.3
</div>
