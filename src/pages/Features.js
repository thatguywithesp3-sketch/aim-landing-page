import { Box, Typography, Container } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { useState, useEffect, useRef } from 'react';

const featuresSubtitleFull = 'Everything you need to build, deploy, and scale modern applications';

const allFeatures = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: 'Lightning Fast Deployment',
    description: 'Deploy your applications in seconds with our optimized build pipeline. Scale instantly to handle millions of requests without breaking a sweat.',
    bg: 'Lightning Fast Deployment BG.jpg'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and automatic security updates to keep your data safe.',
    bg: 'Enterprise-Grade Security BG.jpg'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Developer Experience',
    description: 'Powerful APIs, comprehensive SDKs, and extensive documentation that developers love. Build anything you can imagine.',
    bg: 'Developer Experience BG.jpg'
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: 'Global Cloud Infrastructure',
    description: 'Fully managed infrastructure across 150+ regions worldwide. Your apps run closer to your users for better performance.',
    bg: 'Global Cloud Infrastructure BG.jpg'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Real-time Analytics',
    description: 'Monitor everything in real-time with powerful dashboards, custom metrics, and intelligent alerts to stay ahead.',
    bg: 'ai-powered-bg.jpg' // Using ai-powered-bg.jpg as fallback for Analytics since it's missing
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI to automate workflows, optimize performance, and boost team productivity.',
    bg: 'AI-Powered Automation BG.jpg'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: 'Scalable Database',
    description: 'PostgreSQL, MongoDB, Redis - all managed and auto-scaling. Focus on your app, not database maintenance.',
    bg: 'Scalable Database BG.jpg'
  },
  {
    icon: <ApiIcon sx={{ fontSize: 40 }} />,
    title: 'RESTful & GraphQL APIs',
    description: 'Flexible API options with automatic documentation, versioning, and rate limiting built right in.',
    bg: 'RESTful & GraphQL APIs BG.jpg'
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools - GitHub, Slack, Jira, and 100+ more integrations available out of the box.',
    bg: 'Seamless Integrations BG.jpg'
  },
];

function Features() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [subtitleText, setSubtitleText] = useState('');
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              setSubtitleText(featuresSubtitleFull.slice(0, i + 1));
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

  return (
    <Box
      ref={featuresRef}
      sx={{
        minHeight: '100vh',
        pt: 20,
        pb: 15,
        position: 'relative',
        backgroundImage: `url("${process.env.PUBLIC_URL}/Images/Features BG.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionY: `${scrollY * 0.15}px`,
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)', // 55% Darkness overlay
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"Futura", sans-serif',
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? 'blur(0px)' : 'blur(20px)',
              transition: 'all 1.5s ease-out',
            }}
          >
            Powerful Features
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              minHeight: '60px',
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {subtitleText}
          </Typography>
        </Box>

        {/* Features Grid - Static 3x3 */}
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr'
            },
            borderTop: '1px dashed rgba(255, 255, 255, 0.15)', 
            borderLeft: '1px dashed rgba(255, 255, 255, 0.15)',
            width: '100%',
          }}
        >
          {allFeatures.map((feature, index) => (
            <Box 
              key={index}
              sx={{
                p: 6,
                borderRight: '1px dashed rgba(255, 255, 255, 0.15)',
                borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                
                // Entrance Animation
                opacity: 0,
                animation: isVisible ? `boxBlurIn 1.2s ease-out forwards` : 'none',
                animationDelay: `${index * 0.1}s`,
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
                minHeight: '320px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

                // Hover effect
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  transform: 'translateY(-5px)',
                  zIndex: 2,
                  '&::after': {
                    opacity: 0.4, // Dimmed background image on hover
                  },
                  '&::before': {
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 55, 55, 0.4) 0%, transparent 70%)',
                  },
                  '& .feature-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    filter: 'drop-shadow(0 0 20px rgba(255, 55, 55, 0.8))',
                  },
                  '& .feature-title': {
                    color: '#fff',
                    letterSpacing: '0.5px',
                  },
                  '& .feature-description': {
                    color: 'rgba(255, 255, 255, 0.8)',
                  }
                },

                // Background image hover overlay
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("${process.env.PUBLIC_URL}/Images/${feature.bg}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0,
                  zIndex: -1,
                  transition: 'opacity 0.4s ease',
                },

                // Radial Highlight
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
  );
}

export default Features;
