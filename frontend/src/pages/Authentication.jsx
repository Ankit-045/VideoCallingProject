import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0); // 0 = login, 1 = signup
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        // LOGIN
        let result = await handleLogin(username, password);
        setMessage(result);
        setError("");
        setOpen(true);
        setPassword("");
      } else {
        // REGISTER
        let result = await handleRegister(name, username, password);
        setMessage(result);
        setError("");
        setOpen(true);
        setFormState(0);
        setPassword("");
        setName("");
        setUsername("");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Something went wrong";
      setError(msg);
      setMessage(msg);
      setOpen(true);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        {/* Form Section - Left Side */}
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease-in-out infinite',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 1,
            },
            '@keyframes gradientShift': {
              '0%, 100%': {
                backgroundPosition: '0% 50%'
              },
              '50%': {
                backgroundPosition: '100% 50%'
              }
            }
          }}
        >
          {/* Floating Animation Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #FF9839, #FFB366)',
              borderRadius: '50%',
              opacity: 0.1,
              animation: 'float1 6s ease-in-out infinite',
              zIndex: 2,
              '@keyframes float1': {
                '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                '50%': { transform: 'translateY(-20px) rotate(180deg)' }
              }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '50%',
              opacity: 0.15,
              animation: 'float2 8s ease-in-out infinite',
              zIndex: 2,
              '@keyframes float2': {
                '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                '50%': { transform: 'translateY(-30px) scale(1.2)' }
              }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '20%',
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
              borderRadius: '20px',
              opacity: 0.08,
              animation: 'float3 10s ease-in-out infinite',
              zIndex: 2,
              '@keyframes float3': {
                '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                '33%': { transform: 'translateY(-15px) rotate(120deg)' },
                '66%': { transform: 'translateY(-25px) rotate(240deg)' }
              }
            }}
          />
          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <div>
              <Button
                variant={formState === 0 ? "contained" : ""}
                onClick={() => setFormState(0)}
              >
                Sign In
              </Button>
              <Button
                variant={formState === 1 ? "contained" : ""}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />

              <p style={{ color: "red" }}>{error}</p>

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* Image Section - Right Side */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))',
              zIndex: 1,
            }
          }}
        />
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </ThemeProvider>
  );
}
