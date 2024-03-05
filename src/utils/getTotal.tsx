interface GetTotalProps {
  key: string;
  compareKey1: string;
  compareKey2?: string;
  data: any;
}

const getTotal = ({ data, key, compareKey1, compareKey2 }: GetTotalProps) => {
  if (key === compareKey1) {
    const t = data?.reduce((pre, acc) => {
      const total = pre + acc?.Reality;
      return total;
    }, 0);
    return t;
  } else if (key === compareKey2) {
    const t = data?.reduce((pre, acc) => {
      const total = pre + acc?.Target;
      return total;
    }, 0);
    return t;
  }
};

export default getTotal;
