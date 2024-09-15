export const validateExtensionIds = (extensionIds) => {
  const extensionIdPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  const ids = extensionIds.split(/\s+/);
  const valid = ids.every((id) => extensionIdPattern.test(id));

  return { extensionIds: ids, extensionValid: valid };
};
