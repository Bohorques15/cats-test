import { Cat } from './cat';
import { Category } from './category';

export interface CatInfo {
    breeds: Cat[];
    categories?: Category[];
    height: number;
    id: string;
    url: string;
    width: number;
}