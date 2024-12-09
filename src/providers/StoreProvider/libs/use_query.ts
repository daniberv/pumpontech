import React, { useCallback, useMemo } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

export type QueryParamType = {
	name: string
	value: string
}

export interface IUseQueryResult {
	getParam: (param: string) => void
	setParams: (params: QueryParamType[]) => void
	addParams: (params: QueryParamType | QueryParamType[]) => void
	removeParams: (params: QueryParamType | QueryParamType[]) => void
	params: QueryParamType[]
}

export function useQuery(): IUseQueryResult {
	const { search } = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()

	const query = useMemo(() => 
		new URLSearchParams(search), [search])

	const getParam = useCallback(
		(name: string): string | null => {
			return query.get(name)
		},
		[query]
	)

	const params = useMemo(() => {
		const _params = []

		for (const [key, value] of searchParams.entries()) {
			_params.push({
				name: key,
				value,
			})
		}

		return _params
	}, [searchParams])

	const addParams = (params: QueryParamType | QueryParamType[]) => {
		for (const key of searchParams.keys()) {
			searchParams.delete(key)
		}

		if (Array.isArray(params)) {
			params.forEach((param: QueryParamType) => {
				const { name, value } = param

				searchParams.set(name, value)
			})
		} else if (params.name && typeof params.value !== undefined) {
			const { name, value } = params

			searchParams.set(name, value)
		}

		setSearchParams(searchParams)
	}

	const setParams = (_params: QueryParamType[]) => {
		for (const key of searchParams.keys()) {
			searchParams.delete(key)
		}

		addParams(_params)
	}

	const removeParams = (params: QueryParamType | QueryParamType[]) => {
		if (Array.isArray(params)) {
			params.forEach((param: QueryParamType) => {
				const { name } = param

				searchParams.delete(name)
			})
		}

		setSearchParams(searchParams)
	}

	const value = useMemo(
		() => 
			({
				params,
				getParam,
				setParams,
				addParams,
				removeParams,
			}),
		[params, getParam, addParams, setParams, removeParams]
	)

	return value
}
