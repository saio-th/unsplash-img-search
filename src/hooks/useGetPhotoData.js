import axios from 'axios';
import { useState } from 'react';

export const useGetPhotoData = (props) => {
  const { setPhotos } = props;
  const [keyword, setKeyword] = useState('');

  const getPhotos = (e) => {
    e.preventDefault();

    setKeyword(e.target.value);

    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      )
      .then((res) => setPhotos(res.data.results))
      .catch(() => alert('画像が見つかりませんでした'));
  };

  return { getPhotos, keyword };
};
