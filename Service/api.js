import axios from 'axios';
import {baseUrl} from '../Service/apiConfig';

const instance = axios.create({
  baseURL: baseUrl,
});
instance.get(baseUrl);

export const getRequestCall = url => {
  return new Promise((resolve, reject) => {
    instance
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const postRequestCall = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, {data})
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const putRequestCall = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, {data})
      .then(response => {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const deleteRequestCall = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, {data})
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
