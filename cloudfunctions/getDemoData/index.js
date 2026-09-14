const cloud = require("wx-server-sdk");
const demoData = require("./mock-data");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

exports.main = async (event = {}) => {
  const action = String(event.action || "listMatches").trim();

  if (action === "health") {
    return {
      code: 0,
      message: "ok",
      data: {
        service: "getDemoData",
        mode: "portfolio-demo"
      }
    };
  }

  if (action !== "listMatches") {
    return {
      code: 400,
      message: "unsupported demo action",
      data: null
    };
  }

  return {
    code: 0,
    message: "success",
    data: demoData
  };
};

