import { ApolloProvider } from "@apollo/client"
import { AppBar, Box } from "@mui/material"
import { client } from "./main"
import { AppThemeProvider } from "./ui/core/components/Theme/ThemeProvider"
import { ThemeToggleContainer } from "./ui/core/containers/ThemeToggleContainer/ThemeToggleContainer"
import { StoreProvider } from "./ui/core/utils/mobx"
import TodoActionsContainer from "./ui/todo/containers/TodoActionsContainer"
import TodoContainer from "./ui/todo/containers/TodosContainer"

function App() {
  return (
    <StoreProvider>
      <ApolloProvider client={client}>
        <AppThemeProvider>
            <AppBar>
              <Box>
                <ThemeToggleContainer />
              </Box>
            </AppBar>
            <Box mt={8} >
              <TodoContainer />
              <TodoActionsContainer />
            </Box>
        </AppThemeProvider>
      </ApolloProvider>
      </StoreProvider>

  )
}

export default App
