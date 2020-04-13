import { Dimensions } from 'react-native';
import normalize from 'react-native-normalize';


export const largura_tela = Dimensions.get('window').width;
export const altura_tela = Dimensions.get('window').height;

export const paddingImage = altura_tela< 1500 ? normalize(20):normalize(50);
export const widthImage = altura_tela< 1500 ? normalize(80):normalize(100);
export const heightImage = altura_tela< 1500 ? normalize(80):normalize(100);
export const checkFont = altura_tela< 1500 ? normalize(15):normalize(17);
export const checkMargin = altura_tela< 1500 ? normalize(13):normalize(16);
export const HelpTitle = altura_tela< 1500 ? normalize(17):normalize(19);
export const heightOutros = altura_tela< 1500 ? normalize(40):normalize(50);




