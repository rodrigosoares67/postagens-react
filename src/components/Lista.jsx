import { useState, useEffect } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import api from '../services/api'

export default function Lista(){
  const [lista, setLista] = useState([])

  // Similar ao componentDidMount e componentDidUpdate
  useEffect(() => {
    api.get('/posts')
    .then(function (response) {
      const posts = response.data
      setLista(posts)
    })
    .catch(function (error) {
      console.log(error);
    })
  });

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {lista.map(post => {
          return (
            <Grid item xs={12}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>
                    {post.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}