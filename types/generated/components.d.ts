import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    contact_detail: Schema.Attribute.String;
    contact_type: Schema.Attribute.Enumeration<
      ['Email', 'Location', 'Phone', 'Instagram', 'Facebook', 'Tiktok']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.contact-info': ContactInfoContactInfo;
    }
  }
}
