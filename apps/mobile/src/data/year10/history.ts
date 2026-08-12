import type { Topic } from '../../types/curriculum';

/**
 * Year 10 History — full topic bank (AC v9.0, subject code HH).
 * Source of truth: docs/content/year-7-10/history.md. Year 10 mandates BOTH
 * sub-strands: "Second World War" (AC9HH10K01–K06) and "Building modern
 * Australia (1945–present)" (AC9HH10K07–K13). Skills CDs (AC9HH10S01–S08)
 * are woven into the units per the source doc.
 *
 * SENSITIVITY: WW02 (POWs and the Pacific war), WW03 (the Holocaust and the
 * atomic bomb), WW04 (home front incl. First Nations Australians), BA02, BA03
 * and BA05 (First Nations Australians' rights and reconciliation) carry
 * `sensitivity: true` — written to established facts with age-appropriate,
 * respectful framing, pending human/community-protocol review before release.
 */
export const YEAR10_HISTORY_TOPICS: Topic[] = [
  // ---------- Second World War (6 CDs) ----------
  {
    id: 'Y10-HIS-WW01',
    title: 'Causes & outbreak of the Second World War',
    year: '10',
    subject: 'hass',
    strand: 'History — Second World War',
    cd: [{ ac: 'AC9HH10K01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'After the First World War, the harsh Treaty of Versailles, the Great Depression and the weakness of the League of Nations helped create conditions for a new war. In Germany, Adolf Hitler and the Nazi Party rose to power from 1933, and Japan pursued militarist expansion in Asia.',
        'War began in Europe in September 1939 when Germany invaded Poland. Australia\'s Prime Minister Robert Menzies announced that Australia was at war because Britain was at war; after Japan attacked Pearl Harbor in December 1941, the war came to the Asia-Pacific.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of causes: Versailles & the Great Depression, the rise of Nazi Germany, appeasement fails, war 1939',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Versailles & Depression' }, { text: 'Nazi Germany rises' }, { text: 'Appeasement fails' }, { text: 'War declared 1939' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-WW01-q1', type: 'short', prompt: 'In what year did the Second World War begin in Europe?', answer: '1939', difficulty: 1 },
        { id: 'Y10-HIS-WW01-q2', type: 'mcq', prompt: 'Germany\'s invasion of which country triggered the war in Europe?', options: ['Poland', 'Australia', 'Sweden'], answer: 'Poland', difficulty: 1 },
        { id: 'Y10-HIS-WW01-q3', type: 'mcq', prompt: 'The Treaty of Versailles, the Great Depression and a weak League of Nations…', options: ['Helped create conditions for a new war', 'Guaranteed lasting peace', 'Were unimportant'], answer: 'Helped create conditions for a new war', difficulty: 2 },
        { id: 'Y10-HIS-WW01-q4', type: 'mcq', prompt: 'In Japan, militarist leaders pursued…', options: ['Expansion in Asia', 'Immediate disarmament', 'Alliance with Poland'], answer: 'Expansion in Asia', difficulty: 2 },
        { id: 'Y10-HIS-WW01-q5', type: 'mcq', prompt: 'Australia declared war in 1939 because…', options: ['Britain was at war', 'Japan had invaded', 'Its own vote said so'], answer: 'Britain was at war', difficulty: 2 },
        { id: 'Y10-HIS-WW01-q6', type: 'mcq', prompt: 'The Japanese attack on Pearl Harbor in 1941…', options: ['Brought the United States into the war', 'Ended the war', 'Was an Australian attack'], answer: 'Brought the United States into the war', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-HIS-WW02',
    title: 'Australia at war: places & experiences',
    year: '10',
    subject: 'hass',
    strand: 'History — Second World War',
    cd: [{ ac: 'AC9HH10K02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'Australians fought in many places in the Second World War: in North Africa (including Tobruk), in Greece and Crete, at sea, and from 1942 in the Asia-Pacific. The fall of Singapore in February 1942 was a devastating blow, and thousands of Australians became prisoners of war (POWs), some treated brutally by Japanese captors and forced to work on the Thai-Burma Railway.',
        'In the jungles of Papua New Guinea, Australians fought the Japanese along the Kokoda Track, halting the Japanese advance toward Port Moresby. Darwin was bombed in 1942, and Japanese submarines attacked Sydney Harbour in the same year.',
      ],
      illustrations: [
        {
          brief: 'Australia at war: Tobruk, the fall of Singapore, POWs, Kokoda, the 1942 bombings',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'Singapore falls 1942' }, { icon: 'flag', label: 'Kokoda' }, { icon: 'people', label: 'Soldiers & POWs' }], caption: 'A war that came to Australia' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-WW02-q1', type: 'mcq', prompt: 'The fall of Singapore in 1942 resulted in…', options: ['Thousands of Australians becoming prisoners of war', 'An easy Australian victory', 'No Australians involved'], answer: 'Thousands of Australians becoming prisoners of war', difficulty: 2 },
        { id: 'Y10-HIS-WW02-q2', type: 'mcq', prompt: 'Along the Kokoda Track in Papua New Guinea, Australians…', options: ['Halted the Japanese advance toward Port Moresby', 'Won a naval battle', 'Surrendered immediately'], answer: 'Halted the Japanese advance toward Port Moresby', difficulty: 2 },
        { id: 'Y10-HIS-WW02-q3', type: 'mcq', prompt: 'In 1942, Darwin was…', options: ['Bombed by Japanese aircraft', 'Never touched by war', 'The site of a peace treaty'], answer: 'Bombed by Japanese aircraft', difficulty: 2 },
        { id: 'Y10-HIS-WW02-q4', type: 'mcq', prompt: 'Australian POWs held by the Japanese…', options: ['Suffered brutal treatment and forced labour', 'Were treated very kindly', 'Escaped easily'], answer: 'Suffered brutal treatment and forced labour', difficulty: 2 },
        { id: 'Y10-HIS-WW02-q5', type: 'mcq', prompt: 'The Thai-Burma Railway was built using…', options: ['Forced labour including Allied POWs', 'Only machines', 'Volunteer engineers'], answer: 'Forced labour including Allied POWs', difficulty: 2 },
        { id: 'Y10-HIS-WW02-q6', type: 'mcq', prompt: 'Australians also fought in the Second World War in…', options: ['North Africa, including Tobruk', 'Antarctica', 'The Moon'], answer: 'North Africa, including Tobruk', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-HIS-WW03',
    title: 'Turning points: the Holocaust & the atomic bomb',
    year: '10',
    subject: 'hass',
    strand: 'History — Second World War',
    cd: [{ ac: 'AC9HH10K03' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'The Second World War included the Holocaust — the systematic murder of around six million Jews by Nazi Germany and its collaborators, along with the persecution and murder of many other groups. The Nazis built an entire system of hatred and killing, and the world has struggled to understand it since.',
        'In August 1945, the United States dropped atomic bombs on Hiroshima and Nagasaki, devastating both cities. Japan surrendered, ending the war, but the bombs raised deep and lasting questions about the human cost of the war and the power of new weapons.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of turning points: the Holocaust, Pearl Harbor 1941, atomic bombs 1945, the war ends',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'The Holocaust' }, { text: 'Pearl Harbor 1941' }, { text: 'Atomic bombs 1945' }, { text: 'The war ends' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-WW03-q1', type: 'mcq', prompt: 'The Holocaust refers to…', options: ['The systematic murder of millions of Jews and other groups by the Nazis', 'A single battle', 'A peace conference'], answer: 'The systematic murder of millions of Jews and other groups by the Nazis', difficulty: 3 },
        { id: 'Y10-HIS-WW03-q2', type: 'short', prompt: 'Which two Japanese cities were destroyed by atomic bombs in August 1945?', answer: 'Hiroshima and Nagasaki', difficulty: 2 },
        { id: 'Y10-HIS-WW03-q3', type: 'mcq', prompt: 'The atomic bombs were dropped by…', options: ['The United States', 'Australia', 'Germany'], answer: 'The United States', difficulty: 1 },
        { id: 'Y10-HIS-WW03-q4', type: 'mcq', prompt: 'The Holocaust shows the terrible consequences of…', options: ['Hatred, discrimination and unchecked power', 'Kindness and tolerance', 'Peaceful trade'], answer: 'Hatred, discrimination and unchecked power', difficulty: 3 },
        { id: 'Y10-HIS-WW03-q5', type: 'mcq', prompt: 'Japan surrendered after the atomic bombs, which…', options: ['Brought the Second World War to an end', 'Started a longer war', 'Had no effect'], answer: 'Brought the Second World War to an end', difficulty: 2 },
        { id: 'Y10-HIS-WW03-q6', type: 'mcq', prompt: 'The atomic bombs had…', options: ['Long-lasting effects on the cities and their people', 'No lasting effects', 'Only good effects'], answer: 'Long-lasting effects on the cities and their people', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-HIS-WW04',
    title: 'The home front',
    year: '10',
    subject: 'hass',
    strand: 'History — Second World War',
    cd: [{ ac: 'AC9HH10K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'The war mobilised all of Australia. The government took strong control of daily life through the National Security Act 1939: news was censored, rationing limited food and goods, and manpower controls directed workers. Some residents of German, Italian and Japanese origin were interned.',
        'Women served in the military (such as the WAAAF and AWAS) and filled factory and farm jobs, and First Nations Australians overcame barriers to serve in roles such as the Torres Strait Light Infantry Battalion and the Northern Territory Special Reconnaissance Unit, while also working as civilians for the army.',
      ],
      illustrations: [
        {
          brief: 'The home front: women and First Nations Australians in the services, rationing, government controls',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Women & First Nations Australians at work' }, { icon: 'clock', label: 'Rationing & controls' }, { icon: 'flag', label: 'Australia mobilised' }], caption: 'Total war on the home front' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-WW04-q1', type: 'mcq', prompt: 'Rationing during the war meant…', options: ['Limited amounts of some goods for everyone', 'Unlimited food for everyone', 'Only soldiers ate'], answer: 'Limited amounts of some goods for everyone', difficulty: 1 },
        { id: 'Y10-HIS-WW04-q2', type: 'mcq', prompt: 'Women in wartime Australia served…', options: ['In the military and in factory and farm work', 'Nowhere at all', 'Only as housekeepers'], answer: 'In the military and in factory and farm work', difficulty: 2 },
        { id: 'Y10-HIS-WW04-q3', type: 'mcq', prompt: 'First Nations Australians during the war…', options: ['Overcame barriers to serve in the armed forces', 'Were always fully included from the start', 'Never served'], answer: 'Overcame barriers to serve in the armed forces', difficulty: 2 },
        { id: 'Y10-HIS-WW04-q4', type: 'mcq', prompt: 'The National Security Act 1939 allowed the government to…', options: ['Censor news and control workers', 'End the war immediately', 'Give everyone a holiday'], answer: 'Censor news and control workers', difficulty: 2 },
        { id: 'Y10-HIS-WW04-q5', type: 'mcq', prompt: 'During the war, some residents of enemy origin were…', options: ['Interned (detained)', 'Given awards', 'Sent on holiday'], answer: 'Interned (detained)', difficulty: 2 },
        { id: 'Y10-HIS-WW04-q6', type: 'mcq', prompt: 'The home front supported the war through…', options: ['Rationing, fundraising and work in essential jobs', 'Ignoring the war completely', 'Refusing all work'], answer: 'Rationing, fundraising and work in essential jobs', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-HIS-WW05',
    title: 'Aftermath: rebuilding & commemoration',
    year: '10',
    subject: 'hass',
    strand: 'History — Second World War',
    cd: [{ ac: 'AC9HH10K05' }, { ac: 'AC9HH10K06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The Second World War reshaped Australia\'s place in the world. Australia helped found the United Nations and, under Prime Minister Ben Chifley, began post-war reconstruction. The war also shifted Australia\'s alliance from Britain toward the United States, sealed with the ANZUS treaty.',
        'Australians commemorate the war through Anzac Day and memorials, but historians debate aspects of it — for example, the "Battle for Australia" and how the Kokoda campaign is remembered and commemorated today.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: rebuilding 1945, the United Nations, the ANZUS alliance, commemoration & debate',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Rebuilding 1945' }, { text: 'Founding the UN' }, { text: 'ANZUS alliance' }, { text: 'Commemoration & debate' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-WW05-q1', type: 'mcq', prompt: 'ANZUS is a security treaty between Australia and…', options: ['The United States and New Zealand', 'Only Germany', 'No one'], answer: 'The United States and New Zealand', difficulty: 2 },
        { id: 'Y10-HIS-WW05-q2', type: 'mcq', prompt: 'Australia helped found the United Nations, with figures such as…', options: ['H.V. Evatt and Jessie Street involved in the charter', 'Only soldiers', 'No Australians involved'], answer: 'H.V. Evatt and Jessie Street involved in the charter', difficulty: 3 },
        { id: 'Y10-HIS-WW05-q3', type: 'mcq', prompt: 'Post-war reconstruction under Prime Minister Ben Chifley focused on…', options: ['Rebuilding and modernising Australia', 'Starting a new war', 'Returning to 1900'], answer: 'Rebuilding and modernising Australia', difficulty: 2 },
        { id: 'Y10-HIS-WW05-q4', type: 'mcq', prompt: "After the war, Australia's key alliance shifted toward…", options: ['The United States', 'Germany', 'Japan'], answer: 'The United States', difficulty: 1 },
        { id: 'Y10-HIS-WW05-q5', type: 'mcq', prompt: 'Australians commemorate the Second World War through…', options: ['Anzac Day and war memorials', 'A mid-year carnival', 'Nothing at all'], answer: 'Anzac Day and war memorials', difficulty: 1 },
        { id: 'Y10-HIS-WW05-q6', type: 'mcq', prompt: 'Historians debate…', options: ['How the war and its battles are commemorated and interpreted', 'Whether the war happened', 'Only weather records'], answer: 'How the war and its battles are commemorated and interpreted', difficulty: 2 },
      ],
    },
  },
  // ---------- Building modern Australia (7 CDs) ----------
  {
    id: 'Y10-HIS-BA01',
    title: 'Post-war migration: a new Australia',
    year: '10',
    subject: 'hass',
    strand: 'History — Building Modern Australia',
    cd: [{ ac: 'AC9HH10K07' }, { ac: 'AC9HH10K08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'After 1945, Australia feared it was too small to defend itself: the government adopted a "populate or perish" policy and encouraged massive migration. Between the 1950s and the 2000s, waves of migrants came from Europe, then Asia, the Middle East, India and Africa.',
        'Migration was driven by push factors (war, poverty, upheaval) and pull factors (jobs, safety, opportunities). These migrants, including refugees from the wreckage of Europe, transformed Australia into one of the world\'s most multicultural societies.',
      ],
      illustrations: [
        {
          brief: 'Post-war migration: ships and suitcases from Europe, new lives, a multicultural Australia',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'Migrants from Europe' }, { icon: 'suitcase', label: 'New lives' }, { icon: 'people', label: 'Multicultural Australia' }], caption: '"Populate or perish" transformed the nation' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-BA01-q1', type: 'mcq', prompt: "The 'populate or perish' policy was about…", options: ['Encouraging large-scale migration', 'Stopping all migration', 'Sending people away'], answer: 'Encouraging large-scale migration', difficulty: 2 },
        { id: 'Y10-HIS-BA01-q2', type: 'mcq', prompt: 'After 1945, large waves of migrants first came from…', options: ['Europe', 'South America', 'The Moon'], answer: 'Europe', difficulty: 1 },
        { id: 'Y10-HIS-BA01-q3', type: 'mcq', prompt: "A 'push factor' for migration is something that…", options: ['Makes people want to leave their home', 'Pulls people to a new country', 'Stops all movement'], answer: 'Makes people want to leave their home', difficulty: 1 },
        { id: 'Y10-HIS-BA01-q4', type: 'mcq', prompt: 'Post-war migration made Australia…', options: ['More culturally diverse', 'Less diverse', 'Exactly the same'], answer: 'More culturally diverse', difficulty: 1 },
        { id: 'Y10-HIS-BA01-q5', type: 'mcq', prompt: "Australia's post-war migration included…", options: ['Refugees from war-torn Europe', 'No refugees at all', 'Only astronauts'], answer: 'Refugees from war-torn Europe', difficulty: 2 },
        { id: 'Y10-HIS-BA01-q6', type: 'mcq', prompt: 'Migration waves from the 1970s to the 2000s increasingly came from…', options: ['Asia and other world regions', 'Only Britain', 'Nowhere'], answer: 'Asia and other world regions', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-HIS-BA02',
    title: 'First Nations Australians: campaigns before 1965',
    year: '10',
    subject: 'hass',
    strand: 'History — Building Modern Australia',
    cd: [{ ac: 'AC9HH10K09' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'For most of the 20th century, First Nations Australians faced discriminatory laws and policies. Governments practised protection, segregation and, from 1937, a policy of assimilation. Many children were forcibly removed from their families — the Stolen Generations — causing deep and lasting harm.',
        'First Nations Australians organised to fight for rights. The 1938 Day of Mourning marked 150 years since the First Fleet, and organisations such as the Australian Aborigines League and the Australian Aboriginal Progressive Association campaigned for citizenship, land and justice.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: protection & assimilation policies, the Day of Mourning, the Stolen Generations, campaigns for rights',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Protection & assimilation' }, { text: '1938 Day of Mourning' }, { text: 'Stolen Generations' }, { text: 'Campaigns for rights' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-BA02-q1', type: 'mcq', prompt: 'The 1938 Day of Mourning was held on 26 January 1938 to…', options: ['Protest against 150 years of colonisation and call for rights', 'Celebrate Federation', 'Open a museum'], answer: 'Protest against 150 years of colonisation and call for rights', difficulty: 2 },
        { id: 'Y10-HIS-BA02-q2', type: 'mcq', prompt: 'The Stolen Generations refers to…', options: ['First Nations children forcibly removed from their families', 'A famous football team', 'Lost luggage'], answer: 'First Nations children forcibly removed from their families', difficulty: 2 },
        { id: 'Y10-HIS-BA02-q3', type: 'mcq', prompt: 'The policy of assimilation aimed to…', options: ['Make First Nations Australians give up their own cultures and ways of life', 'Protect all cultures equally', 'Return all land'], answer: 'Make First Nations Australians give up their own cultures and ways of life', difficulty: 2 },
        { id: 'Y10-HIS-BA02-q4', type: 'mcq', prompt: 'The Australian Aborigines League and AAPA were…', options: ['Organisations campaigning for First Nations rights', 'Sports clubs', 'Trading companies'], answer: 'Organisations campaigning for First Nations rights', difficulty: 2 },
        { id: 'Y10-HIS-BA02-q5', type: 'mcq', prompt: 'Campaigns before 1965 called for…', options: ['Citizenship, land and justice', 'More discrimination', 'Nothing at all'], answer: 'Citizenship, land and justice', difficulty: 1 },
        { id: 'Y10-HIS-BA02-q6', type: 'mcq', prompt: 'The experience of the Stolen Generations shaped…', options: ['The later struggle for rights and reconciliation', 'Nothing in Australian history', 'Only sporting rules'], answer: 'The later struggle for rights and reconciliation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-HIS-BA03',
    title: 'The movement for rights: 1962 to today',
    year: '10',
    subject: 'hass',
    strand: 'History — Building Modern Australia',
    cd: [{ ac: 'AC9HH10K10' }, { ac: 'AC9HH10K11' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'The 1960s brought historic change. First Nations Australians gained the right to vote in federal elections in 1962, and inspired by the US civil rights movement, the 1965 Freedom Rides challenged segregation in NSW country towns. In 1967, Australians voted overwhelmingly in a referendum to change the Constitution to count First Nations Australians in the population and allow the Commonwealth to make laws for them.',
        'The movement continued with land rights actions such as the Wave Hill Walk-Off and the Tent Embassy, and the historic Mabo decision of 1992, which recognised native title and overturned the idea of terra nullius.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: the 1962 vote, Freedom Rides 1965, the 1967 Referendum, land rights & Mabo',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Right to vote 1962' }, { text: 'Freedom Rides 1965' }, { text: '1967 Referendum' }, { text: 'Land rights & Mabo' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-BA03-q1', type: 'short', prompt: 'In what year did First Nations Australians gain the right to vote in federal elections?', answer: '1962', difficulty: 2 },
        { id: 'Y10-HIS-BA03-q2', type: 'mcq', prompt: 'The 1967 Referendum…', options: ['Changed the Constitution to count First Nations Australians', 'Removed all land rights', 'Had no effect'], answer: 'Changed the Constitution to count First Nations Australians', difficulty: 2 },
        { id: 'Y10-HIS-BA03-q3', type: 'mcq', prompt: 'The Freedom Rides of 1965 were…', options: ['Bus trips challenging segregation and discrimination', 'A type of race', 'Peaceful picnics only'], answer: 'Bus trips challenging segregation and discrimination', difficulty: 2 },
        { id: 'Y10-HIS-BA03-q4', type: 'mcq', prompt: 'The Mabo decision of 1992…', options: ['Recognised native title and overturned terra nullius', 'Ended all land claims', 'Was about tax'], answer: 'Recognised native title and overturned terra nullius', difficulty: 3 },
        { id: 'Y10-HIS-BA03-q5', type: 'mcq', prompt: 'The Wave Hill Walk-Off and the Tent Embassy were…', options: ['Actions in the struggle for land rights', 'Cooking competitions', 'Railway projects'], answer: 'Actions in the struggle for land rights', difficulty: 2 },
        { id: 'Y10-HIS-BA03-q6', type: 'mcq', prompt: "'Terra nullius' was the idea that…", options: ['The land was empty, which Mabo showed was wrong', 'All land belonged to everyone', 'Land could never be owned'], answer: 'The land was empty, which Mabo showed was wrong', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-HIS-BA04',
    title: "Women's movement & changing rights",
    year: '10',
    subject: 'hass',
    strand: 'History — Building Modern Australia',
    cd: [{ ac: 'AC9HH10K12' }, { ac: 'AC9HH10K13' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Since 1945, women's roles and rights in Australia have changed enormously. Women campaigned for equal pay and an end to the 'marriage bar' that forced women to leave jobs when they married, and laws such as the Sex Discrimination Act 1984 protected women from discrimination.",
        'Women have become leaders in government, business, sport and the arts. The women\'s movement of the 1960s and 70s, and continuing action since, have improved women\'s status in education, work and public life — though the gender pay gap and other issues remain.',
      ],
      illustrations: [
        {
          brief: 'Women\'s rights since 1945: the workforce, equal pay campaigns, laws, women leaders',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Women in the workforce' }, { icon: 'pen', label: 'Equal pay campaigns' }, { icon: 'trophy', label: 'Women leaders' }], caption: 'Campaigns, laws and changing attitudes' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-BA04-q1', type: 'mcq', prompt: "The 'marriage bar' was a rule that…", options: ['Forced women to leave jobs when they married', 'Let women work forever', 'Banned marriage'], answer: 'Forced women to leave jobs when they married', difficulty: 2 },
        { id: 'Y10-HIS-BA04-q2', type: 'mcq', prompt: 'The Sex Discrimination Act was passed in…', options: ['1984', '1901', '2000'], answer: '1984', difficulty: 2 },
        { id: 'Y10-HIS-BA04-q3', type: 'mcq', prompt: 'The women\'s movement of the 1960s and 70s campaigned for…', options: ['Equal pay and equal rights', 'The return of the marriage bar', 'Fewer rights'], answer: 'Equal pay and equal rights', difficulty: 2 },
        { id: 'Y10-HIS-BA04-q4', type: 'mcq', prompt: 'Since 1945, the number of women in the paid workforce has…', options: ['Grown greatly', 'Fallen to zero', 'Stayed exactly the same'], answer: 'Grown greatly', difficulty: 1 },
        { id: 'Y10-HIS-BA04-q5', type: 'mcq', prompt: "Women's status in Australia has changed through…", options: ['Campaigns, laws and changing attitudes', 'No action at all', 'Only war'], answer: 'Campaigns, laws and changing attitudes', difficulty: 2 },
        { id: 'Y10-HIS-BA04-q6', type: 'mcq', prompt: 'The gender pay gap refers to…', options: ["The difference between men's and women's average pay", 'A type of clothing', 'A parking rule'], answer: "The difference between men's and women's average pay", difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-HIS-BA05',
    title: 'Continuing change: rights & identity today',
    year: '10',
    subject: 'hass',
    strand: 'History — Building Modern Australia',
    cd: [{ ac: 'AC9HH10K11' }, { ac: 'AC9HH10K13' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        "Australia's story of rights continues. First Nations Australians have advanced Reconciliation — an ongoing process of truth-telling and healing — marked by events such as the Redfern Speech, the Bringing Them Home report and the Apology to the Stolen Generations in 2008. Debates over migration, multiculturalism and the treatment of asylum seekers continue to shape national identity.",
        'Australia today is one of the world\'s most multicultural nations. Understanding this history of rights and change helps us see both how far Australia has come and the work still to be done.',
      ],
      illustrations: [
        {
          brief: 'Continuing change: multiculturalism debates, reconciliation and truth-telling, a changing Australian identity',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Multicultural Australia' }, { icon: 'chat-bubble', label: 'Ongoing debates' }, { icon: 'globe', label: 'Australia in the world' }], caption: 'An ongoing story of rights and change' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-HIS-BA05-q1', type: 'mcq', prompt: 'The Apology to the Stolen Generations was delivered by the Prime Minister in…', options: ['2008', '1901', '1788'], answer: '2008', difficulty: 2 },
        { id: 'Y10-HIS-BA05-q2', type: 'mcq', prompt: 'Reconciliation is best described as…', options: ['An ongoing process of truth-telling and healing', 'A single event now finished', 'A sporting trophy'], answer: 'An ongoing process of truth-telling and healing', difficulty: 2 },
        { id: 'Y10-HIS-BA05-q3', type: 'mcq', prompt: 'The Bringing Them Home report documented…', options: ['The experiences of the Stolen Generations', 'A fishing trip', 'The weather'], answer: 'The experiences of the Stolen Generations', difficulty: 2 },
        { id: 'Y10-HIS-BA05-q4', type: 'mcq', prompt: 'Debates over multiculturalism and border protection show that…', options: ['Ideas about identity and migration continue to change', 'All debates are finished', 'Australia has never changed'], answer: 'Ideas about identity and migration continue to change', difficulty: 2 },
        { id: 'Y10-HIS-BA05-q5', type: 'mcq', prompt: "Understanding Australia's history of rights helps us…", options: ['See how far Australia has come and what remains to be done', 'Forget the past completely', 'Avoid all discussion'], answer: 'See how far Australia has come and what remains to be done', difficulty: 1 },
        { id: 'Y10-HIS-BA05-q6', type: 'mcq', prompt: "Australia's population today is best described as…", options: ["One of the world's most multicultural", 'Completely uniform', 'Shrinking to nothing'], answer: "One of the world's most multicultural", difficulty: 1 },
      ],
    },
  },
];
