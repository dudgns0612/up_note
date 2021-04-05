import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize';
import { dbType } from './index';

class UserTeamRel extends Model {
  public status!: number;
}

UserTeamRel.init(
  {
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'UserTeamRel',
    tableName: 'user_team_rel',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.User.belongsToMany(db.Team, { through: UserTeamRel, foreignKey: 'userNo' });
  db.Team.belongsToMany(db.User, { through: UserTeamRel, foreignKey: 'teamNo' });
};

export default UserTeamRel;
