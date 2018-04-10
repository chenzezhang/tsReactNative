
/**
 * @param css 提出来
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 375,
    height: 125,
    top: 0,
    paddingTop: 16,
    paddingRight: 14,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.7)', 
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    marginLeft: 6, 
    marginRight: 6
  },
  activeDot: {
    backgroundColor: '#fff', 
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    marginLeft: 6, 
    marginRight: 6
  }
});
  