var asyncadd=(a,b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a==='number'&&typeof b==='number'){
				resolve(a+b);
			}
			else{
				reject('arguments must be nos');
			}
		},1500);
	});
 };
 asyncadd(5,8).then((res)=>{
 	
 	console.log(res);
 	return asyncadd(res,'30');
 }).then((res)=>{
 	console.log(res);
 }).catch((error=>{
 	console.log(error);
 }));
// var somepromise = new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			//resolve('hey it worked');	
// 			reject('unable to fullfil promise');
// 		},2000);
	
// });
// somepromise.then((message)=>{
// 	console.log('success:'+message);
// },(errormessage)=>{
// 	console.log('error: '+errormessage);
// }
// )