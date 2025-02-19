import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const Settings = () => (
  <Box className="dashboard p-4">
    <Text fontSize="2xl" fontWeight="bold" mb={4}>
      Settings
    </Text>

    <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Profile Settings
        </Text>
        <Text fontSize="sm">Update your personal details</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Notifications
        </Text>
        <Text fontSize="sm">Manage email and push notifications</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Security & Privacy
        </Text>
        <Text fontSize="sm">Enable 2FA, manage login sessions</Text>
      </Box>

      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold">
          Appearance
        </Text>
        <Text fontSize="sm">Switch between light and dark mode</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Settings;
