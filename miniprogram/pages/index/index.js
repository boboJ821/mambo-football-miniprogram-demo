const { featuredMatches } = require("../../data/mock");

Page({
  data: {
    featuredMatches,
    metrics: [
      { label: "本周比赛", value: "24" },
      { label: "模型命中", value: "68%" },
      { label: "覆盖赛事", value: "6" }
    ]
  },

  openPredictions() {
    wx.switchTab({ url: "/pages/predictions/predictions" });
  }
});

