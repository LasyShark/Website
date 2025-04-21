// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from 'react';
const App: React.FC = () => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [email, setEmail] = useState('');
const [selectedLanguage, setSelectedLanguage] = useState('English');
const [activeCategory, setActiveCategory] = useState('shipping');
const [searchQuery, setSearchQuery] = useState('');
const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
const faqSections = useRef<Record<string, HTMLDivElement | null>>({
shipping: null,
returns: null,
products: null,
ordering: null,
account: null,
general: null,
});
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
const scrollToSection = (category: string) => {
setActiveCategory(category);
faqSections.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
const toggleQuestion = (id: string) => {
setExpandedQuestions(prev => ({
...prev,
[id]: !prev[id]
}));
};
const faqData = {
shipping: [
{
id: 'shipping-1',
question: 'How long does shipping take?',
answer: 'Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination country and customs processing.'
},
{
id: 'shipping-2',
question: 'Do you ship internationally?',
answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs fees or import taxes that may apply.'
},
{
id: 'shipping-3',
question: 'How much does shipping cost?',
answer: 'Shipping costs are calculated based on weight, dimensions, and delivery location. Orders over $75 qualify for free standard shipping within the US. You can view exact shipping costs at checkout before completing your purchase.'
},
{
id: 'shipping-4',
question: 'Can I track my order?',
answer: 'Yes, once your order ships, you will receive a confirmation email with tracking information. You can also view your order status and tracking information in your account dashboard.'
},
{
id: 'shipping-5',
question: 'Do you offer expedited shipping?',
answer: 'Yes, we offer expedited shipping options at checkout. Expedited orders placed before 12pm EST on business days typically ship the same day. Next-day and 2-day shipping options are available for most US locations.'
}
],
returns: [
{
id: 'returns-1',
question: 'What is your return policy?',
answer: 'We accept returns within 30 days of delivery for items in their original condition with tags attached. Custom or personalized items cannot be returned unless defective.'
},
{
id: 'returns-2',
question: 'How do I initiate a return?',
answer: 'To initiate a return, please log into your account and select the order containing the items you wish to return. Follow the prompts to generate a return label. You can also contact our customer service team for assistance.'
},
{
id: 'returns-3',
question: 'Do I have to pay for return shipping?',
answer: 'Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product. Return shipping labels are available at a discounted rate through your account.'
},
{
id: 'returns-4',
question: 'How long does it take to process a refund?',
answer: 'Once we receive your return, it typically takes 3-5 business days to inspect and process. Refunds are issued to the original payment method and may take an additional 2-5 business days to appear on your statement, depending on your financial institution.'
},
{
id: 'returns-5',
question: 'Can I exchange an item instead of returning it?',
answer: 'Yes, exchanges are available for items in their original condition. To request an exchange, follow the same process as a return but select "Exchange" instead of "Return" when prompted. If the exchanged item has a different price, you will be charged or refunded the difference.'
}
],
products: [
{
id: 'products-1',
question: 'Are your products handmade?',
answer: 'Many of our products are handcrafted by skilled artisans. Each product description specifies whether the item is handmade, traditionally crafted, or manufactured. We prioritize authentic craftsmanship and sustainable production methods.'
},
{
id: 'products-2',
question: 'What materials are used in your products?',
answer: 'We use a variety of high-quality, sustainable materials including locally sourced wood, natural fibers, plant-based dyes, and recycled materials whenever possible. Specific material information is listed in each product description.'
},
{
id: 'products-3',
question: 'Do you offer gift wrapping?',
answer: 'Yes, we offer eco-friendly gift wrapping for an additional $5 per item. You can select this option during checkout. Gift messages can be included at no extra charge.'
},
{
id: 'products-4',
question: 'How should I care for my wooden items?',
answer: 'Wooden items should be kept away from direct sunlight and extreme temperature changes. Clean with a soft, slightly damp cloth and avoid harsh chemicals. Periodically treating wooden items with food-safe mineral oil will help maintain their beauty and longevity.'
},
{
id: 'products-5',
question: 'Are your dyes and materials safe?',
answer: 'Yes, all our dyes and materials are non-toxic and safe for their intended use. Our natural dyes are plant-based, and we avoid harmful chemicals in all our products. Specific safety information is included with each product.'
}
],
ordering: [
{
id: 'ordering-1',
question: 'How do I place an order?',
answer: 'You can place an order directly through our website by adding items to your cart and proceeding to checkout. You can check out as a guest or create an account for a faster checkout experience in the future.'
},
{
id: 'ordering-2',
question: 'Can I modify or cancel my order?',
answer: 'Orders can be modified or canceled within 2 hours of placement. Please contact our customer service team immediately if you need to make changes. Once an order has entered processing, we cannot guarantee changes can be made.'
},
{
id: 'ordering-3',
question: 'What payment methods do you accept?',
answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are securely processed and encrypted.'
},
{
id: 'ordering-4',
question: 'Do you offer wholesale or bulk discounts?',
answer: 'Yes, we offer wholesale pricing for qualified businesses and volume discounts for large orders. Please contact our sales team at wholesale@cellarguild.com for more information and to apply for a wholesale account.'
},
{
id: 'ordering-5',
question: 'Are there any taxes or duties?',
answer: 'Sales tax is collected according to local and state regulations. For international orders, customers are responsible for any customs fees, import duties, or taxes imposed by their country. These are not included in our prices or shipping costs.'
}
],
account: [
{
id: 'account-1',
question: 'How do I create an account?',
answer: 'You can create an account by clicking on the "Account" icon in the top navigation bar and selecting "Create Account," or during the checkout process. You\'ll need to provide your email address and create a password.'
},
{
id: 'account-2',
question: 'What are the benefits of creating an account?',
answer: 'Account benefits include faster checkout, order tracking, order history, saved shipping addresses, wishlist functionality, and access to exclusive promotions and early product releases.'
},
{
id: 'account-3',
question: 'How can I reset my password?',
answer: 'To reset your password, click on the "Account" icon, select "Sign In," and then click "Forgot Password." You\'ll receive an email with instructions to create a new password.'
},
{
id: 'account-4',
question: 'Can I save multiple shipping addresses?',
answer: 'Yes, you can save multiple shipping addresses in your account settings. This makes checkout faster when sending gifts or ordering for different locations.'
},
{
id: 'account-5',
question: 'How do I view my order history?',
answer: 'Your complete order history is available in your account dashboard. You can view order details, track shipments, and initiate returns for eligible orders.'
}
],
general: [
{
id: 'general-1',
question: 'What is The Cellar Guild?',
answer: 'The Cellar Guild is a curated marketplace for hobbyist materials, games, puzzles, and crafting supplies inspired by Nordic folk traditions. We work with artisans and craftspeople to bring authentic, high-quality products to enthusiasts worldwide.'
},
{
id: 'general-2',
question: 'Are you a sustainable company?',
answer: 'Sustainability is central to our mission. We prioritize eco-friendly materials, minimal packaging, carbon-neutral shipping options, and partnerships with artisans who share our commitment to environmental responsibility.'
},
{
id: 'general-3',
question: 'Do you have a physical store?',
answer: 'We are solely online.'
},
{
id: 'general-4',
question: 'How can I contact customer service?',
answer: 'Our customer service team is available Monday-Friday, 9am-5pm EST. You can reach us by email at hello@cellarguild.com, by phone at +1 (234) 567-8910, or through the contact form on our website.'
},
{
id: 'general-5',
question: 'Do you offer gift cards?',
answer: 'Yes, we offer digital gift cards in denominations ranging from $25 to $500. Gift cards never expire and can be used for any purchase on our website.'
}
]
};
const filteredFaqs = Object.entries(faqData).reduce((acc, [category, questions]) => {
const filteredQuestions = questions.filter(q =>
q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
q.answer.toLowerCase().includes(searchQuery.toLowerCase())
);
if (filteredQuestions.length > 0) {
acc[category] = filteredQuestions;
}
return acc;
}, {} as Record<string, typeof faqData.shipping>);
return (
<div className="min-h-screen bg-white text-gray-800 font-sans tracking-normal">
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
<nav className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} lg:static lg:shadow-none lg:p-0 lg:bg-transparent font-medium tracking-wide`}>
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">Shop</a>
<a href="#about" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">About</a>
<a href="#contact" className="text-gray-800 hover:text-amber-700 font-medium cursor-pointer">Contact</a>
</nav>
<div className="flex items-center justify-center flex-grow lg:flex-grow-0">
<a href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9" data-readdy="true" className="flex items-center space-x-2 cursor-pointer">
<img src="https://static.readdy.ai/image/78528fc9b9d09b4177519be0ab8007c6/7d65ab9ce55ac25c5de55d3ff06a128b.png" alt="The Cellar Guild Logo" className="h-10 w-auto" />
<span className="text-2xl font-bold font-serif tracking-wider">THE CELLAR GUILD</span>
</a>
</div>
<div className="flex items-center space-x-4">
<div className="relative group" onMouseLeave={() => setIsMenuOpen(false)}>
<button
className="flex items-center space-x-1 text-gray-800 hover:text-amber-700 !rounded-button whitespace-nowrap"
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
{/* FAQ Hero Section */}
<section className="relative py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">Frequently Asked Questions</h1>
<div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
<p className="text-gray-600 max-w-2xl mx-auto text-base">
Find answers to common questions about our globally sourced products from Europe, India, China, and beyond. We ensure the highest quality standards for all our international imports. Browse our shipping, returns, and product information below, or contact us for personalized assistance.
</p>
</div>
</div>
</section>
{/* FAQ Content */}
<section className="py-12 max-w-4xl mx-auto px-6">
{/* Search Bar */}
<div className="mb-12">
<div className="relative">
<input
type="text"
placeholder="Search for answers..."
className="w-full px-4 py-3 pl-12 border-2 border-gray-300 focus:border-amber-700 outline-none rounded-sm text-sm"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
{searchQuery && (
<button
className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => setSearchQuery('')}
>
<i className="fas fa-times"></i>
</button>
)}
</div>
</div>
{/* Category Navigation */}
<div className="mb-12 overflow-x-auto scrollbar-hide">
<div className="flex space-x-4 min-w-max">
{Object.keys(faqData).map((category) => (
<button
key={category}
onClick={() => scrollToSection(category)}
className={`px-6 py-3 font-medium rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer !rounded-button ${
activeCategory === category
? 'bg-amber-700 text-white'
: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
{category.charAt(0).toUpperCase() + category.slice(1)}
</button>
))}
</div>
</div>
{/* FAQ Accordion Sections */}
{searchQuery === '' ? (
Object.entries(faqData).map(([category, questions]) => (
<div
key={category}
ref={(el) => (faqSections.current[category] = el)}
className="mb-12"
>
<h2 className="text-3xl font-serif font-bold mb-6 pb-2 border-b-2 border-amber-700 tracking-tight">
{category.charAt(0).toUpperCase() + category.slice(1)}
</h2>
<div className="space-y-4">
{questions.map((item) => (
<div
key={item.id}
className={`border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 ${
expandedQuestions[item.id] ? 'shadow-md' : ''
}`}
>
<button
onClick={() => toggleQuestion(item.id)}
className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
>
<span className="font-medium">{item.question}</span>
<i className={`fas ${expandedQuestions[item.id] ? 'fa-chevron-up' : 'fa-chevron-down'} text-amber-700 transition-transform duration-300`}></i>
</button>
<div
className={`px-6 overflow-hidden transition-all duration-300 ${
expandedQuestions[item.id] ? 'max-h-96 py-4' : 'max-h-0'
}`}
>
<p className="text-gray-600 text-base">{item.answer}</p>
</div>
</div>
))}
</div>
</div>
))
) : (
Object.keys(filteredFaqs).length > 0 ? (
Object.entries(filteredFaqs).map(([category, questions]) => (
<div key={category} className="mb-12">
<h2 className="text-3xl font-serif font-bold mb-6 pb-2 border-b-2 border-amber-700 tracking-tight">
{category.charAt(0).toUpperCase() + category.slice(1)}
</h2>
<div className="space-y-4">
{questions.map((item) => (
<div
key={item.id}
className={`border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 ${
expandedQuestions[item.id] ? 'shadow-md' : ''
}`}
>
<button
onClick={() => toggleQuestion(item.id)}
className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
>
<span className="font-medium">{item.question}</span>
<i className={`fas ${expandedQuestions[item.id] ? 'fa-chevron-up' : 'fa-chevron-down'} text-amber-700 transition-transform duration-300`}></i>
</button>
<div
className={`px-6 overflow-hidden transition-all duration-300 ${
expandedQuestions[item.id] ? 'max-h-96 py-4' : 'max-h-0'
}`}
>
<p className="text-gray-600 text-base">{item.answer}</p>
</div>
</div>
))}
</div>
</div>
))
) : (
<div className="text-center py-12">
<i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
<p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
<p className="text-gray-400 mt-2">Try using different keywords or browse categories</p>
<button
onClick={() => setSearchQuery('')}
className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-sm transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Clear Search
</button>
</div>
)
)}
</section>
{/* Still Need Help Section */}
<section className="py-16 bg-gray-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-serif font-bold mb-6 tracking-tight">Still Need Help?</h2>
<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
If you couldn't find the answer you were looking for, our customer service team is here to help.
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-amber-700 text-3xl mb-4">
<i className="fas fa-envelope"></i>
</div>
<h3 className="text-xl font-medium mb-2">Email Us</h3>
<p className="text-gray-600 mb-4">Send us a message and we'll respond within 24 hours.</p>
<a href="mailto:hello@cellarguild.com" className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
hello@cellarguild.com
</a>
</div>
<div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-amber-700 text-3xl mb-4">
<i className="fas fa-phone"></i>
</div>
<h3 className="text-xl font-medium mb-2">Call Us</h3>
<p className="text-gray-600 mb-4">Available Monday-Friday, 9am-5pm EST.</p>
<a href="tel:+12345678910" className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
+1 (234) 567-8910
</a>
</div>
<div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-amber-700 text-3xl mb-4">
<i className="fas fa-comments"></i>
</div>
<h3 className="text-xl font-medium mb-2">Live Chat</h3>
<p className="text-gray-600 mb-4">Chat with our support team in real-time.</p>
<button className="text-amber-700 hover:text-amber-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
Start Chat
</button>
</div>
</div>
<a
href="https://readdy.ai/home/448ca9b3-29a8-40b6-a06c-a3cf72d6a1a9/37d6a073-5f9e-44c7-b2d9-230dd35808b9"
data-readdy="true"
className="inline-block border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-sm transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Return to Home Page
</a>
</div>
</section>
{/* Footer */}
<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div>
<h3 className="text-lg font-serif font-bold mb-4 tracking-wide">The Cellar Guild</h3>
<p className="text-gray-600 mb-4">Curated collections of hobbyist materials inspired by Nordic folk traditions.</p>
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
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">FAQ</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
<li><a href="#" className="text-gray-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Contact Us</a></li>
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
<p className="text-sm text-gray-500 mb-4 md:mb-0 tracking-wide">© 2025 The Cellar Guild. All rights reserved.</p>
<div className="flex space-x-4">
<a href="#" className="text-sm text-gray-500 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-sm text-gray-500 hover:text-amber-700 transition-colors duration-300 cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</footer>
{/* Back to top button */}
<button
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
className="fixed bottom-8 right-8 bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-arrow-up"></i>
</button>
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
</div>
);
};
export default App
