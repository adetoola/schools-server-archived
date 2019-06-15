import { objectType } from 'nexus';

export const TriggerAction = objectType({
  name: 'TriggerAction',
  definition(t): void {
    t.boolean('ok');
  },
});
