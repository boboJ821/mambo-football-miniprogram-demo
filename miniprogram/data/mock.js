const featuredMatches = [
  {
    id: "demo-001",
    competition: "国际俱乐部杯",
    date: "9月18日 20:00",
    home: "曼彻斯特蓝",
    away: "马德里白",
    homeShort: "MC",
    awayShort: "RM",
    homeProbability: 46,
    drawProbability: 25,
    awayProbability: 29,
    pick: "主胜"
  },
  {
    id: "demo-002",
    competition: "欧洲冠军联赛",
    date: "9月19日 03:00",
    home: "米兰红黑",
    away: "慕尼黑红",
    homeShort: "MI",
    awayShort: "MU",
    homeProbability: 31,
    drawProbability: 27,
    awayProbability: 42,
    pick: "客胜"
  }
];

const predictionGroups = {
  featured: featuredMatches,
  league: [
    {
      id: "demo-003",
      competition: "英格兰顶级联赛",
      date: "9月20日 22:00",
      home: "伦敦红",
      away: "利物浦红",
      homeShort: "AR",
      awayShort: "LI",
      homeProbability: 36,
      drawProbability: 28,
      awayProbability: 36,
      pick: "平局"
    },
    {
      id: "demo-004",
      competition: "西班牙顶级联赛",
      date: "9月21日 03:00",
      home: "巴塞罗那蓝红",
      away: "马德里竞技",
      homeShort: "BA",
      awayShort: "AT",
      homeProbability: 52,
      drawProbability: 24,
      awayProbability: 24,
      pick: "主胜"
    }
  ]
};

const records = [
  { id: "record-001", date: "9月12日", home: "迈阿密", away: "纽约城", score: "2 - 1", pick: "主胜", result: "命中", hit: true },
  { id: "record-002", date: "9月10日", home: "西雅图", away: "洛杉矶", score: "1 - 1", pick: "客胜", result: "未命中", hit: false },
  { id: "record-003", date: "9月8日", home: "辛辛那提", away: "多伦多", score: "3 - 0", pick: "主胜", result: "命中", hit: true },
  { id: "record-004", date: "9月6日", home: "芝加哥", away: "奥兰多", score: "0 - 2", pick: "客胜", result: "命中", hit: true }
];

module.exports = {
  featuredMatches,
  predictionGroups,
  records
};

