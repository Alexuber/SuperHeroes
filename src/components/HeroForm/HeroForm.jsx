import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/hero/hero-selectors';
import { Loader } from 'shared/components/Loader/Loader';
import { Button, Typography, Box } from '@mui/material';
import { addHero, changeHeroById } from 'redux/hero/hero-operations';
import validateImages from 'utils/validateImages';
import getFormDataFiles from 'utils/getFormDataFiles';
import { validationSchema } from 'utils/validationSchema';
import styles from './HeroForm.module.scss';

const HeroForm = ({ selectedHero, handleSubmitEditHero }) => {
  const isLoading = useSelector(selectIsLoading);

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

    if (!selectedHero) {
      if (images.length === 0) {
        form.setFieldError('images', 'Please select at least one image');
        return;
      }
    }
    validateImages(images, form);
    await sendHero(formData);
    form.resetForm();
  };

  const sendHero = async data => {
    const nickname = data.get('nickname');
    const real_name = data.get('real_name');
    const origin_description = data.get('origin_description');
    const catch_phrase = data.get('catch_phrase');
    const superpowers = data.get('superpowers').split(',');
    const images = getFormDataFiles(data, 'images');

    const formData = {
      nickname,
      real_name,
      origin_description,
      catch_phrase,
      superpowers,
      images,
    };

    if (selectedHero) {
      const id = selectedHero._id;
      await editHeroInfo({ formData, id });
    } else {
      await addNewHero(formData);
    }
  };

  const editHeroInfo = async data => {
    dispatch(changeHeroById(data));
    handleSubmitEditHero();
  };

  const addNewHero = async formData => {
    dispatch(addHero(formData));
  };

  return (
    <Box>
      <Formik
        initialValues={{
          nickname: selectedHero ? selectedHero.nickname : '',
          real_name: selectedHero ? selectedHero.real_name : '',
          origin_description: selectedHero
            ? selectedHero.origin_description
            : '',
          catch_phrase: selectedHero ? selectedHero.catch_phrase : '',
          superpowers: selectedHero ? selectedHero.superpowers : [],
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            {!selectedHero && (
              <Typography
                sx={{ marginBottom: '20px', textAlign: 'center' }}
                variant="h5"
              >
                Add new SuperHero!
              </Typography>
            )}
            <Box className={styles.container}>
              <Typography htmlFor="nickname">Nickname</Typography>
              <Field
                type="text"
                id="nickname"
                name="nickname"
                className={styles.textField__input}
              />
              <ErrorMessage
                name="nickname"
                component="div"
                className={styles.textField__input}
              />
            </Box>
            <Box className={styles.container}>
              <Typography htmlFor="real_name">Real Name</Typography>
              <Field
                type="text"
                id="real_name"
                name="real_name"
                className={styles.textField__input}
              />
              <ErrorMessage
                name="real_name"
                component="div"
                className={styles.errorMessage}
              />
            </Box>
            <Box className={styles.container}>
              <Typography htmlFor="origin_description">Description</Typography>
              <Field
                as="textarea"
                id="origin_description"
                name="origin_description"
                className={styles.textField__input}
              />
              <ErrorMessage
                name="origin_description"
                component="div"
                className={styles.errorMessage}
              />
            </Box>
            <Box className={styles.container}>
              <Typography htmlFor="catch_phrase">Catch phrase</Typography>
              <Field
                as="textarea"
                id="catch_phrase"
                name="catch_phrase"
                className={styles.textField__input}
              />
              <ErrorMessage
                name="catch_phrase"
                component="div"
                className={styles.errorMessage}
              />
            </Box>
            <Box className={styles.container}>
              <Typography>Superpowers</Typography>
              <FieldArray name="superpowers">
                {({ push, remove, form }) => (
                  <div>
                    {form.values.superpowers.map((_, index) => (
                      <div key={index}>
                        <Field
                          name={`superpowers.${index}`}
                          className={styles.textField__input}
                        />
                        <Button
                          variant="outlined"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          -
                        </Button>
                        <Button
                          variant="outlined"
                          type="button"
                          onClick={() => push('')}
                        >
                          +
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outlined"
                      sx={{ marginTop: '8px' }}
                      type="button"
                      onClick={() => push('')}
                    >
                      Add Superpower
                    </Button>
                  </div>
                )}
              </FieldArray>
              <ErrorMessage
                name="superpowers"
                component="div"
                className={styles.errorMessage}
              />
            </Box>{' '}
            <Box className={styles.container}>
              <label htmlFor="images">Images</label>
              <input
                className={styles.textField__input}
                type="file"
                id="images"
                name="images"
                accept=".jpg, .jpeg, .png, .webp"
                multiple
                onChange={event => {
                  const fileList = Array.from(event.target.files);
                  setFieldValue('images', fileList);
                }}
              />
              <ErrorMessage
                name="images"
                component="div"
                className={styles.errorMessage}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '160px', margin: '0 auto' }}
            >
              {!isLoading && 'Submitt'}
              {isLoading && (
                <Loader with="25px" height="25px" color="#e0e1e6" />
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default HeroForm;
