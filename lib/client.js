import { createClient, groq } from "next-sanity";

import {apiVersion, dataset, projectId, useCdn} from '../lib/env';

export async function getData() {
    "use server"
    const client = createClient({
        apiVersion,
        projectId,
        dataset,
        useCdn
    });

    const query = groq`*[_type == "product"]`;
    const products = await client.fetch(query);

    const bannerQuery = groq`*[_type == "banner"]`;
    const banner = await client.fetch(bannerQuery)

    return {
        products, banner
    }
}