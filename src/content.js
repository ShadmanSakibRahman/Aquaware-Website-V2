export const site = {
  brand: {
    name: 'AquaWare',
    logo: '/assets/Logo_AquaWare_FINAL.001_kopie.png',
    icon: '/assets/Circle.png',
    tagline:
      'With AquaWare we want to build a future together in which clean water is the standard',
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Knowledge', to: '/knowledge' },
    { label: 'Contact', to: '/contact' },
  ],
  contact: {
    email: 'info@aquaware.nl',
    phone: '+31-6-24178896',
    phoneDisplay: '+31 (0)6 24178896',
    locations: ['Rotterdam, Netherlands', 'Antwerp, Belgium'],
  },
}

export const home = {
  hero: {
    badge: 'The data-driven platform for industrial discharges',
    title: 'Control of indirect industrial discharges',
    subtitle:
      'Gain immediate insight into potential sources of SVHCs and WFD priority substances and act proactively towards WFD objectives',
    audiences: ['Provinces', 'Water boards', 'Environmental Services', 'Municipalities'],
    cta: 'Schedule a demo',
    image: '/assets/Een_dikke_onvoldoende_voor_waterkwaliteit_-_WUR1.jpeg',
  },
  pressure: {
    titleA: 'Water quality',
    titleB: 'under pressure',
    description:
      'Indirect discharges are difficult to monitor due to fragmented data and outdated files. AquaWare helps governments with a single overview and clear priorities, so that supervision and permitting are more effective with the same capacity.',
    bullets: [
      'PFAS, heavy metals, and other SVHCs enter the water system through indirect discharges',
      'Many indirect industrial discharges are blind spots',
      'Discharge permits are outdated or incomplete',
      'Insufficient capacity and poor chain collaboration make supervision inefficient.',
      'Lack of a data-driven foundation and fragmented data hamper prioritization and decision-making.',
    ],
    image: '/assets/Lozingen_afvalstoffen_bedreigen_waterkwaliteit_-_Drinkwaterplatform.jpeg',
    cta: 'Read More',
  },
  functionalities: {
    title: 'One central platform with valuable functionalities',
    subtitle: 'Complete insight. Less worries. Free up capacity.',
    items: [
      {
        title: 'Centralized Database',
        description:
          'A single, central database for every business in your area, including KvK profile, location, discharge routes, expected substances, risk scores, and administrative information.',
        tags: [
          'Chamber of Commerce profile',
          'Location',
          'WWTP (Wastewater Treatment Plant)',
          'Discharge route',
          'ZZS and WFD substances',
          'Risk score',
          'Permit data',
          'Competent authority',
        ],
        image: '/assets/Centrale_Database.png',
      },
      {
        title: 'Interactive, User-Friendly Dashboards',
        description:
          'Filter in seconds by company data, discharge points, sectors, substances and WWTPs. Immediately see key figures and trends in clear charts, tables and GIS maps. Everything is searchable and exportable.',
        tags: ['Data filtering', 'GIS maps', 'Charts & tables', 'Data visualization'],
        image: '/assets/Dashboard_AquaWare_industriele_lozingen.png',
      },
      {
        title: 'Priority list of companies',
        description:
          'All companies matching the selected filters appear in a clear overview. The table shows core company details, including expected substances. You can sort and prioritize by risk and immediately export to CSV/Excel for further action.',
        tags: [
          'Overview lists',
          'Core company details',
          'Expected substances',
          'Risk analysis',
          'Sorting & prioritization',
        ],
        image: '/assets/prioriteitenlijst.png',
      },
      {
        title: 'Company reports',
        description:
          'One complete dossier per company with all available information in one place. This makes it easy to investigate a company in depth and prepare targeted supervision and permitting actions. Exportable to PDF and CSV for internal alignment and decision-making.',
        tags: ['Company dossier', 'Detailed information'],
        image: '/assets/Bedrijfsoverzicht.png',
      },
      {
        title: 'Heatmaps',
        description:
          'Visualize the spread and intensity of sectors, substance groups and specific substances with heatmaps. Hotspots become immediately visible per area, supporting risk-based and targeted supervision.',
        tags: ['Hotspots', 'Spread & intensity', 'Sectors & substances', 'Targeted supervision'],
        image: '/assets/heatmaps.png',
      },
    ],
  },
  support: {
    title: 'Supporting government activities',
    subtitle: 'Gain insight into water quality and translate data into practical tools',
    cards: [
      {
        title: 'Regulation and Compliance',
        description:
          'Determine where deployment is needed with data-driven insights. We help you get businesses on the radar faster and more targeted.',
      },
      {
        title: 'Policy Development',
        description:
          'By combining trends, risk zones, and sector analyses, substantiated and future-proof water quality policy is created.',
      },
      {
        title: 'Risk Assessment',
        description:
          'Identify business risks and analyze which companies are likely to discharge ZZS/KRW substances, via which route, and with what impact.',
      },
      {
        title: 'Source Detection',
        description:
          'Trace discharge routes back from RWZI hotspots and match them with sectors and substance groups. See which companies are potentially responsible for pollution and plan targeted actions.',
      },
    ],
    quote:
      'AquaWare centralizes data on indirect industrial discharges into a single data layer. This gives governments direct insight and priorities for permits, supervision, enforcement, and maintenance. Less searching, faster action, better collaboration in the chain.',
  },
  funnel: {
    title: 'From overview to action plan',
    description:
      'Using our funnel-based approach, we first identify all companies in your area. Then, we filter to those that are truly relevant to water quality—based on their business profile, discharge risks, and other critical characteristics. This results in a data-driven prioritization overview, allowing you to immediately identify the greatest risks and opportunities.',
    steps: ['Step 1', 'Step 2', 'Step 3'],
    bands: [
      { title: 'All companies in view', subtitle: 'All companies with linked data' },
      { title: 'Water-relevant companies', subtitle: 'Selection based on company profile' },
      { title: 'Prioritization', subtitle: 'List based on risk profile' },
    ],
    cta: 'Request Demo',
  },
  value: {
    title: 'Get a Grip on Industrial Discharges',
    subtitle:
      'The task is large and complex. With AquaWare, you bundle data on companies, routes, and permits into one view, so teams can work more targeted towards KRW goals.',
    newsletterTitle: 'Stay in the loop',
    newsletterInfo: 'Get product updates and water-quality insights—no spam.',
    newsletterCta: 'Subscribe',
    newsletterPrivacy: 'We’ll only use your email to send updates.',
    cards: [
      {
        title: 'No extra FTEs needed, but save',
        description:
          'Empower your team without hiring. The data-driven right hand that takes work off your hands.',
      },
      {
        title: 'Collaborate in the chain',
        description:
          'Province, water board and OD work with one dashboard, share insights and policy. Local and national collaboration is strengthened.',
      },
      {
        title: 'From reactive to proactive',
        description:
          'Proactively get to work to track down sources, revise permits and update if necessary, and make policy.',
      },
    ],
  },
}

