import ExtensionsDetailsList from '@components/extension/ExtensionsDetailsList/ExtensionsDetailsList';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtensionsDetail() {
  const { extensionsIds } = useExtensionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (extensionsIds.length === 0) {
      navigate('/');
    }
  }, [extensionsIds]);

  return <ExtensionsDetailsList />;
}
