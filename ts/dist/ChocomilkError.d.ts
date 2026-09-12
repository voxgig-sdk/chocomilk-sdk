import { Context } from './Context';
declare class ChocomilkError extends Error {
    isChocomilkError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ChocomilkError };
