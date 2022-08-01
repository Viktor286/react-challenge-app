import { dataTable } from '../../Fixtures/y77d-th95';
import { getDataTableKeys, IDataTable } from './dataTable';

describe('Data Table', () => {
  describe('getDataTableKeys', () => {
    it('should gather all possible fields in the predefined dataset', () => {
      const dataTableResult = getDataTableKeys(dataTable as unknown as IDataTable);
      const expectedResults = [
        'name',
        'id',
        'nametype',
        'recclass',
        'mass',
        'fall',
        'year',
        'reclat',
        'reclong',
        'geolocation',
      ];

      expectedResults.forEach((field) => expect(dataTableResult.includes(field)).toBe(true));
    });
  });
});
