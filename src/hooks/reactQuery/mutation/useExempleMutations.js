import { createExemple, deleteByIdExemple, updateExemple } from '@api/ExempleApi';
import { exempleQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateExempleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (exemple) => createExemple(exemple),
    onSuccess: (savedExemple) => {
      queryClient.setQueryData(exempleQKey.detail(savedExemple.id), savedExemple);
    }
  });
};

export const useUpdateExempleMutation = (exempleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedExemple) => updateExemple(exempleId, updatedExemple),
    onSuccess: (savedExemple) => {
      queryClient.setQueryData(exempleQKey.detail(exempleId), savedExemple);
    }
  });
};

export const useDeleteCandidateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteByIdExemple(id),
    onSuccess: (_, id) => {
      queryClient.removeQueries([exempleQKey.mainKey, id]);
    }
  });
};
