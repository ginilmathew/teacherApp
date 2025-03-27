import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../components/CustomHeader';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const students = [
  { id: '1', name: 'John Doe', class: 'Class 10A', attendance: '95%' },
  { id: '2', name: 'Jane Smith', class: 'Class 10A', attendance: '98%' },
  { id: '3', name: 'Mike Johnson', class: 'Class 10B', attendance: '92%' },
  { id: '4', name: 'Sarah Williams', class: 'Class 10B', attendance: '97%' },
  { id: '5', name: 'David Brown', class: 'Class 10A', attendance: '94%' },
];

export default function StudentsScreen() {
  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleLogoutPress = () => {
    router.replace('/login');
  };

  const renderStudentItem = ({ item }: { item: typeof students[0] }) => (
    <TouchableOpacity style={styles.studentCard}>
      <View style={styles.studentInfo}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={40} color="#007AFF" />
        </View>
        <View style={styles.studentDetails}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentClass}>{item.class}</Text>
        </View>
      </View>
      <View style={styles.attendanceContainer}>
        <FontAwesome name="calendar-check-o" size={16} color="#4CAF50" />
        <Text style={styles.attendanceText}>{item.attendance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <CustomHeader
        title="Students"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        onLogoutPress={handleLogoutPress}
      />
      <View style={styles.content}>
        <FlatList
          data={students}
          renderItem={renderStudentItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
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
  },
  listContainer: {
    padding: 16,
  },
  studentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 12,
  },
  studentDetails: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  studentClass: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  attendanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  attendanceText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
}); 