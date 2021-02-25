import React, { useState } from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';
import BeenhereTwoToneIcon from '@material-ui/icons/BeenhereTwoTone';

import {useStyles} from './styles';

export default function Dashboard(){
  const [user, setUser] = useState('');

  const styles = useStyles();

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={1}>
        <div className={styles.paper}>
          <Avatar src="https://github.com/leo-pro.png" className={styles.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5" style={{ textAlign: 'center'}}>
            Olá, Leonardo Alves
          </Typography>
          <p style={{ display: 'flex'}}> 
            <BeenhereTwoToneIcon style={{fontSize: '1.2rem', marginRight: '0.5rem'}}/> leorobertoralves@gmail.com
          </p>
          <Button size="medium">Sair</Button>
        </div>
      </Paper>  
    </Container>
  )
}