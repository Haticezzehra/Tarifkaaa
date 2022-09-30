import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import useFetch from '../../hook/useFetch/useFetch';

import DetailCard from '../../Component/Detail.Card';
const Detail = ({route, navigation}) => {
  const {strCategory} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const {data, error, loading} = useFetch(`${url}${strCategory}`);

  const renderMeals = ({item}) => (
    <DetailCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('Meal', {idMeal});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data.meals} renderItem={renderMeals} />;
};

export default Detail;
