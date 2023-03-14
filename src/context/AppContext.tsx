import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

export interface State {
  backgroundColor: string;
}

export type Action = { type: "CHANGE_BACKGROUND"; payload: string };

export const initialState = {
  backgroundColor: "",
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "CHANGE_BACKGROUND": {
      return {
        ...state,
        backgroundColor: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const MyContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: ReactNode;
}

export const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
