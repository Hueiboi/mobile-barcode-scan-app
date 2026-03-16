import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScanScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')} 
        style={styles.background}
      >
        <View style={[styles.safeArea,
         {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }]}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/Arrow 1.png')}/> 
          </TouchableOpacity>

          <View style={styles.scanFrameContainer}>
            <Image 
              source={require('../assets/Group 5.png')} 
              style={styles.scanFrameImage} 
            />
          </View>

          <TouchableOpacity style={styles.productCardContainer}>
            <Image 
              source={require('../assets/Group 4.png')} 
              style={styles.productCardImage} 
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, resizeMode: 'cover' },
  safeArea: { flex: 1, justifyContent: 'space-between', padding: 20 },
  backButton: { 
    backgroundColor: 'rgba(255,255,255,0.9)', 
    width: 45, height: 45, borderRadius: 12, 
    backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center',
    marginBottom: 20, marginLeft: 20, marginTop: 20
  },
  
  scanFrameContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 200,
  },
  scanFrameImage: {
    width: '90%', 
    aspectRatio: 1, 
    resizeMode: 'contain',
  },
  productCardContainer: {
    alignItems: 'center',
    marginBottom: '-20%',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 5 
  },
  productCardImage: {
    width: '100%', 
    height: 300, 
    resizeMode: 'contain',
  }
});