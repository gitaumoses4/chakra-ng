import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy } from "@angular/core";
import { BehaviorSubject, map, Observable, of, Subscription } from "rxjs";
import { stylesKeys } from "../styles.keys";
import { ChakraStyles } from "../types";
import { StylesService } from "../../styles";
import { ThemeService } from "../../theme";

type Inputs = {
  [K in keyof Required<ChakraStyles>]: ChakraStyles[K] | undefined;
};

@Directive()
export abstract class ChakraElement implements Inputs, OnChanges, OnDestroy {
  @Input() __css: ChakraStyles["__css"] | undefined;
  @Input() _active: ChakraStyles["_active"] | undefined;
  @Input() _activeLink: ChakraStyles["_activeLink"] | undefined;
  @Input() _activeStep: ChakraStyles["_activeStep"] | undefined;
  @Input() _after: ChakraStyles["_after"] | undefined;
  @Input() _autofill: ChakraStyles["_autofill"] | undefined;
  @Input() _before: ChakraStyles["_before"] | undefined;
  @Input() _checked: ChakraStyles["_checked"] | undefined;
  @Input() _dark: ChakraStyles["_dark"] | undefined;
  @Input() _disabled: ChakraStyles["_disabled"] | undefined;
  @Input() _empty: ChakraStyles["_empty"] | undefined;
  @Input() _even: ChakraStyles["_even"] | undefined;
  @Input() _expanded: ChakraStyles["_expanded"] | undefined;
  @Input() _first: ChakraStyles["_first"] | undefined;
  @Input() _firstLetter: ChakraStyles["_firstLetter"] | undefined;
  @Input() _focus: ChakraStyles["_focus"] | undefined;
  @Input() _focusVisible: ChakraStyles["_focusVisible"] | undefined;
  @Input() _focusWithin: ChakraStyles["_focusWithin"] | undefined;
  @Input() _fullScreen: ChakraStyles["_fullScreen"] | undefined;
  @Input() _grabbed: ChakraStyles["_grabbed"] | undefined;
  @Input() _groupActive: ChakraStyles["_groupActive"] | undefined;
  @Input() _groupChecked: ChakraStyles["_groupChecked"] | undefined;
  @Input() _groupDisabled: ChakraStyles["_groupDisabled"] | undefined;
  @Input() _groupFocus: ChakraStyles["_groupFocus"] | undefined;
  @Input() _groupFocusVisible: ChakraStyles["_groupFocusVisible"] | undefined;
  @Input() _groupFocusWithin: ChakraStyles["_groupFocusWithin"] | undefined;
  @Input() _groupHover: ChakraStyles["_groupHover"] | undefined;
  @Input() _groupInvalid: ChakraStyles["_groupInvalid"] | undefined;
  @Input() _hidden: ChakraStyles["_hidden"] | undefined;
  @Input() _highlighted: ChakraStyles["_highlighted"] | undefined;
  @Input() _horizontal: ChakraStyles["_horizontal"] | undefined;
  @Input() _hover: ChakraStyles["_hover"] | undefined;
  @Input() _indeterminate: ChakraStyles["_indeterminate"] | undefined;
  @Input() _invalid: ChakraStyles["_invalid"] | undefined;
  @Input() _last: ChakraStyles["_last"] | undefined;
  @Input() _light: ChakraStyles["_light"] | undefined;
  @Input() _loading: ChakraStyles["_loading"] | undefined;
  @Input() _ltr: ChakraStyles["_ltr"] | undefined;
  @Input() _mediaDark: ChakraStyles["_mediaDark"] | undefined;
  @Input() _mediaReduceMotion: ChakraStyles["_mediaReduceMotion"] | undefined;
  @Input() _notFirst: ChakraStyles["_notFirst"] | undefined;
  @Input() _notLast: ChakraStyles["_notLast"] | undefined;
  @Input() _odd: ChakraStyles["_odd"] | undefined;
  @Input() _peerActive: ChakraStyles["_peerActive"] | undefined;
  @Input() _peerChecked: ChakraStyles["_peerChecked"] | undefined;
  @Input() _peerDisabled: ChakraStyles["_peerDisabled"] | undefined;
  @Input() _peerFocus: ChakraStyles["_peerFocus"] | undefined;
  @Input() _peerFocusVisible: ChakraStyles["_peerFocusVisible"] | undefined;
  @Input() _peerFocusWithin: ChakraStyles["_peerFocusWithin"] | undefined;
  @Input() _peerHover: ChakraStyles["_peerHover"] | undefined;
  @Input() _peerInvalid: ChakraStyles["_peerInvalid"] | undefined;
  @Input() _peerPlaceholderShown: ChakraStyles["_peerPlaceholderShown"] | undefined;
  @Input() _placeholder: ChakraStyles["_placeholder"] | undefined;
  @Input() _placeholderShown: ChakraStyles["_placeholderShown"] | undefined;
  @Input() _pressed: ChakraStyles["_pressed"] | undefined;
  @Input() _readOnly: ChakraStyles["_readOnly"] | undefined;
  @Input() _rtl: ChakraStyles["_rtl"] | undefined;
  @Input() _selected: ChakraStyles["_selected"] | undefined;
  @Input() _selection: ChakraStyles["_selection"] | undefined;
  @Input() _valid: ChakraStyles["_valid"] | undefined;
  @Input() _vertical: ChakraStyles["_vertical"] | undefined;
  @Input() _visited: ChakraStyles["_visited"] | undefined;
  @Input() alignContent: ChakraStyles["alignContent"] | undefined;
  @Input() alignItems: ChakraStyles["alignItems"] | undefined;
  @Input() alignSelf: ChakraStyles["alignSelf"] | undefined;
  @Input() animation: ChakraStyles["animation"] | undefined;
  @Input() appearance: ChakraStyles["appearance"] | undefined;
  @Input() apply: ChakraStyles["apply"] | undefined;
  @Input() aspectRatio: ChakraStyles["aspectRatio"] | undefined;
  @Input() backdropBlur: ChakraStyles["backdropBlur"] | undefined;
  @Input() backdropBrightness: ChakraStyles["backdropBrightness"] | undefined;
  @Input() backdropContrast: ChakraStyles["backdropContrast"] | undefined;
  @Input() backdropFilter: ChakraStyles["backdropFilter"] | undefined;
  @Input() backdropHueRotate: ChakraStyles["backdropHueRotate"] | undefined;
  @Input() backdropInvert: ChakraStyles["backdropInvert"] | undefined;
  @Input() backdropSaturate: ChakraStyles["backdropSaturate"] | undefined;
  @Input() background: ChakraStyles["background"] | undefined;
  @Input() backgroundAttachment: ChakraStyles["backgroundAttachment"] | undefined;
  @Input() backgroundBlendMode: ChakraStyles["backgroundBlendMode"] | undefined;
  @Input() backgroundClip: ChakraStyles["backgroundClip"] | undefined;
  @Input() backgroundColor: ChakraStyles["backgroundColor"] | undefined;
  @Input() backgroundImage: ChakraStyles["backgroundImage"] | undefined;
  @Input() backgroundPosition: ChakraStyles["backgroundPosition"] | undefined;
  @Input() backgroundRepeat: ChakraStyles["backgroundRepeat"] | undefined;
  @Input() backgroundSize: ChakraStyles["backgroundSize"] | undefined;
  @Input() bg: ChakraStyles["bg"] | undefined;
  @Input() bgAttachment: ChakraStyles["bgAttachment"] | undefined;
  @Input() bgBlendMode: ChakraStyles["bgBlendMode"] | undefined;
  @Input() bgClip: ChakraStyles["bgClip"] | undefined;
  @Input() bgColor: ChakraStyles["bgColor"] | undefined;
  @Input() bgGradient: ChakraStyles["bgGradient"] | undefined;
  @Input() bgImage: ChakraStyles["bgImage"] | undefined;
  @Input() bgImg: ChakraStyles["bgImg"] | undefined;
  @Input() bgPos: ChakraStyles["bgPos"] | undefined;
  @Input() bgPosition: ChakraStyles["bgPosition"] | undefined;
  @Input() bgRepeat: ChakraStyles["bgRepeat"] | undefined;
  @Input() bgSize: ChakraStyles["bgSize"] | undefined;
  @Input() blendMode: ChakraStyles["blendMode"] | undefined;
  @Input() blockSize: ChakraStyles["blockSize"] | undefined;
  @Input() blur: ChakraStyles["blur"] | undefined;
  @Input() border: ChakraStyles["border"] | undefined;
  @Input() borderBlock: ChakraStyles["borderBlock"] | undefined;
  @Input() borderBlockEnd: ChakraStyles["borderBlockEnd"] | undefined;
  @Input() borderBlockEndColor: ChakraStyles["borderBlockEndColor"] | undefined;
  @Input() borderBlockEndStyle: ChakraStyles["borderBlockEndStyle"] | undefined;
  @Input() borderBlockEndWidth: ChakraStyles["borderBlockEndWidth"] | undefined;
  @Input() borderBlockStart: ChakraStyles["borderBlockStart"] | undefined;
  @Input() borderBlockStartColor: ChakraStyles["borderBlockStartColor"] | undefined;
  @Input() borderBlockStartStyle: ChakraStyles["borderBlockStartStyle"] | undefined;
  @Input() borderBlockStartWidth: ChakraStyles["borderBlockStartWidth"] | undefined;
  @Input() borderBottom: ChakraStyles["borderBottom"] | undefined;
  @Input() borderBottomColor: ChakraStyles["borderBottomColor"] | undefined;
  @Input() borderBottomEndRadius: ChakraStyles["borderBottomEndRadius"] | undefined;
  @Input() borderBottomLeftRadius: ChakraStyles["borderBottomLeftRadius"] | undefined;
  @Input() borderBottomRadius: ChakraStyles["borderBottomRadius"] | undefined;
  @Input() borderBottomRightRadius: ChakraStyles["borderBottomRightRadius"] | undefined;
  @Input() borderBottomStartRadius: ChakraStyles["borderBottomStartRadius"] | undefined;
  @Input() borderBottomStyle: ChakraStyles["borderBottomStyle"] | undefined;
  @Input() borderBottomWidth: ChakraStyles["borderBottomWidth"] | undefined;
  @Input() borderColor: ChakraStyles["borderColor"] | undefined;
  @Input() borderEnd: ChakraStyles["borderEnd"] | undefined;
  @Input() borderEndColor: ChakraStyles["borderEndColor"] | undefined;
  @Input() borderEndEndRadius: ChakraStyles["borderEndEndRadius"] | undefined;
  @Input() borderEndRadius: ChakraStyles["borderEndRadius"] | undefined;
  @Input() borderEndStartRadius: ChakraStyles["borderEndStartRadius"] | undefined;
  @Input() borderEndStyle: ChakraStyles["borderEndStyle"] | undefined;
  @Input() borderEndWidth: ChakraStyles["borderEndWidth"] | undefined;
  @Input() borderInline: ChakraStyles["borderInline"] | undefined;
  @Input() borderInlineEnd: ChakraStyles["borderInlineEnd"] | undefined;
  @Input() borderInlineEndColor: ChakraStyles["borderInlineEndColor"] | undefined;
  @Input() borderInlineEndRadius: ChakraStyles["borderInlineEndRadius"] | undefined;
  @Input() borderInlineEndStyle: ChakraStyles["borderInlineEndStyle"] | undefined;
  @Input() borderInlineEndWidth: ChakraStyles["borderInlineEndWidth"] | undefined;
  @Input() borderInlineStart: ChakraStyles["borderInlineStart"] | undefined;
  @Input() borderInlineStartColor: ChakraStyles["borderInlineStartColor"] | undefined;
  @Input() borderInlineStartRadius: ChakraStyles["borderInlineStartRadius"] | undefined;
  @Input() borderInlineStartStyle: ChakraStyles["borderInlineStartStyle"] | undefined;
  @Input() borderInlineStartWidth: ChakraStyles["borderInlineStartWidth"] | undefined;
  @Input() borderLeft: ChakraStyles["borderLeft"] | undefined;
  @Input() borderLeftColor: ChakraStyles["borderLeftColor"] | undefined;
  @Input() borderLeftRadius: ChakraStyles["borderLeftRadius"] | undefined;
  @Input() borderLeftStyle: ChakraStyles["borderLeftStyle"] | undefined;
  @Input() borderLeftWidth: ChakraStyles["borderLeftWidth"] | undefined;
  @Input() borderRadius: ChakraStyles["borderRadius"] | undefined;
  @Input() borderRight: ChakraStyles["borderRight"] | undefined;
  @Input() borderRightColor: ChakraStyles["borderRightColor"] | undefined;
  @Input() borderRightRadius: ChakraStyles["borderRightRadius"] | undefined;
  @Input() borderRightStyle: ChakraStyles["borderRightStyle"] | undefined;
  @Input() borderRightWidth: ChakraStyles["borderRightWidth"] | undefined;
  @Input() borderStart: ChakraStyles["borderStart"] | undefined;
  @Input() borderStartColor: ChakraStyles["borderStartColor"] | undefined;
  @Input() borderStartEndRadius: ChakraStyles["borderStartEndRadius"] | undefined;
  @Input() borderStartRadius: ChakraStyles["borderStartRadius"] | undefined;
  @Input() borderStartStartRadius: ChakraStyles["borderStartStartRadius"] | undefined;
  @Input() borderStartStyle: ChakraStyles["borderStartStyle"] | undefined;
  @Input() borderStartWidth: ChakraStyles["borderStartWidth"] | undefined;
  @Input() borderStyle: ChakraStyles["borderStyle"] | undefined;
  @Input() borderTop: ChakraStyles["borderTop"] | undefined;
  @Input() borderTopColor: ChakraStyles["borderTopColor"] | undefined;
  @Input() borderTopEndRadius: ChakraStyles["borderTopEndRadius"] | undefined;
  @Input() borderTopLeftRadius: ChakraStyles["borderTopLeftRadius"] | undefined;
  @Input() borderTopRadius: ChakraStyles["borderTopRadius"] | undefined;
  @Input() borderTopRightRadius: ChakraStyles["borderTopRightRadius"] | undefined;
  @Input() borderTopStartRadius: ChakraStyles["borderTopStartRadius"] | undefined;
  @Input() borderTopStyle: ChakraStyles["borderTopStyle"] | undefined;
  @Input() borderTopWidth: ChakraStyles["borderTopWidth"] | undefined;
  @Input() borderWidth: ChakraStyles["borderWidth"] | undefined;
  @Input() borderX: ChakraStyles["borderX"] | undefined;
  @Input() borderY: ChakraStyles["borderY"] | undefined;
  @Input() bottom: ChakraStyles["bottom"] | undefined;
  @Input() boxDecorationBreak: ChakraStyles["boxDecorationBreak"] | undefined;
  @Input() boxShadow: ChakraStyles["boxShadow"] | undefined;
  @Input() boxSize: ChakraStyles["boxSize"] | undefined;
  @Input() boxSizing: ChakraStyles["boxSizing"] | undefined;
  @Input() brightness: ChakraStyles["brightness"] | undefined;
  @Input() clipPath: ChakraStyles["clipPath"] | undefined;
  @Input() color: ChakraStyles["color"] | undefined;
  @Input() columnGap: ChakraStyles["columnGap"] | undefined;
  @Input() contrast: ChakraStyles["contrast"] | undefined;
  @Input() css: ChakraStyles["css"] | undefined;
  @Input() cursor: ChakraStyles["cursor"] | undefined;
  @Input() display: ChakraStyles["display"] | undefined;
  @Input() dropShadow: ChakraStyles["dropShadow"] | undefined;
  @Input() fill: ChakraStyles["fill"] | undefined;
  @Input() filter: ChakraStyles["filter"] | undefined;
  @Input() flex: ChakraStyles["flex"] | undefined;
  @Input() flexBasis: ChakraStyles["flexBasis"] | undefined;
  @Input() flexDir: ChakraStyles["flexDir"] | undefined;
  @Input() flexDirection: ChakraStyles["flexDirection"] | undefined;
  @Input() flexFlow: ChakraStyles["flexFlow"] | undefined;
  @Input() flexGrow: ChakraStyles["flexGrow"] | undefined;
  @Input() flexShrink: ChakraStyles["flexShrink"] | undefined;
  @Input() flexWrap: ChakraStyles["flexWrap"] | undefined;
  @Input() float: ChakraStyles["float"] | undefined;
  @Input() fontFamily: ChakraStyles["fontFamily"] | undefined;
  @Input() fontSize: ChakraStyles["fontSize"] | undefined;
  @Input() fontStyle: ChakraStyles["fontStyle"] | undefined;
  @Input() fontWeight: ChakraStyles["fontWeight"] | undefined;
  @Input() gap: ChakraStyles["gap"] | undefined;
  @Input() gridArea: ChakraStyles["gridArea"] | undefined;
  @Input() gridAutoColumns: ChakraStyles["gridAutoColumns"] | undefined;
  @Input() gridAutoFlow: ChakraStyles["gridAutoFlow"] | undefined;
  @Input() gridAutoRows: ChakraStyles["gridAutoRows"] | undefined;
  @Input() gridColumn: ChakraStyles["gridColumn"] | undefined;
  @Input() gridColumnEnd: ChakraStyles["gridColumnEnd"] | undefined;
  @Input() gridColumnGap: ChakraStyles["gridColumnGap"] | undefined;
  @Input() gridColumnStart: ChakraStyles["gridColumnStart"] | undefined;
  @Input() gridGap: ChakraStyles["gridGap"] | undefined;
  @Input() gridRow: ChakraStyles["gridRow"] | undefined;
  @Input() gridRowEnd: ChakraStyles["gridRowEnd"] | undefined;
  @Input() gridRowGap: ChakraStyles["gridRowGap"] | undefined;
  @Input() gridRowStart: ChakraStyles["gridRowStart"] | undefined;
  @Input() gridTemplate: ChakraStyles["gridTemplate"] | undefined;
  @Input() gridTemplateAreas: ChakraStyles["gridTemplateAreas"] | undefined;
  @Input() gridTemplateColumns: ChakraStyles["gridTemplateColumns"] | undefined;
  @Input() gridTemplateRows: ChakraStyles["gridTemplateRows"] | undefined;
  @Input() h: ChakraStyles["h"] | undefined;
  @Input() height: ChakraStyles["height"] | undefined;
  @Input() hideBelow: ChakraStyles["hideBelow"] | undefined;
  @Input() hideFrom: ChakraStyles["hideFrom"] | undefined;
  @Input() hueRotate: ChakraStyles["hueRotate"] | undefined;
  @Input() inlineSize: ChakraStyles["inlineSize"] | undefined;
  @Input() inset: ChakraStyles["inset"] | undefined;
  @Input() insetBlock: ChakraStyles["insetBlock"] | undefined;
  @Input() insetBlockEnd: ChakraStyles["insetBlockEnd"] | undefined;
  @Input() insetBlockStart: ChakraStyles["insetBlockStart"] | undefined;
  @Input() insetEnd: ChakraStyles["insetEnd"] | undefined;
  @Input() insetInline: ChakraStyles["insetInline"] | undefined;
  @Input() insetInlineEnd: ChakraStyles["insetInlineEnd"] | undefined;
  @Input() insetInlineStart: ChakraStyles["insetInlineStart"] | undefined;
  @Input() insetStart: ChakraStyles["insetStart"] | undefined;
  @Input() insetX: ChakraStyles["insetX"] | undefined;
  @Input() insetY: ChakraStyles["insetY"] | undefined;
  @Input() invert: ChakraStyles["invert"] | undefined;
  @Input() isTruncated: ChakraStyles["isTruncated"] | undefined;
  @Input() isolation: ChakraStyles["isolation"] | undefined;
  @Input() justifyContent: ChakraStyles["justifyContent"] | undefined;
  @Input() justifyItems: ChakraStyles["justifyItems"] | undefined;
  @Input() justifySelf: ChakraStyles["justifySelf"] | undefined;
  @Input() layerStyle: ChakraStyles["layerStyle"] | undefined;
  @Input() left: ChakraStyles["left"] | undefined;
  @Input() letterSpacing: ChakraStyles["letterSpacing"] | undefined;
  @Input() lineHeight: ChakraStyles["lineHeight"] | undefined;
  @Input() listStyleImage: ChakraStyles["listStyleImage"] | undefined;
  @Input() listStyleImg: ChakraStyles["listStyleImg"] | undefined;
  @Input() listStylePos: ChakraStyles["listStylePos"] | undefined;
  @Input() listStylePosition: ChakraStyles["listStylePosition"] | undefined;
  @Input() listStyleType: ChakraStyles["listStyleType"] | undefined;
  @Input() m: ChakraStyles["m"] | undefined;
  @Input() margin: ChakraStyles["margin"] | undefined;
  @Input() marginBlock: ChakraStyles["marginBlock"] | undefined;
  @Input() marginBlockEnd: ChakraStyles["marginBlockEnd"] | undefined;
  @Input() marginBlockStart: ChakraStyles["marginBlockStart"] | undefined;
  @Input() marginBottom: ChakraStyles["marginBottom"] | undefined;
  @Input() marginEnd: ChakraStyles["marginEnd"] | undefined;
  @Input() marginInline: ChakraStyles["marginInline"] | undefined;
  @Input() marginInlineEnd: ChakraStyles["marginInlineEnd"] | undefined;
  @Input() marginInlineStart: ChakraStyles["marginInlineStart"] | undefined;
  @Input() marginLeft: ChakraStyles["marginLeft"] | undefined;
  @Input() marginRight: ChakraStyles["marginRight"] | undefined;
  @Input() marginStart: ChakraStyles["marginStart"] | undefined;
  @Input() marginTop: ChakraStyles["marginTop"] | undefined;
  @Input() marginX: ChakraStyles["marginX"] | undefined;
  @Input() marginY: ChakraStyles["marginY"] | undefined;
  @Input() maxBlockSize: ChakraStyles["maxBlockSize"] | undefined;
  @Input() maxH: ChakraStyles["maxH"] | undefined;
  @Input() maxHeight: ChakraStyles["maxHeight"] | undefined;
  @Input() maxInlineSize: ChakraStyles["maxInlineSize"] | undefined;
  @Input() maxW: ChakraStyles["maxW"] | undefined;
  @Input() maxWidth: ChakraStyles["maxWidth"] | undefined;
  @Input() mb: ChakraStyles["mb"] | undefined;
  @Input() me: ChakraStyles["me"] | undefined;
  @Input() minBlockSize: ChakraStyles["minBlockSize"] | undefined;
  @Input() minH: ChakraStyles["minH"] | undefined;
  @Input() minHeight: ChakraStyles["minHeight"] | undefined;
  @Input() minInlineSize: ChakraStyles["minInlineSize"] | undefined;
  @Input() minW: ChakraStyles["minW"] | undefined;
  @Input() minWidth: ChakraStyles["minWidth"] | undefined;
  @Input() mixBlendMode: ChakraStyles["mixBlendMode"] | undefined;
  @Input() ml: ChakraStyles["ml"] | undefined;
  @Input() mr: ChakraStyles["mr"] | undefined;
  @Input() ms: ChakraStyles["ms"] | undefined;
  @Input() mt: ChakraStyles["mt"] | undefined;
  @Input() mx: ChakraStyles["mx"] | undefined;
  @Input() my: ChakraStyles["my"] | undefined;
  @Input() noOfLines: ChakraStyles["noOfLines"] | undefined;
  @Input() objectFit: ChakraStyles["objectFit"] | undefined;
  @Input() objectPosition: ChakraStyles["objectPosition"] | undefined;
  @Input() opacity: ChakraStyles["opacity"] | undefined;
  @Input() order: ChakraStyles["order"] | undefined;
  @Input() outline: ChakraStyles["outline"] | undefined;
  @Input() outlineColor: ChakraStyles["outlineColor"] | undefined;
  @Input() outlineOffset: ChakraStyles["outlineOffset"] | undefined;
  @Input() overflow: ChakraStyles["overflow"] | undefined;
  @Input() overflowWrap: ChakraStyles["overflowWrap"] | undefined;
  @Input() overflowX: ChakraStyles["overflowX"] | undefined;
  @Input() overflowY: ChakraStyles["overflowY"] | undefined;
  @Input() overscroll: ChakraStyles["overscroll"] | undefined;
  @Input() overscrollBehavior: ChakraStyles["overscrollBehavior"] | undefined;
  @Input() overscrollBehaviorX: ChakraStyles["overscrollBehaviorX"] | undefined;
  @Input() overscrollBehaviorY: ChakraStyles["overscrollBehaviorY"] | undefined;
  @Input() overscrollX: ChakraStyles["overscrollX"] | undefined;
  @Input() overscrollY: ChakraStyles["overscrollY"] | undefined;
  @Input() p: ChakraStyles["p"] | undefined;
  @Input() padding: ChakraStyles["padding"] | undefined;
  @Input() paddingBlock: ChakraStyles["paddingBlock"] | undefined;
  @Input() paddingBlockEnd: ChakraStyles["paddingBlockEnd"] | undefined;
  @Input() paddingBlockStart: ChakraStyles["paddingBlockStart"] | undefined;
  @Input() paddingBottom: ChakraStyles["paddingBottom"] | undefined;
  @Input() paddingEnd: ChakraStyles["paddingEnd"] | undefined;
  @Input() paddingInline: ChakraStyles["paddingInline"] | undefined;
  @Input() paddingInlineEnd: ChakraStyles["paddingInlineEnd"] | undefined;
  @Input() paddingInlineStart: ChakraStyles["paddingInlineStart"] | undefined;
  @Input() paddingLeft: ChakraStyles["paddingLeft"] | undefined;
  @Input() paddingRight: ChakraStyles["paddingRight"] | undefined;
  @Input() paddingStart: ChakraStyles["paddingStart"] | undefined;
  @Input() paddingTop: ChakraStyles["paddingTop"] | undefined;
  @Input() paddingX: ChakraStyles["paddingX"] | undefined;
  @Input() paddingY: ChakraStyles["paddingY"] | undefined;
  @Input() pb: ChakraStyles["pb"] | undefined;
  @Input() pe: ChakraStyles["pe"] | undefined;
  @Input() pl: ChakraStyles["pl"] | undefined;
  @Input() placeContent: ChakraStyles["placeContent"] | undefined;
  @Input() placeItems: ChakraStyles["placeItems"] | undefined;
  @Input() placeSelf: ChakraStyles["placeSelf"] | undefined;
  @Input() pointerEvents: ChakraStyles["pointerEvents"] | undefined;
  @Input() pos: ChakraStyles["pos"] | undefined;
  @Input() position: ChakraStyles["position"] | undefined;
  @Input() pr: ChakraStyles["pr"] | undefined;
  @Input() ps: ChakraStyles["ps"] | undefined;
  @Input() pt: ChakraStyles["pt"] | undefined;
  @Input() px: ChakraStyles["px"] | undefined;
  @Input() py: ChakraStyles["py"] | undefined;
  @Input() resize: ChakraStyles["resize"] | undefined;
  @Input() right: ChakraStyles["right"] | undefined;
  @Input() ring: ChakraStyles["ring"] | undefined;
  @Input() ringColor: ChakraStyles["ringColor"] | undefined;
  @Input() ringInset: ChakraStyles["ringInset"] | undefined;
  @Input() ringOffset: ChakraStyles["ringOffset"] | undefined;
  @Input() ringOffsetColor: ChakraStyles["ringOffsetColor"] | undefined;
  @Input() rotate: ChakraStyles["rotate"] | undefined;
  @Input() rounded: ChakraStyles["rounded"] | undefined;
  @Input() roundedBottom: ChakraStyles["roundedBottom"] | undefined;
  @Input() roundedBottomEnd: ChakraStyles["roundedBottomEnd"] | undefined;
  @Input() roundedBottomLeft: ChakraStyles["roundedBottomLeft"] | undefined;
  @Input() roundedBottomRight: ChakraStyles["roundedBottomRight"] | undefined;
  @Input() roundedBottomStart: ChakraStyles["roundedBottomStart"] | undefined;
  @Input() roundedEnd: ChakraStyles["roundedEnd"] | undefined;
  @Input() roundedLeft: ChakraStyles["roundedLeft"] | undefined;
  @Input() roundedRight: ChakraStyles["roundedRight"] | undefined;
  @Input() roundedStart: ChakraStyles["roundedStart"] | undefined;
  @Input() roundedTop: ChakraStyles["roundedTop"] | undefined;
  @Input() roundedTopEnd: ChakraStyles["roundedTopEnd"] | undefined;
  @Input() roundedTopLeft: ChakraStyles["roundedTopLeft"] | undefined;
  @Input() roundedTopRight: ChakraStyles["roundedTopRight"] | undefined;
  @Input() roundedTopStart: ChakraStyles["roundedTopStart"] | undefined;
  @Input() rowGap: ChakraStyles["rowGap"] | undefined;
  @Input() saturate: ChakraStyles["saturate"] | undefined;
  @Input() scale: ChakraStyles["scale"] | undefined;
  @Input() scaleX: ChakraStyles["scaleX"] | undefined;
  @Input() scaleY: ChakraStyles["scaleY"] | undefined;
  @Input() scrollBehavior: ChakraStyles["scrollBehavior"] | undefined;
  @Input() scrollMargin: ChakraStyles["scrollMargin"] | undefined;
  @Input() scrollMarginBottom: ChakraStyles["scrollMarginBottom"] | undefined;
  @Input() scrollMarginLeft: ChakraStyles["scrollMarginLeft"] | undefined;
  @Input() scrollMarginRight: ChakraStyles["scrollMarginRight"] | undefined;
  @Input() scrollMarginTop: ChakraStyles["scrollMarginTop"] | undefined;
  @Input() scrollMarginX: ChakraStyles["scrollMarginX"] | undefined;
  @Input() scrollMarginY: ChakraStyles["scrollMarginY"] | undefined;
  @Input() scrollPadding: ChakraStyles["scrollPadding"] | undefined;
  @Input() scrollPaddingBottom: ChakraStyles["scrollPaddingBottom"] | undefined;
  @Input() scrollPaddingLeft: ChakraStyles["scrollPaddingLeft"] | undefined;
  @Input() scrollPaddingRight: ChakraStyles["scrollPaddingRight"] | undefined;
  @Input() scrollPaddingTop: ChakraStyles["scrollPaddingTop"] | undefined;
  @Input() scrollPaddingX: ChakraStyles["scrollPaddingX"] | undefined;
  @Input() scrollPaddingY: ChakraStyles["scrollPaddingY"] | undefined;
  @Input() scrollSnapAlign: ChakraStyles["scrollSnapAlign"] | undefined;
  @Input() scrollSnapStop: ChakraStyles["scrollSnapStop"] | undefined;
  @Input() scrollSnapType: ChakraStyles["scrollSnapType"] | undefined;
  @Input() shadow: ChakraStyles["shadow"] | undefined;
  @Input() skewX: ChakraStyles["skewX"] | undefined;
  @Input() skewY: ChakraStyles["skewY"] | undefined;
  @Input() srOnly: ChakraStyles["srOnly"] | undefined;
  @Input() stroke: ChakraStyles["stroke"] | undefined;
  @Input() sx: ChakraStyles["sx"] | undefined;
  @Input() textAlign: ChakraStyles["textAlign"] | undefined;
  @Input() textColor: ChakraStyles["textColor"] | undefined;
  @Input() textDecor: ChakraStyles["textDecor"] | undefined;
  @Input() textDecoration: ChakraStyles["textDecoration"] | undefined;
  @Input() textDecorationColor: ChakraStyles["textDecorationColor"] | undefined;
  @Input() textDecorationLine: ChakraStyles["textDecorationLine"] | undefined;
  @Input() textDecorationStyle: ChakraStyles["textDecorationStyle"] | undefined;
  @Input() textDecorationThickness: ChakraStyles["textDecorationThickness"] | undefined;
  @Input() textIndent: ChakraStyles["textIndent"] | undefined;
  @Input() textOverflow: ChakraStyles["textOverflow"] | undefined;
  @Input() textShadow: ChakraStyles["textShadow"] | undefined;
  @Input() textStyle: ChakraStyles["textStyle"] | undefined;
  @Input() textTransform: ChakraStyles["textTransform"] | undefined;
  @Input() textUnderlineOffset: ChakraStyles["textUnderlineOffset"] | undefined;
  @Input() top: ChakraStyles["top"] | undefined;
  @Input() transform: ChakraStyles["transform"] | undefined;
  @Input() transformOrigin: ChakraStyles["transformOrigin"] | undefined;
  @Input() transition: ChakraStyles["transition"] | undefined;
  @Input() transitionDelay: ChakraStyles["transitionDelay"] | undefined;
  @Input() transitionDuration: ChakraStyles["transitionDuration"] | undefined;
  @Input() transitionProperty: ChakraStyles["transitionProperty"] | undefined;
  @Input() transitionTimingFunction: ChakraStyles["transitionTimingFunction"] | undefined;
  @Input() translateX: ChakraStyles["translateX"] | undefined;
  @Input() translateY: ChakraStyles["translateY"] | undefined;
  @Input() userSelect: ChakraStyles["userSelect"] | undefined;
  @Input() verticalAlign: ChakraStyles["verticalAlign"] | undefined;
  @Input() visibility: ChakraStyles["visibility"] | undefined;
  @Input() w: ChakraStyles["w"] | undefined;
  @Input() whiteSpace: ChakraStyles["whiteSpace"] | undefined;
  @Input() width: ChakraStyles["width"] | undefined;
  @Input() willChange: ChakraStyles["willChange"] | undefined;
  @Input() wordBreak: ChakraStyles["wordBreak"] | undefined;
  @Input() zIndex: ChakraStyles["zIndex"] | undefined;
  @Input() public chakraStyles: ChakraStyles | null = {};

