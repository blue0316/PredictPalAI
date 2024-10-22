import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl, headers: defaultHeaders } = { baseUrl: "", headers: {} }) =>
  async ({ url, method, data, headers }) => {
    try {
      const combinedHeaders = {
        ...defaultHeaders,
        "ngrok-skip-browser-warning": "true",
        ...headers,
      };
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: combinedHeaders,
      });

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
