import { FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { Box, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import "../../../Profile.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Outlet } from "react-router-dom";

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
    { name: "Profile", icon: CgProfile, path: "/user/profile" },
    { name: "Dashboard", icon: RxDashboard, action: handleDashboardNavigation },
    { name: "Settings", icon: FaCog, path: "/user/settings" },
    { name: "Analytics", icon: FaChartBar, path: "/user/analytics" },
    { name: "Logout", icon: FaSignOutAlt, action: handleLogout },
  ];

  return (
    <Box
      className="sidebar text-white p-4"
      style={{ backgroundColor: "#1A1F2B" }}
    >
      <VStack align="start" mt={10} pt={20}>
        {menuItems.map((item, index) => (
          <HStack
            key={index}
            className="menu-item px-4  rounded"
            gap={3}
            cursor="pointer"
            onClick={() => (item.action ? item.action() : navigate(item.path))}
          >
            <Icon as={item.icon} boxSize={7} />
            <Text pt={3}>{item.name}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

const ProfilePage = () => {
  return (
    <div className="d-flex h-auto vh-100">
      <Sidebar />
      <Box flex="1">
        <Outlet />
      </Box>
    </div>
  );
};

export default ProfilePage;
