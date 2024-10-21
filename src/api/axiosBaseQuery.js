import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl, headers } = { baseUrl: "", headers: {} }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, headers });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
