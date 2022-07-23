import request from "./sys";

export const upload = (data) => {
  return request({
    url: "/upload",
    method: "POST",
    data,
  });
};
