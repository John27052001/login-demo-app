// src/components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-6"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-indigo-900/30 backdrop-blur-sm z-0" />

      {/* Page Content */}
      <div className="relative z-10 w-full max-w-3xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
