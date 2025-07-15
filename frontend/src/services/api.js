import endPoint from "./constants";
import axios from "axios";

class Api {
  constructor() {
    this.base_url = import.meta.env.VITE_APP_API_URL;
    if (!this.base_url) throw new Error("API URL is not defined ! ");
  }

  fetchConfig() {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer${token}`,
    };
    return { headers };
  }

  /*  Authorization Routes */
  async signin(username, password) {
    try {
      const res = await axios.post(this.base_url + endPoint.login, {
        username,
        password,
      });
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  async logout() {
    try {
      const config = this.fetchConfig();
      const res = await axios.post(this.base_url + endPoint.logout, config);
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async resetPassword(username, old_password, new_password) {
    try {
      const res = await axios.post(this.base_url + endPoint.resetPassword, {
        username,
        old_password,
        new_password,
      });
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  /** Students Routes **/
  async getAllStudents() {
    try {
      const config = this.fetchConfig();
      const res = await axios.get(this.base_url + endPoint.students, config);
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  async createStudent({ student_name, section, folder_link }) {
    try {
      const config = this.fetchConfig();
      const res = await axios.post(
        this.base_url + endPoint.resetPassword,
        {
          student_name,
          section,
          folder_link,
        },
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  async updateStudent({ student_name, section, folder_link, id }) {
    try {
      const config = this.fetchConfig();
      const res = await axios.put(
        this.base_url + endPoint.students + `${id}`,
        {
          student_name,
          section,
          folder_link,
        },
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async deleteStudent(id) {
    try {
      const config = this.fetchConfig();
      const res = await axios.delete(
        this.base_url + endPoint.students + `${id}`,
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  // test connection
  async pingStudents() {
    try {
      const config = this.fetchConfig();
      const res = await axios.post(
        this.base_url + endPoint.pingStudents,
        {
          student_name,
          section,
          folder_link,
        },
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async testStudents() {
    try {
      const config = this.fetchConfig();
      const res = await axios.post(
        this.base_url + endPoint.testStudents,
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  /**CPR Entries**/
  async getAllCPRs() {
    try {
      const config = this.fetchConfig();
      const res = await axios.get(this.base_url + endPoint.cpr, config);
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async createCPR({
    student_name,
    student_id,
    staff_name,
    staff_comments,
    manager_comments,
    idp,
    color_code,
  }) {
    try {
      const config = this.fetchConfig();
      const res = await axios.post(
        this.base_url + endPoint.cpr,
        {
          student_name,
          student_id,
          staff_name,
          staff_comments,
          manager_comments,
          idp,
          color_code,
        },
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async getCPRById(id) {
    try {
      const config = this.fetchConfig();
      const res = await axios.get(
        this.base_url + endPoint.cpr + `${id}`,
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
  async updateCPRById(id) {
    try {
      const config = this.fetchConfig();
      const res = await axios.put(
        this.base_url + endPoint.cpr + `${id}`,
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }

  async deleteCPR(id) {
    try {
      const config = this.fetchConfig();
      const res = await axios.delete(
        this.base_url + endPoint.cpr + `${id}`,
        config
      );
      return res;
    } catch (err) {
      throw new Error("Error while fetching data:", +err);
    }
  }
}

const API = new Api();

export default API;
