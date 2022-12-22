import { authFail } from 'src/redux/features/authSlice/loginSlice';
import { store } from 'src/redux/store';
import { apiErrorCode, axiosInstance } from '.';

export const checkUserValidation = (data: any) => {
  if (data?.statusCode) {
    const { statusCode } = data;
    return (
      statusCode === apiErrorCode.sessionExpired ||
      statusCode === apiErrorCode.unauthorized ||
      statusCode === apiErrorCode.accessDenied
    );
  }
  return false;
};

const logout = () => {
  localStorage.clear();
  store.dispatch(authFail());
};

const getDataApi = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  axiosInstance
    .get(endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        if (checkUserValidation(err.response.data)) {
          logout();
        }
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const postDataApi = (
  endPoint: string,
  params: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  axiosInstance
    .post(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        if (checkUserValidation(err.response.data)) {
          logout();
        }
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      } else {
        errorCallback(err.response);
      }
    });
};

const putDataApi = (
  endPoint: string,
  params: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  axiosInstance
    .put(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        if (checkUserValidation(err.response.data)) {
          logout();
        }
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const patchDataApi = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  axiosInstance
    .patch(endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        if (checkUserValidation(err.response.data)) {
          logout();
        }
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};

const deleteDataApi = (
  endPoint: string,
  params: any,
  successCallback: Function,
  errorCallback: Function
) => {
  axiosInstance
    .delete(endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === 'ERR_NETWORK') {
        errorCallback({
          data: {
            statusCode: '',
            message: 'You are not connected to internet. Please check your connection.',
          },
        });
      } else if (err.code === 'ECONNABORTED') {
        errorCallback({
          data: {
            statusCode: 408,
          },
        });
      } else if (err.response) {
        if (checkUserValidation(err.response.data)) {
          logout();
        }
        errorCallback(err.response);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: '',
            message: 'Please try again later',
          },
        });
      }
    });
};
const api = {
  getDataApi,
  postDataApi,
  putDataApi,
  patchDataApi,
  deleteDataApi,
};
export default api;
