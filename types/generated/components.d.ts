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

export interface LcAuOurValuesAboutUsValues extends Struct.ComponentSchema {
  collectionName: 'components_lc_au_our_values_about_us_values';
  info: {
    displayName: 'About us values';
    icon: 'handHeart';
  };
  attributes: {
    valueDesc: Schema.Attribute.Text;
    valueImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    valueTitle: Schema.Attribute.String;
  };
}

export interface LcAuWhyUsAboutUsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_lc_au_why_us_about_us_why_choose_uses';
  info: {
    displayName: 'About us - why choose us';
  };
  attributes: {
    whyUsDesc: Schema.Attribute.Text;
    whyUsTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.contact-info': ContactInfoContactInfo;
      'lc-au-our-values.about-us-values': LcAuOurValuesAboutUsValues;
      'lc-au-why-us.about-us-why-choose-us': LcAuWhyUsAboutUsWhyChooseUs;
    }
  }
}
