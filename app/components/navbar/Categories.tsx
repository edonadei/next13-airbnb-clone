'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { GiBackpack, GiGreenhouse, GiCookingPot, GiPartyPopper, GiHiking, GiWorld } from 'react-icons/gi';

import { FiWifi } from 'react-icons/fi';
import { IoMdHeart, IoMdFitness } from 'react-icons/io';
import { FaPalette } from 'react-icons/fa';


import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: "Backpacker's Paradise",
    icon: GiBackpack,
    description: "This hostel is perfect for backpackers looking for a vibrant and social atmosphere!",
  },
  {
    label: 'Digital Nomad Haven',
    icon: FiWifi,
    description: 'This hostel offers excellent Wi-Fi and coworking spaces, catering to digital nomads and remote workers.',
  },
  {
    label: 'Couples Retreat',
    icon: IoMdHeart,
    description: 'This hostel provides a romantic setting for couples, with cozy rooms and intimate common areas.',
  },
  {
    label: 'Eco-Friendly',
    icon: GiGreenhouse,
    description: 'This environmentally conscious hostel promotes sustainable practices and eco-friendly accommodations.',
  },
  {
    label: 'Artsy Vibes',
    icon: FaPalette,
    description: 'This hostel celebrates creativity, with art displays, workshops, and a bohemian atmosphere.',
  },
  {
    label: 'Foodie Haven',
    icon: GiCookingPot,
    description: 'This hostel is a paradise for food lovers, offering cooking classes, local food tours, and delicious meals.',
  },
  {
    label: 'Party Central',
    icon: GiPartyPopper,
    description: 'This hostel is renowned for its lively nightlife, social events, and party atmosphere.',
  },
  {
    label: 'Wellness Retreat',
    icon: IoMdFitness,
    description: 'This hostel focuses on health and wellness, providing yoga classes, meditation spaces, and wellness activities.',
  },
  {
    label: 'Adventure Hub',
    icon: GiHiking,
    description: 'This hostel is a basecamp for outdoor enthusiasts, offering guided hikes, adventure tours, and equipment rentals.',
  },
  {
    label: 'Cultural Immersion',
    icon: GiWorld,
    description: 'This hostel immerses guests in the local culture, with language lessons, cultural activities, and connections to the community.',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;