// components/PartyList.tsx
import PartyCard from './PartyCard';

const partyData = [
  {
    image: '/cheers-1.jpg',
    category: 'House Party',
    ageRange: 'Age 21 - 39',
    alertMessage: 'Filling Up Fast! 15 people trying to get in',
    date: 'May 24 | Sat',
    location: 'Royal Palms Goregaon, Mumbai',
    title: 'Drip Drip Hooray – The Sundowner Splash',
    host: 'akshay sahetia',
    charge: '₹ 1499',
  },
  {
    image: '/cheers-2.jpg',
    category: 'Club Night',
    ageRange: 'Age 22 - 35',
    alertMessage: 'Only 5 spots left!',
    date: 'May 25 | Sun',
    location: 'Andheri, Mumbai',
    title: 'Bass & Booze Night',
    host: 'Rehan Khan',
    charge: '₹ 999',
  },
  {
    image: '/cheers-1.jpg',
    category: 'Rooftop Party',
    ageRange: 'Age 20 - 35',
    alertMessage: 'Filling Fast! 18 people queued',
    date: 'May 26 | Mon',
    location: 'Worli, Mumbai',
    title: 'Sunset Grooves & Cocktails',
    host: 'Ananya Vora',
    charge: '₹ 1299',
  },
  // Add 6 more objects similarly...
  {
    image: '/cheers-2.jpg',
    category: 'Pool Party',
    ageRange: 'Age 21 - 32',
    alertMessage: 'Only 3 tickets left!',
    date: 'May 27 | Tue',
    location: 'Powai, Mumbai',
    title: 'Splash Vibes – Summer Beats',
    host: 'Rajveer Mehra',
    charge: '₹ 1399',
  },
  {
    image: '/cheers-1.jpg',
    category: 'Theme Party',
    ageRange: 'Age 23 - 37',
    alertMessage: 'Limited Passes Remaining',
    date: 'May 28 | Wed',
    location: 'Bandra, Mumbai',
    title: 'Retro Neon Night',
    host: 'Ishika Desai',
    charge: '₹ 899',
  },
  {
    image: '/cheers-2.jpg',
    category: 'Terrace Chill',
    ageRange: 'Age 20 - 34',
    alertMessage: 'Filling Up Quickly!',
    date: 'May 29 | Thu',
    location: 'Malad, Mumbai',
    title: 'Starlit Sessions',
    host: 'Kunal Wadhwa',
    charge: '₹ 799',
  },
  {
    image: '/cheers-1.jpg',
    category: 'Garden Bash',
    ageRange: 'Age 22 - 38',
    alertMessage: 'Don’t miss out!',
    date: 'May 30 | Fri',
    location: 'Juhu, Mumbai',
    title: 'Bloom Beats',
    host: 'Sara Merchant',
    charge: '₹ 1099',
  },
  {
    image: '/cheers-1.jpg',
    category: 'Bonfire Night',
    ageRange: 'Age 25 - 40',
    alertMessage: 'Hot event of the week!',
    date: 'May 31 | Sat',
    location: 'Kharghar, Navi Mumbai',
    title: 'Ignite & Unwind',
    host: 'Aman Sehgal',
    charge: '₹ 1199',
  },
  {
    image: '/cheers-1.jpg',
    category: 'Secret Soirée',
    ageRange: 'Age 24 - 36',
    alertMessage: 'Invite Only - Limited Seats!',
    date: 'June 1 | Sun',
    location: 'Undisclosed Location',
    title: 'Mystery Party',
    host: 'Private Host',
    charge: '₹ 1599',
  },
];

export default function PartyList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {partyData.map((party, idx) => (
        <PartyCard key={idx} {...party} />
      ))}
    </div>
  );
}
