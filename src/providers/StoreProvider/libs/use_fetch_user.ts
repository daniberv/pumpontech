import { useEffect, useMemo } from 'react';
import { autorun, computed } from 'mobx';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

// import useAuth from '~/hooks/use_auth';

type ReturnType = {
  isFetching: boolean;
  isFetched: boolean;
  hasError: boolean;
  error: any;
};

function useFetchUser(): ReturnType {
  const { user } = {};
  // const { user } = useAuth();

  useEffect(
    () =>
      autorun(async () => {
        if (user?.isFetching === false && user?.isFetched === false) {
          await user?.fetch();
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  const { isFetching, isFetched, hasError, error } = user || {};

  return { isFetching, isFetched, hasError, error };
}

export { useFetchUser }