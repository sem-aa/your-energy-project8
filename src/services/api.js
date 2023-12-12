import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';

export const getPhraseDay = async () => {
  const res = await axios.get('quote');
  return res.data;
};

export const getFilters = async ({
  filter = '',
  page = 1,
  limit = 12,
} = {}) => {
  try {
    const res = await axios.get(
      `filters?filter=${filter}&page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.error('Error in getFilters:', error);
  }
};

export const getExercises = async ({
  bodypart = '',
  muscles = '',
  equipment = '',
  keyword = '',
  page = 1,
  limit = 10,
} = {}) => {
  try {
    const res = await axios.get(
      `exercises?bodypart=${bodypart}&muscles=${muscles}&equipment=${equipment}&keyword=${keyword}&page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.error('Error in getExercises:', error);
  }
};

export const getExerciseId = async exerciseId => {
  try {
    const res = await axios.get(`exercises/${exerciseId}`);
    return res.data;
  } catch (error) {
    console.error('Error in getExerciseId:', error);
  }
};

export const updateRaring = async exerciseId => {
  try {
    const res = await axios.patch(`exercises/${exerciseId}/rating`);
    return res.data;
  } catch (error) {
    console.error('Error in getExerciseId:', error);
  }
};

export const subscribe = async email => {
  try {
    const res = await axios.post('subscription', { email });
    return res.data;
  } catch (error) {
    console.error('Error in getExerciseId:', error);
  }
};
