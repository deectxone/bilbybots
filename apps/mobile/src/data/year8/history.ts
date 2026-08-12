import type { Topic } from '../../types/curriculum';

/**
 * Year 8 History, full topic bank (AC v9.0, subject code HH).
 * Source of truth: docs/content/year-7-10/history.md. Year 8 requires at least
 * one topic from "Medieval Europe and the early modern world" and one from
 * either "Empires and expansions" or "Asia-Pacific world". This bank delivers
 * the full Medieval sub-strand (AC9HH8K01–K06) plus the "Japan under the
 * Shoguns" depth study (AC9HH8K12–K16), the classic NSW Stage 4 pairing.
 * Skills CDs (AC9HH8S01–S08) are woven into the units per the source doc.
 *
 * Note: the "Making and transforming the Australian nation" unit is a YEAR 9
 * sub-strand in v9.0 (AC9HH9K01–K07); it is authored there, not here, see
 * docs/content/year-7-10/history.md §framing-note.
 */
export const YEAR8_HISTORY_TOPICS: Topic[] = [
  // ---------- Medieval Europe and the early modern world (6 CDs) ----------
  {
    id: 'Y8-HIS-MW01',
    title: 'Rome falls, the medieval world begins',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The western half of the Roman Empire collapsed around the 5th century CE, and in the centuries that followed Europe changed: kingdoms rose, Christianity spread, towns shrank, and trade became harder. This period is called the medieval period (c.590–c.1500 CE).',
        'The Eastern Roman (Byzantine) Empire continued, and the religion and ideas of the old world lived on in the Church and monasteries, shaping the new European world.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: Rome falls, kingdoms rise, the Church grows, feudalism takes shape',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: "Rome's western empire falls" }, { text: 'Kingdoms rise' }, { text: 'The Church grows' }, { text: 'Feudalism takes shape' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW01-q1', type: 'short', prompt: 'The western Roman Empire collapsed around which century CE?', answer: '5th', difficulty: 2 },
        { id: 'Y8-HIS-MW01-q2', type: 'mcq', prompt: "After Rome's fall, European society changed by…", options: ['Kingdoms rising and Christianity spreading', 'Staying exactly the same', 'Becoming one giant empire again overnight'], answer: 'Kingdoms rising and Christianity spreading', difficulty: 2 },
        { id: 'Y8-HIS-MW01-q3', type: 'mcq', prompt: 'The medieval period in Europe is roughly dated from…', options: ['c.590 to c.1500 CE', 'c.1900 to c.2000 CE', 'c.1 to c.100 CE'], answer: 'c.590 to c.1500 CE', difficulty: 2 },
        { id: 'Y8-HIS-MW01-q4', type: 'mcq', prompt: 'The Byzantine Empire was…', options: ['The continuing Eastern Roman Empire', 'A city in Australia', 'A Viking kingdom'], answer: 'The continuing Eastern Roman Empire', difficulty: 2 },
        { id: 'Y8-HIS-MW01-q5', type: 'mcq', prompt: "After Rome's fall, learning and religion were largely preserved by…", options: ['The Church and monasteries', 'Modern universities only', 'No one'], answer: 'The Church and monasteries', difficulty: 2 },
        { id: 'Y8-HIS-MW01-q6', type: 'mcq', prompt: 'The medieval period began after…', options: ['The decline and fall of the western Roman Empire', 'The invention of the car', 'The end of World War I'], answer: 'The decline and fall of the western Roman Empire', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-HIS-MW02',
    title: 'Feudal society: kings, nobles, knights & peasants',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Medieval Europe was organised by a system called feudalism. The king granted land to powerful nobles; nobles granted land to knights in return for military service; and peasants and serfs worked the land, paying with their labour and crops.',
        'Society was a pyramid: the king on top, then nobles, then knights, with peasants and serfs at the base. Women and men of each group had defined roles in family, farming, trade and defence.',
      ],
      illustrations: [
        {
          brief: 'A social pyramid: king, nobles, knights, peasants and serfs',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['King', 'Nobles', 'Knights', 'Peasants', 'Serfs'], highlight: 2 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW02-q1', type: 'mcq', prompt: 'In feudalism, knights received land in return for…', options: ['Military service', 'Paying no taxes ever', 'Teaching at universities'], answer: 'Military service', difficulty: 1 },
        { id: 'Y8-HIS-MW02-q2', type: 'mcq', prompt: 'At the top of the feudal pyramid was the…', options: ['King', 'Serf', 'Knight'], answer: 'King', difficulty: 1 },
        { id: 'Y8-HIS-MW02-q3', type: 'short', prompt: 'What is the name of the system that organised medieval European society around lords, vassals and land?', answer: 'feudalism', difficulty: 2 },
        { id: 'Y8-HIS-MW02-q4', type: 'mcq', prompt: 'Serfs were people who…', options: ['Worked the land for a lord, tied to it', 'Ruled the country', 'Never worked at all'], answer: 'Worked the land for a lord, tied to it', difficulty: 2 },
        { id: 'Y8-HIS-MW02-q5', type: 'mcq', prompt: 'The Church was powerful in medieval society because it…', options: ['Held land, wealth and influence over daily life', 'Only ran the army', 'Had no followers'], answer: 'Held land, wealth and influence over daily life', difficulty: 2 },
        { id: 'Y8-HIS-MW02-q6', type: 'mcq', prompt: "Which of these best describes a 'knight' in medieval Europe?", options: ['A mounted warrior loyal to a lord', 'A farmer who owns all land', 'A travelling merchant only'], answer: 'A mounted warrior loyal to a lord', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-HIS-MW03',
    title: 'The Church, monasteries & learning',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K03' }, { ac: 'AC9HH8K05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The Catholic Church was the most powerful institution in medieval Europe. It held land, collected tithes, ran schools and hospitals, and influenced rulers and ordinary people alike. Cathedrals such as Notre Dame in Paris showed the Church\'s wealth and power.',
        'Monasteries were centres of learning: monks copied books by hand, producing illuminated manuscripts that preserved much ancient Greek, Roman and Arab knowledge, and many great thinkers studied in the schools and universities that grew up around the Church.',
      ],
      illustrations: [
        {
          brief: 'Church power and learning: tithes & cathedrals, monk scribes, illuminated manuscripts, universities',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'quill', label: 'Monk scribes' }, { icon: 'book', label: 'Illuminated manuscripts' }, { icon: 'link', label: 'Preserving ancient learning' }], caption: 'Monasteries kept knowledge alive' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW03-q1', type: 'mcq', prompt: 'Monks preserved ancient knowledge by…', options: ['Copying texts into illuminated manuscripts by hand', 'Burning old books', 'Printing with computers'], answer: 'Copying texts into illuminated manuscripts by hand', difficulty: 2 },
        { id: 'Y8-HIS-MW03-q2', type: 'mcq', prompt: 'Cathedrals such as Notre Dame in Paris showed…', options: ["The Church's wealth, power and influence", 'That the Church was poor', 'That only kings built'], answer: "The Church's wealth, power and influence", difficulty: 2 },
        { id: 'Y8-HIS-MW03-q3', type: 'mcq', prompt: "A 'tithe' in medieval Europe was…", options: ['A payment of one-tenth of produce to the Church', 'A type of weapon', 'A kind of song'], answer: 'A payment of one-tenth of produce to the Church', difficulty: 2 },
        { id: 'Y8-HIS-MW03-q4', type: 'mcq', prompt: 'The Church influenced medieval society through…', options: ['Schools, hospitals and daily religious life', 'Nothing at all', 'Only taxis'], answer: 'Schools, hospitals and daily religious life', difficulty: 1 },
        { id: 'Y8-HIS-MW03-q5', type: 'short', prompt: 'What is the name for a decorated, hand-written book produced by monks?', answer: 'illuminated manuscript', difficulty: 3 },
        { id: 'Y8-HIS-MW03-q6', type: 'mcq', prompt: 'Medieval universities grew out of…', options: ['Schools linked to the Church', 'Football clubs', 'Ports only'], answer: 'Schools linked to the Church', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-HIS-MW04',
    title: 'The Black Death',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K03' }, { ac: 'AC9HH8K04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In the 1340s, a terrible plague called the Black Death swept through Europe along trade routes, killing around a third to a half of the population. It was a catastrophic turning point in medieval history.',
        'The plague had huge effects: labour shortages made workers more valuable, peasants and workers gained more freedom, some rose up in revolt, feudal structures weakened, and people questioned long-held beliefs and authorities.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of the plague\'s course and effects: trade spreads it, labour shortages, uprisings, feudalism weakens',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Trade routes spread plague' }, { text: 'Labour shortages' }, { text: 'Peasants gain freedom' }, { text: 'Feudalism weakens' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW04-q1', type: 'short', prompt: 'In which decade did the Black Death reach Europe?', answer: '1340s', difficulty: 2 },
        { id: 'Y8-HIS-MW04-q2', type: 'mcq', prompt: 'The Black Death was spread along…', options: ['Trade routes', 'Underground rivers only', 'Satellite signals'], answer: 'Trade routes', difficulty: 2 },
        { id: 'Y8-HIS-MW04-q3', type: 'mcq', prompt: 'After the Black Death, labour shortages meant workers…', options: ['Could demand better pay and more freedom', 'Lost all their rights', 'Had to work twice for nothing'], answer: 'Could demand better pay and more freedom', difficulty: 2 },
        { id: 'Y8-HIS-MW04-q4', type: 'mcq', prompt: 'One effect of the Black Death was that…', options: ['Feudal structures weakened', 'Feudalism grew stronger than ever', 'Nothing changed in Europe'], answer: 'Feudal structures weakened', difficulty: 2 },
        { id: 'Y8-HIS-MW04-q5', type: 'mcq', prompt: 'The Black Death is best described as…', options: ['A devastating turning point in medieval Europe', 'A minor storm', 'A religious festival'], answer: 'A devastating turning point in medieval Europe', difficulty: 1 },
        { id: 'Y8-HIS-MW04-q6', type: 'mcq', prompt: "Historians study church records to estimate the Black Death's effects on…", options: ['Population change', 'The weather forecast', 'Modern prices'], answer: 'Population change', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-HIS-MW05',
    title: 'Crusades, contact & trade',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K03' }, { ac: 'AC9HH8K04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'From 1096, European Christians launched a series of Crusades, military campaigns to take control of the Holy Land from Muslim rulers. The Crusades lasted for centuries and brought great suffering.',
        'They also created deep contact between Europe and the Islamic world: trade flourished, and European travellers gained access to goods, ideas and knowledge, including in science, medicine and mathematics, from the Muslim world.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of contact: pilgrims, the First Crusade, trade with the Islamic world, ideas flow to Europe',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Christian pilgrims travel east' }, { text: 'The Crusades' }, { text: 'Trade with the Islamic world' }, { text: 'Goods & ideas reach Europe' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW05-q1', type: 'mcq', prompt: 'The Crusades were military campaigns to…', options: ['Control the Holy Land', 'Colonise Australia', 'Find new planets'], answer: 'Control the Holy Land', difficulty: 2 },
        { id: 'Y8-HIS-MW05-q2', type: 'mcq', prompt: 'The Crusades increased contact between…', options: ['Europe and the Islamic world', 'Europe and the Moon', 'Australia and Antarctica'], answer: 'Europe and the Islamic world', difficulty: 1 },
        { id: 'Y8-HIS-MW05-q3', type: 'mcq', prompt: 'Through contact with the Islamic world, Europeans gained access to…', options: ['Ideas and knowledge in science and medicine', 'Only spices', 'Nothing at all'], answer: 'Ideas and knowledge in science and medicine', difficulty: 2 },
        { id: 'Y8-HIS-MW05-q4', type: 'mcq', prompt: 'Trade routes in the medieval world helped spread…', options: ['Goods, ideas and technologies', 'Nothing but rumours', 'Only gold bars'], answer: 'Goods, ideas and technologies', difficulty: 1 },
        { id: 'Y8-HIS-MW05-q5', type: 'short', prompt: 'What name is given to the series of medieval Christian military campaigns to the Holy Land?', answer: 'Crusades', difficulty: 2 },
        { id: 'Y8-HIS-MW05-q6', type: 'mcq', prompt: 'A consequence of increased trade with the East was…', options: ['Richer cities and new goods in Europe', 'The end of all travel', 'No change at all'], answer: 'Richer cities and new goods in Europe', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-HIS-MW06',
    title: 'The Renaissance: a new age of ideas',
    year: '8',
    subject: 'hass',
    strand: 'History, The Medieval World',
    cd: [{ ac: 'AC9HH8K01' }, { ac: 'AC9HH8K05' }, { ac: 'AC9HH8K06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'From around 1400, Italy and then the rest of Europe experienced the Renaissance, a "rebirth" of interest in the ideas, art and learning of ancient Greece and Rome. Thinkers called humanists focused on human potential and the natural world.',
        'Great artists, inventors and scientists such as Leonardo da Vinci, Michelangelo, Copernicus and Galileo reshaped how people saw the world, while the printing press spread new ideas faster than ever, helping begin the modern age. Historians continue to interpret the period differently.',
      ],
      illustrations: [
        {
          brief: 'Renaissance ideas: humanism, art & science, the printing press, a changing world view',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Humanism' }, { icon: 'pen', label: 'Printing press' }, { icon: 'globe', label: 'New world views' }, { icon: 'trophy', label: 'Art & science' }], caption: 'A rebirth of ideas and learning' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-MW06-q1', type: 'mcq', prompt: "The word 'Renaissance' means…", options: ['Rebirth', 'Darkness', 'Harvest'], answer: 'Rebirth', difficulty: 1 },
        { id: 'Y8-HIS-MW06-q2', type: 'mcq', prompt: 'Renaissance humanists focused on…', options: ['Human potential and the natural world', 'Only the afterlife', 'Rejecting all learning'], answer: 'Human potential and the natural world', difficulty: 2 },
        { id: 'Y8-HIS-MW06-q3', type: 'mcq', prompt: 'The printing press transformed Europe by…', options: ['Spreading ideas and literacy quickly', 'Printing nothing', 'Replacing all books with scrolls'], answer: 'Spreading ideas and literacy quickly', difficulty: 1 },
        { id: 'Y8-HIS-MW06-q4', type: 'mcq', prompt: 'Leonardo da Vinci and Michelangelo were…', options: ['Renaissance artists and thinkers', 'Roman emperors', 'Viking warriors'], answer: 'Renaissance artists and thinkers', difficulty: 1 },
        { id: 'Y8-HIS-MW06-q5', type: 'short', prompt: 'Copernicus and Galileo challenged traditional views about the motion of…', answer: 'the planets', difficulty: 3 },
        { id: 'Y8-HIS-MW06-q6', type: 'mcq', prompt: 'The Renaissance is significant because it…', options: ['Helped begin the modern world', 'Ended all scientific thought', 'Was a small, local festival'], answer: 'Helped begin the modern world', difficulty: 2 },
      ],
    },
  },
  // ---------- Asia-Pacific world: Japan under the Shoguns (AC9HH8K12–K16) ----------
  {
    id: 'Y8-HIS-JA01',
    title: 'Feudal Japan: shoguns, daimyo & samurai',
    year: '8',
    subject: 'hass',
    strand: 'History, The Asia-Pacific World',
    cd: [{ ac: 'AC9HH8K12' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'For centuries, Japan was ruled by shoguns, military leaders, who held real power, while the emperor remained a symbolic figurehead. Below the shogun were the daimyo (powerful lords), who governed their own lands.',
        'This system kept society stable and ordered, with each class having clear roles: samurai warriors served their lords, while farmers, artisans and merchants worked beneath them.',
      ],
      illustrations: [
        {
          brief: 'A social ladder: emperor (figurehead), shogun, daimyo, samurai, farmers/artisans/merchants',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['Emperor', 'Shogun', 'Daimyo', 'Samurai', 'Farmers & merchants'], highlight: 1 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-JA01-q1', type: 'mcq', prompt: 'The real ruler of Japan under the shogunate was the…', options: ['Shogun', 'Emperor as figurehead only', 'Daimyo only'], answer: 'Shogun', difficulty: 1 },
        { id: 'Y8-HIS-JA01-q2', type: 'mcq', prompt: 'Daimyo were…', options: ['Powerful lords who governed their own lands', 'Peasants who owned nothing', 'Travelling merchants only'], answer: 'Powerful lords who governed their own lands', difficulty: 2 },
        { id: 'Y8-HIS-JA01-q3', type: 'mcq', prompt: 'Under the shoguns, the emperor of Japan was…', options: ['A symbolic figurehead with limited real power', 'The commander of all armies', 'Elected by the people'], answer: 'A symbolic figurehead with limited real power', difficulty: 2 },
        { id: 'Y8-HIS-JA01-q4', type: 'mcq', prompt: 'Samurai were…', options: ['Warriors who served their lords', 'Farmers who grew rice', 'Priests of the state religion'], answer: 'Warriors who served their lords', difficulty: 1 },
        { id: 'Y8-HIS-JA01-q5', type: 'short', prompt: 'What is the Japanese term for a powerful feudal lord?', answer: 'daimyo', difficulty: 2 },
        { id: 'Y8-HIS-JA01-q6', type: 'mcq', prompt: 'The shogunate social system promoted…', options: ['Order and stability with clear class roles', 'Complete chaos', 'No classes at all'], answer: 'Order and stability with clear class roles', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-HIS-JA02',
    title: 'Samurai, bushido & daily life',
    year: '8',
    subject: 'hass',
    strand: 'History, The Asia-Pacific World',
    cd: [{ ac: 'AC9HH8K12' }, { ac: 'AC9HH8K14' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Samurai followed a strict warrior code called bushido, "the way of the warrior", which valued loyalty, honour, courage, frugality and mastery of martial arts. A samurai\'s honour was central to their identity.',
        'Daily life in feudal Japan differed across the classes: farmers grew rice and other crops, artisans produced crafts such as swords and pottery, and merchants traded goods, even though they sat low in the social order.',
      ],
      illustrations: [
        {
          brief: 'Bushido values and daily life: honour, martial arts, farming, artisan crafts',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'knife', label: 'Samurai sword' }, { icon: 'link', label: 'Bushido code' }, { icon: 'trophy', label: 'Honour & loyalty' }], caption: 'The way of the warrior' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-JA02-q1', type: 'mcq', prompt: 'Bushido is the name for…', options: ['The samurai code of conduct', 'A type of rice', 'A Japanese mountain'], answer: 'The samurai code of conduct', difficulty: 1 },
        { id: 'Y8-HIS-JA02-q2', type: 'mcq', prompt: 'Bushido valued…', options: ['Loyalty, honour and courage', 'Greed and laziness', 'Avoiding all duty'], answer: 'Loyalty, honour and courage', difficulty: 1 },
        { id: 'Y8-HIS-JA02-q3', type: 'mcq', prompt: 'In the social order, merchants ranked…', options: ['Below farmers and artisans despite their wealth', 'Above the shogun', 'Outside society entirely'], answer: 'Below farmers and artisans despite their wealth', difficulty: 2 },
        { id: 'Y8-HIS-JA02-q4', type: 'mcq', prompt: 'Samurai warriors trained in…', options: ['Martial arts and swordsmanship', 'Only farming', 'Only writing poetry'], answer: 'Martial arts and swordsmanship', difficulty: 1 },
        { id: 'Y8-HIS-JA02-q5', type: 'short', prompt: "What is the Japanese word for the 'way of the warrior' code of the samurai?", answer: 'bushido', difficulty: 2 },
        { id: 'Y8-HIS-JA02-q6', type: 'mcq', prompt: 'Daily life in feudal Japan was shaped by…', options: ['The class a person was born into', 'Random chance every year', 'No rules at all'], answer: 'The class a person was born into', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-HIS-JA03',
    title: "Tokugawa rule & Japan's isolation",
    year: '8',
    subject: 'hass',
    strand: 'History, The Asia-Pacific World',
    cd: [{ ac: 'AC9HH8K13' }, { ac: 'AC9HH8K15' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In 1603, Tokugawa Ieyasu founded the Edo Shogunate, which ruled Japan for over 250 years. The Tokugawa shoguns kept strict control: a rigid social order, tight regulation of trade and resources, and eventually a policy of near-isolation (sakoku) that closed Japan to most foreigners.',
        'In 1853, US Commodore Matthew Perry arrived with warships and demanded Japan open its ports, ending the isolation and helping trigger huge changes that led to the end of the shogunate.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: Tokugawa unifies Japan, strict social order, sakoku isolation, Perry arrives 1853',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Tokugawa unifies Japan' }, { text: 'Strict social order' }, { text: 'Sakoku, closing borders' }, { text: 'Commodore Perry 1853' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-JA03-q1', type: 'mcq', prompt: 'Tokugawa Ieyasu founded the…', options: ['Edo Shogunate', 'Roman Republic', 'Khmer Empire'], answer: 'Edo Shogunate', difficulty: 2 },
        { id: 'Y8-HIS-JA03-q2', type: 'short', prompt: 'In what year did Tokugawa Ieyasu found the Edo Shogunate?', answer: '1603', difficulty: 2 },
        { id: 'Y8-HIS-JA03-q3', type: 'mcq', prompt: 'The Tokugawa policy of near-isolation is known as…', options: ['Sakoku', 'Bushido', 'Mikado'], answer: 'Sakoku', difficulty: 2 },
        { id: 'Y8-HIS-JA03-q4', type: 'mcq', prompt: 'In 1853, Commodore Matthew Perry came from…', options: ['The United States, demanding Japan open its ports', 'Australia, demanding peace', 'The Ottoman Empire, demanding tribute'], answer: 'The United States, demanding Japan open its ports', difficulty: 2 },
        { id: 'Y8-HIS-JA03-q5', type: 'mcq', prompt: "Perry's arrival helped…", options: ['Trigger changes that ended the shogunate', 'Make isolation permanent forever', 'Have no effect at all'], answer: 'Trigger changes that ended the shogunate', difficulty: 2 },
        { id: 'Y8-HIS-JA03-q6', type: 'mcq', prompt: 'Tokugawa rule is described as a time of…', options: ['Long stability under strict control', 'Constant civil war', 'No government at all'], answer: 'Long stability under strict control', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-HIS-JA04',
    title: 'Continuity, change & interpretations of shogunate Japan',
    year: '8',
    subject: 'hass',
    strand: 'History, The Asia-Pacific World',
    cd: [{ ac: 'AC9HH8K14' }, { ac: 'AC9HH8K16' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Under the shoguns, Japan experienced both continuity and change: the social order and warrior culture stayed remarkably stable for centuries, while the economy, towns and merchant wealth grew and changed over time.',
        'Historians interpret this era differently, for example, debating how much Japan was really "closed" under sakoku, how the Tokugawa maintained control, and how to weigh the costs and achievements of the period. These different interpretations show how historians build arguments from evidence.',
      ],
      illustrations: [
        {
          brief: 'Continuity and change: a stable social order alongside growing towns, trade and merchant wealth',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: 'Centuries of stability' }, { icon: 'rotate-arrow', label: 'Slow change' }, { icon: 'bar-chart', label: 'Towns & trade grow' }, { icon: 'magnifier', label: "Historians' views differ" }], caption: 'Continuity and change in shogunate Japan' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-HIS-JA04-q1', type: 'mcq', prompt: 'Continuity in shogunate Japan is shown by…', options: ['The long stability of the social order', 'The sudden end of samurai culture', 'Constant revolutions every year'], answer: 'The long stability of the social order', difficulty: 2 },
        { id: 'Y8-HIS-JA04-q2', type: 'mcq', prompt: 'During the Tokugawa period, towns and trade…', options: ['Grew, while the social order stayed stable', 'Disappeared completely', 'Were banned everywhere'], answer: 'Grew, while the social order stayed stable', difficulty: 2 },
        { id: 'Y8-HIS-JA04-q3', type: 'mcq', prompt: 'Historians may interpret the same event differently because they…', options: ['Ask different questions and weigh evidence differently', 'All copy each other', 'Never use sources'], answer: 'Ask different questions and weigh evidence differently', difficulty: 2 },
        { id: 'Y8-HIS-JA04-q4', type: 'mcq', prompt: 'One debate among historians is…', options: ["How 'closed' Japan really was under sakoku", 'Whether Japan has an emperor', 'Whether samurai existed'], answer: "How 'closed' Japan really was under sakoku", difficulty: 3 },
        { id: 'Y8-HIS-JA04-q5', type: 'mcq', prompt: 'Understanding continuity and change helps historians…', options: ['Explain how and why societies stay the same or shift', 'Predict exact dates perfectly', 'Ignore all sources'], answer: 'Explain how and why societies stay the same or shift', difficulty: 2 },
        { id: 'Y8-HIS-JA04-q6', type: 'mcq', prompt: "A historical 'interpretation' is…", options: ['An argument built from evidence and sources', 'A guess with no evidence', 'A copy of a diary'], answer: 'An argument built from evidence and sources', difficulty: 1 },
      ],
    },
  },
];
