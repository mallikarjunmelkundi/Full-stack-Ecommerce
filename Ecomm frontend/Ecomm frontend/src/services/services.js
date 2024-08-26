import axios from "axios";

class Services {
  fetchAllProducts() {
    return axios.get("http://localhost:8080/api/v1/auth/product", 
      {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MjI4ODIzMTEsImV4cCI6MTcyMzQ4NzExMX0.EQs1c8FMQfBE696rR8SFtSdMAmVc4GTUjliXhZOXSik"
      }
    });
  }
}

export default new Services();



