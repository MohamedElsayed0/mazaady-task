import React, { useState } from "react";
import { Rating as Rate } from "react-simple-star-rating";

const Rating = () => {
     const [rating] = useState(20);

  return (
    <Rate
      initialValue={3}
      iconsCount={4}
      readonly={true}
      allowFraction={true}
      size={20}
    />
  );
};

export default Rating;
