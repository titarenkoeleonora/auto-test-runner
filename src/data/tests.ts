import { makeDummyTest } from '../utils/utils';

export const tests = [
  { description: 'Uploads go in both directions', run: makeDummyTest() },
  { description: 'PDFs are adequately waterproof', run: makeDummyTest() },
  { description: 'Videos are heated to 12,000,000 Kelvin', run: makeDummyTest() },
  { description: 'Subpixels can go rock climbing', run: makeDummyTest() },
  { description: 'Images are squarer than traffic cones', run: makeDummyTest() },
  { description: "Metaproperties don't go too meta", run: makeDummyTest() },
];
