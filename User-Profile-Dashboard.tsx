// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState('overview');
const [isEditingBio, setIsEditingBio] = useState(false);
const [theme, setTheme] = useState('light');
const [bio, setBio] = useState("Hi there! I'm Alex, a passionate gamer and tech enthusiast. I love joining communities where I can share ideas and connect with like-minded people. Currently exploring game development and digital art in my free time.");
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
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/a456820f-19f8-4042-bf6a-f0223ceffdb0" data-readdy="true" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
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
<a
href="#"
className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
onClick={(e) => {
e.preventDefault();
setActiveTab('preferences');
const dropdown = document.getElementById('profile-dropdown');
if (dropdown) {
dropdown.style.display = 'none';
}
}}
>
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
{/* Profile Header */}
<section className="pt-32 pb-6 bg-gray-50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
<img
src="https://readdy.ai/api/search-image?query=professional%20portrait%20photograph%20of%20a%20young%20adult%20with%20friendly%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20detailed%20facial%20features&width=300&height=300&seq=profile1&orientation=squarish"
alt="Profile Avatar"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="flex-1 text-center md:text-left">
<h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">Alex Morgan</h1>
<p className="text-gray-600 mb-4">@alexmorgan</p>
<div className="flex flex-wrap gap-3 justify-center md:justify-start">
<span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
<i className="fas fa-gamepad mr-1"></i> Gamer
</span>
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
<i className="fas fa-laptop-code mr-1"></i> Developer
</span>
<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
<i className="fas fa-palette mr-1"></i> Digital Artist
</span>
</div>
</div>
<div className="flex gap-3">
<button className="bg-amber-700 text-white px-4 py-2 rounded-sm hover:bg-amber-800 transition-all cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-edit mr-2"></i>
Edit Profile
</button>
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-50 transition-all cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-share-alt mr-2"></i>
Share
</button>
</div>
</div>
</div>
</section>
{/* Profile Tabs */}
<section className="bg-white border-b border-gray-200">
<div className="max-w-6xl mx-auto px-6">
<div className="flex overflow-x-auto scrollbar-hide">
<button
onClick={() => setActiveTab('overview')}
className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer !rounded-button ${activeTab === 'overview' ? 'border-amber-700 text-amber-700' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
>
<i className="fas fa-user mr-2"></i>
Overview
</button>
<button
onClick={() => setActiveTab('communities')}
className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer !rounded-button ${activeTab === 'communities' ? 'border-amber-700 text-amber-700' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
>
<i className="fas fa-users mr-2"></i>
Communities
</button>
<button
onClick={() => setActiveTab('activity')}
className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer !rounded-button ${activeTab === 'activity' ? 'border-amber-700 text-amber-700' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
>
<i className="fas fa-chart-line mr-2"></i>
Activity
</button>
<button
onClick={() => setActiveTab('saved')}
className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer !rounded-button ${activeTab === 'saved' ? 'border-amber-700 text-amber-700' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
>
<i className="fas fa-bookmark mr-2"></i>
Saved Servers
</button>
<button
onClick={() => setActiveTab('preferences')}
className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer !rounded-button ${activeTab === 'preferences' ? 'border-amber-700 text-amber-700' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
>
<i className="fas fa-cog mr-2"></i>
Preferences
</button>
</div>
</div>
</section>
{/* Profile Content */}
<section className="py-12">
<div className="max-w-6xl mx-auto px-6">
{activeTab === 'preferences' ? (
<div className="bg-white rounded-lg shadow-sm p-6">
<h2 className="text-2xl font-serif text-gray-800 mb-6">User Preferences</h2>
{/* Notification Settings */}
<div className="mb-8">
<h3 className="text-xl font-serif text-gray-800 mb-4">Notification Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-800">Email Notifications</p>
<p className="text-sm text-gray-500">Receive updates via email</p>
</div>
<button className="w-12 h-6 rounded-full bg-amber-700 relative cursor-pointer !rounded-button">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-gray-800">Push Notifications</p>
<p className="text-sm text-gray-500">Receive push notifications</p>
</div>
<button className="w-12 h-6 rounded-full bg-gray-200 relative cursor-pointer !rounded-button">
<div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
</button>
</div>
</div>
</div>
{/* Privacy Settings */}
<div className="mb-8">
<h3 className="text-xl font-serif text-gray-800 mb-4">Privacy Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-800">Profile Visibility</p>
<p className="text-sm text-gray-500">Make your profile public</p>
</div>
<button className="w-12 h-6 rounded-full bg-amber-700 relative cursor-pointer !rounded-button">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-gray-800">Show Online Status</p>
<p className="text-sm text-gray-500">Display when you're online</p>
</div>
<button className="w-12 h-6 rounded-full bg-amber-700 relative cursor-pointer !rounded-button">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
</button>
</div>
</div>
</div>
{/* Theme Options */}
<div className="mb-8">
<h3 className="text-xl font-serif text-gray-800 mb-4">Theme Options</h3>
<div className="grid grid-cols-3 gap-4">
<button
id="light-theme-btn"
onClick={() => handleThemeChange('light')}
className={`p-4 ${theme === 'light' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
>
<i className={`fas fa-sun text-2xl ${theme === 'light' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
<p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Light</p>
</button>
<button
id="dark-theme-btn"
onClick={() => handleThemeChange('dark')}
className={`p-4 ${theme === 'dark' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
>
<i className={`fas fa-moon text-2xl ${theme === 'dark' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
<p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Dark</p>
</button>
<button
id="system-theme-btn"
onClick={() => handleThemeChange('system')}
className={`p-4 ${theme === 'system' ? 'border-2 border-amber-700' : 'border border-gray-200'} rounded-lg text-center cursor-pointer !rounded-button`}
>
<i className={`fas fa-desktop text-2xl ${theme === 'system' ? 'text-amber-700' : 'text-gray-400'} mb-2`}></i>
<p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>System</p>
</button>
</div>
</div>
{/* Language Selection */}
<div>
<h3 className="text-xl font-serif text-gray-800 mb-4">Language</h3>
<div className="relative">
<button className="w-full px-4 py-2 border border-gray-200 rounded-lg text-left flex items-center justify-between cursor-pointer !rounded-button">
<span className="text-gray-800">English (US)</span>
<i className="fas fa-chevron-down text-gray-400"></i>
</button>
</div>
</div>
</div>
) : activeTab === 'overview' && (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Left Column */}
<div className="lg:col-span-2 space-y-8">
{/* Bio Section */}
<div className="bg-white rounded-lg shadow-sm p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-2xl font-serif text-gray-800">About Me</h3>
<button
onClick={() => setIsEditingBio(!isEditingBio)}
className="text-amber-700 hover:text-amber-800 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className={`fas ${isEditingBio ? 'fa-save' : 'fa-edit'}`}></i>
</button>
</div>
{isEditingBio ? (
<textarea
value={bio}
onChange={(e) => setBio(e.target.value)}
className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
rows={4}
/>
) : (
<p className="text-gray-600">{bio}</p>
)}
</div>
{/* Recent Activity */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-2xl font-serif text-gray-800 mb-4">Recent Activity</h3>
<div className="space-y-4">
<div className="border-l-2 border-amber-700 pl-4 py-1">
<div className="flex items-center text-gray-500 text-sm mb-1">
<i className="fas fa-user-plus mr-2"></i>
<span>Joined a new community</span>
<span className="ml-auto">2 days ago</span>
</div>
<p className="text-gray-800">You joined <span className="text-amber-700 font-medium">Developers Hub</span></p>
</div>
<div className="border-l-2 border-amber-700 pl-4 py-1">
<div className="flex items-center text-gray-500 text-sm mb-1">
<i className="fas fa-comment mr-2"></i>
<span>Posted a message</span>
<span className="ml-auto">3 days ago</span>
</div>
<p className="text-gray-800">You posted in <span className="text-amber-700 font-medium">Digital Artists United</span></p>
<p className="text-gray-600 text-sm mt-1">"Just finished my latest digital painting, would love some feedback!"</p>
</div>
<div className="border-l-2 border-amber-700 pl-4 py-1">
<div className="flex items-center text-gray-500 text-sm mb-1">
<i className="fas fa-star mr-2"></i>
<span>Received a badge</span>
<span className="ml-auto">1 week ago</span>
</div>
<p className="text-gray-800">You earned the <span className="text-amber-700 font-medium">Active Contributor</span> badge</p>
</div>
<div className="border-l-2 border-amber-700 pl-4 py-1">
<div className="flex items-center text-gray-500 text-sm mb-1">
<i className="fas fa-calendar-check mr-2"></i>
<span>Attended an event</span>
<span className="ml-auto">2 weeks ago</span>
</div>
<p className="text-gray-800">You attended <span className="text-amber-700 font-medium">Game Dev Workshop</span> in Game Dev League</p>
</div>
</div>
<div className="mt-4 text-center">
<button className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
View All Activity
</button>
</div>
</div>
</div>
{/* Right Column */}
<div className="space-y-8">
{/* Stats Card */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-xl font-serif text-gray-800 mb-4">Stats</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-gray-600">Member Since</span>
<span className="text-gray-800 font-medium">April 12, 2023</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-600">Communities</span>
<span className="text-gray-800 font-medium">8</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-600">Posts</span>
<span className="text-gray-800 font-medium">42</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-600">Reactions</span>
<span className="text-gray-800 font-medium">156</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-600">Badges</span>
<span className="text-gray-800 font-medium">5</span>
</div>
</div>
</div>
{/* Badges */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-xl font-serif text-gray-800 mb-4">Badges</h3>
<div className="grid grid-cols-3 gap-4">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
<i className="fas fa-award text-amber-700"></i>
</div>
<span className="text-xs text-gray-600 mt-2 text-center">Active Member</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
<i className="fas fa-code text-blue-700"></i>
</div>
<span className="text-xs text-gray-600 mt-2 text-center">Developer</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
<i className="fas fa-palette text-purple-700"></i>
</div>
<span className="text-xs text-gray-600 mt-2 text-center">Artist</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
<i className="fas fa-comments text-green-700"></i>
</div>
<span className="text-xs text-gray-600 mt-2 text-center">Contributor</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
<i className="fas fa-heart text-red-700"></i>
</div>
<span className="text-xs text-gray-600 mt-2 text-center">Supporter</span>
</div>
</div>
</div>
{/* Top Communities */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h3 className="text-xl font-serif text-gray-800 mb-4">Top Communities</h3>
<div className="space-y-4">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
<i className="fab fa-discord text-blue-700"></i>
</div>
<div className="ml-3">
<p className="text-gray-800 font-medium">Developers Hub</p>
<p className="text-xs text-gray-500">Admin • Most Active</p>
</div>
</div>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
<i className="fab fa-discord text-purple-700"></i>
</div>
<div className="ml-3">
<p className="text-gray-800 font-medium">Digital Artists United</p>
<p className="text-xs text-gray-500">Member • Regular</p>
</div>
</div>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
<i className="fab fa-discord text-amber-700"></i>
</div>
<div className="ml-3">
<p className="text-gray-800 font-medium">Game Dev League</p>
<p className="text-xs text-gray-500">Moderator • Active</p>
</div>
</div>
</div>
<div className="mt-4 text-center">
<button className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
View All Communities
</button>
</div>
</div>
</div>
</div>
)}
</div>
</section>
{/* Footer */}
<footer className="bg-gray-50 border-t border-gray-200">
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
export default App
