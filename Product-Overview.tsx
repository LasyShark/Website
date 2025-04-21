// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
useEffect(() => {
// Add Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
}, []);
const [mainImage, setMainImage] = useState(0);
const [selectedColor, setSelectedColor] = useState('Black');
const [selectedSize, setSelectedSize] = useState('M');
const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState('description');
const [showSizeGuide, setShowSizeGuide] = useState(false);
const productImages = [
{
url: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20premium%20black%20leather%20minimalist%20wallet%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=600&height=600&seq=1&orientation=squarish',
alt: 'Black leather wallet front view'
},
{
url: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20premium%20black%20leather%20minimalist%20wallet%20from%20side%20angle%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=600&height=600&seq=2&orientation=squarish',
alt: 'Black leather wallet side view'
},
{
url: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20premium%20black%20leather%20minimalist%20wallet%20interior%20view%20showing%20card%20slots%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution&width=600&height=600&seq=3&orientation=squarish',
alt: 'Black leather wallet interior view'
},
{
url: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20premium%20black%20leather%20minimalist%20wallet%20back%20view%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=600&height=600&seq=4&orientation=squarish',
alt: 'Black leather wallet back view'
}
];
const colors = [
{ name: 'Black', hex: '#000000' },
{ name: 'Brown', hex: '#8B4513' },
{ name: 'Navy', hex: '#000080' },
{ name: 'Burgundy', hex: '#800020' }
];
const sizes = ['S', 'M', 'L'];
const relatedProducts = [
{
id: 1,
name: 'Leather Card Holder',
price: 49.99,
image: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20slim%20leather%20card%20holder%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=300&height=300&seq=5&orientation=squarish'
},
{
id: 2,
name: 'Premium Belt',
price: 79.99,
image: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20premium%20leather%20belt%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=300&height=300&seq=6&orientation=squarish'
},
{
id: 3,
name: 'Leather Keychain',
price: 29.99,
image: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20leather%20keychain%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=300&height=300&seq=7&orientation=squarish'
},
{
id: 4,
name: 'Travel Wallet',
price: 89.99,
image: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20leather%20travel%20wallet%20passport%20holder%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=300&height=300&seq=8&orientation=squarish'
},
{
id: 5,
name: 'Leather Bracelet',
price: 39.99,
image: 'https://readdy.ai/api/search-image?query=Professional%20high%20quality%20product%20photography%20of%20a%20leather%20bracelet%20against%20a%20clean%20white%20background%2C%20studio%20lighting%2C%20detailed%20texture%20visible%2C%20commercial%20product%20shot%2C%208k%20resolution%2C%20professional%20photography&width=300&height=300&seq=9&orientation=squarish'
}
];
const reviews = [
{
id: 1,
name: 'John D.',
rating: 5,
date: 'March 15, 2025',
title: 'Excellent quality and craftsmanship',
content: 'I\'ve been using this wallet for a month now and I\'m extremely impressed with the quality. The leather is soft yet durable, and the stitching is perfect. Highly recommended!',
verified: true
},
{
id: 2,
name: 'Sarah M.',
rating: 4,
date: 'February 28, 2025',
title: 'Great wallet, slightly bigger than expected',
content: 'The quality is excellent and I love the design. It\'s slightly bigger than I expected but still fits in my pocket. The leather smells amazing and feels premium.',
verified: true
},
{
id: 3,
name: 'Michael T.',
rating: 5,
date: 'April 2, 2025',
title: 'Perfect minimalist wallet',
content: 'This is exactly what I was looking for - slim, well-made, and functional. Holds all my essential cards and some cash without bulking up my pocket. The leather is already developing a nice patina.',
verified: true
}
];
const incrementQuantity = () => {
setQuantity(quantity + 1);
};
const decrementQuantity = () => {
if (quantity > 1) {
setQuantity(quantity - 1);
}
};
return (
<div className="min-h-screen bg-white">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex-1 flex items-center justify-center">
<a href="/" className="flex items-center">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="w-8 h-8 mr-2" />
<span className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.15em' }}>THE CELLAR GUILD</span>
</a>
</div>
<nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'Inter' }}>
<a href="/" className="text-gray-600 hover:text-amber-700 font-medium tracking-wide text-base">Home</a>
<a href="/shop" className="text-gray-800 font-medium border-b-2 border-gray-800 tracking-wide text-base">Shop</a>
<a href="/collections" className="text-gray-600 hover:text-amber-700 font-medium tracking-wide text-base">Collections</a>
<a href="/about" className="text-gray-600 hover:text-amber-700 font-medium tracking-wide text-base">About</a>
<a href="/contact" className="text-gray-600 hover:text-amber-700 font-medium tracking-wide text-base">Contact</a>
</nav>
<div className="flex items-center space-x-6">
<button className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fas fa-search text-lg"></i>
</button>
<button className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fas fa-user text-lg"></i>
</button>
<button className="text-gray-600 hover:text-gray-900 relative cursor-pointer">
<i className="fas fa-shopping-bag text-lg"></i>
<span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>
{/* Main Content */}
<main className="container mx-auto pt-24 pb-16 px-4">
{/* Breadcrumbs */}
<div className="py-4 text-sm text-gray-500">
<a href="/" className="hover:text-gray-700">Home</a> /
<a href="/shop" className="mx-2 hover:text-gray-700">Shop</a> /
<span className="text-gray-700">Premium Leather Wallet</span>
</div>
{/* Product Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
{/* Product Images */}
<div className="space-y-4">
<div className="bg-gray-50 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
<img
src={productImages[mainImage].url}
alt={productImages[mainImage].alt}
className="w-full h-full object-contain"
/>
</div>
<div className="grid grid-cols-4 gap-4">
{productImages.map((image, index) => (
<div
key={index}
className={`cursor-pointer bg-gray-50 rounded-md overflow-hidden h-24 ${mainImage === index ? 'ring-2 ring-gray-900' : ''}`}
onClick={() => setMainImage(index)}
>
<img
src={image.url}
alt={image.alt}
className="w-full h-full object-cover"
/>
</div>
))}
</div>
</div>
{/* Product Info */}
<div className="space-y-6">
<div>
<h1 className="text-5xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>Premium Leather Wallet</h1>
<div className="flex items-center mb-4">
<div className="flex text-yellow-400 mr-2">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<span className="text-gray-600">4.8 (124 reviews)</span>
</div>
<p className="text-2xl font-semibold text-gray-900">$89.99</p>
</div>
<div className="border-t border-gray-200 pt-6">
<p className="text-gray-600 mb-6">
Handcrafted from premium full-grain leather, this minimalist wallet combines elegance with functionality. Designed to age beautifully and develop a unique patina over time.
</p>
{/* Color Selection */}
<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Color: {selectedColor}</h3>
</div>
<div className="flex space-x-3">
{colors.map(color => (
<button
key={color.name}
className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-900' : ''}`}
style={{ backgroundColor: color.hex }}
onClick={() => setSelectedColor(color.name)}
aria-label={`Select ${color.name} color`}
></button>
))}
</div>
</div>
{/* Size Selection */}
<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Size</h3>
<button
className="text-sm text-gray-500 underline cursor-pointer"
onClick={() => setShowSizeGuide(!showSizeGuide)}
>
Size guide
</button>
</div>
<div className="flex space-x-3">
{sizes.map(size => (
<button
key={size}
className={`w-12 h-12 flex items-center justify-center border rounded-md cursor-pointer ${
selectedSize === size
? 'bg-gray-900 text-white border-gray-900'
: 'border-gray-300 text-gray-700 hover:border-gray-900'
}`}
onClick={() => setSelectedSize(size)}
>
{size}
</button>
))}
</div>
{showSizeGuide && (
<div className="mt-4 p-4 bg-gray-50 rounded-md">
<h4 className="font-medium mb-2">Size Guide</h4>
<ul className="text-sm text-gray-600 space-y-1">
<li>S: 3.4" x 4.3" (8.6 x 10.9 cm)</li>
<li>M: 3.7" x 4.5" (9.4 x 11.4 cm)</li>
<li>L: 4.0" x 4.7" (10.2 x 11.9 cm)</li>
</ul>
</div>
)}
</div>
{/* Quantity Selector */}
<div className="mb-6">
<h3 className="font-medium text-gray-900 mb-2">Quantity</h3>
<div className="flex items-center border border-gray-300 rounded-md w-32">
<button
className="w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer !rounded-button whitespace-nowrap"
onClick={decrementQuantity}
>
<i className="fas fa-minus"></i>
</button>
<input
type="text"
className="w-12 h-10 border-none text-center bg-transparent"
value={quantity}
readOnly
/>
<button
className="w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer !rounded-button whitespace-nowrap"
onClick={incrementQuantity}
>
<i className="fas fa-plus"></i>
</button>
</div>
</div>
{/* Add to Cart and Buy Now buttons */}
<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
<button className="flex-1 bg-amber-700 text-white py-3 px-6 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-shopping-bag mr-2"></i>
Add to Cart
</button>
<button className="flex-1 bg-white text-gray-900 py-3 px-6 rounded-sm border border-gray-900 hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-bolt mr-2"></i>
Buy Now
</button>
</div>
{/* Extra Info */}
<div className="space-y-3 text-gray-600">
<div className="flex items-start">
<i className="fas fa-truck-fast mt-1 mr-3 text-gray-900"></i>
<p>Free shipping on orders over $100</p>
</div>
<div className="flex items-start">
<i className="fas fa-rotate-left mt-1 mr-3 text-gray-900"></i>
<p>Free 30-day returns</p>
</div>
<div className="flex items-start">
<i className="fas fa-shield mt-1 mr-3 text-gray-900"></i>
<p>2-year warranty</p>
</div>
</div>
</div>
</div>
</div>
{/* Product Details Tabs */}
<div className="mb-16">
<div className="border-b border-gray-200 mb-6">
<div className="flex space-x-8">
{['description', 'specifications', 'shipping', 'returns'].map((tab) => (
<button
key={tab}
className={`py-4 px-1 font-medium border-b-2 cursor-pointer !rounded-button whitespace-nowrap ${
activeTab === tab
? 'border-gray-900 text-gray-900'
: 'border-transparent text-gray-500 hover:text-gray-700'
}`}
onClick={() => setActiveTab(tab)}
>
{tab.charAt(0).toUpperCase() + tab.slice(1)}
</button>
))}
</div>
</div>
<div className="prose max-w-none" style={{ fontFamily: 'Inter' }}>
{activeTab === 'description' && (
<div>
<p className="mb-4">
Our Premium Leather Wallet represents the perfect balance of form and function. Handcrafted by skilled artisans using traditional techniques, each wallet is made from carefully selected full-grain leather that will develop a beautiful patina over time, making your wallet uniquely yours.
</p>
<p className="mb-4">
The minimalist design focuses on what matters most: quality materials, thoughtful organization, and a slim profile that fits comfortably in your pocket. With precision stitching and burnished edges, this wallet is built to last for years to come.
</p>
<h3 className="text-lg font-medium mb-2 mt-6">Features:</h3>
<ul className="list-disc pl-6 space-y-2">
<li>Full-grain vegetable-tanned leather</li>
<li>6 card slots with easy-access design</li>
<li>2 hidden pockets for additional storage</li>
<li>Dedicated cash compartment</li>
<li>RFID blocking technology</li>
<li>Hand-stitched with waxed thread</li>
<li>Personalization available</li>
</ul>
</div>
)}
{activeTab === 'specifications' && (
<div>
<h3 className="text-lg font-medium mb-4">Product Specifications</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="font-medium mb-2">Materials</h4>
<ul className="list-disc pl-6 space-y-1">
<li>Full-grain vegetable-tanned leather</li>
<li>Waxed polyester thread</li>
<li>RFID blocking material</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-2">Dimensions</h4>
<ul className="list-disc pl-6 space-y-1">
<li>Small: 3.4" x 4.3" x 0.4" (8.6 x 10.9 x 1.0 cm)</li>
<li>Medium: 3.7" x 4.5" x 0.4" (9.4 x 11.4 x 1.0 cm)</li>
<li>Large: 4.0" x 4.7" x 0.4" (10.2 x 11.9 x 1.0 cm)</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-2">Capacity</h4>
<ul className="list-disc pl-6 space-y-1">
<li>6 card slots</li>
<li>2 hidden pockets</li>
<li>1 cash compartment</li>
<li>Recommended capacity: 12 cards maximum</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-2">Care Instructions</h4>
<ul className="list-disc pl-6 space-y-1">
<li>Wipe clean with a damp cloth</li>
<li>Apply leather conditioner every 3-6 months</li>
<li>Keep away from direct sunlight when not in use</li>
<li>Allow to air dry if wet</li>
</ul>
</div>
</div>
</div>
)}
{activeTab === 'shipping' && (
<div>
<h3 className="text-lg font-medium mb-4">Shipping Information</h3>
<p className="mb-4">
We ship worldwide using trusted courier services to ensure your order arrives safely and on time.
</p>
<h4 className="font-medium mb-2">Domestic Shipping (United States)</h4>
<ul className="list-disc pl-6 mb-4 space-y-1">
<li>Free standard shipping on all orders over $100</li>
<li>Standard shipping (3-5 business days): $5.99</li>
<li>Express shipping (1-2 business days): $12.99</li>
</ul>
<h4 className="font-medium mb-2">International Shipping</h4>
<ul className="list-disc pl-6 mb-4 space-y-1">
<li>Standard international shipping (7-14 business days): $15.99</li>
<li>Express international shipping (3-5 business days): $29.99</li>
<li>Free standard international shipping on orders over $200</li>
</ul>
<p className="text-sm text-gray-600">
Please note that international orders may be subject to import duties and taxes, which are the responsibility of the customer.
</p>
</div>
)}
{activeTab === 'returns' && (
<div>
<h3 className="text-lg font-medium mb-4">Return Policy</h3>
<p className="mb-4">
We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, we offer a simple return process.
</p>
<h4 className="font-medium mb-2">Return Eligibility</h4>
<ul className="list-disc pl-6 mb-4 space-y-1">
<li>Items must be returned within 30 days of delivery</li>
<li>Products must be unused, unworn, and in original condition</li>
<li>Original packaging must be intact</li>
<li>Proof of purchase is required</li>
</ul>
<h4 className="font-medium mb-2">How to Return</h4>
<ol className="list-decimal pl-6 mb-4 space-y-1">
<li>Contact our customer service team to initiate a return</li>
<li>Fill out the return form included with your order</li>
<li>Pack the item securely in its original packaging</li>
<li>Ship the item using the provided return label</li>
</ol>
<p className="mb-4">
Once we receive and inspect your return, a refund will be processed to your original payment method within 5-7 business days.
</p>
<p className="text-sm text-gray-600">
Note: Personalized items cannot be returned unless there is a manufacturing defect.
</p>
</div>
)}
</div>
</div>
{/* Related Products */}
<div className="mb-16">
<h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display' }}>You May Also Like</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
{relatedProducts.map(product => (
<div key={product.id} className="group">
<div className="bg-gray-50 rounded-lg overflow-hidden mb-3 aspect-square">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
</div>
<h3 className="text-xl font-medium text-gray-800" style={{ fontFamily: 'Inter' }}>{product.name}</h3>
<p className="text-gray-600 text-base">${product.price.toFixed(2)}</p>
<button className="mt-2 text-sm font-medium text-gray-900 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
Quick view
</button>
</div>
))}
</div>
</div>
{/* Customer Reviews */}
<div className="mb-16">
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>Customer Reviews</h2>
<button className="bg-amber-700 text-white py-2 px-4 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
Write a Review
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
<div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
<div className="text-center mb-4">
<div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
<div className="flex justify-center text-yellow-400 mb-2">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<p className="text-gray-600">Based on 124 reviews</p>
</div>
<div className="space-y-2">
<div className="flex items-center">
<span className="w-16 text-sm text-gray-600">5 stars</span>
<div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
<div className="h-2 bg-yellow-400 rounded-full" style={{ width: '85%' }}></div>
</div>
<span className="w-10 text-sm text-gray-600">85%</span>
</div>
<div className="flex items-center">
<span className="w-16 text-sm text-gray-600">4 stars</span>
<div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
<div className="h-2 bg-yellow-400 rounded-full" style={{ width: '10%' }}></div>
</div>
<span className="w-10 text-sm text-gray-600">10%</span>
</div>
<div className="flex items-center">
<span className="w-16 text-sm text-gray-600">3 stars</span>
<div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
<div className="h-2 bg-yellow-400 rounded-full" style={{ width: '3%' }}></div>
</div>
<span className="w-10 text-sm text-gray-600">3%</span>
</div>
<div className="flex items-center">
<span className="w-16 text-sm text-gray-600">2 stars</span>
<div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
<div className="h-2 bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
</div>
<span className="w-10 text-sm text-gray-600">1%</span>
</div>
<div className="flex items-center">
<span className="w-16 text-sm text-gray-600">1 star</span>
<div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
<div className="h-2 bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
</div>
<span className="w-10 text-sm text-gray-600">1%</span>
</div>
</div>
</div>
<div className="lg:col-span-2">
<div className="flex justify-between items-center mb-4">
<h3 className="font-medium">124 reviews</h3>
<div className="relative">
<button className="flex items-center space-x-1 text-gray-600 border border-gray-300 rounded-md py-2 px-4 cursor-pointer !rounded-button whitespace-nowrap">
<span>Sort by: Most recent</span>
<i className="fas fa-chevron-down text-xs"></i>
</button>
</div>
</div>
<div className="space-y-6">
{reviews.map(review => (
<div key={review.id} className="border-b border-gray-200 pb-6">
<div className="flex justify-between mb-2">
<div className="flex items-center">
<div className="flex text-yellow-400 mr-2">
{[...Array(5)].map((_, i) => (
<i key={i} className={`fas ${i < review.rating ? 'fa-star' : 'fa-star text-gray-300'}`}></i>
))}
</div>
<h4 className="font-medium">{review.title}</h4>
</div>
<span className="text-sm text-gray-500">{review.date}</span>
</div>
<div className="flex items-center mb-2">
<span className="font-medium mr-2">{review.name}</span>
{review.verified && (
<span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
Verified Purchase
</span>
)}
</div>
<p className="text-gray-600">{review.content}</p>
</div>
))}
</div>
<div className="mt-6 flex justify-center">
<button className="text-gray-600 border border-gray-300 rounded-sm py-2 px-4 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap">
Load more reviews
</button>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-gray-50 pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.15em' }}>THE CELLAR GUILD</h3>
<p className="text-base text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
Crafting premium leather goods since 1985. Each product is handmade with care and attention to detail.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
<i className="fab fa-pinterest"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.05em' }}>Shop</h3>
<ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">All Products</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Wallets</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Bags</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Accessories</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Gift Cards</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
<ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Our Story</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Craftsmanship</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Sustainability</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Press</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-bold text-gray-900 mb-4">Customer Service</h3>
<ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Contact Us</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">FAQs</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Shipping & Returns</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Warranty</a></li>
<li><a href="#" className="hover:text-gray-900 cursor-pointer">Care Instructions</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<p className="text-gray-600 text-sm">
&copy; 2025 The Cellar Guild. All rights reserved.
</p>
</div>
<div className="flex flex-wrap justify-center space-x-4">
<div className="text-gray-600 text-2xl">
<i className="fab fa-cc-visa"></i>
</div>
<div className="text-gray-600 text-2xl">
<i className="fab fa-cc-mastercard"></i>
</div>
<div className="text-gray-600 text-2xl">
<i className="fab fa-cc-amex"></i>
</div>
<div className="text-gray-600 text-2xl">
<i className="fab fa-cc-paypal"></i>
</div>
<div className="text-gray-600 text-2xl">
<i className="fab fa-cc-apple-pay"></i>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App
