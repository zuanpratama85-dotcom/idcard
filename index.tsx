import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function DigitalIDCard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://raw.githubusercontent.com/zuanpratama85-dotcom/idcard/refs/heads/main/WhatsApp%20Image%202026-03-14%20at%2017.47.26.jpeg' }} 
          style={styles.profileImage} 
        />

        <View style={styles.infoContainer}>
          <Text style={styles.label}>NAMA</Text>
          <Text style={styles.value}>Zuan Pratama Simangunsong</Text>

          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>243303621805</Text>

          <Text style={styles.label}>JURUSAN</Text>
          <Text style={styles.value}>Sistem Informasi</Text>
          
          <View style={styles.divider} />

          <Text style={styles.quote}>
            "GARRYYY, HARRA HETTTAAAA"
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3B82F6',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 10,
    color: '#9CA3AF',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  value: {
    fontSize: 18,
    color: '#1F2937',
    fontWeight: '600',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    width: '100%',
    marginVertical: 15,
  },
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#4B5563',
    textAlign: 'center',
    width: '100%',
    lineHeight: 20,
  },
});