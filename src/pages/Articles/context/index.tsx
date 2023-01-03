import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

import { IArticleState } from "~/types/context";
import { State, Reducer } from "./state";
import ArticleActionFactory from "./actions";

const ArticleContext = createContext<IArticleState | null>(null);
const ArticleDispatch = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

export function ArticleContextProvider(props: IProps) {
  const { children } = props;
  const [value, dispatch] = useReducer(Reducer, props, State);
  const [actions] = useState(ArticleActionFactory(dispatch));

  return (
    <ArticleContext.Provider value={value}>
      <ArticleDispatch.Provider value={actions}>
        {children}
      </ArticleDispatch.Provider>
    </ArticleContext.Provider>
  );
}

export function useArticleContext() {
  const state = useContext(ArticleContext);
  const actions = useContext(ArticleDispatch);
  return [state, actions];
}
