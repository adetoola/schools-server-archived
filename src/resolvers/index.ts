import * as Account from './Account';
import { AccountPermissions } from './Account/Account.permissions';
import * as Owner from './Owner';
import { OwnerPermissions } from './Owner/Owner.permissions';

export const resolvers = { Account, Owner };

export const permissions = [AccountPermissions, OwnerPermissions];
