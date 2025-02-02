import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;

export const eightProducts = groq`*[_type == "product"][1...9]`;

export const heroImage = groq`*[_type == "heroimg"]`;

export const fourcategory = groq`*[_type == "category"]`;




