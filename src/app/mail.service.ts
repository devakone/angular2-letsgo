import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

	messages = [
	{text:`I bomb atomically`, id:0},
	{text:`Socrates philosophy and hypothesis`, id:1},
	{text:`Can't define how I be dropping these`, id:2}
	];

	update(id, text){
		this.messages = this.messages.map(m =>
			m.id === id? {id, text}:m)
	}

  constructor() { }

}
