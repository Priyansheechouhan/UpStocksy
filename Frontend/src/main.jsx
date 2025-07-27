import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_pages/Home/HomePage.jsx'
import Container from '@mui/material/Container';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container maxWidth="sm">
      <HomePage />
    </Container>
  </StrictMode>,
)
