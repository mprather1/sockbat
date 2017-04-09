# sockbat

## Synopsis

Server will listen on the specified port and handles connections.

## Installation

  	npm install --save sockbat
  
## Usage
		
		import Sockbat from 'sockbat'
		
		# accepts a JavaScript object as an argument:
	
		const options = {
		  port: process.env.PORT,
		  logger: winston,
		  hostname: process.env.HOSTNAME,
		  packageName: pkg.name,
		}
		
		const sockbat = new Sockbat(options)
		
		sockbat.listen(port, hostname)
		
		sockbat.on('connection', () => {
			console.log('connected')
		})
		
## Dependencies
	* duplex-emitter
	* chalk

<div class="footer">
  readme v1.0.0
</div>
