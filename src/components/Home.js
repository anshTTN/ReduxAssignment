import {Text, View} from 'react-native';
import React from 'react';
import ItemCard from './ItemCard';
import CostCard from './CostCard';
import Button from './Button';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3}}>
        <ItemCard />
      </View>
      <View style={{flex: 2, alignItems: 'center', marginTop: 20}}>
        <CostCard />
      </View>
      <View style={{flex: 0.5}}>
        <Button />
      </View>
    </View>
  );
};

export default Home;
