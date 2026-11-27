import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const vitestConfig = defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    tsconfigPaths: true,
  },
});

export default vitestConfig;
