import React, { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setInnerWidth(window.innerWidth);
    } else if (window.innerWidth > 1080) {
      setInnerWidth(window.innerWidth);
    }
  }, [window.innerWidth]);

  return { innerWidth };
};

export default useWindowWidth;
