import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Desenvolvido por '}
      <Link color="inherit" href="https://github.com/rodrigosoares67">
        Rodrigo Soares
      </Link>{' | '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(){
  return(
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Copyright />
    </Box>
  )
}