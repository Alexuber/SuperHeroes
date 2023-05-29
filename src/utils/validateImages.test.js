import validateImages from './validateImages';

describe('validateImages', () => {
  it('should set field error if unsupported file format is found', () => {
    const images = [
      { type: 'image/jpg' },
      { type: 'image/jpeg' },
      { type: 'image/png' },
      { type: 'image/gif' }, // wrong format
    ];

    const form = {
      setFieldError: jest.fn(),
    };

    validateImages(images, form);

    expect(form.setFieldError).toHaveBeenCalledWith(
      'images',
      'Invalid file format. Only JPG, JPEG, PNG, and WEBP formats are allowed.'
    );
  });

  it('should not set field error if all file formats are supported', () => {
    const images = [
      { type: 'image/jpg' },
      { type: 'image/jpeg' },
      { type: 'image/png' },
    ];

    const form = {
      setFieldError: jest.fn(),
    };

    validateImages(images, form);

    expect(form.setFieldError).not.toHaveBeenCalled();
  });
});
