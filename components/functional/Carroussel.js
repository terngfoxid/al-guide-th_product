import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"))
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => {
      if(index !== goToSlide){
        setGoToSlide(index)
      }
    } };
  });

  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.default}
      />
    </div>
  );
}
