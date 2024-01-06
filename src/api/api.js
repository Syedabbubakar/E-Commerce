import axios from "axios";

const API_KEY_TOKEN =
  "73e0df1dc7fa790c6d7ced87b56f331c763963748bb0be3bef275674e68d84191ed34dcc765a5b86f29e4ffbff7c96854165fa7f1f3acea33c8992e1a2b113d98869fa707dbca32f9f037886426c765b457e305cfad7e40154d3b0e0f6cace75b1a3eef98b1c429f2345a7b957949ad3dd7104a080895b507a08b084d9b7f83b";

export const API_BASE_URL = "http://localhost:1337";

const params = {
  headers: {
    Authorization: `Bearer ${API_KEY_TOKEN}`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const result = await axios.get(API_BASE_URL + url, params);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
