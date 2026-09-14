const { records } = require("../../data/mock");

Page({
  data: {
    records,
    summary: {
      total: 42,
      correct: 28,
      wrong: 14,
      accuracy: "66.7%"
    }
  }
});

