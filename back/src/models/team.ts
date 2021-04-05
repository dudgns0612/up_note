import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize';
import { dbType } from './index';

class Team extends Model {
  public teamNo!: number;
  public teamNm!: string;
}

Team.init(
  {
    teamNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamNm: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'team',
    tableName: 'team',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Team.hasMany(db.Workspace, { foreignKey: 'teamNo' });
};

export default Team;