export const about = {
  title: 'About AquaWare',
  intro:
    'With AquaWare we want to build together a future in which clean water is the standard.',
  whatTitle: 'What we do',
  whatBody:
    'We develop digital solutions that translate complex water data into actionable insights. With smart analyses, interactive dashboards, and clear visualizations, we make information directly applicable in practice.',
  goalTitle: 'Our goal',
  goalBody:
    'Enabling governments to act data-driven and with insight. This allows them to formulate policies, set priorities, and implement measures that lead to clean and healthy water – today and in the future.',
  powerTitle: 'The power behind our name',
  powerBody: 'AquaWare stands for data, insight and conscious water management.',
  pillars: [
    {
      title: 'Aqua',
      text: '[Aqua]Ware - for water. Our most valuable natural system and the heart of our mission: contributing to a better water quality.',
    },
    {
      title: 'Ware',
      text: 'Aqua[Ware] - refers to software. We provide digital tools with which governments can monitor, analyze and convert water data into action.',
    },
    {
      title: 'Aware',
      text: "Aqu[Aware] - plays on the word 'aware' = to be aware. We want to create awareness among governments about the state of the water, the impact of industrial discharges and the importance of data-driven decision-making.",
    },
  ],
  ctaTitle: 'Get Grip on Industrial Discharges',
  ctaBody: 'Reduce complexity to overview and work focused on WFD goals',
  cta: 'Schedule an appointment',
}

