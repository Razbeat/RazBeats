/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F5F2EB] text-right" dir="rtl">
      
      {/* Introduction / Story */}
      <div className="py-16 md:py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row-reverse items-start gap-12 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-6xl font-serif text-[#2C2A26] leading-tight">
            הסיפור שלנו - <br/> מתיקות שעוברת מדור לדור.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-base md:text-xl text-[#5D5A53] font-light leading-relaxed mb-6 md:mb-8">
            מזרחי מחסן ממתקים ושוקולד הוקם מתוך אהבה גדולה לעולם המתיקות. אנחנו מאמינים שכל רגע בחיים ראוי לחגיגה מתוקה, ולכן אנחנו דואגים להביא לכם את המותגים הטובים ביותר מכל רחבי העולם.
          </p>
          <p className="text-base md:text-xl text-[#5D5A53] font-light leading-relaxed mb-6 md:mb-8">
            מהמחסן שלנו בלב הארץ, אנחנו משווקים מגוון עצום של שוקולדים, סוכריות, חטיפים ומוצרי אפייה. השירות המקצועי והאישי שלנו הפך אותנו לבית עבור אלפי לקוחות מרוצים, מסיטונאים ועד למשפחות שרוצות להמתיק את היום.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?auto=format&fit=crop&q=80&w=1200" 
            alt="Chocolate Display" 
            className="w-full h-[250px] md:h-[400px] object-cover mt-8 md:mt-12 rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#A8A29E] mt-4">
            המחסן הראשי, ישראל
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1582050041567-9cfdd330d545?auto=format&fit=crop&q=80&w=1200" 
             alt="Colorful Candies" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-8 md:p-12 lg:p-24 bg-[#FFF9E6]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-4 md:mb-6">איכות ללא פשרות</span>
           <h3 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 text-[#2C2A26] leading-tight">
             המותגים המובילים <br/> בעולם אצלכם ביד.
           </h3>
           <p className="text-base md:text-lg text-[#5D5A53] font-light leading-relaxed mb-8 md:mb-12 max-w-md">
             אנחנו עובדים ישירות עם היצרנים המובילים בעולם כדי להבטיח טריות, איכות ומחירים ללא תחרות. כל מוצר שנכנס למחסן שלנו עובר בקרת איכות קפדנית.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4 md:mb-6">שירות סיטונאי</span>
           <h3 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 text-[#F5F2EB] leading-tight">
             פתרונות לעסקים <br/> ולאירועים.
           </h3>
           <p className="text-base md:text-lg text-[#A8A29E] font-light leading-relaxed mb-8 md:mb-12 max-w-md">
             בין אם אתם בעלי חנות, מארגני אירועים או פשוט מתכננים מסיבה גדולה - אנחנו כאן כדי לספק לכם את כל מה שצריך בכמויות גדולות ובמחירים משתלמים במיוחד.
           </p>
        </div>
        <div className="relative h-[300px] md:h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=1200" 
             alt="Sweets Display" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
};

export default About;