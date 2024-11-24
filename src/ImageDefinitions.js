/*
import tile_01_frame_01 from "../assets/tile_01_rot.png";
import tile_02_frame_01 from "../assets/tile_02_rot.png";
import tile_03_frame_01 from "../assets/tile_03_rot.png";
import tile_04_frame_01 from "../assets/tile_04_rot.png";
import rover_dl_frame_01 from "../assets/rover_down_left.png";
import rover_dr_frame_01 from "../assets/rover_down_right.png";
import image_01_frame_01 from "../assets/art/sprites/mars_image_01_frame_01.png";
import image_02_frame_01 from "../assets/art/sprites/mars_image_02_frame_01.png";
import image_03_frame_01 from "../assets/art/sprites/mars_image_03_frame_01.png";
import image_03_frame_02 from "../assets/art/sprites/mars_image_03_frame_02.png";
import image_03_frame_03 from "../assets/art/sprites/mars_image_03_frame_03.png";
import image_04_frame_01 from "../assets/art/sprites/mars_image_04_frame_01.png";
import image_05_frame_01 from "../assets/art/sprites/mars_image_05_frame_01.png";
import image_05_frame_02 from "../assets/art/sprites/mars_image_05_frame_02.png";
import image_06_frame_01 from "../assets/art/sprites/mars_image_06_frame_01.png";
import image_07_frame_01 from "../assets/art/sprites/mars_image_07_frame_01.png";
import image_08_frame_01 from "../assets/art/sprites/mars_image_08_frame_01.png";
import image_09_frame_01 from "../assets/art/sprites/mars_image_09_frame_01.png";
import image_09_frame_02 from "../assets/art/sprites/mars_image_09_frame_02.png";
import image_09_frame_03 from "../assets/art/sprites/mars_image_09_frame_03.png";
import image_10_frame_01 from "../assets/art/sprites/mars_image_10_frame_01.png";
import image_10_frame_02 from "../assets/art/sprites/mars_image_10_frame_02.png";
import image_10_frame_03 from "../assets/art/sprites/mars_image_10_frame_03.png";
import image_11_frame_01 from "../assets/art/sprites/mars_image_11_frame_01.png";
import image_12_frame_01 from "../assets/art/sprites/mars_image_12_frame_01.png";
import image_13_frame_01 from "../assets/art/sprites/mars_image_13_frame_01.png";
import image_13_frame_02 from "../assets/art/sprites/mars_image_13_frame_02.png";
import image_13_frame_03 from "../assets/art/sprites/mars_image_13_frame_03.png";
import image_14_frame_01 from "../assets/art/sprites/mars_image_14_frame_01.png";
import image_14_frame_02 from "../assets/art/sprites/mars_image_14_frame_02.png";
import image_15_frame_01 from "../assets/art/sprites/mars_image_15_frame_01.png";
import image_15_frame_02 from "../assets/art/sprites/mars_image_15_frame_02.png";
import image_15_frame_03 from "../assets/art/sprites/mars_image_15_frame_03.png";
import image_16_frame_01 from "../assets/art/sprites/mars_image_16_frame_01.png";
import image_16_frame_02 from "../assets/art/sprites/mars_image_16_frame_02.png";
import image_17_frame_01 from "../assets/art/sprites/mars_image_17_frame_01.png";
import image_17_frame_02 from "../assets/art/sprites/mars_image_17_frame_02.png";
import image_18_frame_01 from "../assets/art/sprites/mars_image_18_frame_01.png";
import image_19_frame_01 from "../assets/art/sprites/mars_image_19_frame_01.png";
import image_19_frame_02 from "../assets/art/sprites/mars_image_19_frame_02.png";
import image_19_frame_03 from "../assets/art/sprites/mars_image_19_frame_03.png";
import image_19_frame_04 from "../assets/art/sprites/mars_image_19_frame_04.png";
import image_19_frame_05 from "../assets/art/sprites/mars_image_19_frame_05.png";
import image_19_frame_06 from "../assets/art/sprites/mars_image_19_frame_06.png";
import image_19_frame_07 from "../assets/art/sprites/mars_image_19_frame_07.png";
import image_20_frame_01 from "../assets/art/sprites/mars_image_20_frame_01.png";
import image_20_frame_02 from "../assets/art/sprites/mars_image_20_frame_02.png";
import image_21_frame_01 from "../assets/art/sprites/mars_image_21_frame_01.png";
import image_22_frame_01 from "../assets/art/sprites/mars_image_22_frame_01.png";
import image_22_frame_02 from "../assets/art/sprites/mars_image_22_frame_02.png";
import pad_01_frame_01 from "../assets/art/tiles/landing_pad_t_l_rot.png";
import pad_02_frame_01 from "../assets/art/tiles/landing_pad_t_r_rot.png";
import pad_03_frame_01 from "../assets/art/tiles/landing_pad_b_r_rot.png";
import pad_04_frame_01 from "../assets/art/tiles/landing_pad_b_l_rot.png";
import image_23_frame_01 from "../assets/art/sprites/mars_image_23_frame_01.png";
import image_24_frame_01 from "../assets/art/sprites/mars_image_24_frame_01.png";
import image_25_frame_01 from "../assets/art/sprites/mars_image_25_frame_01.png";
import image_26_frame_01 from "../assets/art/sprites/mars_image_26_frame_01.png";
import image_27_frame_01 from "../assets/art/sprites/mars_image_27_frame_01.png";
import image_27_frame_02 from "../assets/art/sprites/mars_image_27_frame_02.png";
import image_28_frame_01 from "../assets/art/sprites/mars_image_28_frame_01.png";
import image_28_frame_02 from "../assets/art/sprites/mars_image_28_frame_02.png";
import image_29_frame_01 from "../assets/art/sprites/mars_image_29_frame_01.png";
import image_29_frame_02 from "../assets/art/sprites/mars_image_29_frame_02.png";
import image_29_frame_03 from "../assets/art/sprites/mars_image_29_frame_03.png";
import image_29_frame_04 from "../assets/art/sprites/mars_image_29_frame_04.png";
import image_29_frame_05 from "../assets/art/sprites/mars_image_29_frame_05.png";
import image_29_frame_06 from "../assets/art/sprites/mars_image_29_frame_06.png";
import image_29_frame_07 from "../assets/art/sprites/mars_image_29_frame_07.png";
import image_29_frame_08 from "../assets/art/sprites/mars_image_29_frame_08.png";
*/

