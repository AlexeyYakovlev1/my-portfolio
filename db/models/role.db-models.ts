const roleModel = (sequelize: any, Sequelize: any) => {
	const role = sequelize.define("role", {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			unique: true
		}
	});

	return role;
};

export default roleModel;