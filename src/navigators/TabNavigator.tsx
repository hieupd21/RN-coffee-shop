import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './../screens/Home';
import Cart from './../screens/Cart';
import Favourites from './../screens/Favourites';
import OrderHistory from './../screens/OrderHistory';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

const MENU = [
  {
    id: 'home',
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    id: 'cart',
    name: 'Cart',
    component: Cart,
    icon: 'cart',
  },
  {
    id: 'favourite',
    name: 'Favourite',
    component: Favourites,
    icon: 'like',
  },
  {
    id: 'history',
    name: 'History',
    component: OrderHistory,
    icon: 'bell',
  },
];

const TabNavigator = () => {
  const renderBlurView = () => (
    <BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyle} />
  );

  const renderTabBarIcon = (focused: boolean, name: string) => (
    <Icon
      name={name}
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => renderBlurView(),
      }}>
      {MENU.map(item => (
        <Tab.Screen
          key={item.id}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) => renderTabBarIcon(focused, item.icon),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabNavigator;