export const knowledge = {
  title: 'Knowledge Base',
  subtitle: 'Blogs and insights for a cleaner water system',
  list: [
    {
      id: '1',
      title: 'Substances of Very High Concern (SVHC): the silent route of indirect discharges',
      quote:
        'Substances of Very High Concern (SVHCs) often find their way into our water system via invisible routes, posing major risks to health, the environment and policy.',
      image: '/assets/martensmultimedia-20220710-1495.jpg.webp',
    },
    {
      id: '2',
      title: 'Indirect discharges: from blind spot to clear picture',
      quote:
        'Indirect industrial discharges are often less visible, but by cooperation and smart data linking, authorities can gain more control and work more strongly towards the WFD goals.',
      image: '/assets/rwzi-zwolle-2.jpg',
    },
    {
      id: '3',
      title: 'Data as the foundation for future-proof water management',
      quote:
        'A data-driven foundation helps governments to deploy resources more effectively, prioritize risks better, and work confidently towards the WFD objectives.',
      image: '/assets/shutterstock_1926382847-1.jpg',
    },
    {
      id: '4',
      title: 'Discharge permits are often outdated or incomplete',
      quote: 'Outdated permits complicate enforcement – updating them provides control and clarity.',
      image: '/assets/waterkwaliteit_1140.png',
    },
    {
      id: '5',
      title: 'PFAS and discharge permits: a current issue',
      quote:
        'The discussion about PFAS discharges highlights the importance of up-to-date data, cooperation, and transparency in water management.',
      image: '/assets/Handhaving.jpg',
    },
  ],
}

