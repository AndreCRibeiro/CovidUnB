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

const reqIsSick = (set, params) => {
  set((state) => ({ ...state, isSick: params }));
};

const reqIsSickNo = (set, params) => {
  set((state) => ({ ...state, isSick: params }));
};

const [useAuth] = create((set) => ({
  userData: null, // variavel reducer
  token: null, // variavel reducer
  error: null,
  loading: null,
  isSick: null,
  fetchAuth: (params) => {
    set((state) => ({ ...state, loading: true }));
    reqAuth(set, params);
  },
  reqIsSick: (params) => {
    reqIsSick(set, params);
  },
  reqIsSickNo: (params) => {
    reqIsSickNo(set, params);
  },
}));

export default useAuth;
