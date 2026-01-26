import { Button, Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState, useEffect, useRef } from 'react';

function Home() {
  const features = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast',
      description: 'Built for speed and performance. Deploy in seconds and scale instantly.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Developer First',
      description: 'Powerful APIs and SDKs that developers love. Build anything you can imagine.'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Native',
      description: 'Fully managed infrastructure that scales automatically with your needs.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Analytics',
      description: 'Monitor everything in real-time with powerful dashboards and insights.'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'AI Powered',
      description: 'Leverage cutting-edge AI to automate workflows and boost productivity.'
    },
  ];

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'The modern platform for building and scaling your next big idea';
  const [showButtons, setShowButtons] = useState(false);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // Typing effect для вторинного тексту
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowButtons(true);
        }, 300);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        ref={heroRef}
        sx={{
          minHeight: '900px',
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/hero-background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrollY * 0.45}px`,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100vh', display: 'flex', alignItems: 'center' }}>
          <Box 
            ref={contentRef}
            sx={{ 
              position: 'sticky',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              width: '100%',
              py: 4,
            }}
          >
            {/* Заголовок з blur анімацією */}
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'blurIn 1.5s ease-out forwards',
                filter: 'blur(0px)',
                '@keyframes blurIn': {
                  '0%': {
                    filter: 'blur(20px)',
                    opacity: 0,
                  },
                  '100%': {
                    filter: 'blur(0px)',
                    opacity: 1,
                  },
                },
              }}
            >
              Build Something Amazing
            </Typography>
            
            {/* Вторинний текст з typing ефектом */}
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 5,
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '700px',
                mx: 'auto',
                minHeight: '80px',
                '&::after': {
                  content: '"|"',
                  animation: 'blink 1s infinite',
                  '@keyframes blink': {
                    '0%, 50%': { opacity: 1 },
                    '51%, 100%': { opacity: 0 },
                  },
                },
              }}
            >
              {displayedText}
            </Typography>

            {/* Кнопки з slide-in анімацією */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              overflow: 'hidden',
            }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  fontSize: '1.1rem',
                  transform: showButtons ? 'translateX(0)' : 'translateX(-200px)',
                  opacity: showButtons ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.2s',
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  transform: showButtons ? 'translateX(0)' : 'translateX(200px)',
                  opacity: showButtons ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.4s',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, background: '#0f0f0f' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#FF3737', mb: 1 }}>
                  10M+
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Active Users
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#FF3737', mb: 1 }}>
                  99.9%
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Uptime SLA
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#FF3737', mb: 1 }}>
                  150+
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Countries
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'white',
              }}
            >
              Everything you need
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Powerful features to help you build, deploy, and scale your applications
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: '1px solid rgba(255, 55, 55, 0.5)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ color: '#FF3737', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box sx={{ 
        py: 12,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
                color: 'white',
              }}
            >
              Ready to get started?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 5,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Join thousands of developers building the future
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                px: 6,
                py: 2,
                fontSize: '1.2rem',
              }}
            >
              Start Building Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;