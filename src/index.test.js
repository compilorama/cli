describe('Index', () => {
  it('should print a brief description about Compilorama', () => {
    console.log = jest.fn();
    require('.');
    expect(console.log).toHaveBeenCalledWith(
      'Compilorama is a software development company run solely by Rafael Camargo.'
    );
  });
});
