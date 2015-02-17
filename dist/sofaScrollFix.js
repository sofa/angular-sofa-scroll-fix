/**
 * angular-sofa-scroll-fix - v0.1.0 - Tue Feb 17 2015 16:10:35 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa.scrollFix', [])
    .directive('sofaScrollFix', function() {

        'use strict';
        //This code is inspired by https://github.com/joelambert/ScrollFix
        //but was turned into a angular directive

        //It partly works around scrolling issues on iOS where the elastic
        //scrolling comes into our way when using overflow:scroll sub elements

        return {
            restrict: 'A',
            link: function(scope, $element){

                var startY, 
                    startTopScroll,
                    element = $element[0];

                $element.bind('touchstart', function(event){
                    startY = event.touches[0].pageY;
                    startTopScroll = element.scrollTop;

                    if(startTopScroll <= 0) {
                        element.scrollTop = 1;
                    }

                    if(startTopScroll + element.offsetHeight >= element.scrollHeight) {
                        element.scrollTop = element.scrollHeight - element.offsetHeight - 1;
                    }
                });
            }
        };
    });
}(angular));
