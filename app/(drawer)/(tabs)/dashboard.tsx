import { View, Text, StyleSheet } from 'react-native';
import { CustomHeader } from '../../../components/CustomHeader';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const handleNotificationPress = () => {
    // Handle notification press
  };

  const handleProfilePress = () => {
    // Handle profile press
  };

  const handleLogoutPress = () => {
    // Handle logout
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Dashboard"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        onLogoutPress={handleLogoutPress}
      />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to your Dashboard!</Text>
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
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
}); 