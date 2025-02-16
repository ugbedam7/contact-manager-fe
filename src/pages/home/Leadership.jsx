import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Flex,
  Icon,
  Link,
  Circle
} from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Jason Smith",
    role: "President & CEO",
    image: "https://preview.colorlib.com/theme/unioncorp/images/staff-1.jpg",
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person."
  },
  {
    name: "Sophia Johnson",
    role: "Operation Officer",
    image: "https://preview.colorlib.com/theme/unioncorp/images/staff-6.jpg",
    description: "Passionate about leadership and operational excellence."
  },
  {
    name: "Michael Brown",
    role: "CTO",
    image: "https://preview.colorlib.com/theme/unioncorp/images/staff-2.jpg",
    description: "Always pushing the boundaries of innovation and technology."
  },
  {
    name: "Emily Davis",
    role: "Marketing Officer",
    image: "https://preview.colorlib.com/theme/unioncorp/images/staff-8.jpg",
    description: "A marketing strategist with a vision for growth and impact."
  }
];

const Leadership = () => {
  return (
    <Container my={5} py={12} bg="gray.100">
      <VStack gap={4} textAlign="center">
        <Text fontSize="xl" color="gray.600">
          Meet Our Brilliant Minds
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          Our Leadership Team
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mt={8} px={8}>
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <VStack
              bg="white"
              borderRadius="md"
              boxShadow="sm"
              overflow="hidden"
              gap={4}
              pb={6}
              h="450px" // Set uniform height for all cards
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              className="hover-scale"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                w="100%"
                h="180px" // Reduced image height
                objectFit="cover"
                objectPosition="top"
              />
              <Box textAlign="center" px={4} flex="1">
                <Text fontSize="xl" fontWeight="bold">
                  {leader.name}
                </Text>
                <Text fontSize="md" color="#1A202C" fontWeight="semibold">
                  {leader.role}
                </Text>
                <Flex justify="center" gap={3} mt={3}>
                  {[
                    { icon: FaTwitter, link: "#" },
                    { icon: FaFacebookF, link: "#" },
                    { icon: FaGoogle, link: "#" },
                    { icon: FaInstagram, link: "#" }
                  ].map(({ icon, link }, i) => (
                    <Link key={i} href={link} isExternal>
                      <Circle size="33px" bg="#3b82f6" color="white">
                        <Icon as={icon} boxSize={5} />
                      </Circle>
                    </Link>
                  ))}
                </Flex>
              </Box>
              <Text className="fs-6 text-muted" color="gray.600" px={4} pb={4}>
                {leader.description}
              </Text>
            </VStack>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Leadership;
