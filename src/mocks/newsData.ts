import type { NewsAPIResponse } from '../types/news';

export const mockNewsData: NewsAPIResponse = {
  status: 'ok',
  totalResults: 33,
  articles: [
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: 'Rajesh Prabhuswamy, America Hernandez',
      title: 'TotalEnergies pauses business with Adani Group - Reuters',
      description:
        'French oil major TotalEnergies halted on Monday investments into Adani Group, after the Indian ports-to-power conglomerate was engulfed in a crisis over an alleged multi-million-dollar bribery scheme.',
      url: 'https://www.reuters.com/markets/rates-bonds/adani-bonds-hit-one-year-low-investors-weigh-us-bribery-allegations-2024-11-25/',
      urlToImage:
        'https://www.reuters.com/resizer/v2/YTXZAJVCBFMJVAFVZ434SIMUYY.jpg?auth=629ef33f4392f68dc52ba79bf8105ab1cef6b9399e14b23a66f578e1b441efc5&height=1005&width=1920&quality=80&smart=true',
      publishedAt: '2024-11-25T12:15:00Z',
      content:
        'NEW DELHI/PARIS, Nov 25 (Reuters) - French oil major TotalEnergies (TTEF.PA)\r\n, opens new tab halted on Monday investments into Adani Group, after the Indian ports-to-power conglomerate was engulfed … [+5997 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Jeremy Diamond',
      title:
        'Israeli prime minister approves Lebanon ceasefire deal ‘in principle,’ source says - CNN',
      description:
        'Israeli Prime Minister Benjamin Netanyahu approved the emerging ceasefire deal with Hezbollah “in principle” during a security consultation with Israeli officials Sunday night, a source familiar with the matter said.',
      url: 'https://www.cnn.com/2024/11/25/middleeast/israeli-prime-minister-approves-lebanon-ceasefire-deal-in-principle-intl/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/151001141820-cnn-breaking-news-graphic.jpg?q=x_2,y_0,h_896,w_1593,c_crop/w_800',
      publishedAt: '2024-11-25T12:09:00Z',
      content:
        'Israeli Prime Minister Benjamin Netanyahu approved the emerging ceasefire deal with Hezbollah in principle during a security consultation with Israeli officials Sunday night, a source familiar with t… [+2300 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'JAKE COYLE',
      title:
        '‘Wicked’ and ‘Gladiator’ make gravity-defying theater debuts - The Associated Press',
      description:
        '“Wicked” and “Gladiator II” have debuted in theaters with a combined $270 million in ticket sales. Their worldwide performance breathed fresh life into global box office results that have struggled lately. Together the films turned the moviegoing weekend into…',
      url: 'https://apnews.com/article/wicked-gladiator-ii-glicked-box-office-c1fb55f5831a1af3984185dcea0cd4b5',
      urlToImage:
        'https://dims.apnews.com/dims4/default/e0a59a8/2147483647/strip/true/crop/2667x1500+47+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F29%2F59%2F8bb8a142af1c6b05cace7b26c288%2Fe2adbb516d0e4829a24979f29f6d99b9',
      publishedAt: '2024-11-25T11:38:00Z',
      content:
        'NEW YORK (AP) With a combined $270 million in worldwide ticket sales, Wicked and Gladiator II breathed fresh life into a box office that has struggled lately, leading to one of the busiest moviegoing… [+5813 chars]',
    },
    {
      source: {
        id: null,
        name: 'Formula 1',
      },
      author: 'F1',
      title:
        '‘It puts him amongst the all-time greats’ – Horner praises Verstappen after winning his ‘best and hardest championship’ - Formula 1',
      description:
        'There are few people better placed to analyse Max Verstappen’s fourth world title than Red Bull Team Principal Christian Horner. Horner has been there for all four titles, has overseen Verstappen’s transition from teenage sensation to race winner to world cha…',
      url: 'https://www.formula1.com/en/latest/article/it-puts-him-amongst-the-all-time-greats-horner-praises-verstappen-after.3IUUHhvHEqbR6lig31baiF',
      urlToImage:
        'https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1732533666/fom-website/2024/Las%20Vegas%20GP/Formula%201%20header%20template%20-%202024-11-25T112043.311.png',
      publishedAt: '2024-11-25T11:28:11Z',
      content:
        'Its been a rollercoaster of a year and Max has been truly outstanding, Horner told Sky Sports F1. We got off to a flying start, we had a very difficult summer, but he just kept nailing the results.\r\n… [+1072 chars]',
    },
    {
      source: {
        id: 'axios',
        name: 'Axios',
      },
      author: 'Emily Peck',
      title:
        'Gen Z are all using AI to get their work done, study finds - Axios',
      description:
        'With the youngest workers on board, broader adoption feels more inevitable',
      url: 'https://www.axios.com/2024/11/25/gen-z-ai-work-survey',
      urlToImage:
        'https://images.axios.com/RQVS8uNvb6F_0Hlvkd0REkxpF4c=/0x0:1280x720/1366x768/2024/11/22/1732309235960.jpg',
      publishedAt: '2024-11-25T11:22:58Z',
      content:
        'Twenty-something knowledge workers are pretty much all using generative AI tools, finds a survey out Monday from Google Workspace.\r\nWhy it matters: The youngs are early adopters. If Gen Z is doing it… [+1909 chars]',
    },
    {
      source: {
        id: 'the-washington-post',
        name: 'The Washington Post',
      },
      author: 'Kelly Kasulis Cho',
      title:
        'Bird flu detected in raw milk sold at California store - The Washington Post',
      description:
        'The H5N1 virus was found in a sample of unpasteurized milk at a store, prompting a recall of one batch. Health agencies have warned against the growing dietary fad.',
      url: 'https://www.washingtonpost.com/health/2024/11/25/bird-flu-virus-h5n1-milk/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LJGLYVSEK6CYEYS6VS7II4L5KM_size-normalized.jpg&w=1440',
      publishedAt: '2024-11-25T10:42:26Z',
      content:
        'Bird flu, a virus that can also affect humans, has been discovered in a batch of raw milk sold in California store refrigerators, state regulators said Sunday. While there have been no reported illne… [+3367 chars]',
    },
    {
      source: {
        id: 'the-wall-street-journal',
        name: 'The Wall Street Journal',
      },
      author: 'The Wall Street Journal',
      title:
        'Christopher Rufo Has Trump’s Ear and Wants to End DEI for Good - The Wall Street Journal',
      description: null,
      url: 'https://www.wsj.com/us-news/education/christopher-rufo-education-trump-dei-bb9e7178',
      urlToImage: null,
      publishedAt: '2024-11-25T10:30:00Z',
      content: null,
    },
    {
      source: {
        id: 'abc-news',
        name: 'ABC News',
      },
      author: 'ABC News',
      title:
        "Russia and Ukraine trade drone strikes as Zelenskyy calls on allies for 'unwavering' aid - ABC News",
      description: null,
      url: 'https://abcnews.go.com/International/russian-missile-strikes-kharkiv-zelenskyy-calls-allies-unwavering/story?id\\=116192393',
      urlToImage: null,
      publishedAt: '2024-11-25T10:24:01Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Yahoo Entertainment',
      },
      author: 'David Shepardson',
      title:
        'US finalizes awards to BAE Systems, Rocket Lab for semiconductor chips - Yahoo Finance',
      description:
        'WASHINGTON (Reuters) -     The US Commerce Department said on Monday it is finalizing nearly $60 million in government subsidies for BAE Systems  (BAESF) to ...',
      url: 'https://finance.yahoo.com/news/us-finalizes-awards-bae-systems-100314743.html',
      urlToImage:
        'https://media.zenfs.com/en/reuters-finance.com/9db8b1581e0138df77d90396bf316223',
      publishedAt: '2024-11-25T10:03:14Z',
      content:
        'By David Shepardson\r\nWASHINGTON (Reuters) - The US Commerce Department said on Monday it is finalizing nearly $60 million in government subsidies for BAE Systems (BAESF) to build chips used in jets a… [+1856 chars]',
    },
    {
      source: {
        id: 'politico',
        name: 'Politico',
      },
      author: 'Christopher Cadelago, Eugene Daniels',
      title:
        'Harris is telling her advisers and allies to keep her political options open - POLITICO',
      description:
        'She could run again for president — or California governor.',
      url: 'https://www.politico.com/news/2024/11/25/kamala-harris-advisers-options-open-00191393',
      urlToImage:
        'https://static.politico.com/50/b0/6cc206d045e8890603b7bd0c1d16/election-2024-harris-68312.jpg',
      publishedAt: '2024-11-25T10:00:00Z',
      content:
        'She doesnt have to decide if she wants to run for something again in the next six months, said one former Harris campaign aide. The natural thing to do would be to set up some type of entity that wou… [+7489 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'JON GAMBRELL',
      title:
        'The UAE arrests 3 Uzbek nationals for the killing of an Israeli-Moldovan rabbi - The Associated Press',
      description:
        "The United Arab Emirates says police have arrested three Uzbek nationals for the killing of an Israeli-Moldovan rabbi. Monday's statement from the country’s Interior Ministry offered no motive for the slaying of Zvi Kogan. Kogan, an ultra-Orthodox rabbi who w…",
      url: 'https://apnews.com/article/uae-israel-rabbi-killed-arrests-e4e2d0f54fd81d8f7693605639a594bd',
      urlToImage:
        'https://dims.apnews.com/dims4/default/a8194f4/2147483647/strip/true/crop/8543x4805+0+445/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F72%2Fc7dc322e08fcd2adc5bc1df391ba%2F9c4a7a8fd48a4a988a6fe62ae99689d2',
      publishedAt: '2024-11-25T09:57:00Z',
      content:
        'DUBAI, United Arab Emirates (AP) The United Arab Emirates said Monday police arrested three Uzbek nationals for the killing of an Israeli-Moldovan rabbi, an attack thats raised concerns for the burge… [+4711 chars]',
    },
    {
      source: {
        id: null,
        name: 'TMZ',
      },
      author: 'TMZ Staff',
      title:
        'Liam Payne Was Trying to Escape from Balcony When He Fell to His Death - TMZ',
      description:
        'Liam Payne was trying to escape from his hotel when he fell to his death, and the hotel knew he was threatening to use the balcony as the means to escape, but left him by himself.',
      url: 'https://www.tmz.com/2024/11/25/liam-payne-left-in-room-by-hotel-workers-and-tried-to-scale-balcony/',
      urlToImage:
        'https://imagez.tmz.com/image/da/16by9/2024/11/24/da8f5ea0ce934517956cfd31504b582f_xl.jpg',
      publishedAt: '2024-11-25T09:00:53Z',
      content:
        'Liam Payne was trying to escape from his hotel when he fell to his death, and the hotel knew he was threatening to use the balcony as the means to escape, but left him by himself ... this according t… [+3376 chars]',
    },
    {
      source: {
        id: null,
        name: 'Tipranks.com',
      },
      author: 'Ran Melamed',
      title: 'SMCI Clashes with Nasdaq, but Stock on the Rise - TipRanks',
      description:
        'Super Micro Computer ($SMCI) and its investors have been through quite a ride since the company’s delayed financial report for Q1 2025. Since the recent clash with ...',
      url: 'https://www.tipranks.com/news/smci-clashes-with-nasdaq-but-stock-on-the-rise',
      urlToImage:
        'https://blog.tipranks.com/wp-content/uploads/2024/11/smci-1-750x406.jpg',
      publishedAt: '2024-11-25T08:56:36Z',
      content:
        'Super Micro Computer (SMCI) and its investors have been through quite a ride since the companys delayed financial report for Q1 2025. Since the recent clash with NASDAQ and the threat of delisting, S… [+3127 chars]',
    },
    {
      source: {
        id: null,
        name: 'CBS Sports',
      },
      author: '',
      title:
        'Saquon Barkley sets several Eagles franchise records, makes NFL history in blowout victory over Rams - CBS Sports',
      description:
        'Barkley continues to rewrite the Eagles record books with his historic night',
      url: 'https://www.cbssports.com/nfl/news/saquon-barkley-sets-several-eagles-franchise-records-makes-nfl-history-in-blowout-victory-over-rams/',
      urlToImage:
        'https://sportshub.cbsistatic.com/i/r/2024/11/25/b3849a29-49be-429a-b059-717315006bf2/thumbnail/1200x675/48faf7b9a35c6fb1c9af22d41f7c3cbd/barkley-jpeg.jpg',
      publishedAt: '2024-11-25T05:58:11Z',
      content:
        'Saquon Barkley had one of the greatest nights for any player in the 91-year history of the Philadelphia Eagles. No player in Eagles history rushed for 250-plus yards or had 300-plus yards from scrimm… [+2896 chars]',
    },
    {
      source: {
        id: 'the-wall-street-journal',
        name: 'The Wall Street Journal',
      },
      author: 'The Wall Street Journal',
      title:
        'Scott Bessent Sees a Coming ‘Global Economic Reordering.’ He Wants to Be Part of It. - The Wall Street Journal',
      description: null,
      url: 'https://www.wsj.com/economy/scott-bessent-sees-a-coming-global-economic-reordering-he-wants-to-be-part-of-it-533d6e71',
      urlToImage: null,
      publishedAt: '2024-11-25T05:30:00Z',
      content: null,
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'STEPHEN GROVES',
      title:
        'Senators took down one Trump Cabinet pick. But the fight over their authority is just beginning - The Associated Press',
      description:
        'The withdrawal of Matt Gaetz as President-elect Donald Trump’s nominee for attorney general serves as a reminder that the Senate is still relevant when it comes to installing a president’s Cabinet. Yet it may be only a preview of the pressure on Senate Republ…',
      url: 'https://apnews.com/article/trump-cabinet-senate-republicans-cee5cddaa714b8874db05356c6af2a04',
      urlToImage:
        'https://dims.apnews.com/dims4/default/19685ee/2147483647/strip/true/crop/2593x1459+0+136/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7f%2F8f%2F95cb43cf89685c6dfa2191c6c542%2F27aee690c1584bec846aaf48a9500314',
      publishedAt: '2024-11-25T05:07:00Z',
      content:
        'WASHINGTON (AP) Its a short phrase in the Constitution, mentioned in passing. But its already taking on an outsize significance as President-elect Donald Trump charts his return to office. \r\nThe with… [+6729 chars]',
    },
    {
      source: {
        id: null,
        name: 'Food & Wine',
      },
      author: 'https://www.facebook.com/foodandwine',
      title:
        'Krispy Kreme Launches 3 New Holiday Doughnuts — and 1 Returning Favorite - Food & Wine',
      description:
        'Krispy Kreme announced its new holiday lineup of doughnuts, featuring several Grinch-themed treats. Three new doughnuts are the Grinch Doughnut, Grinchy Claus Doughnut, and Cindy-Lou Who Merry Berry Tree Doughnut. The fan-favorite Santa Belly doughnut will al…',
      url: 'https://www.foodandwine.com/krispy-kreme-holiday-doughnuts-2024-8749951',
      urlToImage:
        'https://www.foodandwine.com/thmb/pU0MMteqyg1lImNI1qTP3LzdNlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Krispy-Kreme-Merry-Grinchmas-Doughnut-Collection-FT-BLOG1124-01-6c6e6102534649fe909d496b21263658.jpg',
      publishedAt: '2024-11-25T05:01:00Z',
      content:
        'Everyone is getting into the holiday spirit at Krispy Kreme, including the Grinch. \r\nOn Monday, Krispy Kreme announced its new holiday lineup of doughnuts, featuring none other than the coolest Whos … [+2489 chars]',
    },
    {
      source: {
        id: null,
        name: 'BBC News',
      },
      author: null,
      title:
        'Hezbollah fires rocket barrages into Israel after deadly Beirut strikes - BBC.com',
      description:
        'It is one of the heaviest bombardments of Israel since fighting intensified in Lebanon in September.',
      url: 'https://www.bbc.com/news/articles/c3vl4w36wypo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/fab0/live/dd6d08b0-aace-11ef-bdf5-b7cb2fa86e10.jpg',
      publishedAt: '2024-11-25T04:01:50Z',
      content:
        "Israel's military says around 250 rockets have been fired by Hezbollah across the border from Lebanon, marking one of the heaviest bombardments of Israel since fighting intensified in September.\r\nSev… [+2203 chars]",
    },
    {
      source: {
        id: null,
        name: 'WKBN.com',
      },
      author: 'Craig Ziobert',
      title: 'Update on possible Thanksgiving winter storm - WKBN.com',
      description:
        'A storm system will move eastward across the country early this week and could play a role in our weather as we go into the Thanksgiving holiday.',
      url: 'https://www.wkbn.com/weather/update-on-possible-thanksgiving-winter-storm/',
      urlToImage:
        'https://www.wkbn.com/wp-content/uploads/sites/48/2024/11/image_777ca4.png?w=1280',
      publishedAt: '2024-11-25T01:57:00Z',
      content:
        'While the valley saw its first snowflakes late last week, more snow will be expected by next weekend. That’s the easy part of the forecast. Unfortunately, there is still some uncertainty about a stor… [+2518 chars]',
    },
    {
      source: {
        id: null,
        name: 'Space.com',
      },
      author: 'Mike Wall',
      title:
        'SpaceX launching 23 Starlink satellites from Florida early Nov. 25 - Space.com',
      description: 'The liftoff occurred at 5:02 a.m. ET on Monday (Nov. 25).',
      url: 'https://www.space.com/space-exploration/launches-spacecraft/spacex-launching-23-starlink-satellites-from-florida-early-nov-25',
      urlToImage:
        'https://cdn.mos.cms.futurecdn.net/KZY3hz6wwKCjJ9j56z4jY8-1200-80.png',
      publishedAt: '2024-11-25T01:16:53Z',
      content:
        "SpaceX launched another batch of its Starlink internet satellites from Florida's Space Coast early Monday morning (Nov. 25).\r\nA Falcon 9 rocket carrying 23 Starlink spacecraft — including 12 with dir… [+1766 chars]",
    },
  ],
};
