import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function Header(){
  return(
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GitHubIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Desafio 2 - Postagens
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}