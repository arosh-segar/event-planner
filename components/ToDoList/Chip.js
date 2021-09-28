import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Center, Text } from "native-base";

function Chip(props){

  const {selectedOption,onChipSelected,selected} = props


  return(
    <Center border={selected?0:2} borderRadius={20} height={"65%"} borderColor={'lightBlue.600'} bg={selected?'lightBlue.600':''}>
      <TouchableOpacity onPress={()=>onChipSelected(selectedOption)}>
        <Text px={25} color={selected?"#ffff":"lightBlue.600"} fontWeight={700}>{selectedOption.toUpperCase()}</Text>
      </TouchableOpacity>
    </Center>
  )


}

export default Chip;
