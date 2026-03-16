import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          <Image 
            source={require('../../assets/MaskGroup.png')}
            style={styles.avatar} 
          />
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Scan')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#EBE4FF' }]}>
              <Text style={{ fontSize: 24 }}><Image source={require('../../assets/Group 157.png')}/></Text>
            </View>
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#FFEBEA' }]}>
              <Text style={{ fontSize: 24 }}><Image source={require('../../assets/Frame.png')}/></Text>
            </View>
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4F8F0' }]}>
              <Text style={{ fontSize: 24 }}><Image source={require('../../assets/Group 158.png')}/></Text>
            </View>
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: '#E4F4FF' }]}>
              <Text style={{ fontSize: 24 }}><Image source={require('../../assets/Group 151.png')}/></Text>
            </View>
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA'},
  innerContainer: { flex: 1, paddingHorizontal: 25 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, marginBottom: 30 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  name: { fontSize: 14, color: '#888', marginTop: 4 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 20 },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginTop: 10 
  },
  card: { 
    width: '48%', 
    backgroundColor: '#FFF', 
    paddingVertical: 25, 
    borderRadius: 24,    
    marginBottom: 16, 
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOpacity: 0.03, 
    elevation: 1 
  },
  iconContainer: { width: 50, height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  cardSub: { fontSize: 12, color: '#999', marginTop: 5 }
});