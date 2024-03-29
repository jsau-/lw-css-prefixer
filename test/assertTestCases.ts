import { CSSDeclaration, CSSPropertyValue, Plugin } from '../src/prefixer';

type TestCases = [property: string, value: CSSPropertyValue, expect: CSSDeclaration[] | undefined][];

export const assertTestCases = (plugin: Plugin, testCases: TestCases) => {
  test.each(testCases)(
    'Asserting \'%s:%s\' outputs %j (at index %#)',
    (property, value, expectation) => {
      expect(plugin(property, value)).toEqual(expectation);
    }
  );
};
