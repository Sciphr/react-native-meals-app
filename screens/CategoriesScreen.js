import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = ({ item }, navigation) => {
  const pressHandler = () => {
    navigation.navigate('Meals Overview', {
      categoryId: item.id,
    });
  };

  return (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={pressHandler}
    />
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData, navigation)}
      numColumns={2}
    />
  );
};
export default CategoriesScreen;
