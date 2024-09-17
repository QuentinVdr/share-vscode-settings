import { createPastebin } from '@api/PastebinApi';
import { pastebinQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreatePastebinMutations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createPastebin(data),
    onSuccess: (savedPastebin) => {
      queryClient.setQueryData(pastebinQKey.detail(savedPastebin.id), savedPastebin);
    }
  });
};
