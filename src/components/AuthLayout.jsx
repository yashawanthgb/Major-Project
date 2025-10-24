function AuthLayout({ children, showError = false }) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Brand Section */}
      <div className={`w-full md:w-1/2 lg:w-2/5 ${showError ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-primary to-secondary'} p-8 md:p-12 flex flex-col justify-between relative overflow-hidden`}>
        {/* Logo/Brand */}
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold">Docu AI</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Manage your files<br />the best way
          </h1>
          
          {/* Illustration */}
          <div className="mt-8 relative">
            <div className="w-64 h-64 relative">
              {/* File Management Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Folder */}
                <div className="relative">
                  <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none">
                    {/* Blue Folder */}
                    <path d="M40 60 L40 140 C40 145 42 150 50 150 L150 150 C158 150 160 145 160 140 L160 80 C160 75 158 70 150 70 L110 70 L100 60 Z" fill="#3DB7FF" opacity="0.9"/>
                    
                    {/* Documents inside */}
                    <rect x="70" y="85" width="60" height="45" rx="3" fill="white" opacity="0.9"/>
                    <line x1="80" y1="95" x2="120" y2="95" stroke="#3DB7FF" strokeWidth="2"/>
                    <line x1="80" y1="105" x2="115" y2="105" stroke="#3DB7FF" strokeWidth="2"/>
                    <line x1="80" y1="115" x2="110" y2="115" stroke="#3DB7FF" strokeWidth="2"/>
                    
                    {/* Floating icons */}
                    <circle cx="50" cy="50" r="12" fill="#3FDDAD"/>
                    <circle cx="150" cy="55" r="10" fill="#F9A87C"/>
                    <circle cx="155" cy="130" r="8" fill="#E3A9FD"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - can be empty or add links */}
        <div className="relative z-10">
          <p className="text-white text-sm opacity-80">
            © 2025 Docu AI. All rights reserved.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Right Panel - Form Section */}
      <div className="w-full md:w-1/2 lg:w-3/5 bg-white flex items-center justify-center p-8 md:p-12">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
