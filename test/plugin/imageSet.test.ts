import { imageSet } from '../../src/plugin/imageSet';
import { assertTestCases } from '../assertTestCases';

describe('plugin/imageSet', () => {
  assertTestCases(
    imageSet,
    [
      ['foo', 'bar', undefined],
      ['background-image', 'image-set(url(\'br.png\') 1x,url(\'tr.png\') 1x)', [
        ['background-image', '-webkit-image-set(url(\'br.png\') 1x,url(\'tr.png\') 1x)'],
      ]],
    ],
  );
});
