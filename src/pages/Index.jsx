import { Box, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const stocks = [
    { name: "AAPL", price: 150.1, change: 0.3 },
    { name: "GOOGL", price: 2734.3, change: -2.1 },
    { name: "AMZN", price: 140.5, change: 1.2 },
    { name: "TSLA", price: 275.3, change: 5.0 },
    { name: "FB", price: 266.77, change: -3.4 },
  ];

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading mb={4}>Stock Market Overview</Heading>
      <List spacing={3}>
        {stocks.map((stock) => (
          <ListItem key={stock.name}>
            <ListIcon as={stock.change >= 0 ? FaArrowUp : FaArrowDown} color={stock.change >= 0 ? "green.500" : "red.500"} />
            {stock.name} - ${stock.price.toFixed(2)} ({stock.change >= 0 ? "+" : ""}
            {stock.change.toFixed(2)}%)
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
