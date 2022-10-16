import { useState } from "react";

import { Box } from "@chakra-ui/react";

const Pixel = () => {
  const [isAlive, setIsAlive] = useState(false);
  return (
    <Box
      w="10px"
      h="10px"
      bgColor={isAlive ? "white" : "black"}
      onClick={(e) => {
        setIsAlive(true);
      }}
    />
  );
};

export default Pixel;
