export function useScoreRecords() {
  const scoreRecords: Record<
    string,
    Record<
      string,
      Record<
        string,
        {
          score: number;
          status: "excellent" | "great" | "good";
          date: string;
          replay: string | null;
          detail: string;
        }
      >
    >
  > = {
    WEF: {
      th11: {
        ReimuA: {
          score: 1008234570,
          status: "good",
          date: "2022-05-25T15:30:00",
          replay: null,
          detail: "リプレイ紛失",
        },
      },
      th13: {
        Marisa: {
          score: 600404860,
          status: "excellent",
          date: "2022-06-15T15:30:00",
          replay: "th13_ud0041.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1108862870,
          status: "great",
          date: "2021-04-13T15:30:00",
          replay: "th14_ud0017.rpy",
          detail: "-",
        },
      },
    },
    "***YZ***": {
      th11: {
        ReimuA: {
          score: 1067602750,
          status: "great",
          date: "2012-02-15T15:30:00",
          replay: "th11_ud0042.rpy",
          detail: "-",
        },
      },
    },
    "240": {
      th10: {
        ReimuA: {
          score: 957011160,
          status: "good",
          date: "2010-12-24T15:30:00",
          replay: "th10_ud0109.rpy",
          detail: "-",
        },
      },
    },
    "3123": {
      th07Ph: {
        ReimuB: {
          score: 1345888480,
          status: "good",
          date: "2010-12-09T15:30:00",
          replay: "th7_ud1051.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1330871860,
          status: "good",
          date: "2011-01-31T15:30:00",
          replay: "th7_ud1015.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1369793900,
          status: "good",
          date: "2011-01-16T15:30:00",
          replay: "th7_ud1018.rpy",
          detail: "-",
        },
      },
    },
    "3sama": {
      th10: {
        ReimuA: {
          score: 952066940,
          status: "good",
          date: "2008-09-27T15:30:00",
          replay: "th10_ud0125.rpy",
          detail: "-",
        },
      },
    },
    "A.War": {
      th08: {
        Border: {
          score: 2637262760,
          status: "good",
          date: "2018-02-04T15:30:00",
          replay: "th8_ud0043.rpy",
          detail: "-",
        },
        Magic: {
          score: 2633042840,
          status: "good",
          date: "2016-04-04T15:30:00",
          replay: "th8_ud0044.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 2509753990,
          status: "good",
          date: "2016-01-14T15:30:00",
          replay: "th8_ud0039.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 2515850420,
          status: "good",
          date: "2015-01-22T15:30:00",
          replay: "th8_ud0053.rpy",
          detail: "-",
        },
        Yukari: {
          score: 1935975550,
          status: "good",
          date: "2016-01-31T15:30:00",
          replay: "th8_ud0066.rpy",
          detail: "-",
        },
        Alice: {
          score: 1805579270,
          status: "good",
          date: "2017-03-11T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Remilia: {
          score: 1873083230,
          status: "good",
          date: "2015-09-13T15:30:00",
          replay: "th8_ud0068.rpy",
          detail: "-",
        },
        Youmu: {
          score: 2647062500,
          status: "good",
          date: "2016-07-07T15:30:00",
          replay: "th8_ud0041.rpy",
          detail: "-",
        },
        Yuyuko: {
          score: 1947264680,
          status: "good",
          date: "2015-08-15T15:30:00",
          replay: "th8_ud0071.rpy",
          detail: "-",
        },
      },
    },
    Add4567: {
      th15: {
        Reisen: {
          score: 704642350,
          status: "good",
          date: "2025-08-02T15:30:00",
          replay: "th15_ud0025.rpy",
          detail: "-",
        },
      },
    },
    Altair: {
      th06: {
        MarisaB: {
          score: 626399410,
          status: "excellent",
          date: "2026-04-14T15:30:00",
          replay: "th6_ud0106.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 951845620,
          status: "good",
          date: "2026-03-05T15:30:00",
          replay: "th10_ud0147.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1101069120,
          status: "excellent",
          date: "2025-11-14T15:30:00",
          replay: "th11_ud0161.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1124281780,
          status: "great",
          date: "2026-07-13T15:30:00",
          replay: "th14_ud0096.rpy",
          detail: "-",
        },
      },
      th15: {
        Reisen: {
          score: 757810540,
          status: "good",
          date: "2026-03-29T15:30:00",
          replay: "th15_ud0035.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1043944370,
          status: "good",
          date: "2026-03-25T15:30:00",
          replay: "th17_ud0079.rpy",
          detail: "-",
        },
        ReimuO: {
          score: 2023472380,
          status: "great",
          date: "2026-05-17T15:30:00",
          replay: "th17_ud0088.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 1600731190,
          status: "good",
          date: "2026-03-24T15:30:00",
          replay: "th17_ud0078.rpy",
          detail: "-",
        },
	  },
      th18: {
        Reimu: {
          score: 3517788730,
          status: "great",
          date: "2026-03-11T15:30:00",
          replay: "th18_ud0032.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 8001821850,
          status: "excellent",
          date: "2026-05-31T15:30:00",
          replay: "th18_ud0042.rpy",
          detail: "-",
        },
      },
    },
    AM: {
      th08: {
        Border: {
          score: 2812651840,
          status: "great",
          date: "2008-10-12T15:30:00",
          replay: "th8_ud0012.rpy",
          detail: "-",
        },
        Magic: {
          score: 2908319100,
          status: "great",
          date: "2008-10-16T15:30:00",
          replay: "th8_ud0013.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 2766871330,
          status: "good",
          date: "2008-10-19T15:30:00",
          replay: "th8_ud0014.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 2874012860,
          status: "great",
          date: "2008-04-01T15:30:00",
          replay: "th8_ud0015.rpy",
          detail: "-",
        },
        Yukari: {
          score: 2078417910,
          status: "great",
          date: "2008-10-10T15:30:00",
          replay: "th8_ud0017.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2573353360,
          status: "good",
          date: "2008-05-14T15:30:00",
          replay: "th8_ud0018.rpy",
          detail: "-",
        },
        Alice: {
          score: 1971775680,
          status: "good",
          date: "2008-10-15T15:30:00",
          replay: "th8_ud0019.rpy",
          detail: "-",
        },
        Remilia: {
          score: 2041353990,
          status: "great",
          date: "2008-10-14T15:30:00",
          replay: "th8_ud0021.rpy",
          detail: "-",
        },
        Youmu: {
          score: 3010565950,
          status: "excellent",
          date: "2007-10-31T15:30:00",
          replay: "th8_ud0022.rpy",
          detail: "-",
        },
        Yuyuko: {
          score: 2001929660,
          status: "great",
          date: "2008-10-09T15:30:00",
          replay: "th8_ud0023.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 961113610,
          status: "good",
          date: "2007-10-01T15:30:00",
          replay: "th10_ud0136.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 952447040,
          status: "good",
          date: "2007-09-28T15:30:00",
          replay: "th10_ud0137.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1101675500,
          status: "excellent",
          date: "2008-11-23T15:30:00",
          replay: "th11_ud0142.rpy",
          detail: "-",
        },
      },
      th15: {
        Sanae: {
          score: 1008302770,
          status: "excellent",
          date: "2015-09-19T15:30:00",
          replay: "th15_ud0003.rpy",
          detail: "-",
        },
      },
    },
    ANK: {
      th06: {
        MarisaB: {
          score: 602257610,
          status: "excellent",
          date: "2009-11-05T15:30:00",
          replay: "th6_ud0026.rpy",
          detail: "-",
        },
      },
    },
    "Anna says hi": {
      th17: {
        YoumuO: {
          score: 2532874290,
          status: "excellent",
          date: "2026-06-09T15:30:00",
          replay: "th17_ud0095.rpy",
          detail: "-",
        },
      },
    },
    Apo: {
      th11: {
        ReimuA: {
          score: 1145084620,
          status: "excellent",
          date: "2026-06-02T15:30:00",
          replay: "th11_ud0171.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1102669070,
          status: "excellent",
          date: "2024-05-20T15:30:00",
          replay: "th11_ud0006.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1093743800,
          status: "great",
          date: "2025-07-19T15:30:00",
          replay: "th11_ud0011.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1048491000,
          status: "good",
          date: "2024-03-16T15:30:00",
          replay: "th11_ud0053.rpy",
          detail: "-",
        },
      },
      th20: {
        MarisaR2: {
          score: 647853200,
          status: "good",
          date: "2025-09-07T15:30:00",
          replay: "th20_ud0007.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 614108830,
          status: "good",
          date: "2025-09-07T15:30:00",
          replay: "th20_ud0015.rpy",
          detail: "-",
        },
      },
    },
    ARF: {
      th14: {
        MarisaB: {
          score: 1010713440,
          status: "good",
          date: "2013-08-29T15:30:00",
          replay: "th14_ud0036.rpy",
          detail: "-",
        },
      },
    },
    ark: {
      th10: {
        ReimuA: {
          score: 959416410,
          status: "good",
          date: "2012-08-17T15:30:00",
          replay: "th10_ud0091.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 966295350,
          status: "good",
          date: "2012-08-17T15:30:00",
          replay: "th10_ud0072.rpy",
          detail: "-",
        },
      },
    },
    ASAPIN: {
      th07Ph: {
        ReimuB: {
          score: 1312362240,
          status: "good",
          date: "2004-04-26T15:30:00",
          replay: "th7_ud1069.rpy",
          detail: "-",
        },
      },
      th08: {
        Marisa: {
          score: 2509098720,
          status: "good",
          date: "2005-05-24T15:30:00",
          replay: "th8_ud0055.rpy",
          detail: "-",
        },
      },
    },
    ASL: {
      th06: {
        ReimuA: {
          score: 536185430,
          status: "good",
          date: "2009-04-18T15:30:00",
          replay: "th6_ud0044.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 571941380,
          status: "great",
          date: "2009-11-08T15:30:00",
          replay: "th6_ud0081.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 553746540,
          status: "great",
          date: "2009-01-23T15:30:00",
          replay: "th6_ud0087.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 611725420,
          status: "excellent",
          date: "2009-07-26T15:30:00",
          replay: "th6_ud0023.rpy",
          detail: "-",
        },
      },
      th08: {
        Border: {
          score: 2957550150,
          status: "great",
          date: "2013-11-25T15:30:00",
          replay: "th8_ud0001.rpy",
          detail: "-",
        },
        Magic: {
          score: 3021639920,
          status: "excellent",
          date: "2009-06-14T15:30:00",
          replay: "th8_ud0002.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 3000284220,
          status: "excellent",
          date: "2012-03-13T15:30:00",
          replay: "th8_ud0003.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 3001994340,
          status: "excellent",
          date: "2009-06-21T15:30:00",
          replay: "th8_ud0004.rpy",
          detail: "-",
        },
        Yukari: {
          score: 2112244750,
          status: "great",
          date: "2009-10-11T15:30:00",
          replay: "th8_ud0006.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2600855470,
          status: "good",
          date: "2010-12-14T15:30:00",
          replay: "th8_ud0007.rpy",
          detail: "-",
        },
        Alice: {
          score: 2092010760,
          status: "great",
          date: "2009-07-25T15:30:00",
          replay: "th8_ud0008.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 2525295090,
          status: "good",
          date: "2012-10-04T15:30:00",
          replay: "th8_ud0009.rpy",
          detail: "-",
        },
        Remilia: {
          score: 2221694800,
          status: "excellent",
          date: "2011-08-02T15:30:00",
          replay: "th8_ud0010.rpy",
          detail: "-",
        },
        Youmu: {
          score: 3104449400,
          status: "excellent",
          date: "2009-09-15T15:30:00",
          replay: "th8_ud0011.rpy",
          detail: "-",
        },
        Yuyuko: {
          score: 2179007270,
          status: "great",
          date: "2015-08-24T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
      th10: {
        ReimuA: {
          score: 969370200,
          status: "good",
          date: "2009-09-21T15:30:00",
          replay: "th10_ud0063.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1126846180,
          status: "excellent",
          date: "2017-09-17T15:30:00",
          replay: "th11_ud0003.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1101316000,
          status: "excellent",
          date: "2013-04-16T15:30:00",
          replay: "th11_ud0007.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1076628060,
          status: "great",
          date: "2013-06-18T15:30:00",
          replay: "th11_ud0012.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1113194290,
          status: "excellent",
          date: "2012-07-23T15:30:00",
          replay: "th11_ud0017.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1102183510,
          status: "excellent",
          date: "2012-06-03T15:30:00",
          replay: "th11_ud0023.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1081890510,
          status: "great",
          date: "2013-03-26T15:30:00",
          replay: "th11_ud0026.rpy",
          detail: "-",
        },
      },
    },
    ATA: {
      th10: {
        ReimuA: {
          score: 968708640,
          status: "good",
          date: "2007-12-09T15:30:00",
          replay: "th10_ud0065.rpy",
          detail: "-",
        },
      },
    },
    Aten: {
      th12: {
        ReimuA: {
          score: 500120660,
          status: "good",
          date: "2010-03-06T15:30:00",
          replay: "th12_ud0111.rpy",
          detail: "-",
        },
      },
    },
    Atu: {
      th07Ex: {
        ReimuB: {
          score: 1264076720,
          status: "good",
          date: "2008-05-24T15:30:00",
          replay: "th7_ud0038.rpy",
          detail: "-",
        },
      },
    },
    Azazaz: {
      th18: {
        Sakuya: {
          score: 5381628470,
          status: "good",
          date: "2026-02-24T15:30:00",
          replay: "th18_ud0029.rpy",
          detail: "-",
        },
      },
    },
    B: {
      th10: {
        ReimuB: {
          score: 954436110,
          status: "good",
          date: "2009-02-20T15:30:00",
          replay: "th10_ud0117.rpy",
          detail: "-",
        },
      },
    },
    BAAGE: {
      th06: {
        ReimuB: {
          score: 551292560,
          status: "great",
          date: "2006-06-11T15:30:00",
          replay: "th6_ud0090.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 531787820,
          status: "good",
          date: "2006-01-18T15:30:00",
          replay: "th6_ud0048.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 558932650,
          status: "great",
          date: "2006-02-21T15:30:00",
          replay: "th6_ud0085.rpy",
          detail: "-",
        },
      },
      th07Ex: {
        ReimuB: {
          score: 1303825140,
          status: "great",
          date: "2008-01-29T15:30:00",
          replay: "th7_ud0035.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1221017080,
          status: "good",
          date: "2008-01-10T15:30:00",
          replay: "th7_ud0046.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1520161930,
          status: "great",
          date: "2008-03-11T15:30:00",
          replay: "th7_ud1034.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1329307980,
          status: "good",
          date: "2007-07-12T15:30:00",
          replay: "th7_ud1053.rpy",
          detail: "-",
        },
      },
    },
    Balisman: {
      th11: {
        ReimuA: {
          score: 1050595700,
          status: "great",
          date: "2025-11-18T15:30:00",
          replay: "th11_ud0159.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1024209260,
          status: "good",
          date: "2026-04-29T15:30:00",
          replay: "th11_ud0166.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1015306070,
          status: "good",
          date: "2026-04-28T15:30:00",
          replay: "th11_ud0167.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 533379000,
          status: "good",
          date: "2025-11-27T15:30:00",
          replay: "th12_ud0126.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 755636700,
          status: "good",
          date: "2025-10-30T15:30:00",
          replay: "th14_ud0072.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1251937920,
          status: "excellent",
          date: "2025-10-04T15:30:00",
          replay: "th14_ud0068.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 750595490,
          status: "good",
          date: "2025-12-26T15:30:00",
          replay: "th14_ud0073.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1874048910,
          status: "excellent",
          date: "2026-06-17T15:30:00",
          replay: "th17_ud0104.rpy",
          detail: "-",
        },
        ReimuO: {
          score: 2973454710,
          status: "excellent",
          date: "2026-06-19T15:30:00",
          replay: "th17_ud0103.rpy",
          detail: "-",
        },
        ReimuE: {
          score: 1871615590,
          status: "excellent",
          date: "2026-03-26T15:30:00",
          replay: "th17_ud0082.rpy",
          detail: "-",
        },
        MarisaW: {
          score: 1666161640,
          status: "excellent",
          date: "2026-03-15T15:30:00",
          replay: "th17_ud0074.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2916215260,
          status: "excellent",
          date: "2026-06-19T15:30:00",
          replay: "th17_ud0102.rpy",
          detail: "-",
        },
        MarisaE: {
          score: 1848795630,
          status: "excellent",
          date: "2026-04-03T15:30:00",
          replay: "th17_ud0083.rpy",
          detail: "-",
        },
        YoumuW: {
          score: 1665899150,
          status: "excellent",
          date: "2026-05-08T15:30:00",
          replay: "th17_ud0092.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 2715140600,
          status: "excellent",
          date: "2026-06-30T15:30:00",
          replay: "th17_ud0105.rpy",
          detail: "-",
        },
        YoumuE: {
          score: 1841201590,
          status: "excellent",
          date: "2026-02-15T15:30:00",
          replay: "th17_ud0064.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3018191900,
          status: "good",
          date: "2026-06-13T15:30:00",
          replay: "th18_ud0047.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3036402840,
          status: "good",
          date: "2026-04-17T15:30:00",
          replay: "th18_ud0036.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 7166617180,
          status: "great",
          date: "2026-05-27T15:30:00",
          replay: "th18_ud0043.rpy",
          detail: "-",
        },
      },
    },
    Basty: {
      th06: {
        ReimuB: {
          score: 515764480,
          status: "good",
          date: "2026-04-05T15:30:00",
          replay: "th6_ud0107.rpy",
          detail: "-",
        },
      },
    },
    "Bat Mox": {
      th13: {
        Marisa: {
          score: 577384650,
          status: "great",
          date: "2024-06-03T15:30:00",
          replay: "th13_ud0014.rpy",
          detail: "-",
        },
      },
    },
    BCF: {
      th10: {
        ReimuA: {
          score: 958692290,
          status: "good",
          date: "2008-07-03T15:30:00",
          replay: "th10_ud0098.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 954090340,
          status: "good",
          date: "2008-08-12T15:30:00",
          replay: "th10_ud0119.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 964238000,
          status: "good",
          date: "2008-07-20T15:30:00",
          replay: "th10_ud0078.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 956130220,
          status: "good",
          date: "2008-08-03T15:30:00",
          replay: "th10_ud0114.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 972255800,
          status: "good",
          date: "2008-07-17T15:30:00",
          replay: "th10_ud0059.rpy",
          detail: "-",
        },
      },
      th11: {
        MarisaB: {
          score: 1005887120,
          status: "good",
          date: "2009-07-15T15:30:00",
          replay: "th11_ud0125.rpy",
          detail: "-",
        },
      },
    },
    BDH: {
      th08: {
        Youmu: {
          score: 2514468690,
          status: "good",
          date: "2012-04-04T15:30:00",
          replay: "th8_ud0054.rpy",
          detail: "-",
        },
      },
    },
    blahblah: {
      th11: {
        ReimuA: {
          score: 1028349320,
          status: "good",
          date: "2009-07-30T15:30:00",
          replay: null,
          detail: "2009年7月2週",
        },
      },
    },
    Borealis: {
      th14: {
        MarisaB: {
          score: 1101562070,
          status: "great",
          date: "2020-11-26T15:30:00",
          replay: "th14_ud0019.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 782233950,
          status: "good",
          date: "2022-01-22T15:30:00",
          replay: "th14_ud0058.rpy",
          detail: "-",
        },
      },
      th15: {
        Marisa: {
          score: 719130180,
          status: "good",
          date: "2025-06-22T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Reisen: {
          score: 848268930,
          status: "good",
          date: "2025-06-22T15:30:00",
          replay: "th15_ud0024.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 2055066270,
          status: "excellent",
          date: "2026-06-12T15:30:00",
          replay: "th17_ud0096.rpy",
          detail: "-",
        },
        ReimuO: {
          score: 2626874070,
          status: "excellent",
          date: "2024-03-13T15:30:00",
          replay: "th17_ud0011.rpy",
          detail: "-",
        },
        ReimuE: {
          score: 2044773440,
          status: "excellent",
          date: "2026-06-13T15:30:00",
          replay: "th17_ud0097.rpy",
          detail: "-",
        },
        MarisaW: {
          score: 2020491720,
          status: "excellent",
          date: "2026-06-20T15:30:00",
          replay: "th17_ud0098.rpy",
          detail: "-",
        },
        MarisaE: {
          score: 2094808290,
          status: "excellent",
          date: "2026-06-27T15:30:00",
          replay: "th17_ud0106.rpy",
          detail: "-",
        },
        YoumuW: {
          score: 1820175130,
          status: "excellent",
          date: "2026-06-16T15:30:00",
          replay: "th17_ud0100.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 1573599210,
          status: "good",
          date: "2019-10-14T15:30:00",
          replay: "th17_ud0016.rpy",
          detail: "-",
        },
        YoumuE: {
          score: 2034879380,
          status: "excellent",
          date: "2026-06-18T15:30:00",
          replay: "th17_ud0101.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3666491590,
          status: "great",
          date: "2022-03-15T15:30:00",
          replay: "th18_ud0016.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3716911230,
          status: "great",
          date: "2022-03-15T15:30:00",
          replay: "th18_ud0015.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 7371092700,
          status: "great",
          date: "2021-10-14T15:30:00",
          replay: "th18_ud0002.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3464672660,
          status: "good",
          date: "2022-02-27T15:30:00",
          replay: "th18_ud0017.rpy",
          detail: "-",
        },
      },
    },
    bun: {
      th18: {
        Sanae: {
          score: 3611148130,
          status: "great",
          date: "2026-07-11T15:30:00",
          replay: "th18_ud0152.rpy",
          detail: "-",
        },
      },
    },
    burata: {
      th12: {
        SanaeB: {
          score: 636732510,
          status: "great",
          date: "2026-05-14T15:30:00",
          replay: "th12_ud0137.rpy",
          detail: "-",
        },
      },
    },
	Cactu: {
      th06: {
        ReimuB: {
          score: 615234480,
          status: "excellent",
          date: "2014-11-01T15:30:00",
          replay: "th6_ud0022.rpy",
          detail: "-",
        },
      },
    },
    CAL: {
      th06: {
        MarisaB: {
          score: 527254090,
          status: "good",
          date: "2008-07-31T15:30:00",
          replay: null,
          detail: "2008年7月1週",
        },
      },
    },
    Captured: {
      th10: {
        ReimuB: {
          score: 959198820,
          status: "good",
          date: "2012-11-15T15:30:00",
          replay: "th10_ud0093.rpy",
          detail: "-",
        },
      },
    },
    CCO: {
      th14: {
        MarisaB: {
          score: 1042914990,
          status: "good",
          date: "2016-04-04T15:30:00",
          replay: "th14_ud0030.rpy",
          detail: "-",
        },
      },
    },
    Chal: {
      th06: {
        MarisaB: {
          score: 588082700,
          status: "great",
          date: "2008-08-31T15:30:00",
          replay: null,
          detail: "2008年8月3週",
        },
      },
      th08: {
        Scarlet: {
          score: 2518378830,
          status: "good",
          date: "2008-10-31T15:30:00",
          replay: null,
          detail: "2008年10月1週",
        },
        Netherworld: {
          score: 2582327930,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月2週",
        },
        Yukari: {
          score: 1828285190,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月3週",
        },
        Remilia: {
          score: 1838448940,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月4週",
        },
        Yuyuko: {
          score: 1848668950,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月5週",
        },
      },
      th10: {
        ReimuA: {
          score: 971519910,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月4週",
        },
      },
    },
    chrono: {
      th07Ph: {
        ReimuA: {
          score: 1378006650,
          status: "good",
          date: "2006-03-13T15:30:00",
          replay: "th7_ud1004.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1565992430,
          status: "great",
          date: "2006-08-30T15:30:00",
          replay: "th7_ud1010.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuC: {
          score: 971519910,
          status: "good",
          date: "2007-09-23T15:30:00",
          replay: "th10_ud0133.rpy",
          detail: "-",
        },
      },
    },
    chum: {
      th128: {
        Cirno: {
          score: 98888170,
          status: "great",
          date: "2015-06-15T15:30:00",
          replay: "th128_ud0004.rpy",
          detail: "-",
        },
      },
    },
    clanc: {
      th13: {
        Youmu: {
          score: 549152610,
          status: "good",
          date: "2026-02-07T15:30:00",
          replay: "th13_ud0042.rpy",
          detail: "-",
        },
      },
    },
    Clio: {
      th11: {
        MarisaA: {
          score: 1003331910,
          status: "good",
          date: "2009-10-09T15:30:00",
          replay: "th11_ud0132.rpy",
          detail: "-",
        },
      },
    },
    clock_eu26: {
      th128: {
        Cirno: {
          score: 94779240,
          status: "good",
          date: "2012-08-12T15:30:00",
          replay: "th128_ud0008.rpy",
          detail: "-",
        },
      },
    },
    CLR: {
      th128: {
        Cirno: {
          score: 95695540,
          status: "great",
          date: "2013-02-23T15:30:00",
          replay: "th128_ud0021.rpy",
          detail: "-",
        },
      },
    },
    CHEM31: {
      th06: {
        ReimuB: {
          score: 515939650,
          status: "good",
          date: "2005-08-31T15:30:00",
          replay: null,
          detail: "2005年8月4週",
        },
      },
    },
    "Cherry^^": {
      th07Ph: {
        MarisaA: {
          score: 1342174630,
          status: "good",
          date: "2004-08-15T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    CherryLog: {
      th08: {
        Yukari: {
          score: 1876024620,
          status: "good",
          date: "2011-03-31T15:30:00",
          replay: null,
          detail: "2011年3月1週",
        },
        Youmu: {
          score: 2880133970,
          status: "great",
          date: "2011-05-28T15:30:00",
          replay: "th8_ud0028.rpy",
          detail: "-",
        },
      },
    },
    CID: {
      th128: {
        Cirno: {
          score: 95104150,
          status: "great",
          date: "2010-10-06T15:30:00",
          replay: "th128_ud0007.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1003752640,
          status: "good",
          date: "2013-08-17T15:30:00",
          replay: "th14_ud0038.rpy",
          detail: "-",
        },
      },
    },
    coco: {
      th06: {
        ReimuB: {
          score: 587822150,
          status: "great",
          date: "2009-10-04T15:30:00",
          replay: "th6_ud0091.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1023546070,
          status: "good",
          date: "2010-02-17T15:30:00",
          replay: "th11_ud0083.rpy",
          detail: "-",
        },
      },
    },
    coic: {
      th10: {
        ReimuA: {
          score: 970665900,
          status: "good",
          date: "2011-06-12T15:30:00",
          replay: "th10_ud0061.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 974913650,
          status: "good",
          date: "2011-06-30T15:30:00",
          replay: "th10_ud0055.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 953605510,
          status: "good",
          date: "2011-07-03T15:30:00",
          replay: "th10_ud0121.rpy",
          detail: "-",
        },
      },
    },
    Crispy: {
      th12: {
        ReimuA: {
          score: 541731650,
          status: "good",
          date: "2025-03-15T15:30:00",
          replay: "th12_ud0143.rpy",
          detail: "-",
        },
      },
    },
    Crow: {
      th15: {
        Reisen: {
          score: 737710060,
          status: "good",
          date: "2026-05-19T15:30:00",
          replay: "th15_ud0044.rpy",
          detail: "-",
        },
      },
    },
    CSP: {
      th14: {
        MarisaB: {
          score: 1125093960,
          status: "great",
          date: "2014-05-15T15:30:00",
          replay: "th14_ud0015.rpy",
          detail: "-",
        },
      },
    },
    ct9a: {
      th06: {
        MarisaB: {
          score: 541143550,
          status: "good",
          date: "2009-08-31T15:30:00",
          replay: null,
          detail: "2009年8月3週",
        },
      },
    },
    Cueto: {
      th14: {
        MarisaB: {
          score: 1108574030,
          status: "great",
          date: "2016-10-02T15:30:00",
          replay: "th14_ud0018.rpy",
          detail: "-",
        },
      },
    },
    "CV:○○○○": {
      th08: {
        Border: {
          score: 2654779270,
          status: "good",
          date: "2013-08-21T15:30:00",
          replay: "th8_ud0034.rpy",
          detail: "-",
        },
      },
    },
    CWC: {
      th11: {
        ReimuA: {
          score: 1051729290,
          status: "great",
          date: "2020-08-12T15:30:00",
          replay: "th11_ud0051.rpy",
          detail: "-",
        },
      },
    },
    coa: {
      th10: {
        ReimuA: {
          score: 985720850,
          status: "great",
          date: "2010-07-21T15:30:00",
          replay: "th10_ud0033.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 994458150,
          status: "great",
          date: "2010-07-26T15:30:00",
          replay: "th10_ud0010.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 989133300,
          status: "great",
          date: "2010-08-02T15:30:00",
          replay: "th10_ud0014.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1000020760,
          status: "excellent",
          date: "2009-05-21T15:30:00",
          replay: "th10_ud0006.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1008536640,
          status: "good",
          date: "2012-11-18T15:30:00",
          replay: "th11_ud0118.rpy",
          detail: "-",
        },
      },
    },
    Dagoth: {
      th14: {
        MarisaB: {
          score: 1088255260,
          status: "good",
          date: "2020-11-29T15:30:00",
          replay: "th14_ud0021.rpy",
          detail: "-",
        },
      },
    },
    dass: {
      th14: {
        MarisaB: {
          score: 1068765670 ,
          status: "good",
          date: "2019-03-24T15:30:00",
          replay: "th14_ud0069.rpy",
          detail: "-",
        },
      },
    },
    Data: {
      th128: {
        Cirno: {
          score: 100509890,
          status: "excellent",
          date: "2014-06-10T15:30:00",
          replay: "th128_ud0002.rpy",
          detail: "-",
        },
      },
    },
    dcBlah: {
      th08: {
        Magic: {
          score: 2786960340,
          status: "good",
          date: "2009-11-24T15:30:00",
          replay: "th8_ud0036.rpy",
          detail: "-",
        },
      },
    },
    dd: {
      th14: {
        SakuyaB: {
          score: 785859360,
          status: "good",
          date: "2015-04-21T15:30:00",
          replay: "th14_ud0057.rpy",
          detail: "-",
        },
      },
    },
    Dean: {
      th14: {
        MarisaB: {
          score: 1044477760,
          status: "good",
          date: "2021-12-23T15:30:00",
          replay: "th14_ud0029.rpy",
          detail: "-",
        },
      },
    },
    "despair(絶望)": {
      th07Ex: {
        ReimuB: {
          score: 1309354340,
          status: "great",
          date: "2013-08-02T15:30:00",
          replay: "th7_ud0034.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1321845540,
          status: "good",
          date: "2012-12-16T15:30:00",
          replay: "th7_ud1056.rpy",
          detail: "-",
        },
      },
    },
    Diamenciory: {
      th13: {
        Youmu: {
          score: 570999750,
          status: "great",
          date: "2021-10-03T15:30:00",
          replay: "th13_ud0017.rpy",
          detail: "-",
        },
      },
      th18: {
        Sanae: {
          score: 3818932860,
          status: "great",
          date: "2025-06-14T15:30:00",
          replay: "th18_ud0012.rpy",
          detail: "-",
        },
      },
    },
    Dide: {
      th16: {
        Reimu: {
          score: 2340348650,
          status: "good",
          date: "2017-11-04T15:30:00",
          replay: "th16_ud0026.rpy",
          detail: "-",
        },
      },
    },
    DOS: {
      th11: {
        ReimuA: {
          score: 1018744630,
          status: "good",
          date: "2011-03-19T15:30:00",
          replay: "th11_ud0094.rpy",
          detail: "-",
        },
      },
    },
    dot_asp: {
      th07Ex: {
        ReimuB: {
          score: 1421550150,
          status: "excellent",
          date: "2013-04-14T15:30:00",
          replay: "th7_ud0009.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1339609020,
          status: "great",
          date: "2012-11-16T15:30:00",
          replay: "th7_ud0029.rpy",
          detail: "-",
        },
      },
      th12: {
        MarisaA: {
          score: 665674050,
          status: "great",
          date: "2012-04-12T15:30:00",
          replay: "th12_ud0029.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 687806130,
          status: "great",
          date: "2011-01-16T15:30:00",
          replay: "th12_ud0018.rpy",
          detail: "-",
        },
      },
    },
    dxk: {
      th10: {
        MarisaC: {
          score: 1002022800,
          status: "excellent",
          date: "2022-10-20T15:30:00",
          replay: "th10_ud0004.rpy",
          detail: "-",
        },
      },
    },
    "dy/dt": {
      th15: {
        Reisen: {
          score: 753533270,
          status: "good",
          date: "2017-02-03T15:30:00",
          replay: "th15_ud0020.rpy",
          detail: "-",
        },
      },
    },
    EBG: {
      th13: {
        Marisa: {
          score: 543605120,
          status: "good",
          date: "2016-07-11T15:30:00",
          replay: "th13_ud0028.rpy",
          detail: "-",
        },
      },
    },
    "Echo Alert": {
      th12: {
        SanaeB: {
          score: 701544340,
          status: "excellent",
          date: "2026-07-07T15:30:00",
          replay: "th12_ud0145.rpy",
          detail: "-",
        },
      },
    },
    eclipse: {
      th13: {
        Marisa: {
          score: 511891630,
          status: "good",
          date: "2012-09-27T15:30:00",
          replay: "th13_ud0033.rpy",
          detail: "-",
        },
      },
    },
	
    Ecoさわ: {
      th20: {
        MarisaY2: {
          score: 606605740,
          status: "good",
          date: "2026-02-23T15:30:00",
          replay: "th20_ud0050.rpy",
          detail: "-",
        },
      },
    },
    EEg: {
      th14: {
        MarisaB: {
          score: 1208334620,
          status: "excellent",
          date: "2022-04-20T15:30:00",
          replay: "th14_ud0009.rpy",
          detail: "-",
        },
      },
      th17: {
        MarisaO: {
          score: 1824583120,
          status: "good",
          date: "2022-05-09T15:30:00",
          replay: "th17_ud0034.rpy",
          detail: "-",
        },
      },
    },
    "E.G.I.": {
      th16: {
        Reimu: {
          score: 2913202670,
          status: "great",
          date: "2018-04-03T15:30:00",
          replay: "th16_ud0020.rpy",
          detail: "-",
        },
        Aya: {
          score: 2362267770,
          status: "good",
          date: "2018-04-02T15:30:00",
          replay: "th16_ud0025.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2298043270,
          status: "good",
          date: "2018-04-01T15:30:00",
          replay: "th16_ud0030.rpy",
          detail: "-",
        },
      },
    },
    EQ: {
      th07Ex: {
        ReimuB: {
          score: 1232634800,
          status: "good",
          date: "2008-09-30T15:30:00",
          replay: null,
          detail: "2008年9月1週",
        },
      },
    },
    Eternal: {
      th08: {
        Border: {
          score: 2548205610,
          status: "good",
          date: "2006-02-16T15:30:00",
          replay: "th8_ud0050.rpy",
          detail: "-",
        },
      },
    },
    Fe: {
      th10: {
        ReimuB: {
          score: 964121810,
          status: "good",
          date: "2011-03-18T15:30:00",
          replay: "th10_ud0079.rpy",
          detail: "-",
        },
      },
    },
    Feng: {
      th14: {
        MarisaB: {
          score: 1215375350,
          status: "excellent",
          date: "2026-04-14T15:30:00",
          replay: "th14_ud0090.rpy",
          detail: "-",
        },
      },
    },
    Fulde: {
      th10: {
        ReimuA: {
          score: 957275480,
          status: "good",
          date: "2008-08-10T15:30:00",
          replay: "th10_ud0107.rpy",
          detail: "-",
        },
      },
    },
    fon: {
      th16: {
        Reimu: {
          score: 3336378300,
          status: "excellent",
          date: "2018-04-06T15:30:00",
          replay: "th16_ud0009.rpy",
          detail: "-",
        },
        Cirno: {
          score: 3319395440,
          status: "excellent",
          date: "2018-03-06T15:30:00",
          replay: "th16_ud0010.rpy",
          detail: "-",
        },
      },
    },
    franniss: {
      th12: {
        SanaeB: {
          score: 553512750,
          status: "good",
          date: "2010-09-14T15:30:00",
          replay: "th12_ud0079.rpy",
          detail: "-",
        },
      },
    },
    Frost: {
      th07Ph: {
        ReimuB: {
          score: 1420326890,
          status: "good",
          date: "2007-07-16T15:30:00",
          replay: "th7_ud1042.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 959639700,
          status: "good",
          date: "2008-02-04T15:30:00",
          replay: "th10_ud0090.rpy",
          detail: "-",
        },
      },
    },
    FutaAi: {
      th128: {
        Cirno: {
          score: 90768220,
          status: "good",
          date: "2010-11-02T15:30:00",
          replay: "th128_ud0011.rpy",
          detail: "-",
        },
      },
    },
    gake: {
      th128: {
        Cirno: {
          score: 91606830,
          status: "good",
          date: "2026-05-27T15:30:00",
          replay: "th128_ud0025.rpy",
          detail: "-",
        },
      },
    },
    garm: {
      th07Ex: {
        ReimuB: {
          score: 1241472040,
          status: "good",
          date: "2024-01-10T15:30:00",
          replay: "th7_ud0042.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1546212470,
          status: "great",
          date: "2024-03-31T15:30:00",
          replay: "th7_ud1031.rpy",
          detail: "-",
        },
      },
      th08: {
        Netherworld: {
          score: 2598571690,
          status: "good",
          date: "2017-10-22T15:30:00",
          replay: "th8_ud0046.rpy",
          detail: "-",
        },
      },
    },
    gatsguts: {
      th12: {
        SanaeB: {
          score: 694067370,
          status: "great",
          date: "2012-05-28T15:30:00",
          replay: "th12_ud0112.rpy",
          detail: "-",
        },
      },
    },
    Genkai: {
      th07Ph: {
        ReimuA: {
          score: 1357213060,
          status: "good",
          date: "2012-07-31T15:30:00",
          replay: "th7_ud1005.rpy",
          detail: "-",
        },
      },
    },
    GEPPO: {
      th10: {
        ReimuB: {
          score: 966819750,
          status: "good",
          date: "2009-03-31T15:30:00",
          replay: "th10_ud0069.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 961273360,
          status: "good",
          date: "2009-08-26T15:30:00",
          replay: "th10_ud0085.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 969310230,
          status: "good",
          date: "2009-07-30T15:30:00",
          replay: "th10_ud0064.rpy",
          detail: "-",
        },
      },
    },
    "GmbRuby!": {
      th16: {
        Reimu: {
          score: 2288262210,
          status: "good",
          date: "2017-09-24T15:30:00",
          replay: "th16_ud0031.rpy",
          detail: "-",
        },
        Cirno: {
          score: 2267459510,
          status: "good",
          date: "2017-09-22T15:30:00",
          replay: "th16_ud0032.rpy",
          detail: "-",
        },
        Aya: {
          score: 2208042510,
          status: "good",
          date: "2017-09-23T15:30:00",
          replay: "th16_ud0035.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2078531550,
          status: "good",
          date: "2017-09-17T15:30:00",
          replay: "th16_ud0041.rpy",
          detail: "-",
        },
      },
    },
    gryphen: {
      th18: {
        Sanae: {
          score: 3223469530,
          status: "good",
          date: "2026-04-19T15:30:00",
          replay: "th18_ud0041.rpy",
          detail: "-",
        },
      },
    },
    guran: {
      th12: {
        ReimuA: {
          score: 643538430,
          status: "great",
          date: "2012-08-02T15:30:00",
          replay: "th12_ud0034.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 610210230,
          status: "great",
          date: "2012-10-10T15:30:00",
          replay: "th12_ud0056.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 605635390,
          status: "great",
          date: "2012-04-18T15:30:00",
          replay: "th12_ud0062.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 628212900,
          status: "great",
          date: "2012-07-29T15:30:00",
          replay: "th12_ud0044.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 623770210,
          status: "great",
          date: "2011-12-16T15:30:00",
          replay: "th12_ud0046.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 711266970,
          status: "excellent",
          date: "2012-06-11T15:30:00",
          replay: "th12_ud0011.rpy",
          detail: "-",
        },
      },
    },
    h3po49: {
      th11: {
        ReimuA: {
          score: 1015498220,
          status: "good",
          date: "2018-06-24T15:30:00",
          replay: "th11_ud0157.rpy",
          detail: "-",
        },
      },
    },
    HalRin: {
      th11: {
        ReimuA: {
          score: 1012933180,
          status: "good",
          date: "2018-05-14T15:30:00",
          replay: "th11_ud0169.rpy",
          detail: "-",
        },
      },
    },
    haru: {
      th10: {
        ReimuA: {
          score: 965068440,
          status: "good",
          date: "2007-10-11T15:30:00",
          replay: "th10_ud0135.rpy",
          detail: "-",
        },
      },
    },
    harukara: {
      th12: {
        ReimuA: {
          score: 658198670,
          status: "great",
          date: "2017-07-08T15:30:00",
          replay: "th12_ud0030.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 614037600,
          status: "great",
          date: "2015-10-20T15:30:00",
          replay: "th12_ud0051.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 633225120,
          status: "great",
          date: "2017-04-24T15:30:00",
          replay: "th12_ud0041.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 609148460,
          status: "great",
          date: "2015-10-20T15:30:00",
          replay: "th12_ud0057.rpy",
          detail: "-",
        },
      },
    },
    Heartbeam: {
      th06: {
        ReimuA: {
          score: 510843100,
          status: "good",
          date: "2011-07-04T15:30:00",
          replay: "th6_ud0064.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 530174200,
          status: "good",
          date: "2011-01-27T15:30:00",
          replay: "th6_ud0050.rpy",
          detail: "-",
        },
      },
      th07Ex: {
        ReimuA: {
          score: 1319163920,
          status: "great",
          date: "2011-11-08T15:30:00",
          replay: "th7_ud0004.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1374889790,
          status: "great",
          date: "2011-11-08T15:30:00",
          replay: "th7_ud0031.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1224654940,
          status: "good",
          date: "2011-11-10T15:30:00",
          replay: "th7_ud0014.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1207559680,
          status: "good",
          date: "2011-10-23T15:30:00",
          replay: "th7_ud0024.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1328868780,
          status: "great",
          date: "2012-10-04T15:30:00",
          replay: "th7_ud0030.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1502658090,
          status: "great",
          date: "2011-10-13T15:30:00",
          replay: "th7_ud1036.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1047520960,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0054.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1004773940,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0131.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1012453310,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0106.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1019558540,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0091.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1008841220,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0117.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1008213550,
          status: "good",
          date: "2011-01-19T15:30:00",
          replay: "th11_ud0120.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 671587540,
          status: "great",
          date: "2011-01-16T15:30:00",
          replay: "th12_ud0031.rpy",
          detail: "-",
        },
      },
    },
    HHY: {
      th11: {
        ReimuA: {
          score: 1040379230,
          status: "good",
          date: "2011-08-14T15:30:00",
          replay: "th11_ud0060.rpy",
          detail: "-",
        },
      },
    },
    Himusy: {
      th11: {
        ReimuA: {
          score: 1104094890,
          status: "excellent",
          date: "2015-06-01T15:30:00",
          replay: "th11_ud0148.rpy",
          detail: "-",
        },
      },
    },
    HIR: {
      th10: {
        MarisaC: {
          score: 958434540,
          status: "good",
          date: "2007-10-31T15:30:00",
          replay: "th10_ud0100.rpy",
          detail: "-",
        },
      },
    },
    Hline: {
      th14: {
        MarisaB: {
          score: 1180828970,
          status: "great",
          date: "2018-12-22T15:30:00",
          replay: "th14_ud0010.rpy",
          detail: "-",
        },
      },
    },
    HS参謀: {
      th07Ex: {
        ReimuA: {
          score: 1368382510,
          status: "great",
          date: "2011-09-22T15:30:00",
          replay: "th7_ud0002.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1412815750,
          status: "excellent",
          date: "2011-09-25T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaA: {
          score: 1257244350,
          status: "good",
          date: "2012-08-05T15:30:00",
          replay: "th7_ud0012.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1242595110,
          status: "good",
          date: "2012-08-22T15:30:00",
          replay: "th7_ud0017.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1269037930,
          status: "good",
          date: "2011-08-27T15:30:00",
          replay: "th7_ud0022.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1389203040,
          status: "great",
          date: "2011-09-08T15:30:00",
          replay: "th7_ud0027.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuA: {
          score: 1578013890,
          status: "great",
          date: "2011-10-04T15:30:00",
          replay: "th7_ud1002.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1652531160,
          status: "excellent",
          date: "2011-10-08T15:30:00",
          replay: "th7_ud1007.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1438372650,
          status: "good",
          date: "2011-07-28T15:30:00",
          replay: "th7_ud1012.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1424064450,
          status: "good",
          date: "2011-07-22T15:30:00",
          replay: "th7_ud1017.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1451877270,
          status: "good",
          date: "2011-07-17T15:30:00",
          replay: "th7_ud1022.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1565933740,
          status: "great",
          date: "2010-02-09T15:30:00",
          replay: "th7_ud1027.rpy",
          detail: "-",
        },
      },
    },
    htrn: {
      th07Ex: {
        ReimuB: {
          score: 1289245720,
          status: "good",
          date: "2015-12-28T15:30:00",
          replay: "th7_ud0036.rpy",
          detail: "-",
        },
      },
    },
    "I.K": {
      th06: {
        ReimuB: {
          score: 535593380,
          status: "good",
          date: "2011-09-30T15:30:00",
          replay: null,
          detail: "2011年9月4週",
        },
        MarisaB: {
          score: 511956890,
          status: "good",
          date: "2011-06-30T15:30:00",
          replay: null,
          detail: "2011年6月3週",
        },
      },
    },
    Ia: {
      th07Ph: {
        ReimuB: {
          score: 1482586870,
          status: "good",
          date: "2008-09-14T15:30:00",
          replay: "th7_ud1039.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 954051070,
          status: "good",
          date: "2009-01-16T15:30:00",
          replay: "th10_ud0120.rpy",
          detail: "-",
        },
      },
    },
    IBUKI: {
      th06: {
        MarisaB: {
          score: 557900410,
          status: "great",
          date: "2009-12-21T15:30:00",
          replay: "th6_ud0086.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuB: {
          score: 962399370,
          status: "good",
          date: "2010-01-01T15:30:00",
          replay: "th10_ud0083.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1122028280,
          status: "excellent",
          date: "2014-04-28T15:30:00",
          replay: "th11_ud0010.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1071750900,
          status: "great",
          date: "2012-04-25T15:30:00",
          replay: "th11_ud0038.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1050290580,
          status: "great",
          date: "2011-12-30T15:30:00",
          replay: "th11_ud0052.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1100919060,
          status: "excellent",
          date: "2012-07-09T15:30:00",
          replay: "th11_ud0018.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1070171250,
          status: "great",
          date: "2010-06-07T15:30:00",
          replay: "th11_ud0040.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1060139700,
          status: "great",
          date: "2012-04-28T15:30:00",
          replay: "th11_ud0047.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 539534530,
          status: "good",
          date: "2009-12-22T15:30:00",
          replay: "th12_ud0087.rpy",
          detail: "-",
        },
      },
    },
    idtn: {
      th06: {
        ReimuA: {
          score: 501293410,
          status: "good",
          date: "2024-11-10T15:30:00",
          replay: "th6_ud0077.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 502198880,
          status: "good",
          date: "2020-09-17T15:30:00",
          replay: null,
          detail: "-",
        },
        MarisaB: {
          score: 512470600,
          status: "good",
          date: "2020-04-22T15:30:00",
          replay: null,
          detail: "-",
        },
      },
      th08: {
        Border: {
          score: 2540185530,
          status: "good",
          date: "2023-08-26T15:30:00",
          replay: "th8_ud0051.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 977499600,
          status: "good",
          date: "2023-08-26T15:30:00",
          replay: "th10_ud0049.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1125007070,
          status: "excellent",
          date: "2024-01-30T15:30:00",
          replay: "th11_ud0004.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1123460680,
          status: "excellent",
          date: "2025-11-30T15:30:00",
          replay: "th11_ud0160.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1080000270,
          status: "great",
          date: "2025-12-26T15:30:00",
          replay: "th11_ud0163.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1133521770,
          status: "excellent",
          date: "2023-07-28T15:30:00",
          replay: "th11_ud0016.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1106846610,
          status: "excellent",
          date: "2023-06-14T15:30:00",
          replay: "th11_ud0022.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1065708540,
          status: "great",
          date: "2023-04-23T15:30:00",
          replay: "th11_ud0027.rpy",
          detail: "-",
        },
      },
      th12: {
        ReimuA: {
          score: 637311450,
          status: "great",
          date: "2023-08-28T15:30:00",
          replay: "th12_ud0113.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 712165610,
          status: "excellent",
          date: "2021-11-07T15:30:00",
          replay: "th12_ud0010.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 583256930,
          status: "great",
          date: "2022-11-01T15:30:00",
          replay: "th13_ud0011.rpy",
          detail: "-",
        },
        Marisa: {
          score: 650964660,
          status: "excellent",
          date: "2022-06-01T15:30:00",
          replay: "th13_ud0002.rpy",
          detail: "-",
        },
        Sanae: {
          score: 570844450,
          status: "great",
          date: "2023-10-10T15:30:00",
          replay: "th13_ud0018.rpy",
          detail: "-",
        },
        Youmu: {
          score: 630869880,
          status: "excellent",
          date: "2026-03-01T15:30:00",
          replay: "th13_ud0044.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 772433890,
          status: "good",
          date: "2021-04-17T15:30:00",
          replay: "th14_ud0046.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1203433630,
          status: "excellent",
          date: "2020-12-04T15:30:00",
          replay: "th14_ud0006.rpy",
          detail: "-",
        },
      },
      th15: {
        Reimu: {
          score: 1015297270,
          status: "excellent",
          date: "2026-05-05T15:30:00",
          replay: "th15_ud0040.rpy",
          detail: "-",
        },
        Sanae: {
          score: 997013220,
          status: "great",
          date: "2026-04-03T15:30:00",
          replay: "th15_ud0036.rpy",
          detail: "-",
        },
        Reisen: {
          score: 1077513020,
          status: "excellent",
          date: "2026-05-23T15:30:00",
          replay: "th15_ud0045.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 3507478380,
          status: "excellent",
          date: "2024-06-21T15:30:00",
          replay: "th16_ud0004.rpy",
          detail: "-",
        },
        Cirno: {
          score: 3518461940,
          status: "excellent",
          date: "2024-07-01T15:30:00",
          replay: "th16_ud0003.rpy",
          detail: "-",
        },
        Aya: {
          score: 3549454900,
          status: "excellent",
          date: "2024-07-16T15:30:00",
          replay: "th16_ud0001.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3519680200,
          status: "excellent",
          date: "2024-07-11T15:30:00",
          replay: "th16_ud0002.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1159096890,
          status: "good",
          date: "2021-10-06T15:30:00",
          replay: "th17_ud0029.rpy",
          detail: "-",
        },
        ReimuO: {
          score: 2458140000,
          status: "great",
          date: "2024-01-12T15:30:00",
          replay: "th17_ud0004.rpy",
          detail: "-",
        },
        ReimuE: {
          score: 1324598310,
          status: "great",
          date: "2021-10-08T15:30:00",
          replay: "th17_ud0030.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2681944850,
          status: "excellent",
          date: "2024-01-08T15:30:00",
          replay: "th17_ud0002.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3809186550,
          status: "great",
          date: "2023-04-13T15:30:00",
          replay: "th18_ud0011.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3818046440,
          status: "great",
          date: "2023-04-12T15:30:00",
          replay: "th18_ud0010.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 8467415250,
          status: "excellent",
          date: "2025-07-01T15:30:00",
          replay: "th18_ud0001.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3862839840,
          status: "great",
          date: "2023-04-09T15:30:00",
          replay: "th18_ud0007.rpy",
          detail: "-",
        },
      },
      th20: {
        ReimuG1: {
          score: 709784480,
          status: "great",
          date: "2025-09-08T15:30:00",
          replay: "th20_ud0002.rpy",
          detail: "-",
        },
        MarisaR2: {
          score: 767126360,
          status: "great",
          date: "2025-08-30T15:30:00",
          replay: "th20_ud0005.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 642855170,
          status: "good",
          date: "2025-08-26T15:30:00",
          replay: "th20_ud0014.rpy",
          detail: "-",
        },
      },
    },
    inatami: {
      th14: {
        MarisaB: {
          score: 1038566070,
          status: "good",
          date: "2013-08-18T15:30:00",
          replay: "th14_ud0032.rpy",
          detail: "-",
        },
      },
    },
    Indigo: {
      th12: {
        ReimuA: {
          score: 563997020,
          status: "good",
          date: "2009-10-03T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    int: {
      th06: {
        ReimuA: {
          score: 650554360,
          status: "excellent",
          date: "2026-02-18T15:30:00",
          replay: "th6_ud0099.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 668332780,
          status: "excellent",
          date: "2024-07-05T15:30:00",
          replay: "th6_ud0006.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 616890460,
          status: "excellent",
          date: "2019-12-31T15:30:00",
          replay: "th6_ud0012.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 632464440,
          status: "excellent",
          date: "2022-02-03T15:30:00",
          replay: "th6_ud0019.rpy",
          detail: "-",
        },
      },
    },
    iomark: {
      th06: {
        ReimuB: {
          score: 532333540,
          status: "good",
          date: "2013-03-29T15:30:00",
          replay: "th6_ud0047.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 976279340,
          status: "good",
          date: "2011-07-31T15:30:00",
          replay: null,
          detail: "2011年7月1週",
        },
      },
    },
    ior: {
      th11: {
        ReimuA: {
          score: 1115415220,
          status: "excellent",
          date: "2019-05-20T15:30:00",
          replay: "th11_ud0146.rpy",
          detail: "-",
        },
      },
    },
    isi: {
      th06: {
        MarisaB: {
          score: 520527150,
          status: "good",
          date: "2010-03-31T15:30:00",
          replay: null,
          detail: "2010年3月2週",
        },
      },
    },
    ISN: {
      th14: {
        SakuyaA: {
          score: 778156990,
          status: "good",
          date: "2020-10-01T15:30:00",
          replay: "th14_ud0061.rpy",
          detail: "-",
        },
      },
    },
    IVSTITIA: {
      th11: {
        ReimuA: {
          score: 1017319160,
          status: "good",
          date: "2013-10-31T15:30:00",
          replay: "th11_ud0099.rpy",
          detail: "-",
        },
      },
    },
    IXU: {
      th06: {
        MarisaB: {
          score: 538200110,
          status: "good",
          date: "2011-06-14T15:30:00",
          replay: "th6_ud0041.rpy",
          detail: "-",
        },
      },
    },
    izanze: {
      th07Ex: {
        MarisaA: {
          score: 1227756190,
          status: "good",
          date: "2011-02-28T15:30:00",
          replay: null,
          detail: "2011年2月1週",
        },
      },
    },
    IZUNA: {
      th07Ph: {
        ReimuB: {
          score: 1318107360,
          status: "good",
          date: "2011-07-09T15:30:00",
          replay: "th7_ud1059.rpy",
          detail: "-",
        },
      },
    },
    Jack: {
      th10: {
        ReimuA: {
          score: 986051230,
          status: "great",
          date: "2010-11-11T15:30:00",
          replay: "th10_ud0031.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 995337990,
          status: "great",
          date: "2012-01-21T15:30:00",
          replay: "th10_ud0009.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 992275980,
          status: "great",
          date: "2012-04-08T15:30:00",
          replay: "th10_ud0012.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 988560820,
          status: "great",
          date: "2010-06-12T15:30:00",
          replay: "th10_ud0018.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 986704560,
          status: "great",
          date: "2011-10-23T15:30:00",
          replay: "th10_ud0025.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1002801340,
          status: "excellent",
          date: "2010-10-31T15:30:00",
          replay: "th10_ud0001.rpy",
          detail: "-",
        },
      },
    },
    Jespa: {
      th11: {
        ReimuA: {
          score: 1019429930,
          status: "good",
          date: "2011-07-25T15:30:00",
          replay: "th11_ud0092.rpy",
          detail: "-",
        },
      },
    },
    JUNK: {
      th07Ex: {
        ReimuB: {
          score: 1266132550,
          status: "good",
          date: "2009-03-09T15:30:00",
          replay: "th7_ud0037.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        SakuyaB: {
          score: 1483030690,
          status: "good",
          date: "2009-06-20T15:30:00",
          replay: "th7_ud1029.rpy",
          detail: "-",
        },
      },
    },
    Jy: {
      th14: {
        MarisaB: {
          score: 1146925460,
          status: "great",
          date: "2014-03-18T15:30:00",
          replay: "th14_ud0012.rpy",
          detail: "-",
        },
      },
    },
    Kaede: {
      th07Ph: {
        ReimuB: {
          score: 1305944670,
          status: "good",
          date: "2010-08-07T15:30:00",
          replay: "th7_ud1063.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 550612100,
          status: "good",
          date: "2010-08-14T15:30:00",
          replay: "th12_ud0081.rpy",
          detail: "-",
        },
      },
    },
    kana_th6: {
      th06: {
        ReimuA: {
          score: 605822850,
          status: "excellent",
          date: "2025-06-10T15:30:00",
          replay: "th6_ud0004.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 626170860,
          status: "excellent",
          date: "2025-02-04T15:30:00",
          replay: "th6_ud0009.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 605186930,
          status: "excellent",
          date: "2025-06-08T15:30:00",
          replay: "th6_ud0014.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 671582740,
          status: "excellent",
          date: "2026-03-03T15:30:00",
          replay: "th6_ud0101.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3085175090,
          status: "good",
          date: "2025-05-22T15:30:00",
          replay: null,
          detail: "リプレイ消失",
        },
        Sanae: {
          score: 3284339610,
          status: "good",
          date: "2025-05-23T15:30:00",
          replay: "th18_ud0024.rpy",
          detail: "-",
        },
      },
      th20: {
        ReimuR1: {
          score: 635861400,
          status: "good",
          date: "2025-09-02T15:30:00",
          replay: "th20_ud0001.rpy",
          detail: "-",
        },
      },
    },
    kanaechaniidx: {
      th14: {
        ReimuA: {
          score: 771715890,
          status: "good",
          date: "2013-11-14T15:30:00",
          replay: "th14_ud0047.rpy",
          detail: "-",
        },
      },
    },
    kasakasa: {
      th16: {
        Reimu: {
          score: 2029552750,
          status: "good",
          date: "2018-05-15T15:30:00",
          replay: "th16_ud0044.rpy",
          detail: "-",
        },
      },
    },
    "kaz-穹": {
      th10: {
        ReimuA: {
          score: 981691190,
          status: "great",
          date: "2013-05-05T15:30:00",
          replay: "th10_ud0042.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 978791150,
          status: "good",
          date: "2013-03-26T15:30:00",
          replay: "th10_ud0046.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1086394820,
          status: "great",
          date: "2012-10-18T15:30:00",
          replay: "th11_ud0034.rpy",
          detail: "-",
        },
      },
    },
    kedama: {
      th06: {
        ReimuA: {
          score: 509464630,
          status: "good",
          date: "2023-08-30T15:30:00",
          replay: "th6_ud0067.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 551927260,
          status: "great",
          date: "2023-08-30T15:30:00",
          replay: "th6_ud0089.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 505577120,
          status: "good",
          date: "2023-08-30T15:30:00",
          replay: "th6_ud0070.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 562040090,
          status: "great",
          date: "2023-08-30T15:30:00",
          replay: "th6_ud0084.rpy",
          detail: "-",
        },
      },
    },
    kag: {
      th07Ph: {
        ReimuB: {
          score: 1411802930,
          status: "good",
          date: "2009-07-01T15:30:00",
          replay: "th7_ud1045.rpy",
          detail: "-",
        },
      },
    },
    katu: {
      th12: {
        SanaeB: {
          score: 698827590,
          status: "great",
          date: "2011-09-30T15:30:00",
          replay: null,
          detail: "2011年9月4週",
        },
      },
    },
    keen: {
      th06: {
        MarisaB: {
          score: 527569310,
          status: "good",
          date: "2008-11-24T15:30:00",
          replay: "th6_ud0052.rpy",
          detail: "-",
        },
      },
    },
    kisara: {
      th07Ph: {
        ReimuA: {
          score: 1305552080,
          status: "good",
          date: "2012-06-19T15:30:00",
          replay: "th7_ud1064.rpy",
          detail: "-",
        },
      },
      th15: {
        Reimu: {
          score: 928380670,
          status: "great",
          date: "2017-03-04T15:30:00",
          replay: "th15_ud0006.rpy",
          detail: "-",
        },
        Marisa: {
          score: 923555520,
          status: "great",
          date: "2016-05-12T15:30:00",
          replay: "th15_ud0007.rpy",
          detail: "-",
        },
        Sanae: {
          score: 1009636890,
          status: "excellent",
          date: "2017-03-14T15:30:00",
          replay: "th15_ud0002.rpy",
          detail: "-",
        },
        Reisen: {
          score: 1016971530,
          status: "excellent",
          date: "2016-06-12T15:30:00",
          replay: "th15_ud0001.rpy",
          detail: "-",
        },
      },
    },
    kkkn: {
      th128: {
        Cirno: {
          score: 100160720,
          status: "excellent",
          date: "2023-08-08T15:30:00",
          replay: "th128_ud0003.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 3048832530,
          status: "excellent",
          date: "2020-01-21T15:30:00",
          replay: "th16_ud0048.rpy",
          detail: "-",
        },
      },
      th17: {
        MarisaO: {
          score: 2015744690,
          status: "great",
          date: "2019-08-30T15:30:00",
          replay: "th17_ud0012.rpy",
          detail: "-",
        },
      },
    },
    KMK: {
      th14: {
        MarisaB: {
          score: 1011820090,
          status: "good",
          date: "2014-02-07T15:30:00",
          replay: "th14_ud0035.rpy",
          detail: "-",
        },
      },
    },
    koske: {
      th10: {
        ReimuA: {
          score: 955962400,
          status: "good",
          date: "2012-04-17T15:30:00",
          replay: "th10_ud0115.rpy",
          detail: "-",
        },
      },
    },
    krr: {
      th12: {
        SanaeB: {
          score: 679847440,
          status: "great",
          date: "2011-09-30T15:30:00",
          replay: null,
          detail: "2011年9月4週",
        },
      },
    },
    kurezo: {
      th10: {
        ReimuA: {
          score: 980056650,
          status: "great",
          date: "2009-05-12T15:30:00",
          replay: "th10_ud0044.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 979478550,
          status: "good",
          date: "2008-11-21T15:30:00",
          replay: "th10_ud0045.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1040216960,
          status: "good",
          date: "2008-11-10T15:30:00",
          replay: "th11_ud0061.rpy",
          detail: "-",
        },
      },
    },
    kuro: {
      th12: {
        ReimuA: {
          score: 639431090,
          status: "great",
          date: "2015-08-06T15:30:00",
          replay: "th12_ud0036.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 527497000,
          status: "good",
          date: "2011-08-31T15:30:00",
          replay: null,
          detail: "2011年8月2週",
        },
        MarisaB: {
          score: 632809400,
          status: "great",
          date: "2015-09-27T15:30:00",
          replay: "th12_ud0118.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 584441750,
          status: "good",
          date: "2013-06-05T15:30:00",
          replay: "th12_ud0071.rpy",
          detail: "-",
        },
      },
    },
    KURO: {
      th07Ph: {
        ReimuB: {
          score: 1418850490,
          status: "good",
          date: "2009-05-24T15:30:00",
          replay: "th7_ud1043.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1327493190,
          status: "good",
          date: "2009-04-19T15:30:00",
          replay: "th7_ud1054.rpy",
          detail: "-",
        },
      },
    },
    kuro19: {
      th128: {
        Cirno: {
          score: 95941710,
          status: "great",
          date: "2011-07-29T15:30:00",
          replay: "th128_ud0006.rpy",
          detail: "-",
        },
      },
    },
    kuro_38: {
      th07Ph: {
        ReimuB: {
          score: 1404055010,
          status: "good",
          date: "2018-07-15T15:30:00",
          replay: "th7_ud1046.rpy",
          detail: "-",
        },
      },
    },
    KYM: {
      th14: {
        MarisaB: {
          score: 1067085910,
          status: "good",
          date: "2016-05-10T15:30:00",
          replay: "th14_ud0024.rpy",
          detail: "-",
        },
      },
    },
    LAHsty: {
      th07Ex: {
        ReimuA: {
          score: 1237229180,
          status: "good",
          date: "2006-09-30T15:30:00",
          replay: null,
          detail: "2006年9月3週",
        },
        ReimuB: {
          score: 1246494810,
          status: "good",
          date: "2008-12-28T15:30:00",
          replay: "th7_ud0040.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1416757840,
          status: "good",
          date: "2007-02-22T15:30:00",
          replay: "th7_ud1044.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1315654510,
          status: "good",
          date: "2006-09-28T15:30:00",
          replay: "th7_ud1060.rpy",
          detail: "-",
        },
      },
    },
    Len: {
      th06: {
        MarisaB: {
          score: 508213720,
          status: "good",
          date: "2007-04-09T15:30:00",
          replay: "th6_ud0069.rpy",
          detail: "-",
        },
      },
    },
    LET: {
      th08: {
        Border: {
          score: 2624654270,
          status: "good",
          date: "2007-12-28T15:30:00",
          replay: "th8_ud0045.rpy",
          detail: "-",
        },
        Magic: {
          score: 2556875270,
          status: "good",
          date: "2006-02-19T15:30:00",
          replay: "th8_ud0048.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 2501123270,
          status: "good",
          date: "2006-02-20T15:30:00",
          replay: "th8_ud0057.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 2530283450,
          status: "good",
          date: "2006-02-23T15:30:00",
          replay: "th8_ud0052.rpy",
          detail: "-",
        },
        Reimu: {
          score: 2501958550,
          status: "good",
          date: "2025-06-06T15:30:00",
          replay: "th8_ud0056.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2639609600,
          status: "good",
          date: "2021-05-02T15:30:00",
          replay: "th8_ud0042.rpy",
          detail: "-",
        },
      },
    },
    Levea: {
      th08: {
        Netherworld: {
          score: 3024418500,
          status: "excellent",
          date: "2023-03-28T15:30:00",
          replay: "th8_ud0027.rpy",
          detail: "-",
        },
      },
    },
    lia: {
      th12: {
        SanaeB: {
          score: 554451910,
          status: "good",
          date: "2010-01-20T15:30:00",
          replay: "th12_ud0077.rpy",
          detail: "-",
        },
      },
    },
    "Lily m3": {
      th11: {
        ReimuA: {
          score: 1030810930,
          status: "good",
          date: "2009-09-26T15:30:00",
          replay: "th11_ud0072.rpy",
          detail: "-",
        },
      },
    },
    Lim: {
      th11: {
        ReimuA: {
          score: 1074884280,
          status: "great",
          date: "2010-05-15T15:30:00",
          replay: "th11_ud0037.rpy",
          detail: "-",
        },
      },
    },
    lmky: {
      th20: {
        MarisaY2: {
          score: 659061280,
          status: "good",
          date: "2025-09-12T15:30:00",
          replay: "th20_ud0016.rpy",
          detail: "PIV fix",
        },
      },
    },
    Lorenzo: {
      th12: {
        ReimuA: {
          score: 677050230,
          status: "great",
          date: "2026-05-28T15:30:00",
          replay: "th12_ud0142.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 637570100,
          status: "great",
          date: "2025-05-02T15:30:00",
          replay: "th12_ud0038.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 701301150,
          status: "excellent",
          date: "2023-08-06T15:30:00",
          replay: "th12_ud0008.rpy",
          detail: "-",
        },
      },
      th128: {
        Cirno: {
          score: 94708820,
          status: "good",
          date: "2026-03-11T15:30:00",
          replay: "th128_ud0016.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1116144650,
          status: "great",
          date: "2026-04-20T15:30:00",
          replay: "th14_ud0089.rpy",
          detail: "-",
        },
      },
      th15: {
        Reisen: {
          score: 754597450,
          status: "good",
          date: "2026-06-26T15:30:00",
          replay: "th15_ud0047.rpy",
          detail: "-",
        },
      },
    },
    lot: {
      th12: {
        MarisaA: {
          score: 532609470,
          status: "good",
          date: "2011-06-05T15:30:00",
          replay: "th12_ud0092.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 500323530,
          status: "good",
          date: "2011-05-01T15:30:00",
          replay: "th12_ud0110.rpy",
          detail: "-",
        },
      },
    },
    lua: {
      th07Ex: {
        ReimuB: {
          score: 1449881250,
          status: "excellent",
          date: "2024-07-07T15:30:00",
          replay: "th7_ud0008.rpy",
          detail: "-",
        },
      },
    },
    LYX: {
      th10: {
        ReimuA: {
          score: 957494910,
          status: "good",
          date: "2009-04-04T15:30:00",
          replay: "th10_ud0106.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 981720940,
          status: "great",
          date: "2007-10-16T15:30:00",
          replay: "th10_ud0041.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuB: {
          score: 762237990,
          status: "good",
          date: "2022-08-31T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaA: {
          score: 765467890,
          status: "good",
          date: "2022-08-21T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        SakuyaA: {
          score: 826846180,
          status: "great",
          date: "2022-09-19T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        SakuyaB: {
          score: 891349080,
          status: "excellent",
          date: "2022-08-05T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    "M@": {
      th10: {
        ReimuA: {
          score: 974223650,
          status: "good",
          date: "2011-09-18T15:30:00",
          replay: "th10_ud0056.rpy",
          detail: "-",
        },
      },
    },
    MACOTO: {
      th14: {
        MarisaB: {
          score: 1059274780,
          status: "good",
          date: "2016-05-07T15:30:00",
          replay: "th14_ud0025.rpy",
          detail: "-",
        },
      },
    },
    mael: {
      th07Ex: {
        MarisaA: {
          score: 1256644060,
          status: "good",
          date: "2006-05-28T15:30:00",
          replay: "th7_ud0049.rpy",
          detail: "-",
        },
      },
    },
    Marbles: {
      th14: {
        MarisaB: {
          score: 1188407970,
          status: "great",
          date: "2026-04-06T15:30:00",
          replay: "th14_ud0086.rpy",
          detail: "-",
        },
      },
    },
    "Maribel Hearn": {
      th06: {
        MarisaB: {
          score: 502276420,
          status: "good",
          date: "2017-03-04T15:30:00",
          replay: "th6_ud0076.rpy",
          detail: "-",
        },
      },
      th13: {
        Marisa: {
          score: 537659780,
          status: "good",
          date: "2019-12-22T15:30:00",
          replay: "th13_ud0030.rpy",
          detail: "-",
        },
      },
    },
    Marisa: {
      th14: {
        MarisaB: {
          score: 1260747270,
          status: "excellent",
          date: "2025-05-15T15:30:00",
          replay: "th14_ud0001.rpy",
          detail: "-",
        },
      },
    },
    maru3: {
      th10: {
        ReimuB: {
          score: 951962560,
          status: "good",
          date: "2012-07-08T15:30:00",
          replay: "th10_ud0126.rpy",
          detail: "-",
        },
      },
    },
    maruku: {
      th08: {
        Youmu: {
          score: 2988004160,
          status: "great",
          date: "2007-08-11T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    MASA: {
      th14: {
        MarisaB: {
          score: 1120777740,
          status: "great",
          date: "2015-01-02T15:30:00",
          replay: "th14_ud0016.rpy",
          detail: "-",
        },
      },
    },
    May_lily: {
      th12: {
        SanaeB: {
          score: 669182310,
          status: "great",
          date: "2013-05-17T15:30:00",
          replay: "th12_ud0028.rpy",
          detail: "-",
        },
      },
    },
    MB: {
      th10: {
        ReimuB: {
          score: 975303690,
          status: "good",
          date: "2008-10-31T15:30:00",
          replay: null,
          detail: "2008年10月4週",
        },
      },
      th11: {
        ReimuA: {
          score: 1091342390,
          status: "great",
          date: "2019-01-31T15:30:00",
          replay: null,
          detail: "2009年1月1～2週",
        },
        MarisaA: {
          score: 1080545050,
          status: "great",
          date: "2009-01-18T15:30:00",
          replay: "th11_ud0020.rpy",
          detail: "-",
        },
      },
      th12: {
        ReimuA: {
          score: 626843550,
          status: "great",
          date: "2011-04-09T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    MDAL: {
      th10: {
        ReimuA: {
          score: 966772160,
          status: "good",
          date: "2007-10-21T15:30:00",
          replay: "th10_ud0070.rpy",
          detail: "-",
        },
      },
    },
    "Mechanical Lizard": {
      th06: {
        MarisaB: {
          score: 626763060,
          status: "excellent",
          date: "2026-03-22T15:30:00",
          replay: "th6_ud0104.rpy",
          detail: "-",
        },
      },
    },	
    mekemeke: {
      th10: {
        ReimuB: {
          score: 957815140,
          status: "good",
          date: "2012-03-03T15:30:00",
          replay: "th10_ud0104.rpy",
          detail: "-",
        },
      },
    },
    Melis: {
      th07Ex: {
        ReimuB: {
          score: 1224133600,
          status: "good",
          date: "2017-11-19T15:30:00",
          replay: "th7_ud0044.rpy",
          detail: "-",
        },
      },
    },
    mengo: {
      th12: {
        SanaeB: {
          score: 634714200,
          status: "great",
          date: "2017-08-04T15:30:00",
          replay: "th12_ud0040.rpy",
          detail: "-",
        },
      },
    },
    metal: {
      th10: {
        ReimuB: {
          score: 975272180,
          status: "good",
          date: "2008-03-19T15:30:00",
          replay: "th10_ud0053.rpy",
          detail: "-",
        },
      },
    },
    miluky: {
      th11: {
        ReimuA: {
          score: 1009494210,
          status: "good",
          date: "2009-06-19T15:30:00",
          replay: "th11_ud0113.rpy",
          detail: "-",
        },
      },
    },
    Mima: {
      th14: {
        MarisaB: {
          score: 1092368490,
          status: "good",
          date: "2016-06-12T15:30:00",
          replay: "th14_ud0020.rpy",
          detail: "-",
        },
      },
    },
    Mint: {
      th06: {
        MarisaB: {
          score: 571579450,
          status: "great",
          date: "2008-10-26T15:30:00",
          replay: "th6_ud0082.rpy",
          detail: "-",
        },
      },
    },
    Mistery: {
      th14: {
        MarisaB: {
          score: 1006992490,
          status: "good",
          date: "2025-10-15T15:30:00",
          replay: "th14_ud0070.rpy",
          detail: "-",
        },
      },
    },
    mk: {
      th10: {
        MarisaA: {
          score: 967819040,
          status: "good",
          date: "2009-01-24T15:30:00",
          replay: "th10_ud0020.rpy",
          detail: "-",
        },
      },
    },
    mkr: {
      th06: {
        MarisaB: {
          score: 505408690,
          status: "good",
          date: "2018-11-14T15:30:00",
          replay: "th6_ud0072.rpy",
          detail: "-",
        },
      },
    },
    "Moko Mope": {
      th16: {
        Reimu: {
          score: 3133527090,
          status: "excellent",
          date: "2022-12-18T15:30:00",
          replay: "th16_ud0013.rpy",
          detail: "-",
        },
        Cirno: {
          score: 3039375630,
          status: "excellent",
          date: "2022-11-28T15:30:00",
          replay: "th16_ud0014.rpy",
          detail: "-",
        },
        Aya: {
          score: 3037045430,
          status: "excellent",
          date: "2022-11-18T15:30:00",
          replay: "th16_ud0015.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3007342500,
          status: "excellent",
          date: "2022-11-29T15:30:00",
          replay: "th16_ud0016.rpy",
          detail: "-",
        },
      },
    },
    monkey: {
      th07Ph: {
        ReimuB: {
          score: 1423217660,
          status: "good",
          date: "2008-07-27T15:30:00",
          replay: "th7_ud1041.rpy",
          detail: "-",
        },
      },
    },
    morth: {
      th13: {
        Reimu: {
          score: 579189210,
          status: "great",
          date: "2021-07-21T15:30:00",
          replay: "th13_ud0012.rpy",
          detail: "-",
        },
        Marisa: {
          score: 664795430,
          status: "excellent",
          date: "2022-05-26T15:30:00",
          replay: "th13_ud0001.rpy",
          detail: "-",
        },
        Sanae: {
          score: 560674340,
          status: "great",
          date: "2021-05-12T15:30:00",
          replay: "th13_ud0022.rpy",
          detail: "-",
        },
        Youmu: {
          score: 631603380,
          status: "excellent",
          date: "2021-05-08T15:30:00",
          replay: "th13_ud0003.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuB: {
          score: 752768230,
          status: "good",
          date: "2023-04-20T15:30:00",
          replay: "th14_ud0051.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 759382180,
          status: "good",
          date: "2023-04-20T15:30:00",
          replay: "th14_ud0049.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1173863560,
          status: "great",
          date: "2023-04-20T15:30:00",
          replay: "th14_ud0011.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 792750400,
          status: "good",
          date: "2022-01-26T15:30:00",
          replay: "th14_ud0042.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 876669670,
          status: "excellent",
          date: "2022-04-22T15:30:00",
          replay: "th14_ud0039.rpy",
          detail: "-",
        },
      },
    },
    MOZAN: {
      th12: {
        SanaeB: {
          score: 542089160,
          status: "good",
          date: "2009-08-26T15:30:00",
          replay: "th12_ud0122.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 537619110,
          status: "good",
          date: "2012-01-14T15:30:00",
          replay: "th13_ud0031.rpy",
          detail: "-",
        },
      },
    },
    MTR: {
      th16: {
        Reimu: {
          score: 3089590190,
          status: "excellent",
          date: "2024-06-15T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Cirno: {
          score: 2087825070,
          status: "good",
          date: "2018-08-05T15:30:00",
          replay: "th16_ud0039.rpy",
          detail: "-",
        },
      },
    },
    mun: {
      th15: {
        Reimu: {
          score: 886316160,
          status: "good",
          date: "2017-02-23T15:30:00",
          replay: "th15_ud0023.rpy",
          detail: "-",
        },
      },
    },
    murei: {
      th12: {
        ReimuA: {
          score: 639847740,
          status: "great",
          date: "2026-05-01T15:30:00",
          replay: "th12_ud0138.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 687313540,
          status: "great",
          date: "2026-04-30T15:30:00",
          replay: "th12_ud0139.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 663005910,
          status: "great",
          date: "2026-05-06T15:30:00",
          replay: "th12_ud0140.rpy",
          detail: "-",
        },
      },
    },
    "MY^2": {
      th18: {
        Sakuya: {
          score: 5044048750,
          status: "good",
          date: "2021-05-23T15:30:00",
          replay: "th18_ud0006.rpy",
          detail: "-",
        },
      },
    },
    mys: {
      th16: {
        Reimu: {
          score: 2143910400,
          status: "good",
          date: "2017-09-22T15:30:00",
          replay: "th16_ud0037.rpy",
          detail: "-",
        },
      },
    },
    NAG: {
      th10: {
        ReimuA: {
          score: 952860940,
          status: "good",
          date: "2009-03-23T15:30:00",
          replay: "th10_ud0123.rpy",
          detail: "-",
        },
      },
    },
    NALIS: {
      th07Ex: {
        ReimuB: {
          score: 1329591520,
          status: "great",
          date: "2011-11-30T15:30:00",
          replay: null,
          detail: "2011年11月4週",
        },
        SakuyaB: {
          score: 1202340040,
          status: "good",
          date: "2011-08-31T15:30:00",
          replay: null,
          detail: "2011年8月1週",
        },
      },
    },
    NAPPA: {
      th11: {
        ReimuA: {
          score: 1036106460,
          status: "good",
          date: "2010-06-17T15:30:00",
          replay: "th11_ud0066.rpy",
          detail: "-",
        },
      },
    },
    Nereid: {
      th10: {
        ReimuA: {
          score: 959416410,
          status: "good",
          date: "2011-10-31T15:30:00",
          replay: null,
          detail: "2011年10月1週",
        },
      },
    },
    NIA: {
      th12: {
        ReimuA: {
          score: 594658180,
          status: "good",
          date: "2012-07-05T15:30:00",
          replay: "th12_ud0069.rpy",
          detail: "-",
        },
      },
    },
    NIL: {
      th12: {
        SanaeB: {
          score: 606507320,
          status: "great",
          date: "2010-06-22T15:30:00",
          replay: "th12_ud0060.rpy",
          detail: "-",
        },
      },
    },
    NKS: {
      th06: {
        MarisaB: {
          score: 505466330,
          status: "good",
          date: "2009-07-16T15:30:00",
          replay: "th6_ud0071.rpy",
          detail: "-",
        },
      },
    },
    NMST: {
      th11: {
        ReimuA: {
          score: 1005103990,
          status: "good",
          date: "2011-03-26T15:30:00",
          replay: "th11_ud0129.rpy",
          detail: "-",
        },
      },
    },
    "No Name": {
      th08: {
        Youmu: {
          score: 2532264780,
          status: "good",
          date: "2010-09-30T15:30:00",
          replay: null,
          detail: "2010年9月2週",
        },
      },
    },
    norn: {
      th20: {
        ReimuG1: {
          score: 832473500,
          status: "excellent",
          date: "2026-07-09T15:30:00",
          replay: "th20_ud0003.rpy",
          detail: "-",
        },
        ReimuY1: {
          score: 887147380,
          status: "excellent",
          date: "2026-06-25T15:30:00",
          replay: "th20_ud0085.rpy",
          detail: "-",
        },
      },
    },
    notbluebus: {
      th18: {
        Sakuya: {
          score: 7042051150,
          status: "great",
          date: "2026-06-30T15:30:00",
          replay: "th18_ud0051.rpy",
          detail: "-",
        },
      },
    },
    notlol: {
      th18: {
        Reimu: {
          score: 3481137180,
          status: "good",
          date: "2025-06-11T15:30:00",
          replay: "th18_ud0020.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3269976250,
          status: "good",
          date: "2025-06-01T15:30:00",
          replay: "th18_ud0022.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 6115987950,
          status: "good",
          date: "2024-09-02T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Sanae: {
          score: 3420354640,
          status: "good",
          date: "2025-06-08T15:30:00",
          replay: "th18_ud0021.rpy",
          detail: "-",
        },
      },
    },
    Novus: {
      th12: {
        MarisaA: {
          score: 603648920,
          status: "great",
          date: "2025-11-06T15:30:00",
          replay: "th12_ud0125.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 622852010,
          status: "great",
          date: "2026-02-24T15:30:00",
          replay: "th12_ud0130.rpy",
          detail: "-",
        },
      },
    },
    nnh: {
      th10: {
        MarisaB: {
          score: 964506520,
          status: "good",
          date: "2012-08-20T15:30:00",
          replay: "th10_ud0138.rpy",
          detail: "-",
        },
      },
    },
    Nylilsa: {
      th12: {
        ReimuA: {
          score: 590211840,
          status: "good",
          date: "2025-03-10T15:30:00",
          replay: null,
          detail: "-",
        },
      },
      th13: {
        Marisa: {
          score: 529117150,
          status: "good",
          date: "2023-06-17T15:30:00",
          replay: null,
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 823169540,
          status: "great",
          date: "2024-08-14T15:30:00",
          replay: "th14_ud0054.rpy",
          detail: "-",
        },
      },
    },
    OGA: {
      th11: {
        ReimuB: {
          score: 1009105560,
          status: "good",
          date: "2011-04-04T15:30:00",
          replay: "th11_ud0115.rpy",
          detail: "-",
        },
      },
    },
    OHMORI: {
      th10: {
        ReimuA: {
          score: 951772720,
          status: "good",
          date: "2010-04-01T15:30:00",
          replay: "th10_ud0127.rpy",
          detail: "-",
        },
      },
    },
    omega: {
      th12: {
        ReimuA: {
          score: 651364160,
          status: "great",
          date: "2013-07-23T15:30:00",
          replay: "th12_ud0032.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 615200470,
          status: "great",
          date: "2013-07-13T15:30:00",
          replay: "th12_ud0049.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 681606020,
          status: "great",
          date: "2013-09-09T15:30:00",
          replay: "th12_ud0019.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 630651970,
          status: "great",
          date: "2013-12-30T15:30:00",
          replay: "th12_ud0042.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 639197870,
          status: "great",
          date: "2013-11-01T15:30:00",
          replay: "th12_ud0037.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 712183120,
          status: "excellent",
          date: "2013-09-21T15:30:00",
          replay: "th12_ud0009.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 558906970,
          status: "great",
          date: "2012-10-22T15:30:00",
          replay: "th13_ud0024.rpy",
          detail: "-",
        },
        Marisa: {
          score: 590252710,
          status: "great",
          date: "2012-09-21T15:30:00",
          replay: "th13_ud0009.rpy",
          detail: "-",
        },
        Sanae: {
          score: 532111870,
          status: "good",
          date: "2012-12-04T15:30:00",
          replay: "th13_ud0032.rpy",
          detail: "-",
        },
        Youmu: {
          score: 603783460,
          status: "excellent",
          date: "2012-08-19T15:30:00",
          replay: "th13_ud0007.rpy",
          detail: "-",
        },
      },
    },
    OOSAKA: {
      th06: {
        ReimuA: {
          score: 629609710,
          status: "excellent",
          date: "2014-06-20T15:30:00",
          replay: "th6_ud0002.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 654356450,
          status: "excellent",
          date: "2018-01-20T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaA: {
          score: 641990230,
          status: "excellent",
          date: "2022-06-29T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaB: {
          score: 663244220,
          status: "excellent",
          date: "2015-02-21T15:30:00",
          replay: "th6_ud0016.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 957882520,
          status: "good",
          date: "2009-03-12T15:30:00",
          replay: "th10_ud0102.rpy",
          detail: "-",
        },
      },
    },
    OPON: {
      th13: {
        Reimu: {
          score: 551254140,
          status: "great",
          date: "2014-05-27T15:30:00",
          replay: "th13_ud0025.rpy",
          detail: "-",
        },
        Youmu: {
          score: 560768450,
          status: "great",
          date: "2014-05-16T15:30:00",
          replay: "th13_ud0021.rpy",
          detail: "-",
        },
      },
    },
    Oriens: {
      th11: {
        ReimuA: {
          score: 1124018370,
          status: "excellent",
          date: "2025-04-22T15:30:00",
          replay: "th11_ud0005.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1129180220,
          status: "excellent",
          date: "2026-06-03T15:30:00",
          replay: "th11_ud0172.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1012413380,
          status: "good",
          date: "2023-04-09T15:30:00",
          replay: null,
          detail: "-",
        },
        MarisaA: {
          score: 1017182820,
          status: "good",
          date: "2023-04-15T15:30:00",
          replay: null,
          detail: "-",
        },
        MarisaB: {
          score: 1011171940,
          status: "good",
          date: "2023-04-26T15:30:00",
          replay: null,
          detail: "-",
        },
        MarisaC: {
          score: 1009886400,
          status: "good",
          date: "2023-04-25T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    Oscar: {
      th06: {
        MarisaB: {
          score: 625363960,
          status: "excellent",
          date: "2026-03-23T15:30:00",
          replay: "th6_ud0105.rpy",
          detail: "-",
        },
      },
      th07Ex: {
        ReimuB: {
          score: 1330029230,
          status: "great",
          date: "2026-07-02T15:30:00",
          replay: "th7_ud0053.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        SakuyaB: {
          score: 1595560740,
          status: "great",
          date: "2025-10-13T15:30:00",
          replay: "th7_ud1068.rpy",
          detail: "-",
        },
      },
      th10: {
        MarisaC: {
          score: 1000346870,
          status: "excellent",
          date: "2026-07-09T15:30:00",
          replay: "th10_ud0152.rpy",
          detail: "-",
        },
      },
	  th11: {
        ReimuA: {
          score: 1100507180,
          status: "excellent",
          date: "2025-09-12T15:30:00",
          replay: "th11_ud0150.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 703570080,
          status: "excellent",
          date: "2026-03-28T15:30:00",
          replay: "th12_ud0133.rpy",
          detail: "-",
        },
      },
      th13: {
        Marisa: {
          score: 607782530,
          status: "excellent",
          date: "2026-03-24T15:30:00",
          replay: "th13_ud0045.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1237516020,
          status: "excellent",
          date: "2026-04-08T15:30:00",
          replay: "th14_ud0083.rpy",
          detail: "-",
        },
      },
      th15: {
        Reimu: {
          score: 1200861530,
          status: "excellent",
          date: "2026-05-23T15:30:00",
          replay: "th15_ud0046.rpy",
          detail: "-",
        },
        Marisa: {
          score: 1089965340,
          status: "excellent",
          date: "2026-03-13T15:30:00",
          replay: "th15_ud0033.rpy",
          detail: "-",
        },
        Sanae: {
          score: 1123059680,
          status: "excellent",
          date: "2026-03-18T15:30:00",
          replay: "th15_ud0034.rpy",
          detail: "-",
        },
        Reisen: {
          score: 1218834790,
          status: "excellent",
          date: "2026-04-25T15:30:00",
          replay: "th15_ud0039.rpy",
          detail: "-",
        },
      },
      th16: {
        Aya: {
          score: 3047130690,
          status: "excellent",
          date: "2026-02-15T15:30:00",
          replay: "th16_ud0055.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1821991320,
          status: "excellent",
          date: "2026-03-25T15:30:00",
          replay: "th17_ud0077.rpy",
          detail: "-",
        },
        ReimuE: {
          score: 1805917360,
          status: "excellent",
          date: "2026-03-25T15:30:00",
          replay: "th17_ud0080.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2791861080,
          status: "excellent",
          date: "2026-02-04T15:30:00",
          replay: "th17_ud0060.rpy",
          detail: "-",
        },
        YoumuE: {
          score: 1649393610,
          status: "excellent",
          date: "2026-03-25T15:30:00",
          replay: "th17_ud0081.rpy",
          detail: "-",
        },
      },
      th18: {
        Sanae: {
          score: 4001389960,
          status: "excellent",
          date: "2026-02-21T15:30:00",
          replay: "th18_ud0028.rpy",
          detail: "-",
        },
      },
    },
    OYM: {
      th11: {
        ReimuA: {
          score: 1034623660,
          status: "good",
          date: "2011-10-28T15:30:00",
          replay: "th11_ud0067.rpy",
          detail: "-",
        },
      },
    },
    PARU: {
      th11: {
        ReimuA: {
          score: 1019339100,
          status: "good",
          date: "2009-05-10T15:30:00",
          replay: "th11_ud0093.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 558641310,
          status: "good",
          date: "2012-12-10T15:30:00",
          replay: "th12_ud0076.rpy",
          detail: "-",
        },
      },
    },
    Payne: {
      th10: {
        ReimuA: {
          score: 962925440,
          status: "good",
          date: "2009-05-03T15:30:00",
          replay: "th10_ud0081.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1044068190,
          status: "good",
          date: "2009-01-22T15:30:00",
          replay: "th11_ud0057.rpy",
          detail: "-",
        },
      },
    },
    "pdh enjoyer": {
      th128: {
        Cirno: {
          score: 90142100,
          status: "good",
          date: "2026-04-07T15:30:00",
          replay: "th128_ud0017.rpy",
          detail: "-",
        },
      },
    },
    Pearl: {
      th06: {
        MarisaB: {
          score: 516775830,
          status: "good",
          date: "2025-01-06T15:30:00",
          replay: "th6_ud0097.rpy",
          detail: "-",
        },
      },
    },
    Phar: {
      th10: {
        ReimuA: {
          score: 983372440,
          status: "great",
          date: "2009-08-03T15:30:00",
          replay: "th10_ud0038.rpy",
          detail: "-",
        },
      },
    },
    purple: {
      th11: {
        ReimuA: {
          score: 1032339650,
          status: "good",
          date: "2016-03-11T15:30:00",
          replay: "th11_ud0069.rpy",
          detail: "-",
        },
      },
    },
    Qronism: {
      th10: {
        MarisaA: {
          score: 958738980,
          status: "good",
          date: "2008-05-18T15:30:00",
          replay: "th10_ud0097.rpy",
          detail: "-",
        },
      },
    },
    QsyaN: {
      th10: {
        ReimuA: {
          score: 956259070,
          status: "good",
          date: "2009-06-11T15:30:00",
          replay: "th10_ud0113.rpy",
          detail: "-",
        },
      },
    },
    R24: {
      th11: {
        MarisaA: {
          score: 1025496560,
          status: "good",
          date: "2026-05-14T15:30:00",
          replay: "th11_ud0173.rpy",
          detail: "-",
        },
      },
    },
	"R/": {
      th07Ph: {
        ReimuB: {
          score: 1355766970,
          status: "good",
          date: "2004-02-09T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    Radet: {
      th06: {
        MarisaB: {
          score: 584527580,
          status: "great",
          date: "2019-12-21T15:30:00",
          replay: "th6_ud0029.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1077701790,
          status: "good",
          date: "2013-08-23T15:30:00",
          replay: "th14_ud0023.rpy",
          detail: "-",
        },
      },
    },
    rafin: {
      th07Ph: {
        ReimuB: {
          score: 1509272800,
          status: "great",
          date: "2008-03-07T15:30:00",
          replay: "th7_ud1035.rpy",
          detail: "-",
        },
      },
    },
    Raharl: {
      th06: {
        ReimuB: {
          score: 536008990,
          status: "good",
          date: "2010-10-05T15:30:00",
          replay: "th6_ud0045.rpy",
          detail: "-",
        },
      },
    },
    Random: {
      th08: {
        Alice: {
          score: 1821528370,
          status: "good",
          date: "2012-04-15T15:30:00",
          replay: "th8_ud0073.rpy",
          detail: "-",
        },
      },
    },
    raiu: {
      th12: {
        SanaeB: {
          score: 506790060,
          status: "good",
          date: "2011-11-18T15:30:00",
          replay: "th12_ud0108.rpy",
          detail: "-",
        },
      },
    },
    raiuraiu: {
      th10: {
        ReimuA: {
          score: 973019240,
          status: "good",
          date: "2010-06-30T15:30:00",
          replay: null,
          detail: "2010年6月4週",
        },
      },
    },
    "Raymario Pokénic": {
      th14: {
        MarisaB: {
          score: 1056133020,
          status: "good",
          date: "2020-11-26T15:30:00",
          replay: "th14_ud0026.rpy",
          detail: "-",
        },
      },
    },
    Rb: {
      th06: {
        MarisaB: {
          score: 573453620,
          status: "great",
          date: "2009-07-12T15:30:00",
          replay: "th6_ud0080.rpy",
          detail: "-",
        },
      },
    },
    RB: {
      th14: {
        ReimuA: {
          score: 813712140,
          status: "great",
          date: "2023-06-26T15:30:00",
          replay: "th14_ud0055.rpy",
          detail: "-",
        },
      },
      th18: {
        Marisa: {
          score: 3794145150,
          status: "great",
          date: "2022-03-24T15:30:00",
          replay: "th18_ud0014.rpy",
          detail: "-",
        },
      },
    },
    rei: {
      th14: {
        MarisaB: {
          score: 1127796090,
          status: "great",
          date: "2016-03-13T15:30:00",
          replay: "th14_ud0014.rpy",
          detail: "-",
        },
      },
    },
    'Reima.H':{
      th14: {
        MarisaB: {
          score: 1168673370,
          status: "great",
          date: "2026-06-30T15:30:00",
          replay: "th14_ud0097.rpy",
          detail: "-",
        },
      },
    },
    Rem: {
      th10: {
        ReimuA: {
          score: 960497890,
          status: "good",
          date: "2010-01-02T15:30:00",
          replay: "th10_ud0088.rpy",
          detail: "-",
        },
      },
    },
    Reprise: {
      th06: {
        MarisaB: {
          score: 513237810,
          status: "good",
          date: "2009-01-30T15:30:00",
          replay: "th6_ud0063.rpy",
          detail: "-",
        },
      },
    },
    rikue471: {
      th11: {
        ReimuA: {
          score: 1001364970,
          status: "good",
          date: "2020-04-21T15:30:00",
          replay: "th11_ud0138.rpy",
          detail: "-",
        },
      },
    },
    Rix: {
      th11: {
        ReimuA: {
          score: 1032773790,
          status: "good",
          date: "2010-08-26T15:30:00",
          replay: "th11_ud0068.rpy",
          detail: "-",
        },
      },
    },
    Riz: {
      th12: {
        ReimuB: {
          score: 615909690,
          status: "great",
          date: "2015-11-16T15:30:00",
          replay: "th12_ud0119.rpy",
          detail: "-",
        },
      },
    },
    Roby: {
      th12: {
        ReimuA: {
          score: 530622760,
          status: "good",
          date: "2025-03-20T15:30:00",
          replay: null,
          detail: "-",
        },
      },
      th15: {
        Reimu: {
          score: 909597600,
          status: "great",
          date: "2025-06-16T15:30:00",
          replay: "th15_ud0009.rpy",
          detail: "-",
        },
      },
    },
    ROLL: {
      th07Ph: {
        ReimuB: {
          score: 1304527100,
          status: "good",
          date: "2012-01-31T15:30:00",
          replay: "th7_ud1065.rpy",
          detail: "-",
        },
      },
    },
    ROMAS: {
      th11: {
        ReimuA: {
          score: 1020124590,
          status: "good",
          date: "2013-07-13T15:30:00",
          replay: "th11_ud0088.rpy",
          detail: "-",
        },
      },
    },
    ROS: {
      th06: {
        MarisaB: {
          score: 531081720,
          status: "good",
          date: "2009-05-31T15:30:00",
          replay: null,
          detail: "2009年5月4週",
        },
      },
    },
    rose: {
      th12: {
        ReimuA: {
          score: 528917010,
          status: "good",
          date: "2013-05-11T15:30:00",
          replay: "th12_ud0094.rpy",
          detail: "-",
        },
      },
    },
    RPRB: {
      th18: {
        Sakuya: {
          score: 5489680910,
          status: "good",
          date: "2021-07-19T15:30:00",
          replay: "th18_ud0005.rpy",
          detail: "-",
        },
      },
    },
    rrrrrrrr: {
      th07Ex: {
        SakuyaA: {
          score: 1221832860,
          status: "good",
          date: "2008-08-31T15:30:00",
          replay: null,
          detail: "2008年8月4週",
        },
      },
    },
    Ryo: {
      th10: {
        ReimuA: {
          score: 953468670,
          status: "good",
          date: "2011-02-12T15:30:00",
          replay: "th10_ud0122.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1014382170,
          status: "good",
          date: "2010-02-26T15:30:00",
          replay: "th11_ud0103.rpy",
          detail: "-",
        },
      },
    },
    "S.K": {
      th10: {
        ReimuA: {
          score: 982860250,
          status: "great",
          date: "2025-04-08T15:30:00",
          replay: "th10_ud0151.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 988576860,
          status: "great",
          date: "2026-03-03T15:30:00",
          replay: "th10_ud0148.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 982323290,
          status: "great",
          date: "2026-02-23T15:30:00",
          replay: "th10_ud0146.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 984809160,
          status: "great",
          date: "2026-04-01T15:30:00",
          replay: "th10_ud0150.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 980756170,
          status: "great",
          date: "2026-03-18T15:30:00",
          replay: "th10_ud0149.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1000974370,
          status: "excellent",
          date: "2026-01-17T15:30:00",
          replay: "th10_ud0145.rpy",
          detail: "-",
        },
      },
    },
    SaiTO: {
      th14: {
        MarisaB: {
          score: 1051353980,
          status: "good",
          date: "2016-05-05T15:30:00",
          replay: "th14_ud0027.rpy",
          detail: "-",
        },
      },
    },
    Sakurei: {
      th08: {
        Youmu: {
          score: 3178460830,
          status: "excellent",
          date: "2022-06-21T15:30:00",
          replay: "th8_ud0078.rpy",
          detail: "-",
        },
      },
    },
    Satis: {
      th128: {
        Cirno: {
          score: 91730550,
          status: "good",
          date: "2017-03-02T15:30:00",
          replay: "th128_ud0022.rpy",
          detail: "-",
        },
      },
    },
    SEA: {
      th13: {
        Youmu: {
          score: 573745800,
          status: "great",
          date: "2011-09-13T15:30:00",
          replay: "th13_ud0040.rpy",
          detail: "-",
        },
      },
    },
    serenity: {
      th14: {
        MarisaB: {
          score: 1028974710,
          status: "good",
          date: "2026-03-20T15:30:00",
          replay: "th14_ud0081.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3007426210,
          status: "good",
          date: "2026-02-23T15:30:00",
          replay: "th18_ud0031.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3330081540,
          status: "good",
          date: "2026-06-16T15:30:00",
          replay: "th18_ud0048.rpy",
          detail: "-",
        },
      },
    },
    SeunKey: {
      th07Ph: {
        ReimuB: {
          score: 1326147420,
          status: "good",
          date: "2005-11-25T15:30:00",
          replay: "th7_ud1055.rpy",
          detail: "-",
        },
      },
    },
    seventh: {
      th10: {
        ReimuA: {
          score: 986510810,
          status: "great",
          date: "2017-11-25T15:30:00",
          replay: "th10_ud0028.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 995609930,
          status: "great",
          date: "2017-07-23T15:30:00",
          replay: "th10_ud0007.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 993681350,
          status: "great",
          date: "2010-08-02T15:30:00",
          replay: "th10_ud0011.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 990867060,
          status: "great",
          date: "2017-08-13T15:30:00",
          replay: "th10_ud0016.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 988226530,
          status: "great",
          date: "2018-08-12T15:30:00",
          replay: "th10_ud0024.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1002420580,
          status: "excellent",
          date: "2018-09-03T15:30:00",
          replay: "th10_ud0002.rpy",
          detail: "-",
        },
      },
    },
    shigure: {
      th10: {
        ReimuB: {
          score: 978037330,
          status: "good",
          date: "2008-12-06T15:30:00",
          replay: "th10_ud0047.rpy",
          detail: "-",
        },
      },
    },
    shin: {
      th06: {
        ReimuB: {
          score: 521089490,
          status: "good",
          date: "2009-04-27T15:30:00",
          replay: "th6_ud0057.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1004793000,
          status: "good",
          date: "2008-10-13T15:30:00",
          replay: "th11_ud0130.rpy",
          detail: "-",
        },
      },
    },
    ShiN: {
      th07Ph: {
        ReimuB: {
          score: 1348938660,
          status: "good",
          date: "2012-04-20T15:30:00",
          replay: "th7_ud1050.rpy",
          detail: "-",
        },
      },
    },
    shobonzdc: {
      th07Ph: {
        ReimuB: {
          score: 1321935220,
          status: "good",
          date: "2026-06-01T15:30:00",
          replay: "th7_ud1070.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1003113320,
          status: "good",
          date: "2025-11-21T15:30:00",
          replay: "th11_ud0162.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1013929180,
          status: "good",
          date: "2026-04-18T15:30:00",
          replay: "th14_ud0088.rpy",
          detail: "-",
        },	
      },
    },
    Sir雁木: {
      th06: {
        MarisaB: {
          score: 608183070,
          status: "excellent",
          date: "2015-03-29T15:30:00",
          replay: "th6_ud0024.rpy",
          detail: "-",
        },
      },
    },
    sirpion: {
      th10: {
        ReimuB: {
          score: 952763410,
          status: "good",
          date: "2025-11-08T15:30:00",
          replay: "th10_ud0144.rpy",
          detail: "-",
        },
      },
    },
    SK: {
      th11: {
        ReimuA: {
          score: 1018034010,
          status: "good",
          date: "2011-08-12T15:30:00",
          replay: "th11_ud0097.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 615029380,
          status: "great",
          date: "2011-08-11T15:30:00",
          replay: "th12_ud0050.rpy",
          detail: "-",
        },
      },
    },
    smilelkj: {
      th18: {
        Reimu: {
          score: 3713416670,
          status: "great",
          date: "2025-06-11T15:30:00",
          replay: "th18_ud0019.rpy",
          detail: "-",
        },
      },
    },
    SOC: {
      th12: {
        SanaeB: {
          score: 728529380,
          status: "excellent",
          date: "2017-10-22T15:30:00",
          replay: "th12_ud0003.rpy",
          detail: "-",
        },
      },
    },
    Sphere: {
      th10: {
        ReimuB: {
          score: 951700730,
          status: "good",
          date: "2009-02-28T15:30:00",
          replay: "th10_ud0128.rpy",
          detail: "-",
        },
      },
    },
    SR: {
      th10: {
        ReimuB: {
          score: 962442730,
          status: "good",
          date: "2008-05-10T15:30:00",
          replay: "th10_ud0082.rpy",
          detail: "-",
        },
      },
    },
    SRT: {
      th10: {
        ReimuA: {
          score: 959021870,
          status: "good",
          date: "2021-01-29T15:30:00",
          replay: "th10_ud0094.rpy",
          detail: "-",
        },
      },
    },
    stera: {
      th10: {
        ReimuB: {
          score: 965694930,
          status: "good",
          date: "2009-03-17T15:30:00",
          replay: "th10_ud0075.rpy",
          detail: "-",
        },
      },
    },
    STI: {
      th06: {
        MarisaB: {
          score: 531172150,
          status: "good",
          date: "2024-02-08T15:30:00",
          replay: "th6_ud0049.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuC: {
          score: 1056453880,
          status: "great",
          date: "2024-07-08T15:30:00",
          replay: "th11_ud0013.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1108671250,
          status: "excellent",
          date: "2024-06-30T15:30:00",
          replay: "th11_ud0021.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1060690130,
          status: "great",
          date: "2024-07-14T15:30:00",
          replay: "th11_ud0028.rpy",
          detail: "-",
        },
      },
      th13: {
        Marisa: {
          score: 547045360,
          status: "good",
          date: "2024-02-29T15:30:00",
          replay: "th13_ud0026.rpy",
          detail: "-",
        },
      },
    },
    SUKIMA: {
      th06: {
        MarisaB: {
          score: 592043080,
          status: "great",
          date: "2010-07-11T15:30:00",
          replay: "th6_ud0027.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1501016830,
          status: "great",
          date: "2008-10-13T15:30:00",
          replay: "th7_ud1037.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuB: {
          score: 990271160,
          status: "great",
          date: "2010-06-20T15:30:00",
          replay: "th10_ud0021.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1070411550,
          status: "great",
          date: "2009-01-18T15:30:00",
          replay: "th11_ud0039.rpy",
          detail: "-",
        },
      },
    },
    T: {
      th12: {
        ReimuA: {
          score: 647986940,
          status: "great",
          date: "2012-08-04T15:30:00",
          replay: "th12_ud0115.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 566200720,
          status: "great",
          date: "2013-09-01T15:30:00",
          replay: "th13_ud0037.rpy",
          detail: "-",
        },
        Marisa: {
          score: 575358540,
          status: "great",
          date: "2012-09-21T15:30:00",
          replay: "th13_ud0039.rpy",
          detail: "-",
        },
        Sanae: {
          score: 527881420,
          status: "good",
          date: "2012-07-01T15:30:00",
          replay: "th13_ud0038.rpy",
          detail: "-",
        },
      },
    },
    T3: {
      th06: {
        ReimuB: {
          score: 524923440,
          status: "good",
          date: "2012-04-19T15:30:00",
          replay: "th6_ud0054.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 580941290,
          status: "great",
          date: "2012-04-19T15:30:00",
          replay: "th6_ud0079.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuB: {
          score: 988582160,
          status: "great",
          date: "2012-04-19T15:30:00",
          replay: "th10_ud0023.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 993400310,
          status: "great",
          date: "2012-04-19T15:30:00",
          replay: "th10_ud0026.rpy",
          detail: "-",
        },
      },
    },
    t1100: {
      th08: {
        Youmu: {
          score: 3100836620,
          status: "excellent",
          date: "2016-09-19T15:30:00",
          replay: "th8_ud0025.rpy",
          detail: "-",
        },
      },
    },
    TA: {
      th06: {
        ReimuB: {
          score: 518002620,
          status: "good",
          date: "2010-07-08T15:30:00",
          replay: "th6_ud0058.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 513532640,
          status: "good",
          date: "2010-07-11T15:30:00",
          replay: "th6_ud0062.rpy",
          detail: "-",
        },
      },
    },
    tabi: {
      th10: {
        MarisaC: {
          score: 960683900,
          status: "good",
          date: "2007-12-09T15:30:00",
          replay: "th10_ud0087.rpy",
          detail: "-",
        },
      },
    },
    take4: {
      th10: {
        ReimuA: {
          score: 950942290,
          status: "good",
          date: "2013-09-16T15:30:00",
          replay: "th10_ud0130.rpy",
          detail: "-",
        },
      },
    },
    tatu: {
      th12: {
        ReimuA: {
          score: 506458510,
          status: "good",
          date: "2009-10-25T15:30:00",
          replay: "th12_ud0109.rpy",
          detail: "-",
        },
      },
    },
    TEN: {
      th11: {
        ReimuA: {
          score: 1031391630,
          status: "good",
          date: "2010-02-13T15:30:00",
          replay: "th11_ud0071.rpy",
          detail: "-",
        },
      },
    },
    TESLA: {
      th12: {
        SanaeB: {
          score: 535898150,
          status: "good",
          date: "2009-10-09T15:30:00",
          replay: "th12_ud0090.rpy",
          detail: "-",
        },
      },
    },
    thk573: {
      th14: {
        MarisaB: {
          score: 1042025810,
          status: "good",
          date: "2021-04-02T15:30:00",
          replay: "th14_ud0031.rpy",
          detail: "-",
        },
      },
    },
    "TOK@CHI": {
      th07Ex: {
        ReimuB: {
          score: 1274806880,
          status: "good",
          date: "2008-07-30T15:30:00",
          replay: null,
          detail: "2008年7月4週",
        },
      },
    },
    TOMOAKI: {
      th12: {
        SanaeB: {
          score: 514293780,
          status: "good",
          date: "2011-03-23T15:30:00",
          replay: "th12_ud0101.rpy",
          detail: "-",
        },
      },
    },
    tos: {
      th11: {
        ReimuA: {
          score: 1016200830,
          status: "good",
          date: "2013-02-16T15:30:00",
          replay: "th11_ud0144.rpy",
          detail: "-",
        },
      },
    },
    TOSH: {
      th128: {
        Cirno: {
          score: 94738120,
          status: "good",
          date: "2011-08-19T15:30:00",
          replay: "th128_ud0009.rpy",
          detail: "-",
        },
      },
    },
    Taprus: {
      th11: {
        ReimuA: {
          score: 1002045730,
          status: "good",
          date: "2025-09-10T15:30:00",
          replay: "th11_ud0155.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1214182770,
          status: "excellent",
          date: "2026-04-04T15:30:00",
          replay: "th14_ud0084.rpy",
          detail: "-",
        },
      },
    },
    TRDario:{
      th11: {
        ReimuA: {
          score: 1056636930,
          status: "great",
          date: "2025-10-07T15:30:00",
          replay: "th11_ud0156.rpy",
          detail: "-",
        },
	  },
      th14: {
        MarisaB: {
          score: 1201237920,
          status: "excellent",
          date: "2026-05-13T15:30:00",
          replay: "th14_ud0091.rpy",
          detail: "-",
        },
      },
    },
    TrickOfHat: {
      th06: {
        ReimuB: {
          score: 520842340,
          status: "good",
          date: "2022-07-02T15:30:00",
          replay: null,
          detail: "-",
        },
        MarisaB: {
          score: 503622300,
          status: "good",
          date: "2025-06-06T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    TSG: {
      th06: {
        MarisaB: {
          score: 564987840,
          status: "great",
          date: "2026-06-29T15:30:00",
          replay: "th6_ud0109.rpy",
          detail: "-",
        },
      th10: {
        ReimuA: {
          score: 974479160,
          status: "good",
          date: "2025-08-05T15:30:00",
          replay: "th10_ud0143.rpy",
          detail: "-",
        },
      },
      th17: {
        MarisaO: {
          score: 2303252170,
          status: "great",
          date: "2023-07-17T15:30:00",
          replay: "th17_ud0007.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 1834783090,
          status: "good",
          date: "2020-03-01T15:30:00",
          replay: "th17_ud0014.rpy",
          detail: "-",
        },
      },
      th18: {
        Sakuya: {
          score: 7125171680,
          status: "great",
          date: "2022-03-13T15:30:00",
          replay: "th18_ud0003.rpy",
          detail: "-",
        },
      },
    },
    tsuki: {
      th11: {
        ReimuA: {
          score: 1003236760,
          status: "good",
          date: "2008-09-19T15:30:00",
          replay: "th11_ud0134.rpy",
          detail: "-",
        },
      },
    },
    TYSI: {
      th07Ph: {
        ReimuB: {
          score: 1487572920,
          status: "good",
          date: "2007-01-31T15:30:00",
          replay: null,
          detail: "2007年1月1～2週",
        },
      },
    },
    unfair: {
      th10: {
        ReimuA: {
          score: 962256580,
          status: "good",
          date: "2010-04-02T15:30:00",
          replay: "th10_ud0084.rpy",
          detail: "-",
        },
      },
    },
    URARA: {
      th12: {
        SanaeB: {
          score: 550552180,
          status: "good",
          date: "2011-06-10T15:30:00",
          replay: "th12_ud0082.rpy",
          detail: "-",
        },
      },
    },
    USK: {
      th07Ex: {
        ReimuB: {
          score: 1228843090,
          status: "good",
          date: "2006-11-15T15:30:00",
          replay: "th7_ud0043.rpy",
          detail: "-",
        },
      },
    },
    Vrea: {
      th06: {
        ReimuB: {
          score: 528849980,
          status: "good",
          date: "2015-01-22T15:30:00",
          replay: "th6_ud0051.rpy",
          detail: "-",
        },
      },
    },
    VX: {
      th07Ph: {
        ReimuB: {
          score: 1364594660,
          status: "good",
          date: "2006-10-05T15:30:00",
          replay: "th7_ud1048.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1347620750,
          status: "good",
          date: "2006-09-19T15:30:00",
          replay: "th7_ud1014.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1315215660,
          status: "good",
          date: "2006-09-10T15:30:00",
          replay: "th7_ud1024.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1364860520,
          status: "good",
          date: "2007-02-12T15:30:00",
          replay: "th7_ud1047.rpy",
          detail: "-",
        },
      },
    },
    w1theR: {
      th12: {
        ReimuA: {
          score: 643182670,
          status: "great",
          date: "2026-04-29T15:30:00",
          replay: "th12_ud0136.rpy",
          detail: "-",
        },
      },
    },
    wal: {
      th11: {
        ReimuA: {
          score: 1061292790,
          status: "great",
          date: "2016-11-26T15:30:00",
          replay: "th11_ud0046.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 725648860,
          status: "excellent",
          date: "2017-06-30T15:30:00",
          replay: "th12_ud0004.rpy",
          detail: "-",
        },
      },
    },
    Watan: {
      th06: {
        MarisaA: {
          score: 610750670,
          status: "excellent",
          date: "2010-08-19T15:30:00",
          replay: "th6_ud0013.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 648082420,
          status: "excellent",
          date: "2010-11-18T15:30:00",
          replay: "th6_ud0017.rpy",
          detail: "-",
        },
      },
    },
    Waterricekiller: {
      th06: {
        ReimuB: {
          score: 513042270,
          status: "good",
          date: "2020-01-13T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    WDSea: {
      th13: {
        Youmu: {
          score: 504668780,
          status: "good",
          date: "2012-04-02T15:30:00",
          replay: "th13_ud0036.rpy",
          detail: "-",
        },
      },
    },
    wimirei: {
      th14: {
        MarisaB: {
          score: 1164776630,
          status: "great",
          date: "2026-05-27T15:30:00",
          replay: "th14_ud0092.rpy",
          detail: "-",
        },
      },
    },
    WingZero520: {
      th10: {
        MarisaC: {
          score: 956556200,
          status: "good",
          date: "2009-03-08T15:30:00",
          replay: "th10_ud0112.rpy",
          detail: "-",
        },
      },
    },
    wreath: {
      th10: {
        ReimuA: {
          score: 986075910,
          status: "great",
          date: "2012-03-12T15:30:00",
          replay: "th10_ud0029.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 995566970,
          status: "great",
          date: "2013-06-05T15:30:00",
          replay: "th10_ud0008.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 991157800,
          status: "great",
          date: "2011-04-15T15:30:00",
          replay: "th10_ud0013.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 990797120,
          status: "great",
          date: "2010-08-02T15:30:00",
          replay: "th10_ud0017.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 982177620,
          status: "great",
          date: "2011-07-04T15:30:00",
          replay: "th10_ud0040.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1002284650,
          status: "excellent",
          date: "2010-10-09T15:30:00",
          replay: "th10_ud0003.rpy",
          detail: "-",
        },
      },
    },
    XBH: {
      th13: {
        Marisa: {
          score: 623028030,
          status: "excellent",
          date: "2021-04-09T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Sanae: {
          score: 507448700,
          status: "good",
          date: "2017-02-15T15:30:00",
          replay: "th13_ud0035.rpy",
          detail: "-",
        },
      },
    },
    XJL: {
      th11: {
        ReimuA: {
          score: 1010801990,
          status: "good",
          date: "2011-08-05T15:30:00",
          replay: "th11_ud0110.rpy",
          detail: "-",
        },
      },
    },
    xrk: {
      th06: {
        ReimuB: {
          score: 552773940,
          status: "great",
          date: "2010-08-31T15:30:00",
          replay: null,
          detail: "2010年8月4週",
        },
      },
    },
    YABU: {
      th06: {
        MarisaB: {
          score: 501098260,
          status: "good",
          date: "2011-02-09T15:30:00",
          replay: "th6_ud0078.rpy",
          detail: "-",
        },
      },
      th08: {
        Border: {
          score: 2657021130,
          status: "good",
          date: "2011-03-18T15:30:00",
          replay: "th8_ud0033.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 2745122790,
          status: "good",
          date: "2010-10-13T15:30:00",
          replay: "th8_ud0030.rpy",
          detail: "-",
        },
        Yukari: {
          score: 1817410330,
          status: "good",
          date: "2010-08-09T15:30:00",
          replay: "th8_ud0067.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2549422900,
          status: "good",
          date: "2011-06-22T15:30:00",
          replay: "th8_ud0049.rpy",
          detail: "-",
        },
        Remilia: {
          score: 1822033810,
          status: "good",
          date: "2010-05-31T15:30:00",
          replay: null,
          detail: "2010年5月4週",
        },
        Youmu: {
          score: 2597230200,
          status: "good",
          date: "2010-06-30T15:30:00",
          replay: null,
          detail: "2010年6月3週",
        },
        Yuyuko: {
          score: 1977266880,
          status: "good",
          date: "2010-09-25T15:30:00",
          replay: "th8_ud0070.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 956742900,
          status: "good",
          date: "2010-06-15T15:30:00",
          replay: "th10_ud0111.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1031645050,
          status: "good",
          date: "2010-06-24T15:30:00",
          replay: "th11_ud0070.rpy",
          detail: "-",
        },
      },
    },
    yahoobb: {
      th16: {
        Cirno: {
          score: 2098351820,
          status: "good",
          date: "2018-01-07T15:30:00",
          replay: "th16_ud0038.rpy",
          detail: "-",
        },
        Aya: {
          score: 2085697440,
          status: "good",
          date: "2018-01-13T15:30:00",
          replay: "th16_ud0040.rpy",
          detail: "-",
        },
      },
    },
    YASU: {
      th08: {
        Border: {
          score: 2550614200,
          status: "good",
          date: "2006-02-19T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Magic: {
          score: 2667998370,
          status: "good",
          date: "2006-03-08T15:30:00",
          replay: "th8_ud0032.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 2532280780,
          status: "good",
          date: "2006-02-25T15:30:00",
          replay: "th8_ud0038.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2589768890,
          status: "good",
          date: "2010-08-13T15:30:00",
          replay: "th8_ud0047.rpy",
          detail: "-",
        },
      },
    },
    YDH: {
      th14: {
        MarisaB: {
          score: 1109453780,
          status: "great",
          date: "2021-04-11T15:30:00",
          replay: "th14_ud0062.rpy",
          detail: "-",
        },
      },
    },
    yeswill: {
      th08: {
        Magic: {
          score: 2741980300,
          status: "good",
          date: "2007-04-24T15:30:00",
          replay: "th8_ud0031.rpy",
          detail: "-",
        },
        Youmu: {
          score: 2958771750,
          status: "great",
          date: "2007-07-25T15:30:00",
          replay: "th8_ud0026.rpy",
          detail: "-",
        },
      },
    },
    YM: {
      th11: {
        ReimuA: {
          score: 1021348370,
          status: "good",
          date: "2012-03-01T15:30:00",
          replay: "th11_ud0085.rpy",
          detail: "-",
        },
      },
    },
    You: {
      th11: {
        ReimuA: {
          score: 1009381240,
          status: "good",
          date: "2011-10-26T15:30:00",
          replay: "th11_ud0114.rpy",
          detail: "-",
        },
      },
    },
    YS: {
      th06: {
        MarisaB: {
          score: 517007960,
          status: "good",
          date: "2010-03-26T15:30:00",
          replay: "th6_ud0061.rpy",
          detail: "-",
        },
      },
    },
    "Y.S": {
      th11: {
        ReimuA: {
          score: 1090464910,
          status: "great",
          date: "2013-07-17T15:30:00",
          replay: "th11_ud0033.rpy",
          detail: "-",
        },
      },
    },
    YSZK: {
      th11: {
        ReimuC: {
          score: 1000686060,
          status: "good",
          date: "2013-03-10T15:30:00",
          replay: "th11_ud0140.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 800680870,
          status: "great",
          date: "2017-07-29T15:30:00",
          replay: "th14_ud0041.rpy",
          detail: "-",
        },
      },
    },
    yuiel: {
      th10: {
        ReimuA: {
          score: 977518020,
          status: "good",
          date: "2020-10-12T15:30:00",
          replay: "th10_ud0048.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuB: {
          score: 1007328740,
          status: "good",
          date: "2020-10-12T15:30:00",
          replay: "th11_ud0122.rpy",
          detail: "-",
        },
      },
    },
    yukarin: {
      th11: {
        ReimuA: {
          score: 1056433100,
          status: "great",
          date: "2009-09-30T15:30:00",
          replay: null,
          detail: "2009年9月1週",
        },
      },
    },
    yuki: {
      th12: {
        ReimuA: {
          score: 533754870,
          status: "good",
          date: "2015-08-01T15:30:00",
          replay: "th12_ud0091.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 508481310,
          status: "good",
          date: "2015-08-24T15:30:00",
          replay: "th12_ud0105.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 536006290,
          status: "good",
          date: "2015-08-04T15:30:00",
          replay: "th12_ud0089.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 509017260,
          status: "good",
          date: "2015-08-08T15:30:00",
          replay: "th12_ud0104.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 509723090,
          status: "good",
          date: "2015-08-05T15:30:00",
          replay: "th12_ud0103.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 528553320,
          status: "good",
          date: "2015-08-01T15:30:00",
          replay: "th12_ud0095.rpy",
          detail: "-",
        },
      },
    },
    yume: {
      th10: {
        MarisaC: {
          score: 986073850,
          status: "great",
          date: "2011-03-08T15:30:00",
          replay: "th10_ud0030.rpy",
          detail: "-",
        },
      },
    },
    Yuriko: {
      th07Ph: {
        ReimuB: {
          score: 1480126460,
          status: "good",
          date: "2020-08-27T15:30:00",
          replay: "th7_ud1040.rpy",
          detail: "-",
        },
      },
    },
    Yyk: {
      th06: {
        MarisaB: {
          score: 552705160,
          status: "great",
          date: "2009-04-20T15:30:00",
          replay: "th6_ud0088.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1029943440,
          status: "good",
          date: "2009-03-17T15:30:00",
          replay: "th11_ud0073.rpy",
          detail: "-",
        },
      },
    },
    Zenmaister: {
      th10: {
        ReimuA: {
          score: 984145920,
          status: "great",
          date: "2025-06-11T15:30:00",
          replay: "th10_ud0037.rpy",
          detail: "-",
        },
      },
    },
    Zigzagwolf: {
      th14: {
        MarisaB: {
          score: 1015572990,
          status: "good",
          date: "2016-08-18T15:30:00",
          replay: "th14_ud0034.rpy",
          detail: "-",
        },
      },
    },
    zjt: {
      th11: {
        ReimuA: {
          score: 1000014490,
          status: "good",
          date: "2019-08-07T15:30:00",
          replay: "th11_ud0141.rpy",
          detail: "-",
        },
      },
    },
    ＥＢＩ: {
      th10: {
        ReimuB: {
          score: 967537530,
          status: "good",
          date: "2009-11-14T15:30:00",
          replay: "th10_ud0068.rpy",
          detail: "-",
        },
      },
    },
    ＥＳＣ: {
      th10: {
        ReimuA: {
          score: 962576640,
          status: "good",
          date: "2011-05-31T15:30:00",
          replay: null,
          detail: "2011年5月4週",
        },
      },
    },
    ＫＡＳＳ: {
      th12: {
        MarisaB: {
          score: 513745080,
          status: "good",
          date: "2009-09-22T15:30:00",
          replay: "th12_ud0102.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 532299220,
          status: "good",
          date: "2009-10-15T15:30:00",
          replay: "th12_ud0093.rpy",
          detail: "-",
        },
      },
    },
    "K・G": {
      th06: {
        ReimuB: {
          score: 510485380,
          status: "good",
          date: "2016-09-18T15:30:00",
          replay: "th6_ud0065.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 505301660,
          status: "good",
          date: "2015-01-21T15:30:00",
          replay: "th6_ud0073.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 960868520,
          status: "good",
          date: "2016-02-16T15:30:00",
          replay: "th10_ud0086.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 954410310,
          status: "good",
          date: "2016-06-04T15:30:00",
          replay: "th10_ud0118.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 965996030,
          status: "good",
          date: "2017-11-04T15:30:00",
          replay: "th10_ud0073.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1100554220,
          status: "excellent",
          date: "2019-07-24T15:30:00",
          replay: "th11_ud0031.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1045778130,
          status: "good",
          date: "2024-10-13T15:30:00",
          replay: "th11_ud0056.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1008935100,
          status: "good",
          date: "2016-05-21T15:30:00",
          replay: "th11_ud0116.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1100174720,
          status: "excellent",
          date: "2026-05-09T15:30:00",
          replay: "th11_ud0168.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1037096390,
          status: "good",
          date: "2020-05-14T15:30:00",
          replay: "th11_ud0065.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1008252680,
          status: "good",
          date: "2018-05-14T15:30:00",
          replay: "th11_ud0119.rpy",
          detail: "-",
        },
      },
      th12: {
        ReimuA: {
          score: 611086390,
          status: "great",
          date: "2014-06-18T15:30:00",
          replay: "th12_ud0054.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 540546990,
          status: "good",
          date: "2023-09-30T15:30:00",
          replay: "th12_ud0086.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 635333190,
          status: "great",
          date: "2023-09-30T15:30:00",
          replay: "th12_ud0039.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 605559990,
          status: "great",
          date: "2017-04-01T15:30:00",
          replay: "th12_ud0063.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 610641670,
          status: "great",
          date: "2023-09-30T15:30:00",
          replay: "th12_ud0055.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 701644660,
          status: "excellent",
          date: "2018-08-15T15:30:00",
          replay: "th12_ud0014.rpy",
          detail: "-",
        },
      },
      th128: {
        Cirno: {
          score: 90042950,
          status: "good",
          date: "2017-03-23T15:30:00",
          replay: "th128_ud0014.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 567754510,
          status: "great",
          date: "2021-03-22T15:30:00",
          replay: "th13_ud0019.rpy",
          detail: "-",
        },
        Marisa: {
          score: 609777820,
          status: "excellent",
          date: "2021-02-23T15:30:00",
          replay: "th13_ud0004.rpy",
          detail: "-",
        },
        Sanae: {
          score: 539213970,
          status: "good",
          date: "2021-03-10T15:30:00",
          replay: "th13_ud0029.rpy",
          detail: "-",
        },
        Youmu: {
          score: 606651730,
          status: "excellent",
          date: "2017-10-14T15:30:00",
          replay: "th13_ud0006.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 780112600,
          status: "good",
          date: "2023-04-20T15:30:00",
          replay: "th14_ud0044.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1203735700,
          status: "excellent",
          date: "2016-11-20T15:30:00",
          replay: "th14_ud0005.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 767279680,
          status: "good",
          date: "2022-01-26T15:30:00",
          replay: "th14_ud0048.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 816484120,
          status: "great",
          date: "2016-11-11T15:30:00",
          replay: "th14_ud0040.rpy",
          detail: "-",
        },
      },
      th15: {
        Reimu: {
          score: 809292250,
          status: "good",
          date: "2024-05-10T15:30:00",
          replay: "th15_ud0014.rpy",
          detail: "-",
        },
        Marisa: {
          score: 731624250,
          status: "good",
          date: "2025-05-18T15:30:00",
          replay: "th15_ud0021.rpy",
          detail: "-",
        },
        Sanae: {
          score: 790319250,
          status: "good",
          date: "2023-05-06T15:30:00",
          replay: "th15_ud0017.rpy",
          detail: "-",
        },
        Reisen: {
          score: 836991390,
          status: "good",
          date: "2024-05-06T15:30:00",
          replay: "th15_ud0012.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 2053360840,
          status: "good",
          date: "2023-08-14T15:30:00",
          replay: "th16_ud0043.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1383653020,
          status: "great",
          date: "2023-04-29T15:30:00",
          replay: "th17_ud0023.rpy",
          detail: "-",
        },
        ReimuE: {
          score: 1379151480,
          status: "great",
          date: "2023-04-30T15:30:00",
          replay: "th17_ud0024.rpy",
          detail: "-",
        },
        MarisaW: {
          score: 1199399640,
          status: "good",
          date: "2023-04-27T15:30:00",
          replay: "th17_ud0025.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2044820040,
          status: "great",
          date: "2023-04-22T15:30:00",
          replay: "th17_ud0009.rpy",
          detail: "-",
        },
        MarisaE: {
          score: 1150410950,
          status: "good",
          date: "2023-04-23T15:30:00",
          replay: "th17_ud0026.rpy",
          detail: "-",
        },
        YoumuW: {
          score: 1161941880,
          status: "good",
          date: "2023-04-25T15:30:00",
          replay: "th17_ud0027.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 2152018890,
          status: "great",
          date: "2023-05-07T15:30:00",
          replay: "th17_ud0008.rpy",
          detail: "-",
        },
        YoumuE: {
          score: 1118202850,
          status: "good",
          date: "2023-04-24T15:30:00",
          replay: "th17_ud0040.rpy",
          detail: "-",
        },
      },
      th18: {
        Marisa: {
          score: 3163509820,
          status: "good",
          date: "2022-12-25T15:30:00",
          replay: "th18_ud0023.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 5412611850,
          status: "good",
          date: "2023-08-14T15:30:00",
          replay: "th18_ud0013.rpy",
          detail: "-",
        },
      },
      th20: {
        MarisaG1: {
          score: 618984870,
          status: "good",
          date: "2026-04-10T15:30:00",
          replay: "th20_ud0064.rpy",
          detail: "-",
        },
      },
    },
    ｔｇ: {
      th14: {
        ReimuA: {
          score: 754161080,
          status: "good",
          date: "2014-04-28T15:30:00",
          replay: "th14_ud0050.rpy",
          detail: "-",
        },
      },
    },
    Ｓ２: {
      th06: {
        MarisaB: {
          score: 604187480,
          status: "excellent",
          date: "2009-10-23T15:30:00",
          replay: "th6_ud0025.rpy",
          detail: "-",
        },
      },
    },
    "２": {
      th12: {
        ReimuB: {
          score: 551408730,
          status: "good",
          date: "2010-06-12T15:30:00",
          replay: "th12_ud0080.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 601470080,
          status: "great",
          date: "2010-07-14T15:30:00",
          replay: "th12_ud0067.rpy",
          detail: "-",
        },
      },
    },
    あせび: {
      th14: {
        MarisaB: {
          score: 1227232520,
          status: "excellent",
          date: "2023-04-26T15:30:00",
          replay: "th14_ud0007.rpy",
          detail: "-",
        },
      },
    },
    あねみ: {
      th07Ph: {
        ReimuB: {
          score: 1415737210,
          status: "good",
          date: "2023-01-03T15:30:00",
          replay: null,
          detail: "-",
        },
      },
      th10: {
        MarisaC: {
          score: 1000000780,
          status: "excellent",
          date: "2022-03-09T15:30:00",
          replay: "th10_ud0139.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1114825350,
          status: "excellent",
          date: "2022-12-12T15:30:00",
          replay: "th11_ud0147.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1071865750,
          status: "great",
          date: "2020-11-23T15:30:00",
          replay: "th11_ud0009.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1054179620,
          status: "great",
          date: "2021-06-22T15:30:00",
          replay: "th11_ud0014.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1091925300,
          status: "great",
          date: "2022-06-13T15:30:00",
          replay: "th11_ud0019.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1082918330,
          status: "great",
          date: "2022-08-10T15:30:00",
          replay: "th11_ud0024.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1056154670,
          status: "great",
          date: "2022-05-05T15:30:00",
          replay: "th11_ud0030.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 701455630,
          status: "excellent",
          date: "2023-01-09T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    "あみじゃ+": {
      th10: {
        ReimuA: {
          score: 951962560,
          status: "good",
          date: "2010-03-31T15:30:00",
          replay: null,
          detail: "2010年3月2週",
        },
      },
    },
    いそじん: {
      th11: {
        ReimuA: {
          score: 1005562410,
          status: "good",
          date: "2011-07-13T15:30:00",
          replay: "th11_ud0126.rpy",
          detail: "-",
        },
      },
    },
    いな: {
      th07Ex: {
        ReimuA: {
          score: 1400641310,
          status: "excellent",
          date: "2017-09-10T15:30:00",
          replay: "th7_ud0001.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1504562180,
          status: "excellent",
          date: "2021-10-26T15:30:00",
          replay: "th7_ud0007.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1306020210,
          status: "great",
          date: "2025-03-18T15:30:00",
          replay: "th7_ud0011.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1244834970,
          status: "good",
          date: "2015-12-20T15:30:00",
          replay: "th7_ud0016.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1323591150,
          status: "great",
          date: "2018-06-16T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        SakuyaB: {
          score: 1430550290,
          status: "excellent",
          date: "2026-06-28T15:30:00",
          replay: "th7_ud0054.rpy",
          detail: "-",
        },
      },
    },
    いむ: {
      th10: {
        ReimuA: {
          score: 963419700,
          status: "good",
          date: "2010-11-13T15:30:00",
          replay: "th10_ud0080.rpy",
          detail: "-",
        },
      },
    },
    うどんしゅん: {
      th16: {
        Cirno: {
          score: 3011218850,
          status: "excellent",
          date: "2022-01-20T15:30:00",
          replay: "th16_ud0017.rpy",
          detail: "-",
        },
        Aya: {
          score: 3028954650,
          status: "excellent",
          date: "2022-01-19T15:30:00",
          replay: "th16_ud0018.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3028252130,
          status: "excellent",
          date: "2022-01-21T15:30:00",
          replay: "th16_ud0019.rpy",
          detail: "-",
        },
      },
    },
    えすか: {
      th11: {
        ReimuA: {
          score: 1012028160,
          status: "good",
          date: "2018-06-09T15:30:00",
          replay: "th11_ud0107.rpy",
          detail: "-",
        },
      },
    },
    えなめる: {
      th15: {
        Reimu: {
          score: 759793680,
          status: "good",
          date: "2015-09-23T15:30:00",
          replay: "th15_ud0019.rpy",
          detail: "-",
        },
        Marisa: {
          score: 715299120,
          status: "good",
          date: "2015-09-24T15:30:00",
          replay: "th15_ud0022.rpy",
          detail: "-",
        },
        Reisen: {
          score: 832106430,
          status: "good",
          date: "2015-09-21T15:30:00",
          replay: "th15_ud0013.rpy",
          detail: "-",
        },
      },
    },
    おいたん: {
      th11: {
        ReimuA: {
          score: 1135696210,
          status: "excellent",
          date: "2025-03-08T15:30:00",
          replay: "th11_ud0001.rpy",
          detail: "-",
        },
      },
    },
    おさらぎ: {
      th10: {
        MarisaC: {
          score: 1000325780,
          status: "excellent",
          date: "2016-11-18T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    おすろのこ: {
      th11: {
        ReimuA: {
          score: 1066819350,
          status: "great",
          date: "2025-02-06T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    おとど: {
      th13: {
        Youmu: {
          score: 587938010,
          status: "great",
          date: "2016-11-03T15:30:00",
          replay: "th13_ud0010.rpy",
          detail: "-",
        },
      },
    },
    おレモン: {
      th11: {
        ReimuA: {
          score: 1053167040,
          status: "great",
          date: "2019-05-09T15:30:00",
          replay: "th11_ud0049.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 2210837330,
          status: "good",
          date: "2019-03-24T15:30:00",
          replay: "th16_ud0034.rpy",
          detail: "-",
        },
      },
    },
    おんなのこ: {
      th10: {
        ReimuA: {
          score: 972231140,
          status: "good",
          date: "2025-09-23T15:30:00",
          replay: "th10_ud0142.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1002465090,
          status: "good",
          date: "2020-05-29T15:30:00",
          replay: "th11_ud0135.rpy",
          detail: "-",
        },
      },
    },
    がそりん: {
      th07Ph: {
        ReimuB: {
          score: 1334483640,
          status: "good",
          date: "2009-12-17T15:30:00",
          replay: "th7_ud1052.rpy",
          detail: "-",
        },
      },
      th128: {
        Cirno: {
          score: 100845160,
          status: "excellent",
          date: "2026-05-26T15:30:00",
          replay: "th128_ud0024.rpy",
          detail: "-",
        },
      },
    },
    かふか: {
      th07Ph: {
        ReimuB: {
          score: 1573517240,
          status: "great",
          date: "2011-10-30T15:30:00",
          replay: "th7_ud1009.rpy",
          detail: "-",
        },
      },
    },
    きゅーめい: {
      th06: {
        ReimuB: {
          score: 537864590,
          status: "good",
          date: "2009-01-18T15:30:00",
          replay: "th6_ud0042.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 975018860,
          status: "good",
          date: "2008-11-02T15:30:00",
          replay: "th10_ud0054.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 984954900,
          status: "great",
          date: "2009-05-18T15:30:00",
          replay: "th10_ud0034.rpy",
          detail: "-",
        },
      },
    },
    くどう: {
      th13: {
        Marisa: {
          score: 620130060,
          status: "excellent",
          date: "2022-06-03T15:30:00",
          replay: "th13_ud0008.rpy",
          detail: "-",
        },
      },
    },
    ぐるぼう: {
      th07Ex: {
        ReimuB: {
          score: 1238041760,
          status: "good",
          date: "2011-09-30T15:30:00",
          replay: null,
          detail: "2011年9月2週",
        },
      },
    },
    けいと: {
      th12: {
        ReimuA: {
          score: 601774970,
          status: "great",
          date: "2015-08-07T15:30:00",
          replay: "th12_ud0066.rpy",
          detail: "-",
        },
      },
      th13: {
        Reimu: {
          score: 559865500,
          status: "great",
          date: "2015-06-18T15:30:00",
          replay: "th13_ud0023.rpy",
          detail: "-",
        },
        Marisa: {
          score: 574358790,
          status: "great",
          date: "2015-06-26T15:30:00",
          replay: "th13_ud0015.rpy",
          detail: "-",
        },
        Sanae: {
          score: 507451140,
          status: "good",
          date: "2015-06-13T15:30:00",
          replay: "th13_ud0034.rpy",
          detail: "-",
        },
      },
    },
    こーりん: {
      th11: {
        ReimuA: {
          score: 1000728120,
          status: "good",
          date: "2018-12-11T15:30:00",
          replay: "th11_ud0139.rpy",
          detail: "-",
        },
      },
    },
    こあ: {
      th12: {
        SanaeB: {
          score: 560623620,
          status: "good",
          date: "2014-01-29T15:30:00",
          replay: "th12_ud0075.rpy",
          detail: "-",
        },
      },
    },
    "こてっち!!": {
      th11: {
        ReimuA: {
          score: 1029415110,
          status: "good",
          date: "2009-06-11T15:30:00",
          replay: "th11_ud0074.rpy",
          detail: "-",
        },
      },
    },
    ごぼう: {
      th06: {
        ReimuB: {
          score: 615965190,
          status: "excellent",
          date: "2025-05-30T15:30:00",
          replay: "th6_ud0021.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1084103090,
          status: "great",
          date: "2019-05-04T15:30:00",
          replay: "th11_ud0035.rpy",
          detail: "-",
        },
      },
    },
    こむそう: {
      th07Ex: {
        ReimuB: {
          score: 1226346200,
          status: "good",
          date: "2026-02-18T15:30:00",
          replay: "th7_ud0050.rpy",
          detail: "-",
        },
      },
    },
    ざざぼーん: {
      th13: {
        Youmu: {
          score: 545219570,
          status: "good",
          date: "2017-06-22T15:30:00",
          replay: "th13_ud0027.rpy",
          detail: "-",
        },
      },
    },
    さとりのメジロ: {
      th11: {
        ReimuA: {
          score: 1070114950,
          status: "great",
          date: "2021-12-02T15:30:00",
          replay: "th11_ud0041.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1025086640,
          status: "good",
          date: "2021-08-29T15:30:00",
          replay: "th11_ud0080.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1003261400,
          status: "good",
          date: "2021-09-06T15:30:00",
          replay: "th11_ud0133.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1021902940,
          status: "good",
          date: "2021-09-19T15:30:00",
          replay: "th11_ud0084.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1018710690,
          status: "good",
          date: "2021-09-06T15:30:00",
          replay: "th11_ud0095.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1010006890,
          status: "good",
          date: "2021-08-09T15:30:00",
          replay: "th11_ud0112.rpy",
          detail: "-",
        },
      },
    },
    じいさん: {
      th16: {
        Reimu: {
          score: 2011522930,
          status: "good",
          date: "2018-04-22T15:30:00",
          replay: "th16_ud0046.rpy",
          detail: "-",
        },
      },
    },
    しえすたチャンネル: {
      th10: {
        ReimuA: {
          score: 959328350,
          status: "good",
          date: "2021-01-29T15:30:00",
          replay: "th10_ud0092.rpy",
          detail: "-",
        },
      },
    },
    したじき: {
      th06: {
        ReimuB: {
          score: 522674610,
          status: "good",
          date: "2012-03-30T15:30:00",
          replay: "th6_ud0055.rpy",
          detail: "-",
        },
      },
    },
    しもしもしも: {
      th10: {
        ReimuB: {
          score: 967803700,
          status: "good",
          date: "2009-09-21T15:30:00",
          replay: "th10_ud0066.rpy",
          detail: "-",
        },
      },
    },
    すいれん: {
      th10: {
        ReimuA: {
          score: 984266660,
          status: "great",
          date: "2021-02-06T15:30:00",
          replay: "th10_ud0036.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 540727560,
          status: "good",
          date: "2013-08-05T15:30:00",
          replay: "th12_ud0085.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuW: {
          score: 1054209460,
          status: "good",
          date: "2020-08-23T15:30:00",
          replay: "th17_ud0031.rpy",
          detail: "-",
        },
        ReimuO: {
          score: 2479160420,
          status: "great",
          date: "2020-07-30T15:30:00",
          replay: "th17_ud0003.rpy",
          detail: "-",
        },
        MarisaW: {
          score: 1148007840,
          status: "good",
          date: "2020-04-19T15:30:00",
          replay: "th17_ud0032.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2774430020,
          status: "excellent",
          date: "2020-09-23T15:30:00",
          replay: "th17_ud0001.rpy",
          detail: "-",
        },
        YoumuW: {
          score: 1071337250,
          status: "good",
          date: "2020-04-18T15:30:00",
          replay: "th17_ud0041.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 2346367160,
          status: "great",
          date: "2019-11-30T15:30:00",
          replay: "th17_ud0006.rpy",
          detail: "-",
        },
      },
      th18: {
        Sakuya: {
          score: 6931475560,
          status: "good",
          date: "2021-08-22T15:30:00",
          replay: "th18_ud0004.rpy",
          detail: "-",
        },
      },
    },
    たなかさつ: {
      th12: {
        MarisaB: {
          score: 614010570,
          status: "great",
          date: "2011-03-28T15:30:00",
          replay: "th12_ud0052.rpy",
          detail: "-",
        },
      },
    },
    たろー: {
      th06: {
        ReimuA: {
          score: 517440800,
          status: "good",
          date: "2008-02-15T15:30:00",
          replay: "th6_ud0059.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1528586370,
          status: "great",
          date: "2008-05-10T15:30:00",
          replay: "th7_ud1032.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 974161940,
          status: "good",
          date: "2007-12-30T15:30:00",
          replay: "th10_ud0057.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 985820900,
          status: "great",
          date: "2007-12-11T15:30:00",
          replay: "th10_ud0032.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 990074570,
          status: "great",
          date: "2007-12-22T15:30:00",
          replay: "th10_ud0022.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1098956450,
          status: "great",
          date: "2008-11-21T15:30:00",
          replay: "th11_ud0032.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1001763180,
          status: "good",
          date: "2008-10-06T15:30:00",
          replay: "th11_ud0136.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1025315690,
          status: "good",
          date: "2008-10-12T15:30:00",
          replay: "th11_ud0079.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1062018710,
          status: "great",
          date: "2008-10-18T15:30:00",
          replay: "th11_ud0044.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1017550010,
          status: "good",
          date: "2008-10-02T15:30:00",
          replay: "th11_ud0098.rpy",
          detail: "-",
        },
      },
      th12: {
        ReimuA: {
          score: 600737850,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0068.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 508188950,
          status: "good",
          date: "2009-09-12T15:30:00",
          replay: "th12_ud0106.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 536549100,
          status: "good",
          date: "2009-09-13T15:30:00",
          replay: "th12_ud0088.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 526553320,
          status: "good",
          date: "2009-09-13T15:30:00",
          replay: "th12_ud0097.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 606211860,
          status: "great",
          date: "2009-10-18T15:30:00",
          replay: "th12_ud0061.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 703008050,
          status: "excellent",
          date: "2009-10-04T15:30:00",
          replay: "th12_ud0013.rpy",
          detail: "-",
        },
      },
      th13: {
        Youmu: {
          score: 571926350,
          status: "great",
          date: "2011-09-10T15:30:00",
          replay: "th13_ud0016.rpy",
          detail: "-",
        },
      },
    },
    てつの部屋: {
      th07Ph: {
        SakuyaB: {
          score: 1320623090,
          status: "good",
          date: "2010-08-01T15:30:00",
          replay: "th7_ud1058.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 642995700,
          status: "great",
          date: "2010-04-18T15:30:00",
          replay: "th12_ud0035.rpy",
          detail: "-",
        },
      },
    },
    とくそん: {
      th10: {
        MarisaC: {
          score: 976627020,
          status: "good",
          date: "2009-06-13T15:30:00",
          replay: "th10_ud0050.rpy",
          detail: "-",
        },
      },
    },
    とっくり: {
      th07Ph: {
        ReimuA: {
          score: 1373113670,
          status: "good",
          date: "2004-04-09T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        ReimuB: {
          score: 1432884780,
          status: "good",
          date: "2004-07-29T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    とん: {
      th11: {
        ReimuA: {
          score: 1038126130,
          status: "good",
          date: "2009-11-27T15:30:00",
          replay: "th11_ud0064.rpy",
          detail: "-",
        },
      },
    },
    ななまる: {
      th10: {
        ReimuA: {
          score: 987343680,
          status: "great",
          date: "2012-05-21T15:30:00",
          replay: "th10_ud0027.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1003229380,
          status: "excellent",
          date: "2012-06-28T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    にぼし: {
      th06: {
        ReimuA: {
          score: 521987940,
          status: "good",
          date: "2008-07-25T15:30:00",
          replay: "th6_ud0095.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 565070680,
          status: "great",
          date: "2008-07-22T15:30:00",
          replay: "th6_ud0093.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 541740150,
          status: "good",
          date: "2008-07-26T15:30:00",
          replay: "th6_ud0094.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 575153530,
          status: "great",
          date: "2006-02-23T15:30:00",
          replay: "th6_ud0092.rpy",
          detail: "-",
        },
      },
      th07Ex: {
        ReimuA: {
          score: 1367691480,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th7_ud0003.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1333426780,
          status: "great",
          date: "2025-11-10T15:30:00",
          replay: "th7_ud0052.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1234089110,
          status: "good",
          date: "2008-12-14T15:30:00",
          replay: "th7_ud0013.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1216258280,
          status: "good",
          date: "2008-12-10T15:30:00",
          replay: "th7_ud0018.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1264549750,
          status: "good",
          date: "2009-01-14T15:30:00",
          replay: "th7_ud0023.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1351758420,
          status: "great",
          date: "2008-12-05T15:30:00",
          replay: "th7_ud0028.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuA: {
          score: 1444178740,
          status: "good",
          date: "2010-07-17T15:30:00",
          replay: "th7_ud1003.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1617800080,
          status: "excellent",
          date: "2010-07-11T15:30:00",
          replay: "th7_ud1008.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1434787470,
          status: "good",
          date: "2010-07-08T15:30:00",
          replay: "th7_ud1013.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1321815630,
          status: "good",
          date: "2006-09-08T15:30:00",
          replay: "th7_ud1019.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1434152010,
          status: "good",
          date: "2010-07-21T15:30:00",
          replay: "th7_ud1023.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1514564150,
          status: "great",
          date: "2007-03-16T15:30:00",
          replay: "th7_ud1028.rpy",
          detail: "-",
        },
      },
    },
    にゃんこ: {
      th08: {
        Netherworld: {
          score: 2570645640,
          status: "good",
          date: "2025-08-01T15:30:00",
          replay: "th8_ud0077.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 984762400,
          status: "great",
          date: "2024-07-03T15:30:00",
          replay: null,
          detail: "リプレイ紛失",
        },
      },
      th11: {
        ReimuA: {
          score: 1005967030,
          status: "good",
          date: "2008-11-30T15:30:00",
          replay: null,
          detail: "2008年11月1週",
        },
        ReimuB: {
          score: 1016345360,
          status: "good",
          date: "2012-09-28T15:30:00",
          replay: "th11_ud0101.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1011877090,
          status: "good",
          date: "2012-09-29T15:30:00",
          replay: "th11_ud0108.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1019929710,
          status: "good",
          date: "2012-09-27T15:30:00",
          replay: "th11_ud0089.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1006600880,
          status: "good",
          date: "2012-09-28T15:30:00",
          replay: "th11_ud0124.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1007713930,
          status: "good",
          date: "2012-09-29T15:30:00",
          replay: "th11_ud0121.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3845087960,
          status: "great",
          date: "2025-06-28T15:30:00",
          replay: "th18_ud0009.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3857820910,
          status: "great",
          date: "2025-06-17T15:30:00",
          replay: "th18_ud0008.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3738774220,
          status: "great",
          date: "2025-06-07T15:30:00",
          replay: "th18_ud0018.rpy",
          detail: "-",
        },
      },
    },
    ぬまた: {
      th128: {
        Cirno: {
          score: 91055090,
          status: "good",
          date: "2024-09-16T15:30:00",
          replay: "th128_ud0015.rpy",
          detail: "-",
        },
      },
    },
    のっぽん: {
      th11: {
        ReimuA: {
          score: 1027323490,
          status: "good",
          date: "2019-05-04T15:30:00",
          replay: "th11_ud0077.rpy",
          detail: "-",
        },
      },
    },
    ばくだん: {
      th14: {
        MarisaB: {
          score: 1051321670,
          status: "good",
          date: "2015-02-12T15:30:00",
          replay: "th14_ud0028.rpy",
          detail: "-",
        },
      },
    },
    "はし＠水銀党": {
      th12: {
        SanaeB: {
          score: 515406430,
          status: "good",
          date: "2010-02-23T15:30:00",
          replay: "th12_ud0100.rpy",
          detail: "-",
        },
      },
    },
    はちじ: {
      th20: {
        ReimuY2: {
          score: 641531820,
          status: "good",
          date: "2026-05-15T15:30:00",
          replay: "th20_ud0074.rpy",
          detail: "-",
        },
        ReimuG1: {
          score: 626404460,
          status: "good",
          date: "2026-05-23T15:30:00",
          replay: "th20_ud0077.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 715489790,
          status: "great",
          date: "2026-05-12T15:30:00",
          replay: "th20_ud0073.rpy",
          detail: "-",
        },
      },
    },
	はやて: {
      th07Ex: {
        ReimuB: {
          score: 1247990590,
          status: "good",
          date: "2008-10-03T15:30:00",
          replay: "th7_ud0039.rpy",
          detail: "-",
        },
      },
    },
    はらぴょん: {
      th10: {
        ReimuA: {
          score: 984864880,
          status: "great",
          date: "2024-07-14T15:30:00",
          replay: "th10_ud0035.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1000943080,
          status: "excellent",
          date: "2025-07-03T15:30:00",
          replay: "th10_ud0005.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1041072410,
          status: "good",
          date: "2024-05-11T15:30:00",
          replay: "th11_ud0059.rpy",
          detail: "-",
        },
      },
    },
    はんぺん: {
      th20: {
        MarisaB2: {
          score: 622466090,
          status: "good",
          date: "2026-03-31T15:30:00",
          replay: "th20_ud0075.rpy",
          detail: "-",
        },
      },
    },
	ひなぶ: {
      th14: {
        MarisaB: {
          score: 1135071980,
          status: "great",
          date: "2013-08-24T15:30:00",
          replay: "th14_ud0013.rpy",
          detail: "-",
        },
      },
    },
    "ひろ♪☆": {
      th11: {
        ReimuA: {
          score: 1020252870,
          status: "good",
          date: "2019-04-21T15:30:00",
          replay: "th11_ud0087.rpy",
          detail: "-",
        },
      },
      th128: {
        Cirno: {
          score: 90413200,
          status: "good",
          date: "2021-03-05T15:30:00",
          replay: "th128_ud0013.rpy",
          detail: "-",
        },
      },
      th20: {
        MarisaB2: {
          score: 722328080,
          status: "great",
          date: "2025-10-09T15:30:00",
          replay: "th20_ud0009.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 769378540,
          status: "great",
          date: "2025-10-16T15:30:00",
          replay: "th20_ud0012.rpy",
          detail: "-",
        },
      },
    },
    ひろなex: {
      th11: {
        ReimuC: {
          score: 1018308530,
          status: "good",
          date: "2009-05-25T15:30:00",
          replay: "th11_ud0096.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1019753230,
          status: "good",
          date: "2009-06-23T15:30:00",
          replay: "th11_ud0090.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1014116190,
          status: "good",
          date: "2009-05-14T15:30:00",
          replay: "th11_ud0104.rpy",
          detail: "-",
        },
      },
    },
    ふすま: {
      th11: {
        ReimuA: {
          score: 1027931150,
          status: "good",
          date: "2021-08-30T15:30:00",
          replay: "th11_ud0076.rpy",
          detail: "-",
        },
      },
    },
    ふみさん: {
      th07Ph: {
        ReimuB: {
          score: 1310401640,
          status: "good",
          date: "2008-05-22T15:30:00",
          replay: "th7_ud1061.rpy",
          detail: "-",
        },
      },
    },
    ぶーる: {
      th12: {
        ReimuA: {
          score: 611796360,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0053.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 582691420,
          status: "good",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0073.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 602425140,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0065.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 588726150,
          status: "good",
          date: "2010-02-02T15:30:00",
          replay: "th12_ud0070.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 607609940,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0059.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 692455090,
          status: "great",
          date: "2011-09-23T15:30:00",
          replay: "th12_ud0017.rpy",
          detail: "-",
        },
      },
      th14: {
        SakuyaB: {
          score: 782148470,
          status: "good",
          date: "2013-08-31T15:30:00",
          replay: "th14_ud0043.rpy",
          detail: "-",
        },
      },
    },
    ぺろぺろ: {
      th06: {
        ReimuB: {
          score: 553233090,
          status: "great",
          date: "2011-01-31T15:30:00",
          replay: null,
          detail: "2011年1月1～2週",
        },
        MarisaA: {
          score: 530657650,
          status: "good",
          date: "2011-04-30T15:30:00",
          replay: null,
          detail: "2011年4月1週",
        },
        MarisaB: {
          score: 521318570,
          status: "good",
          date: "2009-11-30T15:30:00",
          replay: null,
          detail: "2009年11月3週",
        },
      },
    },
    ぺん太: {
      th06: {
        ReimuB: {
          score: 510166480,
          status: "good",
          date: "2011-06-05T15:30:00",
          replay: "th6_ud0066.rpy",
          detail: "-",
        },
      },
    },
    ほーし: {
      th10: {
        ReimuA: {
          score: 964944440,
          status: "good",
          date: "2012-03-01T15:30:00",
          replay: "th10_ud0077.rpy",
          detail: "-",
        },
      },
    },
    ほーらい: {
      th13: {
        Marisa: {
          score: 607790180,
          status: "excellent",
          date: "2024-04-22T15:30:00",
          replay: "th13_ud0005.rpy",
          detail: "-",
        },
      },
    },
    まさき: {
      th07Ex: {
        ReimuB: {
          score: 1222711850,
          status: "good",
          date: "2019-03-18T15:30:00",
          replay: "th7_ud0045.rpy",
          detail: "-",
        },
      },
    },
    まどか: {
      th06: {
        ReimuA: {
          score: 639939430,
          status: "excellent",
          date: "2018-02-02T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        ReimuB: {
          score: 682455900,
          status: "excellent",
          date: "2026-03-14T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaA: {
          score: 645089160,
          status: "excellent",
          date: "2018-06-10T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaB: {
          score: 676158100,
          status: "excellent",
          date: "2018-06-24T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
      th16: {
        Reimu: {
          score: 3252215310,
          status: "excellent",
          date: "2017-10-24T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Cirno: {
          score: 3005344670,
          status: "excellent",
          date: "2017-10-23T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Aya: {
          score: 3442485180,
          status: "excellent",
          date: "2018-10-21T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Marisa: {
          score: 3302327700,
          status: "excellent",
          date: "2018-10-22T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    まみまる: {
      th14: {
        MarisaB: {
          score: 1204019650,
          status: "excellent",
          date: "2024-02-15T15:30:00",
          replay: null,
          detail: "-",
        },
      },
    },
    みかみ: {
      th13: {
        Reimu: {
          score: 578830350,
          status: "great",
          date: "2021-05-10T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Marisa: {
          score: 616751980,
          status: "excellent",
          date: "2020-02-20T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        Sanae: {
          score: 538631060,
          status: "good",
          date: "2020-01-06T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    みすみ: {
      th08: {
        Netherworld: {
          score: 2624330780,
          status: "good",
          date: "2004-11-14T15:30:00",
          replay: "th8_ud0075.rpy",
          detail: "-",
        },
      },
    },
    みぞる: {
      th128: {
        Cirno: {
          score: 102027380,
          status: "excellent",
          date: "2020-06-20T15:30:00",
          replay: "th128_ud0001.rpy",
          detail: "-",
        },
      },
    },
    みみあて: {
      th12: {
        SanaeB: {
          score: 507047730,
          status: "good",
          date: "2009-09-22T15:30:00",
          replay: "th12_ud0107.rpy",
          detail: "-",
        },
      },
    },
    みやの: {
      th06: {
        ReimuB: {
          score: 533248410,
          status: "good",
          date: "2009-05-31T15:30:00",
          replay: null,
          detail: "2009年5月2週",
        },
      },
    },
    みょん吉: {
      th11: {
        ReimuA: {
          score: 1007236990,
          status: "good",
          date: "2019-04-15T15:30:00",
          replay: "th11_ud0123.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 3459416680,
          status: "excellent",
          date: "2022-04-07T15:30:00",
          replay: "th16_ud0008.rpy",
          detail: "-",
        },
        Cirno: {
          score: 3466214630,
          status: "excellent",
          date: "2022-04-17T15:30:00",
          replay: "th16_ud0007.rpy",
          detail: "-",
        },
        Aya: {
          score: 3485097930,
          status: "excellent",
          date: "2022-03-27T15:30:00",
          replay: "th16_ud0005.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3483906090,
          status: "excellent",
          date: "2022-04-09T15:30:00",
          replay: "th16_ud0006.rpy",
          detail: "-",
        },
      },
    },
    むいれ: {
      th12: {
        ReimuA: {
          score: 545668930,
          status: "good",
          date: "2011-03-09T15:30:00",
          replay: "th12_ud0083.rpy",
          detail: "-",
        },
      },
    },
    もこさめ: {
      th10: {
        ReimuC: {
          score: 974099630,
          status: "good",
          date: "2012-06-07T15:30:00",
          replay: "th10_ud0058.rpy",
          detail: "-",
        },
      },
    },
    もち: {
      th10: {
        MarisaC: {
          score: 963894910,
          status: "good",
          date: "2024-10-18T15:30:00",
          replay: "th10_ud0140.rpy",
          detail: "-",
        },
      },
    },
    もなか: {
      th10: {
        MarisaA: {
          score: 965844880,
          status: "good",
          date: "2009-09-11T15:30:00",
          replay: "th10_ud0074.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 980626840,
          status: "great",
          date: "2009-08-06T15:30:00",
          replay: "th10_ud0043.rpy",
          detail: "-",
        },
      },
    },
    もみぢ: {
      th10: {
        ReimuA: {
          score: 967612810,
          status: "good",
          date: "2011-12-08T15:30:00",
          replay: "th10_ud0067.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 543292850,
          status: "good",
          date: "2010-06-12T15:30:00",
          replay: "th12_ud0084.rpy",
          detail: "-",
        },
      },
    },
    もりそば: {
      th07Ex: {
        ReimuA: {
          score: 1241574150,
          status: "good",
          date: "2009-11-23T15:30:00",
          replay: "th7_ud0005.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1351277420,
          status: "great",
          date: "2009-11-22T15:30:00",
          replay: "th7_ud0032.rpy",
          detail: "-",
        },
      },
    },
    "ゆ～すけ": {
      th07Ex: {
        ReimuB: {
          score: 1509003300,
          status: "excellent",
          date: "2017-06-02T15:30:00",
          replay: "th7_ud0006.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuA: {
          score: 1580640510,
          status: "great",
          date: "2012-08-26T15:30:00",
          replay: "th7_ud1001.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 1727261160,
          status: "excellent",
          date: "2024-06-20T15:30:00",
          replay: "th7_ud1006.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1515839630,
          status: "great",
          date: "2014-11-09T15:30:00",
          replay: "th7_ud1011.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1507090340,
          status: "great",
          date: "2014-11-03T15:30:00",
          replay: "th7_ud1016.rpy",
          detail: "-",
        },
        SakuyaA: {
          score: 1524310930,
          status: "great",
          date: "2014-09-01T15:30:00",
          replay: "th7_ud1021.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 1671913330,
          status: "excellent",
          date: "2014-07-31T15:30:00",
          replay: "th7_ud1026.rpy",
          detail: "-",
        },
      },
    },
    ゆーみや: {
      th06: {
        MarisaA: {
          score: 530275520,
          status: "good",
          date: "2017-08-07T15:30:00",
          replay: "th6_ud0108.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1021123930,
          status: "good",
          date: "2019-01-03T15:30:00",
          replay: "th11_ud0086.rpy",
          detail: "-",
        },
      },
    },
    らおー: {
      th11: {
        ReimuA: {
          score: 1011853630,
          status: "good",
          date: "2011-10-31T15:30:00",
          replay: "th11_ud0109.rpy",
          detail: "-",
        },
      },
    },
    らぶか: {
      th10: {
        ReimuA: {
          score: 955849110,
          status: "good",
          date: "2021-05-09T15:30:00",
          replay: "th10_ud0116.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1017021820,
          status: "good",
          date: "2021-04-15T15:30:00",
          replay: "th11_ud0100.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 3282356430,
          status: "excellent",
          date: "2024-06-22T15:30:00",
          replay: "th16_ud0011.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2793935440,
          status: "great",
          date: "2024-08-04T15:30:00",
          replay: "th16_ud0012.rpy",
          detail: "-",
        },
      },
    },
    りぃふ: {
      th06: {
        ReimuB: {
          score: 521898670,
          status: "good",
          date: "2012-04-01T15:30:00",
          replay: "th6_ud0056.rpy",
          detail: "-",
        },
      },
    },
    れもな: { //lemona
      th06: {
        ReimuA: {
          score: 593348130,
          status: "great",
          date: "2024-06-22T15:30:00",
          replay: "th6_ud0005.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 622392030,
          status: "excellent",
          date: "2024-06-18T15:30:00",
          replay: "th6_ud0010.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 581367590,
          status: "great",
          date: "2024-06-23T15:30:00",
          replay: "th6_ud0015.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 639876670,
          status: "excellent",
          date: "2024-05-26T15:30:00",
          replay: "th6_ud0018.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 957023210,
          status: "good",
          date: "2021-03-06T15:30:00",
          replay: "th10_ud0108.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1012749860,
          status: "good",
          date: "2026-07-06T15:30:00",
          replay: "th14_ud0095.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 2305772560,
          status: "good",
          date: "2021-03-13T15:30:00",
          replay: "th16_ud0029.rpy",
          detail: "-",
        },
        Cirno: {
          score: 2670887210,
          status: "great",
          date: "2023-08-28T15:30:00",
          replay: "th16_ud0021.rpy",
          detail: "-",
        },
        Aya: {
          score: 2445244120,
          status: "good",
          date: "2021-03-13T15:30:00",
          replay: "th16_ud0023.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2322889190,
          status: "good",
          date: "2021-03-13T15:30:00",
          replay: "th16_ud0028.rpy",
          detail: "-",
        },
      },
      th17: {
        MarisaO: {
          score: 1556724350,
          status: "good",
          date: "2023-08-28T15:30:00",
          replay: "th17_ud0010.rpy",
          detail: "-",
        },
      },
    },
    わい: {
      th11: {
        ReimuA: {
          score: 1001742440,
          status: "good",
          date: "2009-01-01T15:30:00",
          replay: "th11_ud0137.rpy",
          detail: "-",
        },
      },
    },
    われもこう: {
      th11: {
        MarisaB: {
          score: 1014956760,
          status: "good",
          date: "2026-02-02T15:30:00",
          replay: "th11_ud0164.rpy",
          detail: "-",
        },
      },
    },
    わんわの: {
      th12: {
        MarisaA: {
          score: 646518120,
          status: "great",
          date: "2011-12-19T15:30:00",
          replay: "th12_ud0033.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 615662420,
          status: "great",
          date: "2012-02-09T15:30:00",
          replay: "th12_ud0048.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 629913430,
          status: "great",
          date: "2012-09-13T15:30:00",
          replay: "th12_ud0043.rpy",
          detail: "-",
        },
      },
    },
    アイスプライス: {
      th12: {
        ReimuA: {
          score: 575573290,
          status: "good",
          date: "2010-12-31T15:30:00",
          replay: null,
          detail: "2010年12月2週",
        },
        ReimuB: {
          score: 553817910,
          status: "good",
          date: "2012-04-25T15:30:00",
          replay: "th12_ud0078.rpy",
          detail: "-",
        },
      },
    },
    アベル: {
      th06: {
        ReimuB: {
          score: 532820260,
          status: "good",
          date: "2009-08-31T15:30:00",
          replay: null,
          detail: "2009年8月2週",
        },
      },
    },
    アラヤ: {
      th07Ph: {
        SakuyaB: {
          score: 1380734280,
          status: "good",
          date: "2009-03-04T15:30:00",
          replay: "th7_ud1030.rpy",
          detail: "-",
        },
      },
    },
    アリエス: {
      th06: {
        ReimuA: {
          score: 585761680,
          status: "great",
          date: "2012-07-30T15:30:00",
          replay: "th6_ud0028.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 958470950,
          status: "good",
          date: "2012-03-25T15:30:00",
          replay: "th10_ud0099.rpy",
          detail: "-",
        },
      },
    },
    エンプル: {
      th11: {
        ReimuA: {
          score: 1005203120,
          status: "good",
          date: "2017-09-17T15:30:00",
          replay: "th11_ud0128.rpy",
          detail: "-",
        },
      },
      th12: {
        MarisaA: {
          score: 582779030,
          status: "good",
          date: "2019-07-01T15:30:00",
          replay: "th12_ud0072.rpy",
          detail: "-",
        },
      },
      th16: {
        Cirno: {
          score: 2158531730,
          status: "good",
          date: "2018-06-24T15:30:00",
          replay: "th16_ud0036.rpy",
          detail: "-",
        },
        Aya: {
          score: 2074055840,
          status: "good",
          date: "2018-06-19T15:30:00",
          replay: "th16_ud0042.rpy",
          detail: "-",
        },
      },
    },
    ガンダールヴ: {
      th11: {
        ReimuA: {
          score: 1013198360,
          status: "good",
          date: "2009-06-26T15:30:00",
          replay: "th11_ud0105.rpy",
          detail: "-",
        },
      },
      th12: {
        SanaeB: {
          score: 625701590,
          status: "great",
          date: "2010-05-03T15:30:00",
          replay: "th12_ud0045.rpy",
          detail: "-",
        },
      },
    },
    ギョウちゃん: {
      th11: {
        ReimuA: {
          score: 1010158320,
          status: "good",
          date: "2019-05-14T15:30:00",
          replay: "th11_ud0111.rpy",
          detail: "-",
        },
      },
      th128: {
        Cirno: {
          score: 92569180,
          status: "good",
          date: "2017-04-14T15:30:00",
          replay: "th128_ud0010.rpy",
          detail: "-",
        },
      },
    },
    ゴッダ: {
      th12: {
        MarisaA: {
          score: 525504230,
          status: "good",
          date: "2010-02-21T15:30:00",
          replay: "th12_ud0098.rpy",
          detail: "-",
        },
      },
    },
    スイナ: {
      th06: {
        MarisaB: {
          score: 504052550,
          status: "good",
          date: "2008-03-03T15:30:00",
          replay: "th6_ud0075.rpy",
          detail: "-",
        },
      },
    },
    スタまつ: {
      th14: {
        MarisaB: {
          score: 1033836750,
          status: "good",
          date: "2015-07-29T15:30:00",
          replay: "th14_ud0033.rpy",
          detail: "-",
        },
      },
    },
    チョコ: {
      th06: {
        MarisaB: {
          score: 556253400,
          status: "great",
          date: "2009-02-28T15:30:00",
          replay: null,
          detail: "2009年2月2週",
        },
      },
    },
    チョリソー: {
      th07Ph: {
        ReimuB: {
          score: 1300398490,
          status: "good",
          date: "2008-02-20T15:30:00",
          replay: "th7_ud1066.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuB: {
          score: 969895810,
          status: "good",
          date: "2008-09-15T15:30:00",
          replay: "th10_ud0062.rpy",
          detail: "-",
        },
      },
    },
    テン: {
      th10: {
        ReimuB: {
          score: 982785170,
          status: "great",
          date: "2011-06-20T15:30:00",
          replay: "th10_ud0039.rpy",
          detail: "-",
        },
      },
    },
    ドラえもん太: {
      th06: {
        ReimuB: {
          score: 554645140,
          status: "great",
          date: "2009-01-31T15:30:00",
          replay: null,
          detail: "2009年1月1～2週",
        },
      },
      th10: {
        ReimuA: {
          score: 972696590,
          status: "good",
          date: "2008-08-31T15:30:00",
          replay: null,
          detail: "2008年8月2週",
        },
        ReimuB: {
          score: 986675210,
          status: "great",
          date: "2008-11-20T15:30:00",
          replay: "th10_ud0131.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 979554100,
          status: "good",
          date: "2009-03-31T15:30:00",
          replay: "th10_ud0132.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1082973210,
          status: "great",
          date: "2008-11-30T15:30:00",
          replay: null,
          detail: "2008年11月1週",
        },
      },
    },
    ナギマイ: {
      th08: {
        Scarlet: {
          score: 2565231200,
          status: "good",
          date: "2004-10-31T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
      },
    },
    ナヤ: {
      th06: {
        MarisaB: {
          score: 517195360,
          status: "good",
          date: "2009-01-16T15:30:00",
          replay: "th6_ud0060.rpy",
          detail: "-",
        },
      },
    },
    ニャムニャム: {
      th08: {
        Border: {
          score: 2649851390,
          status: "good",
          date: "2009-10-23T15:30:00",
          replay: "th8_ud0035.rpy",
          detail: "-",
        },
        Scarlet: {
          score: 2532529490,
          status: "good",
          date: "2009-10-10T15:30:00",
          replay: "th8_ud0037.rpy",
          detail: "-",
        },
        Netherworld: {
          score: 2691608320,
          status: "good",
          date: "2010-02-17T15:30:00",
          replay: "th8_ud0040.rpy",
          detail: "-",
        },
        Yukari: {
          score: 1866135310,
          status: "good",
          date: "2009-11-20T15:30:00",
          replay: "th8_ud0072.rpy",
          detail: "-",
        },
        Remilia: {
          score: 1949613690,
          status: "good",
          date: "2010-02-24T15:30:00",
          replay: null,
          detail: "2010年5月4週",
        },
        Youmu: {
          score: 2848766270,
          status: "great",
          date: "2009-11-28T15:30:00",
          replay: "th8_ud0029.rpy",
          detail: "-",
        },
        Yuyuko: {
          score: 1813178110,
          status: "good",
          date: "2009-08-21T15:30:00",
          replay: "th8_ud0074.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 965591520,
          status: "good",
          date: "2010-01-31T15:30:00",
          replay: null,
          detail: "2010年1月1～2週",
        },
      },
      th12: {
        ReimuA: {
          score: 670462130,
          status: "great",
          date: "2017-03-09T15:30:00",
          replay: "th12_ud0025.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 630584000,
          status: "great",
          date: "2016-08-22T15:30:00",
          replay: "th12_ud0026.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 736291170,
          status: "excellent",
          date: "2026-05-13T15:30:00",
          replay: "th12_ud0141.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 701703750,
          status: "excellent",
          date: "2025-06-25T15:30:00",
          replay: "th12_ud0114.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 653845970,
          status: "great",
          date: "2017-07-22T15:30:00",
          replay: "th12_ud0027.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 776144040,
          status: "excellent",
          date: "2022-04-04T15:30:00",
          replay: "th12_ud0001.rpy",
          detail: "-",
        },
      },
    },
    ハズレ: {
      th12: {
        ReimuA: {
          score: 572660180,
          status: "good",
          date: "2009-10-06T15:30:00",
          replay: "th12_ud0074.rpy",
          detail: "-",
        },
      },
    },
    ポンデスイカ: {
      th12: {
        ReimuA: {
          score: 606714600,
          status: "great",
          date: "2010-06-23T15:30:00",
          replay: "th12_ud0123.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 557010320,
          status: "good",
          date: "2010-06-30T15:30:00",
          replay: null,
          detail: "2010年6月4週",
        },
      },
    },
    マリオ課長: {
      th06: {
        MarisaB: {
          score: 565008750,
          status: "great",
          date: "2024-05-31T15:30:00",
          replay: "th6_ud0083.rpy",
          detail: "-",
        },
      },
      th07Ex: {
        ReimuB: {
          score: 1316039360,
          status: "great",
          date: "2024-07-12T15:30:00",
          replay: "th7_ud0033.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1321636140,
          status: "good",
          date: "2024-07-27T15:30:00",
          replay: "th7_ud1057.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 966332270,
          status: "good",
          date: "2023-09-06T15:30:00",
          replay: "th10_ud0071.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1052287370,
          status: "great",
          date: "2024-05-17T15:30:00",
          replay: "th11_ud0050.rpy",
          detail: "-",
        },
      },
      th15: {
        Reisen: {
          score: 775653470,
          status: "good",
          date: "2024-05-03T15:30:00",
          replay: "th15_ud0018.rpy",
          detail: "-",
        },
      },
    },
    ハスカール: {
      th10: {
        ReimuA: {
          score: 965290920,
          status: "good",
          date: "2010-08-28T15:30:00",
          replay: "th10_ud0076.rpy",
          detail: "-",
        },
      },
    },
    ハル義兄: {
      th11: {
        ReimuA: {
          score: 1025969460,
          status: "good",
          date: "2019-06-21T15:30:00",
          replay: "th11_ud0078.rpy",
          detail: "-",
        },
      },
    },
    ピンクだま: {
      th12: {
        MarisaA: {
          score: 680848870,
          status: "great",
          date: "2013-06-06T15:30:00",
          replay: "th12_ud0020.rpy",
          detail: "-",
        },
      },
    },
    ベアトリス: {
      th07Ex: {
        ReimuB: {
          score: 1242356400,
          status: "good",
          date: "2011-04-27T15:30:00",
          replay: "th7_ud0041.rpy",
          detail: "-",
        },
      },
    },
    ボニスト: {
      th128: {
        Cirno: {
          score: 92586540,
          status: "good",
          date: "2026-05-30T15:30:00",
          replay: "th128_ud0023.rpy",
          detail: "-",
        },
      },
      th20: {
        ReimuR1: {
          score: 675047940,
          status: "good",
          date: "2026-04-23T15:30:00",
          replay: "th20_ud0068.rpy",
          detail: "-",
        },
        ReimuG1: {
          score: 656088920,
          status: "good",
          date: "2026-05-23T15:30:00",
          replay: "th20_ud0076.rpy",
          detail: "-",
        },
        MarisaR2: {
          score: 724336570,
          status: "great",
          date: "2026-02-22T15:30:00",
          replay: "th20_ud0048.rpy",
          detail: "-",
        },
        MarisaB2: {
          score: 637931410,
          status: "good",
          date: "2026-04-22T15:30:00",
          replay: "th20_ud0067.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 609344340,
          status: "good",
          date: "2026-02-18T15:30:00",
          replay: "th20_ud0044.rpy",
          detail: "-",
        },
      },
    },
    メアSR: {
      th11: {
        ReimuB: {
          score: 1062510860,
          status: "great",
          date: "2011-05-27T15:30:00",
          replay: "th11_ud0043.rpy",
          detail: "-",
        },
        ReimuC: {
          score: 1047056920,
          status: "good",
          date: "2011-05-27T15:30:00",
          replay: "th11_ud0055.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 1079970870,
          status: "great",
          date: "2011-03-09T15:30:00",
          replay: "th11_ud0036.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1061622170,
          status: "great",
          date: "2011-02-14T15:30:00",
          replay: "th11_ud0045.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1042825630,
          status: "good",
          date: "2010-12-15T15:30:00",
          replay: "th11_ud0058.rpy",
          detail: "-",
        },
      },
    },
    モグ: {
      th06: {
        MarisaB: {
          score: 536665340,
          status: "good",
          date: "2008-03-19T15:30:00",
          replay: "th6_ud0043.rpy",
          detail: "-",
        },
      },
    },
    ヤエハ: {
      th12: {
        ReimuB: {
          score: 527775350,
          status: "good",
          date: "2011-02-23T15:30:00",
          replay: "th12_ud0096.rpy",
          detail: "-",
        },
      },
    },
    ラヴァル: {
      th12: {
        SanaeB: {
          score: 703659790,
          status: "excellent",
          date: "2012-05-10T15:30:00",
          replay: "th12_ud0012.rpy",
          detail: "-",
        },
      },
    },
    リデラ: {
      th12: {
        SanaeB: {
          score: 622837890,
          status: "great",
          date: "2009-09-14T15:30:00",
          replay: "th12_ud0047.rpy",
          detail: "-",
        },
      },
    },
    ロリー: {
      th13: {
        Youmu: {
          score: 567443980,
          status: "great",
          date: "2014-05-08T15:30:00",
          replay: "th13_ud0020.rpy",
          detail: "-",
        },
      },
    },
    ワカメスープ: {
      th16: {
        Reimu: {
          score: 2015919550,
          status: "good",
          date: "2021-05-20T15:30:00",
          replay: "th16_ud0045.rpy",
          detail: "-",
        },
      },
    },
    ﾍﾟﾍﾟﾍﾟ: {
      th11: {
        ReimuA: {
          score: 1016108710,
          status: "good",
          date: "2008-09-19T15:30:00",
          replay: "th11_ud0102.rpy",
          detail: "-",
        },
      },
    },
    案山子: {
      th10: {
        ReimuB: {
          score: 958903860,
          status: "good",
          date: "2009-02-04T15:30:00",
          replay: "th10_ud0095.rpy",
          detail: "-",
        },
      },
    },
    王可飞: {
      th14: {
        MarisaB: {
          score: 1086465390,
          status: "good",
          date: "2013-08-31T15:30:00",
          replay: "th14_ud0022.rpy",
          detail: "-",
        },
      },
    },
    岩魚穣娘: {
      th12: {
        ReimuA: {
          score: 671921550,
          status: "great",
          date: "2022-01-25T15:30:00",
          replay: "th12_ud0021.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 632257630,
          status: "great",
          date: "2022-01-12T15:30:00",
          replay: "th12_ud0022.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 720371100,
          status: "excellent",
          date: "2021-12-26T15:30:00",
          replay: "th12_ud0006.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 664423020,
          status: "great",
          date: "2021-12-18T15:30:00",
          replay: "th12_ud0023.rpy",
          detail: "-",
        },
        SanaeA: {
          score: 654737910,
          status: "great",
          date: "2021-12-09T15:30:00",
          replay: "th12_ud0024.rpy",
          detail: "-",
        },
        SanaeB: {
          score: 762165700,
          status: "excellent",
          date: "2022-01-30T15:30:00",
          replay: "th12_ud0002.rpy",
          detail: "-",
        },
      },
      th14: {
        MarisaB: {
          score: 1217785610,
          status: "excellent",
          date: "2023-05-05T15:30:00",
          replay: "th14_ud0008.rpy",
          detail: "-",
        },
      },
    },
    蚊: {
      th10: {
        ReimuA: {
          score: 957847150,
          status: "good",
          date: "2009-02-14T15:30:00",
          replay: "th10_ud0103.rpy",
          detail: "-",
        },
      },
    },
    霞音: {
      th06: {
        ReimuA: {
          score: 621344740,
          status: "excellent",
          date: "2013-04-05T15:30:00",
          replay: "th6_ud0003.rpy",
          detail: "-",
        },
      },
    },
    火力発電所: {
      th07Ph: {
        ReimuB: {
          score: 1354558990,
          status: "good",
          date: "2005-08-11T15:30:00",
          replay: "th7_ud1049.rpy",
          detail: "-",
        },
      },
    },
    宮燐: {
      th16: {
        Reimu: {
          score: 2413506730,
          status: "good",
          date: "2021-06-26T15:30:00",
          replay: "th16_ud0024.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2326749150,
          status: "good",
          date: "2021-07-31T15:30:00",
          replay: "th16_ud0027.rpy",
          detail: "-",
        },
      },
    },
    "源ノ壬 環": {
      th10: {
        ReimuB: {
          score: 956955690,
          status: "good",
          date: "2012-07-14T15:30:00",
          replay: "th10_ud0110.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1059595950,
          status: "great",
          date: "2014-02-07T15:30:00",
          replay: "th11_ud0048.rpy",
          detail: "-",
        },
      },
    },
    古明地筍: {
      th11: {
        ReimuA: {
          score: 1119679950,
          status: "excellent",
          date: "2025-04-29T15:30:00",
          replay: "th11_ud0145.rpy",
          detail: "-",
        },
      },
    },
    "工藤氏。": {
      th14: {
        MarisaB: {
          score: 1008315460,
          status: "good",
          date: "2026-01-22T15:30:00",
          replay: "th14_ud0074.rpy",
          detail: "-",
        },
      },
      th18: {
        Sakuya: {
          score: 6537459460,
          status: "good",
          date: "2026-05-28T15:30:00",
          replay: "th18_ud0044.rpy",
          detail: "-",
        },
      },
    },
    高槻やよい: {
      th07Ex: {
        ReimuB: {
          score: 1285756270,
          status: "good",
          date: "2008-10-30T15:30:00",
          replay: null,
          detail: "2008年10月4週",
        },
      },
    },
    黒砂糖: {
      th06: {
        ReimuB: {
          score: 531018780,
          status: "good",
          date: "2009-08-31T15:30:00",
          replay: null,
          detail: "2009年8月2週",
        },
        MarisaA: {
          score: 561570620,
          status: "great",
          date: "2009-11-30T15:30:00",
          replay: null,
          detail: "2009年11月3週",
        },
      },
    },
    紙G: {
      th07Ph: {
        ReimuB: {
          score: 1524825210,
          status: "great",
          date: "2008-03-14T15:30:00",
          replay: "th7_ud1033.rpy",
          detail: "-",
        },
      },
    },
    四季映夢: {
      th11: {
        ReimuA: {
          score: 1005386950,
          status: "good",
          date: "2019-01-27T15:30:00",
          replay: "th11_ud0127.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 2009442310,
          status: "good",
          date: "2019-02-07T15:30:00",
          replay: "th16_ud0047.rpy",
          detail: "-",
        },
      },
    },
    真黒: {
      th15: {
        Reimu: {
          score: 803551840,
          status: "good",
          date: "2017-12-21T15:30:00",
          replay: "th15_ud0015.rpy",
          detail: "-",
        },
        Marisa: {
          score: 798972690,
          status: "good",
          date: "2019-01-15T15:30:00",
          replay: "th15_ud0016.rpy",
          detail: "-",
        },
        Sanae: {
          score: 846931760,
          status: "good",
          date: "2018-10-06T15:30:00",
          replay: "th15_ud0011.rpy",
          detail: "-",
        },
        Reisen: {
          score: 905933460,
          status: "great",
          date: "2019-01-27T15:30:00",
          replay: "th15_ud0010.rpy",
          detail: "-",
        },
      },
    },
    織守: {
      th10: {
        ReimuA: {
          score: 975396300,
          status: "good",
          date: "2008-05-09T15:30:00",
          replay: "th10_ud0052.rpy",
          detail: "-",
        },
      },
    },
    七: {
      th08: {
        Border: {
          score: 2574898180,
          status: "good",
          date: "2009-07-31T15:30:00",
          replay: null,
          detail: "2009年7月1週",
        },
      },
    },
    朱鷺戸: {
      th10: {
        ReimuA: {
          score: 972535470,
          status: "good",
          date: "2009-05-31T15:30:00",
          replay: null,
          detail: "2009年5月2週",
        },
      },
    },
    将軍: {
      th10: {
        ReimuA: {
          score: 958404180,
          status: "good",
          date: "2016-08-22T15:30:00",
          replay: "th10_ud0101.rpy",
          detail: "-",
        },
      },
    },
    人識: {
      th08: {
        Youmu: {
          score: 2993248780,
          status: "great",
          date: "2010-03-31T15:30:00",
          replay: null,
          detail: "2010年3月2週",
        },
      },
    },
    水月: {
      th11: {
        ReimuA: {
          score: 1046329880,
          status: "good",
          date: "2009-02-28T15:30:00",
          replay: null,
          detail: "2009年2月3週",
        },
        ReimuB: {
          score: 1021562850,
          status: "good",
          date: "2009-02-07T15:30:00",
          replay: null,
          detail: "リプレイ不明",
        },
        MarisaB: {
          score: 1003793870,
          status: "good",
          date: "2008-11-11T15:30:00",
          replay: "th11_ud0143.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 1007752600,
          status: "good",
          date: "2009-02-28T15:30:00",
          replay: null,
          detail: "2009年2月2週",
        },
      },
      th12: {
        ReimuA: {
          score: 635654450,
          status: "great",
          date: "2011-12-06T15:30:00",
          replay: "th12_ud0116.rpy",
          detail: "-",
        },
        ReimuB: {
          score: 581531420,
          status: "good",
          date: "2009-10-30T15:30:00",
          replay: "th12_ud0121.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 640990180,
          status: "great",
          date: "2010-04-04T15:30:00",
          replay: "th12_ud0117.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 592074570,
          status: "good",
          date: "2010-03-12T15:30:00",
          replay: "th12_ud0120.rpy",
          detail: "-",
        },
      },
    },
    水性すらいむ: {
      th06: {
        MarisaB: {
          score: 620862040,
          status: "excellent",
          date: "2008-08-22T15:30:00",
          replay: "th6_ud0007.rpy",
          detail: "-",
        },
      },
      th07Ph: {
        ReimuB: {
          score: 1309066530,
          status: "good",
          date: "2008-02-23T15:30:00",
          replay: "th7_ud1062.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuA: {
          score: 952744390,
          status: "good",
          date: "2007-12-02T15:30:00",
          replay: "th10_ud0124.rpy",
          detail: "-",
        },
      },
      th11: {
        ReimuA: {
          score: 1039149500,
          status: "good",
          date: "2008-10-16T15:30:00",
          replay: "th11_ud0063.rpy",
          detail: "-",
        },
      },
    },
    "生きる化石『Ｔ』": {
      th07Ph: {
        ReimuB: {
          score: 1500239840,
          status: "great",
          date: "2007-03-05T15:30:00",
          replay: "th7_ud1038.rpy",
          detail: "-",
        },
      },
    },
    石田聖実: {
      th11: {
        ReimuA: {
          score: 1023863760,
          status: "good",
          date: "2008-10-29T15:30:00",
          replay: "th11_ud0082.rpy",
          detail: "-",
        },
      },
    },
    節水源一朗: {
      th20: {
        MarisaY2: {
          score: 660345470,
          status: "good",
          date: "2026-05-16T15:30:00",
          replay: "th20_ud0071.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 670472090,
          status: "good",
          date: "2026-05-17T15:30:00",
          replay: "th20_ud0072.rpy",
          detail: "-",
        },
      },
    },
    専属メイド: {
      th08: {
        Remilia: {
          score: 1852942870,
          status: "good",
          date: "2014-01-28T15:30:00",
          replay: "th8_ud0069.rpy",
          detail: "-",
        },
      },
    },
    鉄アレイ: {
      th10: {
        ReimuA: {
          score: 951579520,
          status: "good",
          date: "2009-12-22T15:30:00",
          replay: "th10_ud0129.rpy",
          detail: "-",
        },
      },
    },
    飛萃: {
      th10: {
        ReimuB: {
          score: 957679210,
          status: "good",
          date: "2010-10-10T15:30:00",
          replay: "th10_ud0105.rpy",
          detail: "-",
        },
      },
    },
    摩耗: {
      th07Ex: {
        ReimuB: {
          score: 1201640880,
          status: "good",
          date: "2014-01-13T15:30:00",
          replay: "th7_ud0047.rpy",
          detail: "-",
        },
      },
    },
    茉莉花: {
      th06: {
        ReimuB: {
          score: 635300680,
          status: "excellent",
          date: "2013-03-13T15:30:00",
          replay: "th6_ud0008.rpy",
          detail: "-",
        },
      },
    },
    霧海: {
      th10: {
        ReimuB: {
          score: 958779860,
          status: "good",
          date: "2007-12-20T15:30:00",
          replay: "th10_ud0096.rpy",
          detail: "-",
        },
      },
    },
    名前: {
      th06: {
        MarisaB: {
          score: 509231970,
          status: "good",
          date: "2013-04-29T15:30:00",
          replay: "th6_ud0068.rpy",
          detail: "-",
        },
      },
      th14: {
        ReimuA: {
          score: 773374720,
          status: "good",
          date: "2013-11-16T15:30:00",
          replay: "th14_ud0045.rpy",
          detail: "-",
        },
        SakuyaB: {
          score: 789970750,
          status: "good",
          date: "2013-09-05T15:30:00",
          replay: "th14_ud0056.rpy",
          detail: "-",
        },
      },
    },
    木村圭: {
      th06: {
        MarisaB: {
          score: 504411110,
          status: "good",
          date: "2007-11-08T15:30:00",
          replay: "th6_ud0074.rpy",
          detail: "-",
        },
      },
      th10: {
        ReimuB: {
          score: 976277540,
          status: "good",
          date: "2008-03-13T15:30:00",
          replay: "th10_ud0051.rpy",
          detail: "-",
        },
      },
    },
    "由希＠hisui": {
      th11: {
        ReimuA: {
          score: 1028130580,
          status: "good",
          date: "2008-09-22T15:30:00",
          replay: "th11_ud0075.rpy",
          detail: "-",
        },
      },
    },
    幽谷もこ: {
      th14: {
        ReimuA: {
          score: 753657820,
          status: "good",
          date: "2026-06-24T15:30:00",
          replay: "th14_ud0093.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 1127466620,
          status: "great",
          date: "2026-06-25T15:30:00",
          replay: "th14_ud0094.rpy",
          detail: "-",
        },
      },
      th16: {
        Reimu: {
          score: 2539993520,
          status: "great",
          date: "2026-07-05T15:30:00",
          replay: "th16_ud0056.rpy",
          detail: "-",
        },
        Cirno: {
          score: 2001066940,
          status: "good",
          date: "2025-08-04T15:30:00",
          replay: "th16_ud0051.rpy",
          detail: "-",
        },
        Aya: {
          score: 2185255630,
          status: "good",
          date: "2025-08-05T15:30:00",
          replay: "th16_ud0052.rpy",
          detail: "-",
        },
        Marisa: {
          score: 2049672650,
          status: "good",
          date: "2025-08-05T15:30:00",
          replay: "th16_ud0053.rpy",
          detail: "-",
        },
      },
      th17: {
        ReimuO: {
          score: 1540429240,
          status: "good",
          date: "2025-08-09T15:30:00",
          replay: "th17_ud0036.rpy",
          detail: "-",
        },
        MarisaO: {
          score: 2043185390,
          status: "great",
          date: "2026-06-06T15:30:00",
          replay: "th17_ud0094.rpy",
          detail: "-",
        },
        YoumuO: {
          score: 1504930770,
          status: "good",
          date: "2026-01-01T15:30:00",
          replay: "th17_ud0049.rpy",
          detail: "-",
        },
      },
      th18: {
        Reimu: {
          score: 3071745270,
          status: "good",
          date: "2026-04-12T15:30:00",
          replay: "th18_ud0035.rpy",
          detail: "-",
        },
        Marisa: {
          score: 3319444850,
          status: "good",
          date: "2026-05-28T15:30:00",
          replay: "th18_ud0046.rpy",
          detail: "-",
        },
        Sanae: {
          score: 3181457970,
          status: "good",
          date: "2026-05-19T15:30:00",
          replay: "th18_ud0039.rpy",
          detail: "-",
        },
        Sakuya: {
          score: 5610669110,
          status: "good",
          date: "2026-05-28T15:30:00",
          replay: "th18_ud0045.rpy",
          detail: "-",
        },
      },
      th20: {
        ReimuR1: {
          score: 800475850,
          status: "excellent",
          date: "2026-02-16T15:30:00",
          replay: "th20_ud0040.rpy",
          detail: "-",
        },
        ReimuR2: {
          score: 764351480,
          status: "great",
          date: "2026-05-16T15:30:00",
          replay: "th20_ud0069.rpy",
          detail: "-",
        },
        ReimuB1: {
          score: 747917300,
          status: "great",
          date: "2026-05-28T15:30:00",
          replay: "th20_ud0081.rpy",
          detail: "-",
        },
        ReimuB2: {
          score: 	774327030,
          status: "great",
          date: "2026-02-19T15:30:00",
          replay: "th20_ud0045.rpy",
          detail: "-",
        },
        ReimuY1: {
          score: 769769900,
          status: "great",
          date: "2026-06-09T15:30:00",
          replay: "th20_ud0084.rpy",
          detail: "-",
        },
        ReimuY2: {
          score: 	756326620,
          status: "great",
          date: "2026-02-22T15:30:00",
          replay: "th20_ud0054.rpy",
          detail: "-",
        },
        ReimuG1: {
          score: 820071410,
          status: "excellent",
          date: "2026-05-17T15:30:00",
          replay: "th20_ud0078.rpy",
          detail: "-",
        },
        ReimuG2: {
          score: 601808150,
          status: "good",
          date: "2026-02-25T15:30:00",
          replay: "th20_ud0058.rpy",
          detail: "-",
        },
        MarisaR1: {
          score: 738063970,
          status: "great",
          date: "2026-02-23T15:30:00",
          replay: "th20_ud0052.rpy",
          detail: "-",
        },
        MarisaR2: {
          score: 781636580,
          status: "great",
          date: "2026-02-18T15:30:00",
          replay: "th20_ud0042.rpy",
          detail: "-",
        },
        MarisaB1: {
          score: 739508940,
          status: "great",
          date: "2026-01-02T15:30:00",
          replay: "th20_ud0030.rpy",
          detail: "-",
        },
        MarisaB2: {
          score: 765101070,
          status: "great",
          date: "2026-05-23T15:30:00",
          replay: "th20_ud0079.rpy",
          detail: "-",
        },
        MarisaY1: {
          score: 780873290,
          status: "great",
          date: "2026-05-17T15:30:00",
          replay: "th20_ud0080.rpy",
          detail: "-",
        },
        MarisaY2: {
          score: 781478800,
          status: "great",
          date: "2026-02-23T15:30:00",
          replay: "th20_ud0053.rpy",
          detail: "-",
        },
        MarisaG1: {
          score: 809817650,
          status: "excellent",
          date: "2026-05-28T15:30:00",
          replay: "th20_ud0082.rpy",
          detail: "-",
        },
        MarisaG2: {
          score: 612027400,
          status: "good",
          date: "2026-02-24T15:30:00",
          replay: "th20_ud0051.rpy",
          detail: "-",
        },
      },
    },
    幽々公: {
      th12: {
        MarisaB: {
          score: 604055600,
          status: "great",
          date: "2025-06-07T15:30:00",
          replay: "th12_ud0064.rpy",
          detail: "-",
        },
      },
    },
    "優さん＠": {
      th10: {
        MarisaA: {
          score: 960487120,
          status: "good",
          date: "2010-01-06T15:30:00",
          replay: "th10_ud0089.rpy",
          detail: "-",
        },
      },
    },
    葉ーちゃん: {
      th06: {
        ReimuB: {
          score: 534760540,
          status: "good",
          date: "2011-09-05T15:30:00",
          replay: "th6_ud0046.rpy",
          detail: "-",
        },
      },
    },
    惑惑: {
      th12: {
        ReimuA: {
          score: 523810510,
          status: "good",
          date: "2009-09-26T15:30:00",
          replay: "th12_ud0099.rpy",
          detail: "-",
        },
      },
    },
    萨诺: {
      th14: {
        MarisaB: {
          score: 1206283660,
          status: "excellent",
          date: "2021-01-18T15:30:00",
          replay: "th14_ud0003.rpy",
          detail: "-",
        },
      },
    },
    "（前略）メイルさん": {
      th128: {
        Cirno: {
          score: 90466010,
          status: "good",
          date: "2011-10-02T15:30:00",
          replay: "th128_ud0012.rpy",
          detail: "-",
        },
      },
    },
    "＜―＞": {
      th11: {
        ReimuA: {
          score: 1002993430,
          status: "good",
          date: "2011-08-31T15:30:00",
          replay: null,
          detail: "2011年8月4週",
        },
      },
    },
    "∩(･ω･)∩": {
      th10: {
        ReimuA: {
          score: 977876250,
          status: "good",
          date: "2009-08-31T15:30:00",
          replay: null,
          detail: "2009年8月3週",
        },
        ReimuC: {
          score: 981276280,
          status: "great",
          date: "2009-09-24T15:30:00",
          replay: "th10_ud0015.rpy",
          detail: "-",
        },
        MarisaA: {
          score: 970725300,
          status: "good",
          date: "2010-02-19T15:30:00",
          replay: "th10_ud0019.rpy",
          detail: "-",
        },
        MarisaB: {
          score: 971329440,
          status: "good",
          date: "2009-12-11T15:30:00",
          replay: "th10_ud0134.rpy",
          detail: "-",
        },
        MarisaC: {
          score: 984382860,
          status: "great",
          date: "2009-12-31T15:30:00",
          replay: null,
          detail: "2009年12月3週",
        },
      },
    },
  };

  return scoreRecords;
}
