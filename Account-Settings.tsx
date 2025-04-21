// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    username: 'alexmorgan',
    email: 'alex.morgan@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
    receiveEmails: true,
    publicProfile: true,
    onlineStatus: true
  });
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (name === 'newPassword' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleToggleChange = (field: string) => {
    setFormData({
      ...formData,
      [field]: !formData[field as keyof typeof formData]
    });
  };

  const validatePasswords = () => {
    if (formData.newPassword && formData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const handleSavePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Personal information updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 500);
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePasswords()) {
      // Simulate API call
      setTimeout(() => {
        setSuccessMessage('Password updated successfully');
        setFormData({
          ...formData,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setTimeout(() => setSuccessMessage(''), 3000);
      }, 500);
    }
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    const root = document.documentElement;
    if (selectedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const profileButton = document.getElementById('profile-button');
      const profileDropdown = document.getElementById('profile-dropdown');
      if (profileButton && profileDropdown &&
        !profileButton.contains(event.target as Node) &&
        !profileDropdown.contains(event.target as Node)) {
        profileDropdown.style.display = 'none';
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 ${theme === 'dark' ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b z-50`}>
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/69205f12460fbd77ae2f13c10e3ec2ef.png" alt="The Guild Hall Logo" className="h-8 w-8 mr-3" />
              <h1 className={`text-2xl font-serif font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} tracking-wider`}>THE CELLAR GUILD</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/fe50a0d5-417a-4222-a367-67274d1196c8" data-readdy="true" className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} font-medium`}>Discover</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} font-medium`}>Categories</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} font-medium`}>Popular</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} font-medium`}>New</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} font-medium`}>My Communities</a>
            </div>
            <div className="flex items-center space-x-6">
              <button className="hidden md:block text-stone-600 hover:text-stone-900 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-search text-lg"></i>
              </button>
              <div className="relative">
                <button
                  id="notification-button"
                  className="text-stone-600 hover:text-stone-900 cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={() => {
                    const panel = document.getElementById('notification-panel');
                    if (panel) {
                      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                >
                  <i className="fas fa-bell text-lg"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </button>
                <div
                  id="notification-panel"
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  style={{ display: 'none' }}
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">Notifications</h3>
                      <button className="text-sm text-amber-700 hover:text-amber-800 !rounded-button whitespace-nowrap">
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="notification-item bg-amber-50 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-start">
                        <i className="fas fa-user-plus text-amber-700 mt-1"></i>
                        <div className="ml-3">
                          <p className="text-sm text-gray-800">New community invite from Developers Hub</p>
                          <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="notification-item bg-amber-50 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-start">
                        <i className="fas fa-at text-amber-700 mt-1"></i>
                        <div className="ml-3">
                          <p className="text-sm text-gray-800">You were mentioned in Digital Artists United</p>
                          <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="notification-item bg-amber-50 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-start">
                        <i className="fas fa-bell text-amber-700 mt-1"></i>
                        <div className="ml-3">
                          <p className="text-sm text-gray-800">New event scheduled in Game Dev League</p>
                          <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="notification-item p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-start">
                        <i className="fas fa-star text-amber-700 mt-1"></i>
                        <div className="ml-3">
                          <p className="text-sm text-gray-800">Your post was featured in Technology Hub</p>
                          <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center border-t border-gray-100">
                    <a href="#" className="text-sm text-amber-700 hover:text-amber-800">View all notifications</a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <button
                  id="profile-button"
                  className="text-stone-600 hover:text-stone-900 cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={() => {
                    const panel = document.getElementById('profile-dropdown');
                    if (panel) {
                      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                >
                  <i className="fas fa-user-circle text-lg"></i>
                </button>
                <div
                  id="profile-dropdown"
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  style={{ display: 'none' }}
                >
                  <div className="py-2">
                    <a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/fe50a0d5-417a-4222-a367-67274d1196c8" data-readdy="true" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <i className="fas fa-user mr-3 w-4 text-gray-400"></i>
                      My Profile
                    </a>
                    <a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/b7191e49-b95c-4400-996d-61cde9abaed8" data-readdy="true" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <i className="fas fa-cog mr-3 w-4 text-gray-400"></i>
                      Account Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <i className="fas fa-users mr-3 w-4 text-gray-400"></i>
                      My Communities
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <i className="fas fa-bookmark mr-3 w-4 text-gray-400"></i>
                      Saved Servers
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <i className="fas fa-sliders-h mr-3 w-4 text-gray-400"></i>
                      Preferences
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                      <i className="fas fa-sign-out-alt mr-3 w-4 text-red-400"></i>
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
              <button className="md:hidden text-stone-600 hover:text-stone-900 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/b7191e49-b95c-4400-996d-61cde9abaed8" data-readdy="true" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-amber-700">
                    <i className="fas fa-home mr-2"></i>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-1"></i>
                    <a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/fe50a0d5-417a-4222-a367-67274d1196c8" data-readdy="true" className="ml-1 text-sm font-medium text-gray-600 hover:text-amber-700">Profile</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-1"></i>
                    <span className="ml-1 text-sm font-medium text-gray-500">Account Settings</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-6xl font-serif font-bold text-gray-800">Account Settings</h1>
            <p className="text-gray-600 mt-4">Manage your account preferences and personal information</p>
          </div>

          {/* Settings Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
                <h3 className="text-xl font-serif text-gray-800 mb-6">Settings</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveSection('personal')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeSection === 'personal' ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:bg-gray-50'} cursor-pointer !rounded-button whitespace-nowrap`}
                    >
                      <i className={`fas fa-user-circle mr-3 ${activeSection === 'personal' ? 'text-amber-700' : 'text-gray-500'}`}></i>
                      Personal Information
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('security')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeSection === 'security' ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:bg-gray-50'} cursor-pointer !rounded-button whitespace-nowrap`}
                    >
                      <i className={`fas fa-shield-alt mr-3 ${activeSection === 'security' ? 'text-amber-700' : 'text-gray-500'}`}></i>
                      Security
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('connected')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeSection === 'connected' ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:bg-gray-50'} cursor-pointer !rounded-button whitespace-nowrap`}
                    >
                      <i className={`fas fa-link mr-3 ${activeSection === 'connected' ? 'text-amber-700' : 'text-gray-500'}`}></i>
                      Connected Accounts
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('management')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeSection === 'management' ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:bg-gray-50'} cursor-pointer !rounded-button whitespace-nowrap`}
                    >
                      <i className={`fas fa-cog mr-3 ${activeSection === 'management' ? 'text-amber-700' : 'text-gray-500'}`}></i>
                      Account Management
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('appearance')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeSection === 'appearance' ? 'bg-amber-50 text-amber-700' : 'text-gray-700 hover:bg-gray-50'} cursor-pointer !rounded-button whitespace-nowrap`}
                    >
                      <i className={`fas fa-palette mr-3 ${activeSection === 'appearance' ? 'text-amber-700' : 'text-gray-500'}`}></i>
                      Appearance
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Success Message */}
              {successMessage && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <p>{successMessage}</p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              {activeSection === 'personal' && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-serif text-gray-800 mb-6">Personal Information</h2>
                  <form onSubmit={handleSavePersonalInfo}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-base text-gray-800 mb-2">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-base text-gray-800 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="username" className="block text-base text-gray-800 mb-2">Username</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                          @
                        </span>
                        <input 
                          type="text" 
                          id="username" 
                          name="username" 
                          value={formData.username} 
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">This will be your public username visible to other users.</p>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-base text-gray-800 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">We'll send account notifications to this email.</p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-800">Receive Email Updates</p>
                          <p className="text-sm text-gray-500">Get notifications about new features and updates</p>
                        </div>
                        <button 
                          type="button"
                          onClick={() => handleToggleChange('receiveEmails')}
                          className={`w-12 h-6 rounded-full ${formData.receiveEmails ? 'bg-amber-700' : 'bg-gray-200'} relative cursor-pointer !rounded-button`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${formData.receiveEmails ? 'right-1' : 'left-1'}`}></div>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Security */}
              {activeSection === 'security' && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-serif text-gray-800 mb-6">Security</h2>
                  
                  {/* Password Change */}
                  <div className="mb-10">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Change Password</h3>
                    <form onSubmit={handleSavePassword}>
                      <div className="mb-4">
                        <label htmlFor="currentPassword" className="block text-base text-gray-800 mb-2">Current Password</label>
                        <input 
                          type="password" 
                          id="currentPassword" 
                          name="currentPassword" 
                          value={formData.currentPassword} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-base text-gray-800 mb-2">New Password</label>
                        <input 
                          type="password" 
                          id="newPassword" 
                          name="newPassword" 
                          value={formData.newPassword} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-base text-gray-800 mb-2">Confirm New Password</label>
                        <input 
                          type="password" 
                          id="confirmPassword" 
                          name="confirmPassword" 
                          value={formData.confirmPassword} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      {passwordError && (
                        <div className="mb-4 text-red-600 text-sm">
                          <i className="fas fa-exclamation-circle mr-2"></i>
                          {passwordError}
                        </div>
                      )}
                      <div className="flex justify-end">
                        <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  {/* Two-Factor Authentication */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-gray-800">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleToggleChange('twoFactorEnabled')}
                        className={`w-12 h-6 rounded-full ${formData.twoFactorEnabled ? 'bg-amber-700' : 'bg-gray-200'} relative cursor-pointer !rounded-button`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${formData.twoFactorEnabled ? 'right-1' : 'left-1'}`}></div>
                      </button>
                    </div>
                    
                    {formData.twoFactorEnabled && (
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="text-gray-700 mb-2">Two-factor authentication is enabled for your account.</p>
                        <button className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          Configure Settings
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Login History */}
                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Recent Login Activity</h3>
                    <div className="bg-gray-50 rounded-md overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-start">
                          <i className="fas fa-desktop text-gray-500 mt-1 mr-3"></i>
                          <div>
                            <p className="text-gray-800">MacBook Pro - Chrome</p>
                            <p className="text-xs text-gray-500">New York, USA - April 18, 2025 at 9:30 AM</p>
                          </div>
                          <span className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Current</span>
                        </div>
                      </div>
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-start">
                          <i className="fas fa-mobile-alt text-gray-500 mt-1 mr-3"></i>
                          <div>
                            <p className="text-gray-800">iPhone 15 - Safari</p>
                            <p className="text-xs text-gray-500">New York, USA - April 17, 2025 at 7:15 PM</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start">
                          <i className="fas fa-laptop text-gray-500 mt-1 mr-3"></i>
                          <div>
                            <p className="text-gray-800">Windows PC - Firefox</p>
                            <p className="text-xs text-gray-500">New York, USA - April 16, 2025 at 3:45 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <button className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
                        View Full Login History
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Connected Accounts */}
              {activeSection === 'connected' && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-serif text-gray-800 mb-6">Connected Accounts</h2>
                  <p className="text-gray-600 mb-8">Link your accounts to enable single sign-on and share content between platforms.</p>
                  
                  <div className="space-y-6">
                    {/* Discord */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                          <i className="fab fa-discord text-indigo-600 text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-lg text-gray-800 font-medium">Discord</h4>
                          <p className="text-sm text-green-600">Connected as DiscordUser#1234</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-700 cursor-pointer !rounded-button whitespace-nowrap">
                        Disconnect
                      </button>
                    </div>
                    
                    {/* Google */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <i className="fab fa-google text-red-600 text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-lg text-gray-800 font-medium">Google</h4>
                          <p className="text-sm text-green-600">Connected as alex.morgan@gmail.com</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-700 cursor-pointer !rounded-button whitespace-nowrap">
                        Disconnect
                      </button>
                    </div>
                    
                    {/* Twitter */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <i className="fab fa-twitter text-blue-600 text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-lg text-gray-800 font-medium">Twitter</h4>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        Connect
                      </button>
                    </div>
                    
                    {/* GitHub */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                          <i className="fab fa-github text-gray-800 text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-lg text-gray-800 font-medium">GitHub</h4>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        Connect
                      </button>
                    </div>
                    
                    {/* Twitch */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <i className="fab fa-twitch text-purple-600 text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-lg text-gray-800 font-medium">Twitch</h4>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Management */}
              {activeSection === 'management' && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-serif text-gray-800 mb-6">Account Management</h2>
                  
                  {/* Data Export */}
                  <div className="mb-10">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Data Export</h3>
                    <p className="text-gray-600 mb-4">Download a copy of your data including profile information, posts, and activity.</p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition-colors flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-download mr-2"></i>
                        Export All Data
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-file-alt mr-2"></i>
                        Export Profile Only
                      </button>
                    </div>
                  </div>
                  
                  {/* Account Visibility */}
                  <div className="border-t border-gray-200 pt-8 mb-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-gray-800">Public Profile</h3>
                        <p className="text-sm text-gray-500 mt-1">Allow others to view your profile and activity</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleToggleChange('publicProfile')}
                        className={`w-12 h-6 rounded-full ${formData.publicProfile ? 'bg-amber-700' : 'bg-gray-200'} relative cursor-pointer !rounded-button`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${formData.publicProfile ? 'right-1' : 'left-1'}`}></div>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-gray-800">Online Status</h3>
                        <p className="text-sm text-gray-500 mt-1">Show when you're active on the platform</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleToggleChange('onlineStatus')}
                        className={`w-12 h-6 rounded-full ${formData.onlineStatus ? 'bg-amber-700' : 'bg-gray-200'} relative cursor-pointer !rounded-button`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${formData.onlineStatus ? 'right-1' : 'left-1'}`}></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Account Deletion */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-serif text-red-600 mb-4">Delete Account</h3>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <div className="flex">
                        <i className="fas fa-exclamation-triangle text-red-600 mt-1 mr-3"></i>
                        <div>
                          <p className="text-red-600 font-medium">Warning: This action cannot be undone</p>
                          <p className="text-red-600 text-sm mt-1">Deleting your account will permanently remove all your data, including profile information, posts, and activity history.</p>
                        </div>
                      </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-trash-alt mr-2"></i>
                      Delete My Account
                    </button>
                  </div>
                </div>
              )}

              {/* Appearance */}
              {activeSection === 'appearance' && (
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-serif text-gray-800 mb-6">Appearance</h2>
                  
                  {/* Theme Options */}
                  <div className="mb-8">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Theme Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => handleThemeChange('light')}
                        className={`p-6 ${theme === 'light' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
                      >
                        <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                          <div className="h-4 w-full bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                        </div>
                        <i className={`fas fa-sun text-2xl ${theme === 'light' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
                        <p className={`text-sm ${theme === 'light' ? 'text-amber-700 font-medium' : 'text-gray-800'}`}>Light Mode</p>
                      </button>
                      
                      <button
                        onClick={() => handleThemeChange('dark')}
                        className={`p-6 ${theme === 'dark' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
                      >
                        <div className="bg-gray-800 border border-gray-700 rounded-md p-4 mb-4">
                          <div className="h-4 w-full bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-3/4 bg-gray-600 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-600 rounded"></div>
                        </div>
                        <i className={`fas fa-moon text-2xl ${theme === 'dark' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
                        <p className={`text-sm ${theme === 'dark' ? 'text-amber-700 font-medium' : 'text-gray-800'}`}>Dark Mode</p>
                      </button>
                      
                      <button
                        onClick={() => handleThemeChange('system')}
                        className={`p-6 ${theme === 'system' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
                      >
                        <div className="bg-gradient-to-r from-white to-gray-800 border border-gray-200 rounded-md p-4 mb-4">
                          <div className="h-4 w-full bg-amber-700 rounded mb-2"></div>
                          <div className="h-2 w-3/4 bg-gray-400 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-400 rounded"></div>
                        </div>
                        <i className={`fas fa-desktop text-2xl ${theme === 'system' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
                        <p className={`text-sm ${theme === 'system' ? 'text-amber-700 font-medium' : 'text-gray-800'}`}>System Default</p>
                      </button>
                    </div>
                  </div>
                  
                  {/* Font Size */}
                  <div className="border-t border-gray-200 pt-8 mb-8">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Font Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="range" min="1" max="5" value="3" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Small</span>
                        <span>Default</span>
                        <span>Large</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Language */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Language</h3>
                    <div className="relative">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <div className="relative w-full">
                          <select className="appearance-none w-full py-2 pl-4 pr-10 border-none rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg bg-white">
                            <option value="en-US">English (US)</option>
                            <option value="en-GB">English (UK)</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="ja">日本語</option>
                            <option value="zh-CN">中文 (简体)</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-serif text-lg text-gray-800 mb-4">About</h4>
              <p className="text-gray-600 text-base font-sans">THE CELLAR GUILD helps you discover and join the perfect Discord communities based on your interests and passions.</p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-stone-800 mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-600 text-sm font-sans">
                <li><a href="#" className="hover:text-stone-800">Gaming</a></li>
                <li><a href="#" className="hover:text-stone-800">Technology</a></li>
                <li><a href="#" className="hover:text-stone-800">Art & Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-stone-800 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 text-sm font-sans">
                <li><a href="#" className="hover:text-stone-800">Discord Guide</a></li>
                <li><a href="#" className="hover:text-stone-800">Safety Tips</a></li>
                <li><a href="#" className="hover:text-stone-800">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-stone-800 mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-600 hover:text-stone-800">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-stone-600 hover:text-stone-800">
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
                <a href="#" className="text-stone-600 hover:text-stone-800">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-100 text-center text-stone-600 text-sm">
            <p>&copy; 2025 THE CELLAR GUILD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

