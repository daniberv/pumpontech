/* eslint-disable import/prefer-default-export */
import request from '../request';

export function getJettons({ feedType, page, tag }) {
    return [request, 'get', `jettons?type=${feedType}&tag={tag}&page=${page}`];
}

export function getJetton({ id }) {
    return [request, 'get', `jettons/${id}`];
}

export function getJettonHolders({ id }) {
    return [request, 'get', `jettons/${id}/holders`];
}

export function getJettonTransactions({ id }) {
    return [request, 'get', `jettons/${id}/transactions`];
}