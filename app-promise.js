const yargs = require('yargs')
const axios = require('axios')

const key = '897af5e87971d7c8b6910c3a4dbf446f';
const key1='nv36OPKOrKKedHk4G9rSmUzZr66bvjRd';

const argv = yargs
	.options({
		a:{
			demand: true,
			alias: 'address',
			describe: 'address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;
var encodedaddr = encodeURIComponent(argv.address);
var geocodeurl = 'http://www.mapquestapi.com/geocoding/v1/address?key='+key1+'&location='+encodedaddr
axios.get(geocodeurl).then((response)=>{
	if(response.data.info===undefined||response.data.info.statuscode===400){
		throw new Error('enter valid address')
	}
	var lat = response.data.results[0].locations[0].latLng.lat;
	var lng = response.data.results[0].locations[0].latLng.lng;
	var addr=response.data.results[0].locations[0].street+" "+response.data.results[0].locations[0].adminArea6+" "+response.data.results[0].locations[0].adminArea5+" "+response.data.results[0].locations[0].adminArea4+" "+response.data.results[0].locations[0].adminArea3+" "+response.data.results[0].locations[0].adminArea1;
	console.log(addr);
	var weatherurl = "https://api.darksky.net/forecast/"+key+'/'+lat+','+lng;
	return axios.get(weatherurl);
}).then((response)=>{
	var temp = response.data.currently.temperature;
	var apptemp= response.data.currently.apparentTemperature;	
	var cel=(temp-32)*5/9;
	var appcel=(apptemp-32)*5/9
	console.log("  Temperature = "+cel+'.C');
	console.log("  Apparent Temperature = "+appcel+'.C');

})
.catch((e)=>{
	if(e.status===200)
	console.log("Enter valid address")
	else{
		console.log(e.message);
	}
})
