import React from 'react';

import { Box, Button, Divider, Drawer, Link, Stack, Typography } from '@mui/material';

import { useSamplesDrawerOpen } from '../../documents/editor/EditorContext';

import SidebarButton from './SidebarButton';
import logo from './waypoint.svg';

export const SAMPLES_DRAWER_WIDTH = 240;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack spacing={3} py={1} px={2} width={SAMPLES_DRAWER_WIDTH} justifyContent="space-between" height="100%">
        <Stack spacing={2} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } }}>
          <Typography variant="h6" component="h1" sx={{ p: 0.75 }}>
            EmailBuilder.js
          </Typography>

          <Stack alignItems="flex-start">
            <SidebarButton href="#">Novo email</SidebarButton>
            <SidebarButton href="#sample/fique-ligado">Fique Ligado</SidebarButton>
            <SidebarButton href="#sample/welcome">Email de boas-vindas</SidebarButton>
            <SidebarButton href="#sample/one-time-password">Código de acesso único (OTP)</SidebarButton>
            <SidebarButton href="#sample/reset-password">Redefinir senha</SidebarButton>
            <SidebarButton href="#sample/order-ecomerce">Recibo de e-commerce</SidebarButton>
            <SidebarButton href="#sample/subscription-receipt">Recibo de assinatura</SidebarButton>
            <SidebarButton href="#sample/reservation-reminder">Lembrete de reserva</SidebarButton>
            <SidebarButton href="#sample/post-metrics-report">Métricas de postagem</SidebarButton>
            <SidebarButton href="#sample/respond-to-message">Responder à consulta</SidebarButton>
          </Stack>

          <Divider />

          <Stack>
            <Button size="small" href="https://www.usewaypoint.com/open-source/emailbuilderjs" target="_blank">
              Learn more
            </Button>
            <Button size="small" href="https://github.com/usewaypoint/email-builder-js" target="_blank">
              View on GitHub
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2} px={0.75} py={3}>
          <Link href="https://usewaypoint.com?utm_source=emailbuilderjs" target="_blank" sx={{ lineHeight: 1 }}>
            <Box component="img" src="https://listmonk.app/static/images/logo.svg" width={90} />
          </Link>
          <Box>
            <Typography variant="overline" gutterBottom>
            Deseja enviar este email?
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
            Clique no botão abaixo e acesse a plataforma para fazer o envio deste e de outros templates. Lembrando que basta copiar o código HTML e colar no Listmonk.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ justifyContent: 'center' }}
            href="https://gztvix-listmonk.redegazeta.net/"
            target="_blank"
          >
            Acessar Listmonk!
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
