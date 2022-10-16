import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import PlayGround from "./Playground"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" height="100vh" bgColor="gray.200">
      <PlayGround />
    </Box>
  </ChakraProvider>
)
