import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import {API_HOST} from '../../config';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const userProfile = res.data.data.user;

        storeData('token', {
          value: token,
        });
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              userProfile.profile_photo_url = `http://localhost:8000/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', userProfile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            .catch(err => {
              showMessage('Upload Photo Gagal');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', userProfile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }

        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err.response.data.data.message);
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.data?.message);
      });
  };

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(res => {
      dispatch(setLoading(false));
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const userProfile = res.data.data.user;

      storeData('token', {
        value: token,
      });
      storeData('userProfile', userProfile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};
