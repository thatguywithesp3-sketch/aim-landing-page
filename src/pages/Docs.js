import { Box, Typography, Container, Button, Grid } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ApiIcon from '@mui/icons-material/Api';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect, useRef } from 'react';

const docsSubtitleFull = 'Everything you need to know to build amazing applications';

const docSections = [
  {
    icon: <MenuBookIcon sx={{ fontSize: 60 }} />,
    title: 'Getting Started',
    description: 'Learn the basics and get your first project up and running in minutes.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 60 }} />,
    title: 'Code Examples',
    description: 'Browse through hundreds of code snippets and implementation examples.',
  },
  {
    icon: <ApiIcon sx={{ fontSize: 60 }} />,
    title: 'API Reference',
    description: 'Complete API documentation with detailed endpoint descriptions.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 60 }} />,
    title: 'Tutorials',
    description: 'Step-by-step tutorials for common use cases and advanced implementations.',
  },
  {
    icon: <VideoLibraryIcon sx={{ fontSize: 60 }} />,
    title: 'Video Courses',
    description: 'Watch comprehensive video tutorials from beginner to advanced topics.',
  },
  {
    icon: <ForumIcon sx={{ fontSize: 60 }} />,
    title: 'Community Forum',
    description: 'Join our community, ask questions, and share your knowledge with others.',
  },
];

const quickLinks = [
  'Installation Guide',
  'Authentication',
  'Database Setup',
  'Deployment',
  'Environment Variables',
  'Troubleshooting',
];

function Docs() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [subtitleText, setSubtitleText] = useState('');
  const docsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentRef = docsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          let i = 0;
          const subtitleInterval = setInterval(() => {
            if (i < docsSubtitleFull.length) {
              setSubtitleText(docsSubtitleFull.slice(0, i + 1));
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
      ref={docsRef}
      sx={{
        minHeight: '100vh',
        pt: 20,
        pb: 0,
        position: 'relative',
        backgroundImage: `url("${process.env.PUBLIC_URL}/Images/docs-bg.png")`,
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, mb: 15 }}>
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
            Documentation
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

        {/* Docs Grid */}
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr' // Wider boxes as requested
            },
            borderTop: '1px dashed rgba(255, 255, 255, 0.15)', 
            borderLeft: '1px dashed rgba(255, 255, 255, 0.15)',
            width: '100%',
            mb: 15
          }}
        >
          {docSections.map((section, index) => (
            <Box 
              key={index}
              sx={{
                p: { xs: 4, md: 8 },
                borderRight: '1px dashed rgba(255, 255, 255, 0.15)',
                borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                
                // Entrance Animation
                opacity: 0,
                animation: isVisible ? `boxBlurIn 1.2s ease-out forwards` : 'none',
                animationDelay: `${index * 0.15}s`,
                '@keyframes boxBlurIn': {
                  '0%': { filter: 'blur(20px)', opacity: 0, transform: 'translateY(30px)' },
                  '100%': { filter: 'blur(0px)', opacity: 1, transform: 'translateY(0)' }
                },

                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '350px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

                // Hover effect
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  transform: 'translateY(-10px)',
                  zIndex: 2,
                  '&::after': {
                    opacity: 0.15, // Show white dots
                  },
                  '&::before': {
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 55, 55, 0.3) 0%, transparent 70%)',
                  },
                  '& .doc-icon': {
                    transform: 'scale(1.1)',
                    color: '#FF3737',
                    filter: 'drop-shadow(0 0 25px rgba(255, 55, 55, 0.8))',
                  },
                  '& .doc-title': {
                    color: '#fff',
                  }
                },

                // Background dots hover overlay
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  opacity: 0,
                  zIndex: -1,
                  transition: 'opacity 0.4s ease',
                },

                // Radial Highlight
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  transition: 'background 0.4s ease',
                },
                '& > *': { position: 'relative', zIndex: 1 }
              }}
            >
              <Box className="doc-icon" sx={{ color: 'rgba(255, 255, 255, 0.4)', mb: 4, transition: 'all 0.4s ease' }}>
                {section.icon}
              </Box>
              <Typography className="doc-title" variant="h4" sx={{ fontWeight: 700, color: 'rgba(255, 255, 255, 0.8)', mb: 2, fontFamily: '"Futura", sans-serif', transition: 'all 0.4s ease' }}>
                {section.title}
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: '"Poppins", sans-serif', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {section.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Quick Links Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, color: 'white', fontFamily: '"Futura", sans-serif' }}>
            Quick Links
          </Typography>
          <Grid container spacing={3}>
            {quickLinks.map((link, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      transform: 'translateX(10px)',
                      borderColor: 'rgba(255, 55, 55, 0.3)',
                      '& .link-arrow': { color: '#FF3737', transform: 'translateX(5px)' }
                    }
                  }}
                >
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: 'white', fontFamily: '"Poppins", sans-serif' }}>
                    {link}
                  </Typography>
                  <ArrowForwardIosIcon className="link-arrow" sx={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.2)', transition: 'all 0.3s ease' }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CTA Section - Full width with Blur */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          py: 15,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
          zIndex: 1
        }}
      >
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
                animation: 'blurIn 1.5s ease-out forwards',
                '@keyframes blurIn': { '0%': { filter: 'blur(20px)', opacity: 0 }, '100%': { filter: 'blur(0px)', opacity: 1 } }
              }}
            >
              Can't find what you're looking for?
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 6, fontSize: '1.2rem', fontFamily: '"Poppins", sans-serif' }}>
              Our support team is here to help you succeed.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  px: 6, 
                  py: 2, 
                  backgroundColor: '#FF3737',
                  '&:hover': { backgroundColor: '#e62e2e' }
                }}
              >
                Contact Support
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  px: 6, 
                  py: 2, 
                  borderColor: 'rgba(255, 255, 255, 0.3)', 
                  color: 'white',
                  '&:hover': { borderColor: '#FF3737', backgroundColor: 'rgba(255, 55, 55, 0.05)' }
                }}
              >
                Join Community
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Docs;
