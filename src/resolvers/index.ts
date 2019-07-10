import * as Account from './Account';
import { AccountPermissions } from './Account/Account.permissions';
import * as Invitation from './Invitation';
import { InvitationPermissions } from './Invitation/Invitation.permissions';
import * as Location from './Location';
import * as Owner from './Owner';
import { OwnerPermissions } from './Owner/Owner.permissions';
import * as School from './School';
import { SchoolPermissions } from './School/Schools.permissions';
import * as Student from './Student';
import { StudentPermissions } from './Student/Student.permission';

export const resolvers = { Account, Invitation, Location, Owner, School, Student };

export const permissions = [
  AccountPermissions,
  InvitationPermissions,
  OwnerPermissions,
  SchoolPermissions,
  StudentPermissions,
];
