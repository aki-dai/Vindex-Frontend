import {SearchActionTypes, ResultIndex, sortType} from './actionTypes'

export function SearchSubmit(q: string, sort: sortType, pagenation: boolean): SearchActionTypes{
    return {
        type:'SEARCH_ACTION_SUBMIT',
        payload:{
            query: q,
            sort: sort,
            pagenation: pagenation
        }
    }
}

export function SearchStart(): SearchActionTypes{
    return {
        type:'SEARCH_ACTION_START',
    }
}


export function SearchComplete(q: string, sort: sortType,and: boolean, count:number, results:ResultIndex[]): SearchActionTypes{
    return {
        type:'SEARCH_ACTION_COMPLETE',
        payload:{
            query: q,
            count: count,
            sort: sort,
            and: and,
            results: results
        }
    }
}
 
export function SearchErrorAction(q:string, sort: sortType, error:string): SearchActionTypes {
    return{
        type: 'SEARCH_ACTION_ERROR',
        query: q,
        sort: sort,
        error: error,
    } 
}

export function changeSearchRefine(refine: boolean): SearchActionTypes{
    return {
        type: 'CHANGE_REFINE',
        andSearch: refine
    }
}


export function changePage(page: number): SearchActionTypes{
    return{
        type: 'CHANGE_PAGE',
        page: page
    }
}

export function changeSort(sort: string): SearchActionTypes{
    return{
        type: 'CHANGE_SORT',
        sort: sort
    }
}