const handleRegister = (req, res, mysql, bcrypt) => {
	const {name, email, password} = req.body;
	const hash = bcrypt.hashSync(password);
	mysql.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return 	mysql('users')
				.returning('*')
				.insert({
					name: name,
					email: email,
					doj: new Date()
				})
				.then(response => {res.send("response")})
		})
		.then(trx.commit)
		.catch(trx.rollback);
	})	
}

module.exports = {
	handleRegister: handleRegister
};