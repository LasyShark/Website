// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import * as echarts from 'echarts';
const App: React.FC = () => {
const [cartItems, setCartItems] = useState([
{
id: 1,
name: "Handcrafted Wooden Rune Set",
price: 39.99,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20rune%20set%20with%20ancient%20symbols%20carved%20into%20natural%20oak%20pieces%2C%20arranged%20on%20a%20neutral%20beige%20linen%20cloth%20background%20with%20soft%20shadows%2C%20professional%20product%20photography%20with%20natural%20lighting&width=400&height=400&seq=1&orientation=squarish"
},
{
id: 2,
name: "Mystic Puzzle Box",
price: 54.99,
quantity: 2,
image: "https://readdy.ai/api/search-image?query=Intricate%20wooden%20puzzle%20box%20with%20mystical%20symbols%20and%20runes%20carved%20into%20dark%20walnut%20wood%2C%20photographed%20on%20neutral%20beige%20background%20with%20soft%20shadows%2C%20high-end%20product%20photography%20with%20natural%20lighting&width=400&height=400&seq=2&orientation=squarish"
},
{
id: 3,
name: "Arcane Candle Set",
price: 28.50,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Set%20of%20three%20handmade%20beeswax%20candles%20in%20earth%20tones%20with%20carved%20rune%20symbols%2C%20arranged%20on%20a%20natural%20linen%20cloth%20with%20dried%20herbs%2C%20professional%20product%20photography%20with%20soft%20natural%20lighting%20and%20neutral%20beige%20background&width=400&height=400&seq=3&orientation=squarish"
}
]);
const [promoCode, setPromoCode] = useState('');
const [promoApplied, setPromoApplied] = useState(false);
const [shippingMethod, setShippingMethod] = useState('standard');
const [currentStep, setCurrentStep] = useState(1);
const [selectedPayment, setSelectedPayment] = useState('');
const recommendedProducts = [
{
id: 4,
name: "Elder Futhark Guide Book",
price: 24.99,
image: "https://readdy.ai/api/search-image?query=Hardcover%20book%20with%20ancient%20runic%20symbols%20embossed%20on%20leather%20cover%2C%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%2C%20professional%20product%20photography%20showing%20texture%20and%20details&width=300&height=300&seq=4&orientation=squarish"
},
{
id: 5,
name: "Handwoven Altar Cloth",
price: 32.50,
image: "https://readdy.ai/api/search-image?query=Handwoven%20natural%20linen%20altar%20cloth%20with%20subtle%20embroidered%20runic%20symbols%20along%20the%20edges%2C%20folded%20neatly%20on%20neutral%20beige%20background%2C%20professional%20product%20photography%20with%20soft%20natural%20lighting&width=300&height=300&seq=5&orientation=squarish"
},
{
id: 6,
name: "Crystal Divination Set",
price: 48.75,
image: "https://readdy.ai/api/search-image?query=Set%20of%20clear%20quartz%20and%20amethyst%20crystals%20arranged%20in%20a%20wooden%20box%20with%20divination%20guide%2C%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%2C%20professional%20product%20photography&width=300&height=300&seq=6&orientation=squarish"
},
{
id: 7,
name: "Handcrafted Wooden Wand",
price: 36.99,
image: "https://readdy.ai/api/search-image?query=Handcrafted%20wooden%20wand%20made%20from%20polished%20oak%20with%20carved%20runes%20and%20crystal%20inlay%20at%20the%20handle%2C%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%2C%20professional%20product%20photography&width=300&height=300&seq=7&orientation=squarish"
},
{
id: 8,
name: "Leather-bound Journal",
price: 29.95,
image: "https://readdy.ai/api/search-image?query=Handmade%20leather-bound%20journal%20with%20embossed%20runic%20symbols%20on%20the%20cover%20and%20aged%20parchment%20pages%2C%20photographed%20on%20neutral%20beige%20background%20with%20soft%20natural%20lighting%2C%20professional%20product%20photography&width=300&height=300&seq=8&orientation=squarish"
}
];
const updateQuantity = (id: number, newQuantity: number) => {
if (newQuantity < 1) return;
setCartItems(cartItems.map(item =>
item.id === id ? {...item, quantity: newQuantity} : item
));
};
const removeItem = (id: number) => {
setCartItems(cartItems.filter(item => item.id !== id));
};
const applyPromoCode = () => {
if (promoCode.toLowerCase() === 'mystic10') {
setPromoApplied(true);
}
};
const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const discount = promoApplied ? subtotal * 0.1 : 0;
const shippingCost = shippingMethod === 'standard' ? 5.99 : 12.99;
const total = subtotal - discount + shippingCost;
const nextStep = () => {
if (currentStep < 3) {
setCurrentStep(currentStep + 1);
}
};
const prevStep = () => {
if (currentStep > 1) {
setCurrentStep(currentStep - 1);
}
};
return (
<div className="min-h-screen bg-gray-50 font-sans">
{/* Header */}
<header className="bg-white text-gray-800 py-4 px-6 shadow-md">
<div className="container mx-auto flex items-center justify-between">
<nav className="flex items-center space-x-6">
<a href="#" className="text-base font-medium hover:text-amber-700 cursor-pointer font-sans">Shop</a>
<a href="#" className="text-base font-medium hover:text-amber-700 cursor-pointer font-sans">About</a>
</nav>
<div className="flex items-center justify-center gap-3">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="h-8 w-auto" />
<h1 className="text-4xl font-bold font-serif tracking-[0.2em]">THE CELLAR GUILD</h1>
</div>
<div className="flex items-center space-x-4">
<a href="#" className="text-sm font-medium hover:text-amber-700 cursor-pointer">Contact</a>
<div className="relative cursor-pointer">
<i className="fas fa-shopping-cart text-lg"></i>
<span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
{cartItems.reduce((sum, item) => sum + item.quantity, 0)}
</span>
</div>
</div>
</div>
<div className="container mx-auto mt-2">
<div className="border-t border-gray-600 opacity-30"></div>
</div>
</header>
<main className="container mx-auto py-8 px-4">
<div className="mb-8">
<h2 className="text-3xl font-serif text-gray-800 mb-2 font-bold">Your Cart</h2>
<div className="h-1 w-24 bg-amber-600 rounded"></div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
{/* Cart Items */}
<div className="lg:w-2/3">
{cartItems.length > 0 ? (
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="p-6">
{cartItems.map((item, index) => (
<div key={item.id} className="mb-6">
<div className="flex flex-col sm:flex-row gap-4">
<div className="sm:w-24 sm:h-24 flex-shrink-0">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover rounded-md"
/>
</div>
<div className="flex-grow">
<h3 className="text-xl font-medium text-gray-800 font-sans">{item.name}</h3>
<p className="text-gray-600 text-sm mb-2">Item #{item.id}</p>
<div className="flex flex-wrap justify-between items-center mt-2">
<div className="flex items-center border border-gray-300 rounded-md">
<button
onClick={() => updateQuantity(item.id, item.quantity - 1)}
className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-minus text-xs"></i>
</button>
<span className="px-3 py-1">{item.quantity}</span>
<button
onClick={() => updateQuantity(item.id, item.quantity + 1)}
className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-plus text-xs"></i>
</button>
</div>
<div className="mt-2 sm:mt-0">
<span className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
</div>
<button
onClick={() => removeItem(item.id)}
className="mt-2 sm:mt-0 text-red-500 hover:text-red-700 text-sm cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-trash-alt mr-1"></i> Remove
</button>
</div>
</div>
</div>
{index < cartItems.length - 1 && (
<div className="border-b border-gray-200 my-6"></div>
)}
</div>
))}
</div>
</div>
) : (
<div className="bg-white rounded-lg shadow-md p-8 text-center">
<i className="fas fa-shopping-cart text-gray-400 text-5xl mb-4"></i>
<h3 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
<p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
<a
href="#"
className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Continue Shopping
</a>
</div>
)}
</div>
{/* Cart Summary */}
<div className="lg:w-1/3">
<div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
<h3 className="text-xl font-serif text-gray-800 mb-4">Order Summary</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between">
<span className="text-gray-600">Subtotal</span>
<span className="text-gray-800">${subtotal.toFixed(2)}</span>
</div>
{promoApplied && (
<div className="flex justify-between text-green-600">
<span>Discount (10%)</span>
<span>-${discount.toFixed(2)}</span>
</div>
)}
<div className="flex justify-between">
<span className="text-gray-600">Shipping</span>
<span className="text-gray-800">${shippingCost.toFixed(2)}</span>
</div>
<div className="border-t border-gray-200 pt-3 mt-3">
<div className="flex justify-between font-semibold">
<span className="text-gray-800">Total</span>
<span className="text-gray-800">${total.toFixed(2)}</span>
</div>
</div>
</div>
<div className="mb-6">
<label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-2">
Shipping Method
</label>
<div className="space-y-2">
<div className="flex items-center">
<input
type="radio"
id="standard"
name="shipping"
value="standard"
checked={shippingMethod === 'standard'}
onChange={() => setShippingMethod('standard')}
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
/>
<label htmlFor="standard" className="ml-2 block text-sm text-gray-700">
Standard Shipping - $5.99 (5-7 business days)
</label>
</div>
<div className="flex items-center">
<input
type="radio"
id="express"
name="shipping"
value="express"
checked={shippingMethod === 'express'}
onChange={() => setShippingMethod('express')}
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
/>
<label htmlFor="express" className="ml-2 block text-sm text-gray-700">
Express Shipping - $12.99 (2-3 business days)
</label>
</div>
</div>
</div>
<div className="mb-6">
<label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
Promo Code
</label>
<div className="flex">
<input
type="text"
id="promo"
value={promoCode}
onChange={(e) => setPromoCode(e.target.value)}
className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
placeholder="Enter code"
disabled={promoApplied}
/>
<button
onClick={applyPromoCode}
disabled={promoApplied}
className={`px-4 py-2 rounded-r-sm font-medium text-sm text-white ${promoApplied ? 'bg-gray-400' : 'bg-amber-700 hover:bg-amber-800'} cursor-pointer !rounded-button whitespace-nowrap`}
>
Apply
</button>
</div>
{promoApplied && (
<p className="text-green-600 text-sm mt-1">
<i className="fas fa-check-circle mr-1"></i> Promo code applied successfully!
</p>
)}
</div>
<button
onClick={nextStep}
className="w-full bg-amber-700 text-white py-3 px-4 rounded-sm font-medium hover:bg-amber-800 transition-colors mb-4 cursor-pointer !rounded-button whitespace-nowrap"
>
Proceed to Checkout
</button>
<a href="#" className="block text-center text-amber-600 hover:text-amber-700 text-sm font-medium cursor-pointer">
Continue Shopping
</a>
</div>
</div>
</div>
{/* Recommended Products */}
<div className="mt-16">
<h2 className="text-3xl font-serif text-gray-800 mb-6 font-bold">Mystical Matches</h2>
<div className="relative">
<div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
{recommendedProducts.map(product => (
<div key={product.id} className="flex-shrink-0 w-64">
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-64 overflow-hidden">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>
</div>
<div className="p-4">
<h3 className="text-xl font-medium text-gray-800 mb-2 font-sans">{product.name}</h3>
<div className="flex justify-between items-center">
<span className="text-gray-800 font-medium">${product.price.toFixed(2)}</span>
<button className="bg-amber-700 text-white px-3 py-1 rounded-sm text-sm hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
Add to Cart
</button>
</div>
</div>
</div>
</div>
))}
</div>
<div className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 hidden md:block">
<button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-chevron-left text-gray-600"></i>
</button>
</div>
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 hidden md:block">
<button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-chevron-right text-gray-600"></i>
</button>
</div>
</div>
</div>
{/* Checkout Modal */}
{currentStep > 1 && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
<div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-gray-800">Checkout</h2>
<button
onClick={() => setCurrentStep(1)}
className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-times text-xl"></i>
</button>
</div>
{/* Progress Steps */}
<div className="flex justify-between mb-8">
<div className="flex flex-col items-center">
<div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
<i className="fas fa-map-marker-alt"></i>
</div>
<span className="text-sm mt-2 text-gray-600">Shipping</span>
</div>
<div className="flex-grow mx-4 flex items-center">
<div className={`h-1 w-full ${currentStep >= 3 ? 'bg-amber-600' : 'bg-gray-200'}`}></div>
</div>
<div className="flex flex-col items-center">
<div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
<i className="fas fa-credit-card"></i>
</div>
<span className="text-sm mt-2 text-gray-600">Payment</span>
</div>
</div>
{/* Shipping Information */}
{currentStep === 2 && (
<div>
<h3 className="text-xl font-medium text-gray-800 mb-4">Shipping Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div>
<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
First Name
</label>
<input
type="text"
id="firstName"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
Last Name
</label>
<input
type="text"
id="lastName"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
Email Address
</label>
<input
type="email"
id="email"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
Phone Number
</label>
<input
type="tel"
id="phone"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div className="md:col-span-2">
<label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
Street Address
</label>
<input
type="text"
id="address"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
City
</label>
<input
type="text"
id="city"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
State/Province
</label>
<input
type="text"
id="state"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
ZIP/Postal Code
</label>
<input
type="text"
id="zip"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
Country
</label>
<div className="relative">
<select
id="country"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 appearance-none"
>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="UK">United Kingdom</option>
<option value="AU">Australia</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="fas fa-chevron-down text-gray-500"></i>
</div>
</div>
</div>
</div>
<div className="flex items-center mb-6">
<input
type="checkbox"
id="saveAddress"
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
<label htmlFor="saveAddress" className="ml-2 block text-sm text-gray-700">
Save this address for future orders
</label>
</div>
<div className="flex justify-between">
<button
onClick={prevStep}
className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
>
Back to Cart
</button>
<button
onClick={nextStep}
className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer !rounded-button whitespace-nowrap"
>
Continue to Payment
</button>
</div>
</div>
)}
{/* Payment Information */}
{currentStep === 3 && (
<div>
<h3 className="text-xl font-medium text-gray-800 mb-4">Payment Information</h3>
<div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6 flex items-center">
<i className="fas fa-lock text-amber-600 mr-3"></i>
<p className="text-sm text-amber-800">
Your payment information is encrypted and secure. We never store your full card details.
</p>
</div>
<div className="mb-6">
<div>
<div className="flex flex-wrap items-center gap-6 mb-4">
<button
onClick={() => setSelectedPayment('credit-card')}
className={`flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 !rounded-button whitespace-nowrap ${selectedPayment === 'credit-card' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}>
<i className="fab fa-cc-visa text-2xl text-blue-600 mr-2"></i>
<span className="text-gray-700">Credit Card</span>
</button>
<button
onClick={() => setSelectedPayment('paypal')}
className={`flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 !rounded-button whitespace-nowrap ${selectedPayment === 'paypal' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}>
<i className="fab fa-paypal text-2xl text-blue-700 mr-2"></i>
<span className="text-gray-700">PayPal</span>
</button>
<button
onClick={() => setSelectedPayment('apple-pay')}
className={`flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 !rounded-button whitespace-nowrap ${selectedPayment === 'apple-pay' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}>
<i className="fab fa-apple text-2xl text-gray-800 mr-2"></i>
<span className="text-gray-700">Apple Pay</span>
</button>
<button
onClick={() => setSelectedPayment('google-pay')}
className={`flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 !rounded-button whitespace-nowrap ${selectedPayment === 'google-pay' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}>
<i className="fab fa-google-pay text-2xl text-gray-800 mr-2"></i>
<span className="text-gray-700">Google Pay</span>
</button>
<button
onClick={() => setSelectedPayment('crypto')}
className={`flex items-center px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 !rounded-button whitespace-nowrap ${selectedPayment === 'crypto' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}>
<i className="fab fa-bitcoin text-2xl text-orange-500 mr-2"></i>
<span className="text-gray-700">Crypto</span>
</button>
</div>
{!selectedPayment && (
<p className="text-red-500 text-sm mb-4">Please select a payment method to continue</p>
)}
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-md mb-4">
<div className="flex items-center">
<img src="https://readdy.ai/api/search-image?query=Afterpay%20logo%20design%20minimalist%20modern%20clean%20professional%20payment%20service%20brand%20identity%20on%20neutral%20background&width=80&height=30&seq=9&orientation=landscape" alt="Afterpay" className="h-6 object-contain mr-2" />
<span className="text-sm text-gray-600">Pay in 4 interest-free installments</span>
</div>
<button className="text-amber-600 hover:text-amber-700 text-sm font-medium !rounded-button whitespace-nowrap">
Learn More
</button>
</div>
<div className="flex items-center space-x-4 mb-4">
<div className="text-gray-400">
<i className="fab fa-cc-visa text-2xl"></i>
</div>
<div className="text-gray-400">
<i className="fab fa-cc-mastercard text-2xl"></i>
</div>
<div className="text-gray-400">
<i className="fab fa-cc-discover text-2xl"></i>
</div>
</div>
<div className="grid grid-cols-1 gap-4 mb-4" style={{ display: selectedPayment === 'credit-card' ? 'grid' : 'none' }}>
<div>
<label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
Name on Card
</label>
<input
type="text"
id="cardName"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
/>
</div>
<div>
<label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
Card Number
</label>
<div className="relative">
<input
type="text"
id="cardNumber"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 pr-10"
placeholder="XXXX XXXX XXXX XXXX"
/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3">
<i className="fas fa-credit-card text-gray-400"></i>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
Expiration Date
</label>
<input
type="text"
id="expDate"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
placeholder="MM/YY"
/>
</div>
<div>
<label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
CVV
</label>
<div className="relative">
<input
type="text"
id="cvv"
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
placeholder="XXX"
/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3">
<i className="fas fa-question-circle text-gray-400 cursor-help"></i>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center mb-4">
<input
type="checkbox"
id="saveCard"
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
<label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
Save this card for future purchases
</label>
</div>
</div>
<div className="mb-6">
<h4 className="text-lg font-medium text-gray-800 mb-3">Order Summary</h4>
<div className="border border-gray-200 rounded-md">
<div className="p-4 border-b border-gray-200">
{cartItems.map((item) => (
<div key={item.id} className="flex justify-between items-center mb-2">
<div className="flex items-center">
<span className="text-gray-700">{item.quantity} x</span>
<span className="ml-2 text-gray-800">{item.name}</span>
</div>
<span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
</div>
))}
</div>
<div className="p-4">
<div className="flex justify-between mb-2">
<span className="text-gray-600">Subtotal</span>
<span className="text-gray-800">${subtotal.toFixed(2)}</span>
</div>
{promoApplied && (
<div className="flex justify-between mb-2 text-green-600">
<span>Discount (10%)</span>
<span>-${discount.toFixed(2)}</span>
</div>
)}
<div className="flex justify-between mb-2">
<span className="text-gray-600">Shipping ({shippingMethod === 'standard' ? 'Standard' : 'Express'})</span>
<span className="text-gray-800">${shippingCost.toFixed(2)}</span>
</div>
<div className="border-t border-gray-200 mt-2 pt-2">
<div className="flex justify-between font-semibold">
<span className="text-gray-800">Total</span>
<span className="text-gray-800">${total.toFixed(2)}</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center mb-6">
<input
type="checkbox"
id="terms"
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
<label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
I agree to the <a href="#" className="text-amber-600 hover:text-amber-700">Terms and Conditions</a> and <a href="#" className="text-amber-600 hover:text-amber-700">Privacy Policy</a>
</label>
</div>
<div className="flex justify-between">
<button
onClick={prevStep}
className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
>
Back to Shipping
</button>
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/f21ac784-bc7e-428a-b3cd-a893904fe0b9"
data-readdy="true"
>
<button
className="px-6 py-2 bg-amber-700 text-white rounded-sm hover:bg-amber-800 cursor-pointer !rounded-button whitespace-nowrap"
>
Place Order
</button>
</a>
</div>
</div>
)}
</div>
</div>
</div>
)}
</main>
<footer className="bg-gray-50 text-gray-800 py-12 mt-16">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-3xl font-bold font-serif text-gray-800 mb-4 tracking-[0.2em]">THE CELLAR GUILD</h3>
<p className="text-gray-600 mb-4 font-sans text-base">
Crafting mystical experiences since 2015. Our handcrafted items bring ancient wisdom to modern life.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-pinterest-p"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Shop All</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Shipping & Returns</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-serif font-semibold mb-4">Newsletter</h3>
<p className="text-gray-600 mb-4 font-sans text-base">
Subscribe to receive updates, access to exclusive deals, and more.
</p>
<div className="flex">
<input
type="email"
placeholder="Your email address"
className="flex-grow px-4 py-2 rounded-l-md text-gray-900 text-sm border-none focus:outline-none focus:ring-1 focus:ring-amber-500"
/>
<button className="bg-amber-700 text-white px-4 py-2 rounded-r-sm hover:bg-amber-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
Subscribe
</button>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
&copy; 2025 The Cellar Guild. All rights reserved.
</p>
<div className="mt-4 md:mt-0 flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
);
}
export default App
