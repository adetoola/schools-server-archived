import * as Account from './Account';
import { AccountPermissions } from './Account/Account.permissions';
import * as Owner from './Owner';
import { OwnerPermissions } from './Owner/Owner.permissions';
import * as School from './School';
import { schoolPermissions } from './School/Schools.permissions';

export const resolvers = { Account, Owner, School };

export const permissions = [AccountPermissions, OwnerPermissions, schoolPermissions];
