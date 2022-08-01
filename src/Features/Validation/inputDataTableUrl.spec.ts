import { validateInputDataTableUrl } from './inputDataTableUrl';

describe('validateInputDataTableUrl', () => {
  it('should return error invalidation in case of bad url', () => {
    expect(validateInputDataTableUrl('my-bad-url').errorMsg).toBe("Url doesn't look correct");
  });

  it('should return positive invalidation for correct url', () => {
    expect(validateInputDataTableUrl('url.json').isValid).toBe(true);
  });
});
