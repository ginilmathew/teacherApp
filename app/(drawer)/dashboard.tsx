import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomHeader } from '../../components/CustomHeader';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleLogoutPress = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <CustomHeader
        title="Dashboard"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        onLogoutPress={handleLogoutPress}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Dashboard</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
}); 