import { Model, DataTypes } from 'sequelize';
import { dbType } from '.';
import sequelize from './sequelize';

class Item extends Model {
  public itemNo!: number;
  public itemNm!: string;
  public itemContent!: string;
}

Item.init(
  {
    itemNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemNm: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    itemContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'item',
    tableName: 'item',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Item.belongsTo(db.Workspace, { foreignKey: 'workspaceNo' });
};

export default Item;
