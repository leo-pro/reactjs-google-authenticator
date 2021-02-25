import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profile:{
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: '#0A84FF',
    width: '96px',
    height: '96px'
  },
  grid:{
    marginTop: '0.rem'
  },
  p:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(0,0,0,0.8)'
  },
  icon:{
    marginRight: '0.3rem',
    fontSize: '1rem'
  }
}));