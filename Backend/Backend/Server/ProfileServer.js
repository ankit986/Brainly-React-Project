const handleProfile = (req, res, mysql, bcrypt) => {
	const { id } = req.params;
	database.forEach(user => {
		if(user.id === id){
			return res.send(user);
		}else{
			return res.send("No Such User Exist")
		}
	})
}

module.exports = {
	handleProfile: handleProfile
};