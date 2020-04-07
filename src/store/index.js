import create from 'zustand';
import api from '../services/api';

const reqAuth = async (set, params) => {
  try {
    const response = await api.post('/sessions', params);
    set((state) => ({
      ...state,
      loading: false,
      userData: response.data.user,
      token: response.data.token,
    }));
  } catch (error) {
    set((state) => ({
      ...state,
      loading: false,
      userData: null,
      token: null,
      error,
    }));
  }
};

const [useAuth] = create((set) => ({
  userData: null, // variavel reducer
  token: null, // variavel reducer
  error: null,
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
