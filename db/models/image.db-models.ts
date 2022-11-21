const imageModel = (sequelize: any, Sequelize: any) => {
	const Image = sequelize.define("image", {
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

	return Image;
};

export default imageModel;