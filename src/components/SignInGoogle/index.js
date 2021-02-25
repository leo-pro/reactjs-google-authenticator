import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';

import {googleAuth} from '../../utils/googleOAuth';

const clientId = '216542067141-blhunnpnmdpvt2rqqdejg75h01m1mb1f.apps.googleusercontent.com';

function SignInGoogle(props) {

  // const responseGoogle = async (authResult) => {
  //   console.log(authResult['code']);
  //   try {
  //     if (authResult['code']) {
  //       const result = await googleAuth(authResult['code']);
  //       console.log(authResult);
  //       props.signIn(result);
  //     } else {
  //       throw new Error(authResult);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  function Success(response){
    console.log(response.profileObj);
    props.signIn(response.profileObj);
  }

  return (
    <GoogleLogin
      // use your client id here
      clientId={clientId}
      buttonText="Login with google"
      /**
       * To get access_token and refresh_token in server side,
       * the data for redirect_uri should be postmessage.
       * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
       */
      redirectUri="postmessage"
      onSuccess={Success}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default SignInGoogle;
