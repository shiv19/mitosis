import { componentToNativescriptAngular } from '../generators/nativescript-angular';
import { runTestsForTarget } from './test-generator';

describe('Nativescript Angular', () => {
  runTestsForTarget({
    options: {},
    target: 'nativescriptAngular',
    generator: componentToNativescriptAngular
  });
});
