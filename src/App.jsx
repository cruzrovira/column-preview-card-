import { Flex, VStack, Text, Button, Image } from "@chakra-ui/react"
import sedan from "./source/images/icon-sedans.svg"
import suvs from "./source/images/icon-suvs.svg"
import luxury from "./source/images/icon-luxury.svg"

function App() {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Flex
        w={{ base: "375px", lg: "1125px" }}
        spacing={0}
        wrap="wrap"
        justifyContent="center"
        my={8}
      >
        <VStack
          w={{ base: "375px", md: "1/3%" }}
          bg="orange.400"
          p="60px"
          borderTopLeftRadius={10}
          borderTopRightRadius={{ base: 10, lg: "none" }}
          borderBottomLeftRadius={{ base: "none", lg: 10 }}
          alignItems="flex-start"
          spacing={8}
        >
          <Image src={sedan} alt="sedan" w="90px" />
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Sedans
          </Text>
          <Text color="white" lineHeight="1.8">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </Text>

          <Button
            variant="outline"
            rounded="full"
            color="white"
            _hover="none"
            _focus={{ boxShadow: "none" }}
          >
            Learn More
          </Button>
        </VStack>
        <VStack
          w={{ base: "375px", md: "1/3%" }}
          bg="green.400"
          p="60px"
          alignItems="flex-start"
          spacing={8}
        >
          <Image src={suvs} alt="suvs" w="90px" />
          <Text fontSize="4xl" fontWeight="bold" color="white">
            SUVs
          </Text>
          <Text color="white" lineHeight="1.8">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </Text>

          <Button
            variant="outline"
            rounded="full"
            color="white"
            _hover="none"
            _focus={{ boxShadow: "none" }}
          >
            Learn More
          </Button>
        </VStack>
        <VStack
          w={{ base: "375px", md: "1/3%" }}
          bg="green.700"
          p="60px"
          borderTopRightRadius={{ base: "none", lg: 10 }}
          borderBottomLeftRadius={{ base: 10, lg: "none" }}
          borderBottomRightRadius={10}
          alignItems="flex-start"
          spacing={8}
        >
          <Image src={luxury} alt="luxury" w="90px" />
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Luxury
          </Text>
          <Text color="white" lineHeight="1.8">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </Text>

          <Button
            variant="outline"
            rounded="full"
            color="white"
            _hover="none"
            _focus={{ boxShadow: "none" }}
          >
            Learn More
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default App
