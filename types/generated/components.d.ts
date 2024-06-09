import type { Schema, Attribute } from '@strapi/strapi';

export interface UserUsers extends Schema.Component {
  collectionName: 'components_user_users';
  info: {
    displayName: 'users';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    password: Attribute.String & Attribute.Required;
    username: Attribute.String & Attribute.Required;
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cafedra: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.users': UserUsers;
    }
  }
}
