
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 md:pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-8 md:mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          חזרה לחנות
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="text-right order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl font-serif text-[#2C2A26] mb-3 md:mb-4">קופה</h1>
            <p className="text-sm text-[#5D5A53] mb-8 md:mb-12">זהו אתר לדוגמה. הרכישה מושבתת.</p>
            
            <div className="space-y-8 md:space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-lg md:text-xl font-serif text-[#2C2A26] mb-4 md:mb-6">פרטי התקשרות</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="כתובת אימייל" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled dir="ltr" />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[#2C2A26] cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-xs md:text-sm text-[#5D5A53] cursor-not-allowed">שלח לי עדכונים ומבצעים באימייל</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-lg md:text-xl font-serif text-[#2C2A26] mb-4 md:mb-6">כתובת למשלוח</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="שם פרטי" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                      <input type="text" placeholder="שם משפחה" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                   </div>
                   <input type="text" placeholder="כתובת" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                   <input type="text" placeholder="דירה, כניסה וכו' (אופציונלי)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="עיר" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                      <input type="text" placeholder="מיקוד" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-lg md:text-xl font-serif text-[#2C2A26] mb-4 md:mb-6">תשלום</h2>
                <div className="p-4 md:p-6 border border-[#D6D1C7] bg-white/50 space-y-4">
                   <p className="text-xs md:text-sm text-[#5D5A53] mb-2">כל העסקאות מאובטחות ומוצפנות.</p>
                   <input type="text" placeholder="מספר כרטיס" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled dir="ltr" />
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="תוקף (MM/YY)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled dir="ltr" />
                      <input type="text" placeholder="CVV" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed text-right" disabled dir="ltr" />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-[#A8A29E] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium cursor-not-allowed opacity-80"
                >
                    שלם עכשיו — ₪{total}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pr-12 lg:border-r border-[#D6D1C7] text-right order-1 lg:order-2">
            <h2 className="text-lg md:text-xl font-serif text-[#2C2A26] mb-6 md:mb-8">סיכום הזמנה</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE] relative flex-shrink-0">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                       <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C2A26] text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                    </div>
                    <div className="flex-1 min-w-0">
                       <h3 className="font-serif text-[#2C2A26] text-sm md:text-base truncate">{item.name}</h3>
                       <p className="text-[10px] md:text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D5A53] flex-shrink-0">₪{item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>סה״כ מוצרים</span>
                 <span>₪{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>משלוח</span>
                 <span>חינם</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26]">סה״כ לתשלום</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">ILS</span>
                   <span className="font-serif text-2xl text-[#2C2A26]">₪{total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;