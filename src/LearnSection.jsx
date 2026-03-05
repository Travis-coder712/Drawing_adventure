import { useState } from 'react';

const LEVELS = [
  {
    id: 1,
    title: 'Lines & Shapes',
    subtitle: 'Every great drawing starts here!',
    emoji: '\u2B55',
    color: '#22c55e',
    unlockText: 'Start here!',
    intro: "Everything you see can be broken down into simple shapes. A cat's head? A circle. A house? A rectangle with a triangle on top. Master these basic building blocks and you can draw anything!",
    skills: [
      'Drawing straight lines (horizontal, vertical, diagonal)',
      'Drawing smooth curves and wavy lines',
      'Circles, ovals, and ellipses',
      'Squares, rectangles, and triangles',
      'Combining 2-3 shapes together',
    ],
    exercises: [
      {
        name: 'Line Warm-Up',
        description: 'Fill a page with rows of straight lines, then wavy lines, then zigzags. Try to keep them even!',
      },
      {
        name: 'Circle Challenge',
        description: 'Draw 20 circles of different sizes. Try to make each one as round as possible without lifting your pencil.',
      },
      {
        name: 'Shape Parade',
        description: 'Draw a row of circles, a row of squares, a row of triangles, then a row of ovals. Fill the whole page!',
      },
    ],
    tips: [
      'Draw from your shoulder, not your wrist - it gives you smoother lines',
      "Use light pencil pressure at first so you can erase easily",
      "Don't worry about perfection - wobbly circles have character!",
      'Practice drawing circles in BOTH directions (clockwise and counter-clockwise)',
    ],
    tryDrawings: ['star', 'flower', 'apple'],
    videos: [
      {
        title: 'Art for Kids Hub - How to Draw Basic Shapes',
        url: 'https://www.youtube.com/user/ArtforKidsHub',
        channel: 'Art for Kids Hub',
        description: 'Rob and his kids teach 3,000+ step-by-step lessons starting with simple shapes',
      },
      {
        title: 'Muffalo Potato - Draw with Numbers & Letters',
        url: 'https://www.youtube.com/c/MuffaloPotato',
        channel: 'Muffalo Potato',
        description: 'Learn to draw using only numbers and letters - a unique approach perfect for beginners!',
      },
    ],
  },
  {
    id: 2,
    title: 'Building with Shapes',
    subtitle: 'Turn shapes into real things!',
    emoji: '\uD83C\uDFD7\uFE0F',
    color: '#3b82f6',
    unlockText: 'Ready for more!',
    intro: "Now that you can draw shapes, it's time to combine them! Almost everything can be built from basic shapes. A dog? Start with circles for the head and body, ovals for ears, rectangles for legs. It's like building with blocks!",
    skills: [
      'Breaking objects into basic shapes',
      'Overlapping shapes to build forms',
      'Drawing symmetry (making both sides match)',
      'Connecting shapes smoothly',
      'Using guide lines that you erase later',
    ],
    exercises: [
      {
        name: 'Shape Breakdown',
        description: 'Look at objects around your room. Can you see what shapes make them up? Draw the shapes you see!',
      },
      {
        name: 'Build-a-Face',
        description: 'Draw an oval, add a cross in the middle for guide lines. Place circles for eyes on the horizontal line, nose and mouth below.',
      },
      {
        name: 'Animal Builder',
        description: 'Pick an animal and try to draw it using ONLY circles, ovals, and triangles. No curves yet - just shapes!',
      },
    ],
    tips: [
      'Start with light "skeleton" shapes, then add details on top',
      'Use a guide line down the middle to keep faces symmetrical',
      'Draw the biggest shapes first, then add smaller ones',
      "It's OK to erase and adjust - professional artists do this constantly!",
    ],
    tryDrawings: ['cat', 'dog', 'bunny', 'house'],
    videos: [
      {
        title: 'Art for Kids Hub - How to Draw Animals',
        url: 'https://www.youtube.com/user/ArtforKidsHub',
        channel: 'Art for Kids Hub',
        description: 'Hundreds of step-by-step animal drawing tutorials perfect for this level',
      },
      {
        title: 'Draw So Cute - Cute Animal Tutorials',
        url: 'https://www.youtube.com/c/DrawSoCute',
        channel: 'Draw So Cute',
        description: 'Learn to draw adorable cartoon versions of animals and characters',
      },
      {
        title: 'Draw Kids Draw - Character Drawing',
        url: 'https://www.youtube.com/c/DrawKidsDraw',
        channel: 'Draw Kids Draw',
        description: 'Draw cartoon versions of favourite characters from games and movies',
      },
    ],
  },
  {
    id: 3,
    title: 'Adding Details & Personality',
    subtitle: 'Make your drawings come alive!',
    emoji: '\u2728',
    color: '#8b5cf6',
    unlockText: "Let's get fancy!",
    intro: "Details are what make a drawing special and unique. A simple circle becomes a happy face with just a few lines! Learn to add expressions, textures, patterns, and small touches that bring your art to life.",
    skills: [
      'Drawing facial expressions (happy, sad, surprised, silly)',
      'Adding texture (fur, scales, bricks, leaves)',
      'Creating patterns and decorations',
      'Drawing hair and clothing details',
      'Making backgrounds and settings',
    ],
    exercises: [
      {
        name: 'Expression Sheet',
        description: 'Draw 9 circles (3x3 grid). Give each face a different expression: happy, sad, angry, surprised, sleepy, silly, scared, excited, confused!',
      },
      {
        name: 'Texture Squares',
        description: 'Draw 6 squares. Fill each with a different texture: fur (short lines), scales (U-shapes), bricks (rectangles), grass (spiky lines), water (wavy lines), wood (curved lines).',
      },
      {
        name: 'Detail Detective',
        description: 'Pick one of your favourite drawings and add as many small details as you can: patterns on clothing, flowers in grass, clouds in sky, spots on animals.',
      },
    ],
    tips: [
      'Eyes are the most expressive part - experiment with size, shape, and eyebrow position',
      'Texture is just a pattern repeated many times - keep it consistent',
      "Less is sometimes more - you don't need to detail everything",
      'Look at real objects for inspiration when adding details',
    ],
    tryDrawings: ['butterfly', 'castle', 'fish', 'cupcake'],
    videos: [
      {
        title: 'Art for Kids Hub - Drawing Expressions',
        url: 'https://www.youtube.com/user/ArtforKidsHub',
        channel: 'Art for Kids Hub',
        description: 'Learn to draw different facial expressions and emotions',
      },
      {
        title: 'Draw with Jazza - Character Design for Beginners',
        url: 'https://www.youtube.com/c/Jazza',
        channel: 'Draw with Jazza',
        description: 'Fun tutorials on character design, expressions, and adding personality to drawings',
      },
    ],
  },
  {
    id: 4,
    title: 'Light & Shadow',
    subtitle: 'Make flat drawings look 3D!',
    emoji: '\uD83C\uDF1E',
    color: '#f59e0b',
    unlockText: 'Going 3D!',
    intro: "This is where the magic happens! By adding shading (light and dark areas), you can make a flat circle look like a round ball. Understanding light and shadow is the secret that makes drawings look real and impressive.",
    skills: [
      'Understanding where light comes from in a drawing',
      'Creating a value scale (light to dark)',
      'Shading basic shapes to look 3D (circle to sphere, square to cube)',
      'Drawing cast shadows',
      'Blending and smooth shading techniques',
    ],
    exercises: [
      {
        name: 'Value Scale',
        description: 'Draw 5 boxes in a row. Leave the first white, make the last one as dark as you can, and shade the middle ones in between. This is your value scale!',
      },
      {
        name: 'Sphere Shading',
        description: "Draw a circle. Imagine a lamp above and to the left. The top-left stays light, and it gets darker towards the bottom-right. Add a shadow underneath. Now it's a ball!",
      },
      {
        name: '3D Shapes',
        description: 'Draw a circle, square, and triangle. Turn each one 3D with shading: the circle becomes a sphere, the square becomes a cube, the triangle becomes a cone.',
      },
    ],
    tips: [
      'Pick ONE direction for your light source and keep it consistent',
      'Shade by building up layers of light pencil strokes, not pressing hard',
      'The darkest shadow is right where an object touches the ground',
      'Squint your eyes at real objects to see the light and dark areas more easily',
      'Use the side of your pencil for smoother, wider shading',
    ],
    tryDrawings: ['apple', 'icecream', 'sailboat'],
    videos: [
      {
        title: 'Circle Line Art School - How to Shade',
        url: 'https://www.youtube.com/c/CircleLineArtSchool',
        channel: 'Circle Line Art School',
        description: 'Clear tutorials on shading, perspective and making drawings look 3D',
      },
      {
        title: 'Draw with Steve Harpster - Shading for Kids',
        url: 'https://www.youtube.com/c/Harptoons',
        channel: 'Steve Harpster',
        description: 'Fun and accessible shading lessons for young artists',
      },
    ],
  },
  {
    id: 5,
    title: 'Proportion & Perspective',
    subtitle: 'Make things the right size!',
    emoji: '\uD83D\uDCCF',
    color: '#ec4899',
    unlockText: 'Level up!',
    intro: "Have you ever drawn a person where the head was too big or the arms were too short? That's a proportion problem! And have you noticed how train tracks seem to meet in the distance? That's perspective! These skills make your drawings look realistic and professional.",
    skills: [
      'Understanding proportions (how big things are compared to each other)',
      'Using head-heights to measure people',
      'Drawing things smaller when they are far away',
      'Basic one-point perspective',
      'Foreshortening (when things point toward you)',
    ],
    exercises: [
      {
        name: 'Proportion Practice',
        description: "Draw a person using the rule: the body is about 6-7 heads tall. Draw the head first, then use it as your measuring tool!",
      },
      {
        name: 'Far Away, Close Up',
        description: 'Draw a road going into the distance. Add trees on both sides - make them BIG at the front and TINY at the back. Add a house far away (tiny) and one close (big).',
      },
      {
        name: 'Room Drawing',
        description: 'Put a dot in the centre of your paper (vanishing point). Draw lines going from each corner to the dot. Now add furniture - everything gets smaller toward the dot!',
      },
    ],
    tips: [
      "Hold your pencil at arm's length and use your thumb to measure proportions of real objects",
      'Things overlap when they are in front of other things - this creates depth',
      'Distant objects have less detail and lighter values',
      'Practice by copying photos - they already have the perspective figured out!',
    ],
    tryDrawings: ['house', 'castle', 'rocket', 'sailboat'],
    videos: [
      {
        title: 'Circle Line Art School - Perspective Drawing',
        url: 'https://www.youtube.com/c/CircleLineArtSchool',
        channel: 'Circle Line Art School',
        description: 'Excellent perspective tutorials from basic to advanced',
      },
      {
        title: 'Mark Crilley - Drawing Proportions & Realism',
        url: 'https://www.youtube.com/c/markcrilley',
        channel: 'Mark Crilley',
        description: 'Professional illustrator shares proportion and realism techniques',
      },
    ],
  },
  {
    id: 6,
    title: 'Drawing from Imagination',
    subtitle: 'Create your own worlds!',
    emoji: '\uD83D\uDE80',
    color: '#06b6d4',
    unlockText: "You're an artist!",
    intro: "You've learned the fundamentals! Now it's time to combine everything and create drawings straight from your imagination. Design your own characters, invent fantasy creatures, draw scenes from stories in your head. The only limit is your creativity!",
    skills: [
      'Designing original characters',
      'Creating scenes and compositions',
      'Telling stories through drawings',
      'Developing your own unique style',
      'Drawing from your imagination without a reference',
    ],
    exercises: [
      {
        name: 'Character Creator',
        description: 'Invent your own character! Give them a name, a personality, special clothes, and a pet. Draw them in three different poses.',
      },
      {
        name: 'Story Scene',
        description: 'Think of your favourite story moment (from a book, movie, or your imagination). Draw that scene with a background, characters, and details!',
      },
      {
        name: 'Creature Mashup',
        description: 'Combine two animals into one fantasy creature (e.g., a cat + fish = catfish creature!). Draw it with details, a habitat, and a name!',
      },
      {
        name: 'Daily Sketch Challenge',
        description: 'Draw one small sketch every day for a week. Monday: your pet, Tuesday: your room, Wednesday: a dream, Thursday: a superhero, Friday: a landscape, Weekend: your choice!',
      },
    ],
    tips: [
      'Keep a sketchbook and draw a little bit every day - even 10 minutes helps!',
      "Don't compare your art to others - your unique style is what makes your art special",
      "It's OK to use references - even professional artists look at photos and other art",
      'Try different tools: coloured pencils, markers, watercolours, digital drawing',
      'Share your art with friends and family - their encouragement fuels your creativity!',
    ],
    tryDrawings: ['unicorn', 'rainbow', 'butterfly', 'rocket'],
    videos: [
      {
        title: 'Draw with Jazza - Character Design & Creativity',
        url: 'https://www.youtube.com/c/Jazza',
        channel: 'Draw with Jazza',
        description: 'Amazing tutorials on designing characters and being creative with drawing',
      },
      {
        title: 'Doodle Academy - Drawing & Painting Projects',
        url: 'https://www.youtube.com/c/DoodleAcademy1',
        channel: 'Doodle Academy',
        description: 'Step-by-step drawing and painting projects to inspire creativity',
      },
      {
        title: 'Mark Crilley - Manga & Illustration Tutorials',
        url: 'https://www.youtube.com/c/markcrilley',
        channel: 'Mark Crilley',
        description: 'From manga to realism, a huge library of drawing techniques and styles',
      },
    ],
  },
];