const imageDefns = [
  // image 00: tile 01
  {
    srcs: [
      process.env.PUBLIC_URL+"/tile_01_rot.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 01: tile 02
  {
    srcs: [
      process.env.PUBLIC_URL+"/tile_02_rot.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 02: tile 03
  {
    srcs: [
      process.env.PUBLIC_URL+"/tile_03_rot.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 03: tile 04
  {
    srcs: [
      process.env.PUBLIC_URL+"/tile_04_rot.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 04: rover_down_left
  {
    srcs: [
      process.env.PUBLIC_URL+"/rover_down_left.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Rover',
    desc: 'Explores surface, can help build new infrastructure.',
    cost: { energy: 2, ore: 1 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 05: rover_down_right
  {
    srcs: [
      process.env.PUBLIC_URL+"/rover_down_right.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Rover',
    desc: 'Explores surface, can help build new infrastructure.',
    cost: { energy: 2, ore: 1 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 06: methane tank
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_01_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Rocket Fuel Plant',
    desc: 'Converts water to methane, to fuel rockets on supply missions.',
    cost: { energy: 2, ore: 1 },
    produces: { methane: 1 },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 07: large down/left rover
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_02_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 08: small cylinder building
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_03_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_03_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_03_frame_03.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.9, nextState: 0}, {weight: 0.1, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 2}],
      /* from state 2 */ [{weight: 0.2, nextState: 2}, {weight: 0.8, nextState: 0}]
    ]
  },

  // image 09: satellite dish
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_04_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Comms Hub',
    desc: 'Communicates with Earth and satellites to place orders and receive missions.',
    cost: { energy: 2, ore: 1 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 10: indoor farm
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_05_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_05_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.95, nextState: 0}, {weight: 0.15, nextState: 1}],
      /* from state 1 */ [{weight: 0.9, nextState: 1}, {weight: 0.1, nextState: 0}]
    ],
    name: 'Bio Reactor',
    desc: 'Simple food-production lab. Converts energy into food and water.',
    cost: { energy: 3, ore: 2 },
    produces: { food: 1, oxygen: 1 },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 11: larger igloo building
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_06_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 12: windmills
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_07_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Wind Turbine',
    desc: 'Simple engergy producer that converts wind into energy.',
    cost: { energy: 4, ore: 2 },
    produces: { energy: 4 },
    consumes: { },
    requires: { people: 1 },
  },

  // image 13: barracks
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_08_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 14: hangar w/ comms
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_09_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_09_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_09_frame_03.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.9, nextState: 0}, {weight: 0.1, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 2}],
      /* from state 2 */ [{weight: 0.2, nextState: 2}, {weight: 0.8, nextState: 0}]
    ],
    name: 'Drone Port',
    desc: 'Hanger and control center for drones, to direct their explorating and maintenance. Comes with 1 drone.',
    cost: { energy: 8, ore: 4 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 15: lookout bldg
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_10_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_10_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_10_frame_03.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.9, nextState: 0}, {weight: 0.1, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 2}],
      /* from state 2 */ [{weight: 0.2, nextState: 2}, {weight: 0.8, nextState: 0}]
    ],
    name: 'Emergency Services',
    desc: 'Ambulance, police and fire services for colonists.',
    cost: { energy: 6, ore: 4 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 16: single astronaut (1x1)
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_11_frame_01.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 17: 3 cubes
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_12_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 18: low cylinder w/ 2 entrances
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_13_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_13_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_13_frame_03.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.9, nextState: 0}, {weight: 0.1, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 2}],
      /* from state 2 */ [{weight: 0.2, nextState: 2}, {weight: 0.8, nextState: 0}]
    ]
  },

  // image 19: solar panels
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_14_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_14_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.8, nextState: 0}, {weight: 0.2, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 0}]
    ],
    name: 'Solar Panel',
    desc: 'Energy producer that turns solar power into energy.',
    cost: { energy: 3, ore: 1 },
    produces: { energy: 3 },
    consumes: { },
    requires: { people: 1 },
  },

  // image 20: geo-thermal reactor
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_15_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_15_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_15_frame_03.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.8, nextState: 0}, {weight: 0.1, nextState: 1}, {weight: 0.1, nextState: 2}],
      /* from state 1 */ [{weight: 0.8, nextState: 1}, {weight: 0.2, nextState: 0}],
      /* from state 2 */ [{weight: 0.6, nextState: 2}, {weight: 0.4, nextState: 1}]
    ],
    name: 'Geo-Thermal Reactor',
    desc: 'Energy producer that turns underground heat into energy.',
    cost: { energy: 6, ore: 4 },
    produces: { energy: 8 },
    consumes: { },
    requires: { people: 2 },
  },

  // image 21: squashed sphere, with 1/4 cut out
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_16_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_16_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.3, nextState: 0}, {weight: 0.7, nextState: 1}],
      /* from state 1 */ [{weight: 0.3, nextState: 1}, {weight: 0.7, nextState: 0}]
    ],
    name: 'Housing Barracks',
    desc: 'Entry-level housing for colonists.',
    cost: { energy: 2, ore: 1 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 22: farm dome
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_17_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_17_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.92, nextState: 0}, {weight: 0.08, nextState: 1}],
      /* from state 1 */ [{weight: 0.7, nextState: 1}, {weight: 0.3, nextState: 0}]
    ],
    name: 'Aeroponics Farm',
    desc: 'Higher-yield farm in a large geodesic dome.',
    cost: { energy: 4, ore: 3 },
    produces: { food: 3, oxygen: 4 },
    consumes: { energy: 2 },
    requires: { people: 1 },
  },

  // image 23: rocket
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_18_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Supply Mission',
    desc: 'Rocket that can bring supplies to the colony from Earth.',
    cost: { methane: 10 },
    produces: { }, /* FIXME... */
    consumes: { },
    requires: { people: 8 },
  },

  // image 24: lander
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_03.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_04.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_05.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_06.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_19_frame_07.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}],
      /* no auto-transition from 0 to 1. has to be manually triggered upon landing */
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 2}],
      /* from state 2 */ [{weight: 0.3, nextState: 2}, {weight: 0.7, nextState: 3}],
      /* from state 3 */ [{weight: 0.3, nextState: 3}, {weight: 0.7, nextState: 4}],
      /* from state 4 */ [{weight: 0.2, nextState: 4}, {weight: 0.8, nextState: 5}],
      /* from state 5 */ [{weight: 0.1, nextState: 5}, {weight: 0.9, nextState: 6}],
      /* from state 6 */ [{weight: 1.0, nextState: 6}]
    ],
    name: 'Lander',
    desc: 'A lander sent from Earth that can bring rovers and supplies to begin a colony.',
    cost: { },
    produces: { },
    consumes: { },
    requires: { },
  },

  // image 25: nuclear reactor
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_20_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_20_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.7, nextState: 0}, {weight: 0.3, nextState: 1}],
      /* from state 1 */ [{weight: 0.7, nextState: 1}, {weight: 0.3, nextState: 0}]
    ],
    name: 'Nuclear Reactor',
    desc: 'A small-scale nuclear power plant that produces a large supply of energy.',
    cost: { energy: 15, ore: 7 },
    produces: { energy: 12 },
    consumes: { },
    requires: { people: 4 },
  },

  // image 26: building with sidecar bldg
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_21_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 27: housing dome
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_22_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_22_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.7, nextState: 0}, {weight: 0.3, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 0}]
    ],
    name: 'Housing Dome',
    desc: 'Larger and more pleasant housing inside a dome with green space.',
    cost: { energy: 6, ore: 3 },
    produces: { },
    consumes: { energy: 2 },
    requires: { people: 2 },
  },

  // image 28: rocket landing pad (top left)
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/tiles/landing_pad_t_l_rot.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Space Port',
    desc: 'A landing pad for supply rockets.',
    cost: { energy: 6, ore: 3 },
    produces: { },
    consumes: { energy: 2 },
    requires: { people: 2 },
  },
  // image 29: rocket landing pad (top right)
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/tiles/landing_pad_t_r_rot.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Space Port',
    desc: 'A landing pad for supply rockets.'
  },
  // image 30: rocket landing pad (bottom right)
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/tiles/landing_pad_b_r_rot.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Space Port',
    desc: 'A landing pad for supply rockets.'
  },
  // image 31: rocket landing pad (bottom left)
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/tiles/landing_pad_b_l_rot.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Space Port',
    desc: 'A landing pad for supply rockets.'
  },

  // image 32: quad drone
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_23_frame_01.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Drone',
    desc: 'A small drone copter that can help explore and maintain your colony.',
    cost: { energy: 4, ore: 4 },
    produces: { },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 33: factory 1
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_24_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 34: factory 2
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_25_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ]
  },

  // image 35: factory 3
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_26_frame_01.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 1.0, nextState: 0}]
    ],
    name: 'Ore Mine',
    desc: 'Mines metalic ore from under the regolith ("dirt") layer.',
    cost: { energy: 5, ore: 2 },
    produces: { ore: 2 },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 36: water plant 1
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_27_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_27_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.7, nextState: 0}, {weight: 0.3, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 0}]
    ],
    name: 'Regolith Oven',
    desc: 'Produces water by baking Martian dirt ("regolith") to evaporate its moisture.',
    cost: { energy: 4, ore: 3 },
    produces: { water: 1 },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 37: water plant 2
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_28_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_28_frame_02.png"
    ],
    size: '2x2',
    transitions: [
      /* from state 0 */ [{weight: 0.7, nextState: 0}, {weight: 0.3, nextState: 1}],
      /* from state 1 */ [{weight: 0.4, nextState: 1}, {weight: 0.6, nextState: 0}]
    ],
    name: 'Ice Mine',
    desc: 'Produces water by mining underground ice and melting it.',
    cost: { energy: 4, ore: 4 },
    produces: { water: 2 },
    consumes: { energy: 1 },
    requires: { people: 1 },
  },

  // image 38: mars tornado
  {
    srcs: [
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_01.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_02.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_03.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_04.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_05.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_06.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_07.png",
      process.env.PUBLIC_URL+"/art/sprites/mars_image_29_frame_08.png"
    ],
    size: '1x1',
    transitions: [
      /* from state 0 */ [{weight: 0.1, nextState: 0}, {weight: 0.9, nextState: 1}],
      /* from state 1 */ [{weight: 0.1, nextState: 1}, {weight: 0.9, nextState: 2}],
      /* from state 2 */ [{weight: 0.1, nextState: 2}, {weight: 0.9, nextState: 3}],
      /* from state 3 */ [{weight: 0.1, nextState: 3}, {weight: 0.9, nextState: 4}],
      /* from state 4 */ [{weight: 0.1, nextState: 4}, {weight: 0.9, nextState: 5}],
      /* from state 5 */ [{weight: 0.1, nextState: 5}, {weight: 0.9, nextState: 6}],
      /* from state 6 */ [{weight: 0.1, nextState: 6}, {weight: 0.9, nextState: 7}],
      /* from state 7 */ [{weight: 0.1, nextState: 7}, {weight: 0.9, nextState: 0}]
    ],
    name: 'Dust Storm',
    desc: 'A Martian dust cyclone',
    cost: { },
    produces: { },
    consumes: { },
    requires: { },
  },

];

const assetDefns = [
  // asset 00: people
  {
    srcs: null, /* not used... */
    size: null, /* not used... */
    transitions: null, /* not used... */
    name: 'People',
    desc: null, /* not used... */
    cost: { },
    produces: { people: 0.08 },
    consumes: { food: 0.1, oxygen: 0.1, water: 0.1 },
    requires: { housing: 0.1 },
  },
];

export { imageDefns, assetDefns };
