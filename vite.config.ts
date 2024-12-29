import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default ({ mode }) => {
  if (mode == "development") {
    return defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
        '@': `${__dirname}/src`,
        },
      },
      server: {
        port: 443,
        host: "0.0.0.0",
        hmr: {
            host: 'tg-mini-app.local',
            port: 443,
        },
        https: {
          key: fs.readFileSync('./.cert/localhost-key.pem'),
          cert: fs.readFileSync('./.cert/localhost.pem'),
        },
      },
    })
  } else {
    return defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
        '@': `${__dirname}/src`,
        },
      }
    })
  }
}