export const knowledgeArticles = {
  '1': {
    title: 'Substances of Very High Concern (SVHC): the silent route of indirect discharges',
    image: '/assets/49552108256_73fa5f3085_b.jpg',
    related: ['2', '3'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'In recent years, Substances of Very High Concern (SVHCs) have received a lot of attention. Their presence in the living environment is worrying because they hardly degrade, accumulate in ecosystems and pose direct risks to health and nature. Within this broad group fall, among others, PFAS and heavy metals; substances that often make the news because of their persistence and harmfulness.',
          'Attention usually goes to companies that discharge directly into surface water. Less visible, but at least as important, are the indirect discharges: substances that enter municipal sewers or industrial systems, end up in wastewater treatment and from there still reach the water system. Precisely this route is often a blind spot in policy and supervision.',
        ],
      },
      {
        heading: 'Substances of Very High Concern (SVHCs)',
        paragraphs: [
          'In the Netherlands, the term Substances of Very High Concern (SVHCs) is used for substances that are persistent, bioaccumulative and toxic, or that have similarly serious effects such as carcinogenicity or hormone disruption. These substances are high on the policy agenda because they hardly degrade, accumulate in the environment and therefore pose major risks to health and ecology.',
          'Two well-known examples are:',
          'PFAS (poly- and perfluoroalkyl substances) – a family of thousands of substances widely applied since the 1950s, including in firefighting foam, textiles and food packaging. Because of their extreme stability they are also called “forever chemicals”. Several PFAS are known to be carcinogenic or hormone-disrupting.',
          'Heavy metals such as lead, cadmium, copper and mercury – naturally present in soil, but often elevated in the environment due to human activity. At higher doses they damage the nervous system, kidneys and ecosystems.',
          'These are only a few examples. The full ZZS list contains many other categories of substances that likewise threaten water quality and ecology. Because of their persistence and toxicity, every discharge – direct or indirect – poses a risk to achieving the WFD (KRW) goals.',
        ],
      },
      {
        heading: 'Indirect discharges',
        paragraphs: [
          'When people think of discharges, they often picture a factory pipe that ends directly in a river. Yet a significant share of chemical emissions reaches water via another route: indirect discharges.',
          'This process proceeds in three steps:',
          'Wastewater from companies – Many companies have no direct discharge permit, but drain their wastewater via the municipal or industrial sewer. Examples include metalworkers with rinse water, or textile companies using PFAS.',
          'Wastewater treatment (RWZI) – In a WWTP, nutrients and organic matter are largely removed. For ZZS this hardly works: persistent substances pass almost unhindered, while heavy metals are only partially captured in sludge.',
          'Back to surface water – The effluent of the WWTP is discharged into rivers, ditches or canals. As a result, indirectly discharged substances still reach the water system.',
          'Indirect discharges are often fragmented and diffuse, but collectively of great significance.',
        ],
      },
      {
        heading: 'Risks and consequences',
        paragraphs: [
          'Persistence and accumulation – Many ZZS hardly degrade and accumulate in soil, sediment and food chains. Even low emissions can cause major problems over time.',
          'Insufficient removal – WWTPs are designed to reduce nutrients and organic load, not to remove micropollutants or persistent substances. For ZZS they often function mainly as a transit station.',
          'Hard to trace – Because indirect discharges run via combined streams, it is difficult to determine exactly which companies are responsible. This complicates supervision and source control.',
          'Threat to policy goals – The European Water Framework Directive requires all water bodies to meet strict standards by 2027. Indirect discharges of ZZS directly threaten achieving those goals; failure has consequences for nature, public health and can lead to legal sanctions and fines.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Substances of Very High Concern (SVHCs) are a persistent challenge to water quality. They reach surface waters not only through direct discharges, but also via the silent route of indirect discharges. Precisely this diffuse and less visible route makes it extra difficult to get a grip on emissions. As long as indirect discharges are insufficiently visible, the task of achieving cleaner water and the KRW goals remains an illusion. The urgency is clear: without attention to the hidden route of indirect discharges, ZZS will continue to burden our water system, with consequences for environment, health, policy and possible sanctions.',
        ],
      },
    ],
  },
  '2': {
    title: 'Indirect discharges: from blind spot to clear picture',
    image: '/assets/ad09d958633e334321c7ebfaa2f7e1a14014256466d0f8a47593fdf398e7ecb4.jpg',
    related: ['1', '3'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'When thinking of industrial discharges, people often see the classic image of a factory pipe that discharges directly into a river. In reality, that is only part of the story. A significant share of industrial emissions takes place via indirect routes: wastewater that goes via municipal sewers or industrial systems to wastewater treatment plants (WWTPs) and from there still ends up in surface water.',
          'These indirect discharges are often less visible. They run via many different companies and come together in complex networks of pipes and installations. That makes it harder to get a complete overview. The result: a route that greatly influences water quality, but which requires extra attention to properly visualize.',
        ],
      },
      {
        heading: 'Why indirect discharges are difficult to see',
        paragraphs: [
          'There are several reasons why indirect industrial discharges are less visible:',
          'Historical focus on direct dischargers — For decades the emphasis in permits and monitoring was on large companies that discharge directly. Indirect routes were more fragmented and therefore less systematically visible.',
          'Dispersed information — Data are spread across parties: municipalities, water boards, provinces and environmental agencies, each managing valuable pieces. Bringing that information together is complex, but offers opportunities for new insights.',
          'Permits needing updating — Some indirect discharges still fall under older or generic permits, where new substances such as PFAS or other ZZS are less explicitly included.',
          'Complex streams — Wastewater from dozens of smaller companies often comes together in one pipe, making it difficult to trace exactly where a particular substance comes from.',
          'These factors make indirect discharges challenging to make fully visible. But precisely here there are great opportunities to develop more control through smart analyses and cooperation.',
        ],
      },
      {
        heading: 'The role of WWTPs and industrial estates',
        paragraphs: [
          'WWTPs play a central role. They are designed to reduce nutrients and organic load, but not to completely break down persistent substances or heavy metals. For ZZS they therefore often act as a transfer station: the substances pass the treatment and end up in the effluent.',
          'Industrial estates require extra attention. Hundreds of small companies discharge collectively via one industrial sewer system. Individually the emissions seem limited, but together they form a considerable load. A WWTP mainly sees the sum, without it being directly visible which companies contribute the most.',
        ],
      },
      {
        heading: 'The governance puzzle',
        paragraphs: [
          'Beyond the technical challenges, there is governance complexity. Different parties each have an important role, holding crucial information and expertise. The challenge is to bring that knowledge together and create an integrated picture. Through cooperation and data sharing, blind spots can be reduced and supervision made even more effective.',
        ],
      },
      {
        heading: 'Consequences and urgency',
        paragraphs: [
          'Environmental risks — ZZS accumulate in sediment, soil and food chains. Even low emissions can have major effects in the long term.',
          'Health impact — Many ZZS are carcinogenic, hormone-disrupting or neurotoxic. Invisible emissions increase the chance that risks are recognized too late.',
          'Strengthening cooperation and trust — Achieving the WFD goals in 2027 is a joint task. By smartly linking information and intensifying cooperation, authorities can further strengthen their role as reliable stewards of water quality—improving policy and supervision effectiveness and building trust among citizens and companies.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Indirect industrial discharges are one of the greatest challenges in today’s water management. They are fragmented, diffuse and embedded in complex technical and governance structures, making them less visible. That is precisely why attention to this route is so important. By connecting data, sharing information and working together, authorities can gain more grip on these discharges. This not only creates better insight into ZZS and other harmful substances, but also a stronger foundation for future-proof water management. The urgency is clear: by jointly working on insight and transparency, authorities can act more effectively and work with confidence towards achieving the WFD goals.',
        ],
      },
    ],
  },
  '3': {
    title: 'Data as the foundation for future-proof water management',
    image: '/assets/de-zuid-willemsvaart-vervuild-afvalwater-dreigt-via-de-rioolwaterzuivering-van-weert-in-dit-kanaal-te-belanden.webp',
    related: ['1', '2'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Effective water management starts with insight. Authorities have the crucial task of determining where supervision and measures are most needed: which companies pose the greatest risk, which substances require priority, and where the biggest chance of exceeding standards lies.',
          'A lot of valuable information is available, but it is often fragmented across different organizations and systems. This makes it difficult to get a complete and up-to-date picture. As a result, prioritization and decision-making often become complex and time-consuming, while there is a strong need for clear and targeted choices.',
        ],
      },
      {
        heading: 'Fragmented data: valuable puzzle pieces',
        paragraphs: [
          'Valuable information is collected in many different places about companies, substances, discharges, permits, and water quality. Each source contains part of the story, but as long as they are viewed separately, the picture remains incomplete. Some substances or companies fall out of view, and the link between discharges and water quality is insufficiently visible.',
          'By combining this data and analyzing it in context, a more complete and powerful overview emerges. This enables risks to be identified earlier, priorities to be set more sharply, and decisions to be better substantiated. The available data thus becomes not just loose puzzle pieces, but a complete picture that truly supports policy and supervision.',
        ],
      },
      {
        heading: 'The importance of a data-driven foundation',
        paragraphs: [
          'Without a central, data-driven approach, it takes a lot of effort to make well-founded choices. This leads to several challenges:',
          'Limited visibility of discharge flows — Supervision often focuses on larger, well-known companies. Without an integrated picture, other relevant flows remain easily overlooked.',
          'Difficult prioritization of risks — Fragmented data makes it hard to identify hotspots and sectors that deserve extra attention.',
          'Inefficiency in decision-making — When data is not directly available or comparable, it takes a lot of time to substantiate and coordinate decisions.',
          'Insufficient use of capacity — Due to lack of overview, capacity is not always used optimally. A data-driven foundation helps allocate resources more effectively, making supervision and enforcement more impactful without extra organizational pressure.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Connecting data is not a goal in itself, but a way to support the work of authorities more intelligently and effectively. Without a data-driven foundation and with fragmented data, prioritization and decision-making in water management remain unnecessarily complex.',
          'The urgency is clear: by linking existing information and translating it into actionable insights, a solid foundation is created for future-proof water management. This not only gives authorities more control over discharges and water quality but also enables them to work with confidence towards achieving the WFD goals.',
        ],
      },
    ],
  },
  '4': {
    title: 'Discharge permits are often outdated or incomplete',
    image: '/assets/image_3.jpeg',
    related: ['1', '2'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Discharge permits form the legal basis for regulating the release of substances into water. They determine which substances may be discharged, in what quantities, and under which conditions. As such, they are an essential instrument for governments to protect water quality and provide clarity to businesses.',
          'Yet many permits no longer fully align with today’s reality. Some are outdated and insufficiently account for new substances or processes, while others are incomplete and lack provisions needed for effective oversight. The result: businesses operate within the rules, but harmful substances still enter the water system via legal routes.',
        ],
      },
      {
        heading: 'Permits that lag behind',
        paragraphs: [
          'Many discharge permits date back to a time when knowledge of certain substances or attention to diffuse discharges was more limited than today.',
          'New substances out of scope – Substances such as PFAS or other Zeer Zorgwekkende Stoffen (ZZS, “very concerning substances”) are often not included in older permits, as they were not yet recognized.',
          'General conditions – Some permits contain generic norms that don’t specifically match the type of company or substances released.',
          'Little dynamism – Permits are not always revised when processes or substances change, which can cause them to no longer reflect the current situation.',
          'This creates a gap between the paper reality and ecological reality.',
        ],
      },
      {
        heading: 'Incompleteness: not everything is included',
        paragraphs: [
          'Limited lists of substances – Many permits still focus on classic pollutants such as nutrients or heavy metals, while countless other compounds are barely covered.',
          'Indirect routes underexposed – Permits often focus mainly on direct discharges. Indirect emissions via sewers and WWTPs (wastewater treatment plants) are less explicitly included, even though they represent a major part of the load.',
          'Missing basic data – Information about quantities or concentrations is not always fully available, making oversight more difficult.',
          'This means inspectors don’t always have the full toolkit to steer effectively.',
        ],
      },
      {
        heading: 'Consequences for water quality and policy',
        paragraphs: [
          'Discharges within the rules – Companies discharge legally under their permits, but harmful substances still end up in the environment.',
          'Gaps in enforcement – Without a complete picture, inspectors lack the levers to identify risks in time.',
          'Missed opportunities for WFD goals – If permits are not up to date, meeting the 2027 chemical and ecological water quality targets of the Water Framework Directive becomes more difficult.',
          'Trust and transparency – Clear and current permits strengthen trust among companies and citizens that discharges are managed responsibly.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Discharge permits are a powerful instrument, but only when they are current and complete. In practice, many permits are outdated or incomplete, making oversight and water protection more complex than necessary. The urgency is clear: by updating permits to reflect today’s knowledge and substances, governments gain more control over discharges and businesses can operate with clearer rules. This provides a solid foundation for future-proof water management and increases the chances of meeting WFD goals on time.',
        ],
      },
    ],
  },
  '5': {
    title: 'PFAS and discharge permits: a current issue',
    image: '/assets/image_4.jpeg',
    related: ['1', '2'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Recently, H2O Actueel published an article about a permit application that would allow a certain amount of PFAS to be discharged annually via the sewer (source: H2O Waternetwerk, 25 August 2025). This sparked much debate, as WWTPs (wastewater treatment plants) are not designed to remove PFAS from wastewater. This raises the broader question: how should we handle permits for substances that hardly degrade and pose risks to the environment and health?',
        ],
      },
      {
        heading: 'Why this draws so much attention',
        paragraphs: [
          'PFAS is now high on the agenda of water managers and policymakers. This is because:',
          'Technical limitations WWTPs are designed for nutrients and organic matter, but persistent substances like PFAS pass through largely unhindered.',
          'Uncertainty about composition It is not always clear exactly which substances are present in industrial wastewater, making careful assessment difficult.',
          'Future applications One permit also raises questions for the future: how do we handle similar situations with other companies or sectors?',
        ],
      },
      {
        heading: 'The role of permits',
        paragraphs: [
          'Discharge permits are an essential tool to regulate discharges and provide clarity for both companies and governments. At the same time, they face challenges:',
          'Some permits were issued when substances like PFAS were not yet recognized.',
          'Many permits focus on traditional discharge streams, while indirect routes via sewers and WWTPs play an increasing role.',
          'The pace of technological and chemical developments means permits need updating more often.',
          'This means permits may be formally correct but still not fully aligned with today’s environmental challenges.',
        ],
      },
      {
        heading: 'From rules to cooperation',
        paragraphs: [
          'The PFAS debate shows how important it is to view policy, enforcement, and practice together. Provinces, water boards, municipalities, and environmental services each have their own roles and responsibilities. By sharing knowledge and data more effectively, a more complete picture emerges and the permitting system can better respond to current challenges.',
          'A shared focus on source prevention – preventing substances from entering the sewer or surface water in the first place – also fits within the European ambitions of the Water Framework Directive and the goal of a cleaner, safer water system.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The current PFAS case makes clear that discharge permits are increasingly under pressure from new insights and substances. This is a broader challenge that requires ongoing cooperation, updates, and data-driven decisions.',
          'By revising permits in time, linking information better, and working together on transparency, governments can strengthen their role and confidently move towards achieving the WFD goals.',
        ],
      },
    ],
  },
}

