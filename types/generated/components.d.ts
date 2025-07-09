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

export interface LcAuCardsGalleryImageCards extends Struct.ComponentSchema {
  collectionName: 'components_lc_au_cards_gallery_image_cards';
  info: {
    displayName: 'Gallery image cards';
    icon: 'priceTag';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    spanColums: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
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

export interface LcHomeFeaturedCarsFeaturedCars extends Struct.ComponentSchema {
  collectionName: 'components_lc_home_featured_cars_featured_cars';
  info: {
    displayName: 'Featured cars';
    icon: 'thumbUp';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    carDesc: Schema.Attribute.String;
    carPhoto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    carTitle: Schema.Attribute.String;
  };
}

export interface LuxurycarsSRcardShowroomCards extends Struct.ComponentSchema {
  collectionName: 'components_luxurycars_s_rcard_showroom_cards';
  info: {
    displayName: 'Showroom cards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.contact-info': ContactInfoContactInfo;
      'lc-au-cards.gallery-image-cards': LcAuCardsGalleryImageCards;
      'lc-au-our-values.about-us-values': LcAuOurValuesAboutUsValues;
      'lc-au-why-us.about-us-why-choose-us': LcAuWhyUsAboutUsWhyChooseUs;
      'lc-home-featured-cars.featured-cars': LcHomeFeaturedCarsFeaturedCars;
      'luxurycars-s-rcard.showroom-cards': LuxurycarsSRcardShowroomCards;
    }
  }
}
