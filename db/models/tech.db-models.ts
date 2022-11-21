const techModel = (sequelize: any, Sequelize: any) => {
	const Tech = sequelize.define("tech", {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			unique: true
		},
		img: {
			type: Sequelize.STRING
		}
	});

	return Tech;
};

export default techModel;