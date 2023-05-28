const getFormDataFiles = (formData, field) => {
  const files = [];

  const fileList = formData.getAll(field);

  for (let i = 0; i < fileList.length; i++) {
    files.push(fileList[i]);
  }

  return files;
};

export default getFormDataFiles;
