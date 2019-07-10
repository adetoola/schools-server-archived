import { enumType } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

export const Student = prismaObjectType({
  name: 'Student',
  definition(t) {
    t.prismaFields([
      'id',
      'firstName',
      'lastName',
      'middleName',
      'nameSuffix',
      'gender',
      'ethnicity',
      'nickname',
      'nin',
      'birthdate',
      'language',
      'estimatedGradDate',
      'email',
      'phone',
      'createdAt',
    ]);
  },
});

export const EthnicityEnum = enumType({
  name: 'EthnicityEnum',
  members: [
    'AFRICAN',
    'ASIAN',
    'HISPANIC',
    'PACIFIC_ISLANDER',
    'INDIAN',
    'MIDDLE_EASTERN',
    'MIXED_RACE',
    'WHITE',
    'INDIGENOUS',
    'AMERICAN_INDIAN_OR_NATIVE_ALASKAN',
    'UNKNOWN',
    'OTHER',
  ],
});

export const GenderEnum = enumType({
  name: 'GenderEnum',
  members: ['MALE', 'FEMALE', 'OTHER', 'UNKNOWN'],
});

export const LanguageEnum = enumType({
  name: 'LanguageEnum',
  members: ['ENGLISH', 'IGBO', 'HAUSA', 'YORUBA', 'FRENCH', 'SPANISH'],
});

export const SuffixEnum = enumType({
  name: 'SuffixEnum',
  members: ['JUNIOR', 'I', 'II', 'III', 'IV', 'SENIOR'],
});