export const contactPage = {
  title: 'Connect with us',
  subtitle: "Have questions about our solutions? We're here to help.",
  formTitle: 'Send us a message',
  formSubtitle: 'Please leave your details and question below and we will contact you soon.',
  fields: ['Full Name', 'Email Address', 'Your Message'],
  cta: 'Send Message',
}

export const privacy = {
  title: 'Privacy Policy AquaWare',
  updated: 'Last updated: August 28, 2025',
  sections: [
    {
      title: '1. Information We Collect',
      text: 'We only collect personal data that you provide directly, for example when contacting us via form or email, subscribing to our newsletter, or visiting our website (technical data or analytics cookies). This may include name, email, phone, and company details. Our hosting provider (Vercel) may process anonymous technical data to keep the site operational.',
    },
    {
      title: '2. How We Use Your Data',
      text: 'Your data is used solely to respond to requests, communicate about services, send newsletters (if subscribed), and improve our site and services. We never use it for other purposes without your consent.',
    },
    {
      title: '3. Newsletter',
      text: 'If you subscribe, your email will only be used for newsletters. You can unsubscribe anytime via the link in emails or by contacting us.',
    },
    {
      title: '4. Cookies and Analytics',
      text: 'No tracking cookies are used by default. If analytics are added, we will clearly inform users and request consent if required.',
    },
    {
      title: '5. Data Sharing',
      text: 'We do not sell or rent personal data. Data may only be shared with Vercel for hosting, a newsletter provider (if used), legal authorities, or with explicit consent.',
    },
    {
      title: '6. Data Security',
      text: 'We apply technical and organizational measures to protect your data, including SSL/TLS encryption and strict access control.',
    },
    {
      title: '7. Retention Periods',
      text: 'Contact details: as long as necessary to process requests or as legally required. Newsletter data: until unsubscribed, then deleted. Cookies/analytics: per provider policy.',
    },
    {
      title: '8. Your Rights',
      text: 'Under GDPR you have rights of access, rectification, erasure, restriction, portability, and objection. Contact us to exercise these rights.',
    },
    {
      title: '9. Changes',
      text: 'We may update this Privacy Policy, e.g., if we add newsletters or analytics. The most recent version is always available on our website.',
    },
    {
      title: '10. Contact',
      text: 'AquaWare\nEmail: info@aquaware.nl\nPhone: +31 (0)6 24178896',
    },
  ],
}

