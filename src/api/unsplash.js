import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f00ce5b2fb493f904d99dcc19ca298df4cdc78d14c340ff819295f8de02a16b7"
  }
});
