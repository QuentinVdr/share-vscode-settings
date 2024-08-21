import { findExtensionDetailById } from '@api/ExtensionApi';
import { extensionQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useExtensionByIdQuery = (id, options) =>
  useQuery({
    ...options,
    queryKey: extensionQKey.detail(id),
    queryFn: () => findExtensionDetailById(id)
  });
