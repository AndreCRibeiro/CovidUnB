import { StyleSheet } from 'react-native';
import { 
  checkFont,
  checkMargin
} from '../../styles/responsividade';

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: checkMargin,
  },

  textOptionStyle: {
    fontWeight: 'bold',
    fontSize: checkFont,
  },
});

export default styles;
