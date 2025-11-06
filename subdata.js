export default function subdata(data, errcode, urlObj, res) {
  const subRegion = urlObj.searchParams.get('region') || '';
  console.log(subRegion);

  if (data.statusCode === 200) {
    if (subRegion) {
      res.statusCode = 200;
      return {
        statusCode: res.statusCode,
        subregion: subRegion,
      };
    } else {
      // Subregion is missing but status code is OK
      res.statusCode = 200;
      return {
        statusCode: res.statusCode,
        message: "Subregion not provided",
      };
    }
  } else {
    // Error case
    res.statusCode = errcode;
    return {
      statusCode: res.statusCode,
    };
  }
}
