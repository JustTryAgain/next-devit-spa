self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./components/header/styles.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "../node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".styles_header-container__1mPlp {\n  margin-top: 58px;\n}\n.styles_header-container__1mPlp .styles_header__15DYH {\n  max-width: 1200px;\n  font-family: Montserrat, sans-serif;\n  margin: 0 auto;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n.styles_header-container__1mPlp .styles_header__logo-wrapper__1vkn_ {\n  max-width: 312px;\n  max-height: 35px;\n}\n\n.styles_navigation__list__1Fzsz {\n  margin: 0;\n}\n.styles_navigation__item__35HxQ {\n  text-align: end;\n}\n.styles_navigation__link__1uOXm {\n  color: white;\n  text-decoration: none;\n  font-family: Montserrat, sans-serif;\n  font-size: 1.25rem;\n}\n.styles_navigation__link__1uOXm:hover {\n  color: #FFC20A;\n}\n.styles_navigation__get-btn__18gti {\n  border: 2px solid #FFC20A;\n  border-radius: 5px;\n}\n\n.styles_activator__1uwyn {\n  position: relative;\n  border-bottom: 1px dashed #E3AF11;\n  padding-right: 15px;\n}\n\n.styles_arrow__3Uq4W {\n  position: relative;\n}\n.styles_arrow__3Uq4W:after {\n  right: 0;\n  margin: 12px 0 0 5px;\n  position: absolute;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-right-style: solid;\n  border-right-width: 2px;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  border-color: #FFC20A;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n}", "",{"version":3,"sources":["webpack://../styles.module.scss","webpack://../../../constants/vars.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;AADF;AAGE;EACE,iBAAA;EACA,mCAAA;EACA,cAAA;EACA,sCAAA;KAAA,sBAAA;UAAA,8BAAA;AADJ;AAGI;EACE,gBAAA;EACA,gBAAA;AADN;;AASE;EAEE,SAAA;AAPJ;AAUE;EACE,eAAA;AARJ;AAWE;EACE,YAAA;EACA,qBAAA;EACA,mCAAA;EACA,kBClCC;ADyBL;AAUI;EACE,cCnCD;AD2BL;AAYE;EACE,yBAAA;EACA,kBAAA;AAVJ;;AAcA;EACE,kBAAA;EACA,iCAAA;EACA,mBAAA;AAXF;;AAcA;EACA,kBAAA;AAXA;AAYE;EACE,QAAA;EACA,oBAAA;EACA,kBAAA;EACA,0BAAA;EACA,wBAAA;EACA,yBAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,qBChEC;EDiED,iCAAA;UAAA,yBAAA;AAVJ","sourcesContent":["@import \"../../constants/vars\";\r\n\r\n.header-container {\r\n  margin-top: 58px;\r\n\r\n  .header {\r\n    max-width: 1200px;\r\n    font-family: Montserrat, sans-serif;\r\n    margin: 0 auto;\r\n    justify-content: space-between;\r\n\r\n    &__logo-wrapper {\r\n      max-width: 312px;\r\n      max-height: 35px;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n.navigation {\r\n\r\n  &__list {\r\n    \r\n    margin: 0;\r\n  }\r\n\r\n  &__item {\r\n    text-align: end;\r\n  }\r\n\r\n  &__link {\r\n    color: white;\r\n    text-decoration: none;\r\n    font-family: Montserrat, sans-serif;\r\n    font-size: $fz;\r\n    &:hover {\r\n      color: $yc;\r\n    }\r\n  }\r\n\r\n  &__get-btn{\r\n    border: 2px solid #FFC20A;\r\n    border-radius: 5px;\r\n  }\r\n}\r\n\r\n.activator {\r\n  position: relative;\r\n  border-bottom: 1px dashed #E3AF11;\r\n  padding-right: 15px;\r\n}\r\n\r\n.arrow {\r\nposition: relative;\r\n  &:after {\r\n    right: 0;\r\n    margin: 12px 0 0 5px;\r\n    position: absolute;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 2px;\r\n    border-right-style: solid;\r\n    border-right-width: 2px;\r\n    content: '';\r\n    height: 8px;\r\n    width: 8px;\r\n    border-color: $yc;\r\n    transform: rotate(315deg);\r\n  }\r\n\r\n}","$fz: 1.25rem;\r\n$yc: #FFC20A;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header-container": "styles_header-container__1mPlp",
	"header": "styles_header__15DYH",
	"header__logo-wrapper": "styles_header__logo-wrapper__1vkn_",
	"navigation__list": "styles_navigation__list__1Fzsz",
	"navigation__item": "styles_navigation__item__35HxQ",
	"navigation__link": "styles_navigation__link__1uOXm",
	"navigation__get-btn": "styles_navigation__get-btn__18gti",
	"activator": "styles_activator__1uwyn",
	"arrow": "styles_arrow__3Uq4W"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRhOGQ2N2RmYjFlZTVjYjQ4OTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0hBQTREO0FBQ3RHO0FBQ0E7QUFDQSwyRUFBMkUscUJBQXFCLEdBQUcseURBQXlELHNCQUFzQix3Q0FBd0MsbUJBQW1CLDJDQUEyQyw4QkFBOEIsMkNBQTJDLEdBQUcsdUVBQXVFLHFCQUFxQixxQkFBcUIsR0FBRyxxQ0FBcUMsY0FBYyxHQUFHLG1DQUFtQyxvQkFBb0IsR0FBRyxtQ0FBbUMsaUJBQWlCLDBCQUEwQix3Q0FBd0MsdUJBQXVCLEdBQUcseUNBQXlDLG1CQUFtQixHQUFHLHNDQUFzQyw4QkFBOEIsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixzQ0FBc0Msd0JBQXdCLEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLDhCQUE4QixhQUFhLHlCQUF5Qix1QkFBdUIsK0JBQStCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLGtCQUFrQixnQkFBZ0IsZUFBZSwwQkFBMEIsc0NBQXNDLHNDQUFzQyxHQUFHLE9BQU8sK0hBQStILFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsMERBQTBELDJCQUEyQix1QkFBdUIsbUJBQW1CLDBCQUEwQiw0Q0FBNEMsdUJBQXVCLHVDQUF1Qyw2QkFBNkIsMkJBQTJCLDJCQUEyQixTQUFTLFdBQVcsS0FBSyxxQkFBcUIsbUJBQW1CLDBCQUEwQixPQUFPLG1CQUFtQix3QkFBd0IsT0FBTyxtQkFBbUIscUJBQXFCLDhCQUE4Qiw0Q0FBNEMsdUJBQXVCLGlCQUFpQixxQkFBcUIsU0FBUyxPQUFPLHFCQUFxQixrQ0FBa0MsMkJBQTJCLE9BQU8sS0FBSyxvQkFBb0IseUJBQXlCLHdDQUF3QywwQkFBMEIsS0FBSyxnQkFBZ0IsdUJBQXVCLGVBQWUsaUJBQWlCLDZCQUE2QiwyQkFBMkIsbUNBQW1DLGlDQUFpQyxrQ0FBa0MsZ0NBQWdDLG9CQUFvQixvQkFBb0IsbUJBQW1CLDBCQUEwQixrQ0FBa0MsT0FBTyxTQUFTLGdCQUFnQixpQkFBaUIsbUJBQW1CO0FBQ2h6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19oZWFkZXItY29udGFpbmVyX18xbVBscCB7XFxuICBtYXJnaW4tdG9wOiA1OHB4O1xcbn1cXG4uc3R5bGVzX2hlYWRlci1jb250YWluZXJfXzFtUGxwIC5zdHlsZXNfaGVhZGVyX18xNURZSCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0eWxlc19oZWFkZXItY29udGFpbmVyX18xbVBscCAuc3R5bGVzX2hlYWRlcl9fbG9nby13cmFwcGVyX18xdmtuXyB7XFxuICBtYXgtd2lkdGg6IDMxMnB4O1xcbiAgbWF4LWhlaWdodDogMzVweDtcXG59XFxuXFxuLnN0eWxlc19uYXZpZ2F0aW9uX19saXN0X18xRnpzeiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9faXRlbV9fMzVIeFEge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2xpbmtfXzF1T1htIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2xpbmtfXzF1T1htOmhvdmVyIHtcXG4gIGNvbG9yOiAjRkZDMjBBO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2dldC1idG5fXzE4Z3RpIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkMyMEE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdHlsZXNfYWN0aXZhdG9yX18xdXd5biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNFM0FGMTE7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc3R5bGVzX2Fycm93X18zVXE0VyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zdHlsZXNfYXJyb3dfXzNVcTRXOmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAxMnB4IDAgMCA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA4cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjRkZDMjBBO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vY29uc3RhbnRzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdCQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7S0FBQSxzQkFBQTtVQUFBLDhCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFTRTtFQUVFLFNBQUE7QUFQSjtBQVVFO0VBQ0UsZUFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQ2xDQztBRHlCTDtBQVVJO0VBQ0UsY0NuQ0Q7QUQyQkw7QUFZRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0Esa0JBQUE7QUFYQTtBQVlFO0VBQ0UsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQ2hFQztFRGlFRCxpQ0FBQTtVQUFBLHlCQUFBO0FBVkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vY29uc3RhbnRzL3ZhcnNcXFwiO1xcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAmX19sb2dvLXdyYXBwZXIge1xcclxcbiAgICAgIG1heC13aWR0aDogMzEycHg7XFxyXFxuICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6ICRmejtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICR5YztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZ2V0LWJ0bntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGQzIwQTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZhdG9yIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI0UzQUYxMTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxucG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAwIDVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGhlaWdodDogOHB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICR5YztcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCIkZno6IDEuMjVyZW07XFxyXFxuJHljOiAjRkZDMjBBO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlci1jb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyLWNvbnRhaW5lcl9fMW1QbHBcIixcblx0XCJoZWFkZXJcIjogXCJzdHlsZXNfaGVhZGVyX18xNURZSFwiLFxuXHRcImhlYWRlcl9fbG9nby13cmFwcGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fbG9nby13cmFwcGVyX18xdmtuX1wiLFxuXHRcIm5hdmlnYXRpb25fX2xpc3RcIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fbGlzdF9fMUZ6c3pcIixcblx0XCJuYXZpZ2F0aW9uX19pdGVtXCI6IFwic3R5bGVzX25hdmlnYXRpb25fX2l0ZW1fXzM1SHhRXCIsXG5cdFwibmF2aWdhdGlvbl9fbGlua1wiOiBcInN0eWxlc19uYXZpZ2F0aW9uX19saW5rX18xdU9YbVwiLFxuXHRcIm5hdmlnYXRpb25fX2dldC1idG5cIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fZ2V0LWJ0bl9fMThndGlcIixcblx0XCJhY3RpdmF0b3JcIjogXCJzdHlsZXNfYWN0aXZhdG9yX18xdXd5blwiLFxuXHRcImFycm93XCI6IFwic3R5bGVzX2Fycm93X18zVXE0V1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==