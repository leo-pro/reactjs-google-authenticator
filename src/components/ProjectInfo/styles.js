import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
  Tabs,
  Tab
} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '2rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tab:{
    width: '100%',
    background: 'transparent',
    borderRadius: '0.2rem',
  },
  root:{
    borderBottom: '3px solid #0A84FF',
    flexGrow: 1,
  },
  padding:{
    padding: theme.spacing(3),
  },
  grid:{
    marginTop: '0.5rem',
  },
  tabPanel:{
  },
  card:{
    maxWidth: '100%',
    height: '16rem',
    marginTop: '1rem',
    background: '#F1F3F7',
  },
  buttonIcon:{
    background: '#0A84FF',
    color: "#fff",
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '4px',
    transition: 'opacity 0.6s',
    '&:hover':{
      backgroundColor: '#0A84FF',
      opacity: 0.8,
      color: '#fff'
    }
  }
}));

export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    '& > span': {
      width: '100%',
      borderBottom: '2px solid #0A84FF',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000000',
    fontSize: '1rem',
    padding: '10px',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);
