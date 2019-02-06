const request = require('request');
const key='nv36OPKOrKKedHk4G9rSmUzZr66bvjRd';
geocodeaddress=(address,callback)=>{
	var encodedaddr = encodeURIComponent(address);

	request({
		url:'http://www.mapquestapi.com/geocoding/v1/address?key='+key+'&location='+encodedaddr,
		json: true
	},(error,response,body)=>{
		if(error){

			callback('unable to connect to the servers');

		}
		else if(body.info.statuscode===400){
			callback('Address not found!');
		}
		else if(!body.results[0].locations[0]){
			callback('Address not found!!!');
		}
		else {
			callback(undefined,{
				Address:body.results[0].locations[0].street+" "+body.results[0].locations[0].adminArea6+" "+body.results[0].locations[0].adminArea5+" "+body.results[0].locations[0].adminArea4+" "+body.results[0].locations[0].adminArea3+" "+body.results[0].locations[0].adminArea1,
				Latitude : body.results[0].locations[0].latLng.lat,
				Longitude : body.results[0].locations[0].latLng.lng
				
			});

		
		}
	});

}
module.exports={
	geocodeaddress
}
//897af5e87971d7c8b6910c3a4dbf446f