/// <reference types="trusted-types" />
import { IItemProps } from "@zendeskgarden/react-dropdowns/dist/typings/types"
import { SelectorOption } from "components/forms/selectors/types"
import { ComponentType } from "react"
import { CSSProp } from "styles/types"
export type ItemProps = Omit<IItemProps, "onClick"> & {
  danger?: boolean
  disabled?: boolean
} & CSSProp
export declare const Item: import("styled-components").StyledComponent<
  import("react").ForwardRefExoticComponent<
    IItemProps & import("react").RefAttributes<HTMLLIElement>
  >,
  import("styled-components").DefaultTheme,
  {
    slot?: string | undefined
    style?: import("react").CSSProperties | undefined
    title?: string | undefined
    color: string
    children?: import("react").ReactNode
    suppressHydrationWarning?: boolean | undefined
    className?: string | undefined
    id?: string | undefined
    lang?: string | undefined
    role?: import("react").AriaRole | undefined
    tabIndex?: number | undefined
    "aria-activedescendant"?: string | undefined
    "aria-atomic"?: (boolean | "true" | "false") | undefined
    "aria-autocomplete"?: "inline" | "none" | "list" | "both" | undefined
    "aria-braillelabel"?: string | undefined
    "aria-brailleroledescription"?: string | undefined
    "aria-busy"?: (boolean | "true" | "false") | undefined
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined
    "aria-colcount"?: number | undefined
    "aria-colindex"?: number | undefined
    "aria-colindextext"?: string | undefined
    "aria-colspan"?: number | undefined
    "aria-controls"?: string | undefined
    "aria-current"?:
      | boolean
      | "time"
      | "step"
      | "date"
      | "true"
      | "false"
      | "page"
      | "location"
      | undefined
    "aria-describedby"?: string | undefined
    "aria-description"?: string | undefined
    "aria-details"?: string | undefined
    "aria-disabled"?: (boolean | "true" | "false") | undefined
    "aria-dropeffect"?:
      | "link"
      | "none"
      | "copy"
      | "execute"
      | "move"
      | "popup"
      | undefined
    "aria-errormessage"?: string | undefined
    "aria-expanded"?: (boolean | "true" | "false") | undefined
    "aria-flowto"?: string | undefined
    "aria-grabbed"?: (boolean | "true" | "false") | undefined
    "aria-haspopup"?:
      | boolean
      | "dialog"
      | "menu"
      | "grid"
      | "listbox"
      | "tree"
      | "true"
      | "false"
      | undefined
    "aria-hidden"?: (boolean | "true" | "false") | undefined
    "aria-invalid"?:
      | boolean
      | "true"
      | "false"
      | "grammar"
      | "spelling"
      | undefined
    "aria-keyshortcuts"?: string | undefined
    "aria-label"?: string | undefined
    "aria-labelledby"?: string | undefined
    "aria-level"?: number | undefined
    "aria-live"?: "off" | "assertive" | "polite" | undefined
    "aria-modal"?: (boolean | "true" | "false") | undefined
    "aria-multiline"?: (boolean | "true" | "false") | undefined
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined
    "aria-orientation"?: "horizontal" | "vertical" | undefined
    "aria-owns"?: string | undefined
    "aria-placeholder"?: string | undefined
    "aria-posinset"?: number | undefined
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined
    "aria-readonly"?: (boolean | "true" | "false") | undefined
    "aria-relevant"?:
      | "text"
      | "additions"
      | "additions removals"
      | "additions text"
      | "all"
      | "removals"
      | "removals additions"
      | "removals text"
      | "text additions"
      | "text removals"
      | undefined
    "aria-required"?: (boolean | "true" | "false") | undefined
    "aria-roledescription"?: string | undefined
    "aria-rowcount"?: number | undefined
    "aria-rowindex"?: number | undefined
    "aria-rowindextext"?: string | undefined
    "aria-rowspan"?: number | undefined
    "aria-selected"?: (boolean | "true" | "false") | undefined
    "aria-setsize"?: number | undefined
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined
    "aria-valuemax"?: number | undefined
    "aria-valuemin"?: number | undefined
    "aria-valuenow"?: number | undefined
    "aria-valuetext"?: string | undefined
    dangerouslySetInnerHTML?:
      | {
          __html: string | TrustedHTML
        }
      | undefined
    onCopy?: import("react").ClipboardEventHandler<HTMLLIElement> | undefined
    onCopyCapture?:
      | import("react").ClipboardEventHandler<HTMLLIElement>
      | undefined
    onCut?: import("react").ClipboardEventHandler<HTMLLIElement> | undefined
    onCutCapture?:
      | import("react").ClipboardEventHandler<HTMLLIElement>
      | undefined
    onPaste?: import("react").ClipboardEventHandler<HTMLLIElement> | undefined
    onPasteCapture?:
      | import("react").ClipboardEventHandler<HTMLLIElement>
      | undefined
    onCompositionEnd?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onCompositionEndCapture?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onCompositionStart?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onCompositionStartCapture?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onCompositionUpdate?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onCompositionUpdateCapture?:
      | import("react").CompositionEventHandler<HTMLLIElement>
      | undefined
    onFocus?: import("react").FocusEventHandler<HTMLLIElement> | undefined
    onFocusCapture?:
      | import("react").FocusEventHandler<HTMLLIElement>
      | undefined
    onBlur?: import("react").FocusEventHandler<HTMLLIElement> | undefined
    onBlurCapture?: import("react").FocusEventHandler<HTMLLIElement> | undefined
    onChange?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onChangeCapture?:
      | import("react").FormEventHandler<HTMLLIElement>
      | undefined
    onBeforeInput?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onBeforeInputCapture?:
      | import("react").FormEventHandler<HTMLLIElement>
      | undefined
    onInput?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onInputCapture?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onReset?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onResetCapture?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onSubmit?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onSubmitCapture?:
      | import("react").FormEventHandler<HTMLLIElement>
      | undefined
    onInvalid?: import("react").FormEventHandler<HTMLLIElement> | undefined
    onInvalidCapture?:
      | import("react").FormEventHandler<HTMLLIElement>
      | undefined
    onLoad?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onLoadCapture?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onError?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onErrorCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onKeyDown?: import("react").KeyboardEventHandler<HTMLLIElement> | undefined
    onKeyDownCapture?:
      | import("react").KeyboardEventHandler<HTMLLIElement>
      | undefined
    onKeyPress?: import("react").KeyboardEventHandler<HTMLLIElement> | undefined
    onKeyPressCapture?:
      | import("react").KeyboardEventHandler<HTMLLIElement>
      | undefined
    onKeyUp?: import("react").KeyboardEventHandler<HTMLLIElement> | undefined
    onKeyUpCapture?:
      | import("react").KeyboardEventHandler<HTMLLIElement>
      | undefined
    onAbort?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onAbortCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onCanPlay?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onCanPlayCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onCanPlayThrough?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onCanPlayThroughCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onDurationChange?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onDurationChangeCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onEmptied?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onEmptiedCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onEncrypted?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onEncryptedCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onEnded?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onEndedCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onLoadedData?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onLoadedDataCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onLoadedMetadata?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onLoadedMetadataCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onLoadStart?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onLoadStartCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onPause?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onPauseCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onPlay?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onPlayCapture?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onPlaying?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onPlayingCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onProgress?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onProgressCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onRateChange?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onRateChangeCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onResize?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onResizeCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onSeeked?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onSeekedCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onSeeking?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onSeekingCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onStalled?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onStalledCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onSuspend?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onSuspendCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onTimeUpdate?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onTimeUpdateCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onVolumeChange?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onVolumeChangeCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onWaiting?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onWaitingCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onAuxClick?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onAuxClickCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onClickCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onContextMenu?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onContextMenuCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onDoubleClick?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onDoubleClickCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onDrag?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragCapture?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragEnd?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragEndCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDragEnter?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragEnterCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDragExit?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragExitCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDragLeave?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragLeaveCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDragOver?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragOverCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDragStart?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDragStartCapture?:
      | import("react").DragEventHandler<HTMLLIElement>
      | undefined
    onDrop?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onDropCapture?: import("react").DragEventHandler<HTMLLIElement> | undefined
    onMouseDown?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseDownCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onMouseEnter?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseLeave?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseMove?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseMoveCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onMouseOut?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseOutCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onMouseOver?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseOverCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onMouseUp?: import("react").MouseEventHandler<HTMLLIElement> | undefined
    onMouseUpCapture?:
      | import("react").MouseEventHandler<HTMLLIElement>
      | undefined
    onSelect?: import("react").ReactEventHandler<HTMLLIElement> | undefined
    onSelectCapture?:
      | import("react").ReactEventHandler<HTMLLIElement>
      | undefined
    onTouchCancel?: import("react").TouchEventHandler<HTMLLIElement> | undefined
    onTouchCancelCapture?:
      | import("react").TouchEventHandler<HTMLLIElement>
      | undefined
    onTouchEnd?: import("react").TouchEventHandler<HTMLLIElement> | undefined
    onTouchEndCapture?:
      | import("react").TouchEventHandler<HTMLLIElement>
      | undefined
    onTouchMove?: import("react").TouchEventHandler<HTMLLIElement> | undefined
    onTouchMoveCapture?:
      | import("react").TouchEventHandler<HTMLLIElement>
      | undefined
    onTouchStart?: import("react").TouchEventHandler<HTMLLIElement> | undefined
    onTouchStartCapture?:
      | import("react").TouchEventHandler<HTMLLIElement>
      | undefined
    onPointerDown?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerDownCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerMove?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerMoveCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerUp?: import("react").PointerEventHandler<HTMLLIElement> | undefined
    onPointerUpCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerCancel?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerCancelCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerEnter?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerEnterCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerLeave?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerLeaveCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerOver?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerOverCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerOut?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onPointerOutCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onGotPointerCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onGotPointerCaptureCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onLostPointerCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onLostPointerCaptureCapture?:
      | import("react").PointerEventHandler<HTMLLIElement>
      | undefined
    onScroll?: import("react").UIEventHandler<HTMLLIElement> | undefined
    onScrollCapture?: import("react").UIEventHandler<HTMLLIElement> | undefined
    onWheel?: import("react").WheelEventHandler<HTMLLIElement> | undefined
    onWheelCapture?:
      | import("react").WheelEventHandler<HTMLLIElement>
      | undefined
    onAnimationStart?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onAnimationStartCapture?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onAnimationEnd?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onAnimationEndCapture?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onAnimationIteration?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onAnimationIterationCapture?:
      | import("react").AnimationEventHandler<HTMLLIElement>
      | undefined
    onTransitionEnd?:
      | import("react").TransitionEventHandler<HTMLLIElement>
      | undefined
    onTransitionEndCapture?:
      | import("react").TransitionEventHandler<HTMLLIElement>
      | undefined
    defaultChecked?: boolean | undefined
    defaultValue?: string | number | readonly string[] | undefined
    suppressContentEditableWarning?: boolean | undefined
    accessKey?: string | undefined
    autoFocus?: boolean | undefined
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined
    contextMenu?: string | undefined
    dir?: string | undefined
    draggable?: (boolean | "true" | "false") | undefined
    hidden?: boolean | undefined
    nonce?: string | undefined
    placeholder?: string | undefined
    spellCheck?: (boolean | "true" | "false") | undefined
    translate?: "no" | "yes" | undefined
    radioGroup?: string | undefined
    about?: string | undefined
    content?: string | undefined
    datatype?: string | undefined
    inlist?: any
    prefix?: string | undefined
    property?: string | undefined
    rel?: string | undefined
    resource?: string | undefined
    rev?: string | undefined
    typeof?: string | undefined
    vocab?: string | undefined
    autoCapitalize?: string | undefined
    autoCorrect?: string | undefined
    autoSave?: string | undefined
    itemProp?: string | undefined
    itemScope?: boolean | undefined
    itemType?: string | undefined
    itemID?: string | undefined
    itemRef?: string | undefined
    results?: number | undefined
    security?: string | undefined
    unselectable?: "on" | "off" | undefined
    inputMode?:
      | "search"
      | "text"
      | "none"
      | "email"
      | "tel"
      | "url"
      | "numeric"
      | "decimal"
      | undefined
    is?: string | undefined
    disabled?: boolean | undefined
    value?: any
    isDanger?: boolean | undefined
    component?: any
    hasIcon?: boolean | undefined
    _css?: any
    primary: boolean
  } & Omit<IItemProps, "onClick"> & {
      danger?: boolean | undefined
      disabled?: boolean | undefined
    } & CSSProp<any>,
  | "slot"
  | "style"
  | "title"
  | "color"
  | "primary"
  | "children"
  | "suppressHydrationWarning"
  | "className"
  | "id"
  | "lang"
  | "role"
  | "tabIndex"
  | "aria-activedescendant"
  | "aria-atomic"
  | "aria-autocomplete"
  | "aria-braillelabel"
  | "aria-brailleroledescription"
  | "aria-busy"
  | "aria-checked"
  | "aria-colcount"
  | "aria-colindex"
  | "aria-colindextext"
  | "aria-colspan"
  | "aria-controls"
  | "aria-current"
  | "aria-describedby"
  | "aria-description"
  | "aria-details"
  | "aria-disabled"
  | "aria-dropeffect"
  | "aria-errormessage"
  | "aria-expanded"
  | "aria-flowto"
  | "aria-grabbed"
  | "aria-haspopup"
  | "aria-hidden"
  | "aria-invalid"
  | "aria-keyshortcuts"
  | "aria-label"
  | "aria-labelledby"
  | "aria-level"
  | "aria-live"
  | "aria-modal"
  | "aria-multiline"
  | "aria-multiselectable"
  | "aria-orientation"
  | "aria-owns"
  | "aria-placeholder"
  | "aria-posinset"
  | "aria-pressed"
  | "aria-readonly"
  | "aria-relevant"
  | "aria-required"
  | "aria-roledescription"
  | "aria-rowcount"
  | "aria-rowindex"
  | "aria-rowindextext"
  | "aria-rowspan"
  | "aria-selected"
  | "aria-setsize"
  | "aria-sort"
  | "aria-valuemax"
  | "aria-valuemin"
  | "aria-valuenow"
  | "aria-valuetext"
  | "dangerouslySetInnerHTML"
  | "onCopy"
  | "onCopyCapture"
  | "onCut"
  | "onCutCapture"
  | "onPaste"
  | "onPasteCapture"
  | "onCompositionEnd"
  | "onCompositionEndCapture"
  | "onCompositionStart"
  | "onCompositionStartCapture"
  | "onCompositionUpdate"
  | "onCompositionUpdateCapture"
  | "onFocus"
  | "onFocusCapture"
  | "onBlur"
  | "onBlurCapture"
  | "onChange"
  | "onChangeCapture"
  | "onBeforeInput"
  | "onBeforeInputCapture"
  | "onInput"
  | "onInputCapture"
  | "onReset"
  | "onResetCapture"
  | "onSubmit"
  | "onSubmitCapture"
  | "onInvalid"
  | "onInvalidCapture"
  | "onLoad"
  | "onLoadCapture"
  | "onError"
  | "onErrorCapture"
  | "onKeyDown"
  | "onKeyDownCapture"
  | "onKeyPress"
  | "onKeyPressCapture"
  | "onKeyUp"
  | "onKeyUpCapture"
  | "onAbort"
  | "onAbortCapture"
  | "onCanPlay"
  | "onCanPlayCapture"
  | "onCanPlayThrough"
  | "onCanPlayThroughCapture"
  | "onDurationChange"
  | "onDurationChangeCapture"
  | "onEmptied"
  | "onEmptiedCapture"
  | "onEncrypted"
  | "onEncryptedCapture"
  | "onEnded"
  | "onEndedCapture"
  | "onLoadedData"
  | "onLoadedDataCapture"
  | "onLoadedMetadata"
  | "onLoadedMetadataCapture"
  | "onLoadStart"
  | "onLoadStartCapture"
  | "onPause"
  | "onPauseCapture"
  | "onPlay"
  | "onPlayCapture"
  | "onPlaying"
  | "onPlayingCapture"
  | "onProgress"
  | "onProgressCapture"
  | "onRateChange"
  | "onRateChangeCapture"
  | "onResize"
  | "onResizeCapture"
  | "onSeeked"
  | "onSeekedCapture"
  | "onSeeking"
  | "onSeekingCapture"
  | "onStalled"
  | "onStalledCapture"
  | "onSuspend"
  | "onSuspendCapture"
  | "onTimeUpdate"
  | "onTimeUpdateCapture"
  | "onVolumeChange"
  | "onVolumeChangeCapture"
  | "onWaiting"
  | "onWaitingCapture"
  | "onAuxClick"
  | "onAuxClickCapture"
  | "onClickCapture"
  | "onContextMenu"
  | "onContextMenuCapture"
  | "onDoubleClick"
  | "onDoubleClickCapture"
  | "onDrag"
  | "onDragCapture"
  | "onDragEnd"
  | "onDragEndCapture"
  | "onDragEnter"
  | "onDragEnterCapture"
  | "onDragExit"
  | "onDragExitCapture"
  | "onDragLeave"
  | "onDragLeaveCapture"
  | "onDragOver"
  | "onDragOverCapture"
  | "onDragStart"
  | "onDragStartCapture"
  | "onDrop"
  | "onDropCapture"
  | "onMouseDown"
  | "onMouseDownCapture"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseMove"
  | "onMouseMoveCapture"
  | "onMouseOut"
  | "onMouseOutCapture"
  | "onMouseOver"
  | "onMouseOverCapture"
  | "onMouseUp"
  | "onMouseUpCapture"
  | "onSelect"
  | "onSelectCapture"
  | "onTouchCancel"
  | "onTouchCancelCapture"
  | "onTouchEnd"
  | "onTouchEndCapture"
  | "onTouchMove"
  | "onTouchMoveCapture"
  | "onTouchStart"
  | "onTouchStartCapture"
  | "onPointerDown"
  | "onPointerDownCapture"
  | "onPointerMove"
  | "onPointerMoveCapture"
  | "onPointerUp"
  | "onPointerUpCapture"
  | "onPointerCancel"
  | "onPointerCancelCapture"
  | "onPointerEnter"
  | "onPointerEnterCapture"
  | "onPointerLeave"
  | "onPointerLeaveCapture"
  | "onPointerOver"
  | "onPointerOverCapture"
  | "onPointerOut"
  | "onPointerOutCapture"
  | "onGotPointerCapture"
  | "onGotPointerCaptureCapture"
  | "onLostPointerCapture"
  | "onLostPointerCaptureCapture"
  | "onScroll"
  | "onScrollCapture"
  | "onWheel"
  | "onWheelCapture"
  | "onAnimationStart"
  | "onAnimationStartCapture"
  | "onAnimationEnd"
  | "onAnimationEndCapture"
  | "onAnimationIteration"
  | "onAnimationIterationCapture"
  | "onTransitionEnd"
  | "onTransitionEndCapture"
  | "defaultChecked"
  | "defaultValue"
  | "suppressContentEditableWarning"
  | "accessKey"
  | "autoFocus"
  | "contentEditable"
  | "contextMenu"
  | "dir"
  | "draggable"
  | "hidden"
  | "nonce"
  | "placeholder"
  | "spellCheck"
  | "translate"
  | "radioGroup"
  | "about"
  | "content"
  | "datatype"
  | "inlist"
  | "prefix"
  | "property"
  | "rel"
  | "resource"
  | "rev"
  | "typeof"
  | "vocab"
  | "autoCapitalize"
  | "autoCorrect"
  | "autoSave"
  | "itemProp"
  | "itemScope"
  | "itemType"
  | "itemID"
  | "itemRef"
  | "results"
  | "security"
  | "unselectable"
  | "inputMode"
  | "is"
  | "_css"
  | "disabled"
  | "value"
  | "isDanger"
  | "component"
  | "hasIcon"
>
export declare const getItemType: (
  o: SelectorOption,
) => ComponentType<ItemProps> | typeof Item
//# sourceMappingURL=Item.d.ts.map
