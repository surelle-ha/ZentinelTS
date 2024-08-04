import { Sequelize } from "sequelize";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize: Sequelize) => {
	class Permission extends Model {}

	Permission.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Permission",
			timestamps: true,
		}
	);

	Permission.associate = function (models: any) {
		Permission.belongsToMany(models.Role, {
			through: "RolePermission",
			as: "Roles",
			foreignKey: "permission_id",
			otherKey: "role_id",
		});
	};

	return Permission;
};
