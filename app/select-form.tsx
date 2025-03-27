import React, { useCallback, useMemo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomSelect } from '../components/CustomSelect';
import { Button } from '../components/Button';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const schema = yup.object().shape({
  selection: yup.string().required('Please select an option'),
  category: yup.string().required('Please select a category'),
});

type FormData = {
  selection: string;
  category: string;
};

export default function SelectForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      selection: '',
      category: '',
    },
  });

  const onSubmit = useCallback((data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission
  }, []);

  const renderSelectionField = useCallback(
    ({ field: { onChange, value } }: any) => (
      <CustomSelect
        label="Select an Option"
        value={value}
        options={options}
        onChange={onChange}
        error={errors.selection?.message}
        icon="list"
        placeholder="Choose an option..."
        searchable
      />
    ),
    [errors.selection?.message]
  );

  const renderCategoryField = useCallback(
    ({ field: { onChange, value } }: any) => (
      <CustomSelect
        label="Category"
        value={value}
        options={options}
        onChange={onChange}
        error={errors.category?.message}
        icon="folder"
        placeholder="Select a category..."
      />
    ),
    [errors.category?.message]
  );

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.form}>
        <Controller
          control={control}
          name="selection"
          render={renderSelectionField}
        />

        <Controller
          control={control}
          name="category"
          render={renderCategoryField}
        />

        <Button
          title={isSubmitting ? 'Submitting...' : 'Submit'}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
}); 