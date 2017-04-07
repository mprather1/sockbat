# sockbat

## Synopsis

Server will listen on the specified port and handles connections.

## Installation

  npm install --save sockbat
  
## Usage

Accepts a JavaScript object as an argument:

	const options = {
	  port: process.env.PORT,
	  logger: winston,
	  hostname: process.env.HOSTNAME,
	  packageName: pkg.name,
	}
	
	sockbat(options)
	const {server} = options
	
	server.listen(port, hostname)

<div class="footer">
  readme v0.0.5
</div>
