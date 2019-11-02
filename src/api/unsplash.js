import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 71838bebc084e6574034ab6aed439cc87c0999b6176e82a3657fb33256a5aad9"
  }
});
