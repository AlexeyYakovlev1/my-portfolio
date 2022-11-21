const projectModel = (sequelize: any, Sequelize: any) => {
	const Project = sequelize.define("project", {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			unique: true
		},
		description: {
			type: Sequelize.STRING
		},
		link: {
			type: Sequelize.STRING
		}
	});

	return Project;
};

export default projectModel;