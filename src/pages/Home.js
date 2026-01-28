import { Button, Box, Typography, Container, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState, useEffect, useRef } from 'react';

const fullText = 'The modern platform for building and scaling your next big idea';
const featuresTitle = 'Everything you need';
const featuresSubtitleFull = 'Powerful features to help you build, deploy, and scale your applications';

const features = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: 'Lightning Fast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Enterprise Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Developer First',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: 'Cloud Native',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Real-time Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: 'AI Powered',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
  },
];

const stats = [
  { value: '10M+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '150+', label: 'Countries' },
];

const footerSections = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Security', 'Roadmap']
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Community', 'Support']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses']
  }
];

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [displayedStats, setDisplayedStats] = useState([
    { value: '', label: '' }, { value: '', label: '' }, { value: '', label: '' },
  ]);
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const footerGroupRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [featuresSubtitleText, setFeaturesSubtitleText] = useState('');

  // Typing effect for Hero with proper cleanup
  useEffect(() => {
    let currentIndex = 0;
    let timeouts = [];
    let intervals = [];

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        const t1 = setTimeout(() => {
          setShowButtons(true);
          const t2 = setTimeout(() => {
            setShowStats(true);
            stats.forEach((stat, index) => {
              setDisplayedStats(prev => {
                const newStats = [...prev];
                if (newStats[index]) newStats[index] = { ...newStats[index], value: stat.value, label: '' };
                return newStats;
              });
              
              const t3 = setTimeout(() => {
                let labelIndex = 0;
                const labelInterval = setInterval(() => {
                  if (labelIndex < stat.label.length) {
                    setDisplayedStats(prev => {
                      const newStats = [...prev];
                      if (newStats[index]) newStats[index] = { ...newStats[index], label: stat.label.slice(0, labelIndex + 1) };
                      return newStats;
                    });
                    labelIndex++;
                  } else { clearInterval(labelInterval); }
                }, 50);
                intervals.push(labelInterval);
              }, 300 * (index + 1));
              timeouts.push(t3);
            });
          }, 500);
          timeouts.push(t2);
        }, 300);
        timeouts.push(t1);
      }
    }, 50);
    intervals.push(typingInterval);

    return () => {
      intervals.forEach(clearInterval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Intersection Observer for Features
  useEffect(() => {
    const currentRef = featuresRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          let i = 0;
          const subtitleInterval = setInterval(() => {
            if (i < featuresSubtitleFull.length) {
              setFeaturesSubtitleText(featuresSubtitleFull.slice(0, i + 1));
              i++;
            } else { 
              clearInterval(subtitleInterval); 
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );
    
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  // Intersection Observer for Footer Group
  useEffect(() => {
    const currentRef = footerGroupRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 10, pt: 12 }}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 700, mb: 3, background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'blurIn 1.5s ease-out forwards', '@keyframes blurIn': { '0%': { filter: 'blur(20px)', opacity: 0 }, '100%': { filter: 'blur(0px)', opacity: 1 } } }}>
              Build Something Amazing
            </Typography>
            <Typography variant="h5" sx={{ mb: 5, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '700px', mx: 'auto', minHeight: '80px', display: 'block', '&::after': { content: displayedText.length < fullText.length ? '"|"' : '""', animation: 'blink 1s infinite', '@keyframes blink': { '0%, 50%': { opacity: 1 }, '51%, 100%': { opacity: 0 } } } }}>
              {displayedText || '\u00A0'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6.25 }}>
              <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', transform: showButtons ? 'translateX(0)' : 'translateX(-200px)', opacity: showButtons ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                Get Started
              </Button>
              <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white', transform: showButtons ? 'translateX(0)' : 'translateX(200px)', opacity: showButtons ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                Learn More
              </Button>
            </Box>
            <Box sx={{ mt: 18 }}>
              <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h2" sx={{ fontWeight: 700, color: '#FF3737', mb: 1, animation: showStats ? 'blurIn 1.5s ease-out forwards' : 'none', opacity: showStats ? 1 : 0 }}>
                        {displayedStats[index]?.value || stat.value}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.6)', minHeight: '30px' }}>
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
      <Box
        ref={featuresRef}
        sx={{
          py: 15,
          position: 'relative',
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/everything-you-need-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundPositionY: featuresRef.current 
            ? `${(scrollY - featuresRef.current.offsetTop) * 0.15}px` 
            : '0px',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                color: 'white',
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(20px)',
                transition: 'all 1.5s ease-out',
                fontFamily: '"Futura", sans-serif',
              }}
            >
              {featuresTitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                maxWidth: '600px',
                mx: 'auto',
                minHeight: '32px',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {featuresSubtitleText}
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              borderTop: '1px dashed rgba(255, 255, 255, 0.15)', 
              borderLeft: '1px dashed rgba(255, 255, 255, 0.15)',
              width: '100%',
            }}
          >
            {features.map((feature, index) => (
              <Box 
                key={index}
                sx={{
                  p: 6,
                  borderRight: '1px dashed rgba(255, 255, 255, 0.15)',
                  borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                  opacity: 0,
                  animation: isVisible ? `boxBlurIn 1.2s ease-out forwards` : 'none',
                  animationDelay: `${index * 0.15}s`,
                  '@keyframes boxBlurIn': {
                    '0%': { filter: 'blur(20px)', opacity: 0, transform: 'translateY(30px)' },
                    '100%': { filter: 'blur(0px)', opacity: 1, transform: 'translateY(0)' }
                  },
                  backgroundColor: 'rgba(255, 55, 55, 0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '280px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 55, 55, 0.12)',
                    transform: 'translateY(-5px)',
                    zIndex: 2,
                    '&::before': { background: 'radial-gradient(circle at 30% 30%, rgba(255, 55, 55, 0.4) 0%, transparent 70%)' },
                    '& .feature-icon': { transform: 'scale(1.1) rotate(5deg)', filter: 'drop-shadow(0 0 20px rgba(255, 55, 55, 0.8))' },
                    '& .feature-title': { color: '#fff', letterSpacing: '0.5px' },
                    '& .feature-description': { color: 'rgba(255, 255, 255, 0.8)' }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 55, 55, 0.2) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    transition: 'background 0.4s ease',
                  },
                  '& > *': { position: 'relative', zIndex: 1 }
                }}
              >
                <Box className="feature-icon" sx={{ color: '#FF5555', mb: 3, display: 'flex', filter: 'drop-shadow(0 0 12px rgba(255, 55, 55, 0.4))', transition: 'all 0.4s ease' }}>
                  {feature.icon}
                </Box>
                <Typography className="feature-title" variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 2, fontFamily: '"Futura", sans-serif', transition: 'all 0.4s ease' }}>
                  {feature.title}
                </Typography>
                <Typography className="feature-description" sx={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.7, fontFamily: '"Poppins", sans-serif', fontSize: '1rem', transition: 'all 0.4s ease' }}>
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Combined Final CTA & Footer Section */}
      <Box
        ref={footerGroupRef}
        sx={{
          position: 'relative',
          backgroundImage: `url("${process.env.PUBLIC_URL}/Images/footer-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundPositionY: footerGroupRef.current 
            ? `calc(50% + ${(scrollY - footerGroupRef.current.offsetTop) * 0.15}px)` 
            : '50%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* Final CTA Part */}
          <Box sx={{ 
            py: 15,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}>
            <Container maxWidth="md">
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                    fontWeight: 700, 
                    mb: 4, 
                    color: 'white', 
                    fontFamily: '"Futura", sans-serif',
                    opacity: isFooterVisible ? 1 : 0,
                    filter: isFooterVisible ? 'blur(0px)' : 'blur(20px)',
                    transition: 'all 1.5s ease-out'
                  }}
                >
                  Ready to get started?
                </Typography>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    px: 8, 
                    py: 2, 
                    fontSize: '1.2rem',
                    opacity: isFooterVisible ? 1 : 0,
                    filter: isFooterVisible ? 'blur(0px)' : 'blur(10px)',
                    transition: 'all 1.5s ease-out 0.3s'
                  }}
                >
                  Start Building Now
                </Button>
              </Box>
            </Container>
          </Box>

          {/* Animated Dashed Divider */}
          <Box sx={{ px: '100px' }}>
            <Box 
              sx={{ 
                width: isFooterVisible ? '100%' : '0%',
                height: '1px', 
                borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
                mx: 'auto'
              }} 
            />
          </Box>

          {/* Footer Part */}
          <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
              <Grid container spacing={8}>
                {/* Company Info */}
                <Grid item xs={12} md={4} sx={{ 
                  opacity: isFooterVisible ? 1 : 0,
                  filter: isFooterVisible ? 'blur(0px)' : 'blur(20px)',
                  transition: 'all 1.5s ease-out 0.7s'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
                    AIM.io
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 4, fontFamily: '"Poppins", sans-serif' }}>
                    Building the future of web development, one line of code at a time.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2.5 }}>
                    {[TwitterIcon, GitHubIcon, LinkedInIcon].map((Icon, idx) => (
                      <Box key={idx} sx={{ color: 'rgba(255, 255, 255, 0.4)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: '#FF3737', transform: 'translateY(-3px)' } }}>
                        <Icon />
                      </Box>
                    ))}
                  </Box>
                </Grid>

                {/* Footer Links */}
                {footerSections.map((section, idx) => (
                  <Grid item xs={6} md={2} key={section.title} sx={{ 
                    opacity: isFooterVisible ? 1 : 0,
                    filter: isFooterVisible ? 'blur(0px)' : 'blur(20px)',
                    transition: `all 1.5s ease-out ${0.8 + idx * 0.1}s`
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white', fontFamily: '"Futura", sans-serif' }}>
                      {section.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {section.links.map((link) => (
                        <Typography key={link} sx={{ color: 'rgba(255, 255, 255, 0.4)', cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: '"Poppins", sans-serif', fontSize: '0.95rem', '&:hover': { color: 'white' } }}>
                          {link}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Copyright */}
              <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center', opacity: isFooterVisible ? 1 : 0, transition: 'opacity 1.5s ease-out 1.5s' }}>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.9rem', fontFamily: '"Poppins", sans-serif' }}>
                  © 2025 AIM.io. All rights reserved.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
