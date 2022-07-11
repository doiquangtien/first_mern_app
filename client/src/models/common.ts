export interface ListResponse<T> {
    data : T[],
    status : number,
}

export interface ListParams {
    page:number,
    limit:number,
    sort?: string,
    [key: string]: any,
}