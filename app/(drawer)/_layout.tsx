import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
            borderRightWidth: 1,
            borderRightColor: '#eee',
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '500',
            color: '#333',
          },
          drawerActiveTintColor: '#007AFF',
          drawerInactiveTintColor: '#666',
          drawerItemStyle: {
            paddingVertical: 8,
            paddingHorizontal: 16,
          },
          swipeEnabled: true,
        }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Dashboard',
            drawerIcon: ({ color }: { color: string }) => <FontAwesome name="home" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="attendance"
          options={{
            title: 'Attendance',
            drawerIcon: ({ color }: { color: string }) => <FontAwesome name="calendar" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="assignments"
          options={{
            title: 'Assignments',
            drawerIcon: ({ color }: { color: string }) => <FontAwesome name="book" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
            drawerIcon: ({ color }: { color: string }) => <FontAwesome name="cog" size={20} color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 