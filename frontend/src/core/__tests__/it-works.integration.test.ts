describe('integration test that takes time', () => {
  it('eventually works', async () => {
    const willResolveToTrue = new Promise(resolve => setTimeout(() => {
      resolve(true);
    }, 4000));
    
    return await expect(willResolveToTrue).resolves.toBe(false);
  });
});

export {}