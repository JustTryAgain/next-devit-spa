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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"../node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_header-container__1mPlp {\\n  margin-top: 58px;\\n}\\n.styles_header-container__1mPlp .styles_header__15DYH {\\n  max-width: 1200px;\\n  font-family: Montserrat, sans-serif;\\n  margin: 0 auto;\\n  -webkit-justify-content: space-between;\\n     -moz-box-pack: justify;\\n          justify-content: space-between;\\n}\\n.styles_header-container__1mPlp .styles_header__logo-wrapper__1vkn_ {\\n  max-width: 312px;\\n  max-height: 35px;\\n}\\n\\n.styles_navigation__list__1Fzsz {\\n  margin: 0;\\n}\\n.styles_navigation__item__35HxQ {\\n  text-align: end;\\n}\\n.styles_navigation__link__1uOXm {\\n  padding: 7px;\\n  color: white;\\n  text-decoration: none;\\n  font-family: Montserrat, sans-serif;\\n  font-size: 1.25rem;\\n}\\n.styles_navigation__link__1uOXm:hover {\\n  color: #FFC20A;\\n}\\n.styles_navigation__get-btn__18gti {\\n  border: 2px solid #FFC20A;\\n  border-radius: 5px;\\n}\\n\\n.styles_activator__1uwyn {\\n  position: relative;\\n  border-bottom: 1px dashed #E3AF11;\\n  padding-right: 15px;\\n}\\n\\n.styles_arrow__3Uq4W {\\n  position: relative;\\n}\\n.styles_arrow__3Uq4W:after {\\n  right: 0;\\n  margin: 12px 0 0 5px;\\n  position: absolute;\\n  border-bottom-style: solid;\\n  border-bottom-width: 2px;\\n  border-right-style: solid;\\n  border-right-width: 2px;\\n  content: \\\"\\\";\\n  height: 8px;\\n  width: 8px;\\n  border-color: #FFC20A;\\n  -webkit-transform: rotate(315deg);\\n          transform: rotate(315deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../styles.module.scss\",\"webpack://../../../constants/vars.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,gBAAA;AADF;AAGE;EACE,iBCJO;EDKP,mCCJC;EDKD,cAAA;EACA,sCAAA;KAAA,sBAAA;UAAA,8BAAA;AADJ;AAGI;EACE,gBAAA;EACA,gBAAA;AADN;;AASE;EACE,SAAA;AANJ;AASE;EACE,eAAA;AAPJ;AAUE;EACE,YAAA;EACA,YAAA;EACA,qBAAA;EACA,mCC9BC;ED+BD,kBClCC;AD0BL;AASI;EACE,cCnCD;AD4BL;AAWE;EACE,yBAAA;EACA,kBAAA;AATJ;;AAaA;EACE,kBAAA;EACA,iCAAA;EACA,mBAAA;AAVF;;AAaA;EACA,kBAAA;AAVA;AAWE;EACE,QAAA;EACA,oBAAA;EACA,kBAAA;EACA,0BAAA;EACA,wBAAA;EACA,yBAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,qBChEC;EDiED,iCAAA;UAAA,yBAAA;AATJ\",\"sourcesContent\":[\"@import \\\"../../constants/vars\\\";\\n\\n.header-container {\\n  margin-top: 58px;\\n\\n  .header {\\n    max-width: $maxWidth;\\n    font-family: $FM;\\n    margin: 0 auto;\\n    justify-content: space-between;\\n\\n    &__logo-wrapper {\\n      max-width: 312px;\\n      max-height: 35px;\\n    }\\n\\n  }\\n}\\n\\n.navigation {\\n\\n  &__list {\\n    margin: 0;\\n  }\\n\\n  &__item {\\n    text-align: end;\\n  }\\n\\n  &__link {\\n    padding: 7px;\\n    color: white;\\n    text-decoration: none;\\n    font-family: $FM;\\n    font-size: $fz;\\n    &:hover {\\n      color: $yc;\\n    }\\n  }\\n\\n  &__get-btn{\\n    border: 2px solid #FFC20A;\\n    border-radius: 5px;\\n  }\\n}\\n\\n.activator {\\n  position: relative;\\n  border-bottom: 1px dashed #E3AF11;\\n  padding-right: 15px;\\n}\\n\\n.arrow {\\nposition: relative;\\n  &:after {\\n    right: 0;\\n    margin: 12px 0 0 5px;\\n    position: absolute;\\n    border-bottom-style: solid;\\n    border-bottom-width: 2px;\\n    border-right-style: solid;\\n    border-right-width: 2px;\\n    content: '';\\n    height: 8px;\\n    width: 8px;\\n    border-color: $yc;\\n    transform: rotate(315deg);\\n  }\\n\\n}\",\"$fz: 1.25rem;\\n$yc: #FFC20A;\\n$maxWidth: 1200px;\\n$FM: Montserrat, sans-serif;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header-container\": \"styles_header-container__1mPlp\",\n\t\"header\": \"styles_header__15DYH\",\n\t\"header__logo-wrapper\": \"styles_header__logo-wrapper__1vkn_\",\n\t\"navigation__list\": \"styles_navigation__list__1Fzsz\",\n\t\"navigation__item\": \"styles_navigation__item__35HxQ\",\n\t\"navigation__link\": \"styles_navigation__link__1uOXm\",\n\t\"navigation__get-btn\": \"styles_navigation__get-btn__18gti\",\n\t\"activator\": \"styles_activator__1uwyn\",\n\t\"arrow\": \"styles_arrow__3Uq4W\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDJFQUEyRSxxQkFBcUIsR0FBRyx5REFBeUQsc0JBQXNCLHdDQUF3QyxtQkFBbUIsMkNBQTJDLDhCQUE4QiwyQ0FBMkMsR0FBRyx1RUFBdUUscUJBQXFCLHFCQUFxQixHQUFHLHFDQUFxQyxjQUFjLEdBQUcsbUNBQW1DLG9CQUFvQixHQUFHLG1DQUFtQyxpQkFBaUIsaUJBQWlCLDBCQUEwQix3Q0FBd0MsdUJBQXVCLEdBQUcseUNBQXlDLG1CQUFtQixHQUFHLHNDQUFzQyw4QkFBOEIsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixzQ0FBc0Msd0JBQXdCLEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLDhCQUE4QixhQUFhLHlCQUF5Qix1QkFBdUIsK0JBQStCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLGtCQUFrQixnQkFBZ0IsZUFBZSwwQkFBMEIsc0NBQXNDLHNDQUFzQyxHQUFHLE9BQU8sK0hBQStILFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVywwREFBMEQsdUJBQXVCLHFCQUFxQixlQUFlLDJCQUEyQix1QkFBdUIscUJBQXFCLHFDQUFxQyx5QkFBeUIseUJBQXlCLHlCQUF5QixPQUFPLE9BQU8sR0FBRyxpQkFBaUIsZUFBZSxnQkFBZ0IsS0FBSyxlQUFlLHNCQUFzQixLQUFLLGVBQWUsbUJBQW1CLG1CQUFtQiw0QkFBNEIsdUJBQXVCLHFCQUFxQixlQUFlLG1CQUFtQixPQUFPLEtBQUssaUJBQWlCLGdDQUFnQyx5QkFBeUIsS0FBSyxHQUFHLGdCQUFnQix1QkFBdUIsc0NBQXNDLHdCQUF3QixHQUFHLFlBQVkscUJBQXFCLGFBQWEsZUFBZSwyQkFBMkIseUJBQXlCLGlDQUFpQywrQkFBK0IsZ0NBQWdDLDhCQUE4QixrQkFBa0Isa0JBQWtCLGlCQUFpQix3QkFBd0IsZ0NBQWdDLEtBQUssS0FBSyxnQkFBZ0IsZUFBZSxvQkFBb0IsOEJBQThCLHFCQUFxQjtBQUMvdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzP2I5OWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19oZWFkZXItY29udGFpbmVyX18xbVBscCB7XFxuICBtYXJnaW4tdG9wOiA1OHB4O1xcbn1cXG4uc3R5bGVzX2hlYWRlci1jb250YWluZXJfXzFtUGxwIC5zdHlsZXNfaGVhZGVyX18xNURZSCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0eWxlc19oZWFkZXItY29udGFpbmVyX18xbVBscCAuc3R5bGVzX2hlYWRlcl9fbG9nby13cmFwcGVyX18xdmtuXyB7XFxuICBtYXgtd2lkdGg6IDMxMnB4O1xcbiAgbWF4LWhlaWdodDogMzVweDtcXG59XFxuXFxuLnN0eWxlc19uYXZpZ2F0aW9uX19saXN0X18xRnpzeiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9faXRlbV9fMzVIeFEge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2xpbmtfXzF1T1htIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2xpbmtfXzF1T1htOmhvdmVyIHtcXG4gIGNvbG9yOiAjRkZDMjBBO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2dldC1idG5fXzE4Z3RpIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkMyMEE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdHlsZXNfYWN0aXZhdG9yX18xdXd5biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNFM0FGMTE7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc3R5bGVzX2Fycm93X18zVXE0VyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zdHlsZXNfYXJyb3dfXzNVcTRXOmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAxMnB4IDAgMCA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA4cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjRkZDMjBBO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vY29uc3RhbnRzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdCQUFBO0FBREY7QUFHRTtFQUNFLGlCQ0pPO0VES1AsbUNDSkM7RURLRCxjQUFBO0VBQ0Esc0NBQUE7S0FBQSxzQkFBQTtVQUFBLDhCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFTRTtFQUNFLFNBQUE7QUFOSjtBQVNFO0VBQ0UsZUFBQTtBQVBKO0FBVUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNDOUJDO0VEK0JELGtCQ2xDQztBRDBCTDtBQVNJO0VBQ0UsY0NuQ0Q7QUQ0Qkw7QUFXRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0Esa0JBQUE7QUFWQTtBQVdFO0VBQ0UsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQ2hFQztFRGlFRCxpQ0FBQTtVQUFBLHlCQUFBO0FBVEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vY29uc3RhbnRzL3ZhcnNcXFwiO1xcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XFxuICAgIGZvbnQtZmFtaWx5OiAkRk07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICZfX2xvZ28td3JhcHBlciB7XFxuICAgICAgbWF4LXdpZHRoOiAzMTJweDtcXG4gICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgICB9XFxuXFxuICB9XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG5cXG4gICZfX2xpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgJl9fbGluayB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAkRk07XFxuICAgIGZvbnQtc2l6ZTogJGZ6O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJHljO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19nZXQtYnRue1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZDMjBBO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxufVxcblxcbi5hY3RpdmF0b3Ige1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjRTNBRjExO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLmFycm93IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuICAmOmFmdGVyIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMTJweCAwIDAgNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJvcmRlci1jb2xvcjogJHljO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgfVxcblxcbn1cIixcIiRmejogMS4yNXJlbTtcXG4keWM6ICNGRkMyMEE7XFxuJG1heFdpZHRoOiAxMjAwcHg7XFxuJEZNOiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlci1jb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyLWNvbnRhaW5lcl9fMW1QbHBcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18xNURZSFwiLFxuXHRcImhlYWRlcl9fbG9nby13cmFwcGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fbG9nby13cmFwcGVyX18xdmtuX1wiLFxuXHRcIm5hdmlnYXRpb25fX2xpc3RcIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fbGlzdF9fMUZ6c3pcIixcblx0XCJuYXZpZ2F0aW9uX19pdGVtXCI6IFwic3R5bGVzX25hdmlnYXRpb25fX2l0ZW1fXzM1SHhRXCIsXG5cdFwibmF2aWdhdGlvbl9fbGlua1wiOiBcInN0eWxlc19uYXZpZ2F0aW9uX19saW5rX18xdU9YbVwiLFxuXHRcIm5hdmlnYXRpb25fX2dldC1idG5cIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fZ2V0LWJ0bl9fMThndGlcIixcblx0XCJhY3RpdmF0b3JcIjogXCJzdHlsZXNfYWN0aXZhdG9yX18xdXd5blwiLFxuXHRcImFycm93XCI6IFwic3R5bGVzX2Fycm93X18zVXE0V1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss\n");

