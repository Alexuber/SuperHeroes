import getFormDataFiles from './getFormDataFiles';

describe('getFormDataFiles', () => {
  it('return an array of files from FormData', () => {
    const formData = new FormData();
    const file1 = new File(['file content'], 'file1.txt');
    const file2 = new File(['file content'], 'file2.txt');

    formData.append('files', file1);
    formData.append('files', file2);

    const result = getFormDataFiles(formData, 'files');

    expect(result).toHaveLength(2);
    expect(result[0]).toBe(file1);
    expect(result[1]).toBe(file2);
  });

  it('return an empty array if no files in FormData', () => {
    const formData = new FormData();

    const result = getFormDataFiles(formData, 'files');

    expect(result).toHaveLength(0);
  });
});
