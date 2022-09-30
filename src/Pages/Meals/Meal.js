import {Text, ActivityIndicator, FlatList, Linking} from 'react-native';
import React from 'react';
import useFetch from '../../hook/useFetch/useFetch';

import MealCard from '../../Component/MealCard';

const Meal = ({route}) => {
  const {idMeal} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  const {data, loading, error} = useFetch(`${url}${idMeal}`);

  const renderDetail = ({item}) => (
    <MealCard detail={item} onSelect={() => Linking.openURL(item.strYoutube)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Meal;
