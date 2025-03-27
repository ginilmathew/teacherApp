import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomTextarea } from '../components/CustomTextarea';
import { Button } from '../components/Button';

const schema = yup.object().shape({
  description: yup
    .string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must not exceed 500 characters'),
  notes: yup
    .string()
    .max(200, 'Notes must not exceed 200 characters'),
});

type FormData = {
  description: string;
  notes: string;
};

export default function ExampleForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: '',
      notes: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <CustomTextarea
              label="Description"
              placeholder="Enter your description..."
              value={value}
              onChangeText={onChange}
              error={errors.description?.message}
              icon="pencil"
              numberOfLines={6}
            />
          )}
        />

        <Controller
          control={control}
          name="notes"
          render={({ field: { onChange, value } }) => (
            <CustomTextarea
              label="Notes (Optional)"
              placeholder="Add any additional notes..."
              value={value}
              onChangeText={onChange}
              error={errors.notes?.message}
              icon="sticky-note"
              numberOfLines={3}
            />
          )}
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
  form: {
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
}); 