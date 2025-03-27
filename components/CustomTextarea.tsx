import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface CustomTextareaProps extends TextInputProps {
  label: string;
  error?: string;
  icon?: string;
  numberOfLines?: number;
}

export function CustomTextarea({
  label,
  error,
  icon,
  numberOfLines = 4,
  ...props
}: CustomTextareaProps) {
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
          style={[
            styles.input,
            icon && styles.inputWithIcon,
            { height: numberOfLines * 24 }, // Adjust height based on number of lines
          ]}
          multiline
          numberOfLines={numberOfLines}
          textAlignVertical="top"
          placeholderTextColor="#999"
          {...props}
        />
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
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  inputError: {
    borderColor: '#ff3b30',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  inputWithIcon: {
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
    marginTop: 4,
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 4,
  },
}); 