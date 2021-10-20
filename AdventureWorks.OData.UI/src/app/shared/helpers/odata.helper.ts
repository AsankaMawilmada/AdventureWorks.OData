export abstract class ODataHelper { 
    public static getTotalItems(count: number, itemsPerPage: number): number{
        return (Math.trunc(count / itemsPerPage) * itemsPerPage)
    }
}