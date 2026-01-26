import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ApiIcon from '@mui/icons-material/Api';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ForumIcon from '@mui/icons-material/Forum';

function Docs() {
  const docSections = [
    {
      icon: <MenuBookIcon sx={{ fontSize: 50 }} />,
      title: 'Getting Started',
      description: 'Learn the basics and get your first project up and running in minutes.',
      link: 'Read Guide',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50 }} />,
      title: 'Code Examples',
      description: 'Browse through hundreds of code snippets and implementation examples.',
      link: 'View Examples',
    },
    {
      icon: <ApiIcon sx={{ fontSize: 50 }} />,
      title: 'API Reference',
      description: 'Complete API documentation with detailed endpoint descriptions and parameters.',
      link: 'Explore API',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
      title: 'Tutorials',
      description: 'Step-by-step tutorials for common use cases and advanced implementations.',
      link: 'Start Learning',
    },
    {
      icon: <VideoLibraryIcon sx={{ fontSize: 50 }} />,
      title: 'Video Courses',
      description: 'Watch comprehensive video tutorials from beginner to advanced topics.',
      link: 'Watch Videos',
    },
    {
      icon: <ForumIcon sx={{ fontSize: 50 }} />,
      title: 'Community Forum',
      description: 'Join our community, ask questions, and share your knowledge with others.',
      link: 'Join Discussion',
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
            Documentation
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Everything you need to know to build amazing applications
          </Typography>
        </Box>

        {/* Doc Sections */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {docSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: '1px solid rgba(255, 55, 55, 0.5)',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                <Box sx={{ color: '#FF3737', mb: 3 }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                    {section.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 3 }}>
                    {section.description}
                  </Typography>
                  <Typography 
                    sx={{ 
                        color: '#FF3737',
                      fontWeight: 600,
                      '&:hover': {
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    {section.link} →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Links Section */}
        <Box 
          sx={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            p: 6,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'white' }}>
            Quick Links
          </Typography>
          <Grid container spacing={2}>
            {quickLinks.map((link, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  variant="text"
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'rgba(255, 255, 255, 0.7)',
                    py: 1.5,
                    px: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                        color: '#FF3737',
                        background: 'rgba(255, 55, 55, 0.1)',
                    }
                  }}
                >
                  → {link}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Help Section */}
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
            Can't find what you're looking for?
          </Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4 }}>
            Our support team is here to help you succeed
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" sx={{ px: 4 }}>
              Contact Support
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                px: 4, 
                borderColor: 'rgba(255, 255, 255, 0.3)', 
                color: 'white' 
              }}
            >
              Join Community
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Docs;