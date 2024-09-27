import axios from "axios";

const apiFootballQuery =
  ({ baseUrl } = { baseUrl: "https://v3.football.api-sports.io" }) =>
  async ({ url, method, headers, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        headers,
        data,
        params,
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

export default apiFootballQuery;
