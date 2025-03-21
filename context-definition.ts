import {createContext, ContextRoot} from '@lit/context';
export const contextKey = createContext(Symbol('my-context'));

const root = new ContextRoot();
root.attach(document.documentElement);
