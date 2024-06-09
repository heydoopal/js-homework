export const getNumberAtArray = (arr, index) => {
  if (!Array.isArray(arr))
    throw new Error(
      `첫번째 인수에는 배열이 와야해요. '${arr}'은/는 배열이 아니에요`
    );

  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    throw new Error('유효하지 않은 인덱스임');
  }
};
