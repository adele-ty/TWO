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
  },
  Spacing: {
    letterSpacing: 5,
  },
  blackTitle: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .8)',
  },
});

// 首页阅读和问答共用
const ReadQuestionStyles = StyleSheet.create({
  header: {
    marginBottom: '5%',
    ...commonStyles.center,
    ...commonStyles.Spacing,
    ...commonStyles.textStyle,
  },
  userOperate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '73%',
    width: '25%',
  },
  title: {
    fontSize: 18,
    marginBottom: '2.5%',
  },
  username: {
    marginBottom: '5%',
  },
  guideWord: {
    marginBottom: '5%',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: '5%',
  },
});

export {commonStyles, ReadQuestionStyles};
