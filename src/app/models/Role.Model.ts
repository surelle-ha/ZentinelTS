import { Sequelize } from "sequelize";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize: Sequelize) => {
	class Role extends Model {}

	Role.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Role",
			tableName: "Roles",
			timestamps: true,
		}
	);

	Role.associate = function (models: any) {
		Role.belongsToMany(models.Permission, {
			through: "Role_Permission",
			as: "Permissions",
			foreignKey: "role_id",
			otherKey: "permission_id",
		});
	};

	return Role;
};
