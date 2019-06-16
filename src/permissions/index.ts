import { all } from 'deepmerge';
import { deny, IRule, shield } from 'graphql-shield';

import { permissions as allPermissions } from '../resolvers/index';

const basePermissions = {
  Query: {
    '*': deny,
  },
  Mutation: {
    '*': deny,
  },
};

const mergePermissions = all([basePermissions, ...allPermissions], { clone: false }) as IRule;

export const permissions = shield(mergePermissions);
