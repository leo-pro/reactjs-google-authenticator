import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    color: '#333333',
    padding: ' 0.8rem 2rem',
    fontWeight: 500,
    fontSize: '14px'
  },
  img: {
    width: '32px',
    height: 'auto',
    marginRight: '1rem'
  }
}));