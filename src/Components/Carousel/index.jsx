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

export default ({ data }) => {
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
        navigation={{ nextE1: ".arrow-left", prevE1: ".arrow-right" }}
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
      <div className="arrow-left arrow">
        <img src="/lefticon.png" />
      </div>
      <div className="arrow-right arrow">
        <img src="/righticon.png" />
      </div>
    </div>
  );
};
