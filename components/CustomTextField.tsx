import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface CustomTextFieldProps extends TextInputProps {
  label: string;
  error?: string;
  icon?: string;
  secureTextEntry?: boolean;
  onTogglePassword?: () => void;
}

export function CustomTextField({
  label,
  error,
  icon,
  secureTextEntry,
  onTogglePassword,
  ...props
}: CustomTextFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error && styles.inputError]}>
        {icon && (
          <FontAwesome
            name={icon as any}
            size={20}
            color="#666"
            style={styles.icon}
          />
        )}
        <TextInput
          style={[styles.input, icon && styles.inputWithIcon]}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {props.value && secureTextEntry && (
          <TouchableOpacity onPress={onTogglePassword} style={styles.eyeIcon}>
            <FontAwesome
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  inputError: {
    borderColor: '#ff3b30',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#333',
  },
  inputWithIcon: {
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
  eyeIcon: {
    padding: 8,
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 4,
  },
}); 