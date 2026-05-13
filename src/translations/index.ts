
export type Language = 'ja' | 'en' | 'ko' | 'zh';

export interface TranslationSchema {
  nav: {
    about: string;
    news: string;
    member: string;
    performance: string;
    gallery: string;
    joinUs: string;
    contact: string;
  };
  hero: {
    headlineWhite: string;
    headlineGold: string;
    subline1: string;
    subline2: string;
    joinUs: string;
  };
  cards: {
    about: {
      title: string;
      desc: string;
      button: string;
    };
    performance: {
      title: string;
      desc: string;
      button: string;
    };
    movie: {
      title: string;
      desc: string;
      button: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    wingsTitle: string;
    wingsDesc: string;
    identity: string;
    shinesTitle: string;
    shinesDesc1: string;
    shinesDesc2: string;
    shinesSpirit: string;
    legacy: string;
    activityTitle: string;
    challengeTitle: string;
    challengeDesc: string;
    proTitle: string;
    proDesc: string;
    futureTitle: string;
    futureDesc: string;
    backHome: string;
  };
  footer: {
    org: string;
    activity: string;
    recruit: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ja: {
    nav: {
      about: 'ABOUT',
      news: 'NEWS',
      member: 'MEMBER',
      performance: 'PERFORMANCE',
      gallery: 'GALLERY',
      joinUs: 'JOIN US',
      contact: 'CONTACT',
    },
    hero: {
      headlineWhite: 'ONE TEAM.',
      headlineGold: 'ONE SKY.',
      subline1: 'HANEDA INTERNATIONAL HIGH SCHOOL',
      subline2: 'CHEERLEADING TEAM',
      joinUs: 'JOIN US',
    },
    cards: {
      about: {
        title: 'ABOUT WINGS',
        desc: '羽田国際高校唯一の\n男女混成チアリーディングチーム。',
        button: 'VIEW MORE',
      },
      performance: {
        title: 'PERFORMANCE',
        desc: '大会で魅せる、\n最高のパフォーマンス。',
        button: 'VIEW MORE',
      },
      movie: {
        title: 'MOVIE',
        desc: 'WINGSの躍動を、\nムービーで体感。',
        button: 'VIEW MORE',
      },
    },
    about: {
      title: 'ABOUT WINGS',
      subtitle: 'OUR IDENTITY & SPIRIT',
      wingsTitle: 'WINGS（ウィングス）',
      wingsDesc: '羽田国際高等学校チアリーディング部「WINGS」は、その名の通り「世界へ、そして未来へ羽ばたく」をモットーに活動しているチームです。\nチアリーディングの技術向上はもちろんのこと、見ているすべての人に勇気と元気を届け、応援される存在であることを大切にしています。',
      identity: '私たちのアイデンティティ',
      shinesTitle: '“SHINES” TO “WINGS”',
      shinesDesc1: '私たちのルーツは、前身である蒲田女子高等学校チアリーディング部「SHINES（シャインズ）」にあります。',
      shinesDesc2: '長年、多くの方々に愛され、数々の功績を残してきた「SHINES」。その伝統である「明るさ・礼儀・不屈の精神」は、校名が変わった今も、私たちの根底に脈々と流れています。\n「SHINES」として築き上げた輝かしい歴史と、地域の方々や卒業生との絆を大切にしながら、私たちは「WINGS」として新たな空へと飛び立ちました。',
      shinesSpirit: 'SHINES から WINGS へ継承される魂',
      legacy: '継承される魂',
      activityTitle: '活動内容と目標',
      challengeTitle: '競技への挑戦',
      challengeDesc: '競技チアリーディングにおける大会出場（JCA主催大会など）を主軸に、難度の高いタンブリングやスタンツに挑戦し、全国大会での上位入賞を目指します。',
      proTitle: '「応援」のプロとして',
      proDesc: '学内の部活動応援や地域イベントでのパフォーマンスを通じて、誰かを励ますことの素晴らしさを学び、チームメイトとの信頼関係を築きます。',
      futureTitle: '未来のWINGSへ',
      futureDesc: '初心者・経験者は問いません。「誰かを応援したい」「自分を成長させたい」という強い気持ちがあれば、誰もが輝ける場所です。\n「SHINES」が灯してくれた情熱の光を胸に、私たちと一緒に「WINGS」として新しい歴史を作っていきませんか？',
      backHome: 'BACK TO HOME',
    },
    footer: {
      org: 'ORGANIZATION',
      activity: 'ACTIVITY',
      recruit: 'RECRUIT',
      rights: '© 2024 HANEDA INTERNATIONAL HIGH SCHOOL CHEERLEADING TEAM WINGS. ALL RIGHTS RESERVED.',
    }
  },
  en: {
    nav: {
      about: 'ABOUT',
      news: 'NEWS',
      member: 'MEMBER',
      performance: 'PERFORMANCE',
      gallery: 'GALLERY',
      joinUs: 'JOIN US',
      contact: 'CONTACT',
    },
    hero: {
      headlineWhite: 'ONE TEAM.',
      headlineGold: 'ONE SKY.',
      subline1: 'HANEDA INTERNATIONAL HIGH SCHOOL',
      subline2: 'CHEERLEADING TEAM',
      joinUs: 'JOIN US',
    },
    cards: {
      about: {
        title: 'ABOUT WINGS',
        desc: 'The only co-ed cheerleading team\nat Haneda International High School.',
        button: 'VIEW MORE',
      },
      performance: {
        title: 'PERFORMANCE',
        desc: 'The best performance\nshown at competitions.',
        button: 'VIEW MORE',
      },
      movie: {
        title: 'MOVIE',
        desc: 'Experience the vitality\nof WINGS through movies.',
        button: 'VIEW MORE',
      },
    },
    about: {
      title: 'ABOUT WINGS',
      subtitle: 'OUR IDENTITY & SPIRIT',
      wingsTitle: 'WINGS',
      wingsDesc: 'Haneda International High School Cheerleading Team "WINGS", as the name suggests, is a team that operates under the motto "Flying to the world and to the future."\nIn addition to improving cheerleading skills, we value bringing courage and energy to everyone who watches us and being a presence that is supported.',
      identity: 'Our Identity',
      shinesTitle: '“SHINES” TO “WINGS”',
      shinesDesc1: 'Our roots lie in the predecessor, Kamata Girls\' High School Cheerleading Team "SHINES."',
      shinesDesc2: '"SHINES" has been loved by many people for many years and has left numerous achievements. Its tradition of "brightness, politeness, and indomitable spirit" continues to flow through our foundation today, even after the school name has changed.\nWhile valuing the brilliant history built as "SHINES" and the bonds with local people and alumni, we have taken flight into a new sky as "WINGS."',
      shinesSpirit: 'The soul passed down from SHINES to WINGS',
      legacy: 'Inherited Soul',
      activityTitle: 'Activities and Goals',
      challengeTitle: 'Challenge in Competition',
      challengeDesc: 'Mainly participating in cheerleading competitions (such as JCA-sponsored events), we challenge high-difficulty tumbling and stunts, aiming for top prizes at national competitions.',
      proTitle: 'As Professionals in "Cheering"',
      proDesc: 'Through cheering for school club activities and performances at regional events, we learn the wonder of encouraging someone and build trust with teammates.',
      futureTitle: 'To Future WINGS',
      futureDesc: 'Beginners and experienced members are all welcome. As long as you have a strong desire to "cheer someone on" or "grow yourself," this is a place where anyone can shine.\nWith the light of passion that "SHINES" ignited in our hearts, why not create a new history with us as "WINGS"?',
      backHome: 'BACK TO HOME',
    },
    footer: {
      org: 'ORGANIZATION',
      activity: 'ACTIVITY',
      recruit: 'RECRUIT',
      rights: '© 2024 HANEDA INTERNATIONAL HIGH SCHOOL CHEERLEADING TEAM WINGS. ALL RIGHTS RESERVED.',
    }
  },
  ko: {
    nav: {
      about: '소개',
      news: '뉴스',
      member: '멤버',
      performance: '퍼포먼스',
      gallery: '갤러리',
      joinUs: '가입하기',
      contact: '문의',
    },
    hero: {
      headlineWhite: 'ONE TEAM.',
      headlineGold: 'ONE SKY.',
      subline1: '하네다 국제 고등학교',
      subline2: '치어리딩 팀',
      joinUs: '가입하기',
    },
    cards: {
      about: {
        title: 'ABOUT WINGS',
        desc: '하네다 국제 고등학교 유일의\n남녀 혼성 치어리딩 팀.',
        button: '더 보기',
      },
      performance: {
        title: 'PERFORMANCE',
        desc: '대회에서 선보이는\n최고의 퍼포먼스.',
        button: '더 보기',
      },
      movie: {
        title: 'MOVIE',
        desc: 'WINGS의 역동성을\n영상으로 경험하세요.',
        button: '더 보기',
      },
    },
    about: {
      title: 'ABOUT WINGS',
      subtitle: 'OUR IDENTITY & SPIRIT',
      wingsTitle: 'WINGS (윙즈)',
      wingsDesc: '하네다 국제 고등학교 치어리딩부 "WINGS"는 그 이름처럼 "세계로, 그리고 미래로 날아오르자"는 신조로 활동하고 있는 팀입니다.\n치어리딩 기술 향상은 물론, 보는 모든 사람에게 용기와 활기를 전하고 응원받는 존재가 되는 것을 소중히 여기고 있습니다.',
      identity: '우리의 정체성',
      shinesTitle: '“SHINES” TO “WINGS”',
      shinesDesc1: '우리의 뿌리는 전신인 카마타 여자 고등학교 치어리딩부 "SHINES(샤인즈)"에 있습니다.',
      shinesDesc2: '오랜 세월 많은 분들께 사랑받으며 수많은 공적을 남겨온 "SHINES". 그 전통인 "밝음, 예의, 불굴의 정신"은 교명이 바뀐 지금도 우리의 근저에 면면히 흐르고 있습니다.\n"SHINES"로서 쌓아온 찬란한 역사와 지역 사회, 졸업생들과의 유대를 소중히 여기며, 우리는 "WINGS"로서 새로운 하늘을 향해 날아올랐습니다.',
      shinesSpirit: 'SHINES에서 WINGS로 계승되는 정신',
      legacy: '계승되는 정신',
      activityTitle: '활동 내용 및 목표',
      challengeTitle: '경기에 대한 도전',
      challengeDesc: '치어리딩 대회 출전(JCA 주최 대회 등)을 주축으로, 고난도의 텀블링과 스턴트에 도전하며 전국 대회 상위 입상을 목표로 합니다.',
      proTitle: '「응원」의 전문가로서',
      proDesc: '교내 부활동 응원 및 지역 이벤트 공연 등을 통해 누군가를 격려하는 일의 즐거움을 배우고, 팀원들과의 신뢰 관계를 쌓습니다.',
      futureTitle: '미래의 WINGS에게',
      futureDesc: '초보자, 유경험자 모두 환영합니다. "누군가를 응원하고 싶다", "자신을 성장시키고 싶다"는 강한 의지만 있다면 누구든 빛날 수 있는 곳입니다.\n"SHINES"가 밝혀준 열정의 빛을 가슴에 품고, 우리와 함께 "WINGS"로서 새로운 역사를 만들어가보지 않겠습니까?',
      backHome: '홈으로 돌아가기',
    },
    footer: {
      org: 'ORGANIZATION',
      activity: 'ACTIVITY',
      recruit: 'RECRUIT',
      rights: '© 2024 HANEDA INTERNATIONAL HIGH SCHOOL CHEERLEADING TEAM WINGS. ALL RIGHTS RESERVED.',
    }
  },
  zh: {
    nav: {
      about: '关于',
      news: '新闻',
      member: '成员',
      performance: '表演',
      gallery: '画廊',
      joinUs: '加入我们',
      contact: '联系',
    },
    hero: {
      headlineWhite: 'ONE TEAM.',
      headlineGold: 'ONE SKY.',
      subline1: '羽田国际高级中学',
      subline2: '啦啦队',
      joinUs: '加入我们',
    },
    cards: {
      about: {
        title: 'ABOUT WINGS',
        desc: '羽田国际高中唯一的\n男女混和啦啦队。',
        button: '查看更多',
      },
      performance: {
        title: 'PERFORMANCE',
        desc: '在比赛中展现出的\n最佳表演。',
        button: '查看更多',
      },
      movie: {
        title: 'MOVIE',
        desc: '通过视频感受\nWINGS的活力。',
        button: '查看更多',
      },
    },
    about: {
      title: 'ABOUT WINGS',
      subtitle: 'OUR IDENTITY & SPIRIT',
      wingsTitle: 'WINGS',
      wingsDesc: '羽田国际高级中学啦啦队"WINGS"，正如其名，是一支以"飞向世界，飞向未来"为座右铭开展活动的队伍。\n除了提高啦啦队技术外，我们还非常重视为所有观众带去勇气和活力，成为被大家支持的存在。',
      identity: '我们的身份标识',
      shinesTitle: '“SHINES” TO “WINGS”',
      shinesDesc1: '我们的根基在于前身——蒲田女子高级中学啦啦队"SHINES"。',
      shinesDesc2: '"SHINES"多年来深受大家喜爱，留下了无数卓越的战绩。其"开朗、礼貌、不屈不挠的精神"这一传统，即便是在校名更改后的今天，依然深深根植于我们的内心深处。\n在珍视作为"SHINES"建立的光辉历史以及与地区民众和校友之间纽带的同时，我们作为"WINGS"已经飞向了全新的天空。',
      shinesSpirit: '从 SHINES 到 WINGS 传承的灵魂',
      legacy: '传承的灵魂',
      activityTitle: '活动内容与目标',
      challengeTitle: '挑战竞技',
      challengeDesc: '以参加竞技啦啦队比赛（如JCA主办的比赛等）为核心，挑战高难度的翻腾和托举动作，力争在全国大赛中取得优异成绩。',
      proTitle: '作为“应援”的专业人士',
      proDesc: '通过校内社团活动应援及地区活动表演，学习鼓励他人的美好之处，并与队友建立信任关系。',
      futureTitle: '致未来的 WINGS',
      futureDesc: '无论有无经验，只要有"想要支持他人"、"想要让自己成长"的强烈愿望，这里就是每个人都能发光发热的地方。\n满怀"SHINES"点燃的激情之光，何不与我们一起，作为"WINGS"创造新的历史？',
      backHome: '返回首页',
    },
    footer: {
      org: 'ORGANIZATION',
      activity: 'ACTIVITY',
      recruit: 'RECRUIT',
      rights: '© 2024 HANEDA INTERNATIONAL HIGH SCHOOL CHEERLEADING TEAM WINGS. ALL RIGHTS RESERVED.',
    }
  }
};
