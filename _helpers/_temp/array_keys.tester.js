// Main source we want to test
load('/home/kevin/workspace/plutonia-phpjs/functions/array/array_keys.js');

window.location = '/home/kevin/workspace/plutonia-phpjs/_helpers/tester.htm';
window.onload = function(){
    print('## SETS ##');
    // Execute Example Code
    returns = array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );;    
    
    // Compare call return value
    success = tester_comparer(returns, {0: 'firstname', 1: 'surname'});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
}
