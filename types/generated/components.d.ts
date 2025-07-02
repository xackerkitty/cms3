import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    contact_detail: Schema.Attribute.String;
    type_of_contact: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.contact-info': ContactInfoContactInfo;
    }
  }
}
