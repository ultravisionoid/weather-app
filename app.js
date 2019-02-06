const yargs=require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a:{
			demand:true,
			alias:'address',
			describe:'Address of the location(in inverted commas)',
			string : true
		}
})
	.help()
	.alias('help','h')
	.argv;
if(argv.address)
	geocode.geocodeaddress(argv.address,(errormessage,result)=>{
		if(errormessage){
			console.log(errormessage);
		}
		else{
			console.log(JSON.stringify(result,undefined,2));
			weather.temp(result.Latitude,result.Longitude,(error,weatherresults)=>{

			});
		}
	});
else{
	console.log('Enter the address & try again (=_=)');
}