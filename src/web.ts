import { WebPlugin } from '@capacitor/core';
import { FirebaseAIOPlugin } from './definitions';

export class FirebaseAIOWeb extends WebPlugin implements FirebaseAIOPlugin {
  constructor() {
    super({
      name: 'FirebaseAIO',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const FirebaseAIO = new FirebaseAIOWeb();

export { FirebaseAIO };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseAIO);
