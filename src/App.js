import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Box, Typography, Container, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Import our page components
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';

const darkTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Futura", "Montserrat", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF3737',
    },
    secondary: {
      main: '#F4F4F8',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#F4F4F8',
      secondary: 'rgba(244, 244, 248, 0.7)',
    }
  },
});

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileMenuOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Router basename="/aim-landing-page">
        <Box sx={{ minHeight: '100vh', background: '#0a0a0a' }}>
          {/* Navigation Bar */}
          <AppBar 
            position="fixed" 
            sx={{ 
              background: isScrolled 
                ? 'linear-gradient(to bottom, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.8) 70%, rgba(255, 55, 55, 0.15) 100%)'
                : 'rgba(10, 10, 10, 0.8)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 1px 0 rgba(255, 255, 255, 0.1)',
              top: isScrolled ? '12px' : 0,
              left: 0,
              right: 0,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              maxWidth: isScrolled ? { xs: '90%', md: '50%' } : '100%',
              mx: 'auto',
              borderRadius: isScrolled ? '20px' : 0,
              px: isScrolled ? '10px' : 0,
              zIndex: 1100,
              '&::before': isScrolled ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(255, 55, 55, 0.1) 100%)',
                borderRadius: '20px',
                pointerEvents: 'none',
                zIndex: 0,
              } : {},
            }}
          >
            <Toolbar sx={{ 
              py: isScrolled ? 0.5 : 0.7,
              px: isScrolled ? 0.5 : 0.7,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              minHeight: isScrolled ? '42px !important' : '45px !important',
              position: 'relative',
              zIndex: 1,
            }}>
              <Container 
                maxWidth="lg" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  px: isScrolled ? 0.5 : 0.7,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Logo - Links to Home */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mr: isScrolled ? 2.1 : 4.2,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: isScrolled ? '0.875rem' : '1rem',
                    }}
                  >
                    AIM.io
                  </Typography>
                </Link>

                {/* Navigation Links (Desktop) */}
                <Box sx={{ 
                  display: { xs: 'none', md: 'flex' }, 
                  gap: isScrolled ? 1.4 : 2.8, 
                  flexGrow: 1,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontSize: isScrolled ? '0.875rem' : '1rem',
                          '&:hover': {
                            color: 'white',
                          }
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </Box>

                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end', mr: 1 }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleMobileMenu(true)}
                    sx={{ color: 'white' }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>

                {/* Sign Up Button */}
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    display: { xs: 'none', sm: 'inline-flex' },
                    px: isScrolled ? 1.4 : 2.1, 
                    py: isScrolled ? 0.525 : 0.7,
                    fontSize: isScrolled ? '0.875rem' : '0.9375rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Sign Up
                </Button>
              </Container>
            </Toolbar>
          </AppBar>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '300px',
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                backgroundImage: 'none',
                borderLeft: '1px solid rgba(255, 55, 55, 0.1)',
                p: 2,
              }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
              <IconButton onClick={toggleMobileMenu(false)} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.name} disablePadding sx={{ mb: 2 }}>
                  <ListItemButton 
                    component={Link} 
                    to={link.path} 
                    onClick={toggleMobileMenu(false)}
                    sx={{ 
                      borderRadius: '12px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 55, 55, 0.05)',
                        '& .MuiTypography-root': { color: '#FF3737' }
                      }
                    }}
                  >
                    <ListItemText 
                      primary={link.name} 
                      primaryTypographyProps={{ 
                        sx: { 
                          color: 'white', 
                          fontSize: '1.2rem', 
                          fontWeight: 600,
                          fontFamily: '"Futura", sans-serif'
                        } 
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large"
                  sx={{ py: 2, borderRadius: '12px' }}
                >
                  Sign Up Free
                </Button>
              </ListItem>
            </List>
          </Drawer>

          {/* Routes - This is where the pages will be displayed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;