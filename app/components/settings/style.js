import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  container: {
    backgroundColor: '#F5F5F5',
  },
  tabBar: {
    backgroundColor: 'white',
    height: (Platform.OS === 'android') ? 55 : 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: (Platform.OS === 'android') ? 15 : 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    shadowOpacity: 0.185,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 4,
  },
  backButton: {
    color: '#F7524C',
    fontSize: 30,
  },
  firstPart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 3.6,
    justifyContent: 'space-between',
  },
  forward: {
    alignSelf: 'center',
    color: 'lightgrey',
  },
  imagesSection: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
  },
  part1: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  mainImageView: {
    backgroundColor: '#F5F5F5',
    width: width - 130,
  },
  columnImageView: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  part2: {
    backgroundColor: '#F5F5F5',
    width: width - 15,
  },
  rowImageView: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  heading: {
    marginBottom: 10,
  },
  text: {
    fontFamily: 'arial',
    color: 'rgba(0,0,0,0.65)',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 2,
  },
  someText: {
    color: 'rgba(0,0,0,0.25)',
    margin: 10,
  },
  locationSwipper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    elevation: 1.5,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  shadowBox: {
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  showMe: {
    paddingVertical: 10,
    backgroundColor: 'white',
    flex: (Platform.OS === 'ios') ? 8 : 4.5,
    flexDirection: 'column',
    borderRadius: 5,
    elevation: 1.5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
  },
  redText: {
    color: '#F7524C',
    fontSize: 18,
    fontWeight: '600',
  },
  menSwitch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  helpBtn: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 3,
    elevation: 1.5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
  },
  switchBlock: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    elevation: 1.5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  notBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  switch1: {},
  switch2: {},
  swip: {
    fontSize: 16,
    color: 'grey',
  },
  textBlue: {
    color: 'cornflowerblue',
    fontSize: 16,
    fontWeight: '600',
  },
  searchDistance: {
    backgroundColor: 'white',
    flex: 3,
    flexDirection: 'column',
    borderRadius: 5,
    marginTop: 10,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
  },
  searchDistanceHeader: {
    flex: 1,
    flexDirection: 'column',
  },
  searhHeaderText: {
    color: '#F7524C',
    fontSize: 18,
    fontWeight: '600',
  },
  searchKmText: {
    fontSize: 16,
    fontWeight: '600',
  },
  slider: {
    margin: 10,
  },
  multisliderView: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  multislider: {},
  switchBlockHeader: {
    fontSize: 16,
    color: 'grey',
  },
  switchBlockHeader2: { ...this.switchBlockHeader, ...{ alignSelf: 'center', fontSize: 16, color: 'grey' } },
  webProfile: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userNameRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  userNameRowKey: {
    color: 'grey',
  },
  userNameRowValue: {
    color: 'grey',
  },
  flame: {
    color: '#F7524C',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 30,
  },
};
