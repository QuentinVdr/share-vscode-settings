import { createVscodeConfig } from '@api/VscodeConfig/VscodeConfigApi';
import { vscodeConfigQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateVscodeConfigMutations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createVscodeConfig(data),
    onSuccess: (savedVscodeConfig) => {
      queryClient.setQueryData(vscodeConfigQKey.detail(savedVscodeConfig.id), savedVscodeConfig);
    }
  });
};

export const useCreateVscodeConfigMutationsMock = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => Promise.resolve({ _id: '123', extensionIds: data }),
    onSuccess: (savedVscodeConfig) => {
      queryClient.setQueryData(vscodeConfigQKey.detail(savedVscodeConfig._id), savedVscodeConfig);
    }
  });
};
