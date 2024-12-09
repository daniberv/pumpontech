import { useEffect, useMemo } from 'react';
import { autorun, computed } from 'mobx';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

// import useAuth from '~/hooks/use_auth';

type UseFetchParams = {
  [key: string]: any;
} | null;

type UseFetchOptions = {
  excludeParams?: string[];
  noCache?: boolean;
} | null;

type ReturnType = {
  isFetching: boolean;
  isFetched: boolean;
  hasError: boolean;
  error: any;
};

function useFetch(entities, params: UseFetchParams = null, options: UseFetchOptions = null): ReturnType {
//   const { auth } = useAuth();

  const fetchParams = useMemo(
    () =>
      computed(() => {
        const payload = { ...(params || {}) };
        // if (!params?.organization_id && auth.organizationId) {
        //   try {
        //     payload.organization_id = auth.organizationId;
        //   } catch (e) {}
        // }
        if (!isEmpty(options?.excludeParams)) {
          return omit(payload, options?.excludeParams!);
        }
        return payload;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => entities?.resetIsFetched(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchParams.get()]
  );

  useEffect(
    () =>
      autorun(async () => {
        if (entities?.isFetching === false && entities?.isFetched === false) {
          await entities?.fetch(fetchParams.get(), options);
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entities]
  );

  const { isFetching, isFetched, hasError, error } = entities || {};

  return { isFetching, isFetched, hasError, error };
}

export { useFetch }