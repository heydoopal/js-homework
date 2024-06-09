export const getValueAtObject = (obj, key) => {
  if (typeof obj !== 'object' || Object.is(obj, null))
    throw new Error(
      `첫번째 인수에는 객체가 와야해요. '${obj}'은/는 객체가 아니에요`
    );

  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    throw new Error(`'${key}'라는 key가 해당 객체에 존재하지 않아요`);
  }
};
