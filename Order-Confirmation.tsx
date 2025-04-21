// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
// Add custom animation
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
@keyframes fadeInOut {
0% { opacity: 0; transform: translateY(-20px); }
10% { opacity: 1; transform: translateY(0); }
90% { opacity: 1; transform: translateY(0); }
100% { opacity: 0; transform: translateY(-20px); }
}
.animate-fade-in-out {
animation: fadeInOut 3s ease-in-out forwards;
}
h1, h2, h3, h4, h5, h6 {
font-family: 'Playfair Display', serif;
}
body {
font-family: 'Inter', sans-serif;
color: #1f2937;
}
.logo-text {
font-family: 'Playfair Display', serif;
letter-spacing: 0.1em;
}
.nav-link {
font-family: 'Inter', sans-serif;
font-weight: 500;
}
.section-header {
font-family: 'Playfair Display', serif;
font-size: 1.875rem;
line-height: 2.25rem;
}
.product-title {
font-family: 'Inter', sans-serif;
font-size: 1.125rem;
line-height: 1.75rem;
}
.footer-heading {
font-family: 'Playfair Display', serif;
font-size: 1.125rem;
line-height: 1.75rem;
}
.hover-scale {
transition: transform 0.3s ease;
}
.hover-scale:hover {
transform: scale(1.02);
}
`;
// Order details
const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);
const orderDate = new Date();
const estimatedDeliveryDate = new Date(orderDate);
estimatedDeliveryDate.setDate(orderDate.getDate() + 7);
const [trackingEmailInput, setTrackingEmailInput] = useState('');
const [phoneInput, setPhoneInput] = useState('');
const [notificationConsent, setNotificationConsent] = useState(false);
const [accountCreated, setAccountCreated] = useState(false);
const [password, setPassword] = useState('');
const [termsAccepted, setTermsAccepted] = useState(false);
const [showToast, setShowToast] = useState(false);
const [formErrors, setFormErrors] = useState({
email: '',
password: '',
terms: ''
});
// Order items
const orderItems = [
{
id: 1,
name: "Handcrafted Wooden Rune Set",
price: 39.99,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Handcrafted%2520wooden%2520rune%2520set%2520with%2520ancient%2520symbols%2520carved%2520into%2520natural%2520oak%2520pieces%252C%2520arranged%2520on%2520a%2520neutral%2520beige%2520linen%2520cloth%2520background%2520with%2520soft%2520shadows%252C%2520professional%2520product%2520photography%2520with%2520natural%2520lighting&width=400&height=400&seq=1&orientation=squarish"
},
{
id: 2,
name: "Mystic Puzzle Box",
price: 54.99,
quantity: 2,
image: "https://readdy.ai/api/search-image?query=Intricate%2520wooden%2520puzzle%2520box%2520with%2520mystical%2520symbols%2520and%2520runes%2520carved%2520into%2520dark%2520walnut%2520wood%252C%2520photographed%2520on%2520neutral%2520beige%2520background%2520with%2520soft%2520shadows%252C%2520high-end%2520product%2520photography%2520with%2520natural%2520lighting&width=400&height=400&seq=2&orientation=squarish"
},
{
id: 3,
name: "Arcane Candle Set",
price: 28.50,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Set%2520of%2520three%2520handmade%2520beeswax%2520candles%2520in%2520earth%2520tones%2520with%2520carved%2520rune%2520symbols%252C%2520arranged%2520on%2520a%2520natural%2520linen%2520cloth%2520with%2520dried%2520herbs%252C%2520professional%2520product%2520photography%2520with%2520soft%2520natural%2520lighting%2520and%2520neutral%2520beige%2520background&width=400&height=400&seq=3&orientation=squarish"
}
];
// Recommended products
const recommendedProducts = [
{
id: 4,
name: "Elder Futhark Guide Book",
price: 24.99,
image: "https://readdy.ai/api/search-image?query=Hardcover%2520book%2520with%2520ancient%2520runic%2520symbols%2520embossed%2520on%2520leather%2520cover%252C%2520photographed%2520on%2520neutral%2520beige%2520background%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520product%2520photography%2520showing%2520texture%2520and%2520details&width=300&height=300&seq=4&orientation=squarish"
},
{
id: 5,
name: "Handwoven Altar Cloth",
price: 32.50,
image: "https://readdy.ai/api/search-image?query=Handwoven%2520natural%2520linen%2520altar%2520cloth%2520with%2520subtle%2520embroidered%2520runic%2520symbols%2520along%2520the%2520edges%252C%2520folded%2520neatly%2520on%2520neutral%2520beige%2520background%252C%2520professional%2520product%2520photography%2520with%2520soft%2520natural%2520lighting&width=300&height=300&seq=5&orientation=squarish"
},
{
id: 6,
name: "Crystal Divination Set",
price: 48.75,
image: "https://readdy.ai/api/search-image?query=Set%2520of%2520clear%2520quartz%2520and%2520amethyst%2520crystals%2520arranged%2520in%2520a%2520wooden%2520box%2520with%2520divination%2520guide%252C%2520photographed%2520on%2520neutral%2520beige%2520background%2520with%2520soft%2520natural%2520lighting%252C%2520professional%2520product%2520photography&width=300&height=300&seq=6&orientation=squarish"
}
];
// Order summary calculations
const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const discount = subtotal * 0.1; // 10% discount
const shippingCost = 5.99;
const total = subtotal - discount + shippingCost;
// Format dates
const formatDate = (date: Date) => {
return date.toLocaleDateString('en-US', {
weekday: 'long',
month: 'long',
day: 'numeric',
year: 'numeric'
});
};
const validateEmail = (email: string) => {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
};
const validatePassword = (password: string) => {
return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
};
const handleCreateAccount = () => {
const errors = {
email: '',
password: '',
terms: ''
};
if (!validateEmail(trackingEmailInput)) {
errors.email = 'Please enter a valid email address';
}
if (!validatePassword(password)) {
errors.password = 'Password must be at least 8 characters with 1 uppercase letter and 1 number';
}
if (!termsAccepted) {
errors.terms = 'Please accept the Terms and Conditions';
}
setFormErrors(errors);
if (!errors.email && !errors.password && !errors.terms) {
setAccountCreated(true);
setShowToast(true);
setTimeout(() => setShowToast(false), 3000);
}
};
return (
<>
<style>{styles}</style>
<div className="min-h-screen bg-gray-50 font-sans relative">
{showToast && (
<div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
<div className="flex items-center">
<i className="fas fa-check-circle mr-2"></i>
<p>Account successfully created! ({trackingEmailInput})</p>
</div>
</div>
)}
{/* Header */}
<header className="bg-white text-gray-800 py-4 px-6 shadow-md">
<div className="container mx-auto flex items-center justify-between">
<nav className="flex items-center space-x-6">
<a href="#" className="text-sm nav-link hover:text-amber-700 cursor-pointer">Shop</a>
<a href="#" className="text-sm nav-link hover:text-amber-700 cursor-pointer">About</a>
</nav>
<div className="flex items-center justify-center gap-3">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="THE CELLAR GUILD Logo" className="h-8 w-auto" />
<h1 className="text-2xl font-bold tracking-wider logo-text">THE CELLAR GUILD</h1>
</div>
<div className="flex items-center space-x-4">
<a href="#" className="text-sm font-medium hover:text-amber-700 cursor-pointer">Contact</a>
<div className="relative cursor-pointer">
<i className="fas fa-shopping-cart text-lg"></i>
<span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
{orderItems.reduce((sum, item) => sum + item.quantity, 0)}
</span>
</div>
</div>
</div>
<div className="container mx-auto mt-2">
<div className="border-t border-gray-400 opacity-30"></div>
</div>
</header>
<main className="container mx-auto py-8 px-4 min-h-[1024px]">
{/* Order Confirmation Section */}
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-sm shadow-md overflow-hidden mb-8 hover-scale">
<div className="p-8 text-center border-b border-gray-100">
<div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="fas fa-check text-4xl text-amber-700"></i>
</div>
<h1 className="text-3xl font-bold text-gray-800 mb-2">Order Successfully Placed!</h1>
<p className="text-gray-600 mb-4">Thank you for your purchase. We're preparing your mystical items with care.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
<div className="bg-gray-50 px-4 py-2 rounded-md">
<span className="text-gray-500 text-sm">Order Number</span>
<p className="font-medium text-gray-800">{orderNumber}</p>
</div>
<div className="bg-gray-50 px-4 py-2 rounded-md">
<span className="text-gray-500 text-sm">Order Date</span>
<p className="font-medium text-gray-800">{formatDate(orderDate)}</p>
</div>
<div className="bg-gray-50 px-4 py-2 rounded-md">
<span className="text-gray-500 text-sm">Estimated Delivery</span>
<p className="font-medium text-gray-800">{formatDate(estimatedDeliveryDate)}</p>
</div>
</div>
<div className="mt-6">
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/9668f607-ceb4-4e65-8a19-17e0a029d5a3"
data-readdy="true"
className="text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center cursor-pointer"
>
<i className="fas fa-arrow-left mr-2"></i> Return to Checkout
</a>
</div>
</div>
{/* Order Tracking Section */}
<div className="p-6 border-b border-gray-100">
<h2 className="section-header font-semibold text-gray-800 mb-4">Track Your Order</h2>
<div className="flex items-center mb-6">
<div className="relative flex items-center justify-center">
<div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center z-10">
<i className="fas fa-check text-white"></i>
</div>
<div className="absolute w-full h-1 bg-amber-600 right-1/2 z-0"></div>
</div>
<div className="flex-grow h-1 bg-amber-600"></div>
<div className="relative flex items-center justify-center">
<div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center z-10">
<i className="fas fa-box text-white"></i>
</div>
<div className="absolute w-full h-1 bg-gray-300 left-1/2 z-0"></div>
</div>
<div className="flex-grow h-1 bg-gray-300"></div>
<div className="relative flex items-center justify-center">
<div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center z-10">
<i className="fas fa-shipping-fast text-gray-500"></i>
</div>
<div className="absolute w-full h-1 bg-gray-300 left-1/2 z-0"></div>
</div>
<div className="flex-grow h-1 bg-gray-300"></div>
<div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
<i className="fas fa-home text-gray-500"></i>
</div>
</div>
<div className="flex justify-between text-sm text-gray-600 mb-6">
<div className="text-center">
<p className="font-medium text-amber-600">Order Placed</p>
<p>{orderDate.toLocaleDateString()}</p>
</div>
<div className="text-center">
<p className="font-medium text-amber-600">Processing</p>
<p>In progress</p>
</div>
<div className="text-center">
<p className="font-medium">Shipped</p>
<p>Pending</p>
</div>
<div className="text-center">
<p className="font-medium">Delivered</p>
<p>Pending</p>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-md mb-4">
<div className="flex flex-wrap items-center justify-between">
<div>
<p className="text-gray-500 text-sm">Shipping Carrier</p>
<p className="font-medium text-gray-800">Mystic Express</p>
</div>
<div className="mt-2 sm:mt-0">
<p className="text-gray-500 text-sm">Tracking Number</p>
<p className="font-medium text-gray-800">Tracking available soon</p>
</div>
<div className="mt-2 sm:mt-0">
<button className="text-amber-600 hover:text-amber-700 font-medium flex items-center cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-bell mr-2"></i> Get Notifications
</button>
</div>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-md">
<p className="text-gray-500 text-sm mb-1">Shipping Address</p>
<p className="font-medium text-gray-800">
123 Mystic Lane, Arcane City, AC 12345, United States
</p>
</div>
</div>
{/* Order Summary Section */}
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
<button className="text-amber-700 hover:opacity-90 flex items-center text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap transition-opacity">
<i className="fas fa-print mr-2"></i> Print Receipt
</button>
</div>
<div className="border border-gray-200 rounded-md overflow-hidden mb-6">
{orderItems.map((item, index) => (
<div key={item.id} className={`flex p-4 ${index < orderItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
<div className="w-16 h-16 flex-shrink-0">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover rounded-md"
/>
</div>
<div className="ml-4 flex-grow">
<div className="flex justify-between">
<h3 className="text-gray-800 font-medium">{item.name}</h3>
<p className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
</div>
<div className="flex justify-between text-sm text-gray-600 mt-1">
<p>Qty: {item.quantity}</p>
<p>${item.price.toFixed(2)} each</p>
</div>
</div>
</div>
))}
<div className="bg-gray-50 p-4">
<div className="flex justify-between mb-2">
<span className="text-gray-600">Subtotal</span>
<span className="text-gray-800">${subtotal.toFixed(2)}</span>
</div>
<div className="flex justify-between mb-2 text-green-600">
<span>Discount (10%)</span>
<span>-${discount.toFixed(2)}</span>
</div>
<div className="flex justify-between mb-2">
<span className="text-gray-600">Shipping (Standard)</span>
<span className="text-gray-800">${shippingCost.toFixed(2)}</span>
</div>
<div className="border-t border-gray-200 mt-2 pt-2">
<div className="flex justify-between font-semibold">
<span className="text-gray-800">Total</span>
<span className="text-gray-800">${total.toFixed(2)}</span>
</div>
<div className="text-sm text-gray-500 mt-1">
<span>Paid with Credit Card (ending in 4242)</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Account Creation Section */}
{!accountCreated ? (
<div className="bg-white rounded-sm shadow-md overflow-hidden mb-8 hover-scale">
<div className="p-6">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Create an Account to Track Your Order</h2>
<div className="flex flex-col md:flex-row gap-6">
<div className="md:w-1/2">
<p className="text-gray-600 mb-4">
Create an account to track your order, view order history, and enjoy faster checkout on your next purchase.
</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-gray-700">
<i className="fas fa-check-circle text-amber-600 mr-2"></i>
<span>Easy order tracking</span>
</li>
<li className="flex items-center text-gray-700">
<i className="fas fa-check-circle text-amber-600 mr-2"></i>
<span>Save your shipping addresses</span>
</li>
<li className="flex items-center text-gray-700">
<i className="fas fa-check-circle text-amber-600 mr-2"></i>
<span>Access to exclusive offers</span>
</li>
<li className="flex items-center text-gray-700">
<i className="fas fa-check-circle text-amber-600 mr-2"></i>
<span>Faster checkout process</span>
</li>
</ul>
</div>
<div className="md:w-1/2">
<div className="mb-4">
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
Email Address
</label>
<input
type="email"
id="email"
value={trackingEmailInput}
onChange={(e) => setTrackingEmailInput(e.target.value)}
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
placeholder="your.email@example.com"
/>
{formErrors.email && (
<p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
)}
</div>
<div className="mb-4">
<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
Create Password
</label>
<div>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
placeholder="••••••••"
/>
{formErrors.password && (
<p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
)}
</div>
</div>
<div className="flex items-center mb-4">
<div>
<input
type="checkbox"
id="terms"
checked={termsAccepted}
onChange={(e) => setTermsAccepted(e.target.checked)}
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
{formErrors.terms && (
<p className="text-red-500 text-sm mt-1">{formErrors.terms}</p>
)}
</div>
<label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
I agree to the <a href="#" className="text-amber-600 hover:text-amber-700">Terms and Conditions</a>
</label>
</div>
<div className="flex space-x-4">
<button
onClick={handleCreateAccount}
className="bg-amber-700 text-white px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap"
>
Create Account
</button>
<button
className="text-gray-700 px-6 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Skip for Now
</button>
</div>
</div>
</div>
</div>
</div>
) : (
<div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-user-check text-2xl text-green-600"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-2">Account Created Successfully!</h3>
<p className="text-gray-600 mb-4">
Your account has been created. You can now track your order and enjoy all member benefits.
</p>
<p className="text-sm text-gray-500">
A confirmation email has been sent to {trackingEmailInput}
</p>
</div>
)}
{/* Order Updates Section */}
<div className="bg-white rounded-sm shadow-md overflow-hidden mb-8 hover-scale">
<div className="p-6">
<h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Get Order Updates</h2>
<div className="flex flex-col md:flex-row gap-6">
<div className="md:w-1/2">
<p className="text-gray-600 mb-4">
Receive notifications about your order status, shipping updates, and delivery information.
</p>
<div className="mb-4">
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
Phone Number (for SMS updates)
</label>
<input
type="tel"
id="phone"
value={phoneInput}
onChange={(e) => setPhoneInput(e.target.value)}
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
placeholder="(123) 456-7890"
/>
</div>
</div>
<div className="md:w-1/2">
<div className="bg-gray-50 p-4 rounded-md mb-4">
<div className="flex items-start">
<div className="flex items-center h-5">
<input
id="notifications"
type="checkbox"
checked={notificationConsent}
onChange={() => setNotificationConsent(!notificationConsent)}
className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
/>
</div>
<div className="ml-3">
<label htmlFor="notifications" className="text-sm font-medium text-gray-700">
Send me notifications about:
</label>
<p className="text-xs text-gray-500">
Order status changes, shipping updates, delivery information, and occasional promotional offers.
</p>
</div>
</div>
</div>
<button
className="bg-amber-700 text-white px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap hover-scale"
>
Sign Up for Updates
</button>
</div>
</div>
</div>
</div>
{/* Continue Shopping Section */}
<div className="mb-8 text-center">
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/9668f607-ceb4-4e65-8a19-17e0a029d5a3"
data-readdy="true"
className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
>
Continue Shopping
</a>
</div>
{/* Recommended Products */}
<div className="mb-16">
<h2 className="text-2xl font-semibold text-gray-800 mb-6">You Might Also Like</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{recommendedProducts.map(product => (
<div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-64 overflow-hidden">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>
</div>
<div className="p-4">
<h3 className="product-title font-medium text-gray-800 mb-2">{product.name}</h3>
<div className="flex justify-between items-center">
<span className="text-gray-800 font-medium">${product.price.toFixed(2)}</span>
<button className="bg-amber-600 text-white px-3 py-1 rounded-md text-sm hover:bg-amber-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
Add to Cart
</button>
</div>
</div>
</div>
))}
</div>
</div>
</div>
</main>
<footer className="bg-gray-100 text-gray-800 py-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-2xl font-bold font-serif mb-4">THE CELLAR GUILD</h3>
<p className="text-gray-400 mb-4">
Crafting mystical experiences since 2015. Our handcrafted items bring ancient wisdom to modern life.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">
<i className="fab fa-pinterest-p"></i>
</a>
</div>
</div>
<div>
<h3 className="footer-heading font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">Shop All</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">Contact</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 cursor-pointer">Shipping & Returns</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
<p className="text-gray-400 mb-4">
Subscribe to receive updates, access to exclusive deals, and more.
</p>
<div className="flex">
<input
type="email"
placeholder="Your email address"
className="flex-grow px-4 py-2 rounded-l-md text-gray-900 text-sm border-none focus:outline-none focus:ring-1 focus:ring-amber-500"
/>
<button className="bg-amber-700 text-white px-4 py-2 rounded-r-sm hover:opacity-90 transition-opacity cursor-pointer !rounded-button whitespace-nowrap">
Subscribe
</button>
</div>
</div>
</div>
<div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-600 text-sm">
&copy; 2025 The Cellar Guild. All rights reserved.
</p>
<div className="mt-4 md:mt-0 flex space-x-4">
<a href="#" className="text-gray-600 hover:text-amber-700 text-sm cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-600 hover:text-amber-700 text-sm cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
</>
);
}
export default App
