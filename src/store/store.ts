import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import CoffeeData from './../data/CoffeeData';
import BeansData from './../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      beanList: BeansData,
      cartPrice: 0,
      favouriteList: [],
      cartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffeeApp',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
