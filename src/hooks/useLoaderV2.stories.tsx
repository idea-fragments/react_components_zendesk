import React, { useCallback, useEffect, useState } from "react"

import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"
import { Paragraph } from "components/text/Paragraph"

import { useLoaderV2 } from "hooks/useLoaderV2"

import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  title: "hooks/useLoaderV2",
}

const BasicLoaderStory = () => {
  const { Loader, isLoading, withLoading } = useLoaderV2()
  const [result, setResult] = useState<string>("")

  const handleClick = async () => {
    const data = await withLoading(
      new Promise<string>((resolve) => {
        setTimeout(() => resolve("Data loaded!"), 2000)
      }),
    )
    setResult(data)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={handleClick}>Load Data (2s)</Button>
      <Paragraph>
        Loading state: {isLoading ? "Loading..." : "Not loading"}
      </Paragraph>
      <Paragraph>Result: {result}</Paragraph>
      <Loader>
        <Paragraph>This content is hidden while loading.</Paragraph>
      </Loader>
    </FlexBox>
  )
}

const RemountTestStory = () => {
  const { Loader, isLoading, withLoading } = useLoaderV2()
  const [mountCount, setMountCount] = useState(0)

  const handleClick = useCallback(async () => {
    await withLoading(
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000)
      }),
    )
  }, [withLoading])

  const onMount = useCallback(() => {
    setMountCount((prev) => prev + 1)
  }, [])

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Label>Remount Test</Label>
      <Paragraph>
        This story tests if children remount when loading state changes. The
        counter should increment only once when first mounted, not when loading
        toggles.
      </Paragraph>
      <Button onClick={handleClick}>Toggle Loading (1s)</Button>
      <Paragraph>
        Loading state: {isLoading ? "Loading..." : "Not loading"}
      </Paragraph>
      <Loader
        _css={`width: 200px; height: 200px; background-color: #eee; border-radius: 5px;`}>
        <RemountCounter onMount={onMount} />
      </Loader>
      <Paragraph>Total mounts: {mountCount}</Paragraph>
      <Paragraph>
        Expected: 1 mount initially. If counter increments on each load,
        children are remounting unnecessarily.
      </Paragraph>
    </FlexBox>
  )
}

const RemountCounter = ({ onMount }: { onMount: () => void }) => {
  useEffect(() => {
    onMount()
  }, [onMount])

  return <Paragraph>Child component (watch mount count above)</Paragraph>
}

const MultipleLoadersStory = () => {
  const loader1 = useLoaderV2()
  const loader2 = useLoaderV2()

  const loadFirst = async () => {
    await loader1.withLoading(
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1500)
      }),
    )
  }

  const loadSecond = async () => {
    await loader2.withLoading(
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1500)
      }),
    )
  }

  return (
    <FlexBox
      gap={SPACINGS.LG}
      withRows>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <Label>Loader 1</Label>
        <Button onClick={loadFirst}>Load First (1.5s)</Button>
        <Paragraph>Loading: {loader1.isLoading ? "Yes" : "No"}</Paragraph>
        <loader1.Loader>
          <Paragraph>Content controlled by Loader 1</Paragraph>
        </loader1.Loader>
      </FlexBox>

      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <Label>Loader 2</Label>
        <Button onClick={loadSecond}>Load Second (1.5s)</Button>
        <Paragraph>Loading: {loader2.isLoading ? "Yes" : "No"}</Paragraph>
        <loader2.Loader>
          <Paragraph>Content controlled by Loader 2</Paragraph>
        </loader2.Loader>
      </FlexBox>
    </FlexBox>
  )
}

const WithCustomComponentStory = () => {
  const { Loader, withLoading } = useLoaderV2()

  const handleClick = async () => {
    await withLoading(
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 2000)
      }),
    )
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={handleClick}>Load with Custom Component (2s)</Button>
      <Loader as={FlexBox}>
        <Paragraph>
          This loader uses FlexBox as the wrapper component.
        </Paragraph>
        <Paragraph>
          The "as" prop allows customizing the wrapper element.
        </Paragraph>
      </Loader>
    </FlexBox>
  )
}

const SequentialLoadsStory = () => {
  const { Loader, isLoading, withLoading } = useLoaderV2()
  const [results, setResults] = useState<string[]>([])

  const handleSequentialLoad = async () => {
    setResults([])

    const result1 = await withLoading(
      new Promise<string>((resolve) => {
        setTimeout(() => resolve("Step 1 complete"), 1000)
      }),
    )
    setResults((prev) => [...prev, result1])

    const result2 = await withLoading(
      new Promise<string>((resolve) => {
        setTimeout(() => resolve("Step 2 complete"), 1000)
      }),
    )
    setResults((prev) => [...prev, result2])

    const result3 = await withLoading(
      new Promise<string>((resolve) => {
        setTimeout(() => resolve("Step 3 complete"), 1000)
      }),
    )
    setResults((prev) => [...prev, result3])
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Label>Sequential Loads Test</Label>
      <Button
        disabled={isLoading}
        onClick={handleSequentialLoad}>
        Run Sequential Loads (3s total)
      </Button>
      <Paragraph>Loading: {isLoading ? "Yes" : "No"}</Paragraph>
      <Loader>
        <FlexBox
          gap={SPACINGS.SM}
          withRows>
          <Label>Results:</Label>
          {results.length === 0 ? (
            <Paragraph>No results yet</Paragraph>
          ) : (
            results.map((result, index) => (
              <Paragraph key={index}>{result}</Paragraph>
            ))
          )}
        </FlexBox>
      </Loader>
    </FlexBox>
  )
}

const ErrorHandlingStory = () => {
  const { Loader, isLoading, withLoading } = useLoaderV2()
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")

  const handleSuccess = async () => {
    setError("")
    setSuccess("")
    try {
      await withLoading(
        new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 1000)
        }),
      )
      setSuccess("Success!")
    } catch (e) {
      setError("Error occurred")
    }
  }

  const handleError = async () => {
    setError("")
    setSuccess("")
    try {
      await withLoading(
        new Promise<void>((_, reject) => {
          setTimeout(() => reject(new Error("Simulated error")), 1000)
        }),
      )
    } catch (e) {
      setError("Error: " + (e as Error).message)
    }
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Label>Error Handling Test</Label>
      <FlexBox gap={SPACINGS.SM}>
        <Button onClick={handleSuccess}>Successful Load (1s)</Button>
        <Button onClick={handleError}>Failed Load (1s)</Button>
      </FlexBox>
      <Paragraph>Loading: {isLoading ? "Yes" : "No"}</Paragraph>
      <Paragraph>Success: {success}</Paragraph>
      <Paragraph>Error: {error}</Paragraph>
      <Loader>
        <Paragraph>Content (hidden during loading, even on error)</Paragraph>
      </Loader>
    </FlexBox>
  )
}

export const BasicLoader = BasicLoaderStory.bind({})
// @ts-ignore
BasicLoader.args = {}

export const RemountTest = RemountTestStory.bind({})
// @ts-ignore
RemountTest.args = {}

export const MultipleLoaders = MultipleLoadersStory.bind({})
// @ts-ignore
MultipleLoaders.args = {}

export const WithCustomComponent = WithCustomComponentStory.bind({})
// @ts-ignore
WithCustomComponent.args = {}

export const SequentialLoads = SequentialLoadsStory.bind({})
// @ts-ignore
SequentialLoads.args = {}

export const ErrorHandling = ErrorHandlingStory.bind({})
// @ts-ignore
ErrorHandling.args = {}
