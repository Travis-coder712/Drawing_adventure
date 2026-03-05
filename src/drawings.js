export const categories = [
  { id: 'all', name: 'All', emoji: '\u2728' },
  { id: 'animals', name: 'Animals', emoji: '\uD83D\uDC3E' },
  { id: 'places', name: 'Places', emoji: '\uD83C\uDFE0' },
  { id: 'nature', name: 'Nature', emoji: '\uD83C\uDF3F' },
  { id: 'food', name: 'Food', emoji: '\uD83C\uDF4E' },
  { id: 'adventure', name: 'Adventure', emoji: '\uD83D\uDE80' },
];

export const drawings = [
  // ===== ANIMALS =====
  {
    id: 'cat',
    name: 'Kitty Cat',
    category: 'animals',
    difficulty: 'easy',
    emoji: '\uD83D\uDC31',
    steps: [
      {
        title: 'Draw the Head',
        instruction: "Start by drawing a nice round circle in the upper part of your paper. This will be your kitty's head!",
        tip: "Don't worry if it's not perfectly round - real cats have slightly imperfect heads too!",
        svg: '<circle cx="150" cy="100" r="45"/>'
      },
      {
        title: 'Add the Ears',
        instruction: "Draw two pointy triangles on top of the head for the ears. Make them slightly tilted outward.",
        tip: "Cat ears are like little mountains - pointy at the top and wide at the bottom.",
        svg: '<path d="M118,65 L108,22 L142,58"/><path d="M182,65 L192,22 L158,58"/>'
      },
      {
        title: 'Draw the Face',
        instruction: "Add two round eyes, a tiny triangle nose, and a cute little mouth.",
        tip: "Place the eyes about halfway down the head circle. The nose goes just below them.",
        svg: '<circle cx="133" cy="93" r="6" fill="#444"/><circle cx="167" cy="93" r="6" fill="#444"/><circle cx="133" cy="91" r="2" fill="white"/><circle cx="167" cy="91" r="2" fill="white"/><ellipse cx="150" cy="108" rx="4" ry="3" fill="#444"/><path d="M150,111 Q143,121 138,117"/><path d="M150,111 Q157,121 162,117"/>'
      },
      {
        title: 'Add Whiskers',
        instruction: "Draw three lines on each side of the nose for whiskers. Make them slightly curved!",
        tip: "Whiskers should fan out from the cheeks - angled slightly up, straight, and slightly down.",
        svg: '<line x1="95" y1="100" x2="132" y2="105"/><line x1="93" y1="110" x2="131" y2="110"/><line x1="95" y1="120" x2="132" y2="115"/><line x1="205" y1="100" x2="168" y2="105"/><line x1="207" y1="110" x2="169" y2="110"/><line x1="205" y1="120" x2="168" y2="115"/>'
      },
      {
        title: 'Draw the Body',
        instruction: "Below the head, draw a big oval shape for the body. It should be a bit wider and taller than the head.",
        tip: "The body overlaps slightly with the bottom of the head - that's where the neck is!",
        svg: '<ellipse cx="150" cy="200" rx="52" ry="58"/>'
      },
      {
        title: 'Add Legs & Tail',
        instruction: "Draw four little legs at the bottom and a curved tail on one side. Add little paw shapes at the feet!",
        tip: "The tail curves upward like a question mark. Make it nice and swoopy!",
        svg: '<path d="M112,238 L108,278 Q108,285 118,285 L123,285"/><path d="M135,242 L133,278 Q133,285 143,285 L148,285"/><path d="M165,242 L167,278 Q167,285 157,285 L152,285"/><path d="M188,238 L192,278 Q192,285 182,285 L177,285"/><path d="M202,200 Q238,178 228,142"/>'
      },
    ]
  },
  {
    id: 'dog',
    name: 'Puppy Dog',
    category: 'animals',
    difficulty: 'easy',
    emoji: '\uD83D\uDC36',
    steps: [
      {
        title: 'Draw the Head',
        instruction: "Draw a big round circle for the puppy's head. Make it nice and chunky!",
        tip: "Dogs have rounder, bigger heads than cats. Make this circle a good size!",
        svg: '<circle cx="150" cy="105" r="50"/>'
      },
      {
        title: 'Add Floppy Ears',
        instruction: "Draw two floppy ears hanging down on each side of the head. They look like rounded rectangles.",
        tip: "Floppy ears start at the sides of the head and hang down past the chin. Make them nice and droopy!",
        svg: '<path d="M105,88 Q82,82 78,115 Q76,148 102,140" /><path d="M195,88 Q218,82 222,115 Q224,148 198,140" />'
      },
      {
        title: 'Draw the Face',
        instruction: "Add two round eyes, a big oval nose, and a happy mouth with a tongue sticking out!",
        tip: "Dogs have bigger noses than cats. Make the nose a nice oval shape.",
        svg: '<circle cx="132" cy="95" r="7" fill="#444"/><circle cx="168" cy="95" r="7" fill="#444"/><circle cx="132" cy="92" r="2.5" fill="white"/><circle cx="168" cy="92" r="2.5" fill="white"/><ellipse cx="150" cy="118" rx="9" ry="7" fill="#444"/><path d="M150,125 L150,138"/><path d="M138,138 Q150,150 162,138"/><path d="M145,140 Q150,155 155,140" fill="#444"/>'
      },
      {
        title: 'Draw the Body',
        instruction: "Below the head, draw a large oval for the body. It should overlap the bottom of the head slightly.",
        tip: "The body is bigger than the head - puppies have chubby little bodies!",
        svg: '<ellipse cx="150" cy="210" rx="58" ry="58"/>'
      },
      {
        title: 'Add Legs',
        instruction: "Draw four stubby legs at the bottom with little paw shapes.",
        tip: "Puppy legs are short and thick. Draw them a bit wider than the cat's legs.",
        svg: '<path d="M105,248 L100,285 Q100,292 112,292 L120,292"/><path d="M132,252 L130,285 Q130,292 142,292 L148,292"/><path d="M168,252 L170,285 Q170,292 158,292 L152,292"/><path d="M195,248 L200,285 Q200,292 188,292 L180,292"/>'
      },
      {
        title: 'Add the Tail',
        instruction: "Draw a happy wagging tail curving up from the back of the body!",
        tip: "A happy dog's tail curves up high! Make it look like it's wagging.",
        svg: '<path d="M208,195 Q235,172 230,138 Q228,125 234,118"/>'
      },
    ]
  },
  {
    id: 'bunny',
    name: 'Bunny Rabbit',
    category: 'animals',
    difficulty: 'easy',
    emoji: '\uD83D\uDC30',
    steps: [
      {
        title: 'Draw the Head',
        instruction: "Draw a round circle for the bunny's head. Place it in the upper-middle area.",
        tip: "Bunny heads are nice and round - almost like a ball!",
        svg: '<circle cx="150" cy="130" r="45"/>'
      },
      {
        title: 'Add Long Ears',
        instruction: "Draw two tall, long ears on top of the head. Bunnies have the longest ears!",
        tip: "Make the ears about twice as long as the head is tall. They can be slightly curved.",
        svg: '<path d="M132,90 Q128,28 124,10 Q115,2 118,30 Q120,55 130,88"/><path d="M168,90 Q172,28 176,10 Q185,2 182,30 Q180,55 170,88"/><path d="M130,85 Q128,40 126,20"/><path d="M170,85 Q172,40 174,20"/>'
      },
      {
        title: 'Draw the Face',
        instruction: "Add round eyes, a small nose, cute buck teeth, and whiskers!",
        tip: "Bunnies have round eyes on the sides and a tiny Y-shaped nose. Don't forget the two front teeth!",
        svg: '<circle cx="133" cy="122" r="6" fill="#444"/><circle cx="167" cy="122" r="6" fill="#444"/><circle cx="133" cy="120" r="2" fill="white"/><circle cx="167" cy="120" r="2" fill="white"/><ellipse cx="150" cy="138" rx="4" ry="3" fill="#444"/><path d="M147,141 L147,152 L153,152 L153,141"/><line x1="147" y1="147" x2="153" y2="147"/><line x1="118" y1="132" x2="96" y2="126"/><line x1="116" y1="140" x2="94" y2="140"/><line x1="182" y1="132" x2="204" y2="126"/><line x1="184" y1="140" x2="206" y2="140"/>'
      },
      {
        title: 'Draw the Body',
        instruction: "Draw a slightly smaller oval below the head for the bunny's body.",
        tip: "Bunnies are quite compact! The body doesn't need to be too big.",
        svg: '<ellipse cx="150" cy="220" rx="42" ry="48"/>'
      },
      {
        title: 'Add Legs & Fluffy Tail',
        instruction: "Draw big back feet at the bottom, small front paws, and a fluffy round tail!",
        tip: "Bunny feet are long and flat. The tail is a small fluffy pom-pom!",
        svg: '<ellipse cx="118" cy="262" rx="22" ry="10"/><ellipse cx="182" cy="262" rx="22" ry="10"/><ellipse cx="132" cy="248" rx="8" ry="5"/><ellipse cx="168" cy="248" rx="8" ry="5"/><circle cx="196" cy="225" r="14"/><path d="M196,218 Q200,214 198,220"/><path d="M200,222 Q205,218 202,225"/>'
      },
    ]
  },
  {
    id: 'fish',
    name: 'Tropical Fish',
    category: 'animals',
    difficulty: 'easy',
    emoji: '\uD83D\uDC20',
    steps: [
      {
        title: 'Draw the Body',
        instruction: "Draw a big oval shape lying on its side in the middle of your paper. This is the fish's body!",
        tip: "Make it wider than it is tall - like an egg on its side.",
        svg: '<ellipse cx="145" cy="150" rx="80" ry="48"/>'
      },
      {
        title: 'Add the Tail',
        instruction: "At the right end of the body, draw a V-shaped tail fin.",
        tip: "The tail connects where the oval ends. Make it big and flowy!",
        svg: '<path d="M222,150 L268,115 L258,150 L268,185 Z"/>'
      },
      {
        title: 'Draw the Eye & Mouth',
        instruction: "Add a big round eye near the front (left side) with a small shine dot, and a smiling mouth.",
        tip: "Fish eyes are usually quite large! Add a tiny white circle inside for the shine.",
        svg: '<circle cx="95" cy="140" r="12"/><circle cx="95" cy="140" r="7" fill="#444"/><circle cx="92" cy="137" r="3" fill="white"/><path d="M72,158 Q80,168 90,162"/>'
      },
      {
        title: 'Add the Fins',
        instruction: "Draw a pointy fin on top, a smaller one on the bottom, and one on the side.",
        tip: "The top fin (dorsal fin) is the biggest. It looks like a curved triangle.",
        svg: '<path d="M140,102 Q155,62 170,75 Q165,95 155,102"/><path d="M140,198 Q150,228 165,218 Q160,202 155,198"/><path d="M115,148 Q105,162 115,175"/>'
      },
      {
        title: 'Add Scales & Stripes',
        instruction: "Draw curved lines across the body for stripes, and small U-shapes for scales!",
        tip: "Stripes follow the curve of the body. Don't draw too many - a few look great!",
        svg: '<path d="M120,105 Q120,150 120,195"/><path d="M160,108 Q160,150 160,192"/><path d="M195,118 Q195,150 195,182"/><path d="M100,130 Q110,140 100,150"/><path d="M130,125 Q140,138 130,150"/><path d="M145,130 Q155,143 145,155"/><path d="M175,128 Q185,140 175,155"/><path d="M115,148 Q125,160 115,170"/><path d="M140,148 Q150,160 140,170"/><path d="M165,145 Q175,155 165,168"/>'
      },
    ]
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    category: 'animals',
    difficulty: 'medium',
    emoji: '\uD83E\uDD8B',
    steps: [
      {
        title: 'Draw the Body',
        instruction: "Draw a thin, tall oval in the center for the butterfly's body.",
        tip: "The body is thin like a finger. Draw it standing up straight in the middle.",
        svg: '<ellipse cx="150" cy="155" rx="7" ry="45"/>'
      },
      {
        title: 'Add Upper Wings',
        instruction: "Draw two large rounded wing shapes on each side of the upper body. They go up and out.",
        tip: "Upper wings are the bigger ones! Make them nice and wide, like two big petals.",
        svg: '<path d="M143,125 Q98,62 78,95 Q58,128 105,148 Q125,155 143,148"/><path d="M157,125 Q202,62 222,95 Q242,128 195,148 Q175,155 157,148"/>'
      },
      {
        title: 'Add Lower Wings',
        instruction: "Draw two smaller rounded wings below the upper ones. They point down and out.",
        tip: "Lower wings are smaller but still pretty! They hang down like little teardrops.",
        svg: '<path d="M143,150 Q108,168 98,195 Q92,215 132,202 Q143,185 143,165"/><path d="M157,150 Q192,168 202,195 Q208,215 168,202 Q157,185 157,165"/>'
      },
      {
        title: 'Draw the Antennae',
        instruction: "Add two curvy lines going up from the top of the head, each ending in a small dot.",
        tip: "Antennae curve gently outward. Put a little ball at the tip of each one!",
        svg: '<path d="M147,110 Q132,75 118,62"/><circle cx="116" cy="60" r="4" fill="#444"/><path d="M153,110 Q168,75 182,62"/><circle cx="184" cy="60" r="4" fill="#444"/>'
      },
      {
        title: 'Add Wing Patterns',
        instruction: "Draw circles and lines inside the wings to make beautiful patterns!",
        tip: "Butterflies have the prettiest wing patterns! You can make up your own designs too.",
        svg: '<circle cx="108" cy="112" r="15"/><circle cx="192" cy="112" r="15"/><circle cx="108" cy="112" r="8"/><circle cx="192" cy="112" r="8"/><circle cx="115" cy="182" r="10"/><circle cx="185" cy="182" r="10"/><circle cx="130" cy="100" r="5"/><circle cx="170" cy="100" r="5"/>'
      },
    ]
  },

  // ===== PLACES =====
  {
    id: 'house',
    name: 'Cozy House',
    category: 'places',
    difficulty: 'easy',
    emoji: '\uD83C\uDFE1',
    steps: [
      {
        title: 'Draw the Base',
        instruction: "Draw a big rectangle in the lower part of your paper. This is the main part of the house!",
        tip: "Use a ruler if you want straight lines, but freehand is totally fine too!",
        svg: '<rect x="65" y="145" width="170" height="130"/>'
      },
      {
        title: 'Add the Roof',
        instruction: "Draw a big triangle on top of the rectangle. The point goes up in the center!",
        tip: "The roof should be wider than the house walls - let it stick out a little on each side.",
        svg: '<path d="M50,150 L150,55 L250,150"/>'
      },
      {
        title: 'Add the Door',
        instruction: "Draw a rectangle in the lower center of the house for the door. Add a small circle for the doorknob!",
        tip: "The door touches the bottom of the house. Put the doorknob on the right side.",
        svg: '<rect x="128" y="210" width="44" height="65"/><circle cx="163" cy="245" r="4" fill="#444"/>'
      },
      {
        title: 'Add Windows',
        instruction: "Draw two square windows with crosses in them - one on each side of the door.",
        tip: "Windows look great with a cross shape inside - it makes them look like real window panes!",
        svg: '<rect x="80" y="175" width="35" height="35"/><line x1="97" y1="175" x2="97" y2="210"/><line x1="80" y1="192" x2="115" y2="192"/><rect x="185" y="175" width="35" height="35"/><line x1="202" y1="175" x2="202" y2="210"/><line x1="185" y1="192" x2="220" y2="192"/>'
      },
      {
        title: 'Add Chimney & Details',
        instruction: "Draw a chimney on the roof, a path to the door, and some flowers in the garden!",
        tip: "The chimney is a small rectangle on one side of the roof. Add little circles for flowers!",
        svg: '<rect x="192" y="78" width="22" height="52"/><path d="M195,80 Q200,72 205,80"/><path d="M150,275 Q150,285 140,285 L130,285 Q120,285 120,280 Q118,278 115,278"/><path d="M150,275 Q150,285 160,285 L170,285 Q180,285 180,280 Q182,278 185,278"/><circle cx="85" cy="272" r="5"/><circle cx="80" cy="268" r="5"/><circle cx="90" cy="268" r="5"/><circle cx="85" cy="264" r="5"/><line x1="85" y1="275" x2="85" y2="282"/><circle cx="225" cy="272" r="5"/><circle cx="220" cy="268" r="5"/><circle cx="230" cy="268" r="5"/><circle cx="225" cy="264" r="5"/><line x1="225" y1="275" x2="225" y2="282"/>'
      },
    ]
  },
  {
    id: 'castle',
    name: 'Magic Castle',
    category: 'places',
    difficulty: 'medium',
    emoji: '\uD83C\uDFF0',
    steps: [
      {
        title: 'Draw the Main Wall',
        instruction: "Draw a big rectangle in the center of your paper. This is the main wall of the castle!",
        tip: "Make it tall and wide - castles are big and impressive!",
        svg: '<rect x="85" y="125" width="130" height="150"/>'
      },
      {
        title: 'Add the Towers',
        instruction: "Draw two tall rectangles on each side, taller than the main wall. Add battlements (little squares) on top!",
        tip: "Battlements are the zigzag pattern on top of castle walls. Draw little squares with gaps between them.",
        svg: '<rect x="55" y="85" width="50" height="190"/><rect x="195" y="85" width="50" height="190"/><rect x="55" y="72" width="14" height="18"/><rect x="73" y="72" width="14" height="18"/><rect x="91" y="72" width="14" height="18"/><rect x="195" y="72" width="14" height="18"/><rect x="213" y="72" width="14" height="18"/><rect x="231" y="72" width="14" height="18"/>'
      },
      {
        title: 'Draw the Gate',
        instruction: "Draw a big arched doorway in the center of the main wall. Add a line down the middle for the double doors!",
        tip: "The arch is like an upside-down U shape. Make it big enough for a knight to ride through!",
        svg: '<path d="M125,275 L125,200 Q150,170 175,200 L175,275"/><line x1="150" y1="178" x2="150" y2="275"/><circle cx="143" cy="230" r="3" fill="#444"/><circle cx="157" cy="230" r="3" fill="#444"/>'
      },
      {
        title: 'Add Windows',
        instruction: "Draw arched windows on the towers and a round window on the main wall.",
        tip: "Castle windows are tall and narrow with an arch at the top. The round window is called a rose window!",
        svg: '<path d="M70,135 L70,162 Q80,172 90,162 L90,135 Q80,128 70,135"/><path d="M210,135 L210,162 Q220,172 230,162 L230,135 Q220,128 210,135"/><circle cx="150" cy="148" r="18"/><line x1="150" y1="130" x2="150" y2="166"/><line x1="132" y1="148" x2="168" y2="148"/>'
      },
      {
        title: 'Add the Flag',
        instruction: "Draw a tall pole going up from the center of the castle with a flag waving at the top!",
        tip: "The flag waves to one side like it's blowing in the wind. Make it triangular!",
        svg: '<line x1="150" y1="125" x2="150" y2="45"/><path d="M150,45 L182,58 L150,70" fill="#444"/>'
      },
      {
        title: 'Add Stone Details',
        instruction: "Draw horizontal lines and some stone block lines on the walls to make it look like real stone!",
        tip: "Just a few lines here and there is enough - you don't need to draw every single stone!",
        svg: '<line x1="85" y1="160" x2="215" y2="160"/><line x1="85" y1="195" x2="125" y2="195"/><line x1="175" y1="195" x2="215" y2="195"/><line x1="120" y1="125" x2="120" y2="160"/><line x1="180" y1="125" x2="180" y2="160"/><line x1="100" y1="160" x2="100" y2="195"/><line x1="200" y1="160" x2="200" y2="195"/>'
      },
    ]
  },

  // ===== NATURE =====
  {
    id: 'flower',
    name: 'Pretty Flower',
    category: 'nature',
    difficulty: 'easy',
    emoji: '\uD83C\uDF38',
    steps: [
      {
        title: 'Draw the Center',
        instruction: "Draw a medium circle in the upper part of your paper. This is the center of your flower!",
        tip: "This is where the seeds would be! Make it about the size of a coin.",
        svg: '<circle cx="150" cy="115" r="18" fill="#444"/>'
      },
      {
        title: 'Add Petals',
        instruction: "Draw five or six overlapping circles around the center. These are your petals!",
        tip: "Each petal is a circle that overlaps the center. Space them evenly around like a clock!",
        svg: '<circle cx="150" cy="82" r="24"/><circle cx="178" cy="95" r="24"/><circle cx="172" cy="130" r="24"/><circle cx="128" cy="130" r="24"/><circle cx="122" cy="95" r="24"/>'
      },
      {
        title: 'Draw the Stem',
        instruction: "Draw a slightly curved line going straight down from the flower to make the stem.",
        tip: "Stems aren't perfectly straight in nature - a gentle curve looks more natural!",
        svg: '<path d="M150,140 Q148,200 150,285" stroke-width="3.5"/>'
      },
      {
        title: 'Add Leaves',
        instruction: "Draw two leaves on the stem - one on each side. They look like pointed ovals!",
        tip: "Leaves come out at an angle from the stem. Add a line down the middle of each leaf for the vein!",
        svg: '<path d="M149,195 Q115,175 108,195 Q105,215 149,208"/><line x1="149" y1="200" x2="115" y2="195"/><path d="M150,240 Q185,220 192,240 Q195,260 150,252"/><line x1="150" y1="245" x2="185" y2="240"/>'
      },
    ]
  },
  {
    id: 'tree',
    name: 'Big Tree',
    category: 'nature',
    difficulty: 'easy',
    emoji: '\uD83C\uDF33',
    steps: [
      {
        title: 'Draw the Trunk',
        instruction: "Draw two lines going up from the bottom, getting slightly narrower at the top. This is your tree trunk!",
        tip: "Tree trunks are wider at the bottom and narrower at the top. Add a slight curve!",
        svg: '<path d="M132,280 Q130,230 135,185 Q138,175 140,170" stroke-width="3"/><path d="M168,280 Q170,230 165,185 Q162,175 160,170" stroke-width="3"/><line x1="120" y1="280" x2="180" y2="280" stroke-width="2"/>'
      },
      {
        title: 'Draw the Canopy',
        instruction: "Draw a big, bumpy cloud shape on top of the trunk for all the leaves!",
        tip: "The canopy is like a big fluffy cloud! Make it bumpy and uneven - trees aren't perfect circles.",
        svg: '<path d="M80,170 Q60,155 70,130 Q72,105 100,95 Q115,70 150,72 Q185,70 200,95 Q228,105 230,130 Q240,155 220,170 Q215,178 200,178 Q180,182 160,178 Q140,182 120,178 Q100,178 80,170" />'
      },
      {
        title: 'Add Branches',
        instruction: "Draw a few branch lines peeking out of the canopy and some inside it.",
        tip: "Branches grow outward and upward from the trunk. Just draw a few - the leaves hide most of them!",
        svg: '<path d="M145,170 Q125,150 95,155"/><path d="M155,170 Q175,150 205,155"/><path d="M148,155 Q130,125 108,110"/><path d="M152,155 Q170,125 195,108"/>'
      },
      {
        title: 'Add Leaf Details',
        instruction: "Draw small bumpy circles within the canopy to show clusters of leaves. Add some ground details!",
        tip: "Small circles inside the big canopy shape make it look leafy and full!",
        svg: '<circle cx="105" cy="115" r="15"/><circle cx="140" cy="95" r="14"/><circle cx="175" cy="100" r="13"/><circle cx="195" cy="125" r="14"/><circle cx="120" cy="150" r="12"/><circle cx="160" cy="88" r="11"/><circle cx="185" cy="155" r="13"/><path d="M70,280 Q90,275 110,280"/><path d="M190,280 Q210,275 230,280"/>'
      },
    ]
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    category: 'nature',
    difficulty: 'easy',
    emoji: '\uD83C\uDF08',
    steps: [
      {
        title: 'Draw the Outer Arc',
        instruction: "Draw a big curved line going from the bottom-left, arching high up, and coming down to the bottom-right.",
        tip: "Think of it like drawing a huge upside-down U! Make it nice and smooth.",
        svg: '<path d="M25,230 Q25,42 150,42 Q275,42 275,230" stroke-width="3"/>'
      },
      {
        title: 'Add More Arcs',
        instruction: "Draw several more arcs inside the first one, each one a bit smaller. Rainbows have many bands!",
        tip: "Keep each arc evenly spaced from the last one. Try to make them all the same thickness!",
        svg: '<path d="M45,230 Q45,68 150,68 Q255,68 255,230" stroke-width="2.5"/><path d="M65,230 Q65,90 150,90 Q235,90 235,230" stroke-width="2.5"/><path d="M85,230 Q85,110 150,110 Q215,110 215,230" stroke-width="2.5"/><path d="M105,230 Q105,130 150,130 Q195,130 195,230" stroke-width="2.5"/><path d="M125,230 Q125,150 150,150 Q175,150 175,230" stroke-width="2.5"/>'
      },
      {
        title: 'Add Clouds on the Left',
        instruction: "Draw a fluffy cloud at the bottom-left where the rainbow starts!",
        tip: "Clouds are made of overlapping bumpy circles. Layer them to make it look fluffy!",
        svg: '<ellipse cx="38" cy="238" rx="32" ry="22"/><circle cx="18" cy="232" r="20"/><circle cx="58" cy="232" r="20"/><circle cx="38" cy="218" r="22"/><circle cx="20" cy="222" r="15"/><circle cx="55" cy="222" r="16"/>'
      },
      {
        title: 'Add Clouds on the Right',
        instruction: "Draw another fluffy cloud at the bottom-right where the rainbow ends!",
        tip: "Make this cloud a slightly different shape from the other one - no two clouds are the same!",
        svg: '<ellipse cx="262" cy="238" rx="32" ry="22"/><circle cx="242" cy="232" r="20"/><circle cx="282" cy="232" r="20"/><circle cx="262" cy="218" r="22"/><circle cx="245" cy="222" r="15"/><circle cx="280" cy="222" r="16"/>'
      },
    ]
  },

  // ===== FOOD =====
  {
    id: 'cupcake',
    name: 'Cupcake',
    category: 'food',
    difficulty: 'easy',
    emoji: '\uD83E\uDDC1',
    steps: [
      {
        title: 'Draw the Cup',
        instruction: "Draw a trapezoid shape (wider at top, narrower at bottom) for the cupcake wrapper.",
        tip: "Think of it like an upside-down triangle with the point cut off!",
        svg: '<path d="M88,185 L100,275 L200,275 L212,185"/><line x1="100" y1="200" x2="200" y2="200"/><line x1="102" y1="215" x2="198" y2="215"/><line x1="103" y1="230" x2="197" y2="230"/><line x1="104" y1="245" x2="196" y2="245"/><line x1="105" y1="260" x2="195" y2="260"/>'
      },
      {
        title: 'Draw the Cake Top',
        instruction: "Draw a slightly bumpy line across the top of the cup for where the cake rises above the wrapper.",
        tip: "Cake puffs up a little over the edge of the wrapper. Make it gently curved!",
        svg: '<path d="M82,185 Q88,168 108,170 Q130,168 150,178 Q170,168 192,170 Q212,168 218,185"/>'
      },
      {
        title: 'Add the Frosting',
        instruction: "Draw a big swirly frosting on top! Make it wavy and tall like a soft-serve ice cream.",
        tip: "Frosting is the best part! Make it swirly and tall with lots of bumps.",
        svg: '<path d="M78,185 Q82,145 108,150 Q128,135 150,142 Q172,130 192,145 Q215,140 222,185"/>'
      },
      {
        title: 'Add the Cherry',
        instruction: "Draw a circle on top of the frosting for a cherry, with a small stem!",
        tip: "The cherry sits right on the very top. Add a little curved stem going up!",
        svg: '<circle cx="150" cy="118" r="16"/><path d="M150,102 Q155,88 168,82"/><path d="M160,85 Q165,82 170,85 Q168,90 162,88 Q158,88 160,85" fill="#444"/>'
      },
      {
        title: 'Add Sprinkles',
        instruction: "Draw tiny lines and dots all over the frosting for sprinkles!",
        tip: "Sprinkles go in all different directions - that's what makes them fun! Scatter them randomly.",
        svg: '<line x1="108" y1="152" x2="114" y2="147"/><line x1="128" y1="158" x2="126" y2="150"/><line x1="172" y1="150" x2="178" y2="156"/><line x1="192" y1="155" x2="188" y2="148"/><line x1="145" y1="148" x2="150" y2="142"/><line x1="100" y1="165" x2="105" y2="160"/><line x1="195" y1="165" x2="200" y2="160"/><circle cx="118" cy="162" r="2.5" fill="#444"/><circle cx="160" cy="160" r="2.5" fill="#444"/><circle cx="138" cy="155" r="2.5" fill="#444"/><circle cx="182" cy="163" r="2.5" fill="#444"/>'
      },
    ]
  },
  {
    id: 'icecream',
    name: 'Ice Cream Cone',
    category: 'food',
    difficulty: 'easy',
    emoji: '\uD83C\uDF66',
    steps: [
      {
        title: 'Draw the Cone',
        instruction: "Draw a triangle pointing down - this is the ice cream cone! Add criss-cross lines for the waffle pattern.",
        tip: "The cone is like an upside-down triangle. Make it pointy at the bottom!",
        svg: '<path d="M110,165 L150,285 L190,165"/><line x1="118" y1="185" x2="170" y2="245"/><line x1="130" y1="235" x2="182" y2="185"/><line x1="122" y1="205" x2="178" y2="205"/><line x1="132" y1="225" x2="168" y2="225"/><line x1="142" y1="245" x2="158" y2="245"/>'
      },
      {
        title: 'Add First Scoop',
        instruction: "Draw a big round circle sitting on top of the cone. This is your first scoop!",
        tip: "The scoop sits right on top of the cone opening. It should be wider than the cone top!",
        svg: '<circle cx="150" cy="130" r="42"/>'
      },
      {
        title: 'Add Second Scoop',
        instruction: "Draw another circle on top of the first scoop - two scoops are always better!",
        tip: "This scoop sits on top of the first one. Make it a tiny bit smaller.",
        svg: '<circle cx="150" cy="78" r="36"/>'
      },
      {
        title: 'Add Toppings & Drips',
        instruction: "Add some drip lines coming down the sides, and sprinkles or a cherry on top!",
        tip: "Ice cream drips make it look yummy and real! Draw wavy lines dripping down.",
        svg: '<path d="M112,140 Q108,155 112,162"/><path d="M188,140 Q192,155 188,162"/><path d="M125,155 Q122,165 125,170"/><path d="M175,155 Q178,165 175,170"/><circle cx="150" cy="48" r="10"/><path d="M150,38 Q153,25 160,22"/><circle cx="135" cy="68" r="2" fill="#444"/><circle cx="160" cy="75" r="2" fill="#444"/><circle cx="145" cy="85" r="2" fill="#444"/><circle cx="140" cy="118" r="2" fill="#444"/><circle cx="165" cy="125" r="2" fill="#444"/>'
      },
    ]
  },
  {
    id: 'apple',
    name: 'Shiny Apple',
    category: 'food',
    difficulty: 'easy',
    emoji: '\uD83C\uDF4E',
    steps: [
      {
        title: 'Draw the Apple Shape',
        instruction: "Draw the outline of an apple - it's like a circle with a dip at the top and a slight bump at the bottom.",
        tip: "Start from the dip at the top, go around one side, curve at the bottom, come back up the other side!",
        svg: '<path d="M148,75 Q190,68 218,110 Q245,165 218,220 Q195,258 170,268 Q158,275 150,275 Q142,275 130,268 Q105,258 82,220 Q55,165 82,110 Q110,68 152,75"/>'
      },
      {
        title: 'Add the Stem',
        instruction: "Draw a short curved line going up from the dip at the top of the apple.",
        tip: "The stem is short and slightly curved, like a little stick!",
        svg: '<path d="M150,75 Q148,55 152,40" stroke-width="3"/>'
      },
      {
        title: 'Add the Leaf',
        instruction: "Draw a leaf shape coming off one side of the stem. It's like a pointed oval!",
        tip: "The leaf leans to one side. Add a line down the middle for the vein!",
        svg: '<path d="M152,52 Q178,35 190,48 Q185,65 158,62 Q152,58 152,52" fill="#444"/><path d="M155,55 Q172,45 182,52"/>'
      },
      {
        title: 'Add Shine & Details',
        instruction: "Draw a curved line on one side for the shine reflection. Add the dip line at the top!",
        tip: "The shine shows that the apple is smooth and shiny! It's just a gentle curved line.",
        svg: '<path d="M108,118 Q102,148 108,178"/><path d="M102,128 Q98,150 102,170"/><path d="M148,75 Q150,82 152,75"/>'
      },
    ]
  },

  // ===== ADVENTURE =====
  {
    id: 'star',
    name: 'Sparkle Star',
    category: 'adventure',
    difficulty: 'easy',
    emoji: '\u2B50',
    steps: [
      {
        title: 'Draw the Star',
        instruction: "Draw a five-pointed star shape! Start from the top point and connect five points in a star pattern.",
        tip: "If a perfect star is hard, try drawing a triangle pointing up and a triangle pointing down, overlapping!",
        svg: '<polygon points="150,25 175,105 260,110 195,160 215,245 150,195 85,245 105,160 40,110 125,105"/>'
      },
      {
        title: 'Add Inner Lines',
        instruction: "Draw lines from each point to the center to give the star dimension!",
        tip: "These lines make the star look 3D, like it's popping out of the page!",
        svg: '<line x1="150" y1="25" x2="150" y2="195"/><line x1="260" y1="110" x2="85" y2="245"/><line x1="40" y1="110" x2="215" y2="245"/>'
      },
      {
        title: 'Add Sparkle Effects',
        instruction: "Draw tiny four-pointed sparkles around the star to make it magical!",
        tip: "Sparkles are like tiny plus signs (+) with pointed ends. Scatter them around the star!",
        svg: '<path d="M60,45 L65,38 L70,45 L65,52 Z" fill="#444"/><path d="M240,50 L245,43 L250,50 L245,57 Z" fill="#444"/><path d="M45,200 L50,193 L55,200 L50,207 Z" fill="#444"/><path d="M250,195 L255,188 L260,195 L255,202 Z" fill="#444"/><path d="M30,140 L35,135 L40,140 L35,145 Z" fill="#444"/><path d="M265,145 L270,140 L275,145 L270,150 Z" fill="#444"/><circle cx="75,55" r="1.5" fill="#444"/><circle cx="235" cy="55" r="1.5" fill="#444"/>'
      },
    ]
  },
  {
    id: 'unicorn',
    name: 'Magical Unicorn',
    category: 'adventure',
    difficulty: 'medium',
    emoji: '\uD83E\uDD84',
    steps: [
      {
        title: 'Draw the Head',
        instruction: "Draw an oval shape tilted slightly for the unicorn's head. It's longer than it is wide!",
        tip: "The head is like an egg turned on its side, but with the narrow end being the nose.",
        svg: '<ellipse cx="200" cy="95" rx="42" ry="32"/>'
      },
      {
        title: 'Add the Horn',
        instruction: "Draw a tall pointed triangle on the forehead for the magical horn! Add some lines across it.",
        tip: "The horn spirals! Draw little lines across it to show the spiral pattern.",
        svg: '<path d="M215,68 L228,12 L240,68"/><line x1="220" y1="55" x2="236" y2="55"/><line x1="222" y1="42" x2="234" y2="42"/><line x1="225" y1="30" x2="231" y2="30"/>'
      },
      {
        title: 'Draw the Face',
        instruction: "Add a big sparkly eye, a small nostril, and a gentle smile!",
        tip: "Unicorn eyes are big and beautiful! Draw a large circle with a shine dot.",
        svg: '<circle cx="208" cy="88" r="7" fill="#444"/><circle cx="205" cy="86" r="2.5" fill="white"/><path d="M235,100 Q240,106 235,110"/><path d="M170,102 Q168,108 172,112"/>'
      },
      {
        title: 'Add the Mane',
        instruction: "Draw flowing wavy lines coming down from behind the horn and along the neck!",
        tip: "The mane flows and waves like it's blowing in the wind! Make it flowy and magical.",
        svg: '<path d="M198,68 Q175,60 182,82"/><path d="M188,72 Q162,70 172,92"/><path d="M180,82 Q155,88 168,108"/><path d="M175,95 Q148,102 162,118"/><path d="M170,108 Q145,115 158,128"/>'
      },
      {
        title: 'Draw the Body',
        instruction: "Draw a large oval below and slightly in front of the head for the body. Connect with neck lines!",
        tip: "The body is bigger than the head. Draw a graceful curved neck connecting them!",
        svg: '<ellipse cx="138" cy="180" rx="68" ry="50"/><path d="M172,120 Q192,118 200,105"/><path d="M162,128 Q180,132 190,115"/>'
      },
      {
        title: 'Add Legs',
        instruction: "Draw four slender legs with small hooves at the bottom!",
        tip: "Unicorn legs are elegant and slim. Each hoof is a small flat shape at the bottom.",
        svg: '<path d="M88,218 L82,275 Q82,280 92,280"/><path d="M115,222 L110,275 Q110,280 120,280"/><path d="M162,222 L166,275 Q166,280 176,280"/><path d="M188,218 L194,275 Q194,280 204,280"/>'
      },
      {
        title: 'Add the Tail & Sparkles',
        instruction: "Draw a flowing, wavy tail and add some tiny sparkles around the unicorn!",
        tip: "The tail is like the mane - flowing and magical! Add little stars around for extra magic.",
        svg: '<path d="M70,168 Q38,148 32,175 Q28,195 55,188 Q38,210 58,215 Q48,230 68,225"/><path d="M68,175 Q48,162 50,182"/><path d="M35,60 L38,53 L41,60 L38,67 Z" fill="#444"/><path d="M265,140 L268,133 L271,140 L268,147 Z" fill="#444"/><path d="M50,250 L53,243 L56,250 L53,257 Z" fill="#444"/><path d="M240,200 L243,193 L246,200 L243,207 Z" fill="#444"/>'
      },
    ]
  },
  {
    id: 'rocket',
    name: 'Space Rocket',
    category: 'adventure',
    difficulty: 'medium',
    emoji: '\uD83D\uDE80',
    steps: [
      {
        title: 'Draw the Body',
        instruction: "Draw a tall rectangle with rounded top for the rocket body. It should be narrow and tall!",
        tip: "The rocket body is like a tall rectangle. Make it nice and straight!",
        svg: '<rect x="125" y="80" width="50" height="150" rx="5"/>'
      },
      {
        title: 'Add the Nose Cone',
        instruction: "Draw a pointed triangle on top of the body - this is the nose cone that cuts through space!",
        tip: "The nose cone comes to a sharp point at the very top. Make it smooth and pointy!",
        svg: '<path d="M125,80 Q150,15 175,80"/>'
      },
      {
        title: 'Add the Fins',
        instruction: "Draw three fins at the bottom - one on each side and one in the center!",
        tip: "Fins help the rocket fly straight! They look like small triangles at the base.",
        svg: '<path d="M125,200 L85,250 L125,232"/><path d="M175,200 L215,250 L175,232"/><path d="M142,230 L150,260 L158,230"/>'
      },
      {
        title: 'Add the Window',
        instruction: "Draw a circle window (porthole) on the body of the rocket. Add a smaller circle inside!",
        tip: "The window is where the astronaut looks out! Draw two circles - one inside the other.",
        svg: '<circle cx="150" cy="135" r="20"/><circle cx="150" cy="135" r="13"/><circle cx="145" cy="130" r="4" fill="#444"/>'
      },
      {
        title: 'Add Flames & Stars',
        instruction: "Draw wavy flame shapes coming out the bottom, and stars around the rocket!",
        tip: "Rocket flames are orange and red! Draw them wavy and getting thinner at the ends.",
        svg: '<path d="M130,230 Q138,268 132,292"/><path d="M150,235 Q150,278 150,298"/><path d="M170,230 Q162,268 168,292"/><path d="M140,230 Q142,260 138,282"/><path d="M160,230 Q158,260 162,282"/><path d="M55,50 L60,42 L65,50 L60,58 Z" fill="#444"/><path d="M240,80 L245,72 L250,80 L245,88 Z" fill="#444"/><path d="M45,180 L50,172 L55,180 L50,188 Z" fill="#444"/><path d="M255,160 L260,152 L265,160 L260,168 Z" fill="#444"/><circle cx="80" cy="100" r="3"/><circle cx="225" cy="120" r="3"/><circle cx="60" cy="240" r="2"/><circle cx="245" cy="230" r="2"/>'
      },
    ]
  },
  {
    id: 'sailboat',
    name: 'Sailboat',
    category: 'adventure',
    difficulty: 'easy',
    emoji: '\u26F5',
    steps: [
      {
        title: 'Draw the Hull',
        instruction: "Draw the boat bottom - it's like a wide smile shape or a shallow bowl!",
        tip: "The hull is flat on top and curved on the bottom. Make it nice and wide!",
        svg: '<path d="M45,200 L75,250 L225,250 L255,200 Z"/>'
      },
      {
        title: 'Add the Mast',
        instruction: "Draw a straight tall line going up from the center of the hull. This holds the sails!",
        tip: "The mast goes straight up from the middle of the boat. Make it nice and tall!",
        svg: '<line x1="150" y1="72" x2="150" y2="200" stroke-width="3"/>'
      },
      {
        title: 'Draw the Sails',
        instruction: "Draw two triangles - one on each side of the mast - for the sails catching the wind!",
        tip: "One sail is bigger than the other. The big one goes to the right, the small one to the left!",
        svg: '<path d="M153,78 L235,192 L153,192 Z"/><path d="M147,95 L80,192 L147,192 Z"/>'
      },
      {
        title: 'Add the Flag',
        instruction: "Draw a small flag at the very top of the mast, waving in the wind!",
        tip: "The flag flutters in the breeze! Make it a small triangle pointing to one side.",
        svg: '<path d="M150,72 L178,82 L150,92" fill="#444"/>'
      },
      {
        title: 'Add Waves & Details',
        instruction: "Draw wavy lines below the boat for the ocean waves! Add some extra details to the boat.",
        tip: "Waves are gentle curves repeating across the page. Draw a few rows for depth!",
        svg: '<path d="M15,258 Q45,248 75,258 Q105,268 135,258 Q165,248 195,258 Q225,268 255,258 Q275,250 295,258"/><path d="M5,275 Q35,265 65,275 Q95,285 125,275 Q155,265 185,275 Q215,285 245,275 Q275,267 300,275"/><circle cx="90" cy="220" r="8"/><line x1="82" y1="220" x2="98" y2="220"/><line x1="90" y1="212" x2="90" y2="228"/>'
      },
    ]
  },
];

export const encouragements = [
  "You're doing amazing!",
  "What a talented artist!",
  "Keep going, you've got this!",
  "Wow, that looks wonderful!",
  "You're a natural!",
  "Beautiful work so far!",
  "That's looking really cool!",
  "Great job! Keep it up!",
  "You're making magic happen!",
  "Incredible progress!",
];
