import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Image } from 'react-native';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')} 
        style={styles.background}
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/Arrow 1.png')} style={styles.smallIcon} /> 
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
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, resizeMode: 'cover' },
  safeArea: { flex: 1, justifyContent: 'space-between', padding: 20 },
  backButton: { 
    width: 40, height: 40, backgroundColor: 'rgba(255,255,255,0.9)', 
    borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20
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
    marginBottom: -10,
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