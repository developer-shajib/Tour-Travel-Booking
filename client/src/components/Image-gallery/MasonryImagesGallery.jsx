import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages.js';
import './MasonryImagesGallery.scss';

export const MasonryImagesGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter='1rem'>
          {galleryImages.map((item, index) => (
            <img className='masonry__img' key={index} src={item} alt='' />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};
