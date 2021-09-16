function loadingBar(progressStatus) {
    let statusMessage = progressStatus + '% ';
    if (progressStatus !== 100) {
        statusMessage += '[';
        for (let i = 0; i < 100; i += 10) {
            if (progressStatus > i) {
                statusMessage += '%';
            } else {
                statusMessage += '.';
            }
        }

        statusMessage += ']';

        console.log(statusMessage);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}