/*
	Copyright 2018
	Mike Chambers
	mikechambers@gmail.com

	http://www.mikechambers.com
    https://github.com/mikechambers/ChromeExtensionIconTester
    http://mikechambers.com/blog/2018/03/25/google-chrome-extension-for-testing-chrome-extension-icons/


    The MIT License (MIT)

    Copyright (c) 2018 Mike Chambers (mikechambers@gmail.com)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global localStorage, window, $, webkitNotifications, chrome */

(function () {
    
    //icon sets. Note, chrome will use the most appropriate size from the icon
    //sizes specificed. You dont have to specify all sizes. Just delete lines
    //you dont use.
    //
    //You can also add more that two icon sets.
    //
    //If you want to display a badge, set the text and color for each item.
    //to not display any badge, just set text to "" and badge to [0,0,0,0]
    let icons = [
        {
            "path":{
                "16":"images/icon-on-16.png",
                "32":"images/icon-on-32.png",
                "48":"images/icon-on-48.png",
                "64":"images/icon-on-64.png",
                "128":"images/icon-on-128.png"
            },
            "text":"",
            "color":[0,0,0,0] //clear
        },
        {
            "path":{
                "16":"images/icon-off-16.png",
                "32":"images/icon-off-32.png",
                "48":"images/icon-off-48.png",
                "64":"images/icon-off-64.png",
                "128":"images/icon-off-128.png"
            },
            "text":"On",
            "color": "#FF0000" //red
        }
    ];

    let iconIndex = 0;

    function updateBadge(text, color) {
        chrome.browserAction.setBadgeBackgroundColor({color: color});
        chrome.browserAction.setBadgeText({"text": text});
    }
    
    var onIconClick = function(tab) {

        iconIndex++;

        if(iconIndex == icons.length) {
            iconIndex = 0;
        }

        let = details = icons[iconIndex];

        let d = {"path": details.path};

        chrome.browserAction.setIcon(d);

        updateBadge(details.text, details.color);

    }

    function init() {
                
        updateBadge("", [0, 0, 0, 0]);

        chrome.browserAction.onClicked.addListener(onIconClick);
    }

    init();
}());