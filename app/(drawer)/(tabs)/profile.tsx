import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/CustomHeader';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
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
        title="Profile"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        onLogoutPress={handleLogoutPress}
      />
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <FontAwesome name="user-circle" size={80} color="#007AFF" />
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.role}>Teacher</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="user" size={20} color="#666" />
            <Text style={styles.menuText}>Edit Profile</Text>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="lock" size={20} color="#666" />
            <Text style={styles.menuText}>Change Password</Text>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="bell" size={20} color="#666" />
            <Text style={styles.menuText}>Notifications</Text>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
}); 