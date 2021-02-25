import React from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';

import { useStyles} from './styles.js';


export default function ProjectInfo(){
  const styles = useStyles();
  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={1}>
        <div className={styles.paper}>
          <Typography component="h1" variant="h5" style={{ textAlign: 'center'}}>
            Informações do Projeto
          </Typography>
        </div>
      </Paper>  
    </Container>
  );
}