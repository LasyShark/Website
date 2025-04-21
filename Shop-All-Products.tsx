// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [products, setProducts] = useState([
{
id: 1,
name: "Handcrafted Wooden Rune Set",
price: 39.99,
category: "divination",
rating: 4.8,
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20rune%20set%20with%20ancient%20symbols%20carved%20into%20natural%20oak%20pieces%20arranged%20on%20neutral%20beige%20linen%20cloth%20background%20with%20soft%20shadows%20professional%20product%20photography%20with%20natural%20lighting%20high%20quality%20detailed%20craftsmanship&width=400&height=400&seq=1&orientation=squarish"
},
{
id: 2,
name: "Mystic Puzzle Box",
price: 54.99,
category: "games",
rating: 4.5,
image: "https://readdy.ai/api/search-image?query=Intricate%20wooden%20puzzle%20box%20with%20mystical%20symbols%20and%20runes%20carved%20into%20dark%20walnut%20wood%20photographed%20on%20neutral%20beige%20background%20with%20soft%20shadows%20high-end%20product%20photography%20with%20natural%20lighting%20detailed%20craftsmanship&width=400&height=400&seq=2&orientation=squarish"
},
{
id: 3,
name: "Arcane Candle Set",
price: 28.50,
category: "home",
rating: 4.7,
image: "https://readdy.ai/api/search-image?query=Set%20of%20three%20handmade%20beeswax%20candles%20in%20earth%20tones%20with%20carved%20rune%20symbols%20arranged%20on%20a%20natural%20linen%20cloth%20with%20dried%20herbs%20professional%20product%20photography%20with%20soft%20natural%20lighting%20and%20neutral%20beige%20background&width=400&height=400&seq=3&orientation=squarish"
},
{
id: 4,
name: "Elder Futhark Guide Book",
price: 24.99,
category: "books",
rating: 4.9,
image: "https://readdy.ai/api/search-image?query=Hardcover%20book%20with%20ancient%20runic%20symbols%20embossed%20on%20leather%20cover%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography%20showing%20texture%20and%20details&width=400&height=400&seq=4&orientation=squarish"
},
{
id: 5,
name: "Handwoven Altar Cloth",
price: 32.50,
category: "ritual",
rating: 4.6,
image: "https://readdy.ai/api/search-image?query=Handwoven%20natural%20linen%20altar%20cloth%20with%20subtle%20embroidered%20runic%20symbols%20along%20the%20edges%20folded%20neatly%20on%20neutral%20beige%20background%20professional%20product%20photography%20with%20soft%20natural%20lighting&width=400&height=400&seq=5&orientation=squarish"
},
{
id: 6,
name: "Crystal Divination Set",
price: 48.75,
category: "divination",
rating: 4.8,
image: "https://readdy.ai/api/search-image?query=Set%20of%20clear%20quartz%20and%20amethyst%20crystals%20arranged%20in%20a%20wooden%20box%20with%20divination%20guide%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=6&orientation=squarish"
},
{
id: 7,
name: "Handcrafted Wooden Wand",
price: 36.99,
category: "ritual",
rating: 4.7,
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20wand%20made%20from%20polished%20oak%20with%20carved%20runes%20and%20crystal%20inlay%20at%20the%20handle%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=7&orientation=squarish"
},
{
id: 8,
name: "Leather-bound Journal",
price: 29.95,
category: "stationery",
rating: 4.6,
image: "https://readdy.ai/api/search-image?query=Handmade%20leather-bound%20journal%20with%20embossed%20runic%20symbols%20on%20the%20cover%20and%20aged%20parchment%20pages%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=8&orientation=squarish"
},
{
id: 9,
name: "Nordic Tarot Deck",
price: 42.99,
category: "divination",
rating: 4.9,
image: "https://readdy.ai/api/search-image?query=Beautiful%20tarot%20deck%20with%20Nordic%20and%20runic%20artwork%20printed%20on%20high%20quality%20cards%20displayed%20in%20a%20fan%20arrangement%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=9&orientation=squarish"
},
{
id: 10,
name: "Handmade Ceramic Incense Holder",
price: 19.95,
category: "home",
rating: 4.5,
image: "https://readdy.ai/api/search-image?query=Handmade%20ceramic%20incense%20holder%20with%20carved%20Nordic%20symbols%20in%20earthy%20tones%20with%20subtle%20glaze%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=10&orientation=squarish"
},
{
id: 11,
name: "Viking Strategy Board Game",
price: 59.99,
category: "games",
rating: 4.8,
image: "https://readdy.ai/api/search-image?query=Wooden%20Viking%20strategy%20board%20game%20with%20carved%20pieces%20and%20board%20featuring%20runic%20symbols%20and%20Nordic%20artwork%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=11&orientation=squarish"
},
{
id: 12,
name: "Handcrafted Mead Making Kit",
price: 68.50,
category: "craft",
rating: 4.7,
image: "https://readdy.ai/api/search-image?query=Complete%20mead%20making%20kit%20with%20glass%20carboy%20wooden%20honey%20dipper%20and%20ingredients%20in%20a%20wooden%20box%20with%20Nordic%20carvings%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%20professional%20product%20photography&width=400&height=400&seq=12&orientation=squarish"
}
]);
const [filteredProducts, setFilteredProducts] = useState(products);
const [priceRange, setPriceRange] = useState([0, 100]);
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
const [sortOption, setSortOption] = useState('featured');
const [showSortDropdown, setShowSortDropdown] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [searchQuery, setSearchQuery] = useState('');
const [cartCount, setCartCount] = useState(0);
const [showFilters, setShowFilters] = useState(false);
const productsPerPage = 8;
const categories = [
{ id: 'divination', name: 'Divination Tools', icon: 'fa-solid fa-moon' },
{ id: 'ritual', name: 'Ritual Supplies', icon: 'fa-solid fa-fire' },
{ id: 'books', name: 'Books & Guides', icon: 'fa-solid fa-book' },
{ id: 'games', name: 'Games & Puzzles', icon: 'fa-solid fa-chess' },
{ id: 'home', name: 'Home & Decor', icon: 'fa-solid fa-home' },
{ id: 'stationery', name: 'Stationery', icon: 'fa-solid fa-pen-fancy' },
{ id: 'craft', name: 'Craft Supplies', icon: 'fa-solid fa-paint-brush' }
];
useEffect(() => {
let result = [...products];
// Filter by search query
if (searchQuery) {
result = result.filter(product =>
product.name.toLowerCase().includes(searchQuery.toLowerCase())
);
}
// Filter by categories
if (selectedCategories.length > 0) {
result = result.filter(product =>
selectedCategories.includes(product.category)
);
}
// Filter by price range
result = result.filter(product =>
product.price >= priceRange[0] && product.price <= priceRange[1]
);
// Sort products
switch(sortOption) {
case 'price-low-high':
result.sort((a, b) => a.price - b.price);
break;
case 'price-high-low':
result.sort((a, b) => b.price - a.price);
break;
case 'rating':
result.sort((a, b) => b.rating - a.rating);
break;
case 'name-a-z':
result.sort((a, b) => a.name.localeCompare(b.name));
break;
case 'name-z-a':
result.sort((a, b) => b.name.localeCompare(a.name));
break;
default: // featured or any other option
// Keep original order
break;
}
setFilteredProducts(result);
setCurrentPage(1); // Reset to first page when filters change
}, [products, selectedCategories, priceRange, sortOption, searchQuery]);
// Get current products for pagination
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
const handleCategoryChange = (categoryId: string) => {
if (selectedCategories.includes(categoryId)) {
setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
} else {
setSelectedCategories([...selectedCategories, categoryId]);
}
};
const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
const newRange = [...priceRange];
newRange[index] = Number(event.target.value);
setPriceRange(newRange);
};
const [showToast, setShowToast] = useState(false);
const [toastProduct, setToastProduct] = useState<any>(null);
const handleAddToCart = (product: any) => {
setCartCount(cartCount + 1);
setToastProduct(product);
setShowToast(true);
// Auto-hide toast after 3 seconds
setTimeout(() => {
setShowToast(false);
}, 3000);
};
const handlePageChange = (page: number) => {
setCurrentPage(page);
window.scrollTo({ top: 0, behavior: 'smooth' });
};
const clearFilters = () => {
setSelectedCategories([]);
setPriceRange([0, 100]);
setSortOption('featured');
setSearchQuery('');
};
return (
<div className="min-h-screen bg-white font-sans">
{/* Toast Notification */}
{showToast && toastProduct && (
<div
className="fixed top-4 right-4 bg-white rounded-lg shadow-xl z-50 w-80 transform transition-all duration-300 ease-in-out"
style={{
animation: 'slideIn 0.3s ease-out'
}}
>
<div className="p-4">
<div className="flex items-start">
<img
src={toastProduct.image}
alt={toastProduct.name}
className="w-16 h-16 object-cover rounded-md"
/>
<div className="ml-3 flex-1">
<p className="text-sm font-medium text-gray-900">Added to Cart!</p>
<p className="mt-1 text-sm text-gray-500 truncate">{toastProduct.name}</p>
<p className="mt-1 text-sm font-medium text-gray-900">${toastProduct.price.toFixed(2)}</p>
</div>
<button
onClick={() => setShowToast(false)}
className="ml-4 text-gray-400 hover:text-gray-500"
>
<i className="fas fa-times"></i>
</button>
</div>
<div className="mt-4">
<button
onClick={() => {
// Handle view cart action
setShowToast(false);
}}
className="w-full bg-amber-800 text-white px-4 py-2 text-sm font-medium hover:bg-amber-900 transition-colors !rounded-button whitespace-nowrap"
>
View Cart
</button>
</div>
</div>
</div>
)}
<style>
{`
@keyframes slideIn {
from {
transform: translateX(100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}
`}
</style>
{/* Header */}
<header className="bg-white text-gray-800 py-4 px-6 shadow-md border-b border-gray-300">
<div className="container mx-auto flex items-center justify-between">
<nav className="flex items-center space-x-6">
<a href="#" className="text-sm font-medium tracking-wide hover:text-gray-600 cursor-pointer">Shop</a>
<a href="#" className="text-sm font-medium tracking-wide hover:text-gray-600 cursor-pointer">About</a>
</nav>
<div className="text-center flex items-center justify-center">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="h-8 mr-2" />
<h1 className="text-3xl font-serif font-bold tracking-[0.2em] text-gray-800">THE CELLAR GUILD</h1>
</div>
<div className="flex items-center space-x-4">
<a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Contact</a>
<div className="relative cursor-pointer">
<i className="fas fa-shopping-cart text-lg text-gray-700"></i>
<span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
{cartCount}
</span>
</div>
</div>
</div>
<div className="container mx-auto mt-2">
<div className="border-t border-gray-300"></div>
</div>
</header>
{/* Breadcrumbs */}
<div className="bg-white py-3">
<div className="container mx-auto px-4">
<div className="flex items-center text-sm text-gray-600">
<a href="#" className="hover:text-amber-700 cursor-pointer">Home</a>
<span className="mx-2">/</span>
<span className="text-gray-800 font-medium">Shop All</span>
</div>
</div>
</div>
<main className="container mx-auto py-8 px-4">
<div className="flex justify-between items-center mb-8">
<h1 className="text-4xl font-serif font-bold text-gray-800 tracking-wide">Shop All Products</h1>
{/* Mobile filter toggle */}
<button
onClick={() => setShowFilters(!showFilters)}
className="md:hidden px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-filter mr-2"></i>
Filters
</button>
</div>
<div className="flex flex-col md:flex-row gap-8">
{/* Sidebar Filters - Desktop */}
<div className={`md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-md p-6 h-fit sticky top-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-medium text-gray-800">Filters</h2>
<button
onClick={clearFilters}
className="text-amber-700 hover:text-amber-800 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap"
>
Clear All
</button>
</div>
{/* Categories */}
<div className="mb-6">
<h3 className="text-xl font-sans font-medium text-gray-800 mb-3">Categories</h3>
<div className="space-y-2">
{categories.map(category => (
<div
key={category.id}
onClick={() => handleCategoryChange(category.id)}
className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
selectedCategories.includes(category.id)
? 'bg-amber-50 text-amber-700'
: 'hover:bg-gray-50 text-gray-700'
}`}
>
<i className={`${category.icon} ${selectedCategories.includes(category.id) ? 'text-amber-800' : 'text-gray-500'} mr-3`}></i>
<span className="text-sm">{category.name}</span>
{selectedCategories.includes(category.id) && (
<i className="fas fa-check ml-auto text-amber-800"></i>
)}
</div>
))}
</div>
</div>
{/* Price Range */}
<div className="mb-6">
<h3 className="text-gray-800 font-medium mb-3">Price Range</h3>
<div className="space-y-4">
<div className="flex justify-between">
<span className="text-gray-600">${priceRange[0]}</span>
<span className="text-gray-600">${priceRange[1]}</span>
</div>
<div className="relative pt-1">
<input
type="range"
min="0"
max="100"
value={priceRange[0]}
onChange={(e) => handlePriceChange(e, 0)}
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
/>
<input
type="range"
min="0"
max="100"
value={priceRange[1]}
onChange={(e) => handlePriceChange(e, 1)}
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
/>
</div>
<div className="flex space-x-2">
<div className="flex-1">
<label htmlFor="min-price" className="sr-only">Minimum Price</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">$</span>
</div>
<input
type="number"
id="min-price"
value={priceRange[0]}
onChange={(e) => handlePriceChange(e, 0)}
className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-amber-800 focus:border-amber-800"
/>
</div>
</div>
<div className="flex-1">
<label htmlFor="max-price" className="sr-only">Maximum Price</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">$</span>
</div>
<input
type="number"
id="max-price"
value={priceRange[1]}
onChange={(e) => handlePriceChange(e, 1)}
className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-amber-800 focus:border-amber-800"
/>
</div>
</div>
</div>
</div>
</div>
{/* Ratings */}
<div className="mb-6">
<h3 className="text-gray-800 font-medium mb-3">Ratings</h3>
<div className="space-y-2">
{[5, 4, 3, 2, 1].map(rating => (
<div key={rating} className="flex items-center">
<input
type="checkbox"
id={`rating-${rating}`}
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
<label htmlFor={`rating-${rating}`} className="ml-2 text-gray-700 cursor-pointer flex items-center">
{Array(rating).fill(0).map((_, i) => (
<i key={i} className="fas fa-star text-amber-500 text-sm"></i>
))}
{Array(5-rating).fill(0).map((_, i) => (
<i key={i} className="far fa-star text-amber-500 text-sm"></i>
))}
<span className="ml-1 text-gray-600">& Up</span>
</label>
</div>
))}
</div>
</div>
{/* Mobile close button */}
<button
onClick={() => setShowFilters(false)}
className="md:hidden w-full mt-4 py-2 bg-amber-700 text-white rounded-md font-medium hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Apply Filters
</button>
</div>
{/* Product Grid */}
<div className="md:w-3/4 lg:w-4/5">
{/* Search and Sort */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
<div className="relative w-full sm:w-64">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="fas fa-search text-gray-400"></i>
</div>
<input
type="text"
placeholder="Search products..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div className="relative w-full sm:w-auto">
<div
onClick={() => setShowSortDropdown(!showSortDropdown)}
className="flex items-center justify-between w-full sm:w-48 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
>
<span>
{sortOption === 'featured' && 'Featured'}
{sortOption === 'price-low-high' && 'Price: Low to High'}
{sortOption === 'price-high-low' && 'Price: High to Low'}
{sortOption === 'rating' && 'Highest Rated'}
{sortOption === 'name-a-z' && 'Name: A to Z'}
{sortOption === 'name-z-a' && 'Name: Z to A'}
</span>
<i className={`fas fa-chevron-down transition-transform ${showSortDropdown ? 'rotate-180' : ''}`}></i>
</div>
{showSortDropdown && (
<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
<div className="py-1">
{[
{ id: 'featured', name: 'Featured' },
{ id: 'price-low-high', name: 'Price: Low to High' },
{ id: 'price-high-low', name: 'Price: High to Low' },
{ id: 'rating', name: 'Highest Rated' },
{ id: 'name-a-z', name: 'Name: A to Z' },
{ id: 'name-z-a', name: 'Name: Z to A' }
].map(option => (
<div
key={option.id}
onClick={() => {
setSortOption(option.id);
setShowSortDropdown(false);
}}
className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${sortOption === option.id ? 'text-amber-700 font-medium' : 'text-gray-700'}`}
>
{option.name}
</div>
))}
</div>
</div>
)}
</div>
</div>
{/* Results Count */}
<div className="mb-6 text-gray-600">
Showing {Math.min(filteredProducts.length, (currentPage - 1) * productsPerPage + 1)}-{Math.min(filteredProducts.length, currentPage * productsPerPage)} of {filteredProducts.length} products
</div>
{/* Products Grid */}
{currentProducts.length > 0 ? (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{currentProducts.map(product => (
<div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<div className="relative group">
<img
src={product.image}
alt={product.name}
className="w-full h-64 object-cover object-top"
/>
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md font-medium hover:bg-gray-100 transition-colors mx-2 cursor-pointer !rounded-button whitespace-nowrap">
Quick View
</button>
</div>
</div>
<div className="p-4">
<div className="flex items-center mb-2">
{Array(5).fill(0).map((_, i) => (
<i
key={i}
className={`${i < Math.floor(product.rating) ? 'fas' : i < product.rating ? 'fas fa-star-half-alt' : 'far'} fa-star text-amber-500 text-sm`}
></i>
))}
<span className="ml-1 text-gray-600 text-sm">{product.rating}</span>
</div>
<h3 className="font-sans text-xl font-medium text-gray-800 mb-2">{product.name}</h3>
<div className="flex justify-between items-center">
<span className="text-gray-800 font-medium">${product.price.toFixed(2)}</span>
<button
onClick={() => handleAddToCart(product)}
className="bg-amber-800 text-white px-3 py-1 rounded-sm text-sm hover:bg-amber-900 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap shadow-lg hover:shadow-xl"
>
Add to Cart
</button>
</div>
</div>
</div>
))}
</div>
) : (
<div className="bg-white rounded-lg shadow-md p-8 text-center">
<i className="fas fa-search text-gray-400 text-5xl mb-4"></i>
<h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
<p className="text-gray-600 mb-6">Try adjusting your filters or search criteria.</p>
<button
onClick={clearFilters}
className="inline-block bg-amber-800 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Clear Filters
</button>
</div>
)}
{/* Pagination */}
{totalPages > 1 && (
<div className="mt-8 flex justify-center">
<nav className="flex items-center space-x-2">
<button
onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
disabled={currentPage === 1}
className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'} !rounded-button whitespace-nowrap`}
>
<i className="fas fa-chevron-left"></i>
</button>
{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
<button
key={page}
onClick={() => handlePageChange(page)}
className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-amber-800 text-white' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
>
{page}
</button>
))}
<button
onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
disabled={currentPage === totalPages}
className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'} !rounded-button whitespace-nowrap`}
>
<i className="fas fa-chevron-right"></i>
</button>
</nav>
</div>
)}
</div>
</div>
</main>
<footer className="bg-white text-gray-800 py-12 mt-16 border-t border-gray-200">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-3xl font-serif font-bold tracking-[0.15em] text-gray-800 mb-4">THE CELLAR GUILD</h3>
<p className="text-gray-600 mb-4">
Crafting mystical experiences since 2015. Our handcrafted items bring ancient wisdom to modern life.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">
<i className="fab fa-pinterest-p"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li>
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9"
data-readdy="true"
className="text-gray-500 hover:text-amber-700 cursor-pointer"
>
Home
</a>
</li>
<li><a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">Contact</a></li>
<li><a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-500 hover:text-amber-800 cursor-pointer">Shipping & Returns</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-serif font-semibold mb-4">Newsletter</h3>
<p className="text-base font-sans text-gray-600 mb-4">
Subscribe to receive updates, access to exclusive deals, and more.
</p>
<div className="flex">
<input
type="email"
placeholder="Your email address"
className="flex-grow px-4 py-2 rounded-l-md text-gray-900 text-sm border-none focus:outline-none focus:ring-1 focus:ring-amber-500"
/>
<button className="bg-amber-800 text-white px-4 py-2 rounded-r-sm hover:bg-amber-900 transition-colors cursor-pointer !rounded-button whitespace-nowrap shadow-md">
Subscribe
</button>
</div>
</div>
</div>
<div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 text-sm">
&copy; 2025 The Cellar Guild. All rights reserved.
</p>
<div className="mt-4 md:mt-0 flex space-x-4">
<a href="#" className="text-gray-500 hover:text-amber-700 text-sm cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-500 hover:text-amber-700 text-sm cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App
