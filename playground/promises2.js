const request = require('request');
const key='nv36OPKOrKKedHk4G9rSmUzZr66bvjRd';

var geocodeaddress=(address)=>{
	return new Promise((resolve,reject)=>{
		var encodedaddr = encodeURIComponent(address);

	request({
		url:'http://www.mapquestapi.com/geocoding/v1/address?key='+key+'&location='+encodedaddr,
		json: true
	},(error,response,body)=>{
		if(error){

			reject('unable to connect to the servers');

		}
		else if(body.info.statuscode===400){
			reject('Address not found!');
		}
		else if(!body.results[0].locations[0]){
			reject('Address not found!!!');
		}
		else {
			resolve({
				Address:body.results[0].locations[0].street+" "+body.results[0].locations[0].adminArea6+" "+body.results[0].locations[0].adminArea5+" "+body.results[0].locations[0].adminArea4+" "+body.results[0].locations[0].adminArea3+" "+body.results[0].locations[0].adminArea1,
				Latitude : body.results[0].locations[0].latLng.lat,
				Longitude : body.results[0].locations[0].latLng.lng
				
			});

		
		}
	});
	});
};
geocodeaddress('').then((locaation)=>{
	console.log(JSON.stringify(locaation,undefined,2));
},(error)=>{
	console.log(error);
})