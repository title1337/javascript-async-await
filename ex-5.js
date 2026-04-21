// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: '👿 Failed to request data from server',
        }),
      2000,
    );
  });
};
async function asynconousFunction() {
  try {
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (errorCode) {
    console.log(errorCode);
  }
}
asynconousFunction();
