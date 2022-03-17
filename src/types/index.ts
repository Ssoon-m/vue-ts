/* eslint-disable @typescript-eslint/no-namespace */
export namespace VueEvent{
  // InputEvent는 이미 Ts내부적으로 선언된 타입이다.
  export interface Input<T extends EventTarget> extends InputEvent{
    // target은 이미 EventTarget이거나 null
    // 로 정의되어져 있다.
    target: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent{
    target: T;
  }
}


