import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Leftnav } from "../leftnav.svg";
import { ReactComponent as Rightnav } from "../rightnav.svg";
import Card from "../Card";
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default ({ navId,data }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={8}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
          clickable:"true"
        }}
        navigation={{ nextEl: `#arrow-right-${navId}`, prevEl: `#arrow-left-${navId}`}}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
      <div id={`arrow-left-${navId}`} className="arrow-left arrow">
        <img src="/lefticon.png" />
      </div>
      <div id={`arrow-right-${navId}`} className="arrow-right arrow">
        <img src="/righticon.png" />
      </div>
    </div>
  );
};
