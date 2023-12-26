import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//remember we re changing here for using the server

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false
      },
    },
  },
  plugins: [react()],
})
