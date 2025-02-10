import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

export function PostAuthor({ author, sx, ...other }) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
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

  return (
    <Box
      sx={[
        { display: 'flex', gap: { xs: 3, md: 4 }, py: { xs: 5, md: 10 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Avatar src={author?.avatarUrl} sx={{ width: 96, height: 96 }} />

      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ mb: 0.5 }}>
              {author?.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {author?.role}
            </Typography>
          </Box>

          {renderSocials()}
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {author?.about}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {author?.quotes}
        </Typography>
      </Box>
    </Box>
  );
}
