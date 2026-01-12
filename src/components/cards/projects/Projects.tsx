import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/bundle";

import ProjectList from "./ListProjects/projectslist";
import { projects } from "./ListProjects/Data";
import { CarouselWrapper, Title } from "./style";

function Projects() {
  return (
    <CarouselWrapper>

    <Swiper
      effect="coverflow"
        grabCursor
        centeredSlides={true}
        spaceBetween={80}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        >
           <Title>Projetos</Title>
      {projects.map((project) => (
          <SwiperSlide key={project.id}     style={{ width: "auto", display: "flex", justifyContent: "center" }}>
        
          <ProjectList
            title={project.title}
            src={project.image}
            onClick={project.onCode}
            a={project.onPreview}
            >
            {project.description}
          </ProjectList>
        </SwiperSlide>
      ))}
    </Swiper>
</CarouselWrapper>
  );
}

export default Projects;
