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

export {getTodayData};
