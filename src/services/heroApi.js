import axios from 'axios';

const BASE_URL = 'https://super-hero-f7yh.onrender.com/api/heroes';

const instance = axios.create({
  baseURL: BASE_URL,
});

const fetchAllHeroes = async () => {
  const { data } = await instance.get('/');
  return data;
};

const postHero = async data => {
  const { data: result } = await instance.post('/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result;
};

const fetchHeroById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

const editHeroById = async data => {
  const { data: result } = await instance.put(`/${data.id}`, data.formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result;
};

const deleteHeroById = async id => {
  await instance.delete(`/${id}`);
  return id;
};

const deleteImageById = async data => {
  const modifiedSelectedImage = data.selectedImage
    .replace(/\\\\/g, '\\')
    .replace('images', '');
  await instance.delete(`/${data.id}/images${modifiedSelectedImage}`);

  return data;
};

export const superHeroesAPI = {
  fetchAllHeroes,
  postHero,
  fetchHeroById,
  editHeroById,
  deleteHeroById,
  deleteImageById,
};
