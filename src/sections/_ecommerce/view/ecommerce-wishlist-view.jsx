'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { EcommerceCartList } from '../cart/ecommerce-cart-list';

// ----------------------------------------------------------------------

export function EcommerceWishlistView({ products }) {
  return (
    <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Wishlist ({products?.length})
      </Typography>

      <EcommerceCartList isWishlist products={products || []} />

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
        }}
      >
        <Button
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
          sx={{ mt: 3 }}
        >
          Continue shopping
        </Button>

        <Box
          sx={{
            mt: 3,
            width: 1,
            ml: 'auto',
            maxWidth: { sm: 240 },
          }}
        >
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', typography: 'h6' }}>
            <Box component="span" sx={{ flexGrow: 1 }}>
              Subtotal
            </Box>
            $58.07
          </Box>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            fullWidth
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="solar:cart-3-outline" />}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
