Chrome Extension Icon Tester
======

Goggle Chrome extension for testing Chrome extension icons displayed in Google Chrome toolbar.

Create by Mike Chambers (mikechambers@gmail.com)

[https://github.com/mikechambers/pizone](https://github.com/mikechambers/pizone)


# Usage

Testing your icons involves a couple of steps:

1. Install extension
2. Create your icons, and export at appropriate sizes
3. Add icon paths to the src/scripts/background.js file
4. Reload extension in [chrome://extensions/](chrome://extensions/)
5. Toggle through icons by clicking the icon on the Chrome toolbar

## Installation

1. Open Google Chrome and navigate to [chrome://extensions/](chrome://extensions/)
2. Make sure developer mode is enabled by toggling the "Developer mode" toggle in the top right of the screen.
3. Click "LOAD UNPACKED" button, and navigate to the "src" directory of this extension.

You should now have an entry in the extensions screen titled "Chrome Extension Icon Tester" and see a circle icon with threee circles in your Chrome tool bar. Click the extension to cycle through the default icons and badges.

## Create Icons

You can find information on creating icons for Chrome extensions [here](https://developer.chrome.com/extensions/browserAction#method-setIcon).

In general, you need to create multiple sizes (16px, 32px, 48px, 64px and 128px) and Chrome will use the appropriate size depending on screen resolution. For testing, you can just create the largest size, and Chrome will automatically resize it.

The project includes an Illustrator file setup with two art-boards (on and off modes). If you go to `File > Export Screens`, it is automatically configured to resize the art-board and export at all of the appropriate sizes.

Icons should be exported to the `src/images` directory.

## Add Icon Entries to background.js

Once your icons have been exported, you need to add them to the `src/scripts/background.js` file. Note, if you are only testing two icons states, you can just overwrite the existing icons in `src/images` and you will not need edit the `background.js` file.

By default, it is configured to toggle between two sets of icons, although you can add as many as you like.

```
let icons = [
	//icon 1
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

	//icon 2
	{
	    "path":{
	        "16":"images/icon-off-16.png",
	        "32":"images/icon-off-32.png",
	        "48":"images/icon-off-48.png",
	        "64":"images/icon-off-64.png",
	        "128":"images/icon-off-128.png"
	    },
	    "text":"On",
	    "color": "#FF0000" //clear
	}
];
```

You can also add a badge and text by setting the "text" and "color" properties. Color can be specified as a CSS value, such as #FF0000, or as an RGBA array of values (between 0 and 255) such as [255, 0, 0, 255].

If you do not want to display a badge, set test to an empty string ("") and set color to be transparent [0,0,0,0]

## Reload Extension

Once you have added your icons, reload the extension:

1. Navigate to [chrome://extensions/](chrome://extensions/)
2. Find the Chrome Extension Icon card, and click the refresh icon

If you get an error, make sure there are no typos / issues in the background.js file.

Your new icons should now be displayed in the Chrome toolbar.

## Toggle Icons

You can now toggle through the icons and badges by clicking the icon in the toolbar.

If something doesn't seems to work, you can view errors by navigating to [chrome://extensions/](chrome://extensions/) and click "inspect views background page" for the Chrome Extension Icon card.


