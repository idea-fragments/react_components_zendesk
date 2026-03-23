import { Button } from "components/forms/Button"
import { Card, CardProps } from "components/layout/Card"
import { Paragraph } from "components/text/Paragraph"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title: "layouts/Card",
  component: Card,
  argTypes: {},
}

const body = (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
    nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis
    nunc.
  </Paragraph>
)

const footerActions = (
  <>
    <Button
      neutral
      onClick={DO_NOTHING}>
      Cancel
    </Button>
    <Button
      onClick={DO_NOTHING}
      primary>
      Confirm
    </Button>
  </>
)

const Story = (args: CardProps) => <Card {...args} />

export const Default = Story.bind({})
// @ts-ignore
Default.args = {
  children: body,
  title: "Card Title",
}

export const WithActions = Story.bind({})
// @ts-ignore
WithActions.args = {
  children: body,
  headerActions: <Button onClick={DO_NOTHING}>Edit</Button>,
  title: "Card Title",
}

export const WithFooter = Story.bind({})
// @ts-ignore
WithFooter.args = {
  children: body,
  footerActions,
  title: "Card Title",
}

export const BodyOnly = Story.bind({})
// @ts-ignore
BodyOnly.args = {
  children: body,
}

export const NoShadow = Story.bind({})
// @ts-ignore
NoShadow.args = {
  children: body,
  shadowed: false,
  title: "Card Title",
}
