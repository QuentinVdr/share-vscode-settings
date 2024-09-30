/**
 * Validates a string of extension IDs separated by whitespace.
 *
 * @param {string} extensionIds - A string containing extension IDs separated by whitespace.
 * @returns {{ extensionIds: string[], extensionValid: boolean }} An object containing the array of extension IDs and a boolean indicating if all IDs are valid.
 */
export const validateExtensionIds = (extensionIds) => {
  const extensionIdPattern = /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  const ids = extensionIds.split(/\s+/);
  const valid = ids.every((id) => extensionIdPattern.test(id));

  return { extensionIds: ids, extensionValid: valid };
};
