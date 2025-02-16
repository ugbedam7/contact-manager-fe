import { useState } from "react";
import { FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Box, Text, VStack, HStack, Icon, Flex, Stack } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import "../../../Profile.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ContactDetailItem = ({ label, value }) => (
  <Flex justify="space-between" w="full">
    <Text flex={"1"} fontWeight="bold" className="contact-view">
      {label}
    </Text>
    <Text flex={"1"} className="contact-view">
      {value}
    </Text>
  </Flex>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDashboardNavigation = () => {
    navigate("/dashboard");
  };

  const menuItems = [
    { name: "Dashboard", icon: RxDashboard, action: handleDashboardNavigation },
    { name: "Settings", icon: FaCog },
    { name: "Analytics", icon: FaChartBar },
    { name: "Logout", icon: FaSignOutAlt, action: handleLogout }
  ];

  return (
    <Box
      className="sidebar text-white p-4"
      style={{ backgroundColor: "#1A1F2B" }}
    >
      <VStack align="start" mt={10} pt={10}>
        {menuItems.map((item, index) => (
          <HStack
            key={index}
            className="menu-item px-4  rounded"
            gap={3}
            cursor="pointer"
            onClick={item.action ? item.action : null}
          >
            <Icon as={item.icon} boxSize={5} />
            <Text pt={3}>{item.name}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    twitter: "@johndoe",
    bio: "Software Developer. Tech Enthusiast. Coffee Lover.",
    profileImage: "https://via.placeholder.com/150"
  });

  return (
    <Box className="dashboard p-4">
      <Box className="card p-4 shadow d-flex flex-column align-items-center mb-4">
        <Avatar
          borderRadius="full"
          boxSize="120px"
          src={"./sample.png"}
          alt={user.name}
          mb={3}
        />
      </Box>
      <Box className="card p-4 shadow">
        <Text fontSize="2xl" textAlign={"center"} fontWeight="semibold" mb={3}>
          Contact Information
        </Text>
        <Stack spacing={3}>
          <ContactDetailItem label="Name" value={user.firstname} />
          <ContactDetailItem label="Name" value={user.lastname} />
          <ContactDetailItem label="Email" value={user.email} />
          <ContactDetailItem label="Twitter" value={user.twitter} />
          <ContactDetailItem label="Bio" value={user.bio} />
        </Stack>
      </Box>
    </Box>
  );
};

const ProfilePage = () => {
  return (
    <div className="d-flex h-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ProfilePage;
