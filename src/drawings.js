import { goals } from './goals.js';

export const categories = [
  { id: 'all', name: 'All', emoji: '✨' },
  { id: 'animals', name: 'Animals', emoji: '🐾' },
  { id: 'places', name: 'Places', emoji: '🏠' },
  { id: 'nature', name: 'Nature', emoji: '🌿' },
  { id: 'food', name: 'Food', emoji: '🍎' },
  { id: 'adventure', name: 'Adventure', emoji: '🚀' },
];

// Difficulty tiers — the "increasingly sophisticated" ladder.
export const tiers = [
  { id: 1, name: 'First Steps', emoji: '✏️', blurb: 'Simple shapes to warm up.' },
  { id: 2, name: 'Getting There', emoji: '🌱', blurb: 'A few more pieces to put together.' },
  { id: 3, name: 'Nice Work', emoji: '⭐', blurb: 'Proper little characters now.' },
  { id: 4, name: 'Impressive', emoji: '🔥', blurb: 'The fancy stuff. Take your time.' },
  { id: 5, name: 'Master', emoji: '👑', blurb: 'Whole scenes. You have earned these.' },
];

export const drawings = [
  // ===================== TIER 1 — First Steps =====================
  {
    id: 'balloon', name: 'Balloon', category: 'adventure', tier: 1, difficulty: 'starter', emoji: '🎈',
    steps: [
      { title: 'Draw the Balloon', instruction: 'Draw a big rounded shape like an upside-down egg. Wide at the top, tucking in at the bottom.', tip: 'It does not need to be perfect — real balloons are all a bit wobbly!', svg: '<path d="M150,42 C106,42 86,84 86,118 C86,160 118,190 150,198 C182,190 214,160 214,118 C214,84 194,42 150,42 Z"/>' },
      { title: 'Add the Knot', instruction: 'At the very bottom, draw a tiny triangle. That is where the balloon is tied!', tip: 'Little triangle, point facing down.', svg: '<path d="M142,196 L158,196 L150,210 Z"/>' },
      { title: 'Draw the String', instruction: 'Draw a long wiggly line hanging down from the knot.', tip: 'Make it curve like a gentle S — strings are never straight.', svg: '<path d="M150,210 C140,226 162,238 150,256 C142,270 158,282 150,290"/>' },
      { title: 'Add a Shine', instruction: 'Draw a small curved line near the top-left to make it look shiny.', tip: 'The shine is where the light hits — it makes the balloon look round!', svg: '<path d="M118,78 Q108,100 116,122"/>' },
    ]
  },
  withGoalSteps('apple', 'Shiny Apple', 'food', 1, 'starter', '🍎', [
    { title: 'Draw the Apple', instruction: 'Draw a round apple shape with a little dip at the top.', tip: 'Start at the dip, go around one side, curve the bottom, come back up.', svg: '<path d="M150,90 Q188,72 216,110 Q244,164 216,218 Q192,256 168,266 Q158,272 150,272 Q142,272 132,266 Q108,256 84,218 Q56,164 84,110 Q112,72 150,90"/>' },
    { title: 'Add the Stem', instruction: 'Draw a short curved line poking up from the dip.', tip: 'The stem is a little stick — slightly bent.', svg: '<path d="M150,88 Q148,66 158,44" stroke-width="3"/>' },
    { title: 'Add a Leaf', instruction: 'Draw a pointy leaf beside the stem.', tip: 'A leaf is like a pointed oval — add a line down the middle for the vein.', svg: '<path d="M158,48 Q182,32 210,44 Q198,64 168,60 Q158,56 158,48"/><path d="M170,50 Q186,44 202,50"/>' },
    { title: 'Add a Shine', instruction: 'Draw a curved line on one side so the apple looks shiny.', tip: 'A shine always sits where the light comes from.', svg: '<path d="M100,120 Q92,150 104,182"/>' },
  ]),
  {
    id: 'star', name: 'Sparkle Star', category: 'adventure', tier: 1, difficulty: 'starter', emoji: '⭐',
    steps: [
      { title: 'Draw the Star', instruction: 'Draw a five-pointed star. One point up top, two out to the sides, two down at the bottom.', tip: 'Tricky one! Try a V at the top, then two lines swooping down to the bottom points.', svg: '<polygon points="150,40 182,116 264,124 202,178 220,258 150,214 80,258 98,178 36,124 118,116"/>' },
      { title: 'Add a Happy Face', instruction: 'Give your star two dot eyes and a big smile in the middle.', tip: 'Put the face in the flat middle part of the star.', svg: '<circle cx="128" cy="150" r="6" fill="#444"/><circle cx="172" cy="150" r="6" fill="#444"/><path d="M136,168 Q150,182 164,168"/>' },
      { title: 'Add Sparkles', instruction: 'Draw little four-pointed sparkles around your star to make it magical!', tip: 'Sparkles are tiny plus-signs or diamonds — scatter a few around.', svg: '<path d="M250,60 l4,-9 4,9 9,4 -9,4 -4,9 -4,-9 -9,-4 z" fill="#444"/><path d="M44,74 l3,-7 3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 z" fill="#444"/><circle cx="238" cy="200" r="3" fill="#444"/>' },
    ]
  },
  {
    id: 'sun', name: 'Sunshine', category: 'nature', tier: 1, difficulty: 'starter', emoji: '☀️',
    steps: [
      { title: 'Draw the Sun', instruction: 'Draw a big circle in the middle of your paper.', tip: 'Nice and round, like a ball.', svg: '<circle cx="150" cy="150" r="70"/>' },
      { title: 'Add the Rays', instruction: 'Draw pointy triangles or lines all around the circle, sticking out like spikes.', tip: 'Space them out evenly, like the numbers on a clock.', svg: '<g><path d="M150,18 l12,34 -24,0 z"/><path d="M150,282 l12,-34 -24,0 z"/><path d="M18,150 l34,12 0,-24 z"/><path d="M282,150 l-34,12 0,-24 z"/><path d="M57,57 l30,14 -16,16 z"/><path d="M243,57 l-30,14 16,16 z"/><path d="M57,243 l30,-14 -16,-16 z"/><path d="M243,243 l-30,-14 16,-16 z"/></g>' },
      { title: 'Add a Smiley Face', instruction: 'Give the sun two eyes and a big cheerful smile.', tip: 'A happy sun makes the whole picture happy!', svg: '<circle cx="126" cy="142" r="7" fill="#444"/><circle cx="174" cy="142" r="7" fill="#444"/><path d="M124,172 Q150,196 176,172"/>' },
    ]
  },
  withGoalSteps('flower', 'Pretty Flower', 'nature', 1, 'starter', '🌸', [
    { title: 'Draw the Center', instruction: 'Draw a small circle up high on your paper for the middle of the flower.', tip: 'This is where all the petals will meet.', svg: '<circle cx="150" cy="130" r="20"/>' },
    { title: 'Add the Petals', instruction: 'Draw five rounded petals around the center, like a clock.', tip: 'Each petal is a long oval pointing out from the middle.', svg: '<ellipse cx="150" cy="82" rx="20" ry="28"/><ellipse cx="196" cy="112" rx="20" ry="28" transform="rotate(72 196 112)"/><ellipse cx="178" cy="172" rx="20" ry="28" transform="rotate(144 178 172)"/><ellipse cx="122" cy="172" rx="20" ry="28" transform="rotate(216 122 172)"/><ellipse cx="104" cy="112" rx="20" ry="28" transform="rotate(288 104 112)"/>' },
    { title: 'Draw the Stem', instruction: 'Draw a long line going straight down from the flower.', tip: 'A gentle curve looks more natural than a ruler-straight line.', svg: '<path d="M150,150 Q146,210 150,286" stroke-width="3.5"/>' },
    { title: 'Add Leaves', instruction: 'Draw a leaf on each side of the stem.', tip: 'Leaves are pointed ovals coming off at an angle.', svg: '<path d="M150,208 Q120,196 98,214 Q120,228 150,214"/><path d="M150,240 Q180,228 202,246 Q180,260 150,246"/>' },
  ]),
  withGoalSteps('fish', 'Tropical Fish', 'animals', 1, 'starter', '🐠', [
    { title: 'Draw the Body', instruction: 'Draw a big oval lying on its side in the middle.', tip: 'Wider than it is tall — like an egg resting on its side.', svg: '<ellipse cx="132" cy="150" rx="86" ry="56"/>' },
    { title: 'Add the Tail', instruction: 'On the right end, draw a fan-shaped tail.', tip: 'Two points at the back, like a letter V opened up.', svg: '<path d="M214,150 L272,108 L260,150 L272,192 Z"/>' },
    { title: 'Add the Fins', instruction: 'Draw a fin on top and one on the bottom of the body.', tip: 'Fins are like little curved triangles.', svg: '<path d="M120,96 Q150,58 172,92"/><path d="M118,204 Q146,240 170,208"/>' },
    { title: 'Face and Stripes', instruction: 'Add a big eye near the front, a smile, and a few curved stripes.', tip: 'Stripes follow the curve of the body — just a few looks great.', svg: '<circle cx="86" cy="138" r="12"/><circle cx="86" cy="138" r="5" fill="#444"/><path d="M66,166 Q78,176 92,170"/><path d="M120,102 Q114,150 120,198"/><path d="M162,108 Q156,150 162,192"/>' },
  ]),
  {
    id: 'ladybug', name: 'Ladybug', category: 'animals', tier: 1, difficulty: 'starter', emoji: '🐞',
    steps: [
      { title: 'Draw the Dome', instruction: 'Draw a big rounded dome shape, flat-ish along the bottom.', tip: 'Like half a ball sitting on the ground.', svg: '<path d="M60,150 A90 82 0 0 1 240,150 Q240,236 150,240 Q60,236 60,150 Z"/>' },
      { title: 'Add Head and Line', instruction: 'Draw a curved band across the top for the head, and a line straight down the middle.', tip: 'The line splits the two wings.', svg: '<path d="M60,150 A90 68 0 0 1 240,150 Q225,124 150,122 Q75,124 60,150 Z" fill="#444"/><path d="M150,64 L150,240"/>' },
      { title: 'Add the Spots', instruction: 'Draw round black spots on the two wings.', tip: 'Scatter them evenly — a few on each side.', svg: '<circle cx="108" cy="180" r="12" fill="#444"/><circle cx="192" cy="180" r="12" fill="#444"/><circle cx="120" cy="214" r="10" fill="#444"/><circle cx="180" cy="214" r="10" fill="#444"/><circle cx="150" cy="200" r="11" fill="#444"/>' },
      { title: 'Antennae and Face', instruction: 'Add two little antennae on the head and a smiley face.', tip: 'Antennae are curvy lines with a dot on the end.', svg: '<path d="M120,72 Q108,46 92,38"/><path d="M180,72 Q192,46 208,38"/><circle cx="120" cy="134" r="6" fill="#444"/><circle cx="180" cy="134" r="6" fill="#444"/><path d="M132,150 Q150,160 168,150"/>' },
    ]
  },
  {
    id: 'heart', name: 'Love Heart', category: 'adventure', tier: 1, difficulty: 'starter', emoji: '❤️',
    steps: [
      { title: 'Draw Two Bumps', instruction: 'Draw two rounded bumps side by side at the top, like two little hills.', tip: 'They meet with a little dip in the middle.', svg: '<path d="M150,110 C150,86 128,70 108,70 C86,70 66,88 66,116"/><path d="M150,110 C150,86 172,70 192,70 C214,70 234,88 234,116"/>' },
      { title: 'Draw the Point', instruction: 'From each side, draw a line swooping down to a single point at the bottom.', tip: 'Both lines meet at the very bottom tip.', svg: '<path d="M66,116 C66,170 120,206 150,250 C180,206 234,170 234,116"/>' },
      { title: 'Add a Shine', instruction: 'Draw a small curved line near the top-left so it looks shiny.', tip: 'A little sparkle makes it pop!', svg: '<path d="M96,104 C86,116 82,134 86,152"/>' },
    ]
  },

  // ===================== TIER 2 — Getting There =====================
  withGoalSteps('cat', 'Kitty Cat', 'animals', 2, 'easy', '🐱', [
    { title: 'Draw the Head', instruction: 'Draw a round circle up top for the head.', tip: 'It does not need to be perfect — cats are a bit wonky too!', svg: '<circle cx="150" cy="106" r="48"/>' },
    { title: 'Add the Ears', instruction: 'Draw two pointy triangle ears on top.', tip: 'Like little mountains — wide at the bottom, pointy on top.', svg: '<path d="M116,72 L108,32 L146,62"/><path d="M184,72 L192,32 L154,62"/>' },
    { title: 'Draw the Face', instruction: 'Add two eyes, a triangle nose and a little mouth.', tip: 'Eyes about halfway down, nose just below.', svg: '<circle cx="131" cy="102" r="6" fill="#444"/><circle cx="169" cy="102" r="6" fill="#444"/><path d="M144,116 L156,116 L150,123 Z" fill="#444"/><path d="M150,123 Q143,131 137,127"/><path d="M150,123 Q157,131 163,127"/>' },
    { title: 'Add Whiskers', instruction: 'Draw three whiskers on each side of the nose.', tip: 'Fan them out — up, straight, and down.', svg: '<line x1="112" y1="110" x2="86" y2="106"/><line x1="112" y1="118" x2="86" y2="120"/><line x1="188" y1="110" x2="214" y2="106"/><line x1="188" y1="118" x2="214" y2="120"/>' },
    { title: 'Draw the Body', instruction: 'Below the head, draw a rounded body.', tip: 'A bit wider than the head, overlapping the chin.', svg: '<path d="M96,214 C96,158 118,150 150,150 C182,150 204,158 204,214 C204,252 180,266 150,266 C120,266 96,252 96,214 Z"/>' },
    { title: 'Legs and Tail', instruction: 'Add two little front paws and a swoopy tail curling up the side.', tip: 'The tail curves like a question mark!', svg: '<ellipse cx="126" cy="260" rx="17" ry="12"/><ellipse cx="174" cy="260" rx="17" ry="12"/><path d="M204,214 C252,214 254,150 226,132"/>' },
  ]),
  withGoalSteps('dog', 'Puppy Dog', 'animals', 2, 'easy', '🐶', [
    { title: 'Draw the Head', instruction: 'Draw a big round circle for the puppy head.', tip: 'Dogs have nice chunky round heads.', svg: '<circle cx="150" cy="112" r="52"/>' },
    { title: 'Add Floppy Ears', instruction: 'Draw two floppy ears hanging down each side.', tip: 'They droop down past the cheeks — nice and soft.', svg: '<path d="M104,92 C74,86 60,120 66,158 C70,182 92,186 104,168"/><path d="M196,92 C226,86 240,120 234,158 C230,182 208,186 196,168"/>' },
    { title: 'Draw the Face', instruction: 'Add two eyes, a big oval nose and a happy mouth with a tongue.', tip: 'Dog noses are bigger than cat noses!', svg: '<circle cx="130" cy="106" r="7" fill="#444"/><circle cx="170" cy="106" r="7" fill="#444"/><ellipse cx="150" cy="128" rx="12" ry="9" fill="#444"/><path d="M150,138 L150,150"/><path d="M150,150 Q136,160 130,150"/><path d="M150,150 Q158,166 166,152"/>' },
    { title: 'Draw the Body', instruction: 'Draw a large rounded body below the head.', tip: 'Puppies have chubby little bodies.', svg: '<path d="M104,206 C104,160 124,150 150,150 C176,150 196,160 196,206 C196,246 176,262 150,262 C124,262 104,246 104,206 Z"/>' },
    { title: 'Add the Paws', instruction: 'Draw two little front paws at the bottom.', tip: 'Rounded ovals — stubby and cute.', svg: '<ellipse cx="124" cy="258" rx="17" ry="12"/><ellipse cx="176" cy="258" rx="17" ry="12"/>' },
  ]),
  withGoalSteps('bunny', 'Bunny Rabbit', 'animals', 2, 'easy', '🐰', [
    { title: 'Draw the Head', instruction: 'Draw a round circle for the head.', tip: 'Round like a ball.', svg: '<circle cx="150" cy="118" r="50"/>' },
    { title: 'Add Long Ears', instruction: 'Draw two tall ears sticking up from the top.', tip: 'Bunnies have the longest ears — make them nice and tall!', svg: '<path d="M126,70 C118,20 112,8 122,6 C134,4 138,30 140,74"/><path d="M174,70 C182,20 188,8 178,6 C166,4 162,30 160,74"/>' },
    { title: 'Draw the Face', instruction: 'Add round eyes, a little nose and a small mouth.', tip: 'A tiny Y-shape under the nose makes the mouth.', svg: '<circle cx="131" cy="114" r="6" fill="#444"/><circle cx="169" cy="114" r="6" fill="#444"/><path d="M144,130 L156,130 L150,137 Z" fill="#444"/><path d="M150,137 L150,146 M150,146 Q142,150 140,144 M150,146 Q158,150 160,144"/>' },
    { title: 'Draw the Body', instruction: 'Draw a rounded body below the head.', tip: 'Bunnies are compact — keep it fairly small.', svg: '<path d="M108,210 C108,168 128,158 150,158 C172,158 192,168 192,210 C192,248 172,262 150,262 C128,262 108,248 108,210 Z"/>' },
    { title: 'Add the Feet', instruction: 'Draw two big flat feet at the bottom.', tip: 'Bunny feet are long and rounded.', svg: '<ellipse cx="124" cy="258" rx="18" ry="11"/><ellipse cx="176" cy="258" rx="18" ry="11"/>' },
  ]),
  withGoalSteps('house', 'Cozy House', 'places', 2, 'easy', '🏡', [
    { title: 'Draw the Walls', instruction: 'Draw a big rectangle for the main house.', tip: 'This is the body of the house.', svg: '<rect x="72" y="150" width="156" height="112" rx="6"/>' },
    { title: 'Add the Roof', instruction: 'Draw a big triangle on top, sticking out a little on each side.', tip: 'The point goes up in the middle.', svg: '<path d="M54,156 L150,74 L246,156 Z"/>' },
    { title: 'Add the Door', instruction: 'Draw a tall rectangle in the middle for the door, with a round knob.', tip: 'The door sits on the ground line.', svg: '<rect x="128" y="204" width="44" height="58" rx="4"/><circle cx="162" cy="234" r="4" fill="#444"/>' },
    { title: 'Add Windows', instruction: 'Draw a square window on each side of the door with a cross in it.', tip: 'The cross makes it look like real glass panes.', svg: '<rect x="90" y="172" width="36" height="36" rx="3"/><line x1="108" y1="172" x2="108" y2="208"/><line x1="90" y1="190" x2="126" y2="190"/><rect x="174" y="172" width="36" height="36" rx="3"/><line x1="192" y1="172" x2="192" y2="208"/><line x1="174" y1="190" x2="210" y2="190"/>' },
    { title: 'Add a Chimney', instruction: 'Draw a small chimney on the roof with a puff of smoke.', tip: 'Smoke is little bumpy circles floating up.', svg: '<rect x="188" y="86" width="24" height="52" rx="3"/><circle cx="200" cy="78" r="7"/><circle cx="208" cy="66" r="9"/>' },
  ]),
  withGoalSteps('tree', 'Big Tree', 'nature', 2, 'easy', '🌳', [
    { title: 'Draw the Trunk', instruction: 'Draw a wide trunk with two lines coming up from the ground.', tip: 'Wider at the bottom, a bit narrower up top.', svg: '<path d="M132,278 L128,188 C128,178 172,178 172,188 L168,278 Z"/>' },
    { title: 'Draw the Leaves', instruction: 'Draw three big bumpy circles on top for clouds of leaves.', tip: 'Overlap them so it looks full and fluffy.', svg: '<circle cx="102" cy="150" r="46"/><circle cx="198" cy="150" r="46"/><circle cx="150" cy="106" r="56"/>' },
    { title: 'Add Branches', instruction: 'Draw a couple of little branches peeking out of the trunk.', tip: 'Branches grow up and out.', svg: '<path d="M150,220 C150,200 132,192 120,196"/><path d="M150,206 C150,188 170,182 182,188"/>' },
    { title: 'Add Some Fruit', instruction: 'Dot a few little round fruits in the leaves.', tip: 'Apples, cherries — whatever you like!', svg: '<circle cx="118" cy="130" r="6"/><circle cx="180" cy="122" r="6"/><circle cx="150" cy="160" r="6"/>' },
  ]),
  withGoalSteps('rainbow', 'Rainbow', 'nature', 2, 'easy', '🌈', [
    { title: 'Draw the Big Arc', instruction: 'Draw a big arch from the bottom-left, up high, and down to the bottom-right.', tip: 'Like a giant upside-down U.', svg: '<path d="M40,240 A110 110 0 0 1 260,240" stroke-width="3"/>' },
    { title: 'Add More Arcs', instruction: 'Draw more arches inside the first, each a bit smaller.', tip: 'Keep them evenly spaced apart.', svg: '<path d="M62,240 A88 88 0 0 1 238,240" stroke-width="3"/><path d="M84,240 A66 66 0 0 1 216,240" stroke-width="3"/><path d="M106,240 A44 44 0 0 1 194,240" stroke-width="3"/>' },
    { title: 'Add Clouds', instruction: 'Draw a fluffy cloud at each end of the rainbow.', tip: 'Clouds are bumpy overlapping circles.', svg: '<ellipse cx="62" cy="250" rx="34" ry="22"/><circle cx="44" cy="244" r="18"/><circle cx="80" cy="244" r="20"/><ellipse cx="238" cy="250" rx="34" ry="22"/><circle cx="220" cy="244" r="20"/><circle cx="256" cy="244" r="18"/>' },
  ]),
  withGoalSteps('cupcake', 'Cupcake', 'food', 2, 'easy', '🧁', [
    { title: 'Draw the Wrapper', instruction: 'Draw a shape that is wide at the top and narrower at the bottom.', tip: 'Like a flowerpot or an upside-down triangle with the point cut off.', svg: '<path d="M96,182 L108,268 L192,268 L204,182 Z"/><line x1="128" y1="188" x2="132" y2="266"/><line x1="150" y1="188" x2="150" y2="266"/><line x1="172" y1="188" x2="168" y2="266"/>' },
    { title: 'Add the Frosting', instruction: 'Draw a big bumpy swirl of frosting on top.', tip: 'Wavy bumps make it look soft and yummy.', svg: '<path d="M92,186 C88,150 108,150 118,158 C122,132 150,132 156,152 C164,128 192,134 190,160 C210,152 216,178 208,186 Z"/>' },
    { title: 'Add a Cherry', instruction: 'Draw a round cherry on top with a little stem.', tip: 'Right on the very peak of the frosting.', svg: '<circle cx="150" cy="112" r="15"/><path d="M150,98 C154,84 164,78 174,80"/>' },
    { title: 'Add Sprinkles', instruction: 'Draw tiny lines all over the frosting for sprinkles.', tip: 'Point them in all different directions — that is what makes them fun!', svg: '<line x1="118" y1="166" x2="126" y2="160"/><line x1="140" y1="158" x2="146" y2="165"/><line x1="168" y1="160" x2="176" y2="155"/><line x1="186" y1="172" x2="192" y2="178"/><line x1="128" y1="176" x2="135" y2="181"/>' },
  ]),
  withGoalSteps('icecream', 'Ice Cream', 'food', 2, 'easy', '🍦', [
    { title: 'Draw the Cone', instruction: 'Draw a triangle pointing down for the cone, with criss-cross lines.', tip: 'Pointy at the bottom, like an upside-down triangle.', svg: '<path d="M114,168 L150,286 L186,168 Z"/><line x1="122" y1="182" x2="150" y2="238"/><line x1="178" y1="182" x2="150" y2="238"/><line x1="128" y1="200" x2="172" y2="200"/>' },
    { title: 'First Scoop', instruction: 'Draw a big round scoop sitting on the cone.', tip: 'A little wider than the top of the cone.', svg: '<path d="M112,176 C96,176 100,158 116,158 C112,144 132,138 140,150 C150,140 172,146 168,160 C186,156 190,176 176,178 Z"/>' },
    { title: 'Second Scoop', instruction: 'Draw another round scoop on top — two is better than one!', tip: 'Make this one a circle sitting on the first scoop.', svg: '<circle cx="150" cy="120" r="40"/>' },
    { title: 'Add a Cherry', instruction: 'Pop a little cherry with a stem right on top.', tip: 'The finishing touch!', svg: '<circle cx="150" cy="82" r="12"/><path d="M150,70 C152,58 160,54 168,56"/>' },
  ]),
  withGoalSteps('sailboat', 'Sailboat', 'adventure', 2, 'easy', '⛵', [
    { title: 'Draw the Hull', instruction: 'Draw the boat bottom — a wide shape like a shallow bowl.', tip: 'Flat on top, sloping in at the sides.', svg: '<path d="M64,196 L86,240 L214,240 L236,196 Z"/>' },
    { title: 'Add the Mast', instruction: 'Draw a tall straight line up from the middle of the boat.', tip: 'This pole holds the sails up.', svg: '<line x1="150" y1="68" x2="150" y2="196" stroke-width="3"/>' },
    { title: 'Draw the Sails', instruction: 'Draw a triangle sail on each side of the mast.', tip: 'One bigger, one smaller — both catching the wind.', svg: '<path d="M156,74 L226,190 L156,190 Z"/><path d="M144,90 L82,190 L144,190 Z"/>' },
    { title: 'Add Waves', instruction: 'Draw wavy lines under the boat for the sea, and a sun in the sky.', tip: 'Waves are gentle repeating curves.', svg: '<path d="M30,254 Q54,244 78,254 Q102,264 126,254"/><path d="M150,254 Q174,244 198,254 Q222,264 246,254"/><circle cx="234" cy="66" r="18"/>' },
  ]),

  // ===================== TIER 3 — Nice Work =====================
  withGoalSteps('butterfly', 'Butterfly', 'animals', 3, 'medium', '🦋', [
    { title: 'Draw the Body', instruction: 'Draw a thin tall oval in the middle for the body.', tip: 'Thin like a finger, standing upright.', svg: '<rect x="144" y="128" width="12" height="80" rx="6"/><circle cx="150" cy="124" r="9"/>' },
    { title: 'Upper Wings', instruction: 'Draw two big rounded wings going up and out from the top.', tip: 'These are the biggest wings — like two large petals.', svg: '<path d="M148,150 C110,96 74,84 62,110 C50,138 78,168 120,164 C136,162 146,158 148,150 Z"/><path d="M152,150 C190,96 226,84 238,110 C250,138 222,168 180,164 C164,162 154,158 152,150 Z"/>' },
    { title: 'Lower Wings', instruction: 'Draw two smaller wings below, pointing down and out.', tip: 'Like little teardrops hanging under the big wings.', svg: '<path d="M148,152 C122,178 100,196 96,222 C92,246 122,246 140,222 C148,210 150,190 148,152 Z"/><path d="M152,152 C178,178 200,196 204,222 C208,246 178,246 160,222 C152,210 150,190 152,152 Z"/>' },
    { title: 'Antennae', instruction: 'Draw two curvy antennae from the head, each with a dot on top.', tip: 'They curve gently outwards.', svg: '<path d="M146,116 C138,96 128,86 118,82"/><path d="M154,116 C162,96 172,86 182,82"/><circle cx="116" cy="80" r="4" fill="#444"/><circle cx="184" cy="80" r="4" fill="#444"/>' },
    { title: 'Wing Patterns', instruction: 'Draw circles and dots on the wings to decorate them.', tip: 'Make up your own pattern — butterflies are all different!', svg: '<circle cx="98" cy="122" r="11"/><circle cx="202" cy="122" r="11"/><circle cx="120" cy="220" r="8"/><circle cx="180" cy="220" r="8"/>' },
  ]),
  {
    id: 'fox', name: 'Little Fox', category: 'animals', tier: 3, difficulty: 'medium', emoji: '🦊',
    steps: [
      { title: 'Draw the Head', instruction: 'Draw a rounded head that narrows to a pointy chin at the bottom.', tip: 'Foxes have a pointy little face — like a wide triangle with a round top.', svg: '<path d="M100,104 C100,74 122,58 150,58 C178,58 200,74 200,104 C200,128 186,142 168,150 L150,176 L132,150 C114,142 100,128 100,104 Z"/>' },
      { title: 'Add Pointy Ears', instruction: 'Draw two big pointy triangle ears on top.', tip: 'Fox ears are large and stand straight up.', svg: '<path d="M108,84 L96,28 L150,66"/><path d="M192,84 L204,28 L150,66"/>' },
      { title: 'Draw the Face', instruction: 'Add two eyes, and a little nose at the pointy chin.', tip: 'The white muzzle sits in the lower middle of the face.', svg: '<path d="M150,176 L124,140 C136,152 164,152 176,140 Z"/><circle cx="131" cy="106" r="7" fill="#444"/><circle cx="169" cy="106" r="7" fill="#444"/><path d="M143,150 L157,150 L150,159 Z" fill="#444"/>' },
      { title: 'Draw the Body', instruction: 'Draw a rounded sitting body below the head.', tip: 'A cosy egg shape.', svg: '<path d="M104,206 C104,164 124,156 150,156 C176,156 196,164 196,206 C196,244 176,258 150,258 C124,258 104,244 104,206 Z"/>' },
      { title: 'Legs and Tail', instruction: 'Add two little front paws and a big bushy tail curving up one side.', tip: 'The tail is huge and fluffy with a white tip!', svg: '<rect x="124" y="238" width="16" height="24" rx="7"/><rect x="160" y="238" width="16" height="24" rx="7"/><path d="M196,206 C260,196 262,120 224,120 C246,150 214,178 176,182"/>' },
    ]
  },
  {
    id: 'penguin', name: 'Penguin', category: 'animals', tier: 3, difficulty: 'medium', emoji: '🐧',
    steps: [
      { title: 'Draw the Body', instruction: 'Draw a tall rounded body — wider at the bottom like a bowling pin.', tip: 'Head and body are one smooth shape.', svg: '<path d="M92,168 C92,96 116,58 150,58 C184,58 208,96 208,168 C208,232 182,268 150,268 C118,268 92,232 92,168 Z"/>' },
      { title: 'Add the Belly', instruction: 'Draw a big rounded white tummy shape inside the body.', tip: 'Leave a border around the edge for the black back.', svg: '<path d="M120,158 C120,110 134,84 150,84 C166,84 180,110 180,158 C180,210 168,246 150,246 C132,246 120,210 120,158 Z"/>' },
      { title: 'Add the Wings', instruction: 'Draw a little wing (flipper) on each side.', tip: 'They hang down like small paddles.', svg: '<path d="M96,150 C74,158 66,188 74,214"/><path d="M204,150 C226,158 234,188 226,214"/>' },
      { title: 'Face and Beak', instruction: 'Add two eyes and a little triangle beak.', tip: 'The beak points down in the middle of the face.', svg: '<circle cx="132" cy="130" r="7" fill="#444"/><circle cx="168" cy="130" r="7" fill="#444"/><path d="M138,142 L162,142 L150,158 Z"/>' },
      { title: 'Add the Feet', instruction: 'Draw two little webbed feet at the very bottom.', tip: 'Wide and flat, like small flippers.', svg: '<path d="M126,266 C120,278 132,282 144,278 L146,262 Z"/><path d="M174,266 C180,278 168,282 156,278 L154,262 Z"/>' },
    ]
  },
  {
    id: 'owl', name: 'Wise Owl', category: 'animals', tier: 3, difficulty: 'medium', emoji: '🦉',
    steps: [
      { title: 'Draw the Body', instruction: 'Draw a big rounded egg shape for the owl.', tip: 'Owls are round and puffy — head and body all in one.', svg: '<path d="M84,150 C84,92 112,68 150,68 C188,68 216,92 216,150 C216,214 186,258 150,258 C114,258 84,214 84,150 Z"/>' },
      { title: 'Add Ear Tufts', instruction: 'Draw two little pointy tufts on top of the head.', tip: 'Small triangles, like sleepy horns.', svg: '<path d="M96,84 L118,120 L84,116 Z"/><path d="M204,84 L182,120 L216,116 Z"/>' },
      { title: 'Big Eyes', instruction: 'Draw two big circles for eyes, with a dot inside each.', tip: 'Owls have HUGE eyes — that is what makes them owls!', svg: '<circle cx="120" cy="132" r="30"/><circle cx="180" cy="132" r="30"/><circle cx="120" cy="134" r="12" fill="#444"/><circle cx="180" cy="134" r="12" fill="#444"/>' },
      { title: 'Add the Beak', instruction: 'Draw a little triangle beak between the eyes.', tip: 'Pointing down, right in the middle.', svg: '<path d="M138,150 L162,150 L150,168 Z"/>' },
      { title: 'Wings and Feet', instruction: 'Draw a curved wing on each side and two little feet at the bottom.', tip: 'Wings hug the body; feet are tiny claws.', svg: '<path d="M108,182 C96,160 92,132 104,116"/><path d="M192,182 C204,160 208,132 196,116"/><path d="M132,256 L128,270 M142,256 L142,270 M158,256 L158,270 M168,256 L172,270"/>' },
    ]
  },
  withGoalSteps('rocket', 'Space Rocket', 'adventure', 3, 'medium', '🚀', [
    { title: 'Draw the Body', instruction: 'Draw a tall rounded body — like a long capsule.', tip: 'Straight sides, curved in at the top.', svg: '<path d="M124,120 Q124,60 150,26 Q176,60 176,120 L176,224 Q150,236 124,224 Z"/>' },
    { title: 'Add the Fins', instruction: 'Draw a fin sticking out at each side of the base.', tip: 'They look like little wings or triangles.', svg: '<path d="M124,196 L82,252 L124,236 Z"/><path d="M176,196 L218,252 L176,236 Z"/>' },
    { title: 'Add the Window', instruction: 'Draw a round window (porthole) in the middle, with a smaller circle inside.', tip: 'This is where the astronaut looks out.', svg: '<circle cx="150" cy="150" r="24"/><circle cx="150" cy="150" r="17"/>' },
    { title: 'Add Flames', instruction: 'Draw wavy flames coming out the bottom.', tip: 'Pointy and wiggly, getting thinner at the ends.', svg: '<path d="M126,228 Q150,300 174,228"/><path d="M138,230 Q150,282 162,230"/>' },
    { title: 'Add Stars', instruction: 'Scatter a few stars and sparkles around the rocket.', tip: 'It is flying through space, after all!', svg: '<path d="M58,60 l3,-8 3,8 8,3 -8,3 -3,8 -3,-8 -8,-3 z" fill="#444"/><path d="M242,86 l3,-8 3,8 8,3 -8,3 -3,8 -3,-8 -8,-3 z" fill="#444"/><circle cx="70" cy="150" r="3" fill="#444"/>' },
  ]),

  // ===================== TIER 4 — Impressive =====================
  withGoalSteps('castle', 'Magic Castle', 'places', 4, 'hard', '🏰', [
    { title: 'Draw the Towers', instruction: 'Draw a tall rectangle tower on the left, right, and a taller one in the middle.', tip: 'Three towers of different heights.', svg: '<rect x="52" y="128" width="52" height="142"/><rect x="196" y="128" width="52" height="142"/><rect x="118" y="96" width="64" height="174"/>' },
    { title: 'Connect the Walls', instruction: 'Draw walls linking the towers along the bottom.', tip: 'A lower rectangle joining them together.', svg: '<rect x="96" y="176" width="108" height="94"/>' },
    { title: 'Pointed Roofs', instruction: 'Draw a pointy triangle roof on top of each tower.', tip: 'Like witch hats — nice and sharp.', svg: '<path d="M46,130 L78,74 L110,130 Z"/><path d="M190,130 L222,74 L254,130 Z"/><path d="M110,98 L150,32 L190,98 Z"/>' },
    { title: 'Gate and Windows', instruction: 'Draw a big arched gate in the middle wall, and battlement squares on top.', tip: 'The arch is like an upside-down U.', svg: '<path d="M132,270 L132,224 A18 18 0 0 1 168,224 L168,270 Z"/><rect x="96" y="164" width="14" height="14"/><rect x="120" y="164" width="14" height="14"/><rect x="166" y="164" width="14" height="14"/><rect x="190" y="164" width="14" height="14"/>' },
    { title: 'Raise the Flags', instruction: 'Draw a little flag flying from the tip of each roof.', tip: 'Small triangles, all fluttering the same way.', svg: '<line x1="78" y1="74" x2="78" y2="52"/><path d="M78,52 L98,58 L78,64 Z" fill="#444"/><line x1="222" y1="74" x2="222" y2="52"/><path d="M222,52 L242,58 L222,64 Z" fill="#444"/><line x1="150" y1="32" x2="150" y2="12"/><path d="M150,12 L172,19 L150,26 Z" fill="#444"/>' },
  ]),
  withGoalSteps('unicorn', 'Magical Unicorn', 'adventure', 4, 'hard', '🦄', [
    { title: 'Draw the Head', instruction: 'Draw a big round head with a pointy ear on the side.', tip: 'A friendly round face to start.', svg: '<circle cx="150" cy="108" r="50"/><path d="M116,80 L104,44 L142,66"/>' },
    { title: 'Add the Horn', instruction: 'Draw a tall pointy horn on the forehead with little lines across it.', tip: 'The lines show the magic spiral!', svg: '<path d="M150,60 L138,10 L166,58 Z"/><line x1="145" y1="46" x2="158" y2="44"/><line x1="148" y1="34" x2="159" y2="33"/><line x1="151" y1="22" x2="160" y2="22"/>' },
    { title: 'Draw the Face', instruction: 'Add a sparkly eye and a rosy cheek.', tip: 'Unicorns have big gentle eyes.', svg: '<path d="M158,104 A7 8 0 0 1 158,120" fill="#444"/><path d="M120,102 Q126,92 134,102"/>' },
    { title: 'Body and Legs', instruction: 'Draw a rounded body below with two little feet.', tip: 'A cute chibi pony body.', svg: '<path d="M108,208 C108,166 128,156 150,156 C172,156 192,166 192,208 C192,246 172,260 150,260 C128,260 108,246 108,208 Z"/><ellipse cx="126" cy="258" rx="14" ry="10"/><ellipse cx="174" cy="258" rx="14" ry="10"/>' },
    { title: 'Rainbow Mane and Tail', instruction: 'Draw flowing wavy locks for the mane and a swishy tail. Add sparkles!', tip: 'Imagine every strand is a different rainbow colour.', svg: '<path d="M160,66 C186,60 196,86 182,104"/><path d="M164,74 C186,72 192,96 180,112"/><path d="M196,206 C240,206 246,150 220,138 C232,160 210,182 178,184"/><path d="M60,90 l3,-8 3,8 8,3 -8,3 -3,8 -3,-8 -8,-3 z" fill="#444"/>' },
  ]),
  {
    id: 'dragon', name: 'Baby Dragon', category: 'adventure', tier: 4, difficulty: 'hard', emoji: '🐉',
    steps: [
      { title: 'Draw the Head', instruction: 'Draw a big round head with two little horns on top.', tip: 'Friendly baby dragon — round and cute.', svg: '<circle cx="150" cy="110" r="50"/><path d="M118,86 L108,58 L132,78 Z"/><path d="M182,86 L192,58 L168,78 Z"/>' },
      { title: 'Draw the Face', instruction: 'Add two big eyes and a wide smile with little nostrils.', tip: 'A big grin makes the dragon look friendly, not scary!', svg: '<circle cx="130" cy="104" r="9"/><circle cx="170" cy="104" r="9"/><circle cx="131" cy="106" r="4" fill="#444"/><circle cx="171" cy="106" r="4" fill="#444"/><path d="M150,150 C126,150 116,132 118,120 C140,128 160,128 182,120 C184,132 174,150 150,150 Z"/>' },
      { title: 'Draw the Body', instruction: 'Draw a rounded body with a tummy shape inside.', tip: 'The belly has little lines like a dinosaur.', svg: '<path d="M104,206 C104,158 126,148 150,148 C174,148 196,158 196,206 C196,246 174,262 150,262 C126,262 104,246 104,206 Z"/><path d="M126,200 C126,176 138,168 150,168 C162,168 174,176 174,200 C174,232 162,252 150,252 C138,252 126,232 126,200 Z"/>' },
      { title: 'Add a Wing', instruction: 'Draw a bat-like wing on the side.', tip: 'A curve with a couple of points along the edge.', svg: '<path d="M112,150 C70,120 44,128 46,158 C48,186 84,192 116,180 Z"/><path d="M108,156 C82,142 66,148 66,164"/>' },
      { title: 'Tail and Feet', instruction: 'Add two little feet and a curvy tail with a spike on the end.', tip: 'The tail swishes out to the side.', svg: '<ellipse cx="126" cy="258" rx="15" ry="10"/><ellipse cx="174" cy="258" rx="15" ry="10"/><path d="M196,214 C250,220 258,168 232,150"/><path d="M244,158 l14,-10 -2,16 14,4 -14,8 2,14 -14,-10 Z"/>' },
    ]
  },
  {
    id: 'robot', name: 'Robot', category: 'adventure', tier: 4, difficulty: 'hard', emoji: '🤖',
    steps: [
      { title: 'Draw the Head', instruction: 'Draw a rounded square for the head, with an antenna and a ball on top.', tip: 'Robots have nice boxy heads.', svg: '<rect x="94" y="60" width="112" height="86" rx="20"/><line x1="150" y1="60" x2="150" y2="34"/><circle cx="150" cy="28" r="8"/>' },
      { title: 'Add the Face Screen', instruction: 'Draw a dark rectangle screen with two glowing eyes and a smile.', tip: 'The screen is the robot’s face.', svg: '<rect x="108" y="76" width="84" height="54" rx="12"/><circle cx="132" cy="100" r="10" fill="#444"/><circle cx="168" cy="100" r="10" fill="#444"/><path d="M134,116 Q150,126 166,116"/>' },
      { title: 'Draw the Body', instruction: 'Draw a rounded rectangle body under the head.', tip: 'Add some buttons and a little screen panel.', svg: '<rect x="102" y="152" width="96" height="86" rx="16"/><circle cx="128" cy="178" r="7"/><circle cx="150" cy="178" r="7"/><circle cx="172" cy="178" r="7"/><rect x="120" y="198" width="60" height="26" rx="7"/>' },
      { title: 'Add the Arms', instruction: 'Draw an arm on each side with a round hand.', tip: 'Bendy tube arms with ball hands.', svg: '<rect x="70" y="160" width="20" height="48" rx="10"/><rect x="210" y="160" width="20" height="48" rx="10"/><circle cx="80" cy="216" r="11"/><circle cx="220" cy="216" r="11"/>' },
      { title: 'Add the Legs', instruction: 'Draw two little legs at the bottom.', tip: 'Short and sturdy so the robot can stand.', svg: '<rect x="116" y="238" width="24" height="28" rx="8"/><rect x="160" y="238" width="24" height="28" rx="8"/>' },
    ]
  },
  {
    id: 'koala', name: 'Koala', category: 'animals', tier: 4, difficulty: 'hard', emoji: '🐨',
    steps: [
      { title: 'Draw the Head', instruction: 'Draw a big round head.', tip: 'Koalas have lovely big round heads.', svg: '<circle cx="150" cy="128" r="54"/>' },
      { title: 'Add Fluffy Ears', instruction: 'Draw two big fluffy round ears on each side.', tip: 'They are almost as big as the head — nice and fuzzy!', svg: '<path d="M92,120 C58,110 46,74 66,58 C90,40 118,64 116,96 Z"/><path d="M208,120 C242,110 254,74 234,58 C210,40 182,64 184,96 Z"/>' },
      { title: 'Draw the Face', instruction: 'Add two eyes and a big oval nose.', tip: 'The nose is the koala’s best feature — nice and big!', svg: '<circle cx="126" cy="122" r="9" fill="#444"/><circle cx="174" cy="122" r="9" fill="#444"/><path d="M132,140 C132,128 168,128 168,140 C168,160 150,170 150,170 C150,170 132,160 132,140 Z"/>' },
      { title: 'Draw the Body', instruction: 'Draw a rounded body below the head.', tip: 'A cosy round tummy.', svg: '<path d="M108,214 C108,168 128,156 150,156 C172,156 192,168 192,214 C192,250 172,264 150,264 C128,264 108,250 108,214 Z"/>' },
      { title: 'Add the Arms', instruction: 'Draw two little arms as if the koala is hugging.', tip: 'Koalas love to hug a branch!', svg: '<path d="M100,214 C90,196 96,178 112,178"/><path d="M200,214 C210,196 204,178 188,178"/>' },
    ]
  },

  // ===================== TIER 5 — Master =====================
  {
    id: 'undersea', name: 'Under the Sea', category: 'places', tier: 5, difficulty: 'expert', emoji: '🐟',
    steps: [
      { title: 'The Sea Floor', instruction: 'Draw a wavy line low across the paper for the sandy bottom.', tip: 'Everything else sits above the sand.', svg: '<path d="M0,244 C50,224 90,254 150,240 C210,226 250,252 300,238"/>' },
      { title: 'Add Seaweed', instruction: 'Draw tall wiggly seaweed growing up from the sand.', tip: 'Wavy lines that sway side to side.', svg: '<path d="M56,250 C44,220 68,206 56,176 C48,152 66,140 58,120"/><path d="M78,252 C90,224 70,208 84,182 C92,166 78,152 88,136"/><path d="M250,252 C262,226 240,210 254,184 C262,168 248,154 258,138"/>' },
      { title: 'Draw a Big Fish', instruction: 'Draw a fish in the middle — a rounded shape with a fan tail.', tip: 'Give it an eye and a little smile.', svg: '<path d="M124,206 L172,206 L188,222 L172,238 L124,238 L110,222 Z"/><path d="M172,222 L196,206 L190,222 L196,238 Z"/><circle cx="132" cy="220" r="4" fill="#444"/>' },
      { title: 'Add More Sea Life', instruction: 'Draw a smaller fish up high and a starfish on the sand.', tip: 'A starfish is a chubby five-pointed star.', svg: '<path d="M186,120 L214,120 L224,132 L214,144 L186,144 L176,132 Z"/><path d="M214,132 L232,120 L228,132 L232,144 Z"/><path d="M96,150 L88,138 L104,132 L108,116 L118,130 L134,128 L124,142 L130,158 L114,152 Z"/>' },
      { title: 'Add Bubbles', instruction: 'Draw little circles floating up for bubbles.', tip: 'Different sizes drifting to the surface.', svg: '<circle cx="230" cy="70" r="7"/><circle cx="248" cy="52" r="5"/><circle cx="150" cy="60" r="6"/><circle cx="90" cy="88" r="5"/>' },
    ]
  },
  {
    id: 'cottage', name: 'Cottage in the Woods', category: 'places', tier: 5, difficulty: 'expert', emoji: '🌲',
    steps: [
      { title: 'The Ground', instruction: 'Draw a gently rolling line across the middle for the grassy ground.', tip: 'The sky is above, the grass is below.', svg: '<path d="M0,196 C60,178 120,190 180,182 C240,175 280,190 300,184"/>' },
      { title: 'Build the Cottage', instruction: 'Draw a rectangle for the walls and a triangle roof on top.', tip: 'Just like the house — walls then roof.', svg: '<rect x="108" y="170" width="104" height="76"/><path d="M96,174 L160,120 L224,174 Z"/>' },
      { title: 'Doors and Windows', instruction: 'Add a door, two windows and a chimney with smoke.', tip: 'Cross lines in the windows make them look like glass.', svg: '<rect x="146" y="200" width="30" height="46" rx="2"/><rect x="118" y="188" width="26" height="26" rx="2"/><line x1="131" y1="188" x2="131" y2="214"/><line x1="118" y1="201" x2="144" y2="201"/><rect x="180" y="188" width="26" height="26" rx="2"/><line x1="193" y1="188" x2="193" y2="214"/><line x1="180" y1="201" x2="206" y2="201"/><rect x="196" y="118" width="18" height="40" rx="2"/>' },
      { title: 'Plant the Trees', instruction: 'Draw tall pine trees on each side — stacked triangles on a trunk.', tip: 'Three triangles getting wider as they go down.', svg: '<rect x="44" y="150" width="16" height="46"/><path d="M52,96 L86,150 L18,150 Z"/><path d="M52,120 L82,166 L22,166 Z"/><path d="M52,142 L88,192 L16,192 Z"/><rect x="242" y="160" width="14" height="36"/><path d="M249,116 L278,164 L220,164 Z"/><path d="M249,140 L282,192 L216,192 Z"/>' },
      { title: 'Sun and Flowers', instruction: 'Add a sun in the sky, a cloud, a path to the door and little flowers.', tip: 'The finishing touches that bring the scene to life!', svg: '<circle cx="246" cy="56" r="20"/><ellipse cx="72" cy="60" rx="28" ry="15"/><path d="M150,246 C140,262 120,268 108,272"/><path d="M172,246 C184,260 200,266 214,270"/><circle cx="96" cy="240" r="5"/><circle cx="228" cy="246" r="5"/>' },
    ]
  },
].map((d) => (d.goal ? d : { ...d, goal: goals[d.id] }));

// Helper so entries can be written compactly with their goal attached.
function withGoalSteps(id, name, category, tier, difficulty, emoji, steps) {
  return { id, name, category, tier, difficulty, emoji, steps, goal: goals[id] };
}

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
