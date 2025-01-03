type GalleryProps = {
    thumb: string;
    original: string;
};

export type ReviewerProps = {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
};

export interface CatalogProps {
    AC: boolean;
    TV: boolean;
    bathroom: boolean;
    consumption: string;
    description: string;
    engine: string;
    form: string;
    gallery: GalleryProps[];
    gas: boolean;
    height: string;
    id: string;
    kitchen: boolean;
    length: string;
    location: string;
    microwave: boolean;
    name: string;
    price: number;
    radio: boolean;
    rating: number;
    refrigerator: boolean;
    reviews: ReviewerProps[];
    tank: string;
    transmission: string;
    water: boolean;
    width: string;
}

export interface dataProps {
    total: number;
    items: CatalogProps[];
}

const buildUrl = (...paths: string[]) =>
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/${paths.join('/')}`;

const sendRequest = async <T>(url: string, init?: RequestInit): Promise<T> => {
    const res: Response = await fetch(url, init);
    if (!res.ok) {
        throw new Error(await res.text());
    }

    return (await res.json()) as T;
};

export const getCatalog = (init?: RequestInit): Promise<dataProps> => {
    return sendRequest<dataProps>(buildUrl('campers'), init);
};

export const getBagDetailInfo = (id: string, init?: RequestInit): Promise<CatalogProps> => {
    return sendRequest<CatalogProps>(buildUrl('campers', id), init);
};
