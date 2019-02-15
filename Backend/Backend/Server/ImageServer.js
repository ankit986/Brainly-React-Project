const handleImage = (req, res, mysql, bcrypt) => {
	const { id } = req.body;
	database.forEach(user => {
		if(user.id === id){
			user.entry++;
			return res.json(user.entry);
		}else{
			return res.send("No Such User Exist")
		}
	})	
}

module.exports = {
	handleImage: handleImage
};