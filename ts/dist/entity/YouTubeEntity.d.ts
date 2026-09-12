import { ChocomilkEntityBase } from '../ChocomilkEntityBase';
import type { ChocomilkSDK } from '../ChocomilkSDK';
import type { Control } from '../types';
import type { YouTube, YouTubeListMatch } from '../ChocomilkTypes';
declare class YouTubeEntity extends ChocomilkEntityBase<YouTube> {
    constructor(client: ChocomilkSDK, entopts: any);
    make(this: YouTubeEntity): YouTubeEntity;
    list(this: any, reqmatch?: YouTubeListMatch, ctrl?: Control): Promise<YouTubeEntity[]>;
}
export { YouTubeEntity };
