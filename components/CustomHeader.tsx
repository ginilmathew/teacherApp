import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

type DrawerNavigationType = {
  dashboard: undefined;
  students: undefined;
  attendance: undefined;
  assignments: undefined;
  settings: undefined;
};

type CustomHeaderProps = {
  title: string;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
  onLogoutPress?: () => void;
};

export function CustomHeader({ title, onNotificationPress, onProfilePress, onLogoutPress }: CustomHeaderProps) {
  const navigation = useNavigation<DrawerNavigationProp<DrawerNavigationType>>();

  const toggleDrawer = () => {
    if (navigation && 'toggleDrawer' in navigation) {
      navigation.toggleDrawer();
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            if (onLogoutPress) {
              onLogoutPress();
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.iconButton}>
          <FontAwesome name="bars" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
            <FontAwesome name="bell" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
            <FontAwesome name="user" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.iconButton}>
            <FontAwesome name="sign-out" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
}); 