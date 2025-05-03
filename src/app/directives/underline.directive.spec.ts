import { UnderlineDirective } from './underline.directive';

describe('UnderlineDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new UnderlineDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
