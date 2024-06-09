import type { Schema, Attribute } from '@strapi/strapi';

export interface UserUsers extends Schema.Component {
  collectionName: 'components_user_users';
  info: {
    displayName: 'users';
    description: '';
  };
  attributes: {
    email: Attribute.Email;
    password: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.users': UserUsers;
    }
  }
}
