import React, {useState}from 'react';
import { useGoogleLogin } from 'react-google-login';

import Button from '@material-ui/core/Button';

//refresh token
import { refreshTokenSetup } from '../../utils/refreshToken.js';

import { useStyles } from './styles.js';

import googleIcon from '../../assets/icons/google.svg';

const clientId = '216542067141-blhunnpnmdpvt2rqqdejg75h01m1mb1f.apps.googleusercontent.com';

function ButtonSignInGoogle(props) {
  const styles = useStyles();

  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState([])

  const onSuccess = (response) => {
    setIsSigned(true);
    alert(
      `Logged in successfully welcome ${response.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(response);
  };

  const onFailure = (error) => {
    console.log('Login failed: res:', error);
    alert(
      `Failed to login. 😢`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Button
      onClick={signIn}
      className={styles.button}
    >
      <img src={googleIcon} className={styles.img} />
      Entrar com o Google
    </Button>
  );
}

export default ButtonSignInGoogle;
