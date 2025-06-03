import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import { ServiceProvider } from './Context/servicesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServiceProvider>
      <AppRoutes>
      </AppRoutes>
    </ServiceProvider>
  </StrictMode>,
)
