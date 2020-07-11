export const messages = {
  LOGIN_SUCCESS: 'Authenticated',
};

export const httpCodes = {
  OK: 200,
};

export const settingsTypes = {
  AUTO_PRONUNCIATION: 'autoPronunciation',
  TRANSLATE: 'translate',
  PHRASE_PRONUNCIATION: 'pronunciation',
  BKG_PICTURE: 'picture',
};

export const imagesPath = 'img/english-puzzle/';

export const PICTURE_SOURCES = (() => [
  'artGallery/HouseInTheRuse.jpg',
  'artGallery/Berkhem_Mountain.jpeg',
  'artGallery/Aivazovski_Mountains.jpeg',
  'artGallery/Aivazovski_Sunset.jpeg',
  'artGallery/BirshtadtTropicalSunset.jpeg',
  'artGallery/Birshtadt_CountryFerm.jpeg',
  'artGallery/Devjaty_val.jpg',

  'artGallery/MorningInTheWood.jpg',
  'artGallery/VanGog_Field.jpg',
  'artGallery/VillasAtTrouville.jpeg',
].map((source) => imagesPath + source))();
