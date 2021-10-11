import { backendUser } from './backend-user';

describe('backendUser', () => {
  it('should work', () => {
    expect(backendUser()).toEqual('backend-user');
  });
});
