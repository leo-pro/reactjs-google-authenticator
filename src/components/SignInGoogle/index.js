import React, { useState }from 'react';
import GoogleLogin from 'react-google-login';
require('dotenv/config');

const {REACT_APP_CLIENT_ID} = process.env;

function SignInGoogle(props) {
  const [hasErrors, setHasErros] = useState(false);

  function Success(response){
    console.log(response.profileObj);
    props.signIn(response.profileObj);
  }
  function Errors(){
    hasErrors || setHasErros(true);
  }
  return (
    <>
      <GoogleLogin
        clientId={REACT_APP_CLIENT_ID}
        buttonText="Login com google"
        /**
         * To get access_token and refresh_token in server side,
         * the data for redirect_uri should be postmessage.
         * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
         */
        redirectUri="postmessage"
        onSuccess={Success}
        onFailure={Errors}
        cookiePolicy={'single_host_origin'}
      />
      <p style={{ 
        color: 'red', 
        fontWeight: 600, 
        padding: '0 4rem', 
        textAlign: 'center'
      }}>
        <br/> 
        {hasErrors && 'Não foi possível conectar com a sua conta do Google'}
      </p>
    </>
  );
}

export default SignInGoogle;