  public readonly styleService = inject(StylesService);
  public readonly elementRef = inject(ElementRef);
  public readonly themeService = inject(ThemeService);

  private readonly $chakraStyles = new BehaviorSubject<ChakraStyles>({} as ChakraStyles);
  private readonly $chakraClasses = new BehaviorSubject<Set<string>>(new Set());
  private readonly subscriptions: Array<Subscription> = [];

  @Input()
  public set className(className: string | string[] | Set<string> | { [klass: string]: any }) {
    const classList = this.$chakraClasses.value;
    if (className) {
      if (typeof className === "string") {
        className.split(" ").forEach((klass) => classList.add(klass));
      } else if (Array.isArray(className)) {
        className.forEach((klass) => classList.add(klass));
      } else if (className instanceof Set) {
        className.forEach((klass) => classList.add(klass));
      } else {
        Object.keys(className).forEach((klass) => {
          if (className[klass]) {
            classList.add(klass);
          }
        });
      }
    }
    this.$chakraClasses.next(classList);
  }

  public get $styles() {
    return this.getChakraStyles();
  }

  public get $classes(): Observable<string> {
    return this.getChakraClasses().pipe(map((classList) => Array.from(classList).join(" ")));
  }

  ngOnChanges() {
    const styles = stylesKeys
      .filter((key) => Boolean(this[key]))
      .reduce((acc, cur) => {
        return { ...acc, [cur]: this[cur] };
      }, {});

    this.$chakraStyles.next({ ...styles, ...(this.chakraStyles || {}) });
  }

  public getChakraStyles(): Observable<ChakraStyles> {
    return this.$chakraStyles;
  }

  public getChakraClasses(): Observable<Set<string>> {
    return this.$chakraClasses.pipe(
      map((classList) => {
        const baseClassName = this.getDefaultClassName();
        if (baseClassName) {
          classList.add(baseClassName);
        }
        return classList;
      }),
    );
  }

  public addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
    return subscription;
  }

  public applyChakraStyles(
    styles: ChakraStyles | Observable<ChakraStyles> = this.getChakraStyles(),
    element: HTMLElement = this.elementRef.nativeElement,
  ) {
    const $styles = styles instanceof Observable ? styles : of(styles);
    return this.addSubscription(this.styleService.applyChakraStyles($styles, element));
  }

  public applyChakraClasses(classes: Observable<Set<string>> = this.getChakraClasses(), element: HTMLElement = this.elementRef.nativeElement) {
    return this.addSubscription(
      classes.subscribe((classList) => {
        classList.forEach((klass) => {
          element.classList.add(klass);
        });
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public getDefaultClassName(): string {
    return "";
  }
}
