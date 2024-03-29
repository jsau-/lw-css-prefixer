import { Vendor } from '../src/Vendor';
import { Plugin, prefixer } from '../src/prefixer';
import { addVendorPrefixes } from '../src/util/addVendorPrefixes';

describe('prefixer', () => {
  it('Returns property, value if no plugins or static prefixes', () => {
    const pfx = prefixer([], {});

    expect(pfx('foo', 'bar')).toEqual([
      ['foo', 'bar'],
    ]);

    expect(pfx('foo', 100)).toEqual([
      ['foo', 100],
    ]);

    expect(pfx('foo', null)).toEqual([
      ['foo', null],
    ]);

    expect(pfx('foo', undefined)).toEqual([
      ['foo', undefined],
    ]);
  });

  it('Adds prefixes according to static list', () => {
    const pfx = prefixer([], { foo: Vendor.moz_ms });

    expect(pfx('foo', 'bar')).toEqual([
      ['-moz-foo', 'bar'],
      ['-ms-foo', 'bar'],
      ['foo', 'bar'],
    ]);

    expect(pfx('foo', 100)).toEqual([
      ['-moz-foo', 100],
      ['-ms-foo', 100],
      ['foo', 100],
    ]);

    expect(pfx('foo', null)).toEqual([
      ['-moz-foo', null],
      ['-ms-foo', null],
      ['foo', null],
    ]);

    expect(pfx('foo', undefined)).toEqual([
      ['-moz-foo', undefined],
      ['-ms-foo', undefined],
      ['foo', undefined],
    ]);
  });

  it('Adds prefixes according to plugin functions', () => {
    const plugin: Plugin = (property, value) => addVendorPrefixes(
      property,
      Vendor.moz,
    ).map((prefixedProp) => [prefixedProp, value]);

    const pfx = prefixer([plugin], {});

    expect(pfx('foo', 'bar')).toEqual([
      ['-moz-foo', 'bar'],
      ['foo', 'bar'],
    ]);

    expect(pfx('foo', 100)).toEqual([
      ['-moz-foo', 100],
      ['foo', 100],
    ]);

    expect(pfx('foo', null)).toEqual([
      ['-moz-foo', null],
      ['foo', null],
    ]);

    expect(pfx('foo', undefined)).toEqual([
      ['-moz-foo', undefined],
      ['foo', undefined],
    ]);
  });

  it('Handles plugin returning no prefixes', () => {
    const plugin: Plugin = () => undefined;

    const pfx = prefixer([plugin], {});

    expect(pfx('foo', 'bar')).toEqual([
      ['foo', 'bar'],
    ]);

    expect(pfx('foo', 100)).toEqual([
      ['foo', 100],
    ]);

    expect(pfx('foo', null)).toEqual([
      ['foo', null],
    ]);

    expect(pfx('foo', undefined)).toEqual([
      ['foo', undefined],
    ]);
  });
});
