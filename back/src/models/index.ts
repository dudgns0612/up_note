import User, { associate as associateUser } from './user';
import Workspace, { associate as associateWorkspace } from './workspace';
import Item, { associate as associateItem } from './item';
import Team, { associate as associateTeam } from './team';
import UserTeamRel, { associate as associateUserTeamRel } from './userTeamRel';

const db = {
  User,
  Workspace,
  Item,
  Team,
  UserTeamRel,
};

associateUser(db);
associateWorkspace(db);
associateItem(db);
associateTeam(db);
associateUserTeamRel(db);

export type dbType = typeof db;
export { default } from './sequelize';
