import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, signOut } from '../services/authService'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('documents')
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      navigate('/signin')
    } else {
      setUser(currentUser)
    }
  }, [navigate])

  const handleSignOut = () => {
    signOut()
    navigate('/signin')
  }

  // Mock documents data
  const documents = [
    { id: 1, name: 'App-tryout.doc', size: '2 GB', date: '6/30pm, 17 Oct', type: 'doc', icon: '📘', color: 'bg-blue-500' },
    { id: 2, name: 'BC-Company-sketch', size: '2 GB', date: '6/30pm, 17 Oct', type: 'sketch', icon: '💎', color: 'bg-yellow-500' },
    { id: 3, name: 'IOS.xd', size: '10 MB', date: '6/30pm, 17 Oct', type: 'xd', icon: '🎨', color: 'bg-pink-500' },
    { id: 4, name: 'CompanyAW.fig', size: '2 GB', date: '6/30pm, 17 Oct', type: 'figma', icon: '🎯', color: 'bg-purple-500' },
    { id: 5, name: 'company-ABC.sketch', size: '6 MB', date: '6/30pm, 17 Oct', type: 'sketch', icon: '💎', color: 'bg-yellow-500' },
    { id: 6, name: 'My-CV.pdf', size: '2 GB', date: '6/30pm, 17 Oct', type: 'pdf', icon: '📕', color: 'bg-red-500' },
    { id: 7, name: 'My-Jobs.xls', size: '2 GB', date: '6/30pm, 17 Oct', type: 'excel', icon: '📗', color: 'bg-green-500' },
    { id: 8, name: 'media.txt', size: '2 GB', date: '6/30pm, 17 Oct', type: 'txt', icon: '📄', color: 'bg-gray-500' },
    { id: 9, name: 'FX-designFIG.fig', size: '2 MB', date: '6/30pm, 17 Oct', type: 'figma', icon: '🎯', color: 'bg-purple-500' },
    { id: 10, name: 'students.docx', size: '2 GB', date: '6/30pm, 17 Oct', type: 'doc', icon: '📘', color: 'bg-blue-500' },
    { id: 11, name: 'school.ppt', size: '10 MB', date: '6/30pm, 17 Oct', type: 'ppt', icon: '📙', color: 'bg-red-500' },
    { id: 12, name: 'winter-designFIG.fig', size: '2 GB', date: '6/30pm, 17 Oct', type: 'figma', icon: '🎯', color: 'bg-purple-500' },
  ]

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 flex flex-col">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <span className="text-gray-800 text-xl font-bold">Storage</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-medium">Dashboard</span>
          </button>

          <button 
            className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg transition-colors"
            onClick={() => setActiveTab('documents')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium">Documents</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Images</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Media</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium">Others</span>
          </button>
        </nav>

        {/* Illustration */}
        <div className="mt-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-sm text-gray-600 font-medium">Explore your files</p>
          </div>
          
          {/* User Info */}
          <div className="mt-6 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-white font-semibold">
              {user.email.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">Admin JSM</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Crtshng"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 ml-6">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Upload</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Sign Out"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {/* Page Title */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
                <p className="text-gray-500 mt-1">Total: {documents.length} files</p>
              </div>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                <span>Date Created (newest)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {doc.icon}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 truncate">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.date}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-600">{doc.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
