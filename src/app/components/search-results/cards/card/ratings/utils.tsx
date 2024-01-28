import Image from 'next/image';

export const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Image key={i} src="/vah-rating-star.svg" alt="Virgin Atlantic Holidays star" width={20} height={20} priority />);
    }
    return stars;
};