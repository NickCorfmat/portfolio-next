export type ProjectCategory =
  | "game"
  | "lego_ideas"
  | "program"
  | "featured"
  | "about";

export interface Project {
  name: string;
  category: ProjectCategory[];
  media: string;
  logo?: string;
  url?: string;
  github?: string;
  trailer?: string;
  demo?: string;
  shortDescription?: string;
  description?: string;
  teamSize: number;
  dates: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: "Fight Fighters",
    category: ["game", "featured"],
    media: "/data/videos/fightfighters.mp4",
    logo: "/data/logos/fightfighters_logo.jpg",
    url: "https://nickcorfmat.github.io/FightFighters/",
    github: "https://github.com/NickCorfmat/FightFighters",
    shortDescription: "2P fighting game created with Phaser 3.",
    description:
      "Adapted the fictionalized game 'Fight Fighters' into a two-player fighting game using JavaScript and Phaser for a class project. The game is directly inspired from S1 E10 of the Disney Channel television series, 'Gravity Falls.'",
    teamSize: 2,
    dates: "Feb 2024 - Mar 2024",
    technologies: ["phaser", "javascript", "html"],
  },
  {
    name: "Rogue Eagle",
    category: ["game", "about"],
    media: "/data/videos/rogueeagle.mp4",
    url: "https://nickcorfmat.github.io/EndlessRunner/",
    github: "https://github.com/NickCorfmat/EndlessRunner",
    shortDescription: "Endless runner game created with Phaser 3.",
    description:
      "Made an endless runner game using Javascript, Phaser, and HTML for a class project. Employed one-dimensional Perlin noise to generate infinitely varying and unique terrain on every run.",
    teamSize: 1,
    dates: "Feb 2024",
    technologies: ["phaser", "javascript", "html"],
  },
  {
    name: "Woofmart",
    category: ["game", "featured", "about"],
    media: "/data/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    github: "https://github.com/jchen577/dog_sim_125",
    trailer:
      "https://drive.google.com/file/d/1ZzLdmguxykcHSb12pyFnLuZfHL9X8wYJ/view?usp=sharing",
    shortDescription: "Endless runner game created in Unity.",
    description:
      "Worked with a team of 5 students to create a cartoon-like endless runner in Unity, where players take on the role of a loose dog with the goal of unleashing chaos in a supermarket, while fleeing AI employee enemies.",
    teamSize: 5,
    dates: "Nov 2024 - Dec 2024",
    technologies: ["unity", "csharp", "blender"],
  },
  {
    name: "will you do it?",
    category: ["game"],
    media: "/data/videos/willyoudoit.mp4",
    url: "https://nickcorfmat.github.io/Split-1/",
    github: "https://github.com/NickCorfmat/Split-1",
    shortDescription: "Short narrative game prototype built using Phaser 3.",
    description:
      "Developed a short narrative game with two other students in 2 weeks, as part of a rapid prototyping class at UCSC.",
    teamSize: 3,
    dates: "Apr 2024",
    technologies: ["phaser", "javascript", "html"],
  },
  {
    name: "Piano Platformer",
    category: ["game"],
    media: "/data/videos/pianoplatformer.mp4",
    url: "https://nickcorfmat.github.io/Unconventional-Game/",
    github: "https://github.com/NickCorfmat/Unconventional-Game",
    shortDescription: "Short game with an unconventional twist.",
    description:
      "A short game developed at UCSC in 2 weeks as part of a rapid prototyping class that adopts an unconventional approach to typical platformer controller inputs.",
    teamSize: 3,
    dates: "May 2024",
    technologies: ["phaser", "javascript", "html"],
  },
  {
    name: "Wail of the Sirenheads",
    category: ["game", "about"],
    media: "/data/videos/wailofthesirenheads.mp4",
    url: "https://nickcorf.itch.io/through-the-sirenheads",
    github: "https://github.com/JaydenChung/Split2",
    demo: "https://drive.google.com/file/d/1T6xnZxpMmf_FUYoe2tHEIMAOfqRn7AB0/view?usp=sharing",
    shortDescription: "Short horror game built in UE5.",
    description:
      "Rapidly prototyped a first-person horror game in Unreal Engine 5 with a team of three students at UCSC over two weeks. This experience drops players into a dark, eerie forest, designed to evoke deep foreboding through the threat of unexpected creature encounters.",
    teamSize: 3,
    dates: "Apr 2024 - May 2024",
    technologies: ["unrealengine", "blender"],
  },
  {
    name: "Modernism Simulator",
    category: ["game", "about"],
    media: "/data/videos/modernsimulator.mp4",
    url: "https://nickcorf.itch.io/modernism-simulator",
    github: "https://github.com/NickCorfmat/ApartmentSimulator",
    demo: "https://drive.google.com/file/d/1dEgNfVd5nOl8TMtaDJuzmRiSJBPYA1W-/view?usp=sharing",
    shortDescription: "Immersive interactive world built using Unity URP.",
    description:
      "Developed a short, first-person walking simulator in Unity that immerses players in the scene of a cold and monotonous, yet tranquil environment of a modernist world.",
    teamSize: 1,
    dates: "Nov 2024",
    technologies: ["unity", "csharp", "blender"],
  },
  {
    name: "Shape Up",
    category: ["game", "about"],
    media: "/data/videos/shapeup.mp4",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/EltZ36/ShapeUp",
    trailer: "https://www.youtube.com/watch?v=hqWtVbuO-iI",
    shortDescription:
      "Senior capstone mobile puzzle game shipped on iOS and Android.",
    description:
      "Developed and shipped a mobile puzzle game on iOS/Android as part of a 5-student capstone project. Aided in level design, UI/UX, player and device metrics tracking, localization, persistent data, and iOS deployment pipeline.",
    teamSize: 5,
    dates: "Apr 2025 - Jun 2025",
    technologies: ["unity", "csharp", "jira", "ios", "android"],
  },
  {
    name: "Crucible of Elements",
    category: ["game", "about"],
    media: "/data/videos/crucibleofelements.mp4",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/SRparadox/KorraProject",
    trailer:
      "https://drive.google.com/file/d/1kA9OzkjJGnMaN6Q36k4gKBbE_ELbLyos/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1wDQkhkBwe9Gr_cLaPXaxYC5p41Rfo4Df/view?usp=sharing",
    shortDescription: "2v2 online arena battler developed in Unity.",
    description:
      "Developed a 2v2 online arena battler in Unity over 10 weeks as part of an 8-student cross-disciplinary capstone team. Implemented character mechanics, integrated multiplayer NetCode, designed the map from scratch, and optimized GPU and storage performance.",
    teamSize: 8,
    dates: "Jan 2025 - Mar 2025",
    technologies: ["unity", "csharp", "blender"],
  },
  {
    name: "Space-Mine",
    category: ["game"],
    media: "/data/videos/spacemine.mp4",
    github: "https://github.com/NickCorfmat/Space-Mine",
    shortDescription:
      "Moddable 2D mining simulator built with Phaser and TypeScript.",
    description:
      "Led the development of a web-based 2D farming simulator built using Javascript, Phaser, and Vite, featuring automatic and manual saving/loading, undo action systems, multilingual support, and modding capabilities via external DSL. Additionally, the game is fully installable as a progressive web application (PWA) on both desktop and mobile, for offline play.",
    teamSize: 3,
    dates: "Nov 2024 - Dec 2024",
    technologies: ["Typescript", "Phaser", "HTML", "CSS"],
  },
  {
    name: "Chess vs. AI",
    category: ["game"],
    media: "/data/videos/chessvsai.mp4",
    github: "https://github.com/NickCorfmat/ChessAI",
    shortDescription: "Chess but with a smart opponent...",
    description:
      "Built a Chess AI in C++ to compare thousands of possible moves and strategically execute the optimal move. Utilized minimax algorithm, alpha-beta pruning, and transposition tables to significantly reduce AI search complexity. Incorporated the Universal Chess Interface (UCI) to enable the AI to play against other chess engines.",
    teamSize: 1,
    dates: "Nov 2023 - Dec 2023",
    technologies: ["C++"],
  },
  // {
  //   name: "Public Key Cryptography",
  //   category: ["program"],
  //   media: "/data/images/publickeycryptography.jpg",
  //   github: "https://github.com/NickCorfmat/Public-Key-Cryptography",
  //   shortDescription: "Public-key encryption tool in C using GMP.",
  //   description: "Implemented a public-key encryption program in C on an Ubuntu VM to securely encrypt and decrypt text files. Utilized GNU Multiple Precision Arithmetic Library (GMP) for the generation of long, secure private keys.",
  //   teamSize: 1,
  //   dates: "Mar 2023"
  // },
  // {
  //   name: "LZ Compression",
  //   category: ["program"],
  //   media: "/data/images/lzcompression.jpg",
  //   github: "https://github.com/NickCorfmat/LZ-Compression",
  //   shortDescription: "Lossless text compressor implemented in C.",
  //   description: "Implemented a lossless text compression program in C using the LZ78 algorithm, preserving all original data. Developed and tested on Ubuntu VM, utilizing vi editor and command-line tooling for efficient workflow.",
  //   teamSize: 1,
  //   dates: "Mar 2023"
  // },
  {
    name: "Recipe Manager",
    category: ["program"],
    media: "/data/videos/recipemanager.mp4",
    github: "https://github.com/NickCorfmat/RecipeManager",
    shortDescription: "Full-stack recipe sharing app with Py4Web and Vue.",
    description:
      "Developed a full-stack recipe sharing app using py4web with a team of 6 students. Built RESTful APIs for CRUD operations, integrated multi-field search, connected frontend to backend services, and enforced author-only editing on the server side.",
    teamSize: 6,
    dates: "May 2025 - Jun 2025",
    technologies: ["javascript", "html", "bulma", "py4web"],
  },
  {
    name: "WebGL Mario World",
    category: ["program"],
    media: "/data/videos/webgldemo.mp4",
    github: "https://github.com/NickCorfmat/Asg4",
    url: "https://nickcorfmat.github.io/Asg4/src/World.html",
    shortDescription: "Interactive WebGl demo.",
    description:
      "Developed an interactive 3D demo using WebGL and GLSL shaders for diffuse, specular, and spotlight lighting. Created dynamic lighting controls (position, color, enable/disable) using HTML and CSS with live scene updates. Built a camera system with full 3D navigation (forward/back, strafe, pan, tilt) using vector math and rotation matrices. Optimized texture loading, UV mapping, and materials through efficient GLSL uniform and buffer handling.",
    teamSize: 1,
    dates: "Feb 2025 - Mar 2025",
    technologies: ["javascript", "opengl", "html", "css"],
  },
  {
    name: "Polaroid Onestep SX-70",
    category: ["lego_ideas", "featured"],
    media: "/data/videos/polaroid.mp4",
    url: "https://beta.ideas.lego.com/product-ideas/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: 'Blackpink "Lovesick Girls"',
    category: ["lego_ideas"],
    media: "/data/images/lovesickgirls.jpg",
    url: "https://beta.ideas.lego.com/product-ideas/2094aa81-6b2a-41e9-ac2c-ebb9969285cf",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: 'Blackpink "As If It\'s Your Last"',
    category: ["lego_ideas"],
    media: "/data/images/asifitsyourlast.jpg",
    url: "https://ideas.lego.com/projects/cab13581-6986-41b5-bf93-907a474a07df",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: 'Madison Beer "Reckless"',
    category: ["lego_ideas"],
    media: "/data/images/reckless.jpg",
    url: "https://beta.ideas.lego.com/product-ideas/9b9e3504-07dd-4060-a139-4bf98b07f7a7",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: "The Polar Express",
    category: ["lego_ideas"],
    media: "/data/images/polarexpress.jpg",
    url: "https://beta.ideas.lego.com/product-ideas/d589b6af-92c0-44ef-90c7-38dc4a8a9b2d",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: "Interstellar",
    category: ["lego_ideas"],
    media: "/data/images/endurance.jpg",
    url: "https://beta.ideas.lego.com/product-ideas/b0c8ccf3-8d15-4d13-b69a-c836daeee9c3",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
  {
    name: "Miffy",
    category: ["lego_ideas"],
    media: "/data/images/miffy.jpg",
    url: "https://beta.ideas.lego.com/product-ideas/2329f799-f3bd-4c1e-83fd-49443332ae96",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025",
    technologies: ["inkscape", "blender"],
  },
];
