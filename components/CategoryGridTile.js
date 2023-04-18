import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // only for Android
    backgroundColor: 'white', // To make the shadow visible on iOS
    shadowColor: 'black', // only for iOS
    shadowOpacity: 0.25, // only for iOS
    shadowOffset: { width: 0, height: 2 }, // only for iOS
    shadowRadius: 8, // only for iOS
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // makes ripple effect not go beyond rounded corners on android only
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    // This is for the ripple effect for iOS. In the JSX, we conditionally apply this style if the button is pressed
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
