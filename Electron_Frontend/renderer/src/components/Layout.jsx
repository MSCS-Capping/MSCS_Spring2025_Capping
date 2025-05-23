import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Layout Component
 * 
 * Main application layout component that wraps all authenticated pages
 * Provides consistent UI structure with navigation bar and main content area
 * Handles user authentication state and logout functionality
 * 
 * @param {ReactNode} children - Child components to render in the main content area
 */
const Layout = ({ children }) => {
  // Navigation hook for programmatic routing
  const navigate = useNavigate();
  // Location hook to access current route information
  const location = useLocation();
  // Get current user information from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  /**
   * Handles user logout action
   * Clears authentication data from localStorage and redirects to login page
   */
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('deviceId');
    navigate('/login');
  };

  // Render the layout with navigation bar and content area
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Top Navigation Bar - Contains app title and user controls */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* App Logo/Title Section */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <img 
                  src="SPAR.png" 
                  alt="SPAR Logo" 
                  className="h-10 w-auto" 
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">S.P.A.R</h1>
              </div>
            </div>
            {/* User Info and Logout Button */}
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user.name || user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-md text-sm hover:from-red-600 hover:to-red-700 transition-colors shadow-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Renders child components passed to Layout */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout; 