import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import PlanesProvider from './features/planes/PlanesProvider.jsx'
import { ServiceProvider } from './Context/servicesContext.jsx'
import { ReviewsProvider } from './features/Reviews/ReviewsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewsProvider>
      <PlanesProvider>
        <ServiceProvider>
          <AppRoutes>
          </AppRoutes>
        </ServiceProvider>
      </PlanesProvider>
    </ReviewsProvider>
  </StrictMode>,
)
