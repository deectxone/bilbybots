import type { Topic } from '../../types/curriculum';

/**
 * Year 9 History — full topic bank (AC v9.0, subject code HH).
 * Source of truth: docs/content/year-7-10/history.md. Year 9 mandates BOTH
 * sub-strands: "Making and transforming the Australian nation (1750–1914)"
 * (AC9HH9K01–K07) and "First World War (1914–1918)" (AC9HH9K08–K12).
 * Skills CDs (AC9HH9S01–S08) are woven into the units per the source doc.
 *
 * SENSITIVITY: MA03 (colonisation & frontier conflict) and MA06 (perspectives
 * of colonisers, settlers and First Nations Australians; contested terms) plus
 * WW01–WW03 (war service, Gallipoli, trench warfare) carry `sensitivity: true`
 * — written to established, broadly-agreed facts with age-appropriate framing,
 * pending human review. Follow the Y6-HASS-HI02 / Y7 Deep Time review pattern.
 */
export const YEAR9_HISTORY_TOPICS: Topic[] = [
  // ---------- Making and transforming the Australian nation (7 CDs) ----------
  {
    id: 'Y9-HIS-MA01',
    title: 'European expansion & why people came',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In the late 1700s and early 1800s, European empires — especially Britain — expanded around the globe. People moved for many reasons: some were forced (convicts transported, people fleeing famine and persecution), while others were pulled by promises of land, work and a new life.',
        'In 1788 the British established a colony at Sydney Cove. In the decades that followed, both convicts and free settlers crossed the seas to Australia, changing the continent forever.',
      ],
      illustrations: [
        {
          brief: 'Movement of peoples: the journey to Australia, hopes of a new life, the expanding British Empire',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'Journey to Australia' }, { icon: 'suitcase', label: 'Hopes of a new life' }, { icon: 'flag', label: 'The British Empire' }], caption: 'Empire, push factors and pull factors' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA01-q1', type: 'mcq', prompt: 'The British colony in Australia began in 1788 at…', options: ['Sydney Cove', 'Melbourne', 'Perth'], answer: 'Sydney Cove', difficulty: 1 },
        { id: 'Y9-HIS-MA01-q2', type: 'short', prompt: 'In what year was the first British colony established in Australia?', answer: '1788', difficulty: 1 },
        { id: 'Y9-HIS-MA01-q3', type: 'mcq', prompt: "A 'push factor' is something that…", options: ['Pushes people to leave their home', 'Pulls people to a new place', 'Stops people moving at all'], answer: 'Pushes people to leave their home', difficulty: 1 },
        { id: 'Y9-HIS-MA01-q4', type: 'mcq', prompt: "An example of a 'pull factor' is…", options: ['The promise of land and a new life', 'Being forced to leave', 'A terrible famine'], answer: 'The promise of land and a new life', difficulty: 2 },
        { id: 'Y9-HIS-MA01-q5', type: 'mcq', prompt: 'Early British settlers in Australia included…', options: ['Convicts and free settlers', 'Only scientists', 'Only soldiers'], answer: 'Convicts and free settlers', difficulty: 1 },
        { id: 'Y9-HIS-MA01-q6', type: 'mcq', prompt: 'European expansion in this period was driven by…', options: ['Empires seeking land, trade and power', 'A desire to explore the moon', 'Nothing at all'], answer: 'Empires seeking land, trade and power', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-MA02',
    title: 'The colonies grow',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Australia grew as a set of separate British colonies — New South Wales, Van Diemen\'s Land (Tasmania), Western Australia, South Australia, Victoria and Queensland. Each developed in its own way, shaped by geography, gold and the different kinds of settlers who arrived.',
        'Farming, especially wool, drove much of the economy, and explorers pushed across the Blue Mountains to open new lands for pasture and settlement.',
      ],
      illustrations: [
        {
          brief: 'Colonial growth: farm and pastoral runs, new towns, settlers pushing across the Blue Mountains',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'Colonial towns' }, { icon: 'tree', label: 'Farms & runs' }, { icon: 'ship', label: 'Convict & free settlers' }, { icon: 'map', label: 'Six colonies' }], caption: 'Six colonies, each growing its own way' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA02-q1', type: 'mcq', prompt: 'Before Federation, Australia was made up of…', options: ['Six separate British colonies', 'One united nation', 'Two French territories'], answer: 'Six separate British colonies', difficulty: 1 },
        { id: 'Y9-HIS-MA02-q2', type: 'mcq', prompt: 'Wool became important to colonial Australia because…', options: ['Sheep farming suited the land and drove the economy', 'Wool was never wanted', 'Sheep could not live there'], answer: 'Sheep farming suited the land and drove the economy', difficulty: 2 },
        { id: 'Y9-HIS-MA02-q3', type: 'mcq', prompt: 'Crossing the Blue Mountains opened…', options: ['New lands for farming and settlement', 'The route to the Moon', 'A road to nowhere'], answer: 'New lands for farming and settlement', difficulty: 2 },
        { id: 'Y9-HIS-MA02-q4', type: 'mcq', prompt: 'Each Australian colony developed differently because of…', options: ['Geography, resources and types of settlers', 'Identical history everywhere', 'No reasons at all'], answer: 'Geography, resources and types of settlers', difficulty: 2 },
        { id: 'Y9-HIS-MA02-q5', type: 'mcq', prompt: 'South Australia was notable because it was…', options: ['Founded as a free colony without convicts', 'The first penal colony', 'Never settled'], answer: 'Founded as a free colony without convicts', difficulty: 2 },
        { id: 'Y9-HIS-MA02-q6', type: 'short', prompt: 'Van Diemen\'s Land later became which Australian state?', answer: 'Tasmania', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-HIS-MA03',
    title: 'First Nations Australians & colonisation',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K03' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'When the British colonised Australia, First Nations Australians had lived on the continent for over 65,000 years, with deep connections to their lands, waters and laws. Colonisation brought enormous and lasting change: land was taken, traditional ways of life were disrupted, and European diseases spread.',
        'The frontier was often violent: conflict, known as frontier conflict, occurred across the continent as settlement extended. First Nations Australians responded in many ways — defending Country, adapting and surviving — and their cultures, knowledge and resilience continue today. This history is told respectfully and carefully.',
      ],
      illustrations: [
        {
          brief: 'An abstract flowchart: millennia of connection, contact & dispossession, frontier conflict, survival & continuing culture',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: '65,000+ years on Country' }, { text: 'Contact & dispossession' }, { text: 'Frontier conflict & disease' }, { text: 'Survival & continuing culture' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA03-q1', type: 'mcq', prompt: 'When the British arrived in 1788, First Nations Australians had lived in Australia…', options: ['For tens of thousands of years', 'For about ten years', 'For only one generation'], answer: 'For tens of thousands of years', difficulty: 1 },
        { id: 'Y9-HIS-MA03-q2', type: 'mcq', prompt: 'Colonisation affected First Nations Australians by…', options: ['Disrupting traditional ways of life and taking land', 'Improving their lives without change', 'Having no effect at all'], answer: 'Disrupting traditional ways of life and taking land', difficulty: 2 },
        { id: 'Y9-HIS-MA03-q3', type: 'mcq', prompt: 'European diseases brought by colonisation…', options: ['Spread among First Nations Australians with severe effects', 'Never reached Australia', 'Only affected animals'], answer: 'Spread among First Nations Australians with severe effects', difficulty: 2 },
        { id: 'Y9-HIS-MA03-q4', type: 'mcq', prompt: "'Frontier conflict' refers to…", options: ['Violence and clashes on the expanding settlement frontier', 'A friendly sporting match', 'A type of treaty'], answer: 'Violence and clashes on the expanding settlement frontier', difficulty: 2 },
        { id: 'Y9-HIS-MA03-q5', type: 'mcq', prompt: 'First Nations Australians responded to colonisation by…', options: ['Defending Country, adapting and surviving', 'Doing nothing at all', 'Leaving the continent'], answer: 'Defending Country, adapting and surviving', difficulty: 1 },
        { id: 'Y9-HIS-MA03-q6', type: 'mcq', prompt: 'The most respectful way to teach this history is…', options: ['Carefully, factually and with First Nations perspectives', 'With graphic detail for shock value', 'By ignoring it completely'], answer: 'Carefully, factually and with First Nations perspectives', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-MA04',
    title: 'Gold, growth & change',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K02' }, { ac: 'AC9HH9K04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'From 1851, gold rushes in New South Wales and Victoria transformed the colonies. Tens of thousands of people — from Britain, Europe, China and elsewhere — poured in, and cities boomed.',
        'Gold brought wealth and rapid growth, but also conflict: the Eureka Stockade in 1854 saw diggers rise up against unfair mining licences, a moment remembered in Australian history and democracy debates. Railways and telegraph lines soon linked the growing colonies.',
      ],
      illustrations: [
        {
          brief: 'Gold rush change: coins & gold, migrants from around the world, railways linking the colonies',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'coin', label: 'Gold rushes' }, { icon: 'people', label: 'Migrants worldwide' }, { icon: 'train-engine', label: 'Railways & growth' }], caption: 'Gold transformed the colonies' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA04-q1', type: 'short', prompt: 'In what year did the major Australian gold rushes begin?', answer: '1851', difficulty: 2 },
        { id: 'Y9-HIS-MA04-q2', type: 'mcq', prompt: 'The gold rushes brought to Australia…', options: ['A huge wave of migrants from around the world', 'No new people at all', 'Only sheep'], answer: 'A huge wave of migrants from around the world', difficulty: 1 },
        { id: 'Y9-HIS-MA04-q3', type: 'mcq', prompt: 'The Eureka Stockade of 1854 was…', options: ['A revolt by gold miners against unfair mining licences', 'A peaceful picnic', 'A shipwreck'], answer: 'A revolt by gold miners against unfair mining licences', difficulty: 2 },
        { id: 'Y9-HIS-MA04-q4', type: 'mcq', prompt: 'Gold helped Australian colonies grow by…', options: ['Booming populations, cities and wealth', 'Shrinking all towns', 'Ending all trade'], answer: 'Booming populations, cities and wealth', difficulty: 1 },
        { id: 'Y9-HIS-MA04-q5', type: 'mcq', prompt: 'Chinese migrants on the goldfields…', options: ['Faced discrimination while contributing to the diggings', 'Were always treated equally', 'Never mined for gold'], answer: 'Faced discrimination while contributing to the diggings', difficulty: 2 },
        { id: 'Y9-HIS-MA04-q6', type: 'mcq', prompt: 'New transport and communication, such as railways and the telegraph, helped…', options: ['Link and develop the growing colonies', 'Isolate every town', 'Slow all travel'], answer: 'Link and develop the growing colonies', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-HIS-MA05',
    title: 'Federation & the new nation',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In the late 1800s, many Australians argued for the six colonies to unite. Conferences and constitutional conventions — with leaders such as Sir Henry Parkes — drafted a Constitution, and in 1898–1899 the people voted in referendums to approve it.',
        'On 1 January 1901, Australia federated: the six colonies became the one nation of Australia under a federal Constitution, with a national Parliament alongside the state parliaments.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of Federation: 1890s conferences, constitutional conventions, 1898–99 referendums, 1 January 1901',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: '1890s conferences' }, { text: 'Constitutional conventions' }, { text: '1898–99 referendums' }, { text: '1 January 1901' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA05-q1', type: 'short', prompt: 'On what date did the six colonies federate?', answer: '1 January 1901', difficulty: 2 },
        { id: 'Y9-HIS-MA05-q2', type: 'mcq', prompt: 'Sir Henry Parkes was a key figure who…', options: ['Pushed for the colonies to federate', 'Opposed all unity', 'Founded New Zealand'], answer: 'Pushed for the colonies to federate', difficulty: 2 },
        { id: 'Y9-HIS-MA05-q3', type: 'mcq', prompt: 'The Australian Constitution set up…', options: ['A federal system with a national Parliament and states', 'A single ruler with no parliament', 'No government at all'], answer: 'A federal system with a national Parliament and states', difficulty: 2 },
        { id: 'Y9-HIS-MA05-q4', type: 'mcq', prompt: 'Australians approved the Constitution through…', options: ['Referendums in 1898–1899', 'A royal decree alone', 'An online vote'], answer: 'Referendums in 1898–1899', difficulty: 2 },
        { id: 'Y9-HIS-MA05-q5', type: 'mcq', prompt: 'After Federation, the former colonies became…', options: ['States of one nation', 'Independent countries', 'Territories of France'], answer: 'States of one nation', difficulty: 1 },
        { id: 'Y9-HIS-MA05-q6', type: 'mcq', prompt: "A 'referendum' is…", options: ['A direct vote by the people on a question', 'A type of festival', 'A meeting of only kings'], answer: 'A direct vote by the people on a question', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-HIS-MA06',
    title: 'Australian society 1901–1914: identity & ideas',
    year: '9',
    subject: 'hass',
    strand: 'History — Making the Australian Nation',
    cd: [{ ac: 'AC9HH9K05' }, { ac: 'AC9HH9K06' }, { ac: 'AC9HH9K07' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'Around Federation, Australia was building an identity — of mateship, a "fair go" and egalitarianism — celebrated in art, writing and sport. But not everyone shared in it equally: women still fought for the vote (won federally in 1902), non-European migrants faced exclusion under the "White Australia" policy, and First Nations Australians were denied rights that others enjoyed.',
        'The new federal government also made laws that shaped life for everyone: old-age and invalid pensions, and the Harvester Judgement on fair wages. Understanding these different experiences helps us see the nation\'s full story.',
      ],
      illustrations: [
        {
          brief: 'Australia in 1901: a new flag and nation, diverse experiences, new federal laws',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'flag', label: 'New nation 1901' }, { icon: 'people', label: 'Unequal experiences' }, { icon: 'newspaper', label: 'Identity & ideas' }], caption: 'One nation, many different experiences' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-MA06-q1', type: 'mcq', prompt: 'In 1902, women won the right to vote in…', options: ['Federal elections', 'No elections at all', 'Only school votes'], answer: 'Federal elections', difficulty: 2 },
        { id: 'Y9-HIS-MA06-q2', type: 'mcq', prompt: "The 'White Australia' policy…", options: ['Excluded many non-European migrants', 'Welcomed everyone equally', 'Never existed'], answer: 'Excluded many non-European migrants', difficulty: 2 },
        { id: 'Y9-HIS-MA06-q3', type: 'mcq', prompt: 'The Harvester Judgement dealt with…', options: ['Fair wages and working conditions', 'Farming crops', 'Shipbuilding'], answer: 'Fair wages and working conditions', difficulty: 3 },
        { id: 'Y9-HIS-MA06-q4', type: 'mcq', prompt: "Ideas of mateship and a 'fair go' were part of…", options: ['A growing Australian identity around 1900', 'Ancient Greek religion', 'Medieval law codes'], answer: 'A growing Australian identity around 1900', difficulty: 2 },
        { id: 'Y9-HIS-MA06-q5', type: 'mcq', prompt: 'Around Federation, rights and freedoms were…', options: ['Unequal across different groups in society', 'Perfectly equal for everyone', 'The same as today'], answer: 'Unequal across different groups in society', difficulty: 2 },
        { id: 'Y9-HIS-MA06-q6', type: 'mcq', prompt: 'Old-age and invalid pensions were introduced by…', options: ['The new federal government', 'The British monarchy alone', 'A private company'], answer: 'The new federal government', difficulty: 2 },
      ],
    },
  },
  // ---------- First World War (5 CDs) ----------
  {
    id: 'Y9-HIS-WW01',
    title: "Causes of the war & why Australians enlisted",
    year: '9',
    subject: 'hass',
    strand: 'History — First World War',
    cd: [{ ac: 'AC9HH9K08' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'The First World War (1914–1918) was sparked by long-term causes — militarism, the alliance system, imperialism and nationalism in Europe — and triggered by the assassination of Archduke Franz Ferdinand in 1914. When Britain declared war on Germany, Australia, as part of the British Empire, was at war too.',
        'Around 400,000 Australians enlisted in the Australian Imperial Force, for many reasons: a sense of duty to the Empire, adventure, regular pay, and pressure from propaganda and communities. First Nations Australian men also served, despite facing discrimination.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: long-term causes, the 1914 assassination, Britain at war, Australians enlist',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Alliances & nationalism' }, { text: 'Assassination, July 1914' }, { text: 'Britain at war' }, { text: 'Australians enlist' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-WW01-q1', type: 'short', prompt: 'The assassination of which archduke helped trigger the First World War in 1914?', answer: 'Archduke Franz Ferdinand', difficulty: 2 },
        { id: 'Y9-HIS-WW01-q2', type: 'mcq', prompt: 'Long-term causes of the war included…', options: ['Militarism, alliances, imperialism and nationalism', 'Peace and disarmament', 'Friendly trade only'], answer: 'Militarism, alliances, imperialism and nationalism', difficulty: 2 },
        { id: 'Y9-HIS-WW01-q3', type: 'mcq', prompt: 'Australia entered the war because…', options: ['Britain, as part of the Empire, was at war', 'Australia had its own independent quarrel', 'A German ship invaded Sydney'], answer: 'Britain, as part of the Empire, was at war', difficulty: 1 },
        { id: 'Y9-HIS-WW01-q4', type: 'mcq', prompt: 'Australians enlisted for reasons including…', options: ['Duty, adventure, pay and community pressure', 'A love of winter', 'Free holidays only'], answer: 'Duty, adventure, pay and community pressure', difficulty: 1 },
        { id: 'Y9-HIS-WW01-q5', type: 'mcq', prompt: 'First Nations Australian men who enlisted…', options: ['Served despite facing discrimination', 'Were never allowed to serve', 'Were forced to enlist'], answer: 'Served despite facing discrimination', difficulty: 2 },
        { id: 'Y9-HIS-WW01-q6', type: 'mcq', prompt: 'The Australian force in the war was called the…', options: ['Australian Imperial Force (AIF)', 'Australian Peace Corps', 'Colonial Fire Brigade'], answer: 'Australian Imperial Force (AIF)', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-WW02',
    title: 'Gallipoli 1915',
    year: '9',
    subject: 'hass',
    strand: 'History — First World War',
    cd: [{ ac: 'AC9HH9K09' }, { ac: 'AC9HH9K10' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'On 25 April 1915, Australian and New Zealand troops — the Anzacs — landed at Gallipoli in the Ottoman Empire as part of a campaign to knock the Turks out of the war and open a sea route to Russia.',
        'The campaign lasted eight months and failed, with heavy losses on both sides. The bravery and endurance of the Anzacs in terrible conditions gave rise to the Anzac legend and made 25 April a day Australians honour — Anzac Day.',
      ],
      illustrations: [
        {
          brief: 'The Gallipoli landing: ships at Anzac Cove, soldiers ashore, a day remembered as Anzac Day',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'Landing 25 April 1915' }, { icon: 'flag', label: 'Anzac Cove' }, { icon: 'people', label: 'Soldiers in hardship' }, { icon: 'trophy', label: 'The Anzac legend' }], caption: 'Eight months that shaped a legend' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-WW02-q1', type: 'short', prompt: 'On what date did the Anzacs land at Gallipoli?', answer: '25 April 1915', difficulty: 2 },
        { id: 'Y9-HIS-WW02-q2', type: 'mcq', prompt: "'Anzac' stands for…", options: ['Australian and New Zealand Army Corps', 'Australian Northern Zone', 'Allied Naval Forces'], answer: 'Australian and New Zealand Army Corps', difficulty: 1 },
        { id: 'Y9-HIS-WW02-q3', type: 'mcq', prompt: 'The Gallipoli campaign was fought against the forces of…', options: ['The Ottoman Empire', 'Australia itself', 'New Zealand'], answer: 'The Ottoman Empire', difficulty: 2 },
        { id: 'Y9-HIS-WW02-q4', type: 'mcq', prompt: 'The Gallipoli campaign ended with…', options: ['Evacuation after heavy losses', 'A quick and easy victory', 'No soldiers involved'], answer: 'Evacuation after heavy losses', difficulty: 2 },
        { id: 'Y9-HIS-WW02-q5', type: 'mcq', prompt: 'Anzac Day, on 25 April, is a day Australians…', options: ['Remember and honour the Anzacs', 'Celebrate the peace treaty', 'Open school holidays'], answer: 'Remember and honour the Anzacs', difficulty: 1 },
        { id: 'Y9-HIS-WW02-q6', type: 'mcq', prompt: "The 'Anzac legend' grew from…", options: ['The bravery and endurance shown at Gallipoli', 'A single peaceful meeting', 'A sporting match'], answer: 'The bravery and endurance shown at Gallipoli', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-WW03',
    title: 'The Western Front & trench warfare',
    year: '9',
    subject: 'hass',
    strand: 'History — First World War',
    cd: [{ ac: 'AC9HH9K09' }, { ac: 'AC9HH9K10' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'After Gallipoli, most Australian troops moved to the Western Front in France and Belgium, where the war was fought in trenches. Soldiers lived in muddy, cramped trenches and faced deadly new weapons — machine guns, artillery, poison gas and tanks.',
        'Australians fought in terrible battles such as Fromelles, the Somme, Pozières and Passchendaele, suffering enormous losses. In the Middle East, the Australian Light Horse fought campaigns in places such as Palestine, Sinai and Beersheba.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of trench warfare: trenches in France & Belgium, new weapons, heavy battles, heavy losses',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Trench lines in France' }, { text: 'New weapons: gas & tanks' }, { text: 'Battles & heavy losses' }, { text: 'Light Horse in the Middle East' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-WW03-q1', type: 'mcq', prompt: 'The Western Front ran through…', options: ['France and Belgium', 'Australia', 'Japan'], answer: 'France and Belgium', difficulty: 1 },
        { id: 'Y9-HIS-WW03-q2', type: 'mcq', prompt: 'New weapons in the war included…', options: ['Machine guns, poison gas and tanks', 'Only swords and shields', 'Nuclear missiles'], answer: 'Machine guns, poison gas and tanks', difficulty: 1 },
        { id: 'Y9-HIS-WW03-q3', type: 'mcq', prompt: 'Which battle was fought on the Western Front?', options: ['Pozières', 'Pearl Harbor', 'Waterloo'], answer: 'Pozières', difficulty: 2 },
        { id: 'Y9-HIS-WW03-q4', type: 'mcq', prompt: 'The Australian Light Horse fought in…', options: ['The Middle East, including Beersheba', 'The trenches of France only', 'Sydney Harbour'], answer: 'The Middle East, including Beersheba', difficulty: 2 },
        { id: 'Y9-HIS-WW03-q5', type: 'mcq', prompt: 'Life in the trenches was…', options: ['Muddy, cramped and dangerous', 'Comfortable and safe', 'Full of fresh food'], answer: 'Muddy, cramped and dangerous', difficulty: 1 },
        { id: 'Y9-HIS-WW03-q6', type: 'mcq', prompt: 'Australian casualties on the Western Front were…', options: ['Very heavy', 'Zero', 'Fewer than ten in total'], answer: 'Very heavy', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-WW04',
    title: 'The war at home',
    year: '9',
    subject: 'hass',
    strand: 'History — First World War',
    cd: [{ ac: 'AC9HH9K11' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The war changed life in Australia. Women took on jobs in factories, farms and transport while men served overseas, and communities raised money and ran support efforts. The government passed wartime laws and censored news.',
        'The war also split the nation: Prime Minister Billy Hughes held two referendums on conscription, in 1916 and 1917. Australians voted "no" both times, and the debates divided families, churches, unions and political parties.',
      ],
      illustrations: [
        {
          brief: 'The home front: women at work, fundraising, wartime controls and the conscription debates',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Women at work' }, { icon: 'chat-bubble', label: 'Conscription debates' }, { icon: 'flag', label: 'The war effort' }], caption: 'A nation mobilised, a nation divided' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-WW04-q1', type: 'mcq', prompt: 'During the war, many Australian women…', options: ['Took on jobs in factories and farms', 'Were forbidden to work', 'Left the country'], answer: 'Took on jobs in factories and farms', difficulty: 1 },
        { id: 'Y9-HIS-WW04-q2', type: 'mcq', prompt: 'The conscription referendums of 1916 and 1917 asked Australians to vote on…', options: ['Whether soldiers should be conscripted for overseas service', 'Whether to change the flag', 'Whether to join the war'], answer: 'Whether soldiers should be conscripted for overseas service', difficulty: 2 },
        { id: 'Y9-HIS-WW04-q3', type: 'mcq', prompt: 'Both conscription referendums…', options: ["Were voted 'no' by Australians", 'Were won easily', 'Never happened'], answer: "Were voted 'no' by Australians", difficulty: 2 },
        { id: 'Y9-HIS-WW04-q4', type: 'mcq', prompt: 'Prime Minister Billy Hughes strongly supported…', options: ['Conscription', 'Australia leaving the war', 'An immediate peace'], answer: 'Conscription', difficulty: 2 },
        { id: 'Y9-HIS-WW04-q5', type: 'mcq', prompt: 'Wartime censorship in Australia meant…', options: ['The government controlled what news was published', 'All news was completely free', 'Newspapers were banned forever'], answer: 'The government controlled what news was published', difficulty: 2 },
        { id: 'Y9-HIS-WW04-q6', type: 'mcq', prompt: 'The war at home divided Australians over…', options: ['Conscription and how the war should be fought', 'The colour of uniforms', 'Nothing at all'], answer: 'Conscription and how the war should be fought', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-HIS-WW05',
    title: 'The end of the war & commemoration',
    year: '9',
    subject: 'hass',
    strand: 'History — First World War',
    cd: [{ ac: 'AC9HH9K10' }, { ac: 'AC9HH9K12' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The war turned decisively in 1917–1918 with the Russian Revolution and the entry of the United States. On 11 November 1918, the Armistice ended the fighting. The peace treaties that followed, such as the Treaty of Versailles, placed heavy penalties on Germany.',
        'Australians have commemorated the war ever since — through Anzac Day, war memorials and the Anzac legend. Historians debate the legend and what it means, and the war\'s memory continues to shape Australian identity.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: USA enters 1917, the 11 November 1918 Armistice, peace treaties, commemoration & debate',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'USA enters the war 1917' }, { text: 'Armistice 11 Nov 1918' }, { text: 'Peace treaties' }, { text: 'Commemoration & debate' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-HIS-WW05-q1', type: 'short', prompt: 'On what date did the Armistice end the First World War?', answer: '11 November 1918', difficulty: 2 },
        { id: 'Y9-HIS-WW05-q2', type: 'mcq', prompt: 'The United States entered the war in 1917, which…', options: ['Strengthened the Allies and helped end the war', 'Had no effect', 'Ended the war instantly'], answer: 'Strengthened the Allies and helped end the war', difficulty: 2 },
        { id: 'Y9-HIS-WW05-q3', type: 'mcq', prompt: 'The Treaty of Versailles placed…', options: ['Heavy penalties on Germany', 'No conditions at all', 'Rewards for Germany'], answer: 'Heavy penalties on Germany', difficulty: 2 },
        { id: 'Y9-HIS-WW05-q4', type: 'mcq', prompt: 'Australians commemorate the war through…', options: ['Anzac Day and war memorials', 'Skipping it entirely', 'A mid-year festival'], answer: 'Anzac Day and war memorials', difficulty: 1 },
        { id: 'Y9-HIS-WW05-q5', type: 'mcq', prompt: "Historians' views of the Anzac legend…", options: ['Differ and have changed over time', 'Are all identical forever', 'Are never based on evidence'], answer: 'Differ and have changed over time', difficulty: 2 },
        { id: 'Y9-HIS-WW05-q6', type: 'mcq', prompt: 'Commemorating a war is different from glorifying it because…', options: ['Commemoration honours and remembers those affected', 'They are exactly the same', 'Commemoration celebrates victory only'], answer: 'Commemoration honours and remembers those affected', difficulty: 2 },
      ],
    },
  },
];
