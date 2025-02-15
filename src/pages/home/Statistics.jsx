import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const statsData = [
  { label: "Years of Experience", value: 60 },
  { label: "Satisfied Customers", value: 7200 },
  { label: "Projects Completed", value: 5800 },
  { label: "Awards Won", value: 100 }
];

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = targetValue;

    // Adjust step size based on number value
    let step = end > 5000 ? 50 : end > 1000 ? 20 : 1;

    const duration = 2000; // Total animation duration (ms)
    const stepTime = Math.max(Math.floor(duration / (end / step)), 20); // Minimum step time

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + step;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <Text fontSize="4xl" fontWeight="bold">
      {count.toLocaleString()}
    </Text>
  );
};

const Statistics = () => {
  return (
    <Container py={12} bg="gray.100">
      <VStack spacing={4} textAlign="center">
        <Text fontSize="xl" color="gray.600">
          Great Reviews for our services
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          Technical Statistics
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} mt={8} px={8}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <VStack bg="white" p={6} borderRadius="md" boxShadow="lg">
              <Counter targetValue={stat.value} />
              <Text fontSize="lg" color="gray.600">
                {stat.label}
              </Text>
            </VStack>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Statistics;
