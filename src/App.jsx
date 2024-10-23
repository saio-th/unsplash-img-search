/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

//コンポーネント
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

//スタイル
import { ChakraProvider, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import './App.css';
import PageNation from './components/PageNation';

//初回読み込み時のキーワードをランダムに設定
function App() {
  const firstKeywords = [
    'vegetable',
    'animal',
    'castle',
    'car',
    'house',
    'drink',
    'sky',
    'sun',
    'ramen',
  ];
  const firstKeyword =
    firstKeywords[Math.floor(Math.random() * firstKeywords.length)];

  //state管理
  const [keyword, setKeyword] = useState(firstKeyword);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const toast = useToast();

  //axiosでアクセスする情報
  const baseUrl = 'https://api.unsplash.com/search/photos';
  const options = {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    },
    params: {
      query: keyword,
      page: pageCount,
      per_page: 30,
    },
  };

  //Unsplash APIで200ページ以上は画像の取得ができないため「res.data.total_pages」の上限を設定
  const maxPageCount = 200;

  const getPhotoData = () => {
    setLoading(true);

    axios
      .get(baseUrl, options)
      .then((res) => {
        setPhotos(res.data.results);
        res.data.total_pages > maxPageCount
          ? setTotalPage(maxPageCount)
          : setTotalPage(res.data.total_pages);
        console.log(res.data.results);
      })
      .catch(() => {
        setLoading(false);
        toast({
          title: '画像が見つかりませんでした',
          status: 'error',
          position: 'top',
          duration: 2000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //「search」ボタンをクリック
  const searchPhoto = useCallback(
    (e) => {
      e.preventDefault();
      setPageCount(1);
      options.params.page = 1;
      getPhotoData();
    },
    [getPhotoData]
  );

  //「NEXT」ボタンをクリック
  const incrementPageCount = useCallback(() => {
    const newPageCount = pageCount + 1;
    setPageCount(newPageCount);
    options.params.page = newPageCount;
    getPhotoData();
  }, [getPhotoData]);

  //「PREV」ボタンをクリック
  const decrementPageCount = useCallback(() => {
    const newPageCount = pageCount - 1;
    setPageCount(newPageCount);
    options.params.page = newPageCount;
    getPhotoData();
  }, [getPhotoData]);

  //「TOP」ボタンをクリック
  const topPageCount = useCallback(() => {
    const newPageCount = 1;
    setPageCount(newPageCount);
    options.params.page = 1;
    getPhotoData();
  }, [getPhotoData]);

  //「LAST」ボタンをクリック
  const lastPageCount = useCallback(() => {
    const newPageCount = totalPage > maxPageCount ? maxPageCount : totalPage;
    setPageCount(newPageCount);
    options.params.page = newPageCount;
    totalPage > maxPageCount
      ? setTotalPage(maxPageCount)
      : setTotalPage(totalPage);
    getPhotoData();
  }, [getPhotoData]);

  //初回読み込み
  useEffect(() => {
    getPhotoData();
  }, []);

  return (
    <ChakraProvider>
      <SApp className="App">
        <Title />
        <Form
          keyword={keyword}
          setKeyword={setKeyword}
          searchPhoto={searchPhoto}
          loading={loading}
        />
        <Results photos={photos} />
        <PageNation
          pageCount={pageCount}
          totalPage={totalPage}
          decrementPageCount={decrementPageCount}
          incrementPageCount={incrementPageCount}
          topPageCount={topPageCount}
          lastPageCount={lastPageCount}
          loading={loading}
        />
      </SApp>
    </ChakraProvider>
  );
}

export default App;

const SApp = styled.div`
  padding: 2em 0;
`;
