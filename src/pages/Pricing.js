import { Box, Typography, Container, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState, useEffect, useRef } from 'react';

const pricingSubtitleFull = 'Choose the perfect plan for your needs. All plans include a 14-day free trial.';

const plans = [
  {
    name: 'Starter Plan',
    price: '$18.00',
    period: '/ monthly',
    description: 'Beginners who want to explore AIM without any commitment.',
    features: [
      '1 project',
      '10GB storage',
      '100K requests/month',
      'Community support',
      'Basic analytics',
    ],
    buttonText: 'Get Started',
    bg: 'Starter BG.jpg'
  },
  {
    name: 'Pro Plan',
    price: '$64.00',
    period: '/ monthly',
    description: 'For professional developers and small teams that need more flexibility.',
    features: [
      'Unlimited projects',
      '100GB storage',
      '1M requests/month',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
    bg: 'Pro BG.jpg'
  },
  {
    name: 'Enterprise Plan',
    price: '$112.00',
    period: '/ monthly',
    description: 'For large organizations with advanced needs and dedicated support.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Unlimited requests',
      'Dedicated support',
      'SLA guarantee',
      'Custom integrations',
      'Advanced security',
    ],
    buttonText: 'Contact Sales',
    bg: 'Enterprise BG.jpg'
  },
];

function Pricing() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [subtitleText, setSubtitleText] = useState('');
  const pricingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentRef = pricingRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          let i = 0;
          const subtitleInterval = setInterval(() => {
            if (i < pricingSubtitleFull.length) {
              setSubtitleText(pricingSubtitleFull.slice(0, i + 1));
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
      ref={pricingRef}
      sx={{
        minHeight: '100vh',
        pt: 20,
        pb: 15,
        position: 'relative',
        backgroundImage: `url("${process.env.PUBLIC_URL}/Images/pricing-bg.jpg")`,
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
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
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
              fontFamily: '"Futura", sans-serif',
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? 'blur(0px)' : 'blur(20px)',
              transition: 'all 1.5s ease-out',
            }}
          >
            Simple Pricing
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

        {/* Pricing Grid */}
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr 1fr'
            },
            borderTop: '1px dashed rgba(255, 255, 255, 0.15)', 
            borderLeft: '1px dashed rgba(255, 255, 255, 0.15)',
            width: '100%',
          }}
        >
          {plans.map((plan, index) => (
            <Box 
              key={index}
              sx={{
                p: { xs: 4, md: 6 },
                borderRight: '1px dashed rgba(255, 255, 255, 0.15)',
                borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                ...(plan.popular && {
                  border: '1px solid rgba(255, 55, 55, 0.5)',
                  backgroundColor: 'rgba(255, 55, 55, 0.03)',
                }),
                
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
                minHeight: '600px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

                // Hover effect
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  transform: 'translateY(-10px)',
                  zIndex: 2,
                  '&::after': {
                    opacity: 0.35,
                  },
                  '&::before': {
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 55, 55, 0.3) 0%, transparent 70%)',
                  },
                },

                // Background image hover overlay
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("${process.env.PUBLIC_URL}/Images/${plan.bg}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.15, // Always slightly visible as per screenshot style
                  zIndex: -1,
                  transition: 'all 0.4s ease',
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1.5, flexWrap: 'nowrap' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'white', 
                    fontFamily: '"Futura", sans-serif',
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  {plan.name}
                </Typography>
                {plan.popular && (
                  <Box 
                    sx={{ 
                      backgroundColor: '#FF3737', 
                      color: 'white', 
                      px: 1, 
                      py: 0.2, 
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontSize: '0.6rem',
                        fontWeight: 900,
                        fontFamily: '"Futura", sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        lineHeight: 1
                      }}
                    >
                      Save 25%
                    </Typography>
                  </Box>
                )}
              </Box>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 4, fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', minHeight: '3em' }}>
                {plan.description}
              </Typography>

              <Box sx={{ mb: 4, display: 'flex', alignItems: 'baseline' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'white', fontFamily: '"Futura", sans-serif' }}>
                  {plan.price}
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', ml: 1, fontFamily: '"Poppins", sans-serif' }}>
                  {plan.period}
                </Typography>
              </Box>

              <Button 
                variant={plan.popular ? "contained" : "outlined"} 
                fullWidth 
                sx={{ 
                  mb: 6, 
                  py: 1.5, 
                  borderRadius: '4px',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  ...(plan.popular ? {
                    backgroundColor: '#FF3737',
                    '&:hover': { backgroundColor: '#e62e2e' }
                  } : {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': { borderColor: '#FF3737', backgroundColor: 'rgba(255, 55, 55, 0.05)' }
                  })
                }}
              >
                {plan.buttonText}
              </Button>

              <Typography sx={{ fontWeight: 700, color: 'white', mb: 3, fontFamily: '"Futura", sans-serif', fontSize: '1.1rem' }}>
                Key Features
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {plan.features.map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#FF3737', fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: '"Poppins", sans-serif', fontSize: '0.95rem' }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
