import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Analytics = () => (
  <Box className="dashboard p-4">
    <Text fontSize="2xl" fontWeight="bold" mb={4}>
      Analytics
    </Text>

    <SimpleGrid gap={6} columns={{ base: 1, md: 3 }}>
      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          User Activity
        </Text>
        <Text fontSize="sm">Monitor page views and user engagement</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Performance Metrics
        </Text>
        <Text fontSize="sm">Track conversions, revenue, and engagement</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Data Visualization
        </Text>
        <Text fontSize="sm">View real-time graphs and charts</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Export Reports
        </Text>
        <Text fontSize="sm">Download analytics data in CSV format</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Analytics;
