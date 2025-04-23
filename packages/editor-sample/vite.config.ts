import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@usewaypoint/email-builder': path.resolve(__dirname, '../../packages/email-builder/src'),
      '@usewaypoint/block-avatar': path.resolve(__dirname, '../../packages/block-avatar/src'),
      '@usewaypoint/block-button': path.resolve(__dirname, '../../packages/block-button/src'),
      '@usewaypoint/block-columns-container': path.resolve(__dirname, '../../packages/block-columns-container/src'),
      '@usewaypoint/block-container': path.resolve(__dirname, '../../packages/block-container/src'),
      '@usewaypoint/block-divider': path.resolve(__dirname, '../../packages/block-divider/src'),
      '@usewaypoint/block-heading': path.resolve(__dirname, '../../packages/block-heading/src'),
      '@usewaypoint/block-html': path.resolve(__dirname, '../../packages/block-html/src'),
      '@usewaypoint/block-image': path.resolve(__dirname, '../../packages/block-image/src'),
      '@usewaypoint/block-spacer': path.resolve(__dirname, '../../packages/block-spacer/src'),
      '@usewaypoint/block-text': path.resolve(__dirname, '../../packages/block-text/src'),
      '@usewaypoint/document-core': path.resolve(__dirname, '../../packages/document-core/src')
    }
  },
  base: '/email-builder-js/'
});
