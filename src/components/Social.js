import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="20">
      <a href="https://www.facebook.com/anand.coder" target="_blank">
        <Icon as={FaFacebookF} boxSize="50" />
      </a>
      <a href="https://www.google.com" target="_blank">
        <Icon as={FaGoogle} boxSize="50" />
      </a>
      <a href="https://www.spotify.com/" target="_blank">
        <Icon as={FaSpotify} boxSize="50" />
      </a>
      <a href="https://www.shopify.com/" target="_blank">
        <Icon as={FaShopify} boxSize="50" />
      </a>
    </HStack>
  );
}

export default Social;
