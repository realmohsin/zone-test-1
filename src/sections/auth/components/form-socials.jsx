import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { GithubIcon, GoogleIcon, FacebookIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

export function FormSocials({
  sx,
  signInWithGoogle,
  singInWithGithub,
  signInWithTwitter,
  ...other
}) {
  return (
    <Box
      sx={[
        { gap: 1.5, display: 'flex', justifyContent: 'center' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <IconButton color="inherit" onClick={signInWithGoogle}>
        <GoogleIcon />
      </IconButton>

      <IconButton color="inherit" onClick={singInWithGithub}>
        <GithubIcon />
      </IconButton>

      <IconButton color="inherit" onClick={signInWithTwitter}>
        <FacebookIcon />
      </IconButton>
    </Box>
  );
}
