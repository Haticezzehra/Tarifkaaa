import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';
import useFetch from '../../hook/useFetch/useFetch';
import CategorieCard from '../../Component/CategoriesComponent';
import styles from './CotegoriesStyle';

const Categories = ({navigation}) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const {data, loading, error} = useFetch(url);

  const renderCategories = ({item}) => (
    <CategorieCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = strCategory => {
    navigation.navigate('Detail', {strCategory});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
