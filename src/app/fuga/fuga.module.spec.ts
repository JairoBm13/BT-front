import { FugaModule } from './fuga.module';

describe('FugaModule', () => {
  let fugaModule: FugaModule;

  beforeEach(() => {
    fugaModule = new FugaModule();
  });

  it('should create an instance', () => {
    expect(fugaModule).toBeTruthy();
  });
});
