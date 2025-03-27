import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Button } from '../components/Button';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomTextField } from '../components/CustomTextField';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

type FormData = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      // Add your login logic here
      console.log('Login attempt with:', data);
      // Navigate to drawer dashboard after successful login
      router.replace('/(drawer)/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  label="Email"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  error={errors.email?.message}
                  icon="envelope"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  label="Password"
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                  value={value}
                  onChangeText={onChange}
                  error={errors.password?.message}
                  icon="lock"
                  onTogglePassword={() => setShowPassword(!showPassword)}
                />
              )}
            />

            <Button
              title={loading ? 'Logging in...' : 'Login'}
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
              style={styles.button}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 20,
  },
}); 