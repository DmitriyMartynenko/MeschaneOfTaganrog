import { useState, useRef } from 'react';

import type { Review as ReviewType } from '../../types';
import Review from '../Review/Review';

import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';

import styles from './ReviewSlider.module.css';

type ReviewSliderProps = {
  reviews: ReviewType[];
};

const ReviewSlider = (props: ReviewSliderProps) => {
  const { reviews } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleSwipe = (startX, endX) => {
    if (startX - endX > 50) handleNext();
    if (endX - startX > 50) handlePrev();
  };

  const handleTouchStart = (e) => {
    sliderRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(sliderRef.current.startX, endX);
  };

  return (
    <div className={styles.reviewSlider}>
      <div className={styles.reviewNavigationContainer}>
        <button className={styles.reviewPrevButton} onClick={handlePrev}>
          <img
            className={styles.reviewPrevButtonImg}
            src={arrowLeft}
            alt="Предыдущий отзыв"
          />
        </button>
        <div className={styles.reviewSliderTrackWrapper}>
          <div className={styles.reviewSliderTrackContainer} ref={sliderRef}>
            <div
              className={styles.reviewSliderTrack}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div className={styles.reviewSlide}>
                  <Review
                    author={review.author}
                    authorJobTitle={review.authorJobTitle}
                    authorImgSrc={review.authorImgSrc}
                  >
                    {review.reviewText}
                  </Review>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className={styles.reviewNextButton} onClick={handleNext}>
          <img
            className={styles.reviewNextButtonImg}
            src={arrowRight}
            alt="Следующий отзыв"
          />
        </button>
      </div>
      <div className={styles.reviewPaginationContainer}>
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`${styles.reviewPaginationDot} ${
              index === currentIndex ? styles.paginationDotActive : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
