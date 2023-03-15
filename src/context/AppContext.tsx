import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

export interface State {
  background_color: string;
  background_container: string;
  text_color: string;
}

export type Action = {
  type: "CHANGE_BACKGROUND";
  payload: {
    background_color: string;
    background_container: string;
    text_color: string;
  };
};

export const initialState: State = {
  background_color: "",
  background_container: "",
  text_color: "",
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "CHANGE_BACKGROUND": {
      return {
        ...state,
        background_color: action.payload.background_color,
        background_container: action.payload.background_container,
        text_color: action.payload.text_color,
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
