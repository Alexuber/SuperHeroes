import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/heroes';

const instance = axios.create({
  baseURL: BASE_URL,
});

const fetchAllHeroes = async () => {
  try {
    const { data } = await instance.get('/');
    return data;
  } catch (error) {
    throw error;
  }
};

const postHero = async data => {
  try {
    const { data: result } = await instance.post('/', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const fetchHeroById = async id => {
  try {
    const { data } = await instance.get(`/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const editHeroById = async data => {
  try {
    const { data: result } = await instance.put(`/${data.id}`, data.formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteHeroById = async id => {
  try {
    await instance.delete(`/${id}`);
    return id;
  } catch (error) {
    throw error;
  }
};

const deleteImageById = async data => {
  const modifiedSelectedImage = data.selectedImage
    .replace(/\\\\/g, '\\')
    .replace('images', '');

  try {
    await instance.delete(`${data.id}/images${modifiedSelectedImage}`);
    console.log('data -->', data);

    return data;
  } catch (error) {
    console.log('data -->', data);
    throw error;
  }
};

export const superHeroesAPI = {
  fetchAllHeroes,
  postHero,
  fetchHeroById,
  editHeroById,
  deleteHeroById,
  deleteImageById,
};
