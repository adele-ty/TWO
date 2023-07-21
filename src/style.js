import {StyleSheet} from 'react-native';

// 所有组件均可共用
const commonStyles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    width: '100%',
    padding: '5%',
    marginBottom: 10,
  },
  textStyle: {color: 'rgba(0, 0, 0, .3)', fontSize: 14},
  center: {
    textAlign: 'center',
    marginBottom: '7.5%',
  },
  Spacing: {
    letterSpacing: 5,
  },
});

// 首页阅读和问答共用
const ReadQuestionStyles = StyleSheet.create({
  userOperate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: '65%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '2.5%',
  },
  username: {
    marginBottom: '5%',
  },
  guideWord: {
    marginBottom: '2.5%',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: '5%',
  },
});

export {commonStyles, ReadQuestionStyles};
