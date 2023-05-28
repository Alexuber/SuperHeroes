export default function validateImages(images, form) {
  for (let i = 0; i < images.length; i++) {
    const file = images[i];
    const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png'];
    if (!supportedFormats.includes(file.type)) {
      form.setFieldError(
        'images',
        'Invalid file format. Only JPG, JPEG, PNG, and WEBP formats are allowed.'
      );
      return;
    }
  }
}
