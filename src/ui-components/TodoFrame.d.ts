/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoFrameOverridesProps = {
    TodoFrame?: PrimitiveOverrideProps<ViewProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    descBody?: PrimitiveOverrideProps<ViewProps>;
    description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TodoFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    todo?: Todo;
} & {
    overrides?: TodoFrameOverridesProps | undefined | null;
}>;
export default function TodoFrame(props: TodoFrameProps): React.ReactElement;
