/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'שוקולד בלגי מובחר',
    tagline: 'טעם של איכות.',
    description: 'חבילת פרלינים בעבודת יד עם מילויים מפתיעים.',
    longDescription: 'השוקולד הבלגי שלנו מיוצר בשיטות מסורתיות על ידי שוקולטיירים מומחים. כל פרלין הוא יצירת אמנות של טעם ומרקם, עם מילויים של גנאש, קרמל מלוח, אגוזי לוז ועוד. המתנה המושלמת למי שאוהב איכות ללא פשרות.',
    price: 89,
    category: 'שוקולד',
    imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['ייבוא ישיר מבלגיה', 'עבודת יד', 'ללא חומרים משמרים']
  },
  {
    id: 'p2',
    name: 'מארז סוכריות גומי',
    tagline: 'צבעוני ומתוק.',
    description: 'תערובת סוכריות גומי מכל הסוגים והצבעים.',
    longDescription: 'המארז שכל ילד (וגם מבוגר) חולם עליו. תערובת עשירה של דובוני גומי, נחשים, לבבות ופירות בטעמים עזים. כל הסוכריות שלנו טריות ורכות, ומגיעות במארז השומר על הטריות לאורך זמן.',
    price: 45,
    category: 'סוכריות',
    imageUrl: 'https://images.unsplash.com/photo-1582050041567-9cfdd330d545?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1582050041567-9cfdd330d545?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['מגוון טעמי פירות', 'טריות מובטחת', 'מתאים למסיבות']
  },
  {
    id: 'p3',
    name: 'שוקולד מריר 70%',
    tagline: 'לחובבי השוקולד האמיתיים.',
    description: 'שוקולד מריר איכותי עם אחוז מוצקי קקאו גבוה.',
    longDescription: 'חווית שוקולד עמוקה ועשירה. השוקולד המריר שלנו מכיל 70% מוצקי קקאו מובחרים, המעניקים לו טעם מאוזן בין מרירות למתיקות. עשיר בנוגדי חמצון ומושלם לצד כוס קפה איכותית.',
    price: 25,
    category: 'שוקולד',
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['70% קקאו', 'טבעוני', 'איכות פרימיום']
  },
  {
    id: 'p4',
    name: 'מארז חטיפים בינלאומי',
    tagline: 'הכי טובים מכל העולם.',
    description: 'מבחר חטיפים אהובים מארה"ב ואירופה.',
    longDescription: 'רוצים לטעום את מה שכולם אוכלים בחו"ל? המארז הזה כולל את החטיפים הכי פופולריים שלא תמיד תמצאו בסופר השכונתי. צ\'יפסים מיוחדים, עוגיות ייחודיות וחטיפי שוקולד נדירים.',
    price: 120,
    category: 'חטיפים',
    imageUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1599490659213-e2b9527bb087?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['ייבוא בלעדי', 'מגוון רחב', 'מתנה נהדרת']
  },
  {
    id: 'p5',
    name: 'סוכריות על מקל פירות',
    tagline: 'כיף לכל גיל.',
    description: 'סוכריות צבעוניות בטעמי תות, דובדבן, תפוז ועוד.',
    longDescription: 'הסוכריות הקלאסיות שכולנו אוהבים. עשויות מרכיבים איכותיים עם תמציות פרי טבעיות. המארז כולל 50 סוכריות עטופות בנפרד, מושלם לחלוקה ביום הולדת או סתם לפינוק יומי.',
    price: 35,
    category: 'סוכריות',
    imageUrl: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['טעמי פירות טבעיים', 'ללא גלוטן', 'מארז חסכוני']
  },
  {
    id: 'p6',
    name: 'מארז קינדר חגיגי',
    tagline: 'האהוב על הילדים.',
    description: 'כל מוצרי קינדר במארז אחד מפנק.',
    longDescription: 'המארז האולטימטיבי לחובבי קינדר. כולל ביצי הפתעה, אצבעות שוקולד, קינדר בואנו וקינדר קאנטרי. השוקולד עם חלב הכי אהוב בעולם עכשיו במארז חגיגי ומעוצב.',
    price: 95,
    category: 'שוקולד',
    imageUrl: 'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['שוקולד חלב איכותי', 'כולל הפתעות', 'מתאים כמתנה']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "ההיסטוריה של השוקולד",
        date: "12 באפריל, 2025",
        excerpt: "איך הפך פרי הקקאו המריר לממתק האהוב ביותר בעולם?",
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53] text-right", dir: "rtl" },
                "השוקולד התחיל את דרכו כמשקה מר ומתובל בתרבויות המאיה והאצטקים. עבורם, פולי הקקאו היו יקרי ערך עד כדי כך ששימשו כמטבע עובר לסוחר."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53] text-right", dir: "rtl" },
                "רק לאחר שהגיע לאירופה והתווסף לו סוכר, הוא החל לקבל את הצורה המתוקה שאנחנו מכירים היום. במאה ה-19, המצאת מכונת הלחיצה לקקאו אפשרה לייצר שוקולד מוצק, ומשם הדרך לפרלינים ולטבלאות השוקולד הייתה קצרה."
            ),
            React.createElement("blockquote", { className: "border-r-2 border-[#2C2A26] pr-6 italic text-xl text-[#2C2A26] my-10 font-serif text-right", dir: "rtl" },
                "\"שוקולד הוא לא רק אוכל, הוא חוויה של אושר.\""
            )
        )
    },
    {
        id: 2,
        title: "איך לבחור שוקולד איכותי?",
        date: "28 במרץ, 2025",
        excerpt: "טיפים מהמומחים שלנו לזיהוי שוקולד פרימיום אמיתי.",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53] text-right", dir: "rtl" },
                "לא כל שוקולד הוא אותו דבר. כדי לזהות שוקולד איכותי, כדאי להסתכל על רשימת הרכיבים - ככל שהיא קצרה יותר, כך טוב יותר."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53] text-right", dir: "rtl" },
                "שוקולד איכותי צריך להיות בעל ברק עדין, להישבר בצליל 'קליק' חד, ולהימס בפה בצורה חלקה ללא תחושת גרגיריות. אחוז מוצקי הקקאו הוא מדד חשוב, אך גם איכות פולי הקקאו עצמם קובעת את הטעם הסופי."
            )
        )
    }
];

export const BRAND_NAME = 'מזרחי';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';