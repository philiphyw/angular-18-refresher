import { BoldDirective } from './bold.directive';

describe('BoldDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new BoldDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
