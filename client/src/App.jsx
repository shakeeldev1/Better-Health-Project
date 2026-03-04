import React from 'react';
import { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const FamilyCoaching = lazy(() => import('./pages/FamilyCoaching'));
const Ebooks = lazy(() => import('./pages/Ebooks'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Booking = lazy(() => import('./pages/Booking'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#3E7D72] border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Error Fallback Component
const ErrorFallback = ({ error, resetError }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try again.</p>
      <button 
        onClick={resetError}
        className="bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-3 px-8 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetError={() => this.setState({ hasError: false, error: null })} 
        />
      );
    }
    return this.props.children;
  }
}

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Navbar />
      <main id="main-content" className="min-h-[calc(100dvh-4rem)] pt-14">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/family-coaching", element: <FamilyCoaching /> },
      { path: "/ebooks", element: <Ebooks /> },
      { path: "/booking", element: <Booking /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> }
    ]
  }
])

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
