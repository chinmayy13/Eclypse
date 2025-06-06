import axios from "axios";
import { Product, Review, GalleryImage } from "../types";

const API_URL = "https://one2eclypse.onrender.com/api";

export const getProduct = async (): Promise<Product> => {
  const response = await axios.get(`${API_URL}/product`);
  return response.data;
};

export const getReviews = async (): Promise<Review[]> => {
  const response = await axios.get(`${API_URL}/reviews`);
  return response.data;
};

export const getGallery = async (): Promise<GalleryImage[]> => {
  const response = await axios.get(`${API_URL}/gallery`);
  return response.data;
};
