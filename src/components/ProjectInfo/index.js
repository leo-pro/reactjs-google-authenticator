import React, {useState} from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Box,
  Link
} from '@material-ui/core';

import { useStyles, StyledTabs, StyledTab } from './styles.js';


export default function ProjectInfo(){
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={styles.paper} elevation={1}>
        <div className={styles.tab}>
          <StyledTabs 
            variant="fullWidth"
            value={value} 
            onChange={handleChange} 
            aria-label="styled tabs example"
            centered
          >
            <StyledTab label="Sobre" />
            <StyledTab label="Tecnologias" />
            <StyledTab label="Github" />
            <StyledTab label="Deploy" />
          </StyledTabs>
          <Typography className={styles.padding} />
        </div>
      </Paper>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Made with ReactJS by '}
          <Link color="inherit" href="https://devleo.com.br">
            { 'Leonardo Alves' }
          </Link>{' '}
        </Typography>
      </Box>  
    </Container>
  );
}