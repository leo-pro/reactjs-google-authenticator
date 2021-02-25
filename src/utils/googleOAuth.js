require('dotenv').config();

const {REACT_APP_CLIENT_ID, REACT_APP_TOKEN} = process.env;

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  REACT_APP_CLIENT_ID,
  REACT_APP_TOKEN,
  /**
   * To get access_token and refresh_token in server side,
   * the data for redirect_uri should be postmessage.
   * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
   */
  'postmessage',
  'authorization_code'
);

const googleAuth = async (code) => {
  const response = await client.getToken(code);
  const idToken = response.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.REACT_APP_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  const { sub, email, name, picture} = payload;
  console.log(payload);
  return {
    userId: sub,
    email,
    name,
    photoUrl: picture
  };
};


//googleAuth('4/0AY0e-g5i0AGo_S5g7mNripIeZiiom_suviFFy3gSANvRl_iI7ZCpizQ1d8nLwNCOYWu-4w');

module.exports = googleAuth;

