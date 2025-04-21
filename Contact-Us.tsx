// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const App: React.FC = () => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [selectedLanguage, setSelectedLanguage] = useState('English');
const [email, setEmail] = useState('');
const [formData, setFormData] = useState({
name: '',
email: '',
subject: 'General Inquiry',
message: ''
});
const [formErrors, setFormErrors] = useState({
name: '',
email: '',
message: ''
});
const [formSubmitted, setFormSubmitted] = useState(false);
const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
const toggleCart = () => {
setIsCartOpen(!isCartOpen);
};
const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};
const handleSubscribe = (e: React.FormEvent) => {
e.preventDefault();
alert(`Thank you for subscribing with ${email}!`);
setEmail('');
};
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
// Clear error when user types
if (formErrors[name as keyof typeof formErrors]) {
setFormErrors({
...formErrors,
[name]: ''
});
}
};
const validateForm = () => {
const errors = {
name: '',
email: '',
message: ''
};
let isValid = true;
if (!formData.name.trim()) {
errors.name = 'Name is required';
isValid = false;
}
if (!formData.email.trim()) {
errors.email = 'Email is required';
isValid = false;
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
errors.email = 'Email is invalid';
isValid = false;
}
if (!formData.message.trim()) {
errors.message = 'Message is required';
isValid = false;
}
setFormErrors(errors);
return isValid;
};
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (validateForm()) {
// Form submission logic would go here
setFormSubmitted(true);
setFormData({
name: '',
email: '',
subject: 'General Inquiry',
message: ''
});
// Reset form after 5 seconds
setTimeout(() => {
setFormSubmitted(false);
}, 5000);
}
};
const toggleAccordion = (index: number) => {
setActiveAccordion(activeAccordion === index ? null : index);
};
const faqItems = [
{
question: "What types of products does The Cellar Guild offer?",
answer: "The Cellar Guild specializes in artisanal hobbyist materials, including craft supplies, board games, puzzles, books, candles, textile arts, divination tools, and herbal crafts. All our products are carefully curated for quality and uniqueness. "
},
{
question: "Do you ship internationally?",
answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on location. Please note that customers are responsible for any customs fees or import taxes that may apply to international orders."
},
{
question: "What is your return policy?",
answer: "We accept returns within 30 days of delivery for items in their original condition. Please contact our customer service team to initiate a return. Custom or personalized items cannot be returned unless they arrive damaged or defective."
},
{
question: "How can I track my order?",
answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can use this tracking number on our website or the carrier's website to monitor your package's journey. For any issues with tracking, please contact our customer support team."
},
{
question: "Do you offer gift wrapping services?",
answer: "Yes! We offer premium gift wrapping services for all our products. During checkout, you can select the gift wrap option and even include a personalized message. Our elegant wrapping adds a special touch to your gifts."
}
];
return (
<div className="min-h-screen bg-white text-gray-800 font-sans">
{/* Header */}
<header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="lg:hidden">
<button
onClick={toggleMenu}
className="text-gray-800 hover:text-amber-700 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-bars text-xl"></i>
</button>
</div>
<nav className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} lg:static lg:shadow-none lg:p-0 lg:bg-transparent font-sans`}>
<a href="#shop" className="text-gray-800 hover:text-amber-700 font-medium tracking-wide cursor-pointer">Shop</a>
<a href="#about" className="text-gray-800 hover:text-amber-700 font-medium tracking-wide cursor-pointer">About</a>
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="text-amber-700 font-medium tracking-wide cursor-pointer hover:text-amber-800">Contact</a>
</nav>
<div className="flex items-center justify-center flex-grow lg:flex-grow-0">
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="flex items-center space-x-2 cursor-pointer">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="h-10 w-auto" />
<span className="text-2xl font-bold font-serif tracking-widest">THE CELLAR GUILD</span>
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
className="relative text-gray-800 hover:text-amber-700 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-shopping-cart text-xl"></i>
<span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
</button>
</div>
</div>
</header>
{/* Breadcrumb */}
<div className="bg-gray-50 py-3">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center text-sm text-gray-500">
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="hover:text-amber-700 cursor-pointer">Home</a>
<span className="mx-2">/</span>
<span className="text-amber-700">Contact Us</span>
</div>
</div>
</div>
{/* Hero Section */}
<section className="relative py-16 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
<p className="text-xl font-sans text-gray-600 max-w-2xl mx-auto">We're here to help with any questions about our products, orders, or crafting traditions. Reach out to us and we'll respond as soon as possible.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
<i className="fas fa-map-marker-alt text-amber-700 text-xl"></i>
</div>
<h3 className="text-xl font-medium mb-2">Visit Us</h3>
<p className="text-gray-600">123 Craft Lane</p>
<p className="text-gray-600">Artisan District</p>
</div>
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
<i className="fas fa-envelope text-amber-700 text-xl"></i>
</div>
<h3 className="text-xl font-medium mb-2">Email Us</h3>
<p className="text-gray-600">hello@cellarguild.com</p>
<p className="text-gray-600">support@cellarguild.com</p>
</div>
<div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
<i className="fab fa-whatsapp text-amber-700 text-xl"></i>
</div>
<h3 className="text-xl font-medium mb-2">WhatsApp Us</h3>
<p className="text-gray-600">+1 (234) 567-8910</p>
<p className="text-gray-600">Available 24/7</p>
</div>
</div>
<div className="bg-white rounded-sm shadow-md overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8">
<h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
{formSubmitted ? (
<div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm mb-6">
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="font-medium">Message Sent Successfully!</span>
</div>
<p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
</div>
) : (
<form onSubmit={handleSubmit}>
<div className="mb-4">
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleInputChange}
className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm`}
placeholder="Your name"
/>
{formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
</div>
<div className="mb-4">
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleInputChange}
className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm`}
placeholder="Your email address"
/>
{formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
</div>
<div className="mb-4">
<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
<div className="relative">
<select
id="subject"
name="subject"
value={formData.subject}
onChange={handleInputChange}
className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none text-sm"
>
<option value="General Inquiry">General Inquiry</option>
<option value="Product Question">Product Question</option>
<option value="Order Status">Order Status</option>
<option value="Return Request">Return Request</option>
<option value="Wholesale Inquiry">Wholesale Inquiry</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
<i className="fas fa-chevron-down text-gray-400"></i>
</div>
</div>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
<textarea
id="message"
name="message"
value={formData.message}
onChange={handleInputChange}
rows={5}
className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm`}
placeholder="How can we help you?"
></textarea>
{formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
</div>
<button
type="submit"
className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap hover:shadow-lg transform hover:-translate-y-0.5"
>
Send Message
</button>
</form>
)}
</div>
<div className="h-full min-h-[400px] lg:min-h-0 relative">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12450.475672089725!2d-76.94894284999999!3d38.8663683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a97c2bd0683d%3A0x7f13c8c18ea2e96f!2sTemple%20Hills%2C%20MD!5e0!3m2!1sen!2sus!4v1650154862224!5m2!1sen!2sus"
className="absolute inset-0 w-full h-full border-0"
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="The Cellar Guild Location"
></iframe>
</div>
</div>
</div>
</div>
</section>
{/* Recently Viewed Products Section */}
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif font-bold mb-4">Others Also Viewed</h2>
<p className="text-xl font-sans text-gray-600 max-w-2xl mx-auto">Discover what other craft enthusiasts are exploring</p>
</div>
<div className="relative">
<Swiper
modules={[Pagination, Autoplay]}
spaceBetween={24}
slidesPerView={1}
pagination={{ clickable: true }}
autoplay={{ delay: 3000 }}
breakpoints={{
640: { slidesPerView: 2 },
768: { slidesPerView: 3 },
1024: { slidesPerView: 4 }
}}
className="pb-12"
>
<SwiperSlide>
<div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
<img src="https://readdy.ai/api/search-image?query=A%20beautiful%20handcrafted%20leather%20journal%20with%20intricate%20embossing%20and%20gold%20accents%2C%20photographed%20on%20a%20clean%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling&width=400&height=400&seq=1&orientation=squarish" alt="Leather Journal" className="w-full h-full object-cover" />
</div>
<div className="p-4">
<h3 className="text-xl font-sans font-medium mb-2">Artisan Leather Journal</h3>
<p className="text-amber-700 font-medium">$45.00</p>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
<img src="https://readdy.ai/api/search-image?query=A%20set%20of%20premium%20wooden%20calligraphy%20pens%20with%20brass%20details%20and%20various%20nibs%2C%20arranged%20on%20a%20clean%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling&width=400&height=400&seq=2&orientation=squarish" alt="Calligraphy Set" className="w-full h-full object-cover" />
</div>
<div className="p-4">
<h3 className="font-medium mb-2">Calligraphy Master Set</h3>
<p className="text-amber-700 font-medium">$75.00</p>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
<img src="https://readdy.ai/api/search-image?query=A%20collection%20of%20handmade%20soy%20wax%20candles%20in%20amber%20glass%20jars%20with%20botanical%20decorations%2C%20photographed%20on%20a%20clean%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling&width=400&height=400&seq=3&orientation=squarish" alt="Artisan Candles" className="w-full h-full object-cover" />
</div>
<div className="p-4">
<h3 className="font-medium mb-2">Botanical Candle Set</h3>
<p className="text-amber-700 font-medium">$35.00</p>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
<img src="https://readdy.ai/api/search-image?query=A%20premium%20wooden%20chess%20set%20with%20hand-carved%20pieces%20and%20inlaid%20board%2C%20photographed%20on%20a%20clean%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling&width=400&height=400&seq=4&orientation=squarish" alt="Chess Set" className="w-full h-full object-cover" />
</div>
<div className="p-4">
<h3 className="font-medium mb-2">Artisan Chess Set</h3>
<p className="text-amber-700 font-medium">$129.00</p>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
<img src="https://readdy.ai/api/search-image?query=A%20set%20of%20handmade%20ceramic%20pottery%20tools%20and%20brushes%20with%20wooden%20handles%2C%20arranged%20on%20a%20clean%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20minimal%20styling&width=400&height=400&seq=5&orientation=squarish" alt="Pottery Tools" className="w-full h-full object-cover" />
</div>
<div className="p-4">
<h3 className="font-medium mb-2">Pottery Tool Kit</h3>
<p className="text-amber-700 font-medium">$89.00</p>
</div>
</div>
</SwiperSlide>
</Swiper>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="py-16 bg-gray-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
<p className="text-xl font-sans text-gray-600">Find answers to common questions about our products and services.</p>
</div>
<div className="space-y-4">
{faqItems.slice(0, 4).map((item, index) => (
<div key={index} className="bg-white rounded-sm shadow-md overflow-hidden">
<button
className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => toggleAccordion(index)}
>
<span className="font-medium">{item.question}</span>
<i className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-amber-700 transition-transform duration-300`}></i>
</button>
<div
className={`px-6 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
>
<p className="text-gray-600">{item.answer}</p>
</div>
</div>
))}
</div>
<div className="text-center mt-10">
<p className="text-gray-600 mb-4">Still have questions?</p>
<a
href="#"
className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium cursor-pointer"
>
<span>View our complete FAQ</span>
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-white">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="flex justify-center mb-6">
<div className="w-16 h-1 bg-amber-700"></div>
</div>
<h2 className="text-3xl font-serif font-bold mb-4">Join The Guild</h2>
<p className="text-xl font-sans text-gray-600 mb-8">Subscribe to receive updates on new collections, special offers, and crafting inspiration.</p>
<form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
<input
type="email"
placeholder="Your email address"
className="px-4 py-3 border-2 border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none rounded-sm flex-grow text-sm transition-all duration-300"
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
<h3 className="text-2xl font-serif font-bold tracking-widest mb-4">THE CELLAR GUILD</h3>
<p className="text-gray-600 mb-4">Curated collections of premium hobbyist materials for creative enthusiasts.</p>
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
<h3 className="text-lg font-serif font-bold tracking-wide mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">About Us</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/1d23e54f-6ed3-409c-934a-f225112abd17" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Shop All</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/c95282db-d467-43b5-b2d3-e44e5582cc9d" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
<li><a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-serif font-bold mb-4">Contact</h3>
<ul className="space-y-2">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-2 text-amber-700"></i>
<span className="text-gray-600">123 Craft Lane, Artisan District</span>
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
};
export default App
