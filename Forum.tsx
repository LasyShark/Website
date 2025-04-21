// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
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
const [activeCategory, setActiveCategory] = useState('all');
return (
<div className="min-h-screen bg-white">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
<div className="max-w-6xl mx-auto px-6">
<nav className="flex items-center justify-between h-20">
<div className="flex items-center">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/69205f12460fbd77ae2f13c10e3ec2ef.png" alt="The Guild Hall Logo" className="h-8 w-8 mr-3" />
<h1 className="text-2xl font-serif font-bold text-gray-800 tracking-wider">THE CELLAR GUILD</h1>
</div>
<div className="hidden md:flex items-center space-x-8">
<a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Discover</a>
<a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Categories</a>
<a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Popular</a>
<a href="#" className="text-gray-600 hover:text-gray-800 font-medium">New</a>
<a href="#" className="text-gray-600 hover:text-gray-800 font-medium">My Communities</a>
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
style={{display: 'none'}}
>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-800">Notifications</h3>
<button
className="text-sm text-amber-700 hover:text-amber-800 !rounded-button whitespace-nowrap"
onClick={() => {
const notifications = document.querySelectorAll('.notification-item');
notifications.forEach(notification => {
notification.classList.remove('bg-amber-50');
});
// Update notification badge
const badge = document.querySelector('#notification-button .absolute');
if (badge) {
badge.style.display = 'none';
}
// Create and show toast notification
const toast = document.createElement('div');
toast.id = 'toast-notification';
toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300';
toast.textContent = 'All notifications marked as read';
document.body.appendChild(toast);
// Remove toast after 3 seconds
setTimeout(() => {
toast.style.opacity = '0';
setTimeout(() => {
document.body.removeChild(toast);
}, 300);
}, 3000);
}}
>
Mark all as read
</button>
</div>
</div>
<div className="max-h-96 overflow-y-auto">
<div
id="developers-hub-invite"
className="notification-item bg-amber-50 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
onClick={() => {
// Mark notification as read
const notification = document.getElementById('developers-hub-invite');
if (notification) {
notification.classList.remove('bg-amber-50');
}
// Create and show dialog
const dialogOverlay = document.createElement('div');
dialogOverlay.id = 'invite-dialog-overlay';
dialogOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
const dialog = document.createElement('div');
dialog.id = 'invite-dialog';
dialog.className = 'bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl';
dialog.innerHTML = `
<div class="flex justify-between items-start mb-4">
<h3 class="text-xl font-medium text-gray-900">Community Invitation</h3>
<button id="close-dialog" class="text-gray-400 hover:text-gray-500">
<i class="fas fa-times"></i>
</button>
</div>
<div class="mb-6">
<h4 class="text-lg font-medium text-gray-800 mb-2">Developers Hub</h4>
<p class="text-gray-600 mb-4">A thriving community of 25,000+ developers sharing knowledge, collaborating on projects, and discussing the latest in technology.</p>
<div class="flex items-center text-gray-500 text-sm mb-2">
<i class="fas fa-users mr-2"></i>
<span>25,432 members</span>
</div>
<div class="flex items-center text-gray-500 text-sm">
<i class="fas fa-clock mr-2"></i>
<span>Invitation expires in 24 hours</span>
</div>
</div>
<div class="flex flex-col gap-3">
<button id="accept-invite" class="bg-amber-700 text-white px-4 py-2 rounded-sm hover:bg-amber-800 transition-all !rounded-button whitespace-nowrap">
Accept Invitation
</button>
<button id="decline-invite" class="border border-gray-300 text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-50 transition-all !rounded-button whitespace-nowrap">
Decline
</button>
<a href="#" class="text-amber-700 text-center hover:text-amber-800 text-sm">
View Community
</a>
</div>
`;
dialogOverlay.appendChild(dialog);
document.body.appendChild(dialogOverlay);
// Add event listeners
const closeDialog = () => {
document.body.removeChild(dialogOverlay);
};
document.getElementById('close-dialog')?.addEventListener('click', closeDialog);
document.getElementById('accept-invite')?.addEventListener('click', () => {
// Show success message
const toast = document.createElement('div');
toast.className = 'fixed bottom-4 right-4 bg-green-800 text-white px-6 py-3 rounded-lg shadow-lg z-50';
toast.textContent = 'Successfully joined Developers Hub!';
document.body.appendChild(toast);
setTimeout(() => {
document.body.removeChild(toast);
}, 3000);
closeDialog();
});
document.getElementById('decline-invite')?.addEventListener('click', () => {
// Show declined message
const toast = document.createElement('div');
toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50';
toast.textContent = 'Invitation declined';
document.body.appendChild(toast);
setTimeout(() => {
document.body.removeChild(toast);
}, 3000);
closeDialog();
});
// Close dialog when clicking outside
dialogOverlay.addEventListener('click', (e) => {
if (e.target === dialogOverlay) {
closeDialog();
}
});
}}
>
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
style={{display: 'none'}}
>
<div className="py-2">
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/b7191e49-b95c-4400-996d-61cde9abaed8" data-readdy="true" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
<i className="fas fa-user mr-3 w-4 text-gray-400"></i>
My Profile
</a>
<a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
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
{/* Community Stats Section */}
<section className="pt-20 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
<h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">Find Your Perfect Community</h2>
<p className="text-xl text-gray-600 font-sans mb-8">Discover Discord communities that match your interests and passions. Whether you're into gaming, art, tech, or anything else, there's a perfect community waiting for you to join and connect with like-minded people.</p>
<div className="flex gap-4">
<button className="bg-amber-700 text-white px-8 py-3 rounded-sm hover:bg-amber-800 transition-all hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-users mr-2"></i>
Browse Communities
</button>
<button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-sm hover:bg-amber-700/10 transition-all hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-compass mr-2"></i>
Explore All
</button>
</div>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow text-center">
<p className="text-4xl font-bold text-amber-700">500+</p>
<p className="text-gray-600">Active Communities</p>
</div>
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow text-center">
<p className="text-4xl font-bold text-amber-700">50+</p>
<p className="text-gray-600">Categories</p>
</div>
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow text-center">
<p className="text-4xl font-bold text-amber-700">1M+</p>
<p className="text-gray-600">Community Members</p>
</div>
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow text-center">
<p className="text-4xl font-bold text-amber-700">24/7</p>
<p className="text-gray-600">Active Discussions</p>
</div>
</div>
</div>
</div>
</section>
{/* Trending Topics */}
<section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-3xl font-serif text-gray-800 mb-8 text-center">Popular Categories</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{[
{ name: 'Gaming', icon: 'gamepad', count: '1.2K servers', discordLink: 'https://discord.gg/gaming' },
{ name: 'Technology', icon: 'laptop-code', count: '856 servers', discordLink: 'https://discord.gg/tech' },
{ name: 'Art & Design', icon: 'palette', count: '634 servers', discordLink: 'https://discord.gg/art' },
{ name: 'Music', icon: 'music', count: '945 servers', discordLink: 'https://discord.gg/music' }
].map((category, index) => (
<a
href={category.discordLink}
target="_blank"
rel="noopener noreferrer"
key={index}
className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center cursor-pointer"
>
<i className={`fas fa-${category.icon} text-3xl text-stone-700 mb-4`}></i>
<h4 className="text-xl font-sans text-gray-800">{category.name}</h4>
<p className="text-gray-600 text-sm mt-2">{category.count}</p>
</a>
))}
</div>
</div>
</section>
{/* Recent Posts */}
<section className="py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-3xl font-serif text-gray-800 mb-8">Featured Discord Communities</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{
name: "Developers Hub",
category: "Programming",
members: "25,432",
description: "A community for developers to share knowledge, collaborate on projects, and discuss the latest tech trends.",
discordLink: "https://discord.gg/devhub"
},
{
name: "Digital Artists United",
category: "Digital Art",
members: "18,945",
description: "Connect with fellow digital artists, share your work, get feedback, and participate in art challenges.",
discordLink: "https://discord.gg/artists"
},
{
name: "Game Dev League",
category: "Game Development",
members: "31,267",
description: "Join other game developers to discuss game design, development tools, and share your projects.",
discordLink: "https://discord.gg/gamedev"
}
].map((community, index) => (
<div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center mb-4">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center">
<i className="fab fa-discord text-stone-600 text-xl"></i>
</div>
<div className="ml-3">
<h4 className="text-2xl font-sans text-gray-800">{community.name}</h4>
<p className="text-sm text-gray-500">{community.category}</p>
</div>
</div>
<p className="text-stone-600 mb-4">{community.description}</p>
<div className="flex items-center justify-between text-stone-600">
<span><i className="fas fa-users mr-2"></i>{community.members} members</span>
<a
href={community.discordLink}
target="_blank"
rel="noopener noreferrer"
className="bg-amber-700 text-white px-4 py-2 rounded-sm hover:bg-amber-800 transition-all hover:scale-105 !rounded-button whitespace-nowrap"
>
Join Server
</a>
</div>
</div>
))}
</div>
</div>
</section>
{/* Join Community */}
<section className="py-16 bg-stone-100">
<div className="max-w-2xl mx-auto px-6 text-center">
<h3 className="text-2xl font-serif text-stone-800 mb-4">Find Your Discord Communities</h3>
<p className="text-stone-600 mb-8">Tell us your interests and we'll help you discover the perfect Discord communities for you.</p>
<div className="flex flex-col gap-4">
<input
type="text"
placeholder="What are your interests? (e.g., gaming, art, music)"
className="px-6 py-3 rounded-full border-none focus:ring-2 focus:ring-stone-300"
/>
<select className="px-6 py-3 rounded-full border-none focus:ring-2 focus:ring-stone-300 bg-white">
<option value="">Select primary category</option>
<option value="gaming">Gaming</option>
<option value="technology">Technology</option>
<option value="art">Art & Design</option>
<option value="music">Music</option>
<option value="education">Education</option>
<option value="sports">Sports</option>
</select>
<button className="bg-amber-700 text-white px-8 py-3 rounded-sm hover:bg-amber-800 transition-all hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
Find Communities
</button>
<p className="text-sm text-gray-500">Already using Discord? <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Open Discord App</a></p>
</div>
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
