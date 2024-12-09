/* eslint-disable import/prefer-default-export */
import request from '../request';

export function getTags() {
    return [request, 'get', `tags`];
}
