import logo from '@/assets/Logo.jpg';
import handmade from '@/assets/All products are Handmade.png';
import bows from '@/assets/Crochet_Bow_Charms.png';
import keychain from '@/assets/Crochet_Bow_Key_Chain.png';
import pinkBag from '@/assets/Crochet_Handbag.png';
import bouquet from '@/assets/Crochet_Sunflower_Bouqet.png';
import bouquetLarge from '@/assets/Crochet_Sunflower_Bouqet_2.png';
import grannyBag from '@/assets/Granny Square Handbag.png';
export const images = { logo, handmade, bows, keychain, pinkBag, bouquet, bouquetLarge, grannyBag };
export const instagram = 'https://www.instagram.com/twirlandswirll/';
export const instagramDM = 'https://www.instagram.com/direct/t/17844281517048048/';
export const whatsapp = (message = 'Hello, I would like to know more about Twirl and Swirl.') => `https://wa.me/919084666012?text=${encodeURIComponent(message)}`;
export const productEnquiry = (name: string) => whatsapp(`Hello, I would like to know the price of ${name}.`);
export const products = [
 { name: 'Granny Square Handbag', category: 'Bags', image: images.grannyBag, price: 1299, tag: 'EVERYDAY FAVOURITE' },
 { name: 'Sunflower Bouquet', category: 'Flowers', image: images.bouquet, price: 899, tag: 'A LITTLE SUNSHINE' },
 { name: 'Crochet Bow Charms', category: 'Accessories', image: images.bows, price: 199, tag: '' },
 { name: 'Pink Crochet Handbag', category: 'Bags', image: images.pinkBag, price: 1199, tag: 'PRETTY IN PINK' },
 { name: 'Crochet Bow Keychain', category: 'Accessories', image: images.keychain, price: 249, tag: '' },
 { name: 'Sunflower & Daisy Bouquet', category: 'Flowers', image: images.bouquetLarge, price: 1499, tag: 'MADE TO GIFT' },
];
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Twirl and Swirl` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Twirl and Swirl` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
