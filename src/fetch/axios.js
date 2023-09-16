import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38627834-dc2fd3d8d485c2fb974c91b78';

export const getImg = async (searchValue, shownPage) => {
  const option = {
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      key: API_KEY,
      q: `${searchValue}`,
      image_type: 'photo',
      photo: 'horizontal',
      safesearch: 'true',
      page: `${shownPage}`,
      per_page: 12,
    },
  };
  const { data } = await axios(BASE_URL, option);
  return data;
};
