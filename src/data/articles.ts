import type { Article } from "@/types/article";

/**
 * 記事データ（MVP用サンプル）。
 * 数値は構造を示すための例示であり、実運用では一次情報の確認後に更新する。
 */
export const articles: Article[] = [
  {
    slug: "us-china-semiconductor-controls",
    title: "米国の対中半導体規制と日本企業への影響",
    category: "technology",
    publishedAt: "2026-06-10",
    summary:
      "米国の対中半導体輸出規制は、技術覇権争いの一場面である以上に、日本の装置・材料企業にとって受益構造を持つ。問題は、その機会が長期的な対中依存リスクと表裏一体である点にある。",
    tags: ["半導体", "経済安全保障", "サプライチェーン", "米中対立"],
    overallJapanImpact: 2,
    todaysFocus:
      "米国の対中半導体規制強化は、日本の装置・材料企業にとって短期的な受注機会を生む一方、対中市場依存企業には逆風となる。「漁夫の利」の構造は、米国の規制範囲・タイミングに依存しており、自律的な機会ではない点を見誤ってはならない。",
    whatHappened:
      "米商務省産業安全保障局（BIS）は、先端半導体の製造・設計に関わる装置・技術の対中輸出管理を継続的に強化してきた。対象には日本企業が強みを持つ製造装置・材料分野の一部技術も含まれ、日本政府は対米協調の範囲を個別協議で調整している。中国側は国内半導体産業の自立育成を加速させると表明している。",
    primarySources: [
      {
        sourceSlug: "fred",
        title: "米国の輸出関連マクロ統計（参考データ）",
        url: "https://fred.stlouisfed.org",
        note: "対中輸出規制が米国経済全体に与える規模感を確認するための参考指標",
      },
      {
        sourceSlug: "rieti",
        title: "経済安全保障と輸出管理に関する政策分析",
        url: "https://www.rieti.go.jp",
        note: "日本の輸出管理制度・産業政策との関係を確認するための分析",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "国家安全保障と技術的優位の維持",
        hidden: "自国半導体産業（CHIPS法等）の保護・育成という産業政策的側面",
        framingWords: ["国家安全保障", "技術的優位", "信頼できるサプライチェーン"],
        actualInterest: "先端技術における対中優位の時間軸を引き延ばすこと",
      },
      {
        campName: "中国（公式）",
        emphasis: "技術覇権主義への対抗と国内産業の自立",
        hidden: "規制によって国内企業が受ける実際の打撃の大きさ",
        framingWords: ["覇権主義", "技術封鎖", "科技自立自強"],
        actualInterest: "規制の影響を緩和しつつ国内技術基盤を確立する時間を確保すること",
      },
      {
        campName: "日本政策圏",
        emphasis: "同盟国としての協調と国内産業基盤の維持",
        hidden: "対中市場（売上・部材調達）を持つ企業が抱えるコスト",
        framingWords: ["経済安全保障", "信頼でつながるパートナー国"],
        actualInterest: "米国との協調を維持しつつ、装置・材料企業の受注機会を確保すること",
      },
      {
        campName: "台湾・韓国",
        emphasis: "自国企業のサプライチェーン上の重要性",
        hidden: "自社の対中売上依存・生産拠点分散コストの負担",
        framingWords: ["安定的供給", "信頼できるパートナーシップ"],
        actualInterest: "生産拠点の分散コストを同盟国間で分担させること",
      },
    ],
    emotionWords: [
      {
        termSlug: "national-security",
        contextNote:
          "輸出規制の正当化に用いられるが、射程は軍事だけでなく産業競争力の維持を含む",
      },
      {
        termSlug: "hegemonism",
        contextNote: "中国側が米国の規制を批判する際の定型表現として使われている",
      },
      {
        termSlug: "economic-security",
        contextNote: "日本側がこの問題を語る際の中心的なキーワードになっている",
      },
    ],
    stakeholders: [
      {
        name: "米国政府",
        role: "輸出管理制度の設計・運用主体",
        interest: "自国の技術優位・半導体産業の競争力維持",
        risk: "同盟国との協調コスト、中国市場へのアクセス縮小",
      },
      {
        name: "中国政府",
        role: "規制対象国であり、国内産業育成の主体",
        interest: "技術自立に向けた時間の確保、国内代替産業の育成",
        risk: "先端技術へのアクセス制限による産業競争力の停滞",
      },
      {
        name: "日本の装置・材料企業",
        role: "規制環境下での代替的調達先・技術供給者",
        interest: "受注機会の拡大、対米協調による事業環境の安定",
        risk: "対中売上を持つ企業は中国市場縮小のコストを負う",
      },
      {
        name: "台湾・韓国企業",
        role: "先端半導体の主要生産拠点",
        interest: "同盟国間の供給網における重要性の確認",
        risk: "生産拠点分散に伴う追加コストの負担",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: 2 },
        { axis: "industry", score: 3 },
        { axis: "security", score: 1 },
        { axis: "financialMarket", score: -1 },
        { axis: "techSovereignty", score: 3 },
        { axis: "supplyChain", score: 2 },
        { axis: "diplomacy", score: 0 },
      ],
      shortTerm:
        "対中規制強化に伴う調整コストが発生し、対中売上比率の高い企業には逆風となる。",
      midTerm:
        "装置・材料分野での受注機会拡大が見込まれるが、米国の規制範囲・タイミングへの依存度が高く、自律的な追い風ではない。",
      longTerm:
        "日本が米中の間に立つ製造・技術拠点として再評価される可能性がある一方、対中依存の処理に失敗すれば市場アクセスそのものを失うリスクも併存する。",
    },
    investmentImplications:
      "半導体装置・材料セクターは構造的な追い風を受けやすい局面にあるが、個別企業の対中売上比率・米国規制の適用範囲によって影響度は大きく異なる。断定的な投資判断ではなく、規制動向と企業ごとの中国依存度の組み合わせを継続的に確認する視点が必要である。",
    uncertainties: [
      {
        point: "米国の規制強化が今後どこまで対象範囲を拡大するか",
        whyUncertain: "米国内の政権・議会の方針次第で適用範囲が変動しうる",
      },
      {
        point: "中国側の対抗措置（重要鉱物の輸出管理等）の規模・タイミング",
        whyUncertain: "中国側の公式発表が限定的で、実際の運用実態が見えにくい",
      },
    ],
    keyIndicators: [
      {
        label: "米商務省BISの輸出管理規則改定",
        description: "規制対象品目・対象企業の拡大有無を確認する",
      },
      {
        label: "主要装置・材料企業の四半期決算（地域別売上構成）",
        description: "対中売上比率の変化と受注動向を確認する",
      },
    ],
    conclusion:
      "本件は正義の問題ではなく、技術優位という資源を巡る構造的な競争である。日本はこの競争の主体ではないが、位置取り次第で受益者にも被害者にもなりうる。短期の追い風に浮かれず、対中依存の処理という長期課題から目を逸らさないことが重要である。",
    readerQuestion:
      "あなたが取引する企業（または投資先）は、対中売上比率がどの程度か把握しているだろうか。",
  },

  {
    slug: "rare-earth-china-dependency",
    title: "レアアース・重要鉱物の対中依存と脱リスク政策",
    category: "economic-security",
    publishedAt: "2026-06-15",
    summary:
      "レアアース・重要鉱物の精製能力は中国に集中しており、「脱リスク」政策は掛け声だけでは進まない構造的な制約を抱えている。日本にとっては産業育成の機会と短期コスト増が同時に存在する。",
    tags: ["レアアース", "重要鉱物", "脱リスク", "経済安全保障"],
    overallJapanImpact: 1,
    todaysFocus:
      "レアアース・重要鉱物の精製・加工能力は中国に高度に集中しており、各国の脱リスク政策は供給網の組み替えという長い時間を要する課題である。日本にとっては代替供給網構築の機会であると同時に、短期的なコスト負担を伴う。",
    whatHappened:
      "中国はレアアース等の重要鉱物について輸出管理を強化する動きを継続しており、米国・EU・日本は代替供給網の構築（豪州・カナダ等との連携、リサイクル技術への投資）を進めている。中国国務院は資源管理の強化を「正常な国内管理」と説明している。",
    primarySources: [
      {
        sourceSlug: "oecd",
        title: "重要鉱物の貿易・供給網に関する統計分析",
        url: "https://www.oecd.org",
        note: "主要国の重要鉱物依存度を比較するための参考データ",
      },
      {
        sourceSlug: "rieti",
        title: "資源安全保障と産業政策に関する分析",
        url: "https://www.rieti.go.jp",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "重要鉱物の対中依存はサプライチェーン上の脆弱性である",
        hidden: "代替供給網の構築には長期間とコストがかかるという現実",
        framingWords: ["サプライチェーンの強靭化", "信頼できる供給網"],
        actualInterest: "重要産業における対中レバレッジを削減すること",
      },
      {
        campName: "中国（公式）",
        emphasis: "資源管理は主権的・正常な国内行政措置である",
        hidden: "輸出管理が他国への交渉レバレッジとして機能している側面",
        framingWords: ["正常な管理措置", "国家主権"],
        actualInterest: "重要鉱物における交渉力を外交・通商上のレバレッジとして保持すること",
      },
      {
        campName: "日本政策圏",
        emphasis: "代替供給網構築とリサイクル技術投資の必要性",
        hidden: "代替コストが価格競争力に与える短期的な負担",
        framingWords: ["脱リスク", "サプライチェーンの多元化"],
        actualInterest: "中国への一方的な依存を避けつつ、産業基盤を維持すること",
      },
    ],
    emotionWords: [
      {
        termSlug: "de-risking",
        contextNote: "重要鉱物の文脈で最も頻繁に使われる語であり、対立を避ける言い回しとして機能している",
      },
      {
        termSlug: "economic-security",
        contextNote: "資源の安定供給確保を安全保障課題として位置づける際に使われる",
      },
    ],
    stakeholders: [
      {
        name: "中国政府",
        role: "世界の精製能力の大半を握る供給国",
        interest: "資源管理を通じた交渉レバレッジの保持",
        risk: "代替供給網が確立されれば長期的な交渉力の低下",
      },
      {
        name: "日本政府・企業",
        role: "重要鉱物の輸入国・代替供給網構築の主体",
        interest: "リサイクル技術・新規供給国との連携による依存度低下",
        risk: "代替調達コストの上昇、短期的な価格競争力の低下",
      },
      {
        name: "豪州・カナダ等資源国",
        role: "代替供給網のパートナー候補",
        interest: "新規需要の取り込みによる資源産業の拡大",
        risk: "開発・精製能力構築への投資負担",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: -1 },
        { axis: "industry", score: 2 },
        { axis: "security", score: 1 },
        { axis: "financialMarket", score: 0 },
        { axis: "techSovereignty", score: 2 },
        { axis: "supplyChain", score: -2 },
        { axis: "diplomacy", score: 1 },
      ],
      shortTerm:
        "代替調達コストの上昇により、関連製品のコスト構造に短期的な圧迫が生じる。",
      midTerm:
        "リサイクル技術・新規資源国連携への投資が進めば、関連産業に新たな成長機会が生まれる。",
      longTerm:
        "供給網の多元化に成功すれば対中レバレッジの低下につながるが、構築には長期の投資と時間を要し、途上では脆弱性が残る。",
    },
    investmentImplications:
      "資源リサイクル・代替供給網関連の技術投資は中長期的な政策的後押しを受けやすい領域である。一方で短期的な調達コスト増は関連製造業のマージンを圧迫しうるため、業種・企業ごとの依存度を分けて評価する必要がある。",
    uncertainties: [
      {
        point: "中国の輸出管理強化が今後どこまで対象品目を拡大するか",
        whyUncertain: "通商交渉の進展次第で運用の厳格さが変動しうる",
      },
      {
        point: "代替供給網構築のコストが最終製品価格にどの程度反映されるか",
        whyUncertain: "技術進展・投資規模により精製コストの見通しが不確定",
      },
    ],
    keyIndicators: [
      {
        label: "中国の重要鉱物輸出統計（UN Comtrade等）",
        description: "輸出量・輸出先の変化を定点観測する",
      },
      {
        label: "主要国のリサイクル・代替供給網関連投資の発表",
        description: "代替供給網構築の進捗を確認する",
      },
    ],
    conclusion:
      "脱リスクという言葉は対立を避ける穏健な表現だが、実態は資源の交渉力をめぐる長期戦である。日本にとっては産業育成の機会であると同時に、短期コストを引き受ける覚悟が必要な課題である。",
    readerQuestion:
      "短期的なコスト増を引き受けてでも供給網の多元化を進めるべきか、それとも当面は現実的な依存を維持すべきか、あなたはどう判断するか。",
  },

  {
    slug: "hormuz-strait-energy-security",
    title: "ホルムズ海峡リスクと日本のエネルギー安全保障",
    category: "energy-security",
    publishedAt: "2026-06-20",
    summary:
      "ホルムズ海峡は日本の原油・LNG輸入の主要経路であり、中東情勢の緊張は日本のエネルギー安全保障に直接的な影響を及ぼす。各国の関与の度合いと利害は一様ではない。",
    tags: ["エネルギー安全保障", "中東情勢", "原油", "LNG"],
    overallJapanImpact: -2,
    todaysFocus:
      "ホルムズ海峡周辺の緊張は、日本の原油・LNG輸入経路の脆弱性を改めて浮き立たせている。日本にとっての論点は「誰が正しいか」ではなく、供給混乱が起きた場合にどの程度の代替手段を持っているかである。",
    whatHappened:
      "中東地域における軍事的緊張の高まりを受け、ホルムズ海峡における航行リスクへの懸念が国際的に報じられている。同海峡は世界の海上原油輸送の主要経路であり、日本の原油輸入の多くが同海峡を経由している。関係国は航行の安全確保について異なる立場を表明している。",
    primarySources: [
      {
        sourceSlug: "iiss",
        title: "中東の軍事バランスに関する分析",
        url: "https://www.iiss.org",
        note: "地域の軍事的緊張度を評価するための専門分析",
      },
      {
        sourceSlug: "fred",
        title: "原油価格・エネルギー関連統計",
        url: "https://fred.stlouisfed.org",
        note: "国際原油価格の動向を確認するための参考データ",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "航行の自由の確保と地域の安定維持",
        hidden: "自国のエネルギー自給度が高く、相対的な影響度が小さいという立場の違い",
        framingWords: ["航行の自由", "地域の安定"],
        actualInterest: "中東における軍事的プレゼンスと影響力の維持",
      },
      {
        campName: "ホルムズ海峡沿岸国",
        emphasis: "自国の安全保障上の正当な権利の主張",
        hidden: "海峡封鎖が自国の輸出経路にも影響するという相互依存の側面",
        framingWords: ["主権的権利", "安全保障上の対応"],
        actualInterest: "地域における自国の戦略的立場の確保",
      },
      {
        campName: "日本政策圏",
        emphasis: "エネルギー供給の安定確保と代替調達ルートの検討",
        hidden: "中東依存度の高さに対する構造的な対応の遅れ",
        framingWords: ["エネルギー安全保障", "安定供給"],
        actualInterest: "供給混乱時の代替調達能力と国内備蓄の確保",
      },
    ],
    emotionWords: [
      {
        termSlug: "national-security",
        contextNote: "エネルギー供給の文脈でも安全保障という語が用いられ、軍事と経済の論点が混在しやすい",
      },
      {
        termSlug: "international-order",
        contextNote: "航行の自由を巡る議論で、秩序維持を訴える側の正当化に使われる",
      },
    ],
    stakeholders: [
      {
        name: "日本政府・エネルギー企業",
        role: "原油・LNGの主要輸入国",
        interest: "供給の安定確保、代替調達ルートの確保",
        risk: "海峡封鎖・緊張激化時の供給混乱、価格上昇による経済負担",
      },
      {
        name: "米国",
        role: "地域の軍事的プレゼンスを持つ主体",
        interest: "地域における影響力の維持",
        risk: "軍事的コミットメントの拡大に伴う負担",
      },
      {
        name: "ホルムズ海峡沿岸国",
        role: "海峡の地理的な統制力を持つ主体",
        interest: "自国の戦略的立場・交渉力の確保",
        risk: "自国の石油輸出経路も同時にリスクを負う",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: -3 },
        { axis: "industry", score: -1 },
        { axis: "security", score: -1 },
        { axis: "financialMarket", score: -2 },
        { axis: "techSovereignty", score: 0 },
        { axis: "energy", score: -4 },
        { axis: "supplyChain", score: -2 },
        { axis: "diplomacy", score: 0 },
      ],
      shortTerm:
        "原油・LNG価格の上昇により、輸入コストの増加と企業コスト・消費者物価への押し上げ圧力が生じる。",
      midTerm:
        "供給混乱が長期化する場合、代替調達ルート（北米・他中東地域）への切り替えコストが発生する。",
      longTerm:
        "中東依存度の高さが構造的な脆弱性として再認識され、エネルギー調達の多元化・備蓄政策の見直しが進む可能性がある。",
    },
    investmentImplications:
      "エネルギー関連株式・為替市場は中東情勢の緊張度に敏感に反応しやすい。断定的な投資判断は避けるべきだが、原油価格上昇時のコスト構造（輸入依存度の高い業種への影響）を確認する視点が必要である。",
    uncertainties: [
      {
        point: "軍事的緊張が実際の航行制限・海峡封鎖に至るかどうか",
        whyUncertain: "関係国の意図と能力の双方が不透明であり、現時点では推測の域を出ない",
      },
      {
        point: "日本の代替調達ルート・備蓄でどの程度の期間を乗り切れるか",
        whyUncertain: "公開情報では国家備蓄の運用詳細が限定的にしか確認できない",
      },
    ],
    keyIndicators: [
      {
        label: "国際原油価格（WTI・ブレント）の動向",
        description: "供給リスクの市場評価を確認する",
      },
      {
        label: "経済産業省・資源エネルギー庁の備蓄・調達関連発表",
        description: "日本側の対応策の進捗を確認する",
      },
    ],
    conclusion:
      "ホルムズ海峡の緊張は、誰が正しいかという物語ではなく、供給網のどこに脆弱性があるかという構造の問題である。日本にとって重要なのは、緊張の当事者にならないことよりも、混乱が起きた場合にどれだけ耐えられるかという備えである。",
    readerQuestion:
      "あなたの暮らしや仕事は、原油・LNG価格が大きく上昇した場合にどの程度の影響を受けるだろうか。",
  },

  {
    slug: "taiwan-contingency-supply-chain",
    title: "台湾有事と日本のサプライチェーン",
    category: "geopolitics",
    publishedAt: "2026-05-28",
    summary:
      "台湾海峡の軍事的緊張シナリオは、防衛上の論点であると同時に、先端半導体の生産能力が集中する地域が混乱した場合の経済的打撃という、安全保障と経済が直結する論点である。",
    tags: ["台湾", "サプライチェーン", "半導体", "有事シナリオ"],
    overallJapanImpact: -3,
    todaysFocus:
      "台湾海峡における軍事的緊張シナリオは、日本にとって防衛上の問題であると同時に、半導体・部材の供給網が集中する地域が混乱した場合の経済的打撃という、安全保障と経済が直結する論点である。",
    whatHappened:
      "台湾周辺における中国軍の活動頻度の高まりが各国の防衛当局・シンクタンクによって報告されており、有事シナリオに関する分析が増えている。台湾には先端半導体の生産能力が高度に集中しており、同地域の供給網混乱リスクは日本企業の調達計画にも影響を与えている。",
    primarySources: [
      {
        sourceSlug: "rieti",
        title: "経済安全保障とサプライチェーン集中リスクに関する分析",
        url: "https://www.rieti.go.jp",
      },
      {
        sourceSlug: "iiss",
        title: "台湾周辺の軍事バランスに関する分析",
        url: "https://www.iiss.org",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "台湾海峡の安定と同盟国への防衛コミットメント",
        hidden: "台湾防衛への実際の軍事的コミットメントの水準があいまいである現実",
        framingWords: ["現状維持", "抑止力"],
        actualInterest: "同盟国に対する信頼性の維持と先端半導体製造能力への関与確保",
      },
      {
        campName: "中国（公式）",
        emphasis: "台湾問題は内政問題であり他国の干渉を許さないという立場",
        hidden: "軍事的圧力の高まりが地域の経済活動に与える影響",
        framingWords: ["核心的利益", "一つの中国", "内政問題"],
        actualInterest: "台湾への影響力拡大と国際的な干渉の排除",
      },
      {
        campName: "台湾",
        emphasis: "自国の民主主義体制と先端産業における経済的役割の重要性",
        hidden: "軍事力の非対称性という構造的な脆弱性",
        framingWords: ["民主主義の防波堤", "シリコンシールド"],
        actualInterest: "半導体産業の重要性を外交的レバレッジとして活用すること",
      },
      {
        campName: "日本政策圏",
        emphasis: "地域の安定確保と経済安全保障の両立",
        hidden: "有事シナリオにおける日本自身の対応能力の制約",
        framingWords: ["台湾有事は日本有事", "サプライチェーンの強靭化"],
        actualInterest: "半導体供給の代替手段確保と地域安定への関与",
      },
    ],
    emotionWords: [
      {
        termSlug: "national-security",
        contextNote:
          "「台湾有事は日本有事」という表現は、安全保障の語を日本国内の防衛論議に直結させる効果を持つ",
      },
      {
        termSlug: "hegemonism",
        contextNote:
          "中国が他国の干渉を「覇権主義的」と描写する一方、他国は中国の軍事的圧力を同じ語で描写する非対称な構図がある",
      },
    ],
    stakeholders: [
      {
        name: "日本政府・企業",
        role: "半導体輸入国であり域内安定の利害関係者",
        interest: "供給網の多元化と地域安定の維持",
        risk: "有事発生時の供給混乱、防衛負担の増大",
      },
      {
        name: "台湾政府・主要半導体企業",
        role: "世界の先端半導体生産の中核拠点",
        interest: "自社の戦略的重要性を外交的レバレッジとして活用すること",
        risk: "軍事的緊張の直接的な当事者となるリスク",
      },
      {
        name: "米国政府",
        role: "台湾への防衛支援の主体（正式な同盟関係ではない）",
        interest: "同盟国への信頼性維持と技術優位の確保",
        risk: "直接的な軍事衝突への関与拡大",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: -2 },
        { axis: "industry", score: -3 },
        { axis: "security", score: -3 },
        { axis: "financialMarket", score: -2 },
        { axis: "techSovereignty", score: -2 },
        { axis: "supplyChain", score: -4 },
        { axis: "diplomacy", score: -1 },
      ],
      shortTerm:
        "緊張の高まり自体が市場の警戒感を強め、関連企業の株価・調達計画に影響を与える。",
      midTerm:
        "供給網の代替拠点（国内誘致・他地域への分散）への投資が加速する可能性があるが、完全な代替には時間を要する。",
      longTerm:
        "有事が実際に発生した場合、半導体供給の停止は日本の製造業全体に深刻な影響を及ぼす。発生回避と代替能力構築の両方が長期課題となる。",
    },
    investmentImplications:
      "半導体関連企業の地理的集中リスクは、有事シナリオの蓋然性とは別に、調達多元化という観点で投資判断材料になりうる。断定的な予測は避けるべきだが、供給網の地理的分散度を企業ごとに確認する視点は有効である。",
    uncertainties: [
      {
        point: "軍事的緊張が実際の有事に至る蓋然性",
        whyUncertain: "各国の意図・能力の評価が分析機関によって異なる",
      },
      {
        point: "有事発生時の供給混乱の規模・期間",
        whyUncertain: "過去に同等の事例がなく、想定の精度に限界がある",
      },
    ],
    keyIndicators: [
      {
        label: "台湾周辺での軍事活動の頻度・規模（IISS等の分析）",
        description: "緊張の高まりの度合いを定点観測する",
      },
      {
        label: "主要半導体企業の生産拠点分散計画の発表",
        description: "供給網多元化の進捗を確認する",
      },
    ],
    conclusion:
      "台湾海峡の緊張は、安全保障の問題であると同時に経済の問題である。日本にとって重要なのは、有事の発生を防ぐ外交努力と、発生した場合の打撃を最小化する供給網の備えを、別々の課題として同時に進めることである。",
    readerQuestion:
      "あなたの仕事や暮らしは、半導体の供給が数ヶ月止まった場合にどの程度の影響を受けるだろうか。",
  },

  {
    slug: "brics-expansion-de-dollarization",
    title: "BRICS拡大と脱ドル論",
    category: "economic-security",
    publishedAt: "2026-06-02",
    summary:
      "BRICSの拡大と「脱ドル化」の議論は既存秩序への挑戦として報じられがちだが、実態は参加国ごとに異なる利害が混在する緩やかな枠組みである。日本への直接的影響は限定的だが、長期的な構造変化として注視が必要。",
    tags: ["BRICS", "脱ドル化", "国際金融秩序", "多極化"],
    overallJapanImpact: 0,
    todaysFocus:
      "BRICSの拡大と「脱ドル化」の議論は、既存の国際金融秩序への挑戦として報じられがちだが、実態は参加国ごとに異なる利害が混在する緩やかな枠組みである。日本への影響は限定的だが、長期的な国際金融秩序の構造変化として注視が必要である。",
    whatHappened:
      "BRICS（ブラジル・ロシア・インド・中国・南アフリカ）は加盟国・パートナー国の拡大を進めており、自国通貨での貿易決済拡大や独自の決済インフラ整備が議題となっている。米ドル基軸体制への依存を下げる「脱ドル化」が一部加盟国で主張されているが、共通通貨創設のような統合的な動きには至っていない。",
    primarySources: [
      {
        sourceSlug: "imf",
        title: "国際決済における通貨別シェアに関する統計",
        url: "https://www.imf.org",
      },
      {
        sourceSlug: "the-hindu",
        title: "BRICSにおけるインドの立場に関する報道・分析",
        url: "https://www.thehindu.com",
      },
    ],
    narrativeViews: [
      {
        campName: "中国（公式）",
        emphasis: "多極的で公正な国際金融秩序の必要性",
        hidden: "人民元の国際化が自国の資本規制との整合性に課題を残す点",
        framingWords: ["多極化", "公正で合理的な国際秩序"],
        actualInterest: "人民元の国際的地位向上と米国の金融制裁への耐性強化",
      },
      {
        campName: "インド",
        emphasis: "自国の戦略的自律性とBRICS内での独自路線",
        hidden: "ロシア・中国主導の枠組みに完全には同調しない姿勢",
        framingWords: ["戦略的自律", "多様な秩序"],
        actualInterest: "米中いずれにも依存しない交渉力の確保",
      },
      {
        campName: "米国",
        emphasis: "BRICSの脱ドル化論は実現性が低いという評価",
        hidden: "米ドル基軸体制が米国自身の財政運営に与えている特権的な利益",
        framingWords: ["現実的でない構想", "結束力の弱い枠組み"],
        actualInterest: "ドル基軸体制の維持",
      },
      {
        campName: "欧州金融圏",
        emphasis: "国際金融システムの安定性という実務的観点",
        hidden: "ユーロもまた基軸通貨としての地位を確立できていない現実",
        framingWords: ["システミックリスク", "多角的な監視"],
        actualInterest: "既存の金融規制・監督の枠組みを維持すること",
      },
    ],
    emotionWords: [
      {
        termSlug: "multipolarity",
        contextNote:
          "BRICS関連の発信で多用されるが、提唱国自身が地域内での影響力拡大を志向している側面もある",
      },
      {
        termSlug: "international-order",
        contextNote: "既存秩序の主導権争いという側面が、脱ドル化論の背景にある",
      },
    ],
    stakeholders: [
      {
        name: "中国政府",
        role: "BRICS拡大の主導的推進者",
        interest: "人民元国際化と金融制裁耐性の強化",
        risk: "資本規制を維持したままでは国際化の限界が残る",
      },
      {
        name: "インド政府",
        role: "BRICS加盟国だが米国とも関係を深化させる立場",
        interest: "戦略的自律性の確保",
        risk: "BRICS内の中国主導色が強まることへの警戒",
      },
      {
        name: "米国政府・金融当局",
        role: "既存基軸通貨体制の管理者",
        interest: "ドル基軸体制の維持",
        risk: "財政赤字の拡大等による長期的な信認低下リスク",
      },
      {
        name: "日本政府・企業",
        role: "既存ドル基軸体制の参加者",
        interest: "国際金融システムの安定",
        risk: "BRICS拡大が長期的に貿易決済の選択肢を複雑化させる可能性",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: 0 },
        { axis: "financialMarket", score: -1 },
        { axis: "diplomacy", score: 1 },
        { axis: "supplyChain", score: 0 },
      ],
      shortTerm: "短期的に日本の貿易・金融実務への直接的な影響は限定的である。",
      midTerm:
        "一部新興国との貿易において自国通貨決済の選択肢が増えることで、日本企業の決済実務がやや複雑化する可能性がある。",
      longTerm:
        "国際金融秩序が完全な多極化に至るかは不確実だが、米ドル一極依存を前提とした金融戦略の見直しが緩やかに進む可能性がある。",
    },
    investmentImplications:
      "「脱ドル化」という言葉の強さに反応した短期的な市場の動きと、実際の決済構造の変化速度は一致しないことが多い。為替・国際金融関連の投資判断においては、BRICS各国の実際の決済データの推移を確認する視点が有効である。",
    uncertainties: [
      {
        point: "BRICS共通の決済インフラがどこまで実用化されるか",
        whyUncertain: "加盟国間の利害調整が進んでいない",
      },
      {
        point: "人民元の国際化が中国の資本規制緩和を伴うか",
        whyUncertain: "中国国内の金融政策の方向性に依存する",
      },
    ],
    keyIndicators: [
      {
        label: "BIS・IMFの国際決済における通貨別シェア統計",
        description: "ドル依存度の実際の変化を定点観測する",
      },
      {
        label: "BRICS首脳会議での決済インフラに関する具体的合意の有無",
        description: "脱ドル化論の制度化がどこまで進んでいるかを確認する",
      },
    ],
    conclusion:
      "「脱ドル化」は政治的なスローガンとしての強さと、実際の制度変化の速度が一致しない典型的な事例である。日本にとっては過度に反応する必要はないが、国際金融秩序の緩やかな多極化という長期トレンドそのものは無視できない。",
    readerQuestion:
      "「脱ドル化」という言葉を聞いたとき、あなたはそれを政治的な主張として読むか、実際の制度変化として読むか。",
  },

  {
    slug: "india-strategic-autonomy",
    title: "インドの戦略的自律",
    category: "geopolitics",
    publishedAt: "2026-06-06",
    summary:
      "インドは米国主導の枠組み（クアッド等）にも、中国・ロシア主導の枠組み（BRICS等）にも同時に参加する独自路線を取っている。日本にとってインドは、米中対立の構図に当てはめて理解すべきではないパートナーである。",
    tags: ["インド", "戦略的自律", "クアッド", "BRICS"],
    overallJapanImpact: 1,
    todaysFocus:
      "インドは米国主導の対中協調枠組み（クアッド等）にも、中国・ロシア主導の枠組み（BRICS、上海協力機構）にも同時に参加するという、いずれの陣営にも完全には属さない外交姿勢を取っている。日本にとってインドは、米中対立の構図に当てはめて理解すべきではないパートナーである。",
    whatHappened:
      "インドはクアッド（日米豪印）の枠組みで対中警戒を共有する一方、BRICSや上海協力機構など中国・ロシアが主導する枠組みにも参加を続けている。ロシアとの軍事・エネルギー関係も維持しており、西側の対ロシア制裁にも全面的には同調していない。",
    primarySources: [
      {
        sourceSlug: "the-hindu",
        title: "インドの外交的立場に関する報道・分析",
        url: "https://www.thehindu.com",
      },
      {
        sourceSlug: "csis",
        title: "米国側から見たインドの戦略的価値に関する分析",
        url: "https://www.csis.org",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "インドを対中バランシングの戦略的パートナーとして位置づける姿勢",
        hidden: "インドが米国の期待する水準の同盟的コミットメントを示していない現実",
        framingWords: ["自由で開かれたインド太平洋", "価値観を共有するパートナー"],
        actualInterest: "対中バランシングにおけるインドの戦略的価値の最大化",
      },
      {
        campName: "インド",
        emphasis: "いかなる陣営にも従属しない独自の国益判断",
        hidden: "対中国境問題という安全保障上の脆弱性",
        framingWords: ["戦略的自律", "多極化する世界"],
        actualInterest: "米中ロいずれからも実利を引き出す等距離外交",
      },
      {
        campName: "中国（公式）",
        emphasis: "インドとの協力余地を強調しつつクアッドを批判する姿勢",
        hidden: "国境問題における対インドの圧力",
        framingWords: ["陣営対立に反対", "真の多国間主義"],
        actualInterest: "インドをクアッドから引き離し対中包囲網を弱めること",
      },
      {
        campName: "日本政策圏",
        emphasis: "インドとの経済・防衛協力拡大の機会",
        hidden: "インドが対中政策で日本と完全には同じ立場を取らない可能性",
        framingWords: ["インド太平洋の要", "信頼のパートナー"],
        actualInterest: "対中リスク分散先としてのインドの経済的・戦略的価値",
      },
    ],
    emotionWords: [
      {
        termSlug: "strategic-autonomy",
        contextNote: "インド外交を理解する際の中心的な概念であり、同盟国型の行動原理とは異なる",
      },
      {
        termSlug: "multipolarity",
        contextNote: "インドがBRICS等の枠組みで多用する語で、米国主導秩序からの距離を示す",
      },
      {
        termSlug: "free-and-open-indo-pacific",
        contextNote:
          "米国・日本がインドとの協力で用いる語だが、インドにとっての意味は同盟的コミットメントを含意しない",
      },
    ],
    stakeholders: [
      {
        name: "インド政府",
        role: "等距離外交の主体",
        interest: "米中ロいずれからも実利を確保すること",
        risk: "どの陣営からも完全な信頼を得られないリスク",
      },
      {
        name: "米国政府",
        role: "クアッドを通じた対中連携の推進者",
        interest: "インドの戦略的価値の取り込み",
        risk: "インドの独自路線により同盟的な一体性が制約される",
      },
      {
        name: "日本政府・企業",
        role: "インドとの経済・防衛協力拡大の主体",
        interest: "対中リスク分散先・成長市場としてのインド",
        risk: "インドの対中姿勢が日本の想定と異なる場合の協調の限界",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "economy", score: 2 },
        { axis: "industry", score: 2 },
        { axis: "security", score: 1 },
        { axis: "diplomacy", score: 2 },
        { axis: "supplyChain", score: 1 },
      ],
      shortTerm:
        "インド市場・製造拠点としての関心が高まり、対中リスク分散の選択肢として日本企業の検討が進む。",
      midTerm:
        "クアッドの枠組みでの防衛・技術協力は進展しうるが、インドの対ロ関係・BRICS参加という独自路線とのバランスを前提とした協力設計が必要になる。",
      longTerm:
        "インドが今後どの程度同盟的な行動を強めるか、あるいは等距離外交を維持するかによって、日本の対印戦略の前提が変わる。",
    },
    investmentImplications:
      "インド市場・製造拠点への関心は中長期的な構造トレンドとして妥当性があるが、インドが「同盟国」と同じ行動原理で動くという前提は誤解を招きやすい。個別の協力分野ごとにインドの実際の利害を確認する視点が必要である。",
    uncertainties: [
      {
        point: "インドが対ロシア関係をどの程度まで維持するか",
        whyUncertain: "エネルギー・軍事調達上の実利と西側との関係のバランスが今後の交渉次第である",
      },
      {
        point: "クアッドの実効性が今後どこまで深化するか",
        whyUncertain: "インド側の同盟的コミットメントの度合いに依存する",
      },
    ],
    keyIndicators: [
      {
        label: "クアッド首脳会議での具体的合意内容",
        description: "防衛・技術協力の実質的な進展度を確認する",
      },
      {
        label: "インドの対ロシア・対中貿易統計の推移",
        description: "等距離外交の実態を数値で確認する",
      },
    ],
    conclusion:
      "インドを米中対立の片方の陣営に当てはめて理解しようとすると、判断を誤る。戦略的自律という姿勢そのものが、インドにとっての国益最大化の手段であることを前提に、協力分野ごとの実利を見る必要がある。",
    readerQuestion:
      "同盟国でも対立国でもない大国とどう付き合うべきか、あなたはどう考えるか。",
  },

  {
    slug: "hegemonism-chinese-state-media",
    title: "中国公式メディアが語る「覇権主義」の意味",
    category: "geopolitics",
    publishedAt: "2026-06-12",
    summary:
      "中国の公式メディア・外交部が頻繁に用いる「覇権主義」という言葉は、単純な批判表現ではなく、特定の国際秩序観を前提とした正当化ロジックである。本記事ではこの言葉自体を分析対象とする。",
    tags: ["覇権主義", "中国", "公式ナラティブ", "言説分析"],
    overallJapanImpact: 0,
    todaysFocus:
      "中国の公式メディア・外交部が頻繁に用いる「覇権主義」という言葉は、単純な批判表現ではなく、特定の国際秩序観を前提とした正当化ロジックである。この記事では、その言葉自体を分析対象とする。",
    whatHappened:
      "新華社・人民網・中国外交部の発信において、「覇権主義」という言葉は主に米国およびその同盟国の行動を指す際に繰り返し使われている。同時に、中国自身の行動については「正当な権利の行使」「平和的発展」として説明されており、同じ行動原理が当事者によって異なる語で描写される構図がある。",
    primarySources: [
      {
        sourceSlug: "xinhua",
        title: "新華社の対外発信における「覇権主義」関連の表現",
        url: "https://www.xinhuanet.com",
        note: "事実認定の根拠としてではなく、公式ナラティブの原文確認として使用",
      },
      {
        sourceSlug: "mofa-china",
        title: "中国外交部の記者会見・声明",
        url: "https://www.mfa.gov.cn",
        note: "公式声明の原文確認として使用",
      },
    ],
    narrativeViews: [
      {
        campName: "中国（公式）",
        emphasis: "米国の同盟ネットワーク・軍事プレゼンスを覇権主義の典型例として描写",
        hidden: "自国の軍事力拡大・周辺国への圧力行使",
        framingWords: ["覇権主義", "強権政治", "陣営対立"],
        actualInterest:
          "自国の行動を「防御的・正当」、相手の行動を「覇権的」と位置づける言説上の優位確保",
      },
      {
        campName: "米国",
        emphasis: "自国の同盟関係は自由な選択に基づく協力であり覇権ではないという反論",
        hidden: "自国もまた影響力拡大を志向している側面",
        framingWords: ["価値を共有する同盟", "自由な選択"],
        actualInterest: "既存の同盟ネットワークの正当性維持",
      },
      {
        campName: "第三極（ASEAN等）",
        emphasis: "どちらの陣営の「覇権主義」批判にも距離を置く実務的な姿勢",
        hidden: "自国も大国間で実利を取る等距離外交を行っている点",
        framingWords: ["陣営対立に巻き込まれない", "ASEANの中心性"],
        actualInterest: "大国間競争から一定の自律性を確保すること",
      },
      {
        campName: "日本政策圏",
        emphasis: "中国の軍事的影響力拡大への警戒",
        hidden: "日本自身の対米依存という非対称性",
        framingWords: ["力による一方的な現状変更", "規範に基づく秩序"],
        actualInterest: "既存の同盟関係の正当性を訴えつつ中国の影響力拡大を牽制すること",
      },
    ],
    emotionWords: [
      {
        termSlug: "hegemonism",
        contextNote: "本記事そのものの分析対象であり、米中双方が互いに対して使用する非対称な構図を扱う",
      },
      {
        termSlug: "international-order",
        contextNote: "「覇権主義」批判の背景には、誰が秩序を設計したかという主導権争いがある",
      },
    ],
    stakeholders: [
      {
        name: "中国政府",
        role: "「覇権主義」という語の最も頻繁な使用者",
        interest: "自国の行動の正当化と相手国への言説上の攻勢",
        risk: "自国の行動が同じ基準で評価された場合の説明の一貫性の欠如",
      },
      {
        name: "米国政府",
        role: "「覇権主義」という語の主な対象",
        interest: "同盟ネットワークの正当性維持",
        risk: "自国の影響力拡大行動が同様に批判される可能性",
      },
      {
        name: "ASEAN・グローバルサウス諸国",
        role: "両陣営の言説競争の観客であり同時に実利の取り手",
        interest: "どちらの陣営にも与しない実務的立場の維持",
        risk: "大国間競争に巻き込まれることへの警戒",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "security", score: -1 },
        { axis: "diplomacy", score: 0 },
        { axis: "economy", score: 0 },
      ],
      shortTerm:
        "言説競争そのものが日本の実務に直接影響することは少ないが、報道の受け止め方を通じて国内の対中認識に影響する。",
      midTerm:
        "「覇権主義」という語をめぐる言説競争が、地域における規範形成・国際会議での発言力争いに影響を与える可能性がある。",
      longTerm:
        "どちらの陣営の言説が国際的な多数派の支持を得るかは、ASEAN・グローバルサウス諸国の対応次第であり、日本の外交的立ち位置にも影響しうる。",
    },
    investmentImplications:
      "本記事は言説分析が中心であり、直接的な投資示唆は限定的である。ただし、地域の規範形成競争が将来的な通商・投資ルールの方向性に影響する可能性がある点は留意に値する。",
    uncertainties: [
      {
        point: "「覇権主義」という語の国際的な説得力が今後どう変化するか",
        whyUncertain: "ASEAN・グローバルサウス諸国の反応次第である",
      },
      {
        point: "中国国内でこの言説がどこまで対外政策の実際の行動を規定しているか",
        whyUncertain: "公式発信と実際の行動の一致度は外部からは検証しにくい",
      },
    ],
    keyIndicators: [
      {
        label: "国際会議（G20、ASEAN関連会議等）でのグローバルサウス諸国の発言内容",
        description: "言説競争の受け止められ方を確認する",
      },
      {
        label: "中国外交部・新華社の発信頻度・対象国の変化",
        description: "公式ナラティブの強度・対象範囲の変化を定点観測する",
      },
    ],
    conclusion:
      "「覇権主義」という言葉は、誰が使っても自国の行動を正当化し相手の行動を否定するために機能する。この言葉が出てきたときに重要なのは、その言葉に同調することではなく、双方の具体的な行動を比較することである。",
    readerQuestion:
      "「覇権主義」という言葉を見たとき、あなたは誰の行動を指しているかをすぐに具体的に説明できるだろうか。",
  },

  {
    slug: "ai-export-controls-tech-sovereignty",
    title: "AI輸出管理と日本の技術主権",
    category: "technology",
    publishedAt: "2026-06-17",
    summary:
      "AI関連技術の輸出管理が国際的に強化される中、日本は規制の主体ではなく米国の規制枠組みに同調する立場にある。技術主権の確保という観点では、自律的な能力構築が課題として残る。",
    tags: ["AI", "輸出管理", "技術主権", "経済安全保障"],
    overallJapanImpact: 1,
    todaysFocus:
      "AI関連技術（先端半導体、AIモデルそのもの、学習基盤）の輸出管理が国際的に強化される中、日本は規制の主体ではなく、米国の規制枠組みに同調する立場にある。技術主権の確保という観点では、自律的な能力構築が課題として残る。",
    whatHappened:
      "米国は高性能AIチップ・AIモデルの輸出管理を継続的に見直しており、同盟国に対しても同様の管理を求める動きがある。日本政府はAI関連の技術基盤整備・国内データセンター投資を進めつつ、米国の規制枠組みとの整合性を取る必要に迫られている。",
    primarySources: [
      {
        sourceSlug: "csis",
        title: "米国のAI技術政策・輸出管理に関する分析",
        url: "https://www.csis.org",
      },
      {
        sourceSlug: "rieti",
        title: "日本のAI関連産業政策に関する分析",
        url: "https://www.rieti.go.jp",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "AI技術における安全性確保と同盟国との協調体制",
        hidden: "自国AI産業の競争優位を維持する産業政策的側面",
        framingWords: ["責任あるAI", "信頼できる技術圏"],
        actualInterest: "AI技術における自国優位の維持と同盟国を含めた供給網の管理",
      },
      {
        campName: "中国（公式）",
        emphasis: "AI技術における自主的な発展能力の追求",
        hidden: "規制によって受ける実際の制約の大きさ",
        framingWords: ["科技自立自強", "技術封鎖への反対"],
        actualInterest: "規制の影響を緩和しつつ国産AI技術基盤を確立する時間の確保",
      },
      {
        campName: "日本政策圏",
        emphasis: "AI基盤整備における国際協調と国内投資の両立",
        hidden: "計算資源・先端人材の多くを海外に依存している現実",
        framingWords: ["技術主権", "信頼できるAIエコシステム"],
        actualInterest: "米国の技術圏に留まりながら国内のAI基盤投資を進めること",
      },
    ],
    emotionWords: [
      {
        termSlug: "economic-security",
        contextNote: "AI関連技術の輸出管理は経済安全保障政策の一部として説明される",
      },
      {
        termSlug: "national-security",
        contextNote: "AI輸出管理は国家安全保障の名目で行われるが射程は産業競争力にも及ぶ",
      },
    ],
    stakeholders: [
      {
        name: "米国政府",
        role: "AI関連の輸出管理の設計主体",
        interest: "AI技術における優位の維持",
        risk: "過度な規制が同盟国の技術投資意欲を損なうリスク",
      },
      {
        name: "日本政府・企業",
        role: "AI基盤整備の投資主体",
        interest: "国内データセンター・AI人材育成の推進",
        risk: "計算資源の供給を依然米国に依存する構造的制約",
      },
      {
        name: "中国政府・AI企業",
        role: "規制対象でありAI自主開発の推進主体",
        interest: "技術自立の時間確保",
        risk: "先端チップへのアクセス制限による開発速度の制約",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "industry", score: 2 },
        { axis: "techSovereignty", score: 1 },
        { axis: "economy", score: 1 },
        { axis: "supplyChain", score: -1 },
        { axis: "diplomacy", score: 0 },
      ],
      shortTerm:
        "国内AI基盤整備への投資が進む一方、先端AIチップの供給は依然米国の規制枠組みに依存する。",
      midTerm:
        "国内データセンター・電力供給インフラへの投資が進めば、AI関連産業に成長機会が生まれる。",
      longTerm:
        "計算資源・基盤モデルにおける自律的な能力構築に成功するかどうかが、日本の技術主権の実質的な水準を左右する。",
    },
    investmentImplications:
      "AI関連のデータセンター・電力・半導体装置への投資は政策的な後押しを受けやすい領域だが、基盤モデル開発における国際競争力は別途評価が必要である。断定的な投資判断ではなく、計算資源の自給率という観点での進捗確認が有効である。",
    uncertainties: [
      {
        point: "米国の輸出管理が今後どこまで同盟国にも適用範囲を広げるか",
        whyUncertain: "米国内の政策方針次第で変動しうる",
      },
      {
        point: "日本国内のAI基盤投資が国際競争力を持つ水準に到達するか",
        whyUncertain: "投資規模・人材確保の進捗に依存する",
      },
    ],
    keyIndicators: [
      {
        label: "米国のAI関連輸出管理規則の改定",
        description: "適用範囲・対象技術の拡大有無を確認する",
      },
      {
        label: "日本国内のデータセンター・AI関連投資の発表状況",
        description: "技術主権構築の進捗を確認する",
      },
    ],
    conclusion:
      "AI技術主権という言葉は心強く響くが、実態は計算資源・先端人材の多くを海外に依存した状態からの出発である。日本にとって重要なのは、技術主権を「すでに持っているもの」として語るのではなく、「構築すべき課題」として認識することである。",
    readerQuestion:
      "あなたの仕事で使うAIサービスは、どの国の計算資源・モデルに依存しているか把握しているだろうか。",
  },

  {
    slug: "japan-us-security-treaty-diplomatic-space",
    title: "日米安保と日本の外交余地",
    category: "geopolitics",
    publishedAt: "2026-06-21",
    summary:
      "日米安全保障条約は日本の防衛政策の基盤であり続けているが、同盟への依存度の高さは対中・対ロシア外交における日本の独自の交渉余地を制約する側面も持つ。安保体制は利益とコストの両方で評価する必要がある。",
    tags: ["日米安保", "外交", "同盟", "防衛協力"],
    overallJapanImpact: 1,
    todaysFocus:
      "日米安全保障条約は日本の防衛政策の基盤であり続けているが、同盟への依存度の高さは、対中・対ロシア外交における日本の独自の交渉余地を制約する側面も持つ。安保体制の評価は、利益とコストの両方を見る必要がある。",
    whatHappened:
      "日米両政府は防衛協力の深化（共同訓練、装備協力、指揮統制の連携強化等）を継続している。同時に、日本国内では防衛費増額や同盟への依存度の高さについて、与野党・論者の間で評価が分かれている。",
    primarySources: [
      {
        sourceSlug: "jiia",
        title: "日米同盟の政策圏における評価分析",
        url: "https://www.jiia.or.jp",
      },
      {
        sourceSlug: "csis",
        title: "米国側から見た同盟政策に関する分析",
        url: "https://www.csis.org",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "日米同盟はインド太平洋における安定の基盤であるという位置づけ",
        hidden: "同盟関係が米国自身の前方展開戦略上の利益でもある点",
        framingWords: ["基盤となる同盟", "責任の共有"],
        actualInterest: "同盟国の防衛負担拡大による自国の戦略的負担軽減",
      },
      {
        campName: "日本政策圏",
        emphasis: "同盟強化による抑止力向上と地域の安定",
        hidden: "同盟への依存度の高さが対米交渉力を制約する側面",
        framingWords: ["日米同盟の深化", "切れ目のない対応"],
        actualInterest: "防衛負担の分担と同時に米国の防衛コミットメントを確実なものにすること",
      },
      {
        campName: "中国（公式）",
        emphasis: "日米同盟の強化を地域の緊張を高める要因として描写",
        hidden: "自国の軍事活動の活発化が同盟強化の一因になっている点",
        framingWords: ["冷戦的思考", "陣営対立の煽動"],
        actualInterest: "日米同盟の強化を牽制し地域における影響力を確保すること",
      },
    ],
    emotionWords: [
      {
        termSlug: "deterrence",
        contextNote: "同盟深化の説明で多用されるが、相手国からは脅威増大として描写されやすい",
      },
      {
        termSlug: "national-security",
        contextNote: "防衛費増額・同盟深化の正当化に用いられる中心的な語",
      },
    ],
    stakeholders: [
      {
        name: "日本政府",
        role: "同盟関係の当事者であり防衛政策の主体",
        interest: "抑止力の確保と防衛コミットメントの確実化",
        risk: "防衛負担の増大、対米交渉力の構造的な制約",
      },
      {
        name: "米国政府",
        role: "同盟関係の当事者であり前方展開戦略の主体",
        interest: "同盟国の防衛負担拡大による自国負担の軽減",
        risk: "過度な要求による同盟国内の反発",
      },
      {
        name: "中国政府",
        role: "同盟強化の対象として位置づけられる主体",
        interest: "日米同盟強化の牽制",
        risk: "自国の軍事活動が同盟強化を招く悪循環",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "security", score: 2 },
        { axis: "diplomacy", score: -1 },
        { axis: "economy", score: -1 },
        { axis: "financialMarket", score: 0 },
        { axis: "industry", score: 1 },
      ],
      shortTerm: "防衛費増額に伴う財政負担が、他の政策分野の予算配分に影響を与える。",
      midTerm: "同盟深化に伴う装備・技術協力が、防衛産業に成長機会をもたらす可能性がある。",
      longTerm:
        "同盟への依存度の高さが、対中・対ロシア外交における独自の交渉余地をどの程度制約するかは、今後の同盟運用の実際の柔軟性に依存する。",
    },
    investmentImplications:
      "防衛関連産業への政策的な後押しは中長期的な構造トレンドとして妥当性があるが、防衛費の配分・装備調達の具体的な方針次第で受益する企業・分野は異なる。断定的な投資判断ではなく、予算配分の具体的な内容を確認する視点が必要である。",
    uncertainties: [
      {
        point: "防衛費の増額がどの程度の規模・期間で実施されるか",
        whyUncertain: "財政状況・政治状況により変動しうる",
      },
      {
        point: "同盟深化が日本の独自外交余地をどの程度制約するか",
        whyUncertain: "今後の同盟運用の実例を見るまで評価が難しい",
      },
    ],
    keyIndicators: [
      {
        label: "防衛省の予算編成・中期防衛力整備計画の発表",
        description: "防衛費増額の規模・配分を確認する",
      },
      {
        label: "日米安全保障協議委員会（2+2）等の共同発表内容",
        description: "同盟深化の具体的な方向性を確認する",
      },
    ],
    conclusion:
      "同盟は安全保障上の利益とコストの両方をもたらす。日米同盟を「守られている」という受益の物語だけで理解すると、対米交渉力という観点での構造的な制約を見落とすことになる。",
    readerQuestion:
      "同盟関係において、日本はどこまで独自の判断を保持できているとあなたは考えるか。",
  },

  {
    slug: "defense-spending-media-views",
    title: "防衛費増額を各国メディアはどう見るか",
    category: "geopolitics",
    publishedAt: "2026-06-24",
    summary:
      "日本の防衛費増額は、米国メディアでは同盟強化として、中国公式メディアでは軍国主義復活の懸念として、欧州メディアでは財政・産業の論点として報じられている。同じ事実が報じられ方によって異なる印象を生む典型例である。",
    tags: ["防衛費", "軍事バランス", "メディア比較"],
    overallJapanImpact: 0,
    todaysFocus:
      "日本の防衛費増額は、米国メディアでは同盟強化として、中国公式メディアでは軍国主義復活の懸念として、欧州メディアでは財政・産業の論点として、それぞれ異なる枠組みで報じられている。同じ事実が報じられ方によってまったく異なる印象を生む典型例である。",
    whatHappened:
      "日本の防衛費は増額傾向が続いており、GDP比の防衛関連予算は過去の水準から拡大している。この動きについて、各国・各メディアの報道トーンには明確な差異がある。",
    primarySources: [
      {
        sourceSlug: "iiss",
        title: "日本の防衛費・軍事バランスに関する統計分析",
        url: "https://www.iiss.org",
      },
      {
        sourceSlug: "financial-times",
        title: "欧州金融圏から見た防衛費増額の財政・産業論点",
        url: "https://www.ft.com",
      },
      {
        sourceSlug: "channel-newsasia",
        title: "ASEAN圏から見た地域軍事バランスの報道",
        url: "https://www.channelnewsasia.com",
      },
    ],
    narrativeViews: [
      {
        campName: "米国",
        emphasis: "同盟国の防衛負担拡大は望ましい責任分担であるという評価",
        hidden: "自国の財政・軍事負担を軽減したいという狙い",
        framingWords: ["責任ある同盟国", "負担の共有"],
        actualInterest: "自国の前方展開コストの一部を同盟国に移転すること",
      },
      {
        campName: "中国（公式）",
        emphasis: "日本の防衛費増額を軍国主義復活・地域不安定化要因として描写",
        hidden: "自国の軍事費拡大規模との比較",
        framingWords: ["軍国主義の復活", "平和憲法の精神からの逸脱"],
        actualInterest: "日本の防衛力強化を国際的に牽制し自国の軍事拡大への注目をそらすこと",
      },
      {
        campName: "欧州金融圏",
        emphasis: "防衛費増額の財政負担・産業政策としての側面",
        hidden: "安全保障上の規範的評価よりも実務的な財政の持続可能性に焦点を置く姿勢",
        framingWords: ["財政の持続可能性", "防衛産業のサプライチェーン"],
        actualInterest: "自国の防衛産業にとっての商機の有無",
      },
      {
        campName: "ASEAN（第三極）",
        emphasis: "地域の軍事バランス変化への等距離的な注視",
        hidden: "自国も軍備拡大を進めている場合があるという対称性",
        framingWords: ["地域の軍拡競争への懸念", "ASEANの中心性"],
        actualInterest: "大国間の軍事バランス変化に巻き込まれずに実利を確保すること",
      },
    ],
    emotionWords: [
      {
        termSlug: "deterrence",
        contextNote: "日本・米国側の説明で中心となる語だが、中国側からは脅威の増大として描写される",
      },
      {
        termSlug: "hegemonism",
        contextNote: "中国公式メディアが日本の防衛力強化を批判する際に間接的に用いる枠組み",
      },
    ],
    stakeholders: [
      {
        name: "日本政府",
        role: "防衛費増額の当事者",
        interest: "抑止力強化と同盟内での評価向上",
        risk: "財政負担増大、近隣国との緊張悪化",
      },
      {
        name: "米国政府",
        role: "同盟国の防衛負担拡大を促す主体",
        interest: "自国の戦略的負担軽減",
        risk: "過度な要求が同盟運用に摩擦を生むリスク",
      },
      {
        name: "中国政府",
        role: "日本の防衛力強化を牽制する主体",
        interest: "地域における影響力の相対的維持",
        risk: "自国の軍事費との対比が国際的に注目されること",
      },
      {
        name: "ASEAN諸国",
        role: "地域軍事バランス変化の観測者",
        interest: "大国間競争からの距離維持",
        risk: "地域の軍拡競争に巻き込まれること",
      },
    ],
    japanImpact: {
      scores: [
        { axis: "security", score: 2 },
        { axis: "economy", score: -1 },
        { axis: "diplomacy", score: -1 },
        { axis: "financialMarket", score: 0 },
        { axis: "industry", score: 1 },
      ],
      shortTerm: "防衛費増額に伴う財政負担が他の予算分野を圧迫する可能性がある。",
      midTerm:
        "防衛装備の国内生産・輸出に関する政策転換が進めば、防衛産業に成長機会が生まれる。",
      longTerm:
        "防衛費増額が近隣国との緊張をどの程度高めるか、あるいは抑止力として機能するかは、運用の実際の透明性・対話努力次第である。",
    },
    investmentImplications:
      "防衛関連産業への投資機会は政策動向に強く依存するため、具体的な予算配分・装備調達計画を確認することが重要である。断定的な投資推奨ではなく、政策決定のタイミングと産業への波及経路を分けて評価する視点が必要である。",
    uncertainties: [
      {
        point: "防衛費増額が中国・韓国・近隣国との関係に実際どの程度影響するか",
        whyUncertain: "外交的な対話の進展次第で変動する",
      },
      {
        point: "各国メディアの論調の違いが実際の政策決定にどこまで影響を与えているか",
        whyUncertain: "国内政治プロセスとの関係は外部からは検証しにくい",
      },
    ],
    keyIndicators: [
      {
        label: "防衛省の予算編成発表",
        description: "増額の規模・配分の具体的内容を確認する",
      },
      {
        label: "近隣国（中国・韓国・ロシア）の公式反応",
        description: "外交的な緊張度の変化を確認する",
      },
    ],
    conclusion:
      "同じ防衛費増額という事実が、報じる側の立場によって「責任分担」「軍国主義」「財政負担」「地域不安定化」という複数の異なる物語に分解される。どの物語が正しいかではなく、なぜそれぞれの陣営がその物語を選ぶのかを理解することが、構造を見る出発点になる。",
    readerQuestion:
      "あなたが最初に防衛費増額のニュースを目にしたとき、どのメディアの論調を通じてそれを理解しただろうか。",
  },
];
