const { predictionGroups } = require("../../data/mock");

Page({
  data: {
    activeGroup: "featured",
    tabs: [
      { key: "featured", label: "焦点赛事" },
      { key: "league", label: "联赛" }
    ],
    matches: predictionGroups.featured
  },

  changeGroup(event) {
    const key = event.currentTarget.dataset.key;
    this.setData({
      activeGroup: key,
      matches: predictionGroups[key] || []
    });
  }
});

