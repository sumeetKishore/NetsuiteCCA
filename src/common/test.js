/**
 *@NApiVersion 2.0
 *@NScriptType BundleInstallationScript
 */
define([], function() {

    function checkPrerequisites() {
        if (!runtime.isFeatureInEffect({ feature: 'TIMEOFFMANAGEMENT' }))
            throw 'The TIMEOFFMANAGEMENT feature must be enabled. Please enable the feature and try again.';
    }

    return {
        beforeInstall: function beforeInstall(params) {
            checkPrerequisites();
        },
        beforeUpdate: function beforeUpdate(params) {
            checkPrerequisites();
        }
    }
});
