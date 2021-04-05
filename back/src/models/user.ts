import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';
import { dbType } from './index';

class User extends Model {
  public userNo!: number;
  public userId!: string;
  public userNickNm!: string;
  public userProfileUrl!: string;
}

User.init(
  {
    userNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userNickNm: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    userProfileUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Workspace, { foreignKey: 'userNo' });
};

export default User;