const TOP_CHANNELS = [
  {
    name: 'Art for Kids Hub',
    emoji: '\uD83C\uDFA8',
    url: 'https://www.youtube.com/user/ArtforKidsHub',
    description: 'The #1 channel for kids! Rob and his family teach 3,000+ step-by-step lessons. New videos 5 days a week.',
    best: 'Best for: Ages 5-12, complete beginners',
  },
  {
    name: 'Draw So Cute',
    emoji: '\uD83D\uDC96',
    url: 'https://www.youtube.com/c/DrawSoCute',
    description: 'Adorable cartoon-style drawing tutorials. Animals, food, characters and more!',
    best: 'Best for: Ages 6-12, cute art style lovers',
  },
  {
    name: 'Muffalo Potato',
    emoji: '\uD83D\uDD22',
    url: 'https://www.youtube.com/c/MuffaloPotato',
    description: 'Draw amazing things using only numbers and letters! A super unique and fun approach.',
    best: 'Best for: Ages 5-10, absolute beginners',
  },
  {
    name: 'Draw with Jazza',
    emoji: '\uD83C\uDFAC',
    url: 'https://www.youtube.com/c/Jazza',
    description: 'Character design, animation, and creative challenges. Fun and educational!',
    best: 'Best for: Ages 10+, character design & animation',
  },
  {
    name: 'Circle Line Art School',
    emoji: '\uD83D\uDCD0',
    url: 'https://www.youtube.com/c/CircleLineArtSchool',
    description: 'Clear tutorials on shading, perspective, and 3D drawing techniques.',
    best: 'Best for: Ages 10+, realistic drawing skills',
  },
  {
    name: 'Mark Crilley',
    emoji: '\u270D\uFE0F',
    url: 'https://www.youtube.com/c/markcrilley',
    description: 'Professional illustrator with tutorials on manga, realism, and illustration.',
    best: 'Best for: Ages 10+, manga & illustration',
  },
];