export const terms = {
  title: 'Terms of Service AquaWare',
  updated: 'Last updated: August 28, 2025',
  sections: [
    {
      title: '1. Definitions',
      list: [
        'Services: all products, software, consulting, and support by AquaWare.',
        'User: any natural or legal entity using AquaWare’s services.',
        'Agreement: any arrangement between AquaWare and the user.',
        'Software: all software developed and/or provided by AquaWare, including updates and documentation.',
      ],
    },
    {
      title: '2. Our Services',
      text: 'AquaWare provides digital solutions, consulting, and software products in water management and data analysis. Services are provided as described in quotations, contracts, or license agreements.',
    },
    {
      title: '3. Use of Services',
      text: 'Users are responsible for lawful use. Access credentials must be kept confidential. Accurate and up-to-date information is required.',
    },
    {
      title: '4. Intellectual Property',
      text: 'All IP rights in AquaWare’s software, documentation, reports, and materials remain with AquaWare or licensors. Unauthorized use, reproduction, or distribution is prohibited.',
    },
    {
      title: '5. Fees and Payment',
      text: 'Fees and payment terms are per quotations or agreements. Invoices must be paid on time. Late payments may incur interest and collection costs.',
    },
    {
      title: '6. Limitation of Liability',
      text: 'AquaWare is only liable for direct damages due to proven negligence. Liability per incident is limited to the agreed amount or fees paid in the past 12 months. AquaWare is not liable for indirect or consequential damages, loss of profits, or business interruption.',
    },
    {
      title: '7. Maintenance and Availability',
      text: 'AquaWare strives to keep services available and updated. Temporary interruptions may occur due to maintenance or updates.',
    },
    {
      title: '8. Force Majeure',
      text: 'AquaWare is not liable for obligations hindered by events beyond its control, including outages, disasters, war, strikes, or government actions.',
    },
    {
      title: '9. Changes',
      text: 'AquaWare may amend these Terms of Service. Updates will be published on the website. Significant changes will be notified in advance.',
    },
    {
      title: '10. Privacy and Data Protection',
      text: 'Personal data is processed in accordance with the GDPR. See our separate Privacy Policy.',
    },
    {
      title: '11. Termination',
      text: 'Either party may terminate with the agreed notice period. Access rights end upon termination unless otherwise agreed. Provisions on IP, liability, and law remain in force.',
    },
    {
      title: '12. Governing Law and Jurisdiction',
      text: 'These terms and agreements are governed by Dutch law. Disputes shall be submitted exclusively to Dutch courts.',
    },
    {
      title: '13. Contact',
      text: 'AquaWare\nEmail: info@aquaware.nl\nPhone: +31 (0)6 24178896',
    },
  ],
}
