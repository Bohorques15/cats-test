export interface Cat {
    id: string;
    name: string;
    temperament: string;
    vcahospitals_url: string;
    vetstreet_url: string;
    life_span: string;
    cfa_url: string;
    description?: string;
    alt_names: string;
    wikipedia_url: string;
    origin: string;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    reference_image_id: string;
    rex: number;
    short_legs: number;
    hypoallergenic: number;
    indoor: number;
    adaptability: number;
    affection_level: number;
    country_code: string;
    country_codes: string;
    child_friendly: number;
    image?: CatImage;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    lap: number;
    suppressed_tail: number
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    weight: Weight;
    stranger_friendly: number;
    vocalisation: number;
}

export interface CatImage {
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface Weight {
    imperial: string;
    metric: string;
}