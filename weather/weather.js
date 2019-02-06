const request = require('request');
const key = '897af5e87971d7c8b6910c3a4dbf446f';
temp=(lat,lng,callback)=>{
	request({
		url:'https://api.darksky.net/forecast/'+key+'/'+lat+','+lng,
		json:true
	},(error,response,body)=>{
		if(error){
			console.log('Unable to connect to the API forecast');

		}
		else if(response.statusCode===404){
			console.log('Unable to fetch weather');

		}
		else if(response.statusCode===200){
			callback(undefined,{
				Temperature:body.currently.temperature
			});

			var cel=(body.currently.temperature-32)*5/9;
			var appcel=(body.currently.apparentTemperature-32)*5/9
			console.log("  Temperature = "+cel+'.C');
			console.log("  Apparent Temperature = "+appcel+'.C');
			
		}
	})
};

module.exports={
	temp
}