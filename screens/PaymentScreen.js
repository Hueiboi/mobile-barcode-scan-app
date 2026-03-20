import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, 
  Image, TextInput, ScrollView, 
  KeyboardAvoidingView, Platform 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CheckoutScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [method, setMethod] = useState('card');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          
          <View style={[styles.headerWhite, { paddingTop: insets.top + 10 }]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
              <Image source={require('../assets/Arrow Green.png')} />
            </TouchableOpacity>

            <View style={styles.headerRow}>
              <View>
                <Text style={styles.checkoutText}>Checkout 💳</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.priceText}>₹ 1,527</Text>
                <Text style={styles.gstText}>Including GST (18%)</Text>
              </View>
            </View>

            <View style={styles.tabWrapper}>
              <TouchableOpacity 
                style={[styles.tab, method === 'card' && styles.activeTab]}
                onPress={() => setMethod('card')}
              >
                <Image source={require('../assets/Credit card icon.png')} style={styles.tabIcon} />
                <Text style={[styles.tabLabel, method === 'card' && styles.activeTabLabel]}>Credit card</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.tab, method === 'apple' && styles.activeTab]}
                onPress={() => setMethod('apple')}
              >
                <Image source={require('../assets/Apple icon.png')} style={styles.tabIcon} />
                <Text style={[styles.tabLabel, method === 'apple' && styles.activeTabLabel]}>Apple Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Card number</Text>
              <View style={styles.inputRow}>
                <TextInput 
                  style={styles.textInput} 
                  placeholder="5261 4141 0151 8472"
                  keyboardType="numeric"
                />
                <Image style={{ marginRight: 20 }} source={require('../assets/Master Card Logo.png')} />
                <Image style={{marginRight: 20, marginLeft: 10 }} source={require('../assets/Card Icon.png')} />
              </View>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Cardholder name</Text>
              <TextInput style={styles.textInput} placeholder="Christie Doe" />
            </View>

            <View style={styles.rowInputs}>
              <View style={{ flex: 1.2, marginRight: 15 }}>
                <Text style={styles.label}>Expiry date</Text>
                <TextInput style={styles.textInput} placeholder="06  /  2024" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>CVV / CVC <Image source={require('../assets/Hint.png')}/></Text>
                <TextInput style={styles.textInput} placeholder="915" secureTextEntry />
              </View>
            </View>

            <Text style={styles.footerNote}>
              We will send you an order details to your email after the successfull payment
            </Text>

            <TouchableOpacity 
              style={styles.payBtn}
              onPress={() => navigation.navigate('Success')}
            >
              <Image source={require('../assets/Frame 21.png')} style={styles.lockIcon} />
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  headerWhite: { 
    backgroundColor: '#FFF', 
    borderBottomLeftRadius: 45, 
    borderBottomRightRadius: 45, 
    paddingHorizontal: 25,
    paddingBottom: 60, // Chừa chỗ cho tab nhảy lên
    zIndex: 1
  },
  backButton: {  
    width: 45, height: 45, borderRadius: 12, 
    backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center',
    marginBottom: 20, marginTop: 20
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  checkoutText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  priceText: { fontSize: 22, fontWeight: 'bold', color: '#2ECC71' },
  gstText: { fontSize: 12, color: '#BBB', marginTop: 4 },
  tabWrapper: { 
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: -30, 
    left: 25, 
    right: 25, 
    backgroundColor: '#F8F8F8', 
    borderRadius: 20, 
    padding: 8,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5
  },
  tab: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 15 },
  activeTab: { backgroundColor: '#2ECC71' },
  tabIcon: { marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  tabLabel: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  activeTabLabel: { color: '#FFF' },

  formContainer: { paddingHorizontal: 25, marginTop: 60 },
  inputBox: { marginBottom: 25 },
  label: { fontSize: 15, fontWeight: '600', color: '#333', marginBottom: 12 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F5F8', borderRadius: 18, paddingHorizontal: 15 },
  textInput: { flex: 1, backgroundColor: '#F2F5F8', borderRadius: 18, paddingVertical: 18, paddingHorizontal: 15, fontSize: 16, color: '#333' },
  cardBrandIcon: { width: 35, height: 25, marginRight: 10 },
  rowInputs: { flexDirection: 'row', marginBottom: 25 },

  footerNote: { textAlign: 'center', color: '#BBB', fontSize: 13, lineHeight: 20, paddingHorizontal: 30, marginBottom: 30 },
  
  payBtn: { 
    backgroundColor: '#2ECC71', 
    flexDirection: 'row',
    paddingVertical: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: '#2ECC71', shadowOpacity: 0.4, shadowOffset: { width: 0, height: 8 }, shadowRadius: 15, elevation: 8
  },
  lockIcon: { marginRight: 10, tintColor: '#FFF' },
  payBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});