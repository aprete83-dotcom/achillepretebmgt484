/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Clock, 
  Leaf, 
  Zap, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  UtensilsCrossed,
  Timer,
  ShieldCheck
} from "lucide-react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-chipotle-cream font-sans text-chipotle-dark selection:bg-chipotle-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-chipotle-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-chipotle-red rounded-full flex items-center justify-center">
              <UtensilsCrossed className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">Chipotle</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-chipotle-red font-bold text-sm bg-red-50 px-3 py-1 rounded-full animate-pulse">
              <Timer className="w-4 h-4" />
              {formatTime(timeLeft)} left for discount
            </div>
            <button className="bg-chipotle-red text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-all shadow-sm">
              Order Now
            </button>
          </div>
          <button className="md:hidden bg-chipotle-red text-white px-4 py-2 rounded-full font-bold text-xs">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Fresh, Healthy, and <span className="text-chipotle-red">Ready in Minutes.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Build your perfect bowl with real ingredients. Fast, customizable, and convenient—exactly how lunch should be.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-chipotle-red text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 hover:scale-[1.02] active:scale-95">
                    Order Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white text-chipotle-dark border-2 border-chipotle-dark/10 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    Quick Reorder
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-chipotle-red font-bold">
                  <Zap className="w-5 h-5 fill-current" />
                  <span>Get a discount if you order in the next {formatTime(timeLeft)}!</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="font-bold text-chipotle-dark">Millions of meals served</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-chipotle-dark/20 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fresh Chipotle Burrito Bowl with Avocado, Rice, and Grilled Chicken" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chipotle-dark/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-chipotle-red/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-green-600" />,
                title: "100% Real Ingredients",
                description: "No artificial flavors or preservatives. Just fresh produce and responsibly raised meat."
              },
              {
                icon: <Zap className="w-10 h-10 text-chipotle-red" />,
                title: "Ready in Minutes",
                description: "Order ahead and skip the line. Your meal is prepared fresh and ready when you arrive."
              },
              {
                icon: <UtensilsCrossed className="w-10 h-10 text-orange-700" />,
                title: "Fully Customizable",
                description: "Build it exactly how you want it. Over 53 ingredients to fit your taste and macros."
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 mx-auto bg-chipotle-cream w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="py-24 bg-chipotle-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1604467731651-bb20239d8935?auto=format&fit=crop&q=80&w=800" 
                alt="Freshly grilled steak and hand-cut vegetables at Chipotle" 
                className="rounded-[32px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                Lunch Shouldn't Be a Struggle.
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                    <span className="font-bold text-lg">✕</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-red-400">The Old Way</h4>
                    <p className="text-gray-400">Expensive "healthy" food, long wait times, and complicated apps that require a 10-step account setup.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-green-400">The Chipotle Way</h4>
                    <p className="text-gray-300">Simple ordering, ready fast, and no account required. Just real food, really fast.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button className="bg-chipotle-red text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all flex items-center gap-2">
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 bg-chipotle-red text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 rounded-full font-bold text-sm uppercase tracking-widest">
            Limited Time Offer
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8">
            Get a discount if you order in the next 10 minutes.
          </h2>
          <div className="text-6xl lg:text-8xl font-display font-black mb-8 tabular-nums">
            {formatTime(timeLeft)}
          </div>
          <p className="text-2xl mb-12 opacity-90">
            Fresh, healthy lunch is just a few clicks away. Don't wait—this offer is limited!
          </p>
          <button className="bg-white text-chipotle-red px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all shadow-2xl shadow-black/20 hover:scale-105 active:scale-95">
            Order Now
          </button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Millions of Meals Served.</h2>
            <p className="text-xl text-gray-500">Join the thousands of people choosing real food every day.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                text: "The fastest healthy lunch I've found. No account needed, just order and go."
              },
              {
                name: "Marcus T.",
                text: "Actually fresh ingredients. You can see them prepping the food right there."
              },
              {
                name: "Elena R.",
                text: "The customization is key. I can get exactly what I need for my workout days."
              }
            ].map((review, i) => (
              <div key={i} className="bg-chipotle-cream p-10 rounded-[32px] border border-chipotle-dark/5">
                <div className="flex text-yellow-500 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-chipotle-dark mb-8 font-medium leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-chipotle-dark/10 rounded-full flex items-center justify-center font-bold text-chipotle-dark">
                    {review.name[0]}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-green-50 rounded-[32px] border border-green-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-900">No Commitment Required</h4>
                <p className="text-green-700">Order as a guest. No subscriptions, no hidden fees.</p>
              </div>
            </div>
            <div className="text-green-900 font-bold text-lg">
              4.9/5 Average Rating
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-chipotle-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8">
            Ready for a <span className="text-chipotle-red">Real</span> Lunch?
          </h2>
          <div className="flex items-center justify-center gap-2 text-chipotle-red font-bold text-xl mb-12">
            <Timer className="w-6 h-6" />
            <span>Discount expires in {formatTime(timeLeft)}!</span>
          </div>
          <button className="w-full sm:w-auto bg-chipotle-red text-white px-16 py-6 rounded-2xl font-bold text-2xl hover:bg-red-700 transition-all shadow-2xl shadow-red-900/30 hover:scale-105 active:scale-95">
            Order Now
          </button>
          <p className="mt-8 text-gray-500 font-medium">
            Join millions of satisfied customers. Freshness guaranteed.
          </p>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-chipotle-dark/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-chipotle-red rounded-full flex items-center justify-center">
              <UtensilsCrossed className="text-white w-3 h-3" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">Chipotle</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-chipotle-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-chipotle-red transition-colors">Terms</a>
            <a href="#" className="hover:text-chipotle-red transition-colors">Nutrition</a>
          </div>
          <p className="text-sm text-gray-400">© 2026 Chipotle Mexican Grill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
