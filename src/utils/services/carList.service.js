import client from "../server/CustomAxios";

class CarListService {
  getCarList() {
    return client.get("");
  }
}

export default new CarListService();
