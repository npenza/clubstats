import axios from "axios";
import config from "../../config";

export function getLeagueNameByID(id: string): string {

  axios.get(config.API_URL + "/leagues/" + id).then((response) => {
    return response.data.name;
  });
  return "Not found";
}
