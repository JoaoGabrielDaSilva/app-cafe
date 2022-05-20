import { api } from "./api";
import URLs from "./URLs";

type GetWeatherInfoParams = {
  lat: number;
  lon: number;
};

export default {
  getWeatherInfo: async ({ lat, lon }: GetWeatherInfoParams) => {
    const response = await api.get(
      `${URLs.weather}/rapidapi/forecast/${lat.toFixed(5)}/${lon.toFixed(
        5
      )}/hourly/`,
      {
        // params: {
        //   lat,
        //   lon,
        //   q: "São Leopoldo",
        // },
        headers: {
          "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
          "X-RapidAPI-Key":
            "c09db9b5ddmshcf52fdb0ec12b59p1378f6jsn9223220262ac",
        },
      }
    );

    return response.data;
  },
};
