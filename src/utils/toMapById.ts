export function toMapById(data: Record<string, any>, idAttribute = '_id') {
    if (!data) {
      return {};
    }
    return data.reduce((acc: any, item: any) => {
      acc[item[idAttribute] || item.id] = item;
      return acc;
    }, {});
  }

  export function toMapBySlug(data: Record<string, any>, idAttribute = '_slug') {
    if (!data) {
      return {};
    }
    return data.reduce((acc: any, item: any) => {
      acc[item[idAttribute] || item.slug] = item;
      return acc;
    }, {});
  }