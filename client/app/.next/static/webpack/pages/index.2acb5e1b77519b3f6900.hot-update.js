/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"../node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_header__15DYH {\\n  max-width: 1200px;\\n  font-family: Montserrat, sans-serif;\\n  margin: 58px auto;\\n}\\n\\n.styles_navigation__link__1uOXm {\\n  color: white;\\n}\\n.styles_navigation__link__1uOXm:hover {\\n  color: #FFC20A;\\n}\\n\\n.styles_activator__1uwyn {\\n  position: relative;\\n}\\n\\n.styles_arrow__3Uq4W {\\n  display: inline-block;\\n  height: 15px;\\n  position: absolute;\\n  width: 15px;\\n  -webkit-transform: rotate(315deg);\\n          transform: rotate(315deg);\\n}\\n.styles_arrow__3Uq4W::after {\\n  border-bottom-style: solid;\\n  border-bottom-width: 2px;\\n  border-right-style: solid;\\n  border-right-width: 2px;\\n  content: \\\"\\\";\\n  display: inline-block;\\n  height: 15px;\\n  left: 0;\\n  position: absolute;\\n  top: 0;\\n  width: 15px;\\n  border-color: #FFC20A;\\n}\\n.styles_arrow__3Uq4W:before {\\n  background-color: #FFC20A;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../styles.module.scss\",\"webpack://../../../constants/vars.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,iBAAA;EACA,mCAAA;EACA,iBAAA;AADF;;AASE;EACE,YAAA;AANJ;AAQI;EACE,cChBD;ADUL;;AAWA;EACE,kBAAA;AARF;;AAqCA;EACE,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EAuBA,iCAAA;UAAA,yBAAA;AAxDF;AAmCE;EACE,0BAAA;EACA,wBAAA;EACA,yBAAA;EACA,uBAAA;EACA,WAAA;EACA,qBAAA;EACA,YAAA;EACA,OAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,qBCrEC;ADoCL;AAuCE;EACE,yBC5EC;ADuCL\",\"sourcesContent\":[\"@import \\\"../../constants/vars\\\";\\n\\n.header {\\n  max-width: 1200px;\\n  font-family: Montserrat, sans-serif;\\n  margin: 58px auto;\\n}\\n\\n.navigation {\\n  &__item {\\n\\n  }\\n\\n  &__link {\\n    color: white;\\n\\n    &:hover {\\n      color: $yc;\\n    }\\n  }\\n}\\n\\n.activator {\\n  position: relative;\\n}\\n\\n@mixin rotate($angle) {\\n  transform: rotate($angle);\\n}\\n\\n@mixin arrow($arrowSize: 20px, $arrowBorderSize: 3px, $arrowBarWidth: 2px, $arrowBarHeight: 25px) {\\n  display: inline-block;\\n  height: $arrowSize;\\n  position: absolute;\\n  width: $arrowSize;\\n\\n  &::after {\\n    border-bottom-style: solid;\\n    border-bottom-width: $arrowBorderSize;\\n    border-right-style: solid;\\n    border-right-width: $arrowBorderSize;\\n    content: '';\\n    display: inline-block;\\n    height: $arrowSize;\\n    left: 0;\\n    position: absolute;\\n    top: 0;\\n    width: $arrowSize;\\n  }\\n\\n}\\n\\n.arrow {\\n  display: inline-block;\\n  height: 15px;\\n  position: absolute;\\n  width: 15px;\\n\\n  &::after {\\n    border-bottom-style: solid;\\n    border-bottom-width: 2px;\\n    border-right-style: solid;\\n    border-right-width: 2px;\\n    content: '';\\n    display: inline-block;\\n    height: 15px;\\n    left: 0;\\n    position: absolute;\\n    top: 0;\\n    width: 15px;\\n    border-color: $yc;\\n  }\\n  &:after {\\n\\n}\\n\\n  &:before {\\n    background-color: $yc;\\n  }\\n  transform: rotate(315deg);\\n}\",\"$fz20: 1.25rem;\\n$yc: #FFC20A;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"styles_header__15DYH\",\n\t\"navigation__link\": \"styles_navigation__link__1uOXm\",\n\t\"activator\": \"styles_activator__1uwyn\",\n\t\"arrow\": \"styles_arrow__3Uq4W\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLGlFQUFpRSxzQkFBc0Isd0NBQXdDLHNCQUFzQixHQUFHLHFDQUFxQyxpQkFBaUIsR0FBRyx5Q0FBeUMsbUJBQW1CLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLDBCQUEwQiwwQkFBMEIsaUJBQWlCLHVCQUF1QixnQkFBZ0Isc0NBQXNDLHNDQUFzQyxHQUFHLCtCQUErQiwrQkFBK0IsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLDBCQUEwQixpQkFBaUIsWUFBWSx1QkFBdUIsV0FBVyxnQkFBZ0IsMEJBQTBCLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLE9BQU8sK0hBQStILFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksMkRBQTJELGFBQWEsc0JBQXNCLHdDQUF3QyxzQkFBc0IsR0FBRyxpQkFBaUIsYUFBYSxPQUFPLGVBQWUsbUJBQW1CLGlCQUFpQixtQkFBbUIsT0FBTyxLQUFLLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyx1R0FBdUcsMEJBQTBCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLGdCQUFnQixpQ0FBaUMsNENBQTRDLGdDQUFnQywyQ0FBMkMsa0JBQWtCLDRCQUE0Qix5QkFBeUIsY0FBYyx5QkFBeUIsYUFBYSx3QkFBd0IsS0FBSyxLQUFLLFlBQVksMEJBQTBCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixpQ0FBaUMsK0JBQStCLGdDQUFnQyw4QkFBOEIsa0JBQWtCLDRCQUE0QixtQkFBbUIsY0FBYyx5QkFBeUIsYUFBYSxrQkFBa0Isd0JBQXdCLEtBQUssYUFBYSxLQUFLLGdCQUFnQiw0QkFBNEIsS0FBSyw4QkFBOEIsR0FBRyxrQkFBa0IsZUFBZSxtQkFBbUI7QUFDenZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzP2I5OWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19oZWFkZXJfXzE1RFlIIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDU4cHggYXV0bztcXG59XFxuXFxuLnN0eWxlc19uYXZpZ2F0aW9uX19saW5rX18xdU9YbSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9fbGlua19fMXVPWG06aG92ZXIge1xcbiAgY29sb3I6ICNGRkMyMEE7XFxufVxcblxcbi5zdHlsZXNfYWN0aXZhdG9yX18xdXd5biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdHlsZXNfYXJyb3dfXzNVcTRXIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4uc3R5bGVzX2Fycm93X18zVXE0Vzo6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTVweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1jb2xvcjogI0ZGQzIwQTtcXG59XFxuLnN0eWxlc19hcnJvd19fM1VxNFc6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyMEE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9jb25zdGFudHMvdmFycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBU0U7RUFDRSxZQUFBO0FBTko7QUFRSTtFQUNFLGNDaEJEO0FEVUw7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQXFDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQXVCQSxpQ0FBQTtVQUFBLHlCQUFBO0FBeERGO0FBbUNFO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxxQkNyRUM7QURvQ0w7QUF1Q0U7RUFDRSx5QkM1RUM7QUR1Q0xcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vY29uc3RhbnRzL3ZhcnNcXFwiO1xcblxcbi5oZWFkZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogNThweCBhdXRvO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICAmX19pdGVtIHtcXG5cXG4gIH1cXG5cXG4gICZfX2xpbmsge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkeWM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmFjdGl2YXRvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBtaXhpbiByb3RhdGUoJGFuZ2xlKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpO1xcbn1cXG5cXG5AbWl4aW4gYXJyb3coJGFycm93U2l6ZTogMjBweCwgJGFycm93Qm9yZGVyU2l6ZTogM3B4LCAkYXJyb3dCYXJXaWR0aDogMnB4LCAkYXJyb3dCYXJIZWlnaHQ6IDI1cHgpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogJGFycm93U2l6ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAkYXJyb3dTaXplO1xcblxcbiAgJjo6YWZ0ZXIge1xcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogJGFycm93Qm9yZGVyU2l6ZTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkYXJyb3dCb3JkZXJTaXplO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6ICRhcnJvd1NpemU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogJGFycm93U2l6ZTtcXG4gIH1cXG5cXG59XFxuXFxuLmFycm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNXB4O1xcblxcbiAgJjo6YWZ0ZXIge1xcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogJHljO1xcbiAgfVxcbiAgJjphZnRlciB7XFxuXFxufVxcblxcbiAgJjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWM7XFxuICB9XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cIixcIiRmejIwOiAxLjI1cmVtO1xcbiR5YzogI0ZGQzIwQTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18xNURZSFwiLFxuXHRcIm5hdmlnYXRpb25fX2xpbmtcIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fbGlua19fMXVPWG1cIixcblx0XCJhY3RpdmF0b3JcIjogXCJzdHlsZXNfYWN0aXZhdG9yX18xdXd5blwiLFxuXHRcImFycm93XCI6IFwic3R5bGVzX2Fycm93X18zVXE0V1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss\n");

/***/ })

});