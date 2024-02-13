// Rating Calculation
export const calculateAvgRating = (reviews) => {
  // const totalRating = reviews?.reduce((acc, item) => {
  //   acc + item.rating, 0;
  // });

  let totalRating = 0;
  const rating = reviews?.map((item) => {
    totalRating += item.rating;
  });

  const avgRating =
    totalRating === 0 ? '' : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

  return { totalRating, avgRating };
};
