import { varAlpha } from 'minimal-shared/utils';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Iconify } from 'src/components/iconify';

import { PaymentNewCardForm } from 'src/sections/payment/payment-new-card-form';

// ----------------------------------------------------------------------

export function TravelCheckOutPaymentForm({ name, options, sx, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Box
          sx={[
            { gap: 3, display: 'flex', flexDirection: 'column' },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...other}
        >
          {options.map((option) => {
            const isSelected = value === option.value;

            return (
              <OptionItem
                key={option.label}
                option={option}
                selected={isSelected}
                isCredit={isSelected && option.value === 'creditcard'}
                onClick={() => onChange(option.value)}
              />
            );
          })}
        </Box>
      )}
    />
  );
}

function OptionItem({ option, selected, isCredit, sx, ...other }) {
  return (
    <Box
      sx={[
        (theme) => ({
          borderRadius: 1.5,
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          transition: theme.transitions.create(['box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
          ...(selected && { boxShadow: `0 0 0 2px ${theme.vars.palette.text.primary}` }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{ px: 2, gap: 2, height: 80, display: 'flex', cursor: 'pointer', alignItems: 'center' }}
      >
        <Iconify
          width={24}
          icon={selected ? 'solar:check-circle-bold' : 'carbon:radio-button'}
          sx={{ color: 'text.disabled', ...(selected && { color: 'primary.main' }) }}
        />

        <Box sx={{ gap: 0.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box component="span" sx={{ typography: 'subtitle1' }}>
            {option.label}
          </Box>

          <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
            {option.description}
          </Box>
        </Box>

        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          {option.value === 'creditcard' ? (
            <>
              <Iconify width={24} icon="logos:mastercard" />
              <Iconify width={24} icon="logos:visa" />
            </>
          ) : (
            <Iconify width={24} icon="logos:paypal" />
          )}
        </Box>
      </Box>

      {isCredit && (
        <Box
          sx={{
            gap: 2.5,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            px: 3,
            pb: 3,
          }}
        >
          <PaymentNewCardForm
            isRHF
            numberField={{ name: 'paymentMethods.card.number' }}
            holderField={{ name: 'paymentMethods.card.holder' }}
            dateField={{ name: 'paymentMethods.card.expired' }}
            cvvField={{ name: 'paymentMethods.card.ccv' }}
          />
          <Button variant="contained">Apply</Button>
        </Box>
      )}
    </Box>
  );
}
