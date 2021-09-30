function solve(browser, arr) {
    let actions = {
        Open: open,
        Close: close,
        'Clear History and Cache': clear
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Clear History and Cache') {
            let [action, tab] = arr[i].split(' ');

            actions[action](tab);
        } else {
            actions[arr[i]]();
        }
    }

    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);

    function open(tab) {
        browser['Open Tabs'].push(tab);
        browser['Browser Logs'].push(`Open ${tab}`);
    }

    function close(tab) {
        if (browser['Open Tabs'].includes(tab)) {
            browser['Open Tabs'].splice(browser['Open Tabs'].indexOf(tab), 1);

            browser['Recently Closed'].push(tab);
            browser['Browser Logs'].push(`Close ${tab}`);
        }
    }

    function clear() {
        browser['Open Tabs'] = [];
        browser['Recently Closed'] = [];
        browser['Browser Logs'] = [];
    }
}

/*
solve(
    {
        'Browser Name': 'Google Chrome',
        'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
        'Recently Closed': ['Yahoo', 'Gmail'],
        'Browser Logs': [
            'Open YouTube',
            'Open Yahoo',
            'Open Google Translate',
            'Close Yahoo',
            'Open Gmail',
            'Close Gmail',
            'Open Facebook'
        ]
    },
    ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);
*/
solve(
    {
        'Browser Name': 'Mozilla Firefox',
        'Open Tabs': ['YouTube'],
        'Recently Closed': ['Gmail', 'Dropbox'],
        'Browser Logs': [
            'Open Gmail',
            'Close Gmail',
            'Open Dropbox',
            'Open YouTube',
            'Close Dropbox'
        ]
    },
    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);
