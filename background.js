"use strict";

chrome.commands.onCommand.addListener(cmd => {
	if (cmd == "new-tab") {
		let q = {active: true, currentWindow: true};
		chrome.tabs.query(q, tabs => {
			chrome.tabs.create({
				index: tabs[0].index + 1,
				openerTabId: tabs[0].id // not sure about this
			});
		});
	}
});
