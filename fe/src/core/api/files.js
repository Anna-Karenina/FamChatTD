import { axios } from './../index';

export default {
  upload: file => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};
