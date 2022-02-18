export abstract class ODataHelper { 
    public static getTotalItems(response: any, itemsPerPage: number): number{
        return (Math.trunc(response['@odata.count'] / itemsPerPage) * itemsPerPage)
    }
}