export const get_price_as_format = (amount: number) => {
  let convertedAmount = Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return convertedAmount.toString();
};

export const filterDataByMainFilter = (data: any, filterValue: string) => {
  if (filterValue === 'all') {
    return data;
  }
  return data.filter((item: any) => item[filterValue] === 1);
};

export const getParentInfo = (
  selectedId: number,
  data: any,
  parentIds: number[] = [],
  parentTitles: string[] = [],
) => {
  for (const item of data) {
    if (item.id === selectedId) {
      return {
        ids: [...parentIds, item.id],
        titles: [...parentTitles, item.title],
      };
    }
    if (item.childern && item.childern.length > 0) {
      const foundInChild: any = getParentInfo(
        selectedId,
        item.childern,
        [...parentIds, item.id],
        [...parentTitles, item.title],
      );
      if (foundInChild) {
        return foundInChild;
      }
    }
  }
  return null;
};