/***/ }),

/***/ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/help-e-commers/styles.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/help-e-commers/styles.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"../node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_ecommerce__3Y_pg {\\n  max-width: 1200px;\\n  max-height: 578px;\\n  margin-top: 58px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../styles.module.scss\",\"webpack://../../../constants/vars.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,iBCDS;EDET,iBAAA;EACA,gBAAA;AADF\",\"sourcesContent\":[\"@import \\\"../../constants/vars\\\";\\n\\n.ecommerce{\\n  max-width: $maxWidth;\\n  max-height: 578px;\\n  margin-top: 58px;\\n  \\n\\n  &__text{\\n\\n  }\\n\\n  &__logos{\\n\\n  }\\n\\n  &__shapes{\\n\\n  }\\n}\\n\\n.links{\\n\\n  &__click{\\n\\n  }\\n\\n  &__call{\\n\\n  }\\n}\",\"$fz: 1.25rem;\\n$yc: #FFC20A;\\n$maxWidth: 1200px;\\n$FM: Montserrat, sans-serif;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"ecommerce\": \"styles_ecommerce__3Y_pg\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbM10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlszXS51c2VbNF0hLi9jb21wb25lbnRzL2hlbHAtZS1jb21tZXJzL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdIQUE0RDtBQUN0RztBQUNBO0FBQ0Esb0VBQW9FLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUcsT0FBTywrSEFBK0gsV0FBVyxXQUFXLFdBQVcsMERBQTBELGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsa0JBQWtCLE9BQU8sZUFBZSxPQUFPLGdCQUFnQixPQUFPLEdBQUcsV0FBVyxlQUFlLE9BQU8sY0FBYyxPQUFPLEdBQUcsZ0JBQWdCLGVBQWUsb0JBQW9CLDhCQUE4QixxQkFBcUI7QUFDcHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWxwLWUtY29tbWVycy9zdHlsZXMubW9kdWxlLnNjc3M/MmJlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX2Vjb21tZXJjZV9fM1lfcGcge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1NzhweDtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9jb25zdGFudHMvdmFycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJDRFM7RURFVCxpQkFBQTtFQUNBLGdCQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vY29uc3RhbnRzL3ZhcnNcXFwiO1xcblxcbi5lY29tbWVyY2V7XFxuICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcXG4gIG1heC1oZWlnaHQ6IDU3OHB4O1xcbiAgbWFyZ2luLXRvcDogNThweDtcXG4gIFxcblxcbiAgJl9fdGV4dHtcXG5cXG4gIH1cXG5cXG4gICZfX2xvZ29ze1xcblxcbiAgfVxcblxcbiAgJl9fc2hhcGVze1xcblxcbiAgfVxcbn1cXG5cXG4ubGlua3N7XFxuXFxuICAmX19jbGlja3tcXG5cXG4gIH1cXG5cXG4gICZfX2NhbGx7XFxuXFxuICB9XFxufVwiLFwiJGZ6OiAxLjI1cmVtO1xcbiR5YzogI0ZGQzIwQTtcXG4kbWF4V2lkdGg6IDEyMDBweDtcXG4kRk06IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZWNvbW1lcmNlXCI6IFwic3R5bGVzX2Vjb21tZXJjZV9fM1lfcGdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/help-e-commers/styles.module.scss\n");

/***/ })

});