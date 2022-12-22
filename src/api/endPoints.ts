const endPoints = {
  // auth
  login: 'v1/user/login',
  socialLogin: 'v1/user/social-login',
  signup: 'v1/user/signup',
  verifyEmail: 'v1/user/verify-email',
  resendVerifyEmail: 'v1/user/resend-verifyLink',
  updatePersonalInfo: 'v1/user/personalInfo',
  logout: 'v1/user/logout',
  profile: 'v1/user/profile',
  forgotPassword: 'v1/user/forgot-password',
  resetPassword: 'v1/user/reset-password',

  // property
  properties: 'v1/properties',
  livePropertyList: 'v1/properties/live',
  upcomingPropertyList: 'v1/properties/upcoming',
  fundedPropertyList: 'v1/properties/funded',
  addToFavourite: 'v1/user/properties/addToFavourites',
  similarProperties: 'v1/properties/similar',
  addMoney: 'v1/userWallet/amount',

  //passport
  passportProperties: 'v1/properties/invested',

  //investment
  makeInvestment: 'v1/investments',
};
export default endPoints;

export const baseUrl = {
  mainUrl: process.env.REACT_APP_API_MAIN_URL,
  propertyUrl: process.env.REACT_APP_API_PROPERTY_URL,
  investment: process.env.REACT_APP_API_INVESTMENT_URL,
};
