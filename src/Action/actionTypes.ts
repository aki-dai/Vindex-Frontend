export const LOAD_TAG   = 'LOAD_TAG'
export const UPDATE_TAG = 'UPDATE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const ADD_TAG    = 'ADD_TAG'

export const FETCH_MOVIE = 'FETCH_MOVIE'
export const LOAD_MOVIE_INFO = 'LOAD_MOVIE_INFO'
export const ADD_EDIT_TAG = 'ADD_EDIT_TAG'
export const DELETE_EDIT_TAG = 'DELETE_EDIT_TAG'
export const POST_EDIT_TAG = 'POST_EDIT_TAG'

export const AUTH_USER = 'AUTH_USER'
export const GET_USER_INFO = 'GET_USER_INFO'
export const UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN'
export const UPDATE_TOKENS = 'UPDATE_TOKENS'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SIGN_OUT = 'SIGN_OUT'
export const LEAVE_USER = 'LEAVE_USER'

export const SEARCH_SUBMIT = 'SEARCH_ACTION_SUBMIT'
export const SEARCH_START = 'SEARCH_ACTION_START'
export const SEARCH_COMPLETE = 'SEARCH_ACTION_COMPLETE'
export const SEARCH_ERROR = 'SEARCH_ACTION_ERROR'
export const CHANGE_REFINE = 'CHANGE_REFINE'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_SORT = 'CHANGE_SORT'

export const AUTH = 'AUTH'

export type APIStatus = 'initial' | 'waiting' | 'loading' | 'complete' | 'error'

export interface Contributer{
    userID?: string
    userName: string
}

export interface Tag{
    contributer? : Contributer
    count?       : number
    value        : string
    youtubeID    : string
}

export interface User{
    authenticated: boolean
    accessToken: string
    refreshToken: string
    userID: string
    userName: string
    nickName: string
    provider: string
    image: string
}

export type tagTypes = "movie" | "editor"

export interface LoadTagAction {
    type: typeof LOAD_TAG
    loadTags    : Tag[]
    youtubeID   : string
    tagType     : tagTypes
}

export interface UpdateTagAction {
    type: typeof UPDATE_TAG
    newTags: Tag[]
    tagType: tagTypes
}

export interface DeleteTagAction {
    type        : typeof DELETE_TAG
    numDeleteTag: number
    tagType     : tagTypes
}

export interface AddTagAction {
    type    : typeof ADD_TAG
    newTag  : Tag
    tagType : tagTypes
}

export interface FetchMovieAction {
    type        : typeof FETCH_MOVIE
    youtubeID   : string,
    title       : string,
    channelName : string,
    url         : string,
    tags        : Tag[],
    isRegistered: boolean,
}

export interface LoadMovieAction {
    type        : typeof LOAD_MOVIE_INFO,
    youtubeID   : string,
    title       : string,
    channel_name : string,
}

export type TagActionTypes = LoadTagAction   |
                             UpdateTagAction |
                             DeleteTagAction |
                             AddTagAction   |
                             FetchMovieAction|
                             LoadMovieAction

export interface AuthUserAction {
    type: typeof AUTH_USER
    accessToken: string
    refreshToken: string
    userID: string
    provider: string
    accessExp: number
}

export interface GetUserInfoStartAction{
    type: typeof GET_USER_INFO
}

export interface SetUserInfoAction{
    type: typeof SET_USER_INFO
    userName: string
    nickName: string
    image: string
}

export interface UpdateAccessTokenAction {
    type: typeof UPDATE_ACCESS_TOKEN
    accessToken: string
    accessExp: number
}

export interface UpdateTokensAction {
    type: typeof UPDATE_TOKENS
    accessToken: string
    refreshToken: string
    accessExp: number
}

export interface SignOutUserAction {
    type: typeof SIGN_OUT
}

export interface LeaveUserAction {
    type: typeof LEAVE_USER
}

export type UserActionTypes = AuthUserAction |
                              GetUserInfoStartAction|
                              SetUserInfoAction |
                              UpdateAccessTokenAction|
                              UpdateTokensAction |
                              SignOutUserAction |
                              LeaveUserAction

export interface ResultIndex {
    youtube_id: string
    channel_name: string
    title: string
    thumbnail: string
    tags: Tag[]
    clicked: boolean;
}

export type sortType = 'latest' | 'duration' | 'new_post'

export interface SearchSubmitAction {
    type: typeof SEARCH_SUBMIT
    payload: {
        query: string
        sort: sortType
        pagenation: boolean
    }
}
 
export interface SearchStartAction {
    type: typeof SEARCH_START   
}
 
export interface SearchCompleteAction {
    type: typeof SEARCH_COMPLETE
    payload:{
        query: string
        count: number
        sort: sortType
        and: boolean
        results:ResultIndex[]
    }
}
 
export interface SearchErrorAction {
    type: typeof SEARCH_ERROR
    query: string
    sort: sortType
    error: unknown
}

export interface changeSearchRefine {
    type: typeof CHANGE_REFINE
    andSearch: boolean
}

export interface changePage{
    type: typeof CHANGE_PAGE
    page: number
}

export interface changeSort{
    type: typeof CHANGE_SORT
    sort: string
}

export type SearchActionTypes = SearchSubmitAction |
                                SearchStartAction |
                                SearchCompleteAction |
                                SearchErrorAction|
                                changeSearchRefine|
                                changePage|
                                changeSort

export interface AuthAction {
    type: typeof AUTH
    url: string
}
