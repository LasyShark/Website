// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('All');
const [sortBy, setSortBy] = useState('featured');
const [priceRange, setPriceRange] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
const categories = ['All', 'Craft Materials', 'Games', 'Puzzles', 'Books'];
const sortOptions = [
{ value: 'featured', label: 'Featured' },
{ value: 'newest', label: 'Newest' },
{ value: 'price-low', label: 'Price: Low to High' },
{ value: 'price-high', label: 'Price: High to Low' },
];
const collections = [
{
id: 1,
title: "Nordic Crafting Essentials",
description: "Traditional craft materials inspired by Nordic heritage. Perfect for creating authentic handmade items.",
itemCount: 24,
category: "Craft Materials",
priceRange: "30-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20Nordic%20craft%20materials%20including%20wooden%20tools%2C%20natural%20yarns%2C%20and%20fabric%20swatches%20arranged%20aesthetically%20on%20a%20light%20wooden%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20showcasing%20traditional%20crafting%20elements%20with%20neutral%20color%20palette&width=600&height=400&seq=col1&orientation=landscape"
},
{
id: 2,
title: "Viking Strategy Games",
description: "Strategic board games based on ancient Nordic traditions. Challenge your tactical thinking with these classic games.",
itemCount: 12,
category: "Games",
priceRange: "over-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20wooden%20Viking%20strategy%20board%20games%20with%20carved%20pieces%20and%20rune%20patterns%20displayed%20on%20a%20rustic%20wooden%20table%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20featuring%20traditional%20Nordic%20game%20designs%20with%20neutral%20color%20palette&width=600&height=400&seq=col2&orientation=landscape"
},
{
id: 3,
title: "Natural Dye Collection",
description: "Sustainably sourced natural dyes for textile crafts. Create beautiful colors using traditional Nordic methods.",
itemCount: 18,
category: "Craft Materials",
priceRange: "30-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20natural%20dye%20materials%20in%20glass%20jars%20with%20dried%20plants%2C%20powders%2C%20and%20dyed%20fabric%20samples%20arranged%20on%20a%20light%20wooden%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20showcasing%20earthy%20tones%20and%20sustainable%20craft%20supplies%20with%20neutral%20color%20palette&width=600&height=400&seq=col3&orientation=landscape"
},
{
id: 4,
title: "Nordic Folklore Library",
description: "Illustrated books featuring tales and legends from Nordic tradition. Perfect for cozy reading sessions.",
itemCount: 15,
category: "Books",
priceRange: "under-30",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20leather-bound%20books%20with%20Nordic%20folklore%20illustrations%20and%20rune%20patterns%20arranged%20on%20a%20wooden%20bookshelf%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20featuring%20traditional%20storytelling%20volumes%20with%20neutral%20color%20palette&width=600&height=400&seq=col4&orientation=landscape"
},
{
id: 5,
title: "Geometric Wooden Puzzles",
description: "Intricately designed wooden puzzles based on Nordic geometric patterns. Test your spatial reasoning skills.",
itemCount: 20,
category: "Puzzles",
priceRange: "30-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20geometric%20wooden%20puzzles%20with%20Nordic-inspired%20patterns%20arranged%20on%20a%20light%20wooden%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20showcasing%20interlocking%20designs%20and%20natural%20wood%20tones%20with%20neutral%20color%20palette&width=600&height=400&seq=col5&orientation=landscape"
},
{
id: 6,
title: "Textile Craft Kits",
description: "Complete kits for creating beautiful textile crafts using traditional Nordic techniques and patterns.",
itemCount: 16,
category: "Craft Materials",
priceRange: "over-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20textile%20craft%20kits%20with%20natural%20yarns%2C%20wooden%20tools%2C%20and%20pattern%20instructions%20arranged%20on%20a%20light%20linen%20cloth%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20featuring%20traditional%20Nordic%20weaving%20and%20embroidery%20supplies%20with%20neutral%20color%20palette&width=600&height=400&seq=col6&orientation=landscape"
},
{
id: 7,
title: "Family Game Night",
description: "Fun and engaging games perfect for gathering the family around the table. Nordic-inspired designs for all ages.",
itemCount: 14,
category: "Games",
priceRange: "30-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20family-friendly%20Nordic%20board%20games%20with%20wooden%20pieces%20and%20natural%20materials%20arranged%20on%20a%20cozy%20wooden%20table%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20showcasing%20games%20suitable%20for%20all%20ages%20with%20neutral%20color%20palette&width=600&height=400&seq=col7&orientation=landscape"
},
{
id: 8,
title: "Craft Technique Guides",
description: "Detailed instructional books on mastering traditional Nordic craft techniques from beginner to advanced.",
itemCount: 10,
category: "Books",
priceRange: "under-30",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20craft%20technique%20books%20with%20detailed%20illustrations%20and%20step-by-step%20instructions%20arranged%20on%20a%20wooden%20desk%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20featuring%20guides%20for%20traditional%20Nordic%20crafting%20methods%20with%20neutral%20color%20palette&width=600&height=400&seq=col8&orientation=landscape"
},
{
id: 9,
title: "Mind-Bending Puzzles",
description: "Challenging puzzles that will test your problem-solving abilities. Beautiful Nordic-inspired designs.",
itemCount: 18,
category: "Puzzles",
priceRange: "over-50",
image: "https://readdy.ai/api/search-image?query=Collection%20of%20complex%20wooden%20puzzles%20with%20intricate%20Nordic%20designs%20and%20patterns%20arranged%20on%20a%20light%20wooden%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling%2C%20showcasing%20challenging%20brain%20teasers%20with%20neutral%20color%20palette&width=600&height=400&seq=col9&orientation=landscape"
}
];
const filteredCollections = collections
.filter(collection =>
(selectedCategory === 'All' || collection.category === selectedCategory) &&
(priceRange === 'all' || collection.priceRange === priceRange) &&
collection.title.toLowerCase().includes(searchQuery.toLowerCase())
)
.sort((a, b) => {
switch (sortBy) {
case 'price-low':
return a.priceRange === 'under-30' ? -1 : a.priceRange === 'over-50' ? 1 : 0;
case 'price-high':
return a.priceRange === 'over-50' ? -1 : a.priceRange === 'under-30' ? 1 : 0;
case 'newest':
return b.id - a.id;
default:
return 0;
}
});
return (
<div className="min-h-screen bg-white">
{/* Header with Navigation */}
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="py-4">
<nav className="flex items-center text-sm font-sans font-medium text-gray-800 tracking-wide">
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9"
data-readdy="true"
className="hover:text-amber-700 cursor-pointer"
>
Home
</a>
<span className="mx-2">/</span>
<span className="text-gray-800">Collections</span>
</nav>
</div>
<div className="flex justify-center items-center py-4 space-x-2">
<img
src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png"
alt="The Cellar Guild Logo"
className="h-8 w-8"
/>
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9"
data-readdy="true"
className="text-3xl font-serif font-bold text-gray-800 cursor-pointer tracking-wide"
>
THE CELLAR GUILD
</a>
</div>
</div>
</header>
{/* Collections Header */}
<div className="bg-gray-50 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-serif font-bold text-center mb-4 tracking-wide text-gray-800">THE CELLAR GUILD COLLECTIONS</h1>
<p className="text-gray-600 text-center max-w-2xl mx-auto font-sans text-base">
Explore our curated selection of Nordic-inspired craft materials, games, puzzles, and books.
Each collection is thoughtfully designed to bring the essence of Nordic craftsmanship into your home.
</p>
</div>
</div>
{/* Collections Content */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row gap-8">
{/* Filters Sidebar */}
<div className="lg:w-1/4">
<div className="bg-gray-50 p-6 rounded-sm sticky top-24">
<div className="mb-8">
<h3 className="font-serif text-xl mb-4 text-gray-800">Search</h3>
<div className="relative">
<input
type="text"
placeholder="Search collections..."
className="w-full px-4 py-2 border-2 border-gray-200 rounded-sm focus:border-amber-700 outline-none text-sm"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
</div>
</div>
<div className="mb-8">
<h3 className="font-serif text-xl mb-4 text-gray-800">Categories</h3>
<div className="space-y-2">
{categories.map((category) => (
<button
key={category}
onClick={() => setSelectedCategory(category)}
className={`block w-full text-left px-4 py-2 rounded-sm transition-colors duration-200 ${
selectedCategory === category
? 'bg-amber-700 text-white'
: 'hover:bg-gray-100'
} cursor-pointer !rounded-button whitespace-nowrap`}
>
{category}
</button>
))}
</div>
</div>
<div className="mb-8">
<h3 className="font-serif text-xl mb-4 text-gray-800">Price Range</h3>
<div className="space-y-2">
{[
{ value: 'all', label: 'All Prices' },
{ value: 'under-30', label: 'Under $30' },
{ value: '30-50', label: '$30 - $50' },
{ value: 'over-50', label: 'Over $50' },
].map((range) => (
<button
key={range.value}
onClick={() => setPriceRange(range.value)}
className={`block w-full text-left px-4 py-2 rounded-sm transition-colors duration-200 ${
priceRange === range.value
? 'bg-amber-700 text-white'
: 'hover:bg-gray-100'
} cursor-pointer !rounded-button whitespace-nowrap`}
>
{range.label}
</button>
))}
</div>
</div>
</div>
</div>
{/* Collections Grid */}
<div className="lg:w-3/4">
<div className="flex justify-between items-center mb-8">
<p className="text-gray-600">
Showing {filteredCollections.length} collections
</p>
<div className="relative">
<select
value={sortBy}
onChange={(e) => setSortBy(e.target.value)}
className="appearance-none bg-white border-2 border-gray-200 rounded-sm px-4 py-2 pr-8 focus:border-amber-700 outline-none cursor-pointer text-sm"
>
{sortOptions.map((option) => (
<option key={option.value} value={option.value}>
{option.label}
</option>
))}
</select>
<i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-sm"></i>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredCollections.map((collection) => (
<div key={collection.id} className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="relative overflow-hidden h-48">
<img
src={collection.image}
alt={collection.title}
className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>
</div>
<div className="p-6">
<h3 className="text-xl font-sans font-medium mb-2 text-gray-800">{collection.title}</h3>
<p className="text-gray-600 text-sm mb-4 line-clamp-2">{collection.description}</p>
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-gray-500">{collection.itemCount} items</span>
<span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">{collection.category}</span>
</div>
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9"
data-readdy="true"
className="block w-full text-center bg-amber-700 text-white px-6 py-2 rounded-sm hover:bg-amber-800 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Shop Now
</a>
</div>
</div>
))}
</div>
{filteredCollections.length === 0 && (
<div className="text-center py-16">
<i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
<h3 className="text-xl font-medium text-gray-800 mb-2">No collections found</h3>
<p className="text-gray-600">Try adjusting your search or filter criteria</p>
</div>
)}
</div>
</div>
</div>
{/* Footer */}
<footer className="bg-gray-50 py-12 mt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between">
<div className="mb-8 md:mb-0">
<h3 className="text-3xl font-serif font-bold text-gray-800 mb-4 tracking-wide">THE CELLAR GUILD</h3>
<p className="text-gray-600 max-w-xs">
Curating Nordic-inspired craft materials, games, puzzles, and books for your creative journey.
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="font-serif text-lg text-gray-800 mb-4">Shop</h4>
<ul className="space-y-2 text-gray-600">
<li><a href="#" className="hover:text-amber-700 cursor-pointer">All Collections</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Craft Materials</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Games</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Puzzles</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Books</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg text-gray-800 mb-4">About</h4>
<ul className="space-y-2 text-gray-600">
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Our Story</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Sustainability</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Craftsmanship</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg text-gray-800 mb-4">Customer Service</h4>
<ul className="space-y-2 text-gray-600">
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Contact Us</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">Shipping & Returns</a></li>
<li><a href="#" className="hover:text-amber-700 cursor-pointer">FAQ</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 text-sm mb-4 md:mb-0">
© {new Date().getFullYear()} The Cellar Guild. All rights reserved.
</p>
<div className="flex space-x-6">
<a href="#" className="text-gray-400 hover:text-amber-700 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-700 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-700 cursor-pointer">
<i className="fab fa-pinterest-p"></i>
</a>
<a href="#" className="text-gray-400 hover:text-amber-700 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App
