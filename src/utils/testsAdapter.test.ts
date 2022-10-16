import { RenderedTestInterface, TestInterface, TestStatus } from '../types';
import { testAdapter } from './testAdapter';

describe('testAdapter', () => {
  it('should return ready to use array of tests', () => {
    const mockRun = jest.fn;
    const mockTests: TestInterface[] = [
      {
        description: 'Test1',
        run: mockRun,
      },
      {
        description: 'Test2',
        run: mockRun,
      },
      {
        description: 'Test3',
        run: mockRun,
      },
    ];

    const mockTestAdapterResults: RenderedTestInterface[] = [
      {
        id: 1,
        description: 'Test1',
        status: TestStatus.NotStarted,
        time: null,
        run: mockRun,
      },
      {
        id: 2,
        description: 'Test2',
        status: TestStatus.NotStarted,
        time: null,
        run: mockRun,
      },
      {
        id: 3,
        description: 'Test3',
        status: TestStatus.NotStarted,
        time: null,
        run: mockRun,
      },
    ];

    const adapterResults = testAdapter(mockTests);

    expect(adapterResults).toHaveLength(3);
    expect(adapterResults[0].description).toEqual(mockTestAdapterResults[0].description);
    expect(adapterResults).toEqual(mockTestAdapterResults);
  });
});
