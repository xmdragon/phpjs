// Main source we want to test
load('/home/kevin/workspace/plutonia-phpjs/functions/array/array_pop.js');

window.location = '/home/kevin/workspace/plutonia-phpjs/_helpers/tester.htm';
window.onload = function(){
    print('## SETS ##');
    // Execute Example Code
    returns = array_pop([0,1,2]);;    
    
    // Compare call return value
    success = tester_comparer(returns, 2);
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
}
