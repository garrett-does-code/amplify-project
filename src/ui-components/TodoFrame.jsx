/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TodoFrame(props) {
  const { todo, overrides, ...rest } = props;
  return (
    <View
      width="380px"
      height="190px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(188,187,187,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "TodoFrame")}
      {...rest}
    >
      <Text
        fontFamily="Lexend"
        fontSize="20px"
        fontWeight="500"
        color="rgba(45,45,45,1)"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 15px - 70px)"
        left="calc(50% - 150px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={todo?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <View
        width="300px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 60px - -13px)"
        left="calc(50% - 150px - 0px)"
        border="1px SOLID rgba(188,187,187,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "descBody")}
      ></View>
      <Text
        fontFamily="Lexend"
        fontSize="14px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="17.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="280px"
        height="95px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 47.5px - -13.5px)"
        left="calc(50% - 140px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={todo?.description}
        {...getOverrideProps(overrides, "description")}
      ></Text>
    </View>
  );
}
