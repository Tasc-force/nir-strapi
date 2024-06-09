import type { Schema, Attribute } from '@strapi/strapi';

export interface UserUsers extends Schema.Component {
  collectionName: 'components_user_users';
  info: {
    displayName: 'users';
    description: '';
  };
  attributes: {
    pass: Attribute.Password;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.users': UserUsers;
    }
  }
}
