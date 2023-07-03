import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  link: yup.string().required(),
  vendor_id: yup.string().nullable(),
});
