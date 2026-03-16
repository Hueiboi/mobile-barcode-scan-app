import React from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, 
  Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SuccessScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, 
    {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left, 
        paddingRight: insets.right
    }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.popToTop()}>
         <Image source={require('../assets/Arrow 1.png')} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image 
            source={require('../assets/Group 167.png')} 
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        {/* Text chuẩn theo hình image_e1e384.png */}
        <View style={styles.textGroup}>
          <Text style={styles.title}>Payment Success, Yayy!</Text>
          <Text style={styles.subtitle}>
            we will send order details and invoice in your contact no. and registered email
          </Text>
        </View>

        <TouchableOpacity style={styles.checkDetailsBtn}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Image source={require('../assets/Arrow 1.png')} style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download Invoice</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  backButton: { marginLeft: 20, marginTop: 10, padding: 10 },
  backIcon: { width: 20, height: 20, tintColor: '#5D5FEF' }, 
  
  content: { flex: 1, alignItems: 'center', paddingHorizontal: 40 },
  
  imageWrapper: { marginTop: 40, marginBottom: 30 },
  mainImage: { width: 280, height: 280 },

  textGroup: { alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 22, fontWeight: '700', color: '#333', marginBottom: 15 },
  subtitle: { 
    fontSize: 14, 
    color: '#999', 
    textAlign: 'center', 
    lineHeight: 20,
    textTransform: 'lowercase' 
  },

  checkDetailsBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 40 
  },
  checkDetailsText: { color: '#5D5FEF', fontSize: 16, fontWeight: '600', marginRight: 8 },
  arrowIcon: { width: 16, height: 16, tintColor: '#5D5FEF' },

  downloadBtn: {
    backgroundColor: '#5D5FEF', 
    width: '100%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#5D5FEF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 5
  },
  downloadText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});