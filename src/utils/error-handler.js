export const handleError = error => {
  const {config, request, response} = error;

  let data = {config};
  if (response) {
    data = {
      status: response.status,
      headers: response.headers,
      response: response.data || null,
    };
    return data;
  } else if (request) {
    return {
      ...data,
      ...error.request,
      message: 'Check internet connection',
    };
  } else {
    return {...data, message: error.message};
  }
};
