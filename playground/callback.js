var getuser=(id,callback)=>{
	user={
		id:id,
		name:"aayush"
	};
	setTimeout(()=>{
		callback(user)
	},3000);
};


getuser(31,(user)=>{
	console.log(user);
});