export default function LearnSection({ onBack, onSelectDrawing, drawings }) {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const [showChannels, setShowChannels] = useState(false);

  const toggleLevel = (id) => {
    setExpandedLevel(expandedLevel === id ? null : id);
  };

  return (
    <div className="learn-screen">
      <header className="app-header">
        <button className="back-btn" onClick={onBack}>{'\u2190'} Back</button>
        <h1>{'\uD83C\uDF93'} Learn to Draw</h1>
      </header>
      <div className="learn-content">
        <div className="learn-intro">
          <h2>Your Drawing Journey</h2>
          <p>
            Follow these levels to go from complete beginner to confident artist!
            Each level builds on the last. Take your time with each one — there's no rush.
          </p>
        </div>

        <div className="levels-list">
          {LEVELS.map((level) => {
            const isExpanded = expandedLevel === level.id;
            return (
              <div key={level.id} className="level-card">
                <button
                  className="level-header"
                  onClick={() => toggleLevel(level.id)}
                  style={{ borderLeftColor: level.color }}
                >
                  <div className="level-badge" style={{ background: level.color }}>
                    {level.id}
                  </div>
                  <div className="level-title-area">
                    <h3>{level.emoji} {level.title}</h3>
                    <p>{level.subtitle}</p>
                  </div>
                  <span className={`level-arrow ${isExpanded ? 'open' : ''}`}>
                    {'\u25BC'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="level-body">
                    <p className="level-intro">{level.intro}</p>

                    <div className="level-section">
                      <h4>{'\uD83C\uDFAF'} Skills You'll Learn</h4>
                      <ul>
                        {level.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="level-section">
                      <h4>{'\uD83D\uDCDD'} Practice Exercises</h4>
                      {level.exercises.map((ex, i) => (
                        <div key={i} className="exercise-card">
                          <strong>{ex.name}</strong>
                          <p>{ex.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="level-section">
                      <h4>{'\uD83D\uDCA1'} Pro Tips</h4>
                      <ul className="tips-list">
                        {level.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="level-section">
                      <h4>{'\u270F\uFE0F'} Try These Drawings</h4>
                      <div className="try-drawings">
                        {level.tryDrawings.map(id => {
                          const d = drawings.find(dr => dr.id === id);
                          if (!d) return null;
                          return (
                            <button
                              key={id}
                              className="try-drawing-card"
                              onClick={() => onSelectDrawing(d)}
                            >
                              <svg viewBox="0 0 300 300" className="try-svg">
                                <g stroke="#666" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  {d.steps.map((s, i) => (
                                    <g key={i} dangerouslySetInnerHTML={{ __html: s.svg }} />
                                  ))}
                                </g>
                              </svg>
                              <span>{d.emoji} {d.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="level-section">
                      <h4>{'\uD83C\uDFAC'} Video Tutorials</h4>
                      {level.videos.map((v, i) => (
                        <a
                          key={i}
                          href={v.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="video-link"
                        >
                          <div className="video-icon">{'\u25B6\uFE0F'}</div>
                          <div>
                            <strong>{v.channel}</strong>
                            <p>{v.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="channels-section">
          <button
            className="channels-toggle"
            onClick={() => setShowChannels(!showChannels)}
          >
            <h3>{'\uD83C\uDFAC'} Top YouTube Channels for Learning to Draw</h3>
            <span className={`level-arrow ${showChannels ? 'open' : ''}`}>
              {'\u25BC'}
            </span>
          </button>
          {showChannels && (
            <div className="channels-grid">
              {TOP_CHANNELS.map((ch, i) => (
                <a
                  key={i}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card"
                >
                  <div className="channel-emoji">{ch.emoji}</div>
                  <div>
                    <strong>{ch.name}</strong>
                    <p>{ch.description}</p>
                    <span className="channel-best">{ch.best}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="learn-footer">
          <p>
            {'\uD83C\uDF1F'} Remember: Every artist was once a beginner. The secret to getting good at drawing is simple — practice a little bit every day and have fun!
          </p>
        </div>
      </div>
    </div>
  );
}
