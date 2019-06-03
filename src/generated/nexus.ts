/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AccountCreateInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutAuthorInput'] | null; // PostCreateManyWithoutAuthorInput
  }
  AccountCreateOneWithoutPostsInput: { // input type
    connect?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
    create?: NexusGenInputs['AccountCreateWithoutPostsInput'] | null; // AccountCreateWithoutPostsInput
  }
  AccountCreateWithoutPostsInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
  }
  AccountUpdateInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    posts?: NexusGenInputs['PostUpdateManyWithoutAuthorInput'] | null; // PostUpdateManyWithoutAuthorInput
  }
  AccountUpdateManyMutationInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
  }
  AccountUpdateOneRequiredWithoutPostsInput: { // input type
    connect?: NexusGenInputs['AccountWhereUniqueInput'] | null; // AccountWhereUniqueInput
    create?: NexusGenInputs['AccountCreateWithoutPostsInput'] | null; // AccountCreateWithoutPostsInput
    update?: NexusGenInputs['AccountUpdateWithoutPostsDataInput'] | null; // AccountUpdateWithoutPostsDataInput
    upsert?: NexusGenInputs['AccountUpsertWithoutPostsInput'] | null; // AccountUpsertWithoutPostsInput
  }
  AccountUpdateWithoutPostsDataInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
  }
  AccountUpsertWithoutPostsInput: { // input type
    create: NexusGenInputs['AccountCreateWithoutPostsInput']; // AccountCreateWithoutPostsInput!
    update: NexusGenInputs['AccountUpdateWithoutPostsDataInput']; // AccountUpdateWithoutPostsDataInput!
  }
  AccountWhereInput: { // input type
    AND?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    OR?: NexusGenInputs['AccountWhereInput'][] | null; // [AccountWhereInput!]
    posts_every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  AccountWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
  PostCreateInput: { // input type
    author: NexusGenInputs['AccountCreateOneWithoutPostsInput']; // AccountCreateOneWithoutPostsInput!
    content?: string | null; // String
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostScalarWhereInput: { // input type
    AND?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    OR?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  PostUpdateInput: { // input type
    author?: NexusGenInputs['AccountUpdateOneRequiredWithoutPostsInput'] | null; // AccountUpdateOneRequiredWithoutPostsInput
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyDataInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyMutationInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['PostUpdateManyDataInput']; // PostUpdateManyDataInput!
    where: NexusGenInputs['PostScalarWhereInput']; // PostScalarWhereInput!
  }
  PostUpdateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
    delete?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    deleteMany?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    disconnect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    set?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    update?: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany?: NexusGenInputs['PostUpdateManyWithWhereNestedInput'][] | null; // [PostUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  }
  PostUpdateWithWhereUniqueWithoutAuthorInput: { // input type
    data: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostUpdateWithoutAuthorDataInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpsertWithWhereUniqueWithoutAuthorInput: { // input type
    create: NexusGenInputs['PostCreateWithoutAuthorInput']; // PostCreateWithoutAuthorInput!
    update: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    author?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  AccountOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  PostOrderByInput: "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "published_ASC" | "published_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  Account: { // root type
    email: string; // String!
    id: string; // ID!
    name?: string | null; // String
  }
  AccountConnection: { // root type
    edges: NexusGenRootTypes['AccountEdge'][]; // [AccountEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Account']; // Account!
  }
  AggregateAccount: { // root type
    count: number; // Int!
  }
  AggregatePost: { // root type
    count: number; // Int!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: { // root type
    content?: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  PostConnection: { // root type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AccountCreateInput: NexusGenInputs['AccountCreateInput'];
  AccountCreateOneWithoutPostsInput: NexusGenInputs['AccountCreateOneWithoutPostsInput'];
  AccountCreateWithoutPostsInput: NexusGenInputs['AccountCreateWithoutPostsInput'];
  AccountUpdateInput: NexusGenInputs['AccountUpdateInput'];
  AccountUpdateManyMutationInput: NexusGenInputs['AccountUpdateManyMutationInput'];
  AccountUpdateOneRequiredWithoutPostsInput: NexusGenInputs['AccountUpdateOneRequiredWithoutPostsInput'];
  AccountUpdateWithoutPostsDataInput: NexusGenInputs['AccountUpdateWithoutPostsDataInput'];
  AccountUpsertWithoutPostsInput: NexusGenInputs['AccountUpsertWithoutPostsInput'];
  AccountWhereInput: NexusGenInputs['AccountWhereInput'];
  AccountWhereUniqueInput: NexusGenInputs['AccountWhereUniqueInput'];
  PostCreateInput: NexusGenInputs['PostCreateInput'];
  PostCreateManyWithoutAuthorInput: NexusGenInputs['PostCreateManyWithoutAuthorInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostScalarWhereInput: NexusGenInputs['PostScalarWhereInput'];
  PostUpdateInput: NexusGenInputs['PostUpdateInput'];
  PostUpdateManyDataInput: NexusGenInputs['PostUpdateManyDataInput'];
  PostUpdateManyMutationInput: NexusGenInputs['PostUpdateManyMutationInput'];
  PostUpdateManyWithWhereNestedInput: NexusGenInputs['PostUpdateManyWithWhereNestedInput'];
  PostUpdateManyWithoutAuthorInput: NexusGenInputs['PostUpdateManyWithoutAuthorInput'];
  PostUpdateWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'];
  PostUpdateWithoutAuthorDataInput: NexusGenInputs['PostUpdateWithoutAuthorDataInput'];
  PostUpsertWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'];
  PostWhereInput: NexusGenInputs['PostWhereInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  AccountOrderByInput: NexusGenEnums['AccountOrderByInput'];
  PostOrderByInput: NexusGenEnums['PostOrderByInput'];
}

export interface NexusGenFieldTypes {
  Account: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
  AccountConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateAccount']; // AggregateAccount!
    edges: NexusGenRootTypes['AccountEdge'][]; // [AccountEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Account']; // Account!
  }
  AggregateAccount: { // field return type
    count: number; // Int!
  }
  AggregatePost: { // field return type
    count: number; // Int!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createAccount: NexusGenRootTypes['Account']; // Account!
    createPost: NexusGenRootTypes['Post']; // Post!
    deleteAccount: NexusGenRootTypes['Account'] | null; // Account
    deleteManyAccounts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyPosts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    updateAccount: NexusGenRootTypes['Account'] | null; // Account
    updateManyAccounts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyPosts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updatePost: NexusGenRootTypes['Post'] | null; // Post
    upsertAccount: NexusGenRootTypes['Account']; // Account!
    upsertPost: NexusGenRootTypes['Post']; // Post!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    author: NexusGenRootTypes['Account']; // Account!
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  PostConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregatePost']; // AggregatePost!
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    accountsConnection: NexusGenRootTypes['AccountConnection']; // AccountConnection!
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    postsConnection: NexusGenRootTypes['PostConnection']; // PostConnection!
  }
}

export interface NexusGenArgTypes {
  Account: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
  Mutation: {
    createAccount: { // args
      data: NexusGenInputs['AccountCreateInput']; // AccountCreateInput!
    }
    createPost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    deleteAccount: { // args
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    deleteManyAccounts: { // args
      where?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    }
    deleteManyPosts: { // args
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    deletePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    updateAccount: { // args
      data: NexusGenInputs['AccountUpdateInput']; // AccountUpdateInput!
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    updateManyAccounts: { // args
      data: NexusGenInputs['AccountUpdateManyMutationInput']; // AccountUpdateManyMutationInput!
      where?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    }
    updateManyPosts: { // args
      data: NexusGenInputs['PostUpdateManyMutationInput']; // PostUpdateManyMutationInput!
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    updatePost: { // args
      data: NexusGenInputs['PostUpdateInput']; // PostUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    upsertAccount: { // args
      create: NexusGenInputs['AccountCreateInput']; // AccountCreateInput!
      update: NexusGenInputs['AccountUpdateInput']; // AccountUpdateInput!
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    upsertPost: { // args
      create: NexusGenInputs['PostCreateInput']; // PostCreateInput!
      update: NexusGenInputs['PostUpdateInput']; // PostUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
  Query: {
    account: { // args
      where: NexusGenInputs['AccountWhereUniqueInput']; // AccountWhereUniqueInput!
    }
    accounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AccountOrderByInput'] | null; // AccountOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    }
    accountsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AccountOrderByInput'] | null; // AccountOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AccountWhereInput'] | null; // AccountWhereInput
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    postsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Account" | "AccountConnection" | "AccountEdge" | "AggregateAccount" | "AggregatePost" | "BatchPayload" | "Mutation" | "PageInfo" | "Post" | "PostConnection" | "PostEdge" | "Query";

export type NexusGenInputNames = "AccountCreateInput" | "AccountCreateOneWithoutPostsInput" | "AccountCreateWithoutPostsInput" | "AccountUpdateInput" | "AccountUpdateManyMutationInput" | "AccountUpdateOneRequiredWithoutPostsInput" | "AccountUpdateWithoutPostsDataInput" | "AccountUpsertWithoutPostsInput" | "AccountWhereInput" | "AccountWhereUniqueInput" | "PostCreateInput" | "PostCreateManyWithoutAuthorInput" | "PostCreateWithoutAuthorInput" | "PostScalarWhereInput" | "PostUpdateInput" | "PostUpdateManyDataInput" | "PostUpdateManyMutationInput" | "PostUpdateManyWithWhereNestedInput" | "PostUpdateManyWithoutAuthorInput" | "PostUpdateWithWhereUniqueWithoutAuthorInput" | "PostUpdateWithoutAuthorDataInput" | "PostUpsertWithWhereUniqueWithoutAuthorInput" | "PostWhereInput" | "PostWhereUniqueInput";

export type NexusGenEnumNames = "AccountOrderByInput" | "PostOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}