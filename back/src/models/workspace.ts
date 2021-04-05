import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize';
import { dbType } from './index';

class Workspace extends Model {
  public workspaceNo!: number;
  public workspaceNm!: string;
}

Workspace.init(
  {
    workspaceNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    workspaceNm: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Workspace',
    tableName: 'workspace',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Workspace.belongsTo(db.User, { foreignKey: 'userNo' });
  db.Workspace.belongsTo(db.Team, { foreignKey: 'teamNo' });
  db.Workspace.hasMany(db.Item, { foreignKey: 'workspaceNo' });
};

export default Workspace;
