function browserLaunch(browserType) {
    if (browserType.toLowerCase == "chrome"){
        console.log(`${browserType} is launched`)
    } else if (browserType.toLowerCase == "edge") {
        console.log(`${browserType} is launched`)
    } else if (browserType.toLowerCase == "firefox") {
        console.log(`${browserType} is launched`)
    } else  {
         console.log(`${browserType} is launched`)
    }
}
browserLaunch('EDGE')

function runTests(runType){
    switch(runType){
        case "smoke":
            console.log(`${runType}`)
            break
        case "sanity":
            console.log(`${runType}`)
            break
        case "regression":
            console.log(`${runType}`)
            break
        default:
            console.log("smoke")
    }

}

browserLaunch('Edge')
runTests("asdasd")


//--------------------------------------------------------------------------------------------------
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.
// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
// a) launchBrowser need to take input as browserName (string) and do not return any
// - use if-else (chrome or otherwise)
// - Print the value
// b) runTests need to take input as testType (string) and do not return any
// - use switch case (smoke, sanity, regression, default (smoke))
// - Print the values
// Call that function from the javascript