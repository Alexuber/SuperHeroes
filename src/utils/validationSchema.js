import * as Yup from 'yup';
const regEx = /^[A-Za-z\s]+$/;

export const validationSchema = Yup.object({
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
    .max(1000, '1000 characters maximum')
    .required('Description is a required field'),
  catch_phrase: Yup.string()
    .min(3, '3 characters minimum')
    .max(600, '100 characters maximum')
    .required('Catch phrase is a required field'),
  superpowers: Yup.array()
    .of(
      Yup.string()
        .min(3, '3 characters minimum')
        .max(50, '50 characters maximum')
        .label('Superpower')
    )
    .required('Superpowers are required')
    .min(1, 'Please add at least one superpower'),
});
