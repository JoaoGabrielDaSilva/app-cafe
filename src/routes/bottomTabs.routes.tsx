import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTab } from "../components/BottomTab";
import { Home } from "../pages/Home";
import { Schedule } from "../pages/Schedule";
import { Settings } from "../pages/Settings";
import { theme } from "../styles/theme";

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{
        backgroundColor: theme.background.primary,
        paddingTop: 100,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Schedule" component={Schedule} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};
