
const request = require("request");

const yargs = require('yargs');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias : 'address',
			description: 'Adresss to fetch weather',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

	console.log(argv);
	var code = encodeURIComponent(argv.a);





request({
  url: `https://us1.locationiq.com/v1/search.php?key=pk.1491fb044928e238487a67ec441e5cb8&q=${code}&format=json`,
  json: true
},(error,response,body) => {
  //console.log(JSON.stringify(body,undefined,2));
  console.log(`Address: ${body[0].display_name}`);
  console.log(`Lattitude: ${body[0].lat}`);
  console.log(`Longitude: ${body[0].lon}`);
});
// Request Ended.
