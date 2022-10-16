import { useRef, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Pixel from "../Pixel";

export interface IPlayGroundDimensions {
  width: number;
  height: number;
}

// const useGetPlayGroundDimensions = () => {
//   const bounding =
//   return {
//     width: 1000,
//     height: 1000,
//   };
// }

const PlayGround = () => {
  const ref = useRef(null);
  // const data = useGetPlayGroundDimensions();

  useEffect(() => {
    const el = document.getElementById("playground-box");
    console.log("ref.current");
    console.log(ref.current);
    console.log(el);
    // const bounding = ref.current?.getBoundingClientRect();
  });

  return (
    <Flex flexDir="column" alignItems="center" gap="50px">
      <Text>Playground!</Text>
      <Flex
        bgColor={"gray.400"}
        border="10px solid blue.400"
        width="600px"
        id="playground-box"
        flexWrap="wrap"
        alignContent="flex-start"
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <Pixel key={i} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PlayGround;
