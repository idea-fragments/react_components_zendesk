// // @flow
//
// import { Input }                            from "@zendeskgarden/react-forms"
// import type { TextFieldProps }              from "components/forms/formField.types"
// import { TextFieldWrapper }                 from "components/forms/textfields/TextFieldWrapper"
// import * as React                           from "react"
// import NumberFormat, { NumberFormatValues } from "react-number-format"
// import { DO_NOTHING }                       from "utils/functionHelpers"
// import styled                               from "styled-components"
//
// type Props = TextFieldProps<number, NumberFormatValues>
//
// const CustomInput = (props) => <Input {...props} />
//
// export let CurrencyTextField = (props :Props) => {
//     const {
//               value,
//               onChange,
//           } = props
//
//     return (
//         <TextFieldWrapper {...props}
//                           WrappedComponent={NumberFormat}
//             // customInput={CustomInput}
//                           allowNegative={false}
//                           decimalScale={2}
//                           fixedDecimalScale
//                           onValueChange={onChange}
//             // value={value ? value : ""}
//                           thousandSeparator={true}
//                           mask={"_"}
//                           allowEmptyFormatting={false}
//                           isAllowed={isValueAllowed}
//                           prefix={"$"}
//         />
//     )
// }
//
//
// CurrencyTextField.defaultProps   = {
//     onChange  : DO_NOTHING,
//     emptyState: "$00.00",
// }
// CurrencyTextField                = styled(CurrencyTextField)``
// CurrencyTextField.COMPONENT_NAME = "CurrencyTextField"
//
// const isValueAllowed = ({ value } :NumberFormatValues) => {
//     return !(hasLeadingZero(value) && decimalIsNotSecondChar(value))
// }
//
// const hasLeadingZero         = (numStr :string) => numStr.charAt(0) === "0"
// const decimalIsNotSecondChar = (numStr :string) => numStr.charAt(1) !== "."
//
