const handleSignin = (req, res, mysql, bcrypt) => {
	mysql.select('email', 'hash').from('login')
	.where('email', '=', req.body.email)
	.then(data => {
		const passwd = bcrypt.compareSync(req.body.password, data[0].hash);
		if(passwd){
			mysql.select('*').from('users')
			.where('email', '=', req.body.email)
			.then(user => {
				res.json(user[0]);
				console.log(user[0])
			})
			.catch(err => {res.status(400).json("unable to get user")})
		}
		else {res.status(400).json("wrong credential")}
	})
	.catch(err => {res.status(400).json("unable to get user")})
}


module.exports = {
	handleSignin: handleSignin
};