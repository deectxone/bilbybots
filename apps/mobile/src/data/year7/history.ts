import type { Topic } from '../../types/curriculum';

/**
 * Year 7 History, full topic bank (AC v9.0, subject code HH).
 * Source of truth: docs/content/year-7-10/history.md. Year 7 covers the two
 * mandatory v9.0 sub-strands: "Deep time history of Australia" (AC9HH7K01–K07)
 * and "The ancient world" (AC9HH7K08–K13, depth study: Ancient Egypt).
 * Skills CDs (AC9HH7S01–S08) are woven into the units per the source doc.
 *
 * SENSITIVITY: all six Deep Time topics carry `sensitivity: true`, they
 * involve First Nations Australians' deep histories and cultural knowledge,
 * and ACARA's own guidance (the FIRST framework) requires community-protocol
 * review. They are written to established, broadly-agreed facts only and
 * must be reviewed with First Nations community knowledge holders before
 * release, the same pattern as Y6-HASS-HI02 (see AGENTS.md).
 */
export const YEAR7_HISTORY_TOPICS: Topic[] = [
  // ---------- Deep time history of Australia (7 CDs) ----------
  {
    id: 'Y7-HIS-DT01',
    title: 'How we know the deep past: evidence & time',
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K01' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'Historians and archaeologists investigate the deep past using many kinds of evidence: stone tools, rock art, campsites and human remains, plus scientific dating methods such as radiocarbon dating and thermoluminescence, which measure how old materials really are.',
        "First Nations Australians' own oral histories, art and knowledge systems are equally important evidence, and they work alongside science to reveal the ancient past. Historical time terms help us talk about it: BCE/CE, and BP (Before Present) for the oldest dates.",
      ],
      illustrations: [
        {
          brief: 'A flowchart of the evidence toolkit: excavation & stratigraphy, scientific dating, oral history',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Excavation & stratigraphy' },
              { text: 'Radiocarbon & TL dating' },
              { text: 'Oral histories & knowledge' },
              { text: 'Interpretation & debate' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT01-q1', type: 'mcq', prompt: 'Which of these is a form of evidence for the deep past?', options: ['Stone tools and rock art', 'A current weather report', 'A shopping list from last week'], answer: 'Stone tools and rock art', difficulty: 1 },
        { id: 'Y7-HIS-DT01-q2', type: 'mcq', prompt: 'An archaeologist who dates a site by studying its layers of soil is using…', options: ['Stratigraphy', 'Astronomy', 'Cartography'], answer: 'Stratigraphy', difficulty: 2 },
        { id: 'Y7-HIS-DT01-q3', type: 'mcq', prompt: 'What does "BP" stand for in dating the deep past?', options: ['Before Present', 'Before People', 'Before Pyramids'], answer: 'Before Present', difficulty: 2 },
        { id: 'Y7-HIS-DT01-q4', type: 'short', prompt: 'Which scientific method measures the age of ancient remains using the decay of carbon-14?', answer: 'radiocarbon dating', difficulty: 2 },
        { id: 'Y7-HIS-DT01-q5', type: 'mcq', prompt: "First Nations Australians' oral histories are valuable evidence because they…", options: ['Pass down knowledge through generations', 'Only describe last week', 'Are never reliable'], answer: 'Pass down knowledge through generations', difficulty: 1 },
        { id: 'Y7-HIS-DT01-q6', type: 'short', prompt: 'What is the name for the study of the human past using material remains such as tools, buildings and bones?', answer: 'archaeology', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-HIS-DT02',
    title: 'Arrival on Sahul: migration to Australia',
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'When sea levels were much lower, Australia, New Guinea and Tasmania were joined in one giant landmass called Sahul. Early ancestors were skilled seafarers: they crossed the seas from Southeast Asia and made their way across the continent.',
        'Scientific dating of sites such as Lake Mungo, together with genetic research, shows that First Nations Australians have lived on the continent for at least 65,000 years, among the longest continuous occupations of any land on Earth.',
      ],
      illustrations: [
        {
          brief: 'A migration scene: seafaring ancestors cross to the Sahul landmass, then spread across the continent',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'Seafaring ancestors' }, { icon: 'map', label: 'Landmass of Sahul' }, { icon: 'people', label: 'Spread across country' }], caption: 'The peopling of the Australian continent' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT02-q1', type: 'short', prompt: 'What is the name of the ancient mega-continent that joined Australia, New Guinea and Tasmania?', answer: 'Sahul', difficulty: 2 },
        { id: 'Y7-HIS-DT02-q2', type: 'mcq', prompt: 'First Nations Australians arrived on the Australian continent…', options: ['By sea, as skilled seafarers', 'By walking from South America', 'In the year 1788'], answer: 'By sea, as skilled seafarers', difficulty: 2 },
        { id: 'Y7-HIS-DT02-q3', type: 'mcq', prompt: 'First Nations Australians have lived on the Australian continent for…', options: ['At least 65,000 years', 'About 500 years', 'Less than 1,000 years'], answer: 'At least 65,000 years', difficulty: 1 },
        { id: 'Y7-HIS-DT02-q4', type: 'mcq', prompt: 'Lake Mungo in New South Wales is important because it is…', options: ['One of the oldest known sites of human occupation in Australia', 'The site of the first pyramid', 'A modern city'], answer: 'One of the oldest known sites of human occupation in Australia', difficulty: 2 },
        { id: 'Y7-HIS-DT02-q5', type: 'mcq', prompt: 'When sea levels rose after the last ice age, Australia, New Guinea and Tasmania…', options: ['Became separate landmasses', 'Moved closer to Africa', 'Became one bigger continent'], answer: 'Became separate landmasses', difficulty: 2 },
        { id: 'Y7-HIS-DT02-q6', type: 'short', prompt: 'Give the term for the movement of people into new lands.', answer: 'migration', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-HIS-DT03',
    title: "The world's oldest continuing cultures",
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K03' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'First Nations Australians are the world\'s oldest continuing cultures: their languages, art, knowledge and ways of life have been passed down for over 65,000 years, showing both continuity (things that stayed the same) and change (things that adapted) across deep time.',
        'Rock art, the use of ochre, and occupation sites such as Kakadu show how culture has continued and changed while staying deeply connected to Country.',
      ],
      illustrations: [
        {
          brief: 'A deep-time flowchart from arrival, through continuity and change, to living cultures today',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Arrival on the continent' }, { text: 'Continuity of culture' }, { text: 'Change over deep time' }, { text: 'Living cultures today' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT03-q1', type: 'mcq', prompt: "First Nations Australian cultures are described as 'continuing' because they…", options: ['Have been passed down without a break for tens of thousands of years', 'Ended long ago', 'Began in the 1900s'], answer: 'Have been passed down without a break for tens of thousands of years', difficulty: 2 },
        { id: 'Y7-HIS-DT03-q2', type: 'short', prompt: 'What is the name of the red mineral pigment used by First Nations Australians for thousands of years in art and ceremony?', answer: 'ochre', difficulty: 2 },
        { id: 'Y7-HIS-DT03-q3', type: 'mcq', prompt: "'Continuity' in history means…", options: ['Things that remain the same over time', 'Things that change completely', 'The end of a culture'], answer: 'Things that remain the same over time', difficulty: 1 },
        { id: 'Y7-HIS-DT03-q4', type: 'mcq', prompt: 'Evidence of continuity and change in First Nations cultures can be found in…', options: ['Rock art and occupation sites such as Kakadu', 'Only modern newspapers', 'Nothing at all'], answer: 'Rock art and occupation sites such as Kakadu', difficulty: 1 },
        { id: 'Y7-HIS-DT03-q5', type: 'mcq', prompt: "A culture described as the 'oldest continuing' refers to…", options: ['Surviving and adapting over the longest span of time', 'Being the newest', 'Lasting only one generation'], answer: 'Surviving and adapting over the longest span of time', difficulty: 2 },
        { id: 'Y7-HIS-DT03-q6', type: 'mcq', prompt: "First Nations Australians' connection to Country is best described as…", options: ['Deep and continuous over deep time', 'Recent and temporary', 'Unrelated to culture'], answer: 'Deep and continuous over deep time', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-HIS-DT04',
    title: 'Surviving environmental change',
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'Over tens of thousands of years, Australia\'s environment changed dramatically: seas rose and cut off Tasmania and New Guinea, some regions dried out, and giant animals (megafauna) disappeared. First Nations Australians adapted to each change, developing new ways to live in different places.',
        'Oral traditions still recall these changes, for example, stories of rising seas swallowing coastal lands. People responded by moving with the seasons, managing water carefully, and using the land sustainably.',
      ],
      illustrations: [
        {
          brief: 'Environmental changes and adaptations: rising seas, drier climate, megafauna, and responses',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'wave', label: 'Rising seas' }, { icon: 'sun', label: 'Drier climate' }, { icon: 'tree', label: 'Changing landscapes' }, { icon: 'people', label: 'Adapted to survive' }], caption: 'Adaptation to great environmental changes' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT04-q1', type: 'mcq', prompt: 'When sea levels rose thousands of years ago, the land bridge to Tasmania was…', options: ['Lost beneath the sea', 'Made wider', 'Turned into mountains'], answer: 'Lost beneath the sea', difficulty: 1 },
        { id: 'Y7-HIS-DT04-q2', type: 'mcq', prompt: "'Megafauna' refers to…", options: ['Giant animals that lived in the past', 'Very small insects', 'Modern farm animals only'], answer: 'Giant animals that lived in the past', difficulty: 2 },
        { id: 'Y7-HIS-DT04-q3', type: 'mcq', prompt: "Oral traditions of First Nations Australians…", options: ['Record real environmental changes such as rising seas', 'Only describe last week', 'Were written down in books'], answer: 'Record real environmental changes such as rising seas', difficulty: 2 },
        { id: 'Y7-HIS-DT04-q4', type: 'mcq', prompt: 'In dry environments, First Nations Australians adapted by…', options: ['Managing water carefully and moving with the seasons', 'Forgetting how to find water', 'Leaving the continent'], answer: 'Managing water carefully and moving with the seasons', difficulty: 2 },
        { id: 'Y7-HIS-DT04-q5', type: 'short', prompt: 'What rose to cut off the land bridge to Tasmania thousands of years ago?', answer: 'sea levels', difficulty: 2 },
        { id: 'Y7-HIS-DT04-q6', type: 'mcq', prompt: 'Adapting to environmental change over deep time shows First Nations Australians were…', options: ['Skilled and resilient in many environments', 'Unable to cope', 'Never affected by nature'], answer: 'Skilled and resilient in many environments', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-HIS-DT05',
    title: 'Technologies, land & water management',
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K05' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'Early First Nations Australians were skilled technologists: they developed stone tools, ground-edge axes, millstones and fishing technologies suited to each environment, from the sea country of the Torres Strait to the deserts of the centre.',
        'They also managed land and water: cultural burning kept the bush healthy, and structures such as the eel traps at Budj Bim in Victoria and the stone fish traps at Brewarrina in New South Wales show careful engineering to harvest food sustainably.',
      ],
      illustrations: [
        {
          brief: 'Technological achievements: stone tools, water management, aquaculture and sustainable harvesting',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'knife', label: 'Stone tools' }, { icon: 'droplet', label: 'Water management' }, { icon: 'sprout', label: 'Sustainable harvesting' }, { icon: 'triangle-shape', label: 'Weirs & fish traps' }], caption: 'Skilled technologies for land and water' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT05-q1', type: 'mcq', prompt: 'The eel traps at Budj Bim are an example of…', options: ['Aquaculture, farming and trapping food sustainably', 'Modern city plumbing', 'A kind of weapon'], answer: 'Aquaculture, farming and trapping food sustainably', difficulty: 2 },
        { id: 'Y7-HIS-DT05-q2', type: 'mcq', prompt: 'Cultural burning is a practice that…', options: ['Manages the land and keeps the bush healthy', 'Destroys all plants', 'Was invented last century'], answer: 'Manages the land and keeps the bush healthy', difficulty: 2 },
        { id: 'Y7-HIS-DT05-q3', type: 'mcq', prompt: 'Stone tools, ground-edge axes and millstones are examples of…', options: ['Technological achievements', 'Written records', 'Types of transport'], answer: 'Technological achievements', difficulty: 1 },
        { id: 'Y7-HIS-DT05-q4', type: 'mcq', prompt: 'The stone fish traps at Brewarrina in New South Wales show…', options: ['Careful engineering for sustainable food harvesting', 'A modern shopping centre', 'A type of castle'], answer: 'Careful engineering for sustainable food harvesting', difficulty: 2 },
        { id: 'Y7-HIS-DT05-q5', type: 'mcq', prompt: 'People in the Torres Strait and Cape York developed…', options: ['Maritime technologies for fishing and travel', 'No technologies at all', 'Only paper making'], answer: 'Maritime technologies for fishing and travel', difficulty: 2 },
        { id: 'Y7-HIS-DT05-q6', type: 'short', prompt: 'The eel traps at Budj Bim in Victoria were built by which Aboriginal People?', answer: 'Gunditjmara', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-HIS-DT06',
    title: 'Social organisation, culture & caring for Country',
    year: '7',
    subject: 'hass',
    strand: 'History, Deep Time',
    cd: [{ ac: 'AC9HH7K06' }, { ac: 'AC9HH7K07' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        'First Nations Australians organised their societies through complex systems of kinship, moieties and totems, which set out relationships between people, and between people and Country, seas, waterways, sky and universe. Lore, ceremonies and rites of passage guided daily life.',
        'Cultural obligations to protect significant sites, including ancestral remains and artefacts, continue today. Collaboration between First Nations Australians and researchers, museums and governments helps preserve this heritage, with places such as the Willandra Lakes and Budj Bim on the World Heritage list.',
      ],
      illustrations: [
        {
          brief: 'A flowchart: kinship & totems, lore & ceremonies, rights to Country, preserving heritage',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Kinship & totems' }, { text: 'Lore & ceremonies' }, { text: 'Rights to Country' }, { text: 'Preserving heritage' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-DT06-q1', type: 'mcq', prompt: 'Kinship systems in First Nations societies set out…', options: ['Relationships between people and to Country', 'Only who owns a car', 'Modern laws for phones'], answer: 'Relationships between people and to Country', difficulty: 2 },
        { id: 'Y7-HIS-DT06-q2', type: 'mcq', prompt: 'Totems connect a person or group to…', options: ['Particular animals, plants or places', 'Only their school', 'Random objects'], answer: 'Particular animals, plants or places', difficulty: 2 },
        { id: 'Y7-HIS-DT06-q3', type: 'short', prompt: 'In which Australian state is the Willandra Lakes region, home to some of the oldest known human remains in Australia?', answer: 'New South Wales', difficulty: 2 },
        { id: 'Y7-HIS-DT06-q4', type: 'mcq', prompt: 'The cultural obligation to protect ancestral remains means…', options: ['Remains are treated with deep respect and care', 'Remains are displayed everywhere freely', 'Remains are ignored'], answer: 'Remains are treated with deep respect and care', difficulty: 2 },
        { id: 'Y7-HIS-DT06-q5', type: 'mcq', prompt: 'Caring for Country includes…', options: ['Responsibilities to land, water and all living things', 'Owning all the land', 'Using resources without thought'], answer: 'Responsibilities to land, water and all living things', difficulty: 1 },
        { id: 'Y7-HIS-DT06-q6', type: 'mcq', prompt: 'Preserving First Nations heritage today requires…', options: ['Collaboration between First Nations Australians and others', 'Keeping it secret from everyone forever', 'Removing all protection'], answer: 'Collaboration between First Nations Australians and others', difficulty: 1 },
      ],
    },
  },
  // ---------- The ancient world (depth study: Ancient Egypt) ----------
  {
    id: 'Y7-HIS-AW01',
    title: 'Investigating the ancient past',
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Historians and archaeologists investigate ancient societies using many methods: excavating sites, studying layers of soil (stratigraphy), analysing DNA, and reading written records and inscriptions. Sources can be primary (from the time) or secondary (later interpretations).',
        'Preserving the remains and heritage of the past matters, that is why organisations such as UNESCO protect World Heritage sites, and why efforts like saving the temples of Abu Simbel, or debates about returning the Elgin Marbles, take place.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of historical inquiry: ask a question, find sources, date the evidence, conserve & interpret',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Ask a question' }, { text: 'Find sources' }, { text: 'Date & stratigraphy' }, { text: 'Interpret & conserve' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW01-q1', type: 'mcq', prompt: 'A source created at the same time as the event it describes is called a…', options: ['Primary source', 'Secondary source', 'Tertiary source'], answer: 'Primary source', difficulty: 1 },
        { id: 'Y7-HIS-AW01-q2', type: 'mcq', prompt: 'Stratigraphy helps archaeologists…', options: ['Date finds by studying layers of soil', 'Predict the weather', 'Count currency'], answer: 'Date finds by studying layers of soil', difficulty: 2 },
        { id: 'Y7-HIS-AW01-q3', type: 'short', prompt: 'Which international organisation maintains the World Heritage List?', answer: 'UNESCO', difficulty: 2 },
        { id: 'Y7-HIS-AW01-q4', type: 'mcq', prompt: 'Excavation is a method used to…', options: ['Carefully uncover and study the remains of the past', 'Destroy old buildings', 'Map modern streets'], answer: 'Carefully uncover and study the remains of the past', difficulty: 1 },
        { id: 'Y7-HIS-AW01-q5', type: 'mcq', prompt: 'A reason to conserve heritage sites is to…', options: ['Protect them for future generations', 'Sell their stones', 'Keep them a secret forever'], answer: 'Protect them for future generations', difficulty: 1 },
        { id: 'Y7-HIS-AW01-q6', type: 'mcq', prompt: 'DNA testing of ancient remains can help historians…', options: ['Learn about past peoples and their diseases', 'Decide today\'s weather', 'Design modern cars'], answer: 'Learn about past peoples and their diseases', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-HIS-AW02',
    title: 'The Nile shapes Ancient Egypt',
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Ancient Egypt grew up along the Nile River. Every year the river flooded (the inundation), spreading rich, fertile soil that made farming possible in an otherwise desert land.',
        'The Nile also provided transport and trade routes, and its cataracts and deserts offered natural defence. The river was so important that it shaped Egyptian religion, with gods such as Hapi linked to the flood.',
      ],
      illustrations: [
        {
          brief: 'The Nile and its gifts: flood, fertile soil, farming, transport, defence',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'droplet', label: 'The Nile' }, { icon: 'wave', label: 'Annual flood' }, { icon: 'bowl', label: 'Fertile harvests' }, { icon: 'ship', label: 'Transport & trade' }], caption: 'The Nile made Egyptian civilisation possible' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW02-q1', type: 'mcq', prompt: 'The annual flooding of the Nile spread…', options: ['Rich, fertile soil that helped farming', 'Sand over all cities', 'Nothing useful'], answer: 'Rich, fertile soil that helped farming', difficulty: 1 },
        { id: 'Y7-HIS-AW02-q2', type: 'mcq', prompt: 'The Nile helped Egyptian society by providing…', options: ['Water, fertile land, transport and defence', 'Only fish', 'A route to the Moon'], answer: 'Water, fertile land, transport and defence', difficulty: 1 },
        { id: 'Y7-HIS-AW02-q3', type: 'short', prompt: 'What is the name given to the annual flood of the Nile?', answer: 'inundation', difficulty: 2 },
        { id: 'Y7-HIS-AW02-q4', type: 'mcq', prompt: "Egypt's natural barriers included…", options: ['Deserts and the river\'s cataracts', 'Tall city walls of steel', 'Frozen mountains'], answer: 'Deserts and the river\'s cataracts', difficulty: 2 },
        { id: 'Y7-HIS-AW02-q5', type: 'mcq', prompt: 'Egyptian gods such as Hapi were connected to…', options: ['The Nile and its floods', 'Modern electricity', 'The invention of cars'], answer: 'The Nile and its floods', difficulty: 2 },
        { id: 'Y7-HIS-AW02-q6', type: 'mcq', prompt: 'Most ancient Egyptians lived and farmed…', options: ['Near the Nile River', 'In the middle of the desert', 'High in the mountains'], answer: 'Near the Nile River', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-HIS-AW03',
    title: "Egypt's social pyramid",
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K10' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Egyptian society was organised like a pyramid. At the top ruled the pharaoh, seen as both king and a living link to the gods. Below came officials, priests, scribes and soldiers, then craftsmen, farmers and merchants, with enslaved people at the base.',
        'Each group had roles and responsibilities: scribes kept records and wrote documents, farmers grew the food, and women of different classes had varying rights in marriage, family, work and education.',
      ],
      illustrations: [
        {
          brief: 'A social pyramid: pharaoh, officials & priests, scribes & soldiers, farmers & craftsmen, slaves',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['Pharaoh', 'Officials & priests', 'Scribes & soldiers', 'Farmers & craftsmen', 'Slaves'], highlight: 0 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW03-q1', type: 'mcq', prompt: 'The ruler of Ancient Egypt, seen as a link to the gods, was the…', options: ['Pharaoh', 'Scribe', 'Farmer'], answer: 'Pharaoh', difficulty: 1 },
        { id: 'Y7-HIS-AW03-q2', type: 'short', prompt: 'What is the name for an Ancient Egyptian record-keeper who could read and write?', answer: 'scribe', difficulty: 2 },
        { id: 'Y7-HIS-AW03-q3', type: 'mcq', prompt: 'Which group made up the largest part of Egyptian society?', options: ['Farmers, craftsmen and labourers', 'The pharaoh and his family only', 'Visiting tourists'], answer: 'Farmers, craftsmen and labourers', difficulty: 2 },
        { id: 'Y7-HIS-AW03-q4', type: 'mcq', prompt: 'Egyptian priests performed…', options: ['Religious rituals and temple duties', 'Only fishing', 'No special duties'], answer: 'Religious rituals and temple duties', difficulty: 2 },
        { id: 'Y7-HIS-AW03-q5', type: 'mcq', prompt: 'Enslaved people in Ancient Egypt were…', options: ['At the bottom of the social structure', 'At the very top', 'None existed at all'], answer: 'At the bottom of the social structure', difficulty: 1 },
        { id: 'Y7-HIS-AW03-q6', type: 'mcq', prompt: 'Women in Ancient Egypt…', options: ['Had varied rights depending on their class', 'Had no rights at all', 'Could never marry'], answer: 'Had varied rights depending on their class', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-HIS-AW04',
    title: 'Beliefs, death & funerary customs',
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K11' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Ancient Egyptians believed in an afterlife, so preparing for death was a major part of life. Bodies were mummified to preserve them for the journey, and people were buried with goods for the next world.',
        'Tombs, from simple graves to giant pyramids and rock-cut tombs in the Valley of the Kings, reflected a person\'s status, while texts such as the Book of the Dead contained spells to help the dead pass judgement and reach the afterlife.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of Egyptian belief about death: belief in afterlife, mummification, burial, judgement',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Belief in an afterlife' }, { text: 'Mummification' }, { text: 'Burial in tombs' }, { text: 'Judgement & spells' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW04-q1', type: 'mcq', prompt: 'The process of preserving a body for the afterlife is called…', options: ['Mummification', 'Irrigation', 'Cremation'], answer: 'Mummification', difficulty: 1 },
        { id: 'Y7-HIS-AW04-q2', type: 'mcq', prompt: 'Ancient Egyptians believed in…', options: ['An afterlife after death', 'No life after death', 'Death as the end of everything'], answer: 'An afterlife after death', difficulty: 1 },
        { id: 'Y7-HIS-AW04-q3', type: 'mcq', prompt: 'People were buried with goods such as food and jewellery because…', options: ['They believed these helped in the afterlife', 'It was a random tradition only for kings', 'It was forbidden'], answer: 'They believed these helped in the afterlife', difficulty: 2 },
        { id: 'Y7-HIS-AW04-q4', type: 'short', prompt: 'What is the name of the ancient Egyptian text full of spells to help the dead in the afterlife?', answer: 'Book of the Dead', difficulty: 3 },
        { id: 'Y7-HIS-AW04-q5', type: 'mcq', prompt: 'The great pyramids were built as…', options: ['Tombs for the pharaohs', 'Giant grain stores', 'Schools for scribes'], answer: 'Tombs for the pharaohs', difficulty: 2 },
        { id: 'Y7-HIS-AW04-q6', type: 'mcq', prompt: 'The Valley of the Kings was used as a burial place for…', options: ['Egyptian pharaohs', 'Ordinary village animals', 'Roman soldiers only'], answer: 'Egyptian pharaohs', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-HIS-AW05',
    title: 'Power, contact & conflict',
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K12' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'During the New Kingdom, pharaohs built an empire, using armies and the Nile for transport to expand Egypt\'s power and trade. Egypt traded with lands such as Cyprus, Crete and Greece, and fought wars with neighbours.',
        'War could end in peace treaties: after the Battle of Kadesh, Ramses II made a famous peace treaty with the Hittites, one of the oldest known peace treaties in the world.',
      ],
      illustrations: [
        {
          brief: 'Power and contact: pharaohs\' armies, Nile trade, and the Kadesh peace treaty with the Hittites',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'flag', label: "Pharaoh's armies" }, { icon: 'ship', label: 'Nile & sea trade' }, { icon: 'link', label: 'Kadesh peace treaty' }], caption: 'Empire, trade and a famous peace treaty' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW05-q1', type: 'mcq', prompt: 'After the Battle of Kadesh, Ramses II…', options: ['Made a famous peace treaty with the Hittites', 'Destroyed all other kingdoms', 'Ended all trade'], answer: 'Made a famous peace treaty with the Hittites', difficulty: 2 },
        { id: 'Y7-HIS-AW05-q2', type: 'mcq', prompt: 'Ancient Egypt traded with lands such as…', options: ['Cyprus, Crete and Greece', 'Only Australia', 'Only the Moon'], answer: 'Cyprus, Crete and Greece', difficulty: 1 },
        { id: 'Y7-HIS-AW05-q3', type: 'short', prompt: 'Which kingdom did Egypt fight at the Battle of Kadesh?', answer: 'Hittites', difficulty: 3 },
        { id: 'Y7-HIS-AW05-q4', type: 'mcq', prompt: 'A peace treaty between two states usually aims to…', options: ['End conflict and set agreed terms', 'Start a bigger war', 'Cancel all trade forever'], answer: 'End conflict and set agreed terms', difficulty: 1 },
        { id: 'Y7-HIS-AW05-q5', type: 'mcq', prompt: 'The New Kingdom pharaohs expanded Egypt by…', options: ['Using armies and the Nile for transport', 'Sailing to Antarctica', 'Staying completely isolated'], answer: 'Using armies and the Nile for transport', difficulty: 2 },
        { id: 'Y7-HIS-AW05-q6', type: 'mcq', prompt: 'Trade between societies in the ancient world…', options: ['Spread goods, ideas and connections', 'Never happened', 'Only exchanged rocks'], answer: 'Spread goods, ideas and connections', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-HIS-AW06',
    title: 'Significant individuals & legacy',
    year: '7',
    subject: 'hass',
    strand: 'History, The Ancient World',
    cd: [{ ac: 'AC9HH7K13' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Certain Egyptians shaped their civilisation and left lasting legacies. Hatshepsut ruled as pharaoh and built great monuments; Ramses II built temples and signed the Kadesh peace treaty; Tutankhamun\'s tomb, discovered in 1922, gave the world a treasure-trove of knowledge about ancient Egypt.',
        "Ancient Egypt's legacy is all around us: writing on papyrus, the 365-day calendar, and monumental architecture continue to inspire and inform the modern world.",
      ],
      illustrations: [
        {
          brief: 'A flowchart of Egyptian legacies: Hatshepsut\'s rule, Ramses II\'s peace treaty, Tutankhamun\'s tomb, influence today',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: "Hatshepsut, a ruling queen" }, { text: 'Ramses II, temple builder' }, { text: "Tutankhamun, tomb discovery" }, { text: 'Legacy still visible today' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-HIS-AW06-q1', type: 'mcq', prompt: 'Hatshepsut was significant because she…', options: ['Ruled Egypt as pharaoh and built great monuments', 'Was a famous scribe only', 'Never ruled at all'], answer: 'Ruled Egypt as pharaoh and built great monuments', difficulty: 2 },
        { id: 'Y7-HIS-AW06-q2', type: 'mcq', prompt: "Tutankhamun's tomb is famous because…", options: ['It was discovered nearly intact in 1922', 'It is made of ice', 'It is the oldest tomb in the world'], answer: 'It was discovered nearly intact in 1922', difficulty: 2 },
        { id: 'Y7-HIS-AW06-q3', type: 'mcq', prompt: 'Ancient Egyptian writing on paper made from reeds is called…', options: ['Hieroglyphs on papyrus', 'Alphabet on clay only', 'Binary code'], answer: 'Hieroglyphs on papyrus', difficulty: 1 },
        { id: 'Y7-HIS-AW06-q4', type: 'short', prompt: 'Who was the pharaoh who made a peace treaty with the Hittites after the Battle of Kadesh?', answer: 'Ramses II', difficulty: 2 },
        { id: 'Y7-HIS-AW06-q5', type: 'mcq', prompt: 'Ancient Egyptian achievements that still affect us today include…', options: ['A 365-day calendar and early writing', 'The internet', 'Motor cars'], answer: 'A 365-day calendar and early writing', difficulty: 2 },
        { id: 'Y7-HIS-AW06-q6', type: 'mcq', prompt: "A 'legacy' of an ancient civilisation is…", options: ['What it passed down that still matters today', 'Only its destroyed buildings', 'Nothing at all'], answer: 'What it passed down that still matters today', difficulty: 1 },
      ],
    },
  },
];
