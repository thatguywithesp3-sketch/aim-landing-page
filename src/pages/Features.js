import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

function Features() {
  const allFeatures = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 50 }} />,
      title: 'Lightning Fast Deployment',
      description: 'Deploy your applications in seconds with our optimized build pipeline. Scale instantly to handle millions of requests without breaking a sweat.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50 }} />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and automatic security updates to keep your data safe.'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50 }} />,
      title: 'Developer Experience',
      description: 'Powerful APIs, comprehensive SDKs, and extensive documentation that developers love. Build anything you can imagine.'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 50 }} />,
      title: 'Global Cloud Infrastructure',
      description: 'Fully managed infrastructure across 150+ regions worldwide. Your apps run closer to your users for better performance.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 50 }} />,
      title: 'Real-time Analytics',
      description: 'Monitor everything in real-time with powerful dashboards, custom metrics, and intelligent alerts to stay ahead.'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 50 }} />,
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI to automate workflows, optimize performance, and boost team productivity.'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 50 }} />,
      title: 'Scalable Database',
      description: 'PostgreSQL, MongoDB, Redis - all managed and auto-scaling. Focus on your app, not database maintenance.'
    },
    {
      icon: <ApiIcon sx={{ fontSize: 50 }} />,
      title: 'RESTful & GraphQL APIs',
      description: 'Flexible API options with automatic documentation, versioning, and rate limiting built right in.'
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 50 }} />,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools - GitHub, Slack, Jira, and 100+ more integrations available out of the box.'
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
            Powerful Features
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Everything you need to build, deploy, and scale modern applications
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {allFeatures.map((feature, index) => (
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
                <Box sx={{ color: '#FF3737', mb: 3 }}>
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
  );
}

export default Features;