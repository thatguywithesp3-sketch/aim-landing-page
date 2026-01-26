import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'Forever free',
      description: 'Perfect for side projects and experimentation',
      features: [
        '1 project',
        '10GB storage',
        '100K requests/month',
        'Community support',
        'Basic analytics',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outlined',
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For professional developers and small teams',
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
      buttonVariant: 'contained',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Unlimited requests',
        'Dedicated support',
        'SLA guarantee',
        'Custom integrations',
        'Advanced security',
        'Training & onboarding',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined',
    },
  ];

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #fff 0%, #FF3737 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(255, 55, 55, 0.1) 0%, rgba(255, 55, 55, 0.1) 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: plan.popular 
                   ? '2px solid rgba(255, 55, 55, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #FF3737 0%, #FF3737 100%)',
                      color: 'white',
                      px: 3,
                      py: 0.5,
                      borderRadius: 20,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <CardContent sx={{ p: 5, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: 'white' }}>
                    {plan.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 3, minHeight: 48 }}>
                    {plan.description}
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 700, 
                        color: 'white',
                        display: 'inline',
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'inline',
                        ml: 1,
                      }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <Box 
                        key={idx} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 2,
                        }}
                      >
                       <CheckIcon sx={{ color: '#FF3737', mr: 2, fontSize: 20 }} />
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant={plan.buttonVariant}
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '1rem',
                      ...(plan.buttonVariant === 'outlined' && {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        '&:hover': {
                            borderColor: '#FF3737',
                            background: 'rgba(255, 55, 55, 0.1)',
                        }
                      })
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ or Additional Info */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
            Need a custom plan for your organization?
          </Typography>
          <Button variant="outlined" size="large" sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }}>
            Contact Sales Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;