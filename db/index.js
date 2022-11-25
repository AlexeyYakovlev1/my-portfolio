import Sequelize from "sequelize";
import projectModel from "./models/project.db-models";
import imageModel from "./models/image.db-models";
import techModel from "./models/tech.db-models";
import adminModel from "./models/admin.db-models";
import roleModel from "./models/role.db-models";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: "postgres",
	operationAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.projects = projectModel(sequelize, Sequelize);
db.images = imageModel(sequelize, Sequelize);
db.techs = techModel(sequelize, Sequelize);
db.admins = adminModel(sequelize, Sequelize);
db.roles = roleModel(sequelize, Sequelize);

db.images.belongsTo(db.projects, { foreignKey: "imageId", as: "image" });
db.techs.belongsTo(db.projects, { foreignKey: "techId", as: "technology" });
db.projects.belongsTo(db.admins, { foreignKey: "projectId", as: "project" });
db.roles.belongsTo(db.admins, { as: "roles" });

export default db;