
var rotator = {};
function make360(subject) {
    rotator = WR360.ImageRotator.Create('animation');
    rotator.licenseFileURL = './wr/license.lic';
    if (subject == 'umbrella') {
        rotator.settings.configFileURL = './wr/360_assets/heroumbrella1.7/heroumbrella1.7.xml'; // Specific to this page
    } else {
        rotator.settings.configFileURL = './wr/360_assets/testRotatingFan3.12/testRotatingFan3.12.xml'; // Specific to this page
    }
    rotator.settings.graphicsPath = './wr/imagerotator/html/img/basic';
    rotator.settings.googleEventTracking = false;
    rotator.settings.responsiveBaseWidth = 0;
    rotator.settings.responsiveMinHeight = 0;
    rotator.runImageRotator();
}

