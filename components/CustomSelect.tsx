import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  value?: string;
  options: Option[];
  onChange: (value: string) => void;
  error?: string;
  icon?: string;
  placeholder?: string;
  searchable?: boolean;
}

export function CustomSelect({
  label,
  value,
  options,
  onChange,
  error,
  icon,
  placeholder = 'Select an option',
  searchable = false,
}: CustomSelectProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedOption = useMemo(
    () => options.find(option => option.value === value),
    [options, value]
  );

  const filteredOptions = useMemo(
    () =>
      searchable
        ? options.filter(option =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : options,
    [options, searchQuery, searchable]
  );

  const handleSelect = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue);
      setModalVisible(false);
      setSearchQuery('');
    },
    [onChange]
  );

  const handleClose = useCallback(() => {
    setModalVisible(false);
    setSearchQuery('');
  }, []);

  const renderOption = useCallback(
    ({ item }: { item: Option }) => (
      <TouchableOpacity
        style={[
          styles.option,
          value === item.value && styles.selectedOption,
        ]}
        onPress={() => handleSelect(item.value)}>
        <Text
          style={[
            styles.optionText,
            value === item.value && styles.selectedOptionText,
          ]}>
          {item.label}
        </Text>
        {value === item.value && (
          <FontAwesome name="check" size={16} color="#007AFF" />
        )}
      </TouchableOpacity>
    ),
    [value, handleSelect]
  );

  const keyExtractor = useCallback((item: Option) => item.value, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.selectContainer, error && styles.inputError]}
        onPress={() => setModalVisible(true)}>
        {icon && (
          <FontAwesome
            name={icon as any}
            size={20}
            color="#666"
            style={styles.icon}
          />
        )}
        <Text style={[styles.selectText, !selectedOption && styles.placeholder]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <FontAwesome name="chevron-down" size={16} color="#666" />
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}>
                <FontAwesome name="times" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {searchable && (
              <View style={styles.searchContainer}>
                <FontAwesome name="search" size={16} color="#666" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            )}

            <FlatList
              data={filteredOptions}
              keyExtractor={keyExtractor}
              renderItem={renderOption}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={5}
              removeClippedSubviews={true}
            />
          </View>
        </View>
      </Modal>
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
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    height: 48,
  },
  inputError: {
    borderColor: '#ff3b30',
  },
  icon: {
    marginRight: 8,
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    color: '#999',
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#f0f9ff',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#007AFF',
    fontWeight: '500',
  },
}); 