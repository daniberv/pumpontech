import { useEffect, useMemo } from 'react';
import { autorun, computed } from 'mobx';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

// import useAuth from '~/hooks/use_auth';

type UseFetchItemParams = {
  [key: string]: any;
} | null;

type UseFetchItemOptions = {
  excludeParams?: string[];
  noCache?: boolean;
} | null;

type ReturnType = {
  isFetching: boolean;
  isFetched: boolean;
  hasError: boolean;
  error: any;
};

function useFetchItem(entities, params: UseFetchItemParams = null, options: UseFetchItemOptions = null): ReturnType {
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
          await entities?.fetchById(fetchParams.get(), options);
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entities]
  );

  const { isFetching, isFetched, hasError, error } = entities || {};

  return { isFetching, isFetched, hasError, error };
}

export { useFetchItem }