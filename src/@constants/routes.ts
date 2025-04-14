export enum ROUTES {
  HOME = '',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
  ESTATES = 'estates',
  CONTACTS = 'contacts',
  FAQ = 'faq',
  CONTACT_US = 'contact-us',
  TERMS_OF_USE = 'terms-of-use',
  SERVICE_AROUND = 'service-around',
  RENT = 'rent',
  BUY = 'buy',
  RENT_DETAILS = 'rent/details',
  BUY_DETAILS = 'buy/details',
  KNOWLEDGE_REAL_ESTATE = 'knowledge-real-estate',
  MY_ACCOUNT = 'my-account',
  PROFILE = 'my-account/profile',
  MESSAGES = 'my-account/messages',
  LOGIN = 'auth/login',
  REGISTER = 'auth/register',
  FORGOT_PASSWORD = 'auth/forgot-password',
  CONFIRM_REGISTER = 'auth/confirm-register',
  FAVORITES = 'my-account/favorites',
  ORDER = 'my-account/order',
  PAYMENTS = 'my-account/payments',
}

export enum ADS_ROUTES {
  ADS = 'my-account/ads',
  CREATE_AD = 'my-account/ads/create-ad',
  RENT_ADS = 'my-account/ads/rent-ads',
  SELL_ADS = 'my-account/ads/sell-ads',
  SELL_DETAILS = 'my-account/ads/sell-ads/details',
  RENT_DETAILS = 'my-account/ads/rent-ads/details',
}

export enum AUTH_ROUTES {
  ROOT = 'auth',
  LOGIN = 'login',
  FORGOT_PASSWORD = 'forgot-password',
  REGISTER = 'register',
  CONFIRM_REGISTER = 'confirm-register',
}

export enum MY_ACCOUNT {
  ROOT = 'my-account',
  ADS = 'ads',
  CREATE_AD = 'ads/create-ad',

  PROFILE = 'profile',

  MESSAGES = 'messages',
  INBOXES = 'inboxes',
  SENT = 'sent',
  ARCHIVE = 'archive',

  RENT_ADS = 'ads/rent-ads',
  SELL_ADS = 'ads/sell-ads',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  MODERATION = 'moderation',
  REJECTED = 'rejected',
  DETAILS = 'details',
  PREMISES = 'premises',
  EQUIPMENTS = 'equipments',
  FEES = 'fees',
  MONTHLY_COSTS = 'monthly-costs',

  FAVORITES = 'favorites',
  ORDER = 'order',
  PAYMENTS = 'payments',
}
