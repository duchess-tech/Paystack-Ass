import React, { createContext, PropsWithChildren } from 'react';

type Config = {
  reference: string,
  email: string,
  amount: number,
  publicKey: string
}

type ContextState = {
  config: Config,
  onSuccess: (reference: string) => void,
  onClose: () => void
}

const defaultContextValue: ContextState = {
  config: {
    reference: '',
    email: '',
    amount: 0,
    publicKey: ''
  },
  onSuccess: () => { },
  onClose: () => { }
}


const MyContext = createContext<ContextState>(defaultContextValue)

type ContextProviderProps = PropsWithChildren<{}>

const MyContextProvider: React.FC<ContextProviderProps> = ({ children }): JSX.Element => {
  const config: Config = {
    reference: (new Date()).getTime().toString(),
    email: "estherodedoyin1 @gmail.com",
    amount: 20000,
    publicKey: 'pk_test_b7502175a585cff5d8750392d197e067695c2757'
  };

  const onSuccess = (reference: string) => {
    try {
      console.log(reference)

    } catch (error) {
      console.log("Hit")
      console.log(error)


    }
  }

  const onClose = () => {
    console.log('closed')
  }

  const initialState: ContextState = {
    config,
    onClose,
    onSuccess
  };

  return (
    <MyContext.Provider value={initialState}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext }
