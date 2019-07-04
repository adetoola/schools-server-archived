import * as Account from './Account';
import { AccountPermissions } from './Account/Account.permissions';
import * as Invitation from './Invitation';
import { InvitationPermissions } from './Invitation/Invitation.permissions';
import * as Location from './Location';
import * as Owner from './Owner';
import { OwnerPermissions } from './Owner/Owner.permissions';
import * as School from './School';
import { SchoolPermissions } from './School/Schools.permissions';

export const resolvers = { Account, Owner, School, Location, Invitation };

export const permissions = [AccountPermissions, OwnerPermissions, SchoolPermissions, InvitationPermissions];
