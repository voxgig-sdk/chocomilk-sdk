import { ChocomilkEntityBase } from '../ChocomilkEntityBase';
import type { ChocomilkSDK } from '../ChocomilkSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../ChocomilkTypes';
declare class SearchEntity extends ChocomilkEntityBase<Search> {
    constructor(client: ChocomilkSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
