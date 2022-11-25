const adminModel = (sequelize: any, Sequelize: any) => {
	const admin = sequelize.define("admin", {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			unique: true
		},
		email: {
			type: Sequelize.STRING,
			unique: true
		},
		password: {
			type: Sequelize.STRING
		}
	});

	return admin;
};

export default adminModel;