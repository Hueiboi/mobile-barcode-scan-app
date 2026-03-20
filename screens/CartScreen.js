import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
            <Image source={require('../assets/Arrow Orange.png')} /> 
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart 👍</Text>
      </View>

      <ScrollView style={styles.itemList} showsVerticalScrollIndicator={false}>
        
        <View style={styles.itemCard}>
          <View style={styles.imageBackground}>
            <Image source={require('../assets/Juice.png')} style={styles.itemImage} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemBrand}>Lauren's</Text>
            <Text style={styles.itemName}>Orange Juice</Text>
            <Text style={styles.itemPrice}>₹ 149</Text>
          </View>
          <View style={styles.quantityControl}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        <View style={styles.itemCard}>
          <View style={styles.imageBackground}>
            <Image source={require('../assets/Milk.jpg')} style={styles.itemImage} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemBrand}>Baskin's</Text>
            <Text style={styles.itemName}>Skimmed Milk</Text>
            <Text style={styles.itemPrice}>₹ 129</Text>
          </View>
          <View style={styles.quantityControl}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

        <View style={styles.itemCard}>
          <View style={styles.imageBackground}>
            <Image source={require('../assets/AloeVera.jpg')} style={styles.itemImage} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemBrand}>Marley's</Text>
            <Text style={styles.itemName}>Aloe Vera Lotion</Text>
            <Text style={styles.itemPrice}>₹ 1249</Text>
          </View>
          <View style={styles.quantityControl}>
            <Text style={styles.qtyBtn}>-</Text>
            <Text style={styles.qtyText}>2</Text>
            <Text style={styles.qtyBtn}>+</Text>
          </View>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>₹ 1,527</Text>
        </View>
        <TouchableOpacity 
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutBtnText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { padding: 20, marginTop: 20 },
  backButton: { 
    width: 45, height: 45, borderRadius: 12, 
    backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center',
    marginBottom: 20, marginTop: 20
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  itemList: { flex: 1, paddingHorizontal: 20 },
  
  itemCard: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#FAFAFA', borderRadius: 16, marginBottom: 15 },
  
  imageBackground: { backgroundColor: '#F3EFE9', borderRadius: 12, padding: 5, marginRight: 15 },
  itemImage: { width: 80, height: 70, resizeMode: 'contain' },
  
  itemInfo: { flex: 1 },
  itemBrand: { fontSize: 12, color: '#A0A0A0' },
  itemName: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 5 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#F47B50' },
  
  quantityControl: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  qtyBtn: { fontSize: 18, color: '#F47B50', paddingHorizontal: 5 },
  qtyText: { fontSize: 14, fontWeight: 'bold', marginHorizontal: 10 },
  
  footer: { 
    padding: 20, 
    paddingBottom: 110, 
    borderTopWidth: 1, 
    borderColor: '#EEE',
    backgroundColor: '#FFF' 
  },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalAmount: { fontSize: 18, fontWeight: 'bold', color: '#F47B50' },
  checkoutBtn: { backgroundColor: '#F47B50', padding: 18, borderRadius: 16, alignItems: 'center' },
  checkoutBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});