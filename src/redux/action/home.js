import Axios from 'axios';
// const {default: Axios} = require('axios');
import {API_HOST} from '../../config';

export const getFoodData = () => dispatch => {
  // Axios.get(`${API_HOST.url}/food`)
  Axios.get(`https://foodmarket-backend.buildwithangga.id/api/food`)
    .then(res => {
      console.log(res);
      console.log('res.data.data.data.name', res.data.data.data);
      console.log('ke then');
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log('ke error');
      console.log(err);
    });
};
