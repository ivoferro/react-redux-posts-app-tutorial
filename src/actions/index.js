import axios from 'axios'


/* ### ACTION TYPES ### */
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'


/* ### CONSTANTS ### */
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const KEY = '?key=IRONENGINEERIVO'


/* ### ACTION CREATORS ### */
export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, cb = function(){}) {
  const request = axios.post(`${ROOT_URL}/posts${KEY}`, values).then(() => cb())


  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost (id, cb = function(){}) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${KEY}`).then(() => cb())

  return {
    type: DELETE_POST,
    payload: id
  }
}