// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
const App: React.FC = () => {
return (
<div className="min-h-screen bg-white">
{/* Header Section */}
<header className="bg-white shadow-sm py-4">
<div className="container mx-auto px-6 flex items-center justify-between">
<div className="flex items-center space-x-3">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/69205f12460fbd77ae2f13c10e3ec2ef.png" alt="The Cellar Guild Logo" className="h-12 w-12" />
<h1 className="text-2xl font-bold font-serif text-gray-800 tracking-wider">THE CELLAR GUILD</h1>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a href="#" className="text-gray-800 hover:text-amber-700 transition duration-200 cursor-pointer whitespace-nowrap font-sans font-medium">Shop</a>
<a href="#" className="text-gray-800 hover:text-amber-700 transition duration-200 cursor-pointer whitespace-nowrap font-sans font-medium">Books</a>
<a href="#" className="text-gray-800 hover:text-amber-700 transition duration-200 cursor-pointer whitespace-nowrap font-sans font-medium">Games</a>
<a href="#" className="text-gray-800 hover:text-amber-700 transition duration-200 cursor-pointer whitespace-nowrap font-sans font-medium">Puzzles</a>
<a href="#" className="text-gray-800 hover:text-amber-700 transition duration-200 cursor-pointer whitespace-nowrap font-sans font-medium">About</a>
</nav>
<button className="md:hidden text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap !rounded-button">
<i className="fas fa-bars text-xl"></i>
</button>
</div>
</header>
{/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-stone-50 to-amber-50">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-10 md:mb-0">
<h2 className="text-4xl md:text-5xl font-bold font-serif text-stone-800 leading-tight mb-4">Welcome To The Guild</h2>
<p className="text-xl text-stone-600 mb-8 font-sans">Discover our carefully selected collection of unique games, puzzles, and engaging literature that will inspire your imagination.</p>
<button className="bg-amber-700 text-white px-8 py-3 rounded-sm hover:bg-amber-800 transition duration-300 shadow-md cursor-pointer whitespace-nowrap !rounded-button font-serif">
Explore Collection
</button>
</div>
<div className="md:w-1/2 relative">
<div className="rounded-lg overflow-hidden shadow-xl">
<img
src="https://readdy.ai/api/search-image?query=mystical%20nordic%20shop%20interior%20with%20wooden%20shelves%20filled%20with%20ancient%20books%2C%20runes%2C%20puzzles%20and%20board%20games%2C%20warm%20ambient%20lighting%2C%20minimalist%20scandinavian%20design%20with%20natural%20materials%20and%20earthy%20colors&width=600&height=400&seq=6&orientation=landscape"
alt="The Cellar Guild Shop"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
</div>
</div>
</section>
{/* Company Story */}
<section className="py-16 bg-stone-50">
<div className="container mx-auto px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold font-serif text-center text-stone-800 mb-12">Our Story</h2>
<div className="space-y-8">
<div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">How We Started</h3>
<p className="text-gray-600 leading-relaxed font-sans">
Founded in 2025 as a means of providing a service to people worldwide in the face of the economic barriers that are being erected in free trade. This company is a means of preserving and following that belief albeit challenged at every possibility.
</p>
</div>
<div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">Our Mission</h3>
<p className="text-gray-600 leading-relaxed font-sans">
At The Cellar Guild, we're dedicated to bringing moments of joy and tranquility into people's lives through our carefully curated collection of games, puzzles, and books. We believe that taking time to engage in meaningful activities can create lasting memories and provide a peaceful escape from the daily hustle. Our mission is to help people discover treasured items that bring enrichment and enjoyment to their quiet moments of reflection.
</p>
</div>
<div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">Looking Forward</h3>
<p className="text-gray-600 leading-relaxed font-sans">
The goal is to sell products to enhance the quality of our customers lives as they explore new hobbies and enhance their existing ones. We believe in the power of leisure activities to bring joy, relaxation, and personal growth to everyone's daily life. Through our carefully selected collection, we aim to inspire and support our customers in their journey of discovery and enjoyment.
</p>
</div>
</div>
</div>
</div>
</section>
{/* Company Values */}
<section className="py-16 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">Our Core Values</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Value 1 */}
<div className="text-center p-6 transition duration-300 hover:transform hover:scale-105">
<div className="bg-amber-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
<i className="fas fa-award text-2xl text-amber-600"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">Quality</h3>
<p className="text-gray-600">We carefully curate premium products that meet our high standards of craftsmanship and design.</p>
</div>
{/* Value 2 */}
<div className="text-center p-6 transition duration-300 hover:transform hover:scale-105">
<div className="bg-amber-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
<i className="fas fa-tags text-2xl text-amber-600"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">Affordability</h3>
<p className="text-gray-600">We strive to offer fair prices while maintaining the exceptional quality of our collection.</p>
</div>
{/* Value 3 */}
<div className="text-center p-6 transition duration-300 hover:transform hover:scale-105">
<div className="bg-amber-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
<i className="fas fa-hand-holding-heart text-2xl text-amber-600"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">Ease</h3>
<p className="text-gray-600">We make your shopping experience simple and enjoyable from browsing to delivery.</p>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-8 bg-indigo-600 text-white">
<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<i className="fas fa-envelope text-xl mt-1"></i>
<div>
<h4 className="font-medium">Email</h4>
<p className="mt-1">hello@archway.com</p>
</div>
</div>
<div className="flex items-start space-x-4">
<i className="fas fa-phone text-xl mt-1"></i>
<div>
<h4 className="font-medium">Phone</h4>
<p className="mt-1">+1 (415) 555-0123</p>
</div>
</div>
</div>
<div className="mt-10">
<h4 className="font-medium mb-4">Follow Us</h4>
<div className="flex space-x-4">
<a href="#" className="bg-indigo-500 hover:bg-indigo-400 h-10 w-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="bg-indigo-500 hover:bg-indigo-400 h-10 w-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="bg-indigo-500 hover:bg-indigo-400 h-10 w-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
</div>
</div>
</div>
<div className="p-8">
<form>
<div className="mb-6">
<label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
placeholder="Your name"
/>
</div>
<div className="mb-6">
<label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
<input
type="email"
id="email"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
placeholder="Your email"
/>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
<textarea
id="message"
rows={4}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
placeholder="Your message"
></textarea>
</div>
<button
type="submit"
className="bg-amber-700 text-white px-6 py-3 rounded-sm hover:bg-amber-800 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
>
Send Message
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-100 text-gray-800 py-16">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center space-x-3 mb-6">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/69205f12460fbd77ae2f13c10e3ec2ef.png" alt="The Cellar Guild Logo" className="h-10 w-10" />
<h3 className="text-2xl font-bold font-serif text-gray-800">THE CELLAR GUILD</h3>
</div>
<p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">Curating extraordinary collections of games, puzzles, and literature to inspire imagination and create lasting memories.</p>
<div className="flex space-x-6">
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">
<i className="fab fa-facebook-f text-xl"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">
<i className="fab fa-pinterest text-xl"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-bold font-serif mb-6 text-gray-900 tracking-wide">Explore</h4>
<ul className="space-y-4">
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">New Arrivals</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Best Sellers</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Gift Cards</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Membership</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold font-serif mb-6 text-gray-900">Support</h4>
<ul className="space-y-4">
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Contact Us</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Shipping Info</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">Returns</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 block">FAQ</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-600 text-sm font-sans">© 2025 The Cellar Guild. All rights reserved.</p>
<div className="mt-6 md:mt-0 flex items-center space-x-6">
<div className="flex items-center space-x-4 text-gray-600">
<i className="fab fa-cc-visa text-2xl hover:text-amber-700 transition-colors duration-300"></i>
<i className="fab fa-cc-mastercard text-2xl hover:text-amber-700 transition-colors duration-300"></i>
<i className="fab fa-cc-amex text-2xl hover:text-amber-700 transition-colors duration-300"></i>
<i className="fab fa-cc-paypal text-2xl hover:text-amber-700 transition-colors duration-300"></i>
</div>
</div>
</div>
</div>
</footer>
</div>
);
}
export default App
