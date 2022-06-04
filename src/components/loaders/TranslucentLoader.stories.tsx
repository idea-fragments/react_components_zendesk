import { Button }            from "components/forms/Button"
import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import { H1, H4 }            from "components/text/Header"
import React, { useState }   from "react"
import styled                from "styled-components"

export default {
  title:     "TranslucentLoader",
  component: TranslucentLoader,
  argTypes:  {},
}

const Story = () => {
  const [isLoading, setIsLoadingTo] = useState(false)

  return <>
    <Button onClick={() => setIsLoadingTo(true)}>Show Loader</Button>
    <Button onClick={() => setIsLoadingTo(false)}>Hide Loader</Button>
    <Container>
      <TranslucentLoader isLoading={isLoading}>
        <H1>The Centered Loading Spinner</H1>
        <H4>Ensuring content below cannot be interacted with.</H4>

        <div>
          The button below should not be able to be clicked while the loader is
          visible.
        </div>
        <Button onClick={() => alert("oh no, I got clicked")}
                primary={false}>
          Try to click me
        </Button>
      </TranslucentLoader>
    </Container>
  </>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}

const Container = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border: 1px solid #eee
`
