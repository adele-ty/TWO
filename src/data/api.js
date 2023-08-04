import axios from 'axios';

const getTodayData = async () => {
  const list = [];
  const {data: coverListData} = await axios.get(
    'http://v3.wufazhuce.com:8000/api/hp/idlist/0?version=3.5.0&platform=android',
  );
  const CoverIdList = coverListData.data;
  await axios
    .get(
      `http://v3.wufazhuce.com:8000/api/hp/detail/${CoverIdList[0]}?version=3.5.0&platform=android`,
    )
    .then(res => list.push(res.data.data));
  await axios
    .get(
      'http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android',
    )
    .then(res => {
      const data = res.data.data;
      list.push(data.essay[0]);
      list.push(data.question[0]);
    });
  return list;
};

const getReadEssay = async () => {
  const {data} = await axios.get(
    'http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android',
  );
  return data.data.essay;
};

const getQuestion = async () => {
  const {data} = await axios.get(
    'http://v3.wufazhuce.com:8000/api/reading/index/?version=3.5.0&platform=android',
  );
  return data.data.question;
};

const getEssayDetail = async id => {
  const {data} = await axios.get(
    `http://v3.wufazhuce.com:8000/api/essay/${id}?version=3.5.0&platform=android`,
  );
  return data.data;
};

const getQuestionDetail = async id => {
  const {data} = await axios.get(
    `http://v3.wufazhuce.com:8000/api/question/${id}?version=3.5.0&platform=android`,
  );
  return data.data;
};

const getBookMovie = async () => {
  const {data} = await axios.get(
    'http://v3.wufazhuce.com:8000/api/movie/list/0?version=3.5.0&platform=android',
  );

  const Data = [
    {date: '2022年10月', data: data.data.slice(0, 1)},
    {date: '2022年08月', data: data.data.slice(1, 2)},
    {date: '2022年07月', data: data.data.slice(2, 3)},
    {date: '2022年05月', data: data.data.slice(3, 6)},
    {date: '2022年03月', data: data.data.slice(6, 9)},
    {date: '2022年02月', data: data.data.slice(9, 13)},
    {date: '2022年01月', data: data.data.slice(13, 16)},
    {date: '2021年12月', data: data.data.slice(16, 20)},
  ];

  return Data;
};

const getBookMovieDetail = async id => {
  const {data} = await axios.get(
    `http://v3.wufazhuce.com:8000/api/movie/${id}/story/1/0?version=3.5.0&platform=android`,
  );

  return data.data.data[0];
};

const getMusicList = async () => {
  const {data} = await axios.get(
    'http://v3.wufazhuce.com:8000/api/music/idlist/0?version=3.5.0&platform=android',
  );

  const music1 = await getMusicDetail(data.data[0]);
  const music2 = await getMusicDetail(data.data[1]);
  const music3 = await getMusicDetail(data.data[2]);
  const music4 = await getMusicDetail(data.data[3]);
  const music5 = await getMusicDetail(data.data[4]);
  const music6 = await getMusicDetail(data.data[5]);
  const music7 = await getMusicDetail(data.data[6]);

  let musicList = [];
  await Promise.all([
    music1,
    music2,
    music3,
    music4,
    music5,
    music6,
    music7,
  ]).then(res => {
    musicList = res;
  });

  return musicList;
};

const getMusicDetail = async id => {
  const {data} = await axios.get(
    `http://v3.wufazhuce.com:8000/api/music/detail/${id}?version=3.5.0&platform=android`,
  );
  return data.data;
};

export {
  getTodayData,
  getReadEssay,
  getEssayDetail,
  getQuestionDetail,
  getBookMovie,
  getBookMovieDetail,
  getQuestion,
  getMusicList,
  getMusicDetail,
};
