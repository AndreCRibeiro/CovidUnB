import create from 'zustand';
import { Alert } from 'react-native';
import api from '../services/api';

const reqAuth = async (set, params) => {
  try {
    const response = await api.post('/sessions', params);

    set((state) => ({
      ...state,
      loading: false,
      userData: response.data.user,
      token: response.data.token,
      worked: response.data.token,
    }));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique suas credenciais'
    );
    set((state) => ({
      ...state,
      loading: false,
      userData: null,
      token: null,
      error,
      worked: false,
    }));
  }
};

const [useAuth] = create((set) => ({
  userData: null,
  token: null,
  error: null,
  worked: false,
  loading: null,
  isSick: null,
  geolocation: [],
  fetchAuth: (params) => {
    set((state) => ({ ...state, loading: true }));
    reqAuth(set, params);
  },
  changeGeolocation: (params) => {
    set((state) => ({ ...state, geolocation: params }));
  },
}));

export default useAuth;
