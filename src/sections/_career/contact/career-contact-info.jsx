import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

export function CareerContactInfo({ sx, ...other }) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <TwitterIcon />}
          {social.value === 'facebook' && <FacebookIcon />}
          {social.value === 'instagram' && <InstagramIcon />}
          {social.value === 'linkedin' && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
  );

  const typographyProps = {
    variant: 'subtitle2',
    sx: { mb: 1 },
  };

  return (
    <Box
      component="section"
      sx={[
        { pt: { xs: 3, md: 5 }, pb: { xs: 5, md: 10 }, textAlign: { xs: 'center', md: 'left' } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="h2">Get in touch</Typography>

        <Typography
          variant="subtitle1"
          sx={{ mt: 2, mb: { xs: 3, md: 5 } }}
        >{`We'd love to talk about how we can help you.`}</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 5 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <div>
            <Typography {...typographyProps}>Email</Typography>
            <Link variant="body2" color="inherit" href="mailto:hello@example.com">
              hello@example.com
            </Link>
          </div>

          <div>
            <Typography {...typographyProps}>Phone</Typography>
            <Typography variant="body2">(907) 555-0101</Typography>
          </div>

          <div>
            <Typography {...typographyProps}>Address</Typography>
            <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
          </div>

          <div>
            <Typography {...typographyProps}>Follow us</Typography>
            {renderSocials()}
          </div>
        </Box>
      </Container>
    </Box>
  );
}
