/**
 * Recursively searches through an object of type <T> and tries to match the search string
 * to a key (pathKey) inside the object of type <T> or it's children (childrenKey)
 *
 * @param search The string value you want to find inside the list of <T> objects
 * @param list The list you want to search
 * @param searchKey The key inside each list <T> that should be compared to the search param
 * @param searchChildrenKey The property name that holds the <T> object's children
 * @param currentPath The returned array of paths built by the function. Will be empty if no match is found
 */
export function extractPathFromList<T extends { [P in CK]: T[] } & { [P in K]: string }, K extends keyof T, CK extends keyof T>(search: string, list: T[] = [], searchKey: K, searchChildrenKey: CK, currentPath?: T[]): T[] {
  for (const item of list) {

    if (item[searchKey] != null && (item[searchKey] as unknown as string) === search) {
      return [...currentPath || [], item];
    }

    if (item[searchChildrenKey] && Array.isArray(item[searchChildrenKey]) && item[searchChildrenKey].length > 0) {
      const innerPath = extractPathFromList(search, item[searchChildrenKey], searchKey, searchChildrenKey, [...currentPath || [], item]);

      if (innerPath.length > 0) {
        return innerPath;
      }
    }
  }

  return [];
}
