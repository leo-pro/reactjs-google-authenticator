import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: '#0A84FF',
    width: '96px',
    height: '96px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid:{
    marginTop: '0.rem'
  }
}));