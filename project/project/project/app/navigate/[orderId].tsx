import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { LiveTrackingMap } from '../../components/LiveTrackingMap';

export default function OrderNavigation() {
  const { orderId } = useLocalSearchParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Fetch order data based on orderId
    // This would typically come from your API or Firebase
    console.log('Tracking order:', orderId);
  }, [orderId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Tracking</Text>
      <Text style={styles.orderId}>Order ID: {orderId}</Text>
      
      <View style={styles.mapContainer}>
        <LiveTrackingMap orderId={orderId as string} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  orderId: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  mapContainer: {
    flex: 1,
    margin: 10,
  },
});
