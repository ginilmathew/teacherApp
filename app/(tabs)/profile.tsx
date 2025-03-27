import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomHeader } from '../../components/CustomHeader';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const handleNotificationPress = () => {
    // Handle notification press
    console.log('Notification pressed');
  };

  const handleProfilePress = () => {
    // Handle profile press
    console.log('Profile pressed');
  };

  const handleLogoutPress = () => {
    // Handle logout press
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <CustomHeader
        title="Profile"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        onLogoutPress={handleLogoutPress}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Your Teacher Profile</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
}); 