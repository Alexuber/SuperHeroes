import { superHeroesAPI } from 'services/heroApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getHeroes = createAsyncThunk(
  'heroes/getHeroes',
  async (_, { rejectWithValue }) => {
    try {
      const data = await superHeroesAPI.fetchAllHeroes();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addHero = createAsyncThunk(
  'heroes/postHero',
  async (hero, { rejectWithValue }) => {
    try {
      const data = await superHeroesAPI.postHero(hero);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const findHeroById = createAsyncThunk(
  'heroes/findheroById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await superHeroesAPI.fetchHeroById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeHeroById = createAsyncThunk(
  'heroes/changeHeroById',
  async (newData, { rejectWithValue }) => {
    try {
      const response = await superHeroesAPI.editHeroById(newData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeHero = createAsyncThunk(
  'heroes/removeHero',
  async (id, { rejectWithValue }) => {
    try {
      await superHeroesAPI.deleteHeroById(id);
      console.log('🆑  id:', id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeImgById = createAsyncThunk(
  'heroes/removeImgById',
  async (data, { rejectWithValue }) => {
    try {
      const response = await superHeroesAPI.deleteImageById(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
