import { findExtensionDetailById } from '@api/marketplace/ExtensionApi';
import { extensionQKey } from '@stores/ReactQueryKEYS';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useExtensionByIdQuery = (id, options) =>
  useQuery({
    ...options,
    queryKey: extensionQKey.detail(id),
    queryFn: () => findExtensionDetailById(id)
  });

export const useExtensionByIdsQueries = (ids, options) =>
  useQueries({
    queries: ids.map((id) => {
      return {
        ...options,
        queryKey: extensionQKey.detail(id),
        queryFn: () => findExtensionDetailById(id)
      };
    })
  });
