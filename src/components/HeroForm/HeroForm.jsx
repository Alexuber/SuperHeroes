import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const regEx = /^[A-Za-z\s]+$/;

const validationSchema = Yup.object({
  nickname: Yup.string()
    .min(3, '3 characters minimum')
    .max(30, '30 characters maximum')
    .matches(regEx, 'English letters only')
    .required()
    .label('Nickname'),
  real_name: Yup.string()
    .min(3, '3 characters minimum')
    .max(30, '30 characters maximum')
    .matches(regEx, 'English letters only')
    .required()
    .label('Real name'),
  origin_description: Yup.string()
    .min(3, '3 characters minimum')
    .max(300, '300 characters maximum')
    .matches(regEx, 'English letters only')
    .required()
    .label('Description'),
  superpowers: Yup.array().of(Yup.string().label('Superpower')),
  images: Yup.array()
    .of(
      Yup.mixed().test('fileFormat', 'Invalid file format', value => {
        if (value && value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            const file = value[i];
            if (!file.type.match(/^image\//)) {
              return false;
            }
          }
        }
        return true;
      })
    )
    .required('Please select at least one image'),
});

const HeroForm = () => {
  const handleSubmit = async values => {
    const { images, ...rest } = values;
    const formData = new FormData();

    Object.values(images).forEach(file => {
      formData.append('images', file);
    });

    Object.entries(rest).forEach(([fieldName, fieldValue]) => {
      formData.append(fieldName, fieldValue);
    });

    console.log('FormData contents:');
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <Formik
      initialValues={{
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: [],
        images: [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <Field type="text" id="nickname" name="nickname" />
            <ErrorMessage name="nickname" component="div" />
          </div>
          <div>
            <label htmlFor="real_name">Real Name</label>
            <Field type="text" id="real_name" name="real_name" />
            <ErrorMessage name="real_name" component="div" />
          </div>
          <div>
            <label htmlFor="origin_description">Description</label>
            <Field
              as="textarea"
              id="origin_description"
              name="origin_description"
            />
            <ErrorMessage name="origin_description" component="div" />
          </div>
          <div>
            <label>Superpowers</label>
            <FieldArray name="superpowers">
              {({ push, remove, form }) => (
                <div>
                  {form.values.superpowers.map((_, index) => (
                    <div key={index}>
                      <Field name={`superpowers[${index}]`} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Add Superpower
                  </button>
                </div>
              )}
            </FieldArray>
            <ErrorMessage name="superpowers" component="div" />
          </div>
          <div>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={event => {
                const fileList = Array.from(event.target.files);
                setFieldValue('images', fileList);
              }}
            />
            <ErrorMessage name="images" component="div" />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
