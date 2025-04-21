// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [email, setEmail] = useState('');
const [selectedLanguage, setSelectedLanguage] = useState('English');
const toggleCart = () => {
setIsCartOpen(!isCartOpen);
};
const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};
const handleSubscribe = (e: React.FormEvent) => {
e.preventDefault();
// Handle subscription logic here
alert(`Thank you for subscribing with ${email}!`);
setEmail('');
};
return (
<div className="min-h-screen bg-white text-gray-800 font-sans">
{/* Header */}
<header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="lg:hidden">
<button
onClick={toggleMenu}
className="text-gray-700 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-bars text-xl"></i>
</button>
</div>
<nav className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} lg:static lg:shadow-none lg:p-0 lg:bg-transparent`}>
<a href="#shop" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">Shop</a>
<a href="#about" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">About</a>
<a href="#contact" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">Contact</a>
</nav>
<div className="flex items-center justify-center flex-grow lg:flex-grow-0">
<a href="#" className="flex items-center space-x-2 cursor-pointer">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="h-10 w-auto" />
<span className="text-2xl font-bold tracking-wider font-serif">THE CELLAR GUILD</span>
</a>
</div>
<div className="flex items-center space-x-4">
<div className="relative group" onMouseLeave={() => setIsMenuOpen(false)}>
<button
className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 !rounded-button whitespace-nowrap"
onMouseEnter={() => setIsMenuOpen(true)}
>
<i className="fas fa-globe text-xl"></i>
<i className="fas fa-chevron-down text-xs"></i>
</button>
<div
className={`absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-sm transition-opacity duration-200 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
onMouseEnter={() => setIsMenuOpen(true)}
>
<div className="py-2">
<button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">English</button>
<button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Français</button>
<button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Deutsch</button>
<button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Español</button>
<button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">Italiano</button>
</div>
</div>
</div>
<button
onClick={toggleCart}
className="relative text-gray-700 hover:text-gray-900 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-shopping-cart text-xl"></i>
<span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
</button>
</div>
</div>
</header>
{/* Hero Section */}
<section className="relative h-[600px] overflow-hidden">
<div className="absolute inset-0">
<img
src="https://readdy.ai/api/search-image?query=A%20cozy%20and%20warm%20Nordic%20interior%20scene%20with%20wooden%20furniture%2C%20soft%20textiles%2C%20glowing%20candles%2C%20and%20handcrafted%20items%20arranged%20beautifully.%20Natural%20sunlight%20streams%20through%20large%20windows%2C%20creating%20a%20welcoming%20atmosphere%20with%20warm%20earth%20tones%20and%20textures&width=1440&height=600&seq=hero1&orientation=landscape"
alt="Cozy Nordic interior"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
<h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 max-w-xl text-white tracking-wide" style={{
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
letterSpacing: '0.02em',
WebkitTextStroke: '1px black',
backgroundColor: 'rgba(0, 0, 0, 0.3)',
padding: '1rem',
borderRadius: '4px',
backdropFilter: 'blur(2px)'
}}>
Bring Magic Into Your Life
</h1>
<p className="text-xl text-white mb-8 max-w-xl" style={{
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
backgroundColor: 'rgba(0, 0, 0, 0.3)',
padding: '1rem',
borderRadius: '4px',
backdropFilter: 'blur(2px)'
}}>
Curated collections of hobbyist materials, games, puzzles, and more.
</p>
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/287e47b7-a076-4abc-b388-0637065c71f9" data-readdy="true">
<button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-sm transition-all duration-300 inline-block w-max cursor-pointer !rounded-button whitespace-nowrap">
Explore Collections
</button>
</a>
</div>
</section>
{/* Category Navigation */}
<section className="py-16 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif font-bold text-center mb-12">Browse Categories</h2>
<div className="relative">
<button
className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-3 rounded-sm !rounded-button whitespace-nowrap"
onClick={() => document.getElementById('categories-container')?.scrollBy(-300, 0)}
>
<i className="fas fa-chevron-left text-gray-800"></i>
</button>
<button
className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg p-3 rounded-sm !rounded-button whitespace-nowrap"
onClick={() => document.getElementById('categories-container')?.scrollBy(300, 0)}
>
<i className="fas fa-chevron-right text-gray-800"></i>
</button>
<div
id="categories-container"
className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 py-4 px-2"
style={{ scrollBehavior: 'smooth' }}
>
{[
{
name: "Craft Materials",
image: "https://readdy.ai/api/search-image?query=Artisanal%20craft%20materials%20including%20yarns%2C%20natural%20dyes%2C%20wooden%20tools%2C%20and%20handmade%20papers%20arranged%20in%20a%20Nordic%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat1&orientation=squarish",
icon: "fas fa-paint-brush"
},
{
name: "Games",
image: "https://readdy.ai/api/search-image?query=Traditional%20wooden%20board%20games%20with%20rune-inspired%20designs%2C%20dice%2C%20and%20game%20pieces%20arranged%20in%20a%20Nordic%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat2&orientation=squarish",
icon: "fas fa-chess-board"
},
{
name: "Puzzles",
image: "https://readdy.ai/api/search-image?query=Wooden%20puzzles%20with%20Nordic%20patterns%20and%20intricate%20designs%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat3&orientation=squarish",
icon: "fas fa-puzzle-piece"
},
{
name: "Books",
image: "https://readdy.ai/api/search-image?query=Leather-bound%20books%20with%20Nordic%20designs%20and%20rune%20patterns%20stacked%20artfully%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat4&orientation=squarish",
icon: "fas fa-book"
},
{
name: "Candles & Incense",
image: "https://readdy.ai/api/search-image?query=Handcrafted%20natural%20candles%20and%20incense%20with%20Nordic%20inspired%20packaging%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat5&orientation=squarish",
icon: "fas fa-fire"
},
{
name: "Textile Arts",
image: "https://readdy.ai/api/search-image?query=Traditional%20Nordic%20textile%20arts%20materials%20including%20looms%2C%20yarns%2C%20and%20woven%20pieces%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat6&orientation=squarish",
icon: "fas fa-scroll"
},
{
name: "Divination Tools",
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20divination%20tools%20with%20Nordic%20runes%20and%20symbols%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat7&orientation=squarish",
icon: "fas fa-moon"
},
{
name: "Herbal Crafts",
image: "https://readdy.ai/api/search-image?query=Nordic%20herbal%20crafting%20supplies%20with%20dried%20herbs%2C%20glass%20jars%2C%20and%20botanical%20elements%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=300&height=300&seq=cat8&orientation=squarish",
icon: "fas fa-leaf"
}
].map((category, index) => (
<div key={index} className="group relative overflow-hidden h-80 w-72 flex-shrink-0 snap-start cursor-pointer">
<div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
<img
src={category.image}
alt={category.name}
className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>
<div className="absolute inset-0 flex flex-col items-center justify-center z-20">
<div className="bg-white bg-opacity-90 p-4 rounded-sm transform transition-transform duration-300 group-hover:scale-110">
<i className={`${category.icon} text-2xl text-amber-700 mb-2`}></i>
<h3 className="text-xl font-serif font-medium text-gray-800">{category.name}</h3>
</div>
</div>
</div>
))}
</div>
</div>
<style>
{`
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}
`}
</style>
</section>
{/* Featured Products Grid */}
<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Products</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
name: "Handcrafted Wooden Rune Set",
price: "$45.00",
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20rune%20set%20with%20carved%20symbols%20arranged%20on%20natural%20linen%20cloth%20in%20a%20Nordic%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod1&orientation=squarish"
},
{
name: "Nordic Strategy Board Game",
price: "$65.00",
image: "https://readdy.ai/api/search-image?query=Wooden%20Nordic%20strategy%20board%20game%20with%20carved%20pieces%20on%20a%20wooden%20board%20with%20rune%20patterns%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod2&orientation=squarish"
},
{
name: "Natural Dye Crafting Kit",
price: "$38.00",
image: "https://readdy.ai/api/search-image?query=Natural%20dye%20crafting%20kit%20with%20plant-based%20dyes%20in%20glass%20jars%2C%20wooden%20tools%2C%20and%20linen%20samples%20in%20a%20Nordic%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod3&orientation=squarish"
},
{
name: "Illustrated Book of Nordic Folklore",
price: "$29.00",
image: "https://readdy.ai/api/search-image?query=Leather-bound%20book%20with%20Nordic%20folklore%20illustrations%20and%20rune%20patterns%20on%20the%20cover%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod4&orientation=squarish"
},
{
name: "Wooden Interlocking Puzzle",
price: "$32.00",
image: "https://readdy.ai/api/search-image?query=Wooden%20interlocking%20puzzle%20with%20Nordic-inspired%20geometric%20patterns%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod5&orientation=squarish"
},
{
name: "Handwoven Wool Wall Hanging Kit",
price: "$58.00",
image: "https://readdy.ai/api/search-image?query=Handwoven%20wool%20wall%20hanging%20kit%20with%20natural%20yarns%2C%20wooden%20loom%2C%20and%20pattern%20instructions%20in%20a%20Nordic%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=400&seq=prod6&orientation=squarish"
}
].map((product, index) => (
<div key={index} className="bg-white rounded-sm shadow-md overflow-hidden group cursor-pointer">
<div className="relative overflow-hidden h-[300px]">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-gray-800 px-4 py-2 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer !rounded-button whitespace-nowrap">
Quick View
</button>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
<p className="text-amber-700 font-medium">{product.price}</p>
</div>
</div>
))}
</div>
<div className="text-center mt-12">
<button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-sm transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
View All Products
</button>
</div>
</div>
</section>
{/* Collection Highlights */}
<section className="py-16 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif font-bold text-center mb-12">Collection Highlights</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{
name: "Nordic Crafting",
image: "https://readdy.ai/api/search-image?query=Nordic%20crafting%20materials%20including%20yarns%2C%20wooden%20tools%2C%20and%20natural%20materials%20arranged%20artfully%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=500&seq=coll1&orientation=portrait"
},
{
name: "Strategy Games",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20wooden%20strategy%20games%20with%20Nordic%20designs%20and%20rune%20patterns%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=500&seq=coll2&orientation=portrait"
},
{
name: "Folk Magic Books",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20leather-bound%20books%20about%20folk%20magic%20with%20Nordic%20designs%20and%20rune%20patterns%20arranged%20in%20a%20minimalist%20style%20with%20soft%20natural%20lighting%20and%20neutral%20background&width=400&height=500&seq=coll3&orientation=portrait"
}
].map((collection, index) => (
<div key={index} className="relative h-96 overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
<img
src={collection.image}
alt={collection.name}
className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="text-center">
<h3 className="text-2xl font-serif font-bold text-white mb-4">{collection.name}</h3>
<button className="bg-white text-gray-800 px-6 py-2 rounded-sm hover:bg-amber-700 hover:text-white transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
Explore
</button>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
))}
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-gray-50">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="flex justify-center mb-6">
<div className="w-16 h-1 bg-amber-700"></div>
</div>
<h2 className="text-3xl font-serif font-bold mb-4">Join The Guild</h2>
<p className="text-gray-600 mb-8">Subscribe to receive updates on new collections, special offers, and Nordic crafting inspiration.</p>
<form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
<input
type="email"
placeholder="Your email address"
className="px-4 py-3 border-2 border-gray-300 focus:border-amber-700 outline-none rounded-sm flex-grow text-sm"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<button
type="submit"
className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-sm transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Subscribe
</button>
</form>
<p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from The Cellar Guild.</p>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div>
<h3 className="text-lg font-serif font-bold mb-4">The Cellar Guild</h3>
<p className="text-gray-600 mb-4">Thoughtfully curated collections designed to enhance your hobbies and creative pursuits with artisanal materials.</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">
<i className="fab fa-facebook text-xl"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">
<i className="fab fa-pinterest text-xl"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">About Us</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/1d23e54f-6ed3-409c-934a-f225112abd17" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Shop All</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/c95282db-d467-43b5-b2d3-e44e5582cc9d" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/f1c8e795-3496-4f17-a960-a50ea09176fc" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-serif font-bold mb-4">Contact</h3>
<ul className="space-y-2">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-2 text-amber-700"></i>
<span className="text-gray-600">123 Craft Lane, Artisan District, Nordic City</span>
</li>
<li className="flex items-start">
<i className="fas fa-envelope mt-1 mr-2 text-amber-700"></i>
<span className="text-gray-600">hello@cellarguild.com</span>
</li>
<li className="flex items-start">
<i className="fas fa-phone mt-1 mr-2 text-amber-700"></i>
<span className="text-gray-600">+1 (234) 567-8910</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-gray-500 mb-4 md:mb-0">© 2025 The Cellar Guild. All rights reserved.</p>
<div className="flex space-x-4">
<a href="#" className="text-sm text-gray-500 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-sm text-gray-500 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
);
}
export default App
