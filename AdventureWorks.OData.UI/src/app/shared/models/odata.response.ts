export interface IODataResponse<T> {
    '@odata.context': string;
    '@odata.nextLink': string;
    '@odata.count': number;
    value: T;
}