import React from 'react';
import { Button } from '@mui/material';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addHero } from 'redux/hero/hero-operations';

const regEx = /^[A-Za-z\s]+$/;

const validationSchema = Yup.object({
  nickname: Yup.string()
    .min(3, '3 characters minimum')
    .max(30, '30 characters maximum')
    .matches(regEx, 'English letters only')
    .required('Nickname is a required field'),
  real_name: Yup.string()
    .min(3, '3 characters minimum')
    .max(30, '30 characters maximum')
    .matches(regEx, 'English letters only')
    .required('Real name is a required field'),
  origin_description: Yup.string()
    .min(3, '3 characters minimum')
    .max(600, '600 characters maximum')
    .required('Description is a required field'),
  catch_phrase: Yup.string()
    .min(3, '3 characters minimum')
    .max(600, '100 characters maximum')
    .required('Catch phrase is a required field'),
  superpowers: Yup.array()
    .of(
      Yup.string()
        .min(3, '3 characters minimum')
        .max(30, '30 characters maximum')
        .matches(regEx, 'English letters only')
        .label('Superpower')
    )
    .required('Superpowers are required')
    .min(1, 'Please add at least one superpower'),
  images: Yup.array()
    .of(
      Yup.mixed().test('fileFormat', 'Invalid file format', function (value) {
        if (value && value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            const file = value[i];
            const supportedFormats = [
              //   'image/jpeg',
              'image/jpg',
              //   'image/png',
              //   'image/webp',
            ];
            const isValidFormat = supportedFormats.includes(file.type);
            if (!isValidFormat) {
              return false;
            }
          }
        }
        return true;
      })
    )
    .min(1, 'Please select at least one image')
    .required('Please select at least one image'),
});

const HeroForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, form) => {
    const { images, ...rest } = values;
    const formData = new FormData();

    for (const file of Object.values(images)) {
      formData.append('images', file);
    }

    Object.entries(rest).forEach(([fieldName, fieldValue]) => {
      formData.append(fieldName, fieldValue);
    });

    // console.log('FormData contents:');
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    sendHero(formData);
    form.resetForm();
  };

  const sendHero = data => {
    const nickname = data.get('nickname');
    const real_name = data.get('real_name');
    const origin_description = data.get('origin_description');
    const catch_phrase = data.get('catch_phrase');
    const superpowers = data.getAll('superpowers');
    const images = getFiles(data, 'images');

    const formData = {
      nickname,
      real_name,
      origin_description,
      catch_phrase,
      superpowers,
      images,
    };

    console.log('🆑  formData:', formData);
    dispatch(addHero(formData));
  };

  const getFiles = (formData, field) => {
    const files = [];
    const fileList = formData.getAll(field);

    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList[i]);
    }

    return files;
  };

  return (
    <Formik
      initialValues={{
        nickname: '',
        real_name: '',
        origin_description: '',
        catch_phrase: '',
        superpowers: [],
        images: [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="nickname">Nickname</label>
            <Field
              type="text"
              id="nickname"
              name="nickname"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage
              name="nickname"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="real_name">Real Name</label>
            <Field
              type="text"
              id="real_name"
              name="real_name"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage
              name="real_name"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="origin_description">Description</label>
            <Field
              as="textarea"
              id="origin_description"
              name="origin_description"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage
              name="origin_description"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="catch_phrase">Catch phrase</label>
            <Field
              as="textarea"
              id="catch_phrase"
              name="catch_phrase"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage
              name="catch_phrase"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Superpowers</label>
            <FieldArray name="superpowers">
              {({ push, remove, form }) => (
                <div>
                  {form.values.superpowers.map((_, index) => (
                    <div key={index}>
                      <Field
                        name={`superpowers[${index}]`}
                        style={{ width: '100%', padding: '0.5rem' }}
                      />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Add Superpower
                  </button>
                </div>
              )}
            </FieldArray>
            <ErrorMessage
              name="superpowers"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              name="images"
              accept=".jpg, .jpeg, .png, .webp"
              multiple
              onChange={event => {
                const fileList = Array.from(event.target.files);
                setFieldValue('images', fileList);
              }}
              style={{ padding: '0.5rem' }}
            />
            <ErrorMessage
              name="images"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
