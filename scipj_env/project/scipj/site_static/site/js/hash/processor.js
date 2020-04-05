

function stripArray(string1, array2) {
    let array1 = string1.split(';');
    for (i=0 ; i<array1.length; i++) {
        if (i % 2 == 1) {
            var string = array1[i];
            array2.push(string.substring(0, string.length-4));
        }
    }
}
let algo_steps_header = []; let algo_steps_desc = [];
stripArray(algo_steps_header_tmp, algo_steps_header);
stripArray(algo_steps_desc_tmp, algo_steps_desc);