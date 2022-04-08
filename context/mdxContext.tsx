import {
    createContext,
    Dispatch,
    ReactElement,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

type ContextProps = {
    prerequisites: Array<string>;
    setPrerequisites: Dispatch<SetStateAction<string[]>>;
    stacks: Array<string>;
    setStacks: Dispatch<SetStateAction<string[]>>;
};

type Props = {
    children: ReactNode;
};

const MdxComponentsContext = createContext({} as ContextProps);

export function MdxComponentsProvider({ children }: Props): ReactElement {
    const [prerequisites, setPrerequisites] = useState<Array<string>>([]);
    const [stacks, setStacks] = useState<Array<string>>([]);

    return (
        <MdxComponentsContext.Provider
            value={{
                prerequisites,
                setPrerequisites,
                stacks,
                setStacks,
            }}
        >
            {children}
        </MdxComponentsContext.Provider>
    );
}

export function useMdxComponentsContext(): ContextProps {
    return useContext(MdxComponentsContext);
}
