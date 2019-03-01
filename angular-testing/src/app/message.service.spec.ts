import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
  it(`getUser should return us 'Name is :Bob'`,()=>{
    const service: MessageService= TestBed.get(MessageService)
    expect(service.getUser('Bob')).toEqual('Name is :Bob')
    
  })
});
