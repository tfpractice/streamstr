import axios from "axios";

export const DOG_URL = `https://dog.ceo/api/breeds/list/all`;

export const getDogs = () => axios.get(DOG_URL);

// export const getDogs
