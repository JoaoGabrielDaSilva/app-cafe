import { api } from "./api";

type SearchLocationParams = {
  text: string;
};

export default {
  searchLocation: async ({ text }: SearchLocationParams) => {
    const response = await api.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          fields: "formatted_address",
          key: "AIzaSyB9TQDAiEF3dzpBQkkceMJaYEP1GvTXpIU",
          //   place_id: "ChIJgUbEo8cfqokR5lP9_Wh_DaM",
        },
      }
    );

    console.log(response.data);
    return {};
  },
};
