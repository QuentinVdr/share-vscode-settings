import ExtensionsDetailsList from '@components/extension/ExtensionsDetailsList/ExtensionsDetailsList';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtensionsDetail() {
  const { extensionIds } = useExtensionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (extensionIds.length === 0) {
      navigate('/');
    }
  }, [extensionIds]);

  return <ExtensionsDetailsList />;
}
