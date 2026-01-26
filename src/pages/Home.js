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

  const stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '150+', label: 'Countries' },
  ];

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'The modern platform for building and scaling your next big idea';
  const [showButtons, setShowButtons] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [displayedStats, setDisplayedStats] = useState([
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ]);
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
          // Після появи кнопок, починаємо анімацію статів
          setTimeout(() => {
            setShowStats(true);
            // Typing effect для назв статів
            stats.forEach((stat, index) => {
              let labelIndex = 0;
              const labelInterval = setInterval(() => {
                if (labelIndex < stat.label.length) {
                  setDisplayedStats(prev => {
                    const newStats = [...prev];
                    newStats[index] = {
                      ...newStats[index],
                      value: stat.value,
                      label: stat.label.slice(0, labelIndex + 1)
                    };
                    return newStats;
                  });
                  labelIndex++;
                } else {
                  clearInterval(labelInterval);
                }
              }, 50 * (index + 1)); // Затримка для кожного стату
            });
          }, 500);
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
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            zIndex: 1, 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            py: 10, // Padding зверху та знизу, щоб контент не обрізався
            pt: 12, // Більший padding зверху для хедера
          }}
        >
          <Box 
            ref={contentRef}
            sx={{ 
              textAlign: 'center',
              width: '100%',
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
              mb: 6.25, // 50px відстань до статів
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

            {/* Стати з анімаціями */}
            <Box sx={{ 
              mt: 12.5, // 100px відстань від CTA (в два рази більше)
            }}>
              <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      {/* Числовий показник з blur анімацією */}
                      <Typography 
                        variant="h2" 
                        sx={{ 
                          fontWeight: 700, 
                          color: '#FF3737', 
                          mb: 1,
                          animation: showStats ? 'blurIn 1.5s ease-out forwards' : 'none',
                          animationDelay: `${0.8 + index * 0.2}s`,
                          filter: showStats ? 'blur(0px)' : 'blur(20px)',
                          opacity: showStats ? 1 : 0,
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
                        {displayedStats[index]?.value || stat.value}
                      </Typography>
                      {/* Назва стату з typing ефектом */}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.6)',
                          minHeight: '30px',
                          '&::after': {
                            content: displayedStats[index]?.label && displayedStats[index].label.length < stat.label.length ? '"|"' : '""',
                            animation: 'blink 1s infinite',
                            '@keyframes blink': {
                              '0%, 50%': { opacity: 1 },
                              '51%, 100%': { opacity: 0 },
                            },
                          },
                        }}
                      >
                        {displayedStats[index]?.label || ''}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
